import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import { HOST_PERSONALITIES, getRandomHost, type HostStyle } from '@/lib/global-news/hostPersonalities'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Tavily AI search for current news context
async function searchTavily(query: string): Promise<string> {
  try {
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.TAVILY_API_KEY,
        query: query,
        search_depth: 'advanced',
        include_answer: true,
        include_raw_content: false,
        max_results: 5,
        include_domains: [],
        exclude_domains: []
      }),
    })

    if (!response.ok) {
      console.warn(`Tavily API error: ${response.statusText}`)
      return ''
    }

    const data = await response.json()

    let result = ''

    if (data.answer) {
      result += `${data.answer}\n\n`
    }

    if (data.results && data.results.length > 0) {
      result += 'Recent sources:\n\n'
      data.results.forEach((item: any, idx: number) => {
        result += `${idx + 1}. ${item.title}\n`
        result += `   ${item.content}\n`
        result += `   Source: ${item.url}\n\n`
      })
    }

    return result || ''
  } catch (error) {
    console.error('Tavily search error:', error)
    return ''
  }
}

interface StorySource {
  title: string
  url: string
  outlet: string
}

async function generateStoryNarrative(
  title: string,
  description: string,
  location: string,
  category: string,
  hostStyle: HostStyle,
  sources: StorySource[]
): Promise<{
  narrative: string
  globalSignificance: string
  affectedPopulation: string
}> {
  // Search for current context about this story
  const searchQuery = `${title} ${location} latest news ${new Date().toISOString().split('T')[0]}`
  console.log(`🔍 Searching for: ${searchQuery}`)

  const searchResults = await searchTavily(searchQuery)

  const sourcesText = sources.map((s, i) => `${i + 1}. ${s.title} (${s.outlet})\n   ${s.url}`).join('\n')

  const prompt = `You are writing a global news briefing in your distinctive style. Write about this story:

**Story Title:** ${title}
**Location:** ${location}
**Category:** ${category}
**Description:** ${description}

**Sources:**
${sourcesText}

${searchResults ? `**Latest Context:**\n${searchResults}\n` : ''}

Your task:
1. Write a compelling narrative (2-6 paragraphs) explaining this story in your voice
2. Help readers understand WHY this matters globally, not just WHAT happened
3. Include context about who is affected and the broader implications
4. Be specific with names, numbers, and details when relevant
5. Make it engaging and accessible for Western readers who want to understand the world

Return your response as JSON with this exact structure:
{
  "narrative": "Your 2-6 paragraph narrative here. Write in plain prose, be conversational.",
  "globalSignificance": "1-2 sentences on why this matters globally",
  "affectedPopulation": "Who this affects (be specific: millions? which groups?)"
}`

  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      system: HOST_PERSONALITIES[hostStyle],
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })

    const textContent = response.content.find(
      (block): block is Anthropic.TextBlock => block.type === 'text'
    )

    if (!textContent) {
      throw new Error('No text content in response')
    }

    // Parse JSON response
    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('No JSON found in response')
    }

    const parsed = JSON.parse(jsonMatch[0])

    return {
      narrative: parsed.narrative || textContent.text,
      globalSignificance: parsed.globalSignificance || 'Significant global development',
      affectedPopulation: parsed.affectedPopulation || 'Global impact'
    }
  } catch (error) {
    console.error('Error generating narrative:', error)
    // Fallback
    return {
      narrative: `${description}\n\nThis story from ${location} represents an important development in ${category}. The situation continues to evolve and has implications for regional stability and international relations.`,
      globalSignificance: 'Developing story with regional and international implications',
      affectedPopulation: 'Local populations and international stakeholders'
    }
  }
}

export async function GET(request: NextRequest) {
  // Optional: Add authentication
  const authHeader = request.headers.get('authorization')
  const expectedToken = process.env.CRON_SECRET || 'your-secret-token'

  if (authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    console.log('🌍 Starting global news generation...')

    // Get top 100 most important recent stories
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    const topStories = await prisma.story.findMany({
      where: {
        pubDate: {
          gte: sevenDaysAgo
        }
      },
      orderBy: [
        { importance: 'desc' },
        { pubDate: 'desc' }
      ],
      take: 100
    })

    console.log(`📊 Found ${topStories.length} stories to process`)

    // Mark old stories as inactive
    await prisma.globalNewsStory.updateMany({
      where: {
        isActive: true
      },
      data: {
        isActive: false
      }
    })

    const publishDate = new Date()
    const generatedStories: any[] = []

    // Generate narratives for each story
    for (let i = 0; i < topStories.length; i++) {
      const story = topStories[i]
      const rank = i + 1

      console.log(`\n📝 Processing ${rank}/100: ${story.title}`)

      // Randomly assign a host style
      const hostStyle = getRandomHost()
      console.log(`   👤 Writer: ${hostStyle}`)

      try {
        const sources: StorySource[] = [
          {
            title: story.title,
            url: story.link,
            outlet: story.source
          }
        ]

        const { narrative, globalSignificance, affectedPopulation } = await generateStoryNarrative(
          story.title,
          story.description || '',
          story.country || 'Unknown',
          story.category || 'General',
          hostStyle,
          sources
        )

        const globalStory = await prisma.globalNewsStory.create({
          data: {
            rank,
            title: story.title,
            sourceStoryId: story.id,
            lat: story.lat,
            lng: story.lng,
            city: story.city,
            country: story.country || 'Unknown',
            region: story.region,
            narrative,
            authorStyle: hostStyle,
            globalSignificance,
            affectedPopulation,
            category: story.category || 'General',
            publishDate,
            isActive: true,
            sources: JSON.stringify(sources)
          }
        })

        generatedStories.push(globalStory)
        console.log(`   ✅ Generated story ${rank}`)

        // Rate limiting - wait 2 seconds between API calls
        if (i < topStories.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000))
        }
      } catch (error) {
        console.error(`   ❌ Error generating story ${rank}:`, error)
        // Continue with next story
      }
    }

    console.log(`\n✅ Global news generation completed: ${generatedStories.length}/100 stories`)

    return NextResponse.json({
      success: true,
      message: `Generated ${generatedStories.length} global news stories`,
      count: generatedStories.length,
      publishDate: publishDate.toISOString(),
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error('❌ Error generating global news:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  return GET(request)
}
