import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 76-90: Latvia through Morocco
const countries = [
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Luxembourg', lat: 49.8153, lng: 6.1296 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Maldives', lat: 3.2028, lng: 73.2207 },
  { name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Moldova', lat: 47.4116, lng: 28.3699 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Montenegro', lat: 42.7087, lng: 19.3744 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
]

async function generateScienceSummary(
  locationName: string,
  lat: number,
  lng: number
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🔬 Generating science & research summary for ${locationName}...`)

  // Fetch recent stories for this location (all categories, since science might be anywhere)
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100, // Get more stories to find science-related ones
  })

  console.log(`📰 Found ${stories.length} total stories for ${locationName}`)

  if (stories.length === 0) {
    console.log(`⚠️  No stories found for ${locationName} - generating from general knowledge`)
  }

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 100)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}\n   Category: ${story.category}`
    )
    .join('\n\n')

  // Generate AI summary focused on science & research
  const prompt = `You are a science journalist in the style of Ed Yong or Carl Zimmer. Write a comprehensive summary of the SCIENCE & RESEARCH landscape in ${locationName}.

${stories.length > 0 ? `RECENT NEWS STORIES (for context):
${storySummaries}

` : ''}Focus your summary on:
- Major research institutions and universities
- R&D spending as percentage of GDP and trends
- Key research areas and recent breakthroughs
- Nobel prizes and international recognition
- STEM education systems and talent pipeline
- Science policy and government support for research
- International collaborations and partnerships
- Challenges facing the research community

Write in the engaging, narrative style of Ed Yong or Carl Zimmer - make science accessible and compelling while remaining accurate. Use vivid language and help readers understand why this science matters.

TARGET LENGTH: 2,500-3,500 characters (approximately 400-550 words)

Format your response EXACTLY as follows:

## Summary
[Your detailed science & research summary here - 2,500-3,500 characters]

## Issues
- Issue 1 (brief phrase about a key science/research challenge)
- Issue 2
- Issue 3
- Issue 4
- Issue 5

## Top Stories
${stories.length > 0 ? `Select 5-7 story numbers from the list above that are most relevant to science & research:
1. Story number
2. Story number
3. Story number` : `1. General science and research developments
2. Research institution updates
3. STEM education initiatives`}

Write with wonder and precision. Make the science come alive.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText =
    message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`\n📝 Generated response (${responseText.length} chars)`)

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

  // If no top stories extracted, use the most recent ones
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

  console.log(`✅ Generated science summary for ${locationName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation for countries 76-90\n')
  console.log(`Countries: ${countries.map(c => c.name).join(', ')}\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${country.name} (${countries.indexOf(country) + 1}/${countries.length})`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateScienceSummary(
        country.name,
        country.lat,
        country.lng
      )

      // Save to database
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
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
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'science',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`💾 Saved science summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      if (countries.indexOf(country) < countries.length - 1) {
        console.log(`⏱️  Waiting 1 second before next API call...`)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    } catch (error) {
      console.error(`❌ Error generating science summary for ${country.name}:`, error)
      errorCount++
      // Continue with next country even if one fails
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ SCIENCE & RESEARCH summary generation complete!')
  console.log('='.repeat(80))
  console.log(`✅ Successful: ${successCount}/${countries.length}`)
  console.log(`❌ Errors: ${errorCount}/${countries.length}`)
  console.log(`\nGenerated summaries for category: SCIENCE`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
