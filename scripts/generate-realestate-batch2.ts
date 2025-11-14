import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 2: Countries 15-29 for real estate & housing category
const countries = [
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Honduras', lat: 15.2, lng: -86.2419 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Panama', lat: 8.538, lng: -80.7821 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Trinidad and Tobago', lat: 10.6918, lng: -61.2225 },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.436 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
]

async function generateRealEstateSummary(countryName: string): Promise<{
  summary: string
  issues: string[]
}> {
  console.log(`\n🏠 Generating real estate & housing summary for ${countryName}...`)

  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName} - skipping`)
    return { summary: '', issues: [] }
  }

  // Generate AI summary in Matt Yglesias YIMBY / housing economist voice
  const prompt = `You are writing as a housing policy expert in the style of Matt Yglesias - YIMBY advocate, housing economist, deeply informed about housing markets and policy. You're analyzing the real estate and housing situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}
- Capital: ${stats.capital}

Write a comprehensive real estate & housing analysis (2,000-3,000 characters) that covers:

1. HOUSING AFFORDABILITY & PRICES: Current state of housing costs relative to incomes, price trends, affordability crisis or stability
2. HOMEOWNERSHIP VS RENTAL: Ownership rates, rental market dynamics, which is more common and why
3. CONSTRUCTION ACTIVITY: New housing supply, building boom or shortage, development constraints
4. ZONING & REGULATION: How land use regulations affect housing supply, NIMBYism vs YIMBYism, regulatory barriers
5. DENSITY VS SPRAWL: Urban development patterns, apartment vs single-family housing, transit-oriented development
6. REAL ESTATE INVESTMENT: Role of investors in housing market, speculation, foreign investment
7. HOMELESSNESS: Scale of the issue, causes, policy responses

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect housing policy to real human impact - who can afford to live where, how this shapes cities
- Be analytical about what drives housing costs and what policies actually work
- Use the YIMBY perspective: more housing supply generally helps affordability
- Acknowledge trade-offs and political economy challenges
- Show why this matters: housing costs shape everything from family formation to economic mobility
- Length: 2,000-3,000 characters (not words - characters)

After the summary, list 3-5 major housing issues as brief phrases.

Format your response EXACTLY as follows:

## Summary
[Your 2,000-3,000 character housing analysis here]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3000,
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

  console.log(`✅ Generated real estate summary for ${countryName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting real estate & housing summary generation (Batch 2)\n')
  console.log(`Processing ${countries.length} countries (15-29)...\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${country.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues } = await generateRealEstateSummary(country.name)

      // Skip if no data found
      if (!summary) {
        console.log(`⏭️  Skipping ${country.name} - no data available`)
        errorCount++
        continue
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'realestate',
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
          category: 'realestate',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved real estate summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating real estate summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ BATCH 2 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
