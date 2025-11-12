import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Categories to generate summaries for
const categories = ['politics', 'technology', 'climate', 'economy']

// Locations to generate category summaries for (China and USA for now)
const locations = [
  { name: 'China', type: 'country', lat: 35.0, lng: 105.0 },
  { name: 'United States', type: 'country', lat: 37.0902, lng: -95.7129 },
]

async function generateCategorySummary(
  locationName: string,
  category: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🤖 Generating ${category} summary for ${locationName}...`)

  // Map category names to what's in the database
  const categoryMap: { [key: string]: string[] } = {
    politics: ['politics', 'World'],
    technology: ['technology', 'Technology'],
    climate: ['climate', 'environment', 'weather'],
    economy: ['economy', 'business', 'Business'],
  }

  // Fetch stories for this location matching the category
  const categoryKeywords = categoryMap[category] || [category]

  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
      category: {
        in: categoryKeywords
      }
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 50,
  })

  console.log(`📰 Found ${stories.length} ${category} stories for ${locationName}`)

  if (stories.length === 0) {
    console.log(`⚠️  No ${category} stories found for ${locationName} - skipping`)
    return {
      summary: '',
      issues: [],
      topStories: [],
    }
  }

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 50)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}`
    )
    .join('\n\n')

  // Generate AI summary focused on the category
  const prompt = `You are a geopolitical analyst specializing in ${category}. Analyze the following news stories about ${locationName} and create a comprehensive summary focused specifically on ${category.toUpperCase()} developments.

NEWS STORIES (${stories.length} total):
${storySummaries}

Please provide:

1. A detailed summary (300-400 words) focusing ONLY on ${category} developments in ${locationName}. Include:
   - Current ${category} situation and recent developments
   - Key trends and patterns in the ${category} sector
   - Important ${category} issues and challenges
   - Future outlook for ${category} in this location

2. List 3-5 major ${category} issues (brief phrases, not full sentences)

3. Select the top 5-7 most important ${category} news stories from the list above

Format your response EXACTLY as follows:

## Summary
[Your detailed ${category}-focused summary here]

## Issues
- Issue 1
- Issue 2
- Issue 3

## Top Stories
1. Story number from list
2. Story number from list
3. Story number from list

Keep the tone analytical and factual, similar to The Financial Times.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
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

  console.log(`✅ Generated ${category} summary for ${locationName}`)
  console.log(`   - Summary: ${summary.substring(0, 100)}...`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting category-specific summary generation for China and USA\n')

  for (const location of locations) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    for (const category of categories) {
      try {
        const { summary, issues, topStories } = await generateCategorySummary(
          location.name,
          category
        )

        // Skip if no stories found
        if (!summary) {
          console.log(`⏭️  Skipping ${category} for ${location.name} - no stories`)
          continue
        }

        // Save to database
        await prisma.locationSummary.upsert({
          where: {
            name_type_category: {
              name: location.name,
              type: location.type,
              category: category,
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
            type: location.type,
            country: location.name,
            lat: location.lat,
            lng: location.lng,
            category: category,
            summary,
            issues: JSON.stringify(issues),
            topStories: JSON.stringify(topStories),
            storyCount: topStories.length,
          },
        })

        console.log(`💾 Saved ${category} summary for ${location.name}`)

        // Rate limiting - wait 1 second between API calls
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } catch (error) {
        console.error(`❌ Error generating ${category} summary for ${location.name}:`, error)
      }
    }
  }

  console.log('\n✅ Category summary generation complete!')
  console.log(`Generated summaries for ${categories.length} categories × ${locations.length} locations`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
