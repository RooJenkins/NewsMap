import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 4: Countries 45-59 for military category
const countries = [
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Norway', lat: 60.472, lng: 8.4689 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Slovakia', lat: 48.669, lng: 19.699 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'China', lat: 35.0, lng: 105.0 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
]

async function generateMilitarySummary(countryName: string): Promise<{
  summary: string
  issues: string[]
}> {
  console.log(`\n🤖 Generating military & defense summary for ${countryName}...`)

  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName} - skipping`)
    return { summary: '', issues: [] }
  }

  // Generate AI summary in Lawrence Freedman / Anne-Marie Slaughter voice
  const prompt = `You are writing as a defense policy expert in the style of Lawrence Freedman and Anne-Marie Slaughter - deeply informed about military strategy, conversational yet analytical, connecting defense policy to real human impact and geopolitical consequences. You're analyzing the military and defense situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- GDP: ${stats.gdp}
- GDP per Capita: ${stats.gdpPerCapita}
- Freedom House Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

Write a comprehensive military & defense analysis (2,500-3,500 characters) that covers:

1. MILITARY SIZE & CAPABILITIES: Active personnel, reserve forces, force structure (army/navy/air force breakdown), equipment quality, modernization efforts, defense technology base
2. DEFENSE SPENDING: Military budget as % of GDP, spending trends, major procurement programs, defense industry capabilities
3. ALLIANCES & SECURITY RELATIONSHIPS: NATO/EU membership, bilateral defense pacts, military partnerships, foreign bases, arms suppliers
4. OPERATIONAL DEPLOYMENTS: Current conflicts, peacekeeping missions, military operations abroad, recent combat experience
5. NUCLEAR WEAPONS: Nuclear arsenal if applicable, nuclear doctrine, non-proliferation stance
6. VETERAN AFFAIRS: Treatment of veterans, military-civilian relations, conscription vs professional force
7. STRATEGIC POSITION: Geographic advantages/vulnerabilities, threat perception, defense priorities

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - deeply informed but accessible
- Connect military statistics to real strategic implications and human consequences
- Show complexity - acknowledge strengths and weaknesses honestly
- Explain "why this matters" - how defense policy affects regional security and ordinary lives
- Use specific examples of recent developments, procurement programs, or strategic shifts
- Be analytical but mindful that military policy affects soldiers, families, and citizens
- Length: 2,500-3,500 characters (not words - characters)

After the summary, list 3-5 major military & defense issues as brief phrases.

Format your response EXACTLY as follows:

## Summary
[Your 2,500-3,500 character military & defense analysis here]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3000,
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
    : []

  console.log(`✅ Generated military & defense summary for ${countryName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting military & defense summary generation (Batch 4: Countries 45-59)\n')
  console.log(`Processing ${countries.length} countries...\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${country.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues } = await generateMilitarySummary(country.name)

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
            category: 'military',
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
          category: 'military',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved military & defense summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating military & defense summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ BATCH 4 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
