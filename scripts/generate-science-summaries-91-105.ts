import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries to generate science summaries for (batch: 91-105)
const countries = [
  { name: 'Mozambique', lat: -18.665695, lng: 35.529562 },
  { name: 'Myanmar', lat: 21.913965, lng: 95.956223 },
  { name: 'Namibia', lat: -22.95764, lng: 18.49041 },
  { name: 'Nepal', lat: 28.394857, lng: 84.124008 },
  { name: 'Netherlands', lat: 52.132633, lng: 5.291266 },
  { name: 'New Zealand', lat: -40.900557, lng: 174.885971 },
  { name: 'Nicaragua', lat: 12.865416, lng: -85.207229 },
  { name: 'Niger', lat: 17.607789, lng: 8.081666 },
  { name: 'Nigeria', lat: 9.081999, lng: 8.675277 },
  { name: 'North Korea', lat: 40.339852, lng: 127.510093 },
  { name: 'Norway', lat: 60.472024, lng: 8.468946 },
  { name: 'Oman', lat: 21.512583, lng: 55.923255 },
  { name: 'Pakistan', lat: 30.375321, lng: 69.345116 },
  { name: 'Palestine', lat: 31.952162, lng: 35.233154 },
]

async function generateScienceSummary(
  locationName: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n=, Generating science & research summary for ${locationName}...`)

  // Fetch recent stories for this location
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100, // Get more stories to have enough context
  })

  console.log(`=� Found ${stories.length} stories for ${locationName}`)

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 50)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}\n   Category: ${story.category || 'N/A'}`
    )
    .join('\n\n')

  // Generate AI summary with Ed Yong / Carl Zimmer style
  const prompt = `You are a science journalist in the style of Ed Yong and Carl Zimmer, known for making complex scientific topics accessible while maintaining rigor and nuance. Analyze the following news stories about ${locationName} and create a comprehensive summary of the country's SCIENCE & RESEARCH landscape.

${stories.length > 0 ? `RECENT NEWS STORIES (for context):
${storySummaries}

` : ''}Please create a detailed science & research profile for ${locationName} (2,500-3,500 characters) that covers:

1. **Major Research Institutions**: Universities, national labs, research centers
2. **R&D Investment**: Research spending as % of GDP, funding trends, public vs private investment
3. **Key Research Areas**: Dominant fields, emerging specialties, areas of excellence
4. **Notable Breakthroughs**: Recent discoveries, innovations, scientific achievements
5. **Nobel Prizes & Recognition**: Nobel laureates (if any), major scientific awards
6. **STEM Education Pipeline**: University enrollment, PhD production, brain drain/gain patterns
7. **Science Policy**: Government priorities, research funding mechanisms, international collaboration

Write in the engaging, narrative style of Ed Yong and Carl Zimmer:
- Use vivid language and concrete examples
- Balance optimism about scientific progress with honest assessment of challenges
- Humanize the science by mentioning researchers and institutions
- Connect scientific developments to broader societal impacts
- Be specific with data points when possible (but don't invent statistics)

For countries with limited scientific infrastructure, be honest about the challenges while highlighting potential, emerging efforts, and regional collaborations.

Target length: 2,500-3,500 characters

Format your response EXACTLY as follows:

## Summary
[Your detailed science & research summary here - 2,500-3,500 characters]

## Issues
- Issue 1 (brief phrase)
- Issue 2 (brief phrase)
- Issue 3 (brief phrase)
- Issue 4 (brief phrase)
- Issue 5 (brief phrase)

## Top Stories
${stories.length > 0 ? '1. Story number from list\n2. Story number from list\n3. Story number from list\n4. Story number from list\n5. Story number from list' : 'N/A - No recent stories available'}`

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
  if (storiesMatch && stories.length > 0) {
    const storyNumbers = storiesMatch[1]
      .split('\n')
      .filter((line) => line.trim() && !line.includes('N/A'))
      .map((line) => parseInt(line.match(/^\d+/)?.[0] || '0'))
      .filter((num) => num > 0 && num <= stories.length)

    for (const num of storyNumbers.slice(0, 7)) {
      const story = stories[num - 1]
      if (story) {
        topStories.push({
          title: story.title,
          source: story.source,
          link: story.link,
          pubDate: story.pubDate.toISOString(),
        })
      }
    }
  }

  // If no top stories extracted, use the most recent important ones
  if (topStories.length === 0 && stories.length > 0) {
    topStories.push(
      ...stories.slice(0, 5).map((story) => ({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      }))
    )
  }

  console.log(` Generated science summary for ${locationName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('=� Starting SCIENCE & RESEARCH summary generation')
  console.log(`=� Processing ${countries.length} countries: Mozambique through Palestine\n`)

  let successCount = 0
  let errorCount = 0

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateScienceSummary(
        location.name
      )

      // Save to database with category='science'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: 'country',
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
          type: 'country',
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

      console.log(`=� Saved science summary for ${location.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      if (location !== countries[countries.length - 1]) {
        console.log('� Waiting 1 second before next API call...')
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    } catch (error) {
      console.error(`L Error generating science summary for ${location.name}:`, error)
      errorCount++
      // Continue with next country even if one fails
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log(' SCIENCE & RESEARCH summary generation complete!')
  console.log(`=� Results: ${successCount} successful, ${errorCount} errors`)
  console.log(`=� Total countries processed: ${countries.length}`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
