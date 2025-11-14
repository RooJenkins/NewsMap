import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import { ALL_COUNTRIES } from './generation-helpers.js'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

// Wesley Morris voice prompt for Culture & Arts
const WESLEY_MORRIS_PROMPT = `You are writing in the distinctive voice and style of Wesley Morris, the New York Times culture critic.

VOICE CHARACTERISTICS:
- Deep cultural analysis with accessibility
- Connects art to social movements, race, and identity
- Personal yet universal observations
- Joyful engagement with culture even when being critical
- Critical without being dismissive
- "This is about more than just [art form]" - always finding deeper meaning
- Race, identity, and representation awareness
- Sensory, vivid descriptions
- Rhetorical questions that invite reflection
- Cultural references that illuminate

OPENING STYLE: Start with a cultural moment or artistic work that reveals something deeper about the country's identity

LANGUAGE: Vivid, sensory descriptions; rhetorical questions; cultural references; accessible but sophisticated

AVOID: Superficial celebrity gossip, mere plot summaries, academic jargon, dismissive snark

Generate a comprehensive summary of CULTURE & ARTS in {COUNTRY} based on recent cultural developments in November 2025.

**Format:**
# {COUNTRY} - Culture & Arts

[Opening hook in Wesley Morris's voice - ~150-200 words that captures a cultural tension or moment]

## The Big Issue 1: [Compelling Title]
[Deep cultural analysis ~200-250 words exploring an art form, cultural movement, or creative scene in Wesley Morris's voice - connect to identity, social movements, deeper meaning]

## The Big Issue 2: [Compelling Title]
[Deep cultural analysis ~200-250 words on another cultural dimension - museums, music, film, literature, performance, etc.]

## The Big Issue 3: [Compelling Title]
[Deep cultural analysis ~200-250 words on cultural politics, representation, or artistic innovation]

## The International Angle
[~150-200 words on how this country's culture engages globally, influences or is influenced by international trends]

## The Bottom Line
[~100-150 words synthesis in Wesley Morris voice - what this cultural moment reveals about the country, where culture is heading]

REQUIREMENTS:
- Write as Wesley Morris would write about culture
- Focus on REAL cultural developments, artists, exhibitions, performances, albums, films from November 2025
- Be specific: names of artists, titles of works, venues, cultural institutions
- Connect individual artistic works to broader themes of identity, society, politics
- Target: 4,500-6,000 characters
- Engaging, insightful, joyful even when critical
- Always find the deeper meaning - art as window into society

Generate for {COUNTRY} focusing on its unique cultural landscape, artistic traditions, contemporary creative scenes, and how culture reflects national identity and social change.`

// Get all countries that need culture writeups
async function getRemainingCountries() {
  const existing = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'culture'
    },
    select: { name: true }
  })

  const existingNames = new Set(existing.map(e => e.name))
  return ALL_COUNTRIES.filter(c => !existingNames.has(c.name))
}

// Generate culture writeup for a single country
async function generateCultureWriteup(countryName: string): Promise<string> {
  const prompt = WESLEY_MORRIS_PROMPT.replace(/{COUNTRY}/g, countryName)

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      temperature: 1,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const content = message.content[0]
    if (content.type === 'text') {
      return content.text
    }
    throw new Error('Unexpected response type')
  } catch (error) {
    console.error(`Error generating writeup for ${countryName}:`, error)
    throw error
  }
}

// Save culture writeup to database
async function saveCultureWriteup(
  country: typeof ALL_COUNTRIES[0],
  summary: string
) {
  // Extract issues from summary
  const issueMatches = summary.match(/## The Big Issue \d+: (.+)/g) || []
  const issues = issueMatches.map(match =>
    match.replace(/## The Big Issue \d+: /, '').trim()
  )

  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: country.name,
        type: 'country',
        category: 'culture'
      }
    },
    create: {
      name: country.name,
      type: 'country',
      country: country.name,
      lat: country.lat,
      lng: country.lng,
      category: 'culture',
      summary,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify([]),
      storyCount: 0,
      updatedAt: new Date()
    },
    update: {
      summary,
      issues: JSON.stringify(issues),
      updatedAt: new Date()
    }
  })
}

// Main generation function
async function generateAllRemainingCulture() {
  console.log('\n🎭 CULTURE & ARTS - WESLEY MORRIS VOICE')
  console.log('Generating remaining countries...\n')

  const remainingCountries = await getRemainingCountries()
  console.log(`📊 Found ${remainingCountries.length} countries to generate\n`)

  if (remainingCountries.length === 0) {
    console.log('✅ All countries already have culture writeups!')
    return
  }

  let successCount = 0
  let errorCount = 0
  const startTime = Date.now()

  for (let i = 0; i < remainingCountries.length; i++) {
    const country = remainingCountries[i]
    const countryNum = i + 1

    console.log(`\n[${countryNum}/${remainingCountries.length}] 🎨 ${country.name}`)

    try {
      // Generate writeup
      console.log('  ⏳ Generating with Claude...')
      const summary = await generateCultureWriteup(country.name)

      // Save to database
      console.log('  💾 Saving to database...')
      await saveCultureWriteup(country, summary)

      successCount++
      const charCount = summary.length
      console.log(`  ✅ Success (${charCount} chars)`)

      // Report every 25 countries
      if (countryNum % 25 === 0 || countryNum === remainingCountries.length) {
        const elapsed = Math.round((Date.now() - startTime) / 1000)
        const rate = (successCount / elapsed * 60).toFixed(1)
        console.log(`\n📈 PROGRESS REPORT:`)
        console.log(`   Completed: ${successCount}/${remainingCountries.length}`)
        console.log(`   Errors: ${errorCount}`)
        console.log(`   Rate: ${rate} countries/min`)
        console.log(`   Elapsed: ${Math.floor(elapsed / 60)}m ${elapsed % 60}s`)

        if (countryNum < remainingCountries.length) {
          const remaining = remainingCountries.length - countryNum
          const eta = Math.round(remaining / (successCount / elapsed) / 60)
          console.log(`   ETA: ~${eta} minutes\n`)
        }
      }

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      errorCount++
      console.error(`  ❌ Failed:`, error)

      // Longer delay on error
      await new Promise(resolve => setTimeout(resolve, 3000))
    }
  }

  const totalTime = Math.round((Date.now() - startTime) / 1000)
  console.log(`\n\n✅ GENERATION COMPLETE!`)
  console.log(`   Success: ${successCount}/${remainingCountries.length}`)
  console.log(`   Errors: ${errorCount}`)
  console.log(`   Total time: ${Math.floor(totalTime / 60)}m ${totalTime % 60}s`)
  console.log(`   Average: ${(totalTime / successCount).toFixed(1)}s per country`)
}

// Run generation
generateAllRemainingCulture()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
