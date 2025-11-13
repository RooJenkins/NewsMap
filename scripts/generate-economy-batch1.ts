import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Country data with coordinates
const countries = [
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Albania', lat: 41.1533, lng: 20.1683 },
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
]

async function generateEconomySummary(countryName: string): Promise<{
  summary: string
  issues: string[]
}> {
  console.log(`\n🔍 Researching economy data for ${countryName}...`)

  const prompt = `You are Martin Wolf, the renowned chief economics commentator at the Financial Times, known for your analytical depth and ability to connect macroeconomic trends to real-world impacts. Write a comprehensive Economy & Business analysis for ${countryName} as of November 2025.

**CATEGORY:** Economy & Business
**VOICE:** Martin Wolf (Financial Times) / Mohamed El-Erian - Analytical, data-driven, connects macro trends to real impacts
**LENGTH:** 3,000-4,500 characters (aim for 3,500)

**FOCUS AREAS - Must cover:**
- GDP growth, inflation, unemployment rates (use specific numbers)
- Key industries and economic drivers
- Trade relationships and major exports/imports
- Business environment and ease of doing business
- Currency stability and fiscal policy
- Wealth distribution and economic inequality

**STRUCTURE:**
1. **Opening Hook** (100-150 words): Lead with the most compelling recent economic development or statistic. Make it vivid and engaging.

2. **Current Economic State** (300-400 words): What's happening right now? Include:
   - Latest GDP growth, inflation, unemployment figures
   - Key economic sectors and their performance
   - Major business developments or corporate news
   - Current fiscal/monetary policy stance

3. **Challenges & Trade-offs** (300-400 words): Economic problems and debates:
   - Structural challenges (debt, inequality, productivity)
   - Trade relationships and dependencies
   - Business environment issues
   - Specific examples of economic stress points

4. **Future Outlook** (200-300 words): Where is the economy headed?
   - Trends to watch (demographics, technology, climate impact)
   - Policy changes or reforms in discussion
   - Opportunities and risks

5. **Bottom Line** (100 words): Punchy synthesis of what matters most

**WRITING STYLE - Martin Wolf voice:**
- Use specific numbers and economic indicators
- Connect macro trends to real impacts on businesses and people
- Analytical but accessible - explain complex concepts clearly
- Data-driven but not dry - use vivid language
- Show trade-offs and complexities, not simple narratives
- Include insider economic knowledge and details
- Be honest about challenges while noting opportunities

**CRITICAL REQUIREMENTS:**
- Use REAL, CURRENT data from November 2025 (or most recent available)
- Include specific numbers: GDP growth rates, inflation %, unemployment %, debt-to-GDP ratios
- Name major companies, banks, industries, trade partners
- Reference recent economic events, policy changes, or business news
- Must be 3,000-4,500 characters (count carefully!)
- Write in Martin Wolf's analytical, data-rich style

Please provide:

1. The complete economy write-up (3,000-4,500 characters)
2. A list of 3-5 major economic issues (brief phrases)

Format your response as:

## Summary
[Your complete economy write-up here - 3,000-4,500 characters]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText =
    message.content[0].type === 'text' ? message.content[0].text : ''

  // Parse the response
  const summaryMatch = responseText.match(/## Summary\s+([\s\S]*?)(?=\n## Issues|$)/i)
  const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)$/i)

  const summary = summaryMatch ? summaryMatch[1].trim() : responseText
  const issues = issuesMatch
    ? issuesMatch[1]
        .split('\n')
        .filter((line) => line.trim().startsWith('-'))
        .map((line) => line.replace(/^-\s*/, '').trim())
    : []

  console.log(`✅ Generated economy summary for ${countryName}`)
  console.log(`   - Length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting Economy & Business write-up generation')
  console.log(`📊 Generating for ${countries.length} countries\n`)

  const completed: string[] = []

  for (const country of countries) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

      const { summary, issues } = await generateEconomySummary(country.name)

      // Validate length
      if (summary.length < 2800 || summary.length > 4700) {
        console.warn(
          `⚠️  Warning: Summary length ${summary.length} is outside target range (3000-4500)`
        )
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'economy',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
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
          category: 'economy',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved economy summary for ${country.name} to database`)
      completed.push(country.name)

      // Rate limiting - wait 2 seconds between API calls to avoid throttling
      if (countries.indexOf(country) < countries.length - 1) {
        console.log('⏳ Waiting 2 seconds before next country...')
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    } catch (error) {
      console.error(`❌ Error generating economy summary for ${country.name}:`, error)
      console.error('Continuing with next country...')
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ ECONOMY & BUSINESS GENERATION COMPLETE!')
  console.log('='.repeat(80))
  console.log(`\n📊 Successfully completed: ${completed.length}/${countries.length} countries`)
  console.log(`\nCompleted Economy for: ${completed.join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
