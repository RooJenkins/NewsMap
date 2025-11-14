import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 91-105: Mozambique through Palestine
const countries = [
  { name: 'Mozambique', type: 'country', lat: -18.665695, lng: 35.529562, country: 'Mozambique' },
  { name: 'Myanmar', type: 'country', lat: 21.9162, lng: 95.9560, country: 'Myanmar' },
  { name: 'Namibia', type: 'country', lat: -22.9576, lng: 18.4904, country: 'Namibia' },
  { name: 'Nepal', type: 'country', lat: 28.3949, lng: 84.1240, country: 'Nepal' },
  { name: 'Netherlands', type: 'country', lat: 52.1326, lng: 5.2913, country: 'Netherlands' },
  { name: 'New Zealand', type: 'country', lat: -40.9006, lng: 174.8860, country: 'New Zealand' },
  { name: 'Nicaragua', type: 'country', lat: 12.8654, lng: -85.2072, country: 'Nicaragua' },
  { name: 'Niger', type: 'country', lat: 17.6078, lng: 8.0817, country: 'Niger' },
  { name: 'Nigeria', type: 'country', lat: 9.0820, lng: 8.6753, country: 'Nigeria' },
  { name: 'North Korea', type: 'country', lat: 40.3399, lng: 127.5101, country: 'North Korea' },
  { name: 'Norway', type: 'country', lat: 60.4720, lng: 8.4689, country: 'Norway' },
  { name: 'Oman', type: 'country', lat: 21.4735, lng: 55.9754, country: 'Oman' },
  { name: 'Pakistan', type: 'country', lat: 30.3753, lng: 69.3451, country: 'Pakistan' },
  { name: 'Palestine', type: 'country', lat: 31.9522, lng: 35.2332, country: 'Palestine' },
]

async function generateInfrastructureSummary(
  locationName: string,
  category: string = 'infrastructure'
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🏗️  Generating ${category} summary for ${locationName}...`)

  // Fetch all recent stories for this location
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
    .slice(0, 50)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}`
    )
    .join('\n\n')

  // Generate AI summary with Norman Foster / urban planning expert voice
  const prompt = `You are Norman Foster, the renowned British architect and urban planning expert, analyzing infrastructure developments around the world. Write with the authority and vision of someone who has designed airports, transit systems, and urban spaces globally.

Analyze the following news stories about ${locationName} and create a comprehensive INFRASTRUCTURE summary.

NEWS STORIES (${stories.length} total):
${storySummaries}

Please provide a detailed infrastructure analysis (2,500-3,500 characters) covering:

TRANSPORTATION NETWORKS:
- Roads, highways, and motorway systems
- Rail networks (intercity, regional, metro/subway)
- Airports and aviation infrastructure
- Ports and maritime facilities
- Public transit quality and coverage

URBAN PLANNING:
- City development and master planning initiatives
- Smart city projects and urban innovation
- Sustainability and green infrastructure
- Housing and urban density challenges

MAJOR INFRASTRUCTURE PROJECTS:
- Current megaprojects (transportation, energy, water)
- International partnerships and funding
- Belt and Road or other international initiatives
- Public-private partnerships

INFRASTRUCTURE MAINTENANCE & QUALITY:
- State of existing infrastructure
- Maintenance backlogs and challenges
- Infrastructure resilience (disasters, climate)
- Quality compared to regional/global standards

DIGITAL INFRASTRUCTURE:
- Broadband and fiber optic networks
- 5G rollout and mobile coverage
- Data centers and cloud infrastructure
- Digital divide and connectivity gaps

Write in Norman Foster's authoritative yet accessible voice:
- Precise technical observations
- Vision for integrated urban systems
- Emphasis on sustainability and human-centered design
- International comparative perspective
- Forward-looking yet grounded in current realities

Format your response EXACTLY as follows:

## Summary
[Your detailed infrastructure-focused summary here, 2,500-3,500 characters]

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

Keep the tone analytical and expert-driven, like a leading architect's assessment for major clients and governments.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3000,
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
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting INFRASTRUCTURE category summary generation for countries 91-105\n')
  console.log('Countries: Mozambique through Palestine (14 countries)\n')

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateInfrastructureSummary(
        location.name,
        'infrastructure'
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
          country: location.country,
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

  console.log('\n\n' + '='.repeat(80))
  console.log('✅ INFRASTRUCTURE CATEGORY SUMMARY GENERATION COMPLETE!')
  console.log('='.repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successful: ${successCount}`)
  console.log(`   - Skipped (no stories): ${skipCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log(`   - Total countries: ${countries.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
