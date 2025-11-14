import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 46-60: Fiji through Hungary
const locations = [
  { name: 'Fiji', type: 'country', lat: -17.7134, lng: 178.065 },
  { name: 'Finland', type: 'country', lat: 61.9241, lng: 25.7482 },
  { name: 'France', type: 'country', lat: 46.2276, lng: 2.2137 },
  { name: 'Georgia', type: 'country', lat: 42.3154, lng: 43.3569 },
  { name: 'Germany', type: 'country', lat: 51.1657, lng: 10.4515 },
  { name: 'Ghana', type: 'country', lat: 7.9465, lng: -1.0232 },
  { name: 'Greece', type: 'country', lat: 39.0742, lng: 21.8243 },
  { name: 'Guatemala', type: 'country', lat: 15.7835, lng: -90.2308 },
  { name: 'Guyana', type: 'country', lat: 4.8604, lng: -58.9302 },
  { name: 'Haiti', type: 'country', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', type: 'country', lat: 15.2000, lng: -86.2419 },
  { name: 'Hungary', type: 'country', lat: 47.1625, lng: 19.5033 },
]

async function generateInfrastructureSummary(
  locationName: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🏗️  Generating infrastructure summary for ${locationName}...`)

  // Fetch all recent stories for this location
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100,
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
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}\n   ${story.description || ''}`
    )
    .join('\n\n')

  // Generate AI summary with Norman Foster / urban planning expert perspective
  const prompt = `You are a world-renowned architect and urban planner, speaking in the analytical yet visionary style of Norman Foster. Your expertise spans transportation networks, sustainable infrastructure, and urban systems design. Analyze the following news stories about ${locationName} and create a comprehensive infrastructure assessment.

NEWS STORIES (${stories.length} total):
${storySummaries}

Based on these news stories, provide a comprehensive INFRASTRUCTURE analysis for ${locationName}. Your summary should be 2,500-3,500 characters in length.

Focus on:
- Transportation networks: roads, rail systems, metro/subway, airports, ports
- Public transit quality and accessibility
- Urban planning initiatives and smart city developments
- Major infrastructure projects (bridges, tunnels, highways, transit expansion)
- Infrastructure maintenance and modernization efforts
- Digital infrastructure: broadband networks, 5G rollout, connectivity
- Sustainable infrastructure and green building initiatives
- Infrastructure challenges and future development needs

Write from the perspective of an urban planning expert who appreciates elegant design, efficient systems, and sustainable development. Be analytical but also visionary about infrastructure potential. Reference specific projects, systems, or developments mentioned in the news when possible.

Format your response EXACTLY as follows:

## Summary
[Your detailed infrastructure-focused analysis here - MUST be 2,500-3,500 characters]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5

## Top Stories
1. Story number from list
2. Story number from list
3. Story number from list
4. Story number from list
5. Story number from list

Keep the tone sophisticated and analytical, similar to an architecture journal or urban planning publication. Focus specifically on infrastructure - if the news stories don't contain much infrastructure content, draw insights about infrastructure needs and challenges based on the broader context.`

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
  console.log('🚀 Starting infrastructure summary generation for countries 46-60\n')
  console.log('Countries: Fiji, Finland, France, Georgia, Germany, Ghana, Greece, Guatemala, Guyana, Haiti, Honduras, Hungary\n')

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const location of locations) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
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
            type: location.type,
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
          type: location.type,
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
  console.log(`Total countries processed: ${locations.length}`)
  console.log(`✅ Successfully generated: ${successCount}`)
  console.log(`⏭️  Skipped (no stories): ${skipCount}`)
  console.log(`❌ Errors: ${errorCount}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
