import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 31-45 with coordinates
const countries = [
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

async function generateInfrastructureSummary(
  locationName: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🏗️  Generating infrastructure summary for ${locationName}...`)

  // Fetch recent stories for this country
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 50,
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
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}\n   ${story.description || ''}`
    )
    .join('\n\n')

  // Generate AI summary with Norman Foster perspective
  const prompt = `You are an infrastructure and urban planning expert writing in the analytical style of Norman Foster - combining architectural vision with pragmatic understanding of how cities and nations develop their built environment.

Analyze the following news stories about ${locationName} and create a comprehensive infrastructure assessment.

NEWS STORIES (${stories.length} total):
${storySummaries}

Generate a detailed infrastructure analysis (2,500-3,500 characters) covering:

**TRANSPORTATION NETWORKS**
- Roads, highways, and intercity connectivity
- Rail systems (high-speed rail, metro, light rail, conventional rail)
- Airports and aviation infrastructure
- Ports and maritime infrastructure (if applicable)
- Public transit quality, coverage, and accessibility

**URBAN PLANNING & DEVELOPMENT**
- Urban design philosophy and execution
- Smart city initiatives
- Sustainable urban development
- Housing and residential infrastructure
- Public spaces and pedestrian infrastructure

**MAJOR INFRASTRUCTURE PROJECTS**
- Current mega-projects (transportation, energy, urban development)
- Infrastructure modernization efforts
- International infrastructure cooperation
- Belt and Road or similar international initiatives

**INFRASTRUCTURE MAINTENANCE & QUALITY**
- State of existing infrastructure
- Maintenance challenges and solutions
- Infrastructure resilience and climate adaptation
- Safety standards and enforcement

**DIGITAL INFRASTRUCTURE**
- Broadband coverage and quality
- 5G deployment and digital connectivity
- Smart infrastructure integration
- Digital divide issues

Write in Norman Foster's analytical yet visionary style:
- Balance technical detail with broader social impact
- Consider sustainability and long-term resilience
- Acknowledge both achievements and challenges
- Focus on how infrastructure shapes quality of life
- Include specific projects, statistics, and developments when available
- Be honest about shortcomings while recognizing progress

After your main analysis, provide:

## Issues
List 4-6 major infrastructure challenges (brief phrases)

## Key Developments
Highlight 3-5 notable infrastructure projects or initiatives currently underway

Target length: 2,500-3,500 characters
Tone: Analytical, expert, balanced, forward-looking
Style: Norman Foster - architectural vision meets urban planning pragmatism`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }],
    })

    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : ''

    // Parse the response
    const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)(?=\n## |$)/i)

    const issues = issuesMatch
      ? issuesMatch[1]
          .split('\n')
          .filter((line) => line.trim().startsWith('-'))
          .map((line) => line.replace(/^-\s*/, '').trim())
      : []

    // Extract main summary (everything before ## Issues)
    const summaryMatch = responseText.match(/^([\s\S]*?)(?=\n## Issues|$)/i)
    const summary = summaryMatch ? summaryMatch[1].trim() : responseText

    // Get top stories based on importance and recency
    const topStories = stories.slice(0, 7).map((story) => ({
      title: story.title,
      source: story.source,
      link: story.link,
      pubDate: story.pubDate.toISOString(),
    }))

    console.log(`✅ Generated infrastructure summary for ${locationName}`)
    console.log(`   - Summary: ${summary.length} characters`)
    console.log(`   - Issues: ${issues.length}`)
    console.log(`   - Top stories: ${topStories.length}`)

    return { summary, issues, topStories }
  } catch (error) {
    console.error(`❌ Error generating infrastructure summary for ${locationName}:`, error)
    throw error
  }
}

async function main() {
  console.log('🚀 Starting INFRASTRUCTURE category summary generation for countries 31-45\n')
  console.log('Countries:', countries.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80))

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name} (${countries.indexOf(location) + 1}/${countries.length})`)
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

      // Save to database with category='infrastructure'
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
      console.log(`   Character count: ${summary.length}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      console.log('⏱️  Rate limiting: waiting 1 second...')
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error processing ${location.name}:`, error)
      errorCount++
      // Continue with next country even if one fails
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary generation complete!')
  console.log('='.repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successfully generated: ${successCount}`)
  console.log(`   - Skipped (no stories): ${skipCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log(`   - Total processed: ${countries.length}`)
  console.log('\n🏗️  Category: infrastructure')
  console.log('👤 Perspective: Norman Foster / urban planning expert')
  console.log('📏 Target length: 2,500-3,500 characters')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
