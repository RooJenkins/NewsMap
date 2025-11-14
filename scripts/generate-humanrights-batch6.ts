import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 6: Countries 75-89 (15 countries) for human rights category
const countries = [
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
]

async function generateHumanRightsSummary(countryName: string): Promise<{
  summary: string
  issues: string[]
}> {
  console.log(`\n🤖 Generating human rights summary for ${countryName}...`)

  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName} - skipping`)
    return { summary: '', issues: [] }
  }

  // Generate AI summary in Samantha Power / human rights journalist voice
  const prompt = `You are writing as a human rights journalist in the style of Samantha Power - deeply informed, conversational, connecting human rights to real human impact. You're analyzing the human rights situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- Freedom House Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

Write a comprehensive human rights analysis (2,500-3,500 characters) that covers:

1. PRESS/SPEECH/ASSEMBLY FREEDOM: Current state of media freedom, censorship, journalist safety, protest rights
2. WOMEN'S RIGHTS: Gender equality, reproductive rights, violence against women, economic participation
3. LGBTQ+ RIGHTS: Legal protections, social acceptance, discrimination, violence
4. MINORITY RIGHTS: Treatment of ethnic, religious, racial minorities; discrimination patterns
5. POLITICAL PRISONERS: Arbitrary detention, freedom of political opposition
6. INTERNATIONAL CONTEXT: How ${countryName} ranks in global human rights indices, international pressure

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect abstract rights to real human stories and consequences
- Show the complexity - acknowledge progress where it exists, but be unflinching about abuses
- Use specific examples and current developments where relevant
- Be analytical but empathetic - these are real lives at stake
- Length: 2,500-3,500 characters (not words - characters)

After the summary, list 3-5 major human rights issues as brief phrases.

Format your response EXACTLY as follows:

## Summary
[Your 2,500-3,500 character human rights analysis here]

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

  console.log(`✅ Generated human rights summary for ${countryName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting human rights summary generation (Batch 6 - Countries 75-89)\n')
  console.log(`Processing ${countries.length} countries...\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${country.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues } = await generateHumanRightsSummary(country.name)

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
            category: 'humanrights',
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
          category: 'humanrights',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved human rights summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls to avoid overwhelming the API
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating human rights summary for ${country.name}:`, error)
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
