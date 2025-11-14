import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 3: 15 European countries (numbers 30-44) for human rights category
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
  console.log('🚀 Starting human rights summary generation (Batch 3 - European Countries)\n')
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
