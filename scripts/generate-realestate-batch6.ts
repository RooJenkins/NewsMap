import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 75-89: Laos through Malaysia
const countries = [
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
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
  console.log('🚀 Starting Real Estate & Housing summary generation (Countries 75-89)')
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
