import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries batch 1-15 (Afghanistan through Belgium)
const countries = [
  { name: 'Afghanistan', lat: 33.9391, lng: 67.71 },
  { name: 'Albania', lat: 41.1533, lng: 20.1683 },
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Armenia', lat: 40.0691, lng: 45.0382 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Azerbaijan', lat: 40.1431, lng: 47.5769 },
  { name: 'Bahamas', lat: 25.0343, lng: -77.3963 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.685, lng: 90.3563 },
  { name: 'Barbados', lat: 13.1939, lng: -59.5432 },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
]

async function generateScienceSummary(
  locationName: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🔬 Generating SCIENCE & RESEARCH summary for ${locationName}...`)

  // Fetch recent stories for this location (all categories to get full picture)
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100,
  })

  console.log(`📰 Found ${stories.length} stories for ${locationName}`)

  if (stories.length === 0) {
    console.log(`⚠️  No stories found for ${locationName} - generating general science summary`)
  }

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 100)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}\n   Category: ${story.category || 'N/A'}`
    )
    .join('\n\n')

  // Generate AI summary focused on science & research in Ed Yong / Carl Zimmer style
  const prompt = `You are a science journalist in the style of Ed Yong and Carl Zimmer. Write a comprehensive overview of SCIENCE & RESEARCH in ${locationName}.

${stories.length > 0 ? `NEWS STORIES (${stories.length} total):\n${storySummaries}\n\n` : ''}

Write a detailed, engaging summary (2,500-3,500 characters) that covers:

1. **Major Research Institutions**: Leading universities, research centers, and scientific organizations
2. **R&D Investment**: Research spending as % of GDP, funding trends, government vs private investment
3. **Key Research Areas**: Fields where the country excels or has strategic focus (biotech, physics, engineering, etc.)
4. **Scientific Breakthroughs**: Notable discoveries, innovations, and contributions to global science
5. **Nobel Prizes & Recognition**: Nobel laureates, major scientific awards, international recognition
6. **STEM Education**: Quality of science education, university rankings, talent pipeline, brain drain/gain
7. **Science Policy**: Government priorities, research infrastructure, international collaboration

STYLE GUIDELINES:
- Write in the narrative, accessible style of Ed Yong and Carl Zimmer
- Make complex science engaging and human
- Use vivid, specific details rather than generic statements
- Include context about how science connects to the country's history, culture, and development
- Balance achievements with challenges
- Avoid jargon; explain technical concepts clearly
- Use active voice and concrete examples
- Make the science come alive through storytelling

LENGTH: Exactly 2,500-3,500 characters (this is important!)

Also provide:
- 3-5 major science & research issues or trends (brief phrases)
- Top 5-7 most relevant news stories${stories.length === 0 ? ' (if no stories available, write "No recent stories available")' : ''}

Format your response EXACTLY as follows:

## Summary
[Your detailed science & research summary here - 2,500-3,500 characters]

## Issues
- Issue 1
- Issue 2
- Issue 3

## Top Stories
${stories.length > 0 ? '1. Story number from list\n2. Story number from list\n3. Story number from list' : 'No recent stories available'}

Be specific, engaging, and factual. Make the science fascinating.`

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
      .filter((line) => line.trim() && !line.includes('No recent stories'))
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
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation for countries 1-15\n')
  console.log('Countries: Afghanistan through Belgium (15 total)\n')

  let successCount = 0
  let errorCount = 0

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateScienceSummary(location.name)

      // Save to database
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

      console.log(`💾 Saved SCIENCE summary for ${location.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating SCIENCE summary for ${location.name}:`, error)
      errorCount++
      // Continue with next country even if one fails
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ SCIENCE & RESEARCH summary generation complete!')
  console.log(`Successfully generated: ${successCount}/${countries.length} summaries`)
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`)
  }
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
