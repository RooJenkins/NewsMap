import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 121-143 (indices 120-142): Cameroon through Congo-Brazzaville (final 23 countries)
const countries = [
  { name: 'Cameroon', lat: 3.848, lng: 11.5021 },
  { name: 'Zambia', lat: -13.1339, lng: 27.8493 },
  { name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { name: 'Niger', lat: 17.6078, lng: 8.6753 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Namibia', lat: -22.9375, lng: 18.6947 },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691 },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015 },
  { name: 'South Sudan', lat: 6.877, lng: 31.307 },
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823 },
  { name: 'Djibouti', lat: 11.8254, lng: 42.5905 },
  { name: 'Sierra Leone', lat: 8.4606, lng: -11.7799 },
  { name: 'Liberia', lat: 6.4281, lng: -9.4295 },
  { name: 'Guinea', lat: 9.9456, lng: -9.6966 },
  { name: 'Ivory Coast', lat: 7.54, lng: -5.5471 },
  { name: 'Togo', lat: 6.1256, lng: 1.232 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Gambia', lat: 13.4549, lng: -15.3636 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Congo-Brazzaville', lat: -0.628, lng: 15.8277 },
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
- Freedom Status: ${stats.freedomStatus}
- Primary Export: ${stats.primaryExport}

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
- Include specific regional/urban examples relevant to ${countryName}
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
    max_tokens: 3500,
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
        .filter((issue) => issue.length > 0)
    : []

  console.log(`✅ Generated real estate summary for ${countryName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting real estate & housing summary generation (Final 23 countries: Cameroon-Congo-Brazzaville)\n')
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
  console.log('✅ FINAL 23 COUNTRIES COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
