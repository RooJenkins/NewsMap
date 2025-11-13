import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 121-135: Senegal through Syria
const countries = [
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Slovakia', lat: 48.669, lng: 19.699 },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'South Sudan', lat: 6.877, lng: 31.307 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
]

async function generateInfrastructureSummary(
  locationName: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🏗️  Generating infrastructure summary for ${locationName}...`)

  // Fetch recent stories for this location
  // Infrastructure-related stories might be in various categories
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100, // Get more stories to find infrastructure-related ones
  })

  console.log(`📰 Found ${stories.length} total stories for ${locationName}`)

  if (stories.length === 0) {
    console.log(`⚠️  No stories found for ${locationName} - skipping`)
    return {
      summary: '',
      issues: [],
      topStories: [],
    }
  }

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 100)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}\n   Category: ${story.category || 'N/A'}`
    )
    .join('\n\n')

  // Generate AI summary with Norman Foster perspective
  const prompt = `You are a world-renowned urban planning expert and infrastructure analyst in the tradition of Norman Foster. Analyze the following news stories about ${locationName} and create a comprehensive infrastructure assessment.

NEWS STORIES (${stories.length} total):
${storySummaries}

Please provide a detailed infrastructure analysis (2,500-3,500 characters) for ${locationName} covering:

TRANSPORTATION NETWORKS:
- Road infrastructure (highways, urban roads, condition and connectivity)
- Rail systems (national railways, high-speed rail, freight networks)
- Metro/subway systems (if applicable, coverage and expansion)
- Airports (major hubs, regional airports, capacity and modernization)

PUBLIC TRANSIT QUALITY:
- Urban public transportation systems
- Accessibility and coverage
- Integration and efficiency

URBAN PLANNING:
- City development strategies
- Smart city initiatives
- Sustainability in urban design

MAJOR INFRASTRUCTURE PROJECTS:
- Current mega-projects under construction
- Planned developments
- Public-private partnerships

INFRASTRUCTURE MAINTENANCE:
- State of existing infrastructure
- Modernization efforts
- Investment levels

DIGITAL INFRASTRUCTURE:
- Broadband coverage and speed
- 5G rollout and mobile connectivity
- Digital transformation initiatives

Write in the analytical yet visionary voice of an infrastructure expert who understands both the technical and social dimensions of built environments. Focus on how infrastructure shapes quality of life, economic competitiveness, and sustainable development.

Also provide:
1. List 3-5 major infrastructure issues or developments (brief phrases)
2. Select the 5-7 most relevant infrastructure stories from the list

Format your response EXACTLY as follows:

## Summary
[Your detailed infrastructure analysis here - 2,500-3,500 characters]

## Issues
- Issue 1
- Issue 2
- Issue 3

## Top Stories
1. Story number from list
2. Story number from list
3. Story number from list

Keep the tone professional, forward-thinking, and grounded in the realities of infrastructure development.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText =
    message.content[0].type === 'text' ? message.content[0].text : ''

  // Parse the response
  const summaryMatch = responseText.match(/## Summary\s+([\s\S]*?)(?=\n## Issues|$)/i)
  const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)(?=\n## Top Stories|$)/i)
  const storiesMatch = responseText.match(/## Top Stories\s+([\s\S]*?)$/i)

  const summary = summaryMatch ? summaryMatch[1].trim() : responseText
  const issues = issuesMatch
    ? issuesMatch[1]
        .split('\n')
        .filter((line) => line.trim().startsWith('-'))
        .map((line) => line.replace(/^-\s*/, '').trim())
    : []

  // Extract story numbers and map to actual stories
  const topStories = []
  if (storiesMatch) {
    const storyNumbers = storiesMatch[1]
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => parseInt(line.match(/^\d+/)?.[0] || '0'))
      .filter((num) => num > 0 && num <= stories.length)

    for (const num of storyNumbers.slice(0, 7)) {
      const story = stories[num - 1]
      topStories.push({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      })
    }
  }

  // If no top stories extracted, use the most recent important ones
  if (topStories.length === 0) {
    topStories.push(
      ...stories.slice(0, 5).map((story) => ({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      }))
    )
  }

  console.log(`✅ Generated infrastructure summary for ${locationName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting infrastructure summary generation for countries 121-135\n')
  console.log(`Countries: ${countries.map(c => c.name).join(', ')}\n`)

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name} (${successCount + skipCount + errorCount + 1}/${countries.length})`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateInfrastructureSummary(
        location.name
      )

      // Skip if no stories found
      if (!summary) {
        console.log(`⏭️  Skipping ${location.name} - no stories`)
        skipCount++
        continue
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: 'country',
            category: 'infrastructure',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: location.name,
          type: 'country',
          country: location.name,
          lat: location.lat,
          lng: location.lng,
          category: 'infrastructure',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`💾 Saved infrastructure summary for ${location.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating infrastructure summary for ${location.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary generation complete!')
  console.log('='.repeat(80))
  console.log(`Total countries processed: ${countries.length}`)
  console.log(`✅ Successfully generated: ${successCount}`)
  console.log(`⏭️  Skipped (no stories): ${skipCount}`)
  console.log(`❌ Errors: ${errorCount}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
