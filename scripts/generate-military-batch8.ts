import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 105-119: African nations military & defense focus
const countries = [
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Nigeria', lat: 9.082, lng: 8.6753 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Tanzania', lat: -6.369, lng: 34.8888 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
]

async function generateMilitarySummary(
  countryName: string
): Promise<string> {
  console.log(`\n🎖️  Generating military & defense summary for ${countryName}...`)

  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName} - skipping`)
    return ''
  }

  const prompt = `You are a leading defense and security analyst writing in the style of Lawrence Freedman and Anne-Marie Slaughter - combining deep strategic insight with accessible, conversational prose that connects military matters to human impact. Write for "Rest is Politics" listeners who want sophisticated analysis without jargon.

Create a comprehensive MILITARY & DEFENSE summary for ${countryName}.

COUNTRY STATISTICS:
- Government: ${stats.government}
- Population: ${stats.population}
- GDP: ${stats.gdp}
- GDP per Capita: ${stats.gdpPerCapita}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Capital: ${stats.capital}
- Freedom Status: ${stats.freedomStatus}
- Primary Export: ${stats.primaryExport}

REQUIREMENTS:
- Length: 2,500-3,500 characters
- Style: Conversational but deeply informed, like Freedman's strategic analysis or Slaughter's blend of policy and humanity
- Tone: Explain "why this matters" to real people and regional stability

TOPICS TO COVER:
1. **Military Structure & Capabilities**: Size of armed forces, key branches, combat readiness, modernization efforts
2. **Defense Spending & Economics**: Military budget as % of GDP, procurement priorities, defense industry
3. **Security Threats & Recent Conflicts**: Active conflicts, insurgencies, border tensions, peacekeeping roles
4. **Alliances & Partnerships**: Regional security pacts, training relationships, foreign military presence, arms suppliers
5. **Special Capabilities**: Nuclear weapons (if applicable), special forces, cyber capabilities, naval/air power projection
6. **Veteran Affairs & Civil-Military Relations**: Treatment of veterans, military's role in politics, conscription
7. **Human Impact**: How military policies affect ordinary citizens, refugee situations from conflicts, security vs. freedom tensions

Write as if explaining to an intelligent listener over dinner - use phrases like "Here's what's really going on..." or "What matters here is..." Connect military developments to broader regional dynamics and human consequences.

Make it feel like a conversation with a brilliant strategist who cares about people, not just hardware and doctrine.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName}`)
  console.log(`   Length: ${summary.length} characters`)
  console.log(`   Preview: ${summary.substring(0, 150)}...`)

  return summary
}

async function main() {
  console.log('🚀 Starting MILITARY & DEFENSE summary generation for countries 105-119\n')
  console.log('📊 Batch: African nations military analysis')
  console.log(`🌍 Countries: ${countries.length}`)
  console.log('='.repeat(80))

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      const summary = await generateMilitarySummary(country.name)

      // Skip if no data found
      if (!summary) {
        console.log(`⏭️  Skipping ${country.name} - no data available`)
        errorCount++
        continue
      }

      // Verify length requirement
      if (summary.length < 2500 || summary.length > 3500) {
        console.warn(`⚠️  Warning: Summary for ${country.name} is ${summary.length} chars (target: 2,500-3,500)`)
      }

      // Save to database with category='military'
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
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ MILITARY & DEFENSE summary generation complete!')
  console.log(`📈 Success: ${successCount}/${countries.length}`)
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`)
  }
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
