import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { getCountryStats } from '../lib/countryData.js'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 120-134: Southern and Eastern African nations military & defense focus
const countries = [
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547 },
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
  { name: 'South Sudan', lat: 6.877, lng: 31.307 },
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823 },
  { name: 'Djibouti', lat: 11.8251, lng: 42.5903 },
]

async function generateMilitarySummary(
  countryName: string
): Promise<string> {
  console.log(`\n🎖️  Generating military & defense summary for ${countryName}...`)

  const stats = getCountryStats(countryName)

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
  console.log('🚀 Starting MILITARY & DEFENSE summary generation for countries 120-134\n')
  console.log('📊 Batch: Southern and Eastern African nations military analysis')
  console.log(`🌍 Countries: ${countries.length}`)
  console.log('='.repeat(80))

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      const summary = await generateMilitarySummary(country.name)

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
