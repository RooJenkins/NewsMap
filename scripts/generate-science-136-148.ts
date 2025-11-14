import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Check for API key
if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your-api-key-here') {
  console.error('❌ Error: ANTHROPIC_API_KEY not set in environment')
  console.error('Please set a valid Anthropic API key in .env file')
  process.exit(1)
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 136-148 - Science & Research summaries batch (Taiwan through Zimbabwe)
// Note: Using database country names (US, UK, UAE instead of full names)
const countries = [
  { name: 'Taiwan', dbName: 'Taiwan', type: 'country', lat: 23.6978, lng: 120.9605 },
  { name: 'Tanzania', dbName: 'Tanzania', type: 'country', lat: -6.3690, lng: 34.8888 },
  { name: 'Thailand', dbName: 'Thailand', type: 'country', lat: 15.8700, lng: 100.9925 },
  { name: 'Trinidad and Tobago', dbName: 'Trinidad and Tobago', type: 'country', lat: 10.6918, lng: -61.2225 },
  { name: 'Tunisia', dbName: 'Tunisia', type: 'country', lat: 33.8869, lng: 9.5375 },
  { name: 'Turkey', dbName: 'Turkey', type: 'country', lat: 38.9637, lng: 35.2433 },
  { name: 'Turkmenistan', dbName: 'Turkmenistan', type: 'country', lat: 38.9697, lng: 59.5563 },
  { name: 'Uganda', dbName: 'Uganda', type: 'country', lat: 1.3733, lng: 32.2903 },
  { name: 'Ukraine', dbName: 'Ukraine', type: 'country', lat: 48.3794, lng: 31.1656 },
  { name: 'United Arab Emirates', dbName: 'UAE', type: 'country', lat: 23.4241, lng: 53.8478 },
  { name: 'United Kingdom', dbName: 'UK', type: 'country', lat: 55.3781, lng: -3.4360 },
  { name: 'United States', dbName: 'US', type: 'country', lat: 39.8283, lng: -98.5795 },
  { name: 'Uruguay', dbName: 'Uruguay', type: 'country', lat: -32.5228, lng: -55.7658 },
  { name: 'Uzbekistan', dbName: 'Uzbekistan', type: 'country', lat: 41.3775, lng: 64.5853 },
  { name: 'Venezuela', dbName: 'Venezuela', type: 'country', lat: 6.4238, lng: -66.5897 },
  { name: 'Vietnam', dbName: 'Vietnam', type: 'country', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', dbName: 'Yemen', type: 'country', lat: 15.5527, lng: 48.5164 },
  { name: 'Zambia', dbName: 'Zambia', type: 'country', lat: -13.1339, lng: 27.8493 },
  { name: 'Zimbabwe', dbName: 'Zimbabwe', type: 'country', lat: -19.0154, lng: 29.1549 },
]

async function generateScienceSummary(
  locationName: string,
  dbName: string,
  category: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🔬 Generating ${category} summary for ${locationName}...`)

  // Fetch stories for this location (all categories - we'll use context to focus on science)
  const stories = await prisma.story.findMany({
    where: {
      country: dbName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100, // Get more stories to have better context
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

  // Generate AI summary with Ed Yong / Carl Zimmer style voice
  const prompt = `You are a science journalist writing in the voice of Ed Yong and Carl Zimmer - renowned science writers known for making complex research accessible and compelling. Analyze the following news stories about ${locationName} and create a comprehensive summary focused specifically on SCIENCE & RESEARCH developments.

NEWS STORIES (${stories.length} total):
${storySummaries}

Please provide a detailed science & research analysis (2,500-3,500 characters) covering:

MAJOR RESEARCH INSTITUTIONS:
- Leading universities and research centers
- Government research laboratories and institutes
- Private sector R&D facilities
- International research collaborations and partnerships

R&D INVESTMENT:
- National R&D spending as percentage of GDP
- Government vs. private sector research funding
- Major funding initiatives and programs
- Trends in research investment

KEY RESEARCH AREAS & BREAKTHROUGHS:
- Dominant fields of scientific inquiry
- Recent major discoveries or innovations
- Areas of international competitiveness
- Emerging research frontiers
- Notable publications in top-tier journals

NOBEL PRIZES & RECOGNITION:
- Nobel laureates and their contributions
- Other major international scientific awards
- Recognition of scientific achievements
- Historical scientific legacy

STEM EDUCATION & TALENT PIPELINE:
- Quality of STEM education at all levels
- University science and engineering programs
- PhD production and graduate research
- Brain drain vs. brain gain trends
- International student and researcher mobility

SCIENCE POLICY & INFRASTRUCTURE:
- National science policy and strategy
- Research funding mechanisms
- Scientific institutions and governance
- Support for basic vs. applied research
- Technology transfer and commercialization

Write in Ed Yong/Carl Zimmer's style - clear, engaging, and deeply informed. Make the science accessible while respecting its complexity. Use specific examples, be precise about achievements and challenges, and capture the human dimension of scientific progress.

Format your response EXACTLY as follows:

## Summary
[Your detailed science-focused summary here, 2500-3500 characters]

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

Keep the tone clear, engaging, and scientifically rigorous - similar to how Ed Yong or Carl Zimmer would explain scientific developments and research ecosystems.`

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

  console.log(`✅ Generated ${category} summary for ${locationName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation for countries 136-148\n')
  console.log(`Countries to process: ${countries.map(c => c.name).join(', ')}\n`)

  let successCount = 0
  let skippedCount = 0
  let errorCount = 0

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateScienceSummary(
        location.name,
        location.dbName,
        'science'
      )

      // Skip if no stories found
      if (!summary) {
        console.log(`⏭️  Skipping ${location.name} - no stories`)
        skippedCount++
        continue
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'science',
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
          category: 'science',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`💾 Saved science summary for ${location.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating science summary for ${location.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Science & Research summary generation complete!')
  console.log('='.repeat(80))
  console.log(`Total countries processed: ${countries.length}`)
  console.log(`✅ Successfully generated: ${successCount}`)
  console.log(`⏭️  Skipped (no stories): ${skippedCount}`)
  console.log(`❌ Errors: ${errorCount}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
