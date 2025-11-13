import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 3: Countries 30-44 for military & defense category
const countries = [
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'Russia', lat: 61.524, lng: 105.3188 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.473 },
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
  const prompt = `You are writing as a defense analyst in the style of Lawrence Freedman / Anne-Marie Slaughter - deeply informed, conversational, connecting military strategy to real human impact. You're analyzing the military and defense situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- GDP: ${stats.gdp}
- Freedom House Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

Write a comprehensive military & defense analysis (2,500-3,500 characters) that covers:

1. MILITARY SIZE & CAPABILITIES: Armed forces strength, branches, readiness, modernization efforts
2. DEFENSE SPENDING: Budget trends, % of GDP, procurement priorities, sustainability
3. ALLIANCES & SECURITY RELATIONSHIPS: NATO, bilateral partnerships, defense treaties, joint operations
4. RECENT CONFLICTS: Active conflicts, peacekeeping, military interventions, territorial disputes
5. NUCLEAR WEAPONS: Nuclear arsenal if applicable, doctrine, arms control commitments
6. VETERAN AFFAIRS: Treatment of veterans, social support, reintegration challenges

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect abstract military strategy to real human consequences and security implications
- Show the complexity - acknowledge modernization successes but be clear about challenges
- Use specific examples and current developments where relevant
- Explain "why this matters" for regional and global security
- Be analytical but humanistic - these decisions affect real lives
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
  console.log('🚀 Starting military & defense summary generation (Batch 3: Countries 30-44)\n')
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
  console.log('✅ BATCH 3 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
