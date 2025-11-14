import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 2 countries for HUMAN RIGHTS category (Countries 15-29 from master list)
const BATCH_2_COUNTRIES = [
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Honduras', lat: 15.2, lng: -86.2419 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Panama', lat: 8.5379, lng: -80.7821 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Trinidad and Tobago', lat: 10.6918, lng: -61.2225 },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.436 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
]

async function generateHumanRightsSummary(countryName: string): Promise<string> {
  const stats = countryData[countryName]

  if (!stats) {
    console.log(`  ⚠️  No stats found for ${countryName}, skipping...`)
    return ''
  }

  const prompt = `You are a human rights journalist writing in the style of Samantha Power meets "The Rest is Politics" podcast - combining moral clarity with conversational accessibility, rigorous analysis with human empathy. Write a comprehensive HUMAN RIGHTS summary for ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Freedom House Status: ${stats.freedomStatus}
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}

FOCUS AREAS (weave these together naturally):
- Freedom of press, speech, and assembly - who can speak, who gets silenced
- Women's rights - from reproductive rights to political voice to safety
- LGBTQ+ rights - legal protections, cultural acceptance, lived reality
- Minority rights - indigenous peoples, ethnic/religious minorities, discrimination patterns
- Political prisoners and rule of law - who's in jail for their beliefs, judicial independence
- International rankings and assessments (Freedom House, Reporters Without Borders, HRW)

VOICE & STYLE ("Rest is Politics" approach):
- Conversational but deeply informed - like explaining to a smart, engaged friend
- Connect abstract rights to real human stories and impact
- Explain "why this matters" - what's at stake for actual people living there
- Be honest about complexity - avoid oversimplification
- Use vivid, specific examples that bring issues to life
- Show how human rights connect to broader political and economic forces
- Note progress and hope where they genuinely exist
- Unflinching about abuses but contextually aware
- Write with moral clarity but analytical rigor

LENGTH: Exactly 2,500-3,500 characters (use the full space!)

STRUCTURE:
Write flowing, engaging prose WITHOUT formal headings or bullet points. Weave all themes together naturally.

Start with the Freedom House status as your frame, then explore what that really means for people's daily lives. Cover press freedom, women's rights, LGBTQ+ issues, minority rights, and political prisoners - but make it feel like a cohesive story, not a checklist.

End with what this all means - the trajectory, what to watch, why it matters beyond ${countryName}'s borders.

Write the summary now. Make every character count. Make readers care.`

  console.log(`  🤖 Generating human rights summary for ${countryName}...`)

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  })

  const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`  ✅ Generated ${summaryText.length} characters`)

  return summaryText
}

async function main() {
  console.log('🌍 GENERATING HUMAN RIGHTS CATEGORY SUMMARIES - BATCH 2/10\n')
  console.log(`Countries: ${BATCH_2_COUNTRIES.map(c => c.name).join(', ')}\n`)
  console.log('Category: humanrights')
  console.log('Voice: Samantha Power / human rights journalist')
  console.log('Length: 2,500-3,500 characters\n')
  console.log('='.repeat(80))

  let generated = 0
  let skipped = 0
  let failed = 0

  for (const country of BATCH_2_COUNTRIES) {
    console.log(`\n📍 Processing: ${country.name}`)

    try {
      const summary = await generateHumanRightsSummary(country.name)

      if (!summary) {
        skipped++
        continue
      }

      // Save to database with category='humanrights'
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
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
      })

      generated++
      console.log(`  💾 Saved to database`)

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`  ❌ Error:`, error)
      failed++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('\n✅ BATCH 2 COMPLETE!\n')
  console.log(`Results:`)
  console.log(`  ✅ Generated: ${generated}`)
  console.log(`  ⏭️  Skipped: ${skipped}`)
  console.log(`  ❌ Failed: ${failed}`)
  console.log(`\nTotal countries processed: ${BATCH_2_COUNTRIES.length}`)

  if (generated > 0) {
    console.log(`\n📊 Database Stats:`)
    const totalHumanRights = await prisma.locationSummary.count({
      where: { category: 'humanrights' }
    })
    console.log(`  Human Rights summaries: ${totalHumanRights}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
