import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 90-104: Real Estate & Housing batch 7
const countries = [
  'Singapore',
  'Taiwan',
  'Sri Lanka',
  'Yemen',
  'Saudi Arabia',
  'UAE',
  'Lebanon',
  'Syria',
  'Solomon Islands',
  'Vanuatu',
  'Samoa',
  'Tonga',
  'Egypt',
  'Ethiopia',
  'Kenya',
]

async function generateRealEstateSummary(countryName: string): Promise<string> {
  console.log(`\n🏠 Generating real estate summary for ${countryName}...`)

  const stats = countryData[countryName]
  if (!stats) {
    console.log(`⚠️  No stats found for ${countryName}`)
    return ''
  }

  const prompt = `You are a housing economist and YIMBY advocate writing in the style of Matt Yglesias. Create a comprehensive analysis of the REAL ESTATE & HOUSING situation in ${countryName}.

COUNTRY STATISTICS:
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}
- Capital: ${stats.capital}
- Government: ${stats.government}
- Freedom Status: ${stats.freedomStatus}

Write a 2,000-3,000 character analysis that covers:
- Housing affordability and price trends
- Homeownership vs rental rates and cultural attitudes
- Construction activity and housing supply
- Zoning laws, land use regulations, and urban planning
- Urban sprawl vs density patterns
- Real estate as investment and speculation
- Homelessness and housing insecurity issues
- Government housing policies and their effectiveness

STYLE REQUIREMENTS:
- Voice: Matt Yglesias YIMBY/housing economist - wonky but accessible, data-informed, pro-density
- Tone: "Rest is Politics" style - conversational but deeply informed, explain WHY this matters
- Connect housing issues to real human impact - affordability affects families, workers, opportunity
- Use specific examples and trends where relevant
- Be analytical but not dry - make it engaging
- Explain economic mechanisms clearly (supply/demand, land values, regulatory burden)
- When relevant, mention how housing connects to economic growth, opportunity, inequality

DO NOT use markdown formatting, bullet points, or headers. Write in flowing paragraphs.
DO NOT make up specific statistics - focus on structural analysis and known patterns.
Keep it to 2,000-3,000 characters.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2500,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName} (${summary.length} characters)`)

  return summary
}

async function main() {
  console.log('🚀 Starting Real Estate & Housing summary generation (Batch 7: Countries 90-104)')
  console.log(`📊 Processing ${countries.length} countries\n`)

  let successCount = 0
  let errorCount = 0

  for (const countryName of countries) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${countryName}`)
      console.log('='.repeat(80))

      const summary = await generateRealEstateSummary(countryName)

      if (!summary) {
        console.log(`⏭️  Skipping ${countryName} - no summary generated`)
        errorCount++
        continue
      }

      const stats = countryData[countryName]

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'realestate',
          },
        },
        update: {
          summary,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: 0, // Will need to be updated with actual coordinates
          lng: 0,
          category: 'realestate',
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved real estate summary for ${countryName}`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error processing ${countryName}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Real Estate & Housing summary generation complete!')
  console.log(`📊 Results: ${successCount} successful, ${errorCount} errors`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
