import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 6: Countries 75-89 for military & defense category
const countries = [
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.956 },
  { name: 'Nepal', lat: 28.3949, lng: 84.124 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Papua New Guinea', lat: -6.315, lng: 143.9555 },
  { name: 'Fiji', lat: -17.7134, lng: 178.065 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Thailand', lat: 15.87, lng: 100.9925 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Philippines', lat: 12.8797, lng: 121.774 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
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
  const prompt = `You are a defense and security analyst writing in the style of Lawrence Freedman and Anne-Marie Slaughter - deeply informed about military strategy and security policy, conversational but rigorous, connecting defense issues to real geopolitical consequences and human impact. You're analyzing the military and defense posture of ${countryName}.

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

1. MILITARY SIZE & CAPABILITIES: Active personnel, force structure, readiness levels, technological sophistication
2. DEFENSE SPENDING: Budget trends, percentage of GDP, procurement priorities, modernization efforts
3. ALLIANCES & SECURITY RELATIONSHIPS: Key defense partnerships, treaty obligations, joint exercises, foreign military presence
4. RECENT CONFLICTS: Current/recent military engagements, border tensions, counterinsurgency operations
5. VETERAN AFFAIRS: Treatment of former service members, pension systems, reintegration challenges
6. NUCLEAR/WMD STATUS: Nuclear weapons capability, non-proliferation commitments, strategic deterrence

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect military statistics to real strategic consequences and human costs
- Show the complexity - defense isn't just hardware, it's about alliances, deterrence, and human lives
- Use strategic analysis to explain "why this matters" for regional stability
- Be analytical but acknowledge the human dimension - soldiers, veterans, civilians affected by military policy
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
  console.log('🚀 Starting military & defense summary generation (Batch 6 - Countries 75-89)\n')
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
  console.log('✅ BATCH 6 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
