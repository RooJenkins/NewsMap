import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Check API key
const apiKey = process.env.ANTHROPIC_API_KEY
if (!apiKey || apiKey === 'your-api-key-here') {
  console.error('❌ ANTHROPIC_API_KEY not properly configured in .env file')
  console.error('Please update the .env file with your actual Anthropic API key')
  process.exit(1)
}

const anthropic = new Anthropic({
  apiKey: apiKey,
})

// Countries 31-45 for SCIENCE & RESEARCH category
const COUNTRIES = [
  { name: 'China', type: 'country', lat: 35.0, lng: 105.0 },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973 },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2 },
  { name: 'Cuba', type: 'country', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', type: 'country', lat: 35.1264, lng: 33.4299 },
  { name: 'Czech Republic', type: 'country', lat: 49.8175, lng: 15.473 },
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587 },
  { name: 'Denmark', type: 'country', lat: 56.2639, lng: 9.5018 },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025 },
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965 },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136 },
  { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897 },
]

async function generateScienceSummary(
  locationName: string,
  category: string = 'science'
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🔬 Generating ${category} summary for ${locationName}...`)

  // Fetch stories for this location - looking for science, technology, research, health keywords
  // SQLite is case-insensitive by default for LIKE operations
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100,
  })

  console.log(`📰 Found ${stories.length} science/research stories for ${locationName}`)

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 50)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}\n   ${story.description || ''}`
    )
    .join('\n\n')

  // Generate AI summary with Ed Yong / Carl Zimmer style - science journalism focus
  const prompt = `You are a science journalist in the style of Ed Yong and Carl Zimmer, known for making complex research accessible while maintaining scientific rigor. Analyze the following news stories about ${locationName} and create a comprehensive SCIENCE & RESEARCH summary.

${stories.length > 0 ? `NEWS STORIES (${stories.length} total):\n${storySummaries}\n` : 'NOTE: Limited news stories available. Draw on general knowledge of this country\'s science and research landscape.\n'}

Create a detailed science and research summary for ${locationName} that covers:

**Focus Areas:**
- Major research institutions, universities, and laboratories
- R&D spending as percentage of GDP and funding trends
- Key research areas and recent breakthroughs
- Nobel Prize winners and internationally recognized scientists
- STEM education system and talent pipeline
- Science policy, government support, and international collaborations
- Technology transfer and innovation ecosystem
- Brain drain vs brain gain dynamics
- Research output (publications, patents, citations)

**Style Guidelines:**
- Write in the engaging, narrative style of Ed Yong and Carl Zimmer
- Make complex science accessible to general readers
- Use vivid examples and compelling details
- Balance optimism with honest assessment
- Focus on the human stories behind the science
- Connect research to real-world impact

**Length:** 2,500-3,500 characters (approximately 400-600 words)

**Tone:** Curious, rigorous, accessible - like a feature in The Atlantic or National Geographic

Please provide your response in this format:

## Summary
[Your detailed science & research summary here - 2,500-3,500 characters]

## Issues
- Issue 1 (brief phrase)
- Issue 2 (brief phrase)
- Issue 3 (brief phrase)
- Issue 4 (brief phrase)
- Issue 5 (brief phrase)

## Top Stories
${stories.length > 0 ? '1. Story number from list\n2. Story number from list\n3. Story number from list\n4. Story number from list\n5. Story number from list' : 'N/A - Limited news coverage'}

Write the summary now:`

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
      topStories.push({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      })
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

  const charCount = summary.length
  console.log(`✅ Generated science summary for ${locationName}`)
  console.log(`   - Summary: ${charCount} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)
  console.log(`   - Preview: ${summary.substring(0, 150)}...`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation for countries 31-45\n')
  console.log('Countries to process:', COUNTRIES.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80) + '\n')

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const location of COUNTRIES) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateScienceSummary(
        location.name,
        'science'
      )

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
      console.log('⏳ Waiting 1 second before next request...')
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating science summary for ${location.name}:`, error)
      errorCount++

      // Continue with next country even if one fails
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ SCIENCE & RESEARCH summary generation complete!')
  console.log('='.repeat(80))
  console.log(`\n📊 Results:`)
  console.log(`   ✅ Successfully generated: ${successCount}`)
  console.log(`   ⏭️  Skipped: ${skipCount}`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`   📝 Total countries: ${COUNTRIES.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
