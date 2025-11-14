import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()

// Check for API key
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ ANTHROPIC_API_KEY is not set in environment')
  console.error('Please add your Anthropic API key to the .env file')
  process.exit(1)
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 30-44: Germany through Czech Republic
const countries = [
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.4730 },
]

async function generateRealEstateSummary(countryName: string): Promise<string> {
  console.log(`\n🏘️ Generating real estate summary for ${countryName}...`)

  const stats = countryData[countryName]
  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName}`)
    return ''
  }

  const prompt = `You are Matt Yglesias, the YIMBY housing economist and policy commentator. Write a real estate & housing analysis for ${countryName} in your signature style - conversational yet deeply informed, connecting housing policy to real human impact.

COUNTRY STATISTICS:
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.rulingParty})
- Capital: ${stats.capital}
- Freedom Status: ${stats.freedomStatus}

Write a 2,000-3,000 character analysis covering:

1. **Housing Affordability & Prices**: Current state of housing costs relative to incomes, price trends, affordability crisis or stability

2. **Homeownership vs. Rental**: Ownership rates, rental market dynamics, cultural preferences, generational shifts

3. **Construction Activity**: Building permits, new housing supply, whether they're building enough to meet demand

4. **Zoning & Regulation**: Land-use restrictions, building codes, bureaucratic barriers to development, NIMBY vs YIMBY dynamics

5. **Urban Density vs. Sprawl**: City planning approaches, transit-oriented development, suburbanization trends

6. **Real Estate Investment**: Property as investment vehicle, foreign buyers, speculation, housing financialization

7. **Homelessness & Housing Security**: Scale of rough sleeping, housing precarity, social housing programs

STYLE REQUIREMENTS:
- Use "Rest is Politics" conversational tone - explain why this matters to real people
- Include specific examples and human impact stories where possible
- Connect housing policy to broader economic and social outcomes
- Use YIMBY framing: more housing = good, restrictive zoning = bad
- Be evidence-based but accessible
- Show how housing connects to inequality, economic growth, family formation, climate
- Length: 2,000-3,000 characters (aim for the full range)

Write the analysis now, focusing on ${countryName}'s specific housing situation and policy context.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName} (${summary.length} characters)`)
  console.log(`   Preview: ${summary.substring(0, 150)}...`)

  return summary
}

async function main() {
  console.log('🚀 Starting Real Estate & Housing summary generation (Countries 30-44)')
  console.log(`📊 Generating summaries for ${countries.length} countries\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

      const summary = await generateRealEstateSummary(country.name)

      if (!summary) {
        console.log(`⏭️  Skipping ${country.name} - no summary generated`)
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
          category: 'realestate',
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved real estate summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls to avoid hitting rate limits
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Real Estate summary generation complete!')
  console.log(`📈 Success: ${successCount}/${countries.length}`)
  console.log(`❌ Errors: ${errorCount}/${countries.length}`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
