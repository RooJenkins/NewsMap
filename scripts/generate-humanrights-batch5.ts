import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 5: Human Rights category summaries - Countries 60-74
const countries = [
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
]

const CATEGORY = 'humanrights'

async function generateHumanRightsSummary(
  countryName: string
): Promise<string> {
  console.log(`\n🤖 Generating human rights summary for ${countryName}...`)

  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName} - skipping`)
    return ''
  }

  const prompt = `You are writing in the voice of Samantha Power, the renowned human rights journalist and former US Ambassador to the UN. Write in the style of "The Rest is Politics" podcast - conversational but deeply informed, connecting human rights issues to real human impact. Your task is to create a compelling analysis of the human rights situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- Freedom House Status: ${stats.freedomStatus}
- GDP per capita: ${stats.gdpPerCapita}
- Capital: ${stats.capital}

Write a 2,500-3,500 character summary covering:

ESSENTIAL TOPICS:
- Freedom of press, speech, and assembly: State of journalism, censorship, media restrictions, digital surveillance
- Women's rights: Gender equality, reproductive rights, violence against women, economic participation, legal protections
- LGBTQ+ rights: Legal status, societal attitudes, discrimination, safety concerns, recent developments
- Minority rights: Treatment of ethnic/religious minorities, discrimination patterns, persecution
- Political prisoners: Arbitrary detention, treatment of activists, fair trial rights, torture
- International human rights rankings: Freedom House scores, Human Rights Watch reports, UN mechanisms

"REST IS POLITICS" STYLE REQUIREMENTS:
- Start with a specific human story or recent incident that illustrates the broader pattern
- Conversational but deeply informed - explain "Here's why this matters..."
- Connect abstract rights to real human impact on ordinary people's lives
- Use accessible language: "What's actually happening is..." or "The reality for citizens is..."
- Acknowledge complexity and progress where it exists, but be unflinching about abuses
- Compare to regional neighbors or global standards where illuminating
- End with forward-looking analysis: What's the trajectory? What are the pressure points for change?

VOICE & TONE:
- Write as if explaining to an intelligent friend over coffee
- Compassionate but clear-eyed about the facts
- Use specific examples: names of activists, laws, dates of crackdowns
- Show how individual stories reflect systemic issues
- Balance moral clarity with analytical nuance

Make this urgent, essential reading that connects policy to human lives. Strong, clear prose.

Target: 2,500-3,500 characters (not words). Be comprehensive but punchy.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2500,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName}`)
  console.log(`   Length: ${summary.length} characters`)

  return summary
}

async function main() {
  console.log('🚀 Starting Human Rights summary generation (Batch 5: Countries 60-74)\n')
  console.log(`Countries: ${countries.map(c => c.name).join(', ')}\n`)
  console.log(`Category: ${CATEGORY}`)
  console.log(`Voice: Samantha Power / "Rest is Politics" style`)
  console.log(`Target length: 2,500-3,500 characters\n`)
  console.log('='.repeat(80))

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      console.log(`\n📍 Processing: ${country.name}`)

      const summary = await generateHumanRightsSummary(country.name)

      // Skip if no summary generated (country data not found)
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
            category: CATEGORY,
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
          category: CATEGORY,
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved to database`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls
      if (country !== countries[countries.length - 1]) {
        console.log('⏳ Waiting 2 seconds...')
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    } catch (error) {
      console.error(`❌ Error generating summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Human Rights summary generation complete!')
  console.log(`\nResults:`)
  console.log(`  ✅ Success: ${successCount}/${countries.length}`)
  console.log(`  ❌ Errors: ${errorCount}/${countries.length}`)
  console.log(`\nCategory: ${CATEGORY}`)
  console.log(`Batch: 5/10`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
