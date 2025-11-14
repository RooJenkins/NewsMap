import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 120-134: Real Estate & Housing batch
const countries = [
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
  { name: 'Cameroon', lat: 3.8480, lng: 11.5021 },
  { name: 'Zambia', lat: -13.1339, lng: 27.8493 },
  { name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { name: 'Niger', lat: 17.6078, lng: 8.0817 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Namibia', lat: -22.9576, lng: 18.4904 },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691 },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015 },
  { name: 'South Sudan', lat: 6.8770, lng: 31.3070 },
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823 },
  { name: 'Djibouti', lat: 11.8251, lng: 42.5903 },
]

async function generateRealEstateSummary(
  countryName: string
): Promise<string> {
  console.log(`\n🏠 Generating real estate summary for ${countryName}...`)

  const stats = countryData[countryName]
  if (!stats) {
    console.log(`⚠️  No data found for ${countryName}`)
    return ''
  }

  const prompt = `You are a YIMBY housing economist writing in the style of Matt Yglesias and "The Rest is Politics" podcast - conversational but deeply informed, connecting housing policy to real human impact.

Write a 2,000-3,000 character analysis of REAL ESTATE & HOUSING in ${countryName}.

COUNTRY CONTEXT:
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.rulingParty})
- Freedom Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

FOCUS AREAS (prioritize what's most relevant):
- Housing affordability and price trends
- Homeownership rates vs rental markets
- Construction activity and housing supply
- Zoning laws, land use regulations, NIMBYism
- Urban sprawl vs density patterns
- Real estate investment (domestic and foreign)
- Homelessness and housing insecurity
- Informal settlements and slums
- Government housing policy and subsidies
- Access to mortgages and housing finance

VOICE & STYLE:
- Write like Matt Yglesias explaining housing economics - clear, data-informed, slightly wonky but accessible
- Use "The Rest is Politics" conversational tone - explain WHY this matters to real people
- Connect housing to broader economic development, inequality, urbanization
- Be specific about constraints (materials, finance, regulation, land tenure)
- Acknowledge trade-offs and political economy challenges
- Use phrases like "Here's what matters..." "The fundamental issue is..." "This is crucial because..."

IMPORTANT:
- Stay grounded in economic fundamentals (supply, demand, affordability)
- Discuss both formal and informal housing markets
- Consider unique African context: rapid urbanization, land tenure systems, informal settlements
- Be honest about data limitations in developing economies
- Focus on human impact - who can afford housing? Where do people actually live?
- 2,000-3,000 characters (not words)

Write ONLY the summary text, no preamble, no "Here's my analysis" - just start directly with the content.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2500,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName} (${summary.length} chars)`)
  return summary.trim()
}

async function main() {
  console.log('🚀 Starting Real Estate & Housing summary generation')
  console.log(`📋 Generating summaries for ${countries.length} countries (batch 9)\n`)

  let successCount = 0
  let skipCount = 0

  for (const country of countries) {
    try {
      const summary = await generateRealEstateSummary(country.name)

      if (!summary) {
        console.log(`⏭️  Skipping ${country.name} - no summary generated`)
        skipCount++
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

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating summary for ${country.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Real Estate & Housing summary generation complete!')
  console.log(`📊 Successfully generated: ${successCount}/${countries.length}`)
  console.log(`⏭️  Skipped: ${skipCount}`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
