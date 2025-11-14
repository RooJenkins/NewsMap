import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'
import { countryCoordinates } from '../lib/countryCoordinates'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Get all countries from countryData
const allCountries = Object.keys(countryData).map((name) => ({
  name,
  lat: countryCoordinates[name]?.lat || 0,
  lng: countryCoordinates[name]?.lng || 0,
}))

console.log(`\n📊 Found ${allCountries.length} countries in database`)

async function generateMilitarySummary(countryName: string): Promise<{
  summary: string
  issues: string[]
}> {
  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName} - skipping`)
    return { summary: '', issues: [] }
  }

  // Generate AI summary in Lawrence Freedman / Anne-Marie Slaughter style
  const prompt = `You are writing as a defense analyst in the style of Lawrence Freedman and Anne-Marie Slaughter - deeply informed, conversational, connecting military strategy to real human impact and geopolitical consequences. You're analyzing the military and defense posture of ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- GDP: ${stats.gdp} (Per capita: ${stats.gdpPerCapita})
- Freedom Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

Write a comprehensive military & defense analysis (2,500-3,500 characters) that covers:

1. MILITARY SIZE & CAPABILITIES: Force structure (army, navy, air force), personnel numbers, technological sophistication, readiness levels
2. DEFENSE SPENDING & PROCUREMENT: Budget levels (% of GDP if relevant), major weapons systems, modernization priorities, defense industrial base
3. ALLIANCES & SECURITY RELATIONSHIPS: NATO/regional alliances, bilateral defense partnerships, security guarantees, military exercises
4. RECENT CONFLICTS & DEPLOYMENTS: Current or recent military operations, peacekeeping, counter-terrorism, border conflicts
5. NUCLEAR WEAPONS: Nuclear arsenal status if applicable, non-proliferation stance, strategic deterrence
6. VETERAN AFFAIRS: Treatment of veterans, military-society relations, conscription vs volunteer force
7. STRATEGIC CHALLENGES: Primary threats, force planning priorities, civil-military relations

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect abstract military concepts to real strategic consequences and human impact
- Explain "why this matters" - what these military capabilities mean for regional stability, global security
- Show the complexity - acknowledge both strengths and vulnerabilities
- Use specific examples where relevant (recent procurements, exercises, deployments)
- Be analytical but grounded in human reality - these decisions affect soldiers' lives and national security
- Length: 2,500-3,500 characters (not words - characters)

After the summary, list 3-5 major military/defense issues as brief phrases.

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

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting Military & Defense summary generation for ALL countries\n')
  console.log(`Processing ${allCountries.length} countries...\n`)

  let successCount = 0
  let errorCount = 0
  let skipCount = 0
  const startTime = Date.now()

  for (let i = 0; i < allCountries.length; i++) {
    const country = allCountries[i]
    const progress = `[${i + 1}/${allCountries.length}]`

    console.log(`\n${progress} Processing: ${country.name}`)

    try {
      const { summary, issues } = await generateMilitarySummary(country.name)

      // Skip if no data found
      if (!summary) {
        console.log(`⏭️  Skipping ${country.name} - no data available`)
        skipCount++
        continue
      }

      // Validate summary length
      if (summary.length < 500) {
        console.log(`⚠️  Warning: ${country.name} summary too short (${summary.length} chars)`)
      } else if (summary.length > 4000) {
        console.log(`⚠️  Warning: ${country.name} summary too long (${summary.length} chars)`)
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

      console.log(`✅ ${country.name}: ${summary.length} chars, ${issues.length} issues`)
      successCount++

      // Rate limiting - wait 1 second between API calls to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error instanceof Error ? error.message : error)
      errorCount++
    }
  }

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(2)

  console.log('\n' + '='.repeat(80))
  console.log('✅ GENERATION COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`⏭️  Skipped: ${skipCount} countries`)
  console.log(`📊 Total: ${allCountries.length} countries`)
  console.log(`⏱️  Duration: ${duration} minutes`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
