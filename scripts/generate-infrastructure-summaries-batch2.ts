import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 16-30 (Belize through Costa Rica)
const countries = [
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', lat: -16.5000, lng: -68.1500 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Brunei', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
]

async function generateInfrastructureSummary(
  locationName: string,
  lat: number,
  lng: number
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🏗️  Generating infrastructure summary for ${locationName}...`)

  // Fetch recent stories for this location (all categories)
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100,
  })

  console.log(`📰 Found ${stories.length} stories for ${locationName}`)

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
  const prompt = `You are an infrastructure and urban planning expert writing in the analytical style of Norman Foster. Analyze the following news stories about ${locationName} and create a comprehensive infrastructure assessment.

NEWS STORIES (${stories.length} total):
${storySummaries}

Please provide a detailed infrastructure analysis (2,500-3,500 characters) focusing on:

TRANSPORTATION NETWORKS:
- Road infrastructure quality and coverage
- Rail systems (passenger and freight)
- Metro/subway systems in major cities
- Airport infrastructure and connectivity
- Ports and maritime infrastructure

PUBLIC TRANSIT:
- Quality and coverage of public transportation
- Urban mobility solutions
- Transit modernization efforts

URBAN PLANNING:
- City development and planning initiatives
- Smart city projects
- Sustainable urban development

MAJOR INFRASTRUCTURE PROJECTS:
- Current large-scale infrastructure projects
- Transportation expansion plans
- Infrastructure investment initiatives

INFRASTRUCTURE MAINTENANCE:
- State of existing infrastructure
- Maintenance challenges
- Renovation and upgrade programs

DIGITAL INFRASTRUCTURE:
- Broadband coverage and quality
- 5G deployment
- Digital connectivity initiatives

Write from the perspective of a world-renowned architect and urban planner. Be analytical, forward-thinking, and focus on how infrastructure shapes urban development and quality of life. Reference specific projects and developments when available in the news stories.

Also provide:
1. List 3-5 major infrastructure issues or challenges (brief phrases)
2. Identify the 5-7 most relevant infrastructure-related stories from the list

Format your response EXACTLY as follows:

## Summary
[Your detailed 2,500-3,500 character infrastructure analysis here]

## Issues
- Issue 1
- Issue 2
- Issue 3

## Top Stories
1. Story number from list
2. Story number from list
3. Story number from list

Keep the tone expert, analytical, and visionary - similar to Norman Foster's approach to urban design.`

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
  console.log('🚀 Starting infrastructure summary generation for countries 16-30\n')
  console.log(`Countries: ${countries.map(c => c.name).join(', ')}\n`)

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const country of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${country.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateInfrastructureSummary(
        country.name,
        country.lat,
        country.lng
      )

      // Skip if no stories found
      if (!summary) {
        console.log(`⏭️  Skipping ${country.name} - no stories`)
        skipCount++
        continue
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
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
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'infrastructure',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`💾 Saved infrastructure summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating infrastructure summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary generation complete!')
  console.log('='.repeat(80))
  console.log(`Total countries processed: ${countries.length}`)
  console.log(`✅ Successful: ${successCount}`)
  console.log(`⏭️  Skipped: ${skipCount}`)
  console.log(`❌ Errors: ${errorCount}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
