import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 1: First 14 countries for human rights category
const countries = [
  { name: 'United States', lat: 37.0902, lng: -95.7129 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Brazil', lat: -14.235, lng: -51.9253 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Chile', lat: -35.6751, lng: -71.543 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Peru', lat: -9.19, lng: -75.0152 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
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
  console.log('🚀 Starting human rights summary generation (Batch 1/10)\n')
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

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`❌ Error generating human rights summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ BATCH 1 COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
