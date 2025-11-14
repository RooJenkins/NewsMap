import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 15-29 from the list
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
  { name: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
  { name: 'France', lat: 48.8566, lng: 2.3522 },
]

async function generateMilitarySummary(countryName: string): Promise<string> {
  console.log(`\n🎖️  Generating military summary for ${countryName}...`)

  // Get country stats
  const stats = countryData[countryName]
  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName}`)
    return ''
  }

  const prompt = `You are a distinguished defense analyst writing in the style of Lawrence Freedman and Anne-Marie Slaughter—conversational yet deeply informed, connecting military realities to human impact and strategic significance. Channel "The Rest is Politics" approach: accessible expertise that explains why defense matters to real people.

Write a comprehensive MILITARY & DEFENSE summary for ${countryName} (2,500-3,500 characters).

COUNTRY CONTEXT:
- Government: ${stats.government}
- Population: ${stats.population}
- GDP: ${stats.gdp}
- GDP per Capita: ${stats.gdpPerCapita}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Freedom Status: ${stats.freedomStatus}

REQUIRED COVERAGE:
1. Military size, capabilities, and force structure
2. Defense spending and procurement priorities
3. Key alliances and security relationships (NATO, regional pacts, bilateral treaties)
4. Recent conflicts, peacekeeping roles, or security operations
5. Veterans affairs and civil-military relations
6. Nuclear weapons status (if applicable)
7. Strategic significance and future defense trajectory

STYLE REQUIREMENTS:
- Open with a compelling hook that shows why this country's defense posture matters
- Use conversational language but demonstrate deep expertise
- Connect military statistics to real human impact and geopolitical consequences
- Explain strategic context: "Here's why this matters..."
- Include specific details (force sizes, equipment, defense spending %) when relevant
- Address tensions between security needs and democratic governance
- Consider regional security dynamics and great power competition
- End with forward-looking assessment of defense trajectory

TONE: Informed dinner party conversation with a brilliant strategist who makes complex military affairs accessible and relevant. Think Freedman's clarity on strategy or Slaughter's connection to human consequences.

Write the summary now (2,500-3,500 characters):`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2500,
      temperature: 1,
      messages: [{ role: 'user', content: prompt }],
    })

    const summary = message.content[0].type === 'text' ? message.content[0].text : ''

    console.log(`✅ Generated summary for ${countryName} (${summary.length} characters)`)

    if (summary.length < 2500) {
      console.log(`⚠️  Warning: Summary is shorter than target (${summary.length} chars)`)
    } else if (summary.length > 3500) {
      console.log(`⚠️  Warning: Summary is longer than target (${summary.length} chars)`)
    }

    return summary
  } catch (error) {
    console.error(`❌ Error generating summary for ${countryName}:`, error)
    throw error
  }
}

async function main() {
  console.log('🚀 Starting Military & Defense summary generation for countries 15-29')
  console.log(`📝 Generating summaries for ${countries.length} countries`)
  console.log('🎨 Style: Lawrence Freedman / Anne-Marie Slaughter (Rest is Politics)\n')

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

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
            category: 'military',
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
          category: 'military',
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved military summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls
      if (country !== countries[countries.length - 1]) {
        console.log('⏳ Waiting 2 seconds before next request...')
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
      errorCount++

      // Wait a bit longer on error before continuing
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('📊 GENERATION COMPLETE')
  console.log('='.repeat(80))
  console.log(`✅ Successful: ${successCount}/${countries.length}`)
  console.log(`❌ Errors: ${errorCount}/${countries.length}`)
  console.log('\n✨ Military & Defense summaries saved with category="military"')
}

main()
  .catch((error) => {
    console.error('💥 Fatal error:', error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
