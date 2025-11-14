import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 8: Countries 105-119 for real estate & housing category
const countries = [
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
]

async function generateRealEstateSummary(countryName: string): Promise<{
  summary: string
  issues: string[]
}> {
  console.log(`\n🤖 Generating real estate summary for ${countryName}...`)

  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName} - skipping`)
    return { summary: '', issues: [] }
  }

  // Generate AI summary in Matt Yglesias (YIMBY) / housing economist voice
  const prompt = `You are writing as a housing policy analyst in the style of Matt Yglesias and the YIMBY movement - data-driven, conversational, focused on how housing policy affects real people's lives. You're analyzing the real estate and housing situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}
- Freedom House Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

Write a comprehensive real estate & housing analysis (2,000-3,000 characters) that covers:

1. HOUSING AFFORDABILITY & PRICES: Current state of housing costs relative to incomes, price trends, what's driving them
2. HOMEOWNERSHIP VS RENTAL: Ownership rates, rental market dynamics, barriers to homeownership
3. CONSTRUCTION ACTIVITY: Building trends, new housing supply, infrastructure development
4. ZONING & REGULATION: Land use policies, building restrictions, bureaucratic barriers, informal settlements
5. URBAN DENSITY VS SPRAWL: City planning patterns, urbanization trends, infrastructure challenges
6. REAL ESTATE INVESTMENT: Foreign/domestic investment, speculation, housing as asset class
7. HOMELESSNESS & HOUSING INSECURITY: Scale of the problem, informal housing, slums

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect housing policy to real human impact - explain "why this matters" to ordinary people
- Be analytical but show how abstract policies affect real families trying to find affordable housing
- Acknowledge complexity - there are trade-offs in housing policy
- Use economic reasoning but make it relatable
- Be specific about mechanisms - WHY are prices high? WHY isn't enough being built?
- Length: 2,000-3,000 characters (not words - characters)

After the summary, list 3-5 major real estate/housing issues as brief phrases.

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
  console.log('🚀 Starting real estate & housing summary generation (Batch 8 - Countries 105-119)\n')
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
  console.log('✅ BATCH 8 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
