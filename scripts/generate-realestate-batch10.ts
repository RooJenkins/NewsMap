import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 135-143: West African nations
const countries = [
  { name: 'Sierra Leone', lat: 8.4657, lng: -11.7799 },
  { name: 'Liberia', lat: 6.4281, lng: -9.4295 },
  { name: 'Guinea', lat: 9.9456, lng: -9.6966 },
  { name: 'Ivory Coast', lat: 7.5400, lng: -5.5471 },
  { name: 'Togo', lat: 8.6195, lng: 0.8248 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Gambia', lat: 13.4432, lng: -15.3101 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Congo-Brazzaville', lat: -4.2634, lng: 15.2429 },
]

async function generateRealEstateSummary(countryName: string): Promise<string> {
  console.log(`\n🏠 Generating Real Estate & Housing summary for ${countryName}...`)

  const stats = countryData[countryName]
  if (!stats) {
    throw new Error(`No country data found for ${countryName}`)
  }

  const prompt = `You are Matt Yglesias, a YIMBY housing policy expert and economist known for evidence-based analysis of real estate markets, housing affordability, and urban development. Write a compelling 2,000-3,000 character summary about REAL ESTATE & HOUSING in ${countryName}.

COUNTRY CONTEXT:
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}
- Capital: ${stats.capital}
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Primary Export: ${stats.primaryExport}
- Freedom Status: ${stats.freedomStatus}

WRITING STYLE - "Rest is Politics" meets YIMBY economist:
- Conversational but deeply informed
- Connect housing policy to real human impact
- Explain "why this matters" for ordinary people
- Use specific examples and evidence
- Balance optimism about solutions with realism about challenges
- Show how housing connects to broader development/economic issues

FOCUS AREAS (cover most/all):
- Housing affordability and price trends
- Homeownership rates vs rental market dynamics
- Construction activity and building rates
- Zoning laws, land use regulations, or informal development
- Urban sprawl vs density patterns
- Real estate investment and speculation
- Homelessness and informal settlements
- How housing intersects with economic development
- Remittances impact on housing (if relevant)
- Government housing programs or policies

TONE:
- Pro-density and pro-development where it makes sense
- Evidence-based and pragmatic
- Explain complex issues accessibly
- Show enthusiasm for good policy
- Critical of regulations that restrict housing supply
- Empathetic to housing challenges people face

Write 2,000-3,000 characters. Be specific about ${countryName}'s unique housing situation. Connect housing to quality of life, economic opportunity, and development. Make it engaging and informative.

Return ONLY the summary text, no preamble or metadata.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2500,
    temperature: 1,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName} (${summary.length} characters)`)

  return summary.trim()
}

async function main() {
  console.log('🚀 Starting Real Estate & Housing summary generation for countries 135-143')
  console.log(`📋 Generating summaries for ${countries.length} countries\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

      const summary = await generateRealEstateSummary(country.name)

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
          storyCount: 0,
        },
      })

      console.log(`💾 Saved Real Estate summary for ${country.name}`)
      console.log(`📊 Summary length: ${summary.length} characters`)

      successCount++

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Real Estate & Housing summary generation complete!')
  console.log(`📊 Success: ${successCount}/${countries.length}`)
  if (errorCount > 0) {
    console.log(`⚠️  Errors: ${errorCount}`)
  }
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
