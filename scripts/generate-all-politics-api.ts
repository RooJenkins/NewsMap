import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import { ALL_COUNTRIES } from './generation-helpers.js'

const prisma = new PrismaClient()

// Countries already completed
const COMPLETED = ['Argentina', 'Bolivia', 'Brazil', 'Canada', 'Chile']

// Rory Stewart voice prompt
const VOICE_PROMPT = `You are writing in the distinctive voice and style of Rory Stewart from The Rest is Politics.

**Voice Characteristics:**
- Conversational, like explaining to a friend over coffee
- Deep insider knowledge with casual delivery
- Connects personal anecdotes to broader points
- "Here's what's really going on behind the scenes"
- British sophistication with accessibility
- Geopolitical connections everywhere

**Opening Style:** Start with a recent event/meeting/decision, then zoom out

**Language Patterns:** "The thing to understand is...", "What's really happening here...", "Now this is where it gets interesting..."

**Avoid:** Academic jargon, overly formal language`

function generatePrompt(country: string): string {
  return `${VOICE_PROMPT}

---

Generate a comprehensive summary of **Politics** in **${country}** based on current 2024-2025 political developments.

Use your knowledge of recent political events, leadership, challenges, and dynamics in ${country}.

**Format:**

# ${country} - Politics

[Opening hook in Rory Stewart's distinctive style - ~150 words setting the political scene]

## The Big Issue 1: [Title]
[Deep dive ~200 words in Rory Stewart's voice - conversational, insider perspective]

## The Big Issue 2: [Title]
[Deep dive ~200 words in Rory Stewart's voice]

## The Big Issue 3: [Title]
[Deep dive ~200 words in Rory Stewart's voice]

## The International Angle
[~150 words on global implications and relationships in Rory Stewart's style]

## The Bottom Line
[~100 words synthesis and forward look in Rory Stewart's voice]

**CRITICAL REQUIREMENTS:**
- Write EXACTLY as Rory Stewart would write - conversational, insightful, connecting threads
- Be specific: names, dates, political events, policy details
- Target: 4,000-6,000 characters total
- Make it engaging and connect to broader geopolitical themes
- Stay true to the voice throughout - "here's what's really happening..."
- Use current 2024-2025 political situation

Generate the summary now:`
}

async function generatePoliticsSummary(
  country: string,
  anthropic: Anthropic
): Promise<{ summary: string; issues: string[] }> {
  const prompt = generatePrompt(country)

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract issues (look for ## The Big Issue headers)
    const issueMatches = summaryText.match(/## The Big Issue \d+: (.+)/g) || []
    const issues = issueMatches.map(match => match.replace(/## The Big Issue \d+: /, ''))

    return {
      summary: summaryText,
      issues
    }
  } catch (error) {
    console.error(`❌ Error generating Politics summary for ${country}:`, error)
    throw error
  }
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  console.log('🌍 Generating Politics Writeups - Rory Stewart Voice')
  console.log(`📊 Total countries: ${ALL_COUNTRIES.length}`)
  console.log(`✅ Already completed: ${COMPLETED.length}`)

  const remainingCountries = ALL_COUNTRIES.filter(c => !COMPLETED.includes(c.name))
  console.log(`📝 Remaining to generate: ${remainingCountries.length}`)
  console.log()

  let processed = 0
  let generated = 0
  let skipped = 0
  let errors = 0

  for (const country of remainingCountries) {
    processed++

    try {
      // Check if already exists in database
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'politics'
          }
        }
      })

      if (existing) {
        console.log(`⊘ ${processed}/${remainingCountries.length} - ${country.name} - already exists, skipping`)
        skipped++

        // Progress report every 25 countries
        if (processed % 25 === 0) {
          console.log(`\n=== PROGRESS REPORT (${processed}/${remainingCountries.length}) ===`)
          console.log(`Generated: ${generated} | Skipped: ${skipped} | Errors: ${errors}`)
          console.log(`Remaining: ${remainingCountries.length - processed}\n`)
        }
        continue
      }

      console.log(`\n📍 ${processed}/${remainingCountries.length} - ${country.name}`)
      console.log(`   🤖 Generating with Rory Stewart voice...`)

      const { summary, issues } = await generatePoliticsSummary(country.name, anthropic)

      console.log(`   💾 Saving to database...`)

      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'politics',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`   ✅ Saved successfully (${summary.length} chars, ${issues.length} issues)`)

      // Progress report every 25 countries
      if (processed % 25 === 0) {
        console.log(`\n=== PROGRESS REPORT (${processed}/${remainingCountries.length}) ===`)
        console.log(`Generated: ${generated} | Skipped: ${skipped} | Errors: ${errors}`)
        console.log(`Remaining: ${remainingCountries.length - processed}\n`)
      }

      // Rate limit: 1 request per second to avoid API limits
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error: any) {
      console.error(`   ❌ Error processing ${country.name}:`, error.message)
      errors++

      // Continue to next country after error
      if (processed % 25 === 0) {
        console.log(`\n=== PROGRESS REPORT (${processed}/${remainingCountries.length}) ===`)
        console.log(`Generated: ${generated} | Skipped: ${skipped} | Errors: ${errors}`)
        console.log(`Remaining: ${remainingCountries.length - processed}\n`)
      }
    }
  }

  console.log('\n\n' + '='.repeat(60))
  console.log('🎉 POLITICS GENERATION COMPLETE!')
  console.log('='.repeat(60))
  console.log(`Total processed: ${processed}`)
  console.log(`Successfully generated: ${generated}`)
  console.log(`Skipped (already existed): ${skipped}`)
  console.log(`Errors: ${errors}`)
  console.log('='.repeat(60))

  await prisma.$disconnect()
}

main()
  .catch((e) => {
    console.error('Fatal error:', e)
    process.exit(1)
  })
