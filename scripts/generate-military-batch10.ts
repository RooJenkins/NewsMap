import 'dotenv/config'
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
  { name: 'Ivory Coast', lat: 7.54, lng: -5.5471 },
  { name: 'Togo', lat: 8.6195, lng: 0.8248 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Gambia', lat: 13.4432, lng: -15.3101 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Congo-Brazzaville', lat: -4.0383, lng: 21.7587 },
]

const category = 'military'

async function generateMilitarySummary(
  countryName: string
): Promise<string> {
  console.log(`\n🎖️  Generating MILITARY & DEFENSE summary for ${countryName}...`)

  const stats = countryData[countryName]
  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName}`)
    return ''
  }

  const prompt = `You are a military and defense analyst writing in the style of Lawrence Freedman and Anne-Marie Slaughter for "The Rest is Politics" podcast - conversational but deeply informed, connecting strategic realities to human impact.

Write a MILITARY & DEFENSE summary for ${countryName} (2,500-3,500 characters).

COUNTRY STATS:
- Population: ${stats.population}
- GDP: ${stats.gdp}
- GDP per capita: ${stats.gdpPerCapita}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Government: ${stats.government}
- Ruling Party: ${stats.rulingParty}
- Freedom Status: ${stats.freedomStatus}
- Primary Export: ${stats.primaryExport}

FOCUS AREAS (prioritize what's most relevant for ${countryName}):
- Military size, structure, and capabilities
- Defense spending and procurement
- Security challenges and threats (internal/external)
- Recent conflicts or peacekeeping operations
- Military reform and modernization efforts
- Security alliances and defense partnerships
- Regional security dynamics
- Veteran affairs and military-civilian relations
- Counter-terrorism and border security
- Military's role in politics/governance

STYLE REQUIREMENTS:
- Write conversationally but with authority - like explaining to an informed friend
- Lead with what matters most - why should anyone care about ${countryName}'s military situation?
- Connect strategic realities to human impact - who's affected and how?
- Avoid jargon - explain complex defense issues clearly
- Use specific examples and recent developments
- Show the "so what" - why this matters regionally and globally
- Balance current challenges with historical context
- Include 2-3 concrete details that bring the analysis to life

TONE: Accessible expertise - like Freedman explaining military strategy or Slaughter connecting defense policy to human security. Not academic, not breathless, but genuinely engaged with why this matters.

Write the summary now:`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2500,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName} (${summary.length} characters)`)

  return summary.trim()
}

async function main() {
  console.log('🚀 Starting MILITARY & DEFENSE summary generation for countries 135-143')
  console.log(`📋 Countries: ${countries.map(c => c.name).join(', ')}\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      const summary = await generateMilitarySummary(country.name)

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
            category: category,
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
          category: category,
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved ${category} summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls
      if (country !== countries[countries.length - 1]) {
        console.log('⏳ Waiting 2 seconds before next request...')
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    } catch (error) {
      console.error(`❌ Error generating summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ MILITARY & DEFENSE summary generation complete!')
  console.log(`📊 Results: ${successCount} successful, ${errorCount} errors`)
  console.log(`📁 Category: ${category}`)
  console.log(`🌍 Countries processed: ${successCount}/${countries.length}`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
