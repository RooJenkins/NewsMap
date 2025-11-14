import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 16-31 (Belize through Costa Rica)
const countries = [
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'Benin', lat: 9.30769, lng: 2.315834 },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', lat: -16.5, lng: -68.15 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.328474, lng: 24.684866 },
  { name: 'Brazil', lat: -14.235, lng: -51.9253 },
  { name: 'Brunei', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.238333, lng: -1.561593 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.991 },
  { name: 'Cameroon', lat: 7.369722, lng: 12.354722 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Chile', lat: -35.6751, lng: -71.543 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
]

async function generateScienceSummary(
  countryName: string,
  lat: number,
  lng: number
): Promise<string> {
  console.log(`\n🔬 Generating science & research summary for ${countryName}...`)

  // Fetch recent stories for this country (any category)
  const stories = await prisma.story.findMany({
    where: {
      country: countryName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100,
  })

  console.log(`📰 Found ${stories.length} stories for ${countryName}`)

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 100)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}`
    )
    .join('\n\n')

  // Generate AI summary focused on science & research - Ed Yong/Carl Zimmer style
  const prompt = `You are a science journalist in the style of Ed Yong and Carl Zimmer. Write a comprehensive summary about the SCIENCE & RESEARCH landscape in ${countryName}.

${stories.length > 0 ? `Here are recent news stories about ${countryName} for context:\n\n${storySummaries}\n\n` : ''}Use the news stories (if any) as context, but focus your summary on the broader science and research landscape. Cover:

1. **Major Research Institutions**: Leading universities, national labs, research centers
2. **R&D Investment**: Research spending as % of GDP, funding trends, international collaboration
3. **Key Research Areas**: Dominant fields, breakthrough discoveries, areas of strength
4. **Nobel Prizes & Recognition**: Any Nobel laureates, major scientific awards, international recognition
5. **STEM Education**: University programs, talent pipeline, brain drain/gain
6. **Science Policy**: Government priorities, research infrastructure, innovation ecosystem

STYLE REQUIREMENTS:
- Write in the engaging, narrative style of Ed Yong and Carl Zimmer
- Use vivid, accessible language that brings science to life
- Include specific examples and concrete details
- Make it engaging for a general audience while being scientifically accurate
- Focus on the human element of science - the researchers, discoveries, and impact

LENGTH: 2,500-3,500 characters (approximately 400-550 words)

Write a flowing narrative that tells the story of science and research in ${countryName}. Make it compelling and informative.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary =
    message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName} (${summary.length} characters)`)

  return summary
}

async function main() {
  console.log('🚀 Starting science & research summary generation for countries 16-31')
  console.log('📊 Countries:', countries.map(c => c.name).join(', '))
  console.log('')

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      const summary = await generateScienceSummary(
        country.name,
        country.lat,
        country.lng
      )

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'science',
          },
        },
        update: {
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
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
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved science summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating science summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Science & research summary generation complete!')
  console.log(`📈 Success: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
