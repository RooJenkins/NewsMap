import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 5: Countries 60-74 for real estate & housing category
const countries = [
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.886 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Bangladesh', lat: 23.685, lng: 90.3563 },
  { name: 'Afghanistan', lat: 33.9391, lng: 67.71 },
  { name: 'Iran', lat: 32.4279, lng: 53.688 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.991 },
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

  // Generate AI summary in Matt Yglesias / YIMBY / housing economist voice
  const prompt = `You are writing as a housing economist in the style of Matt Yglesias (YIMBY advocate) - data-driven, conversational, deeply informed about housing policy, connecting abstract policy to real human impact. You're analyzing the real estate and housing situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- GDP per Capita: ${stats.gdpPerCapita}
- Freedom House Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

Write a comprehensive real estate & housing analysis (2,000-3,000 characters) that covers:

1. HOUSING AFFORDABILITY & PRICES: Current state of housing costs relative to incomes, price trends, affordability crisis or stability
2. HOMEOWNERSHIP VS RENTAL: Ownership rates, rental market dynamics, cultural preferences, government policies
3. CONSTRUCTION ACTIVITY: New housing supply, construction trends, infrastructure development
4. ZONING LAWS & REGULATION: Land use restrictions, building codes, regulatory barriers to housing supply
5. URBAN SPRAWL VS DENSITY: Urbanization patterns, density trends, transit-oriented development
6. REAL ESTATE INVESTMENT: Foreign investment, speculation, real estate as asset class
7. HOMELESSNESS & HOUSING INSECURITY: Scale of problem, government response, social housing

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect housing policy to real human impact - this is about where people live
- Show the economic logic - explain WHY policies lead to outcomes
- Be YIMBY-friendly: generally favor more housing supply, density, and development
- Use specific examples and data points where relevant
- Be analytical but empathetic - housing is fundamental to human dignity
- Length: 2,000-3,000 characters (not words - characters)

After the summary, list 3-5 major real estate & housing issues as brief phrases.

Format your response EXACTLY as follows:

## Summary
[Your 2,000-3,000 character real estate & housing analysis here]

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
  console.log('🚀 Starting real estate & housing summary generation (Batch 5 - Countries 60-74)\n')
  console.log(`Processing ${countries.length} countries...\n`)

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
  console.log('✅ BATCH 5 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
