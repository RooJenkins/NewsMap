import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 5: Countries 60-74 for military & defense category
const countries = [
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.886 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Bangladesh', lat: 23.685, lng: 90.3563 },
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7099 },
  { name: 'Iran', lat: 32.4279, lng: 53.688 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.991 },
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

  // Generate AI summary in Lawrence Freedman / Anne-Marie Slaughter strategic analysis voice
  const prompt = `You are writing as a strategic analyst in the style of Lawrence Freedman and Anne-Marie Slaughter - deeply informed about military affairs, geopolitics, and defense strategy. You combine rigorous analysis with accessibility, connecting military capabilities to broader strategic implications. You're analyzing the military and defense situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- GDP: ${stats.gdp}
- GDP per capita: ${stats.gdpPerCapita}
- Freedom House Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

Write a comprehensive military & defense analysis (2,500-3,500 characters) that covers:

1. MILITARY SIZE & CAPABILITIES: Active personnel, reserve forces, key military branches, overall combat readiness, technological sophistication
2. DEFENSE SPENDING: Military budget as % of GDP, procurement priorities, modernization programs, defense industrial base
3. ALLIANCES & SECURITY RELATIONSHIPS: Treaty obligations, defense partnerships, military cooperation agreements, strategic alignments
4. NUCLEAR WEAPONS: Nuclear arsenal (if any), delivery systems, doctrine, non-proliferation commitments
5. RECENT CONFLICTS: Current military operations, recent combat experience, peacekeeping deployments
6. VETERAN AFFAIRS: Size of veteran population, care systems, reintegration challenges
7. STRATEGIC CONTEXT: How this military fits into regional security dynamics, threat perceptions, defense posture evolution

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect military facts to strategic implications and real human impact
- Show the complexity - explain "why this matters" for regional and global security
- Use specific examples of weapons systems, force deployments, or strategic relationships where relevant
- Be analytical but grounded in strategic logic - explain the "so what"
- Consider both hard power (military capacity) and soft power (defense diplomacy)
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

  console.log(`✅ Generated military summary for ${countryName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting military & defense summary generation (Batch 5: Countries 60-74)\n')
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

      console.log(`💾 Saved military summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating military summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ BATCH 5 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
