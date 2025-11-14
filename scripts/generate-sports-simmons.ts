import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import { ALL_COUNTRIES } from './generation-helpers.js'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const CATEGORY = 'sports'

// Bill Simmons voice characteristics
const VOICE_PROMPT = `You are writing sports content in the voice of Bill Simmons from The Ringer and Grantland. Key characteristics:

**Voice:**
- Fan perspective with insider access
- Pop culture references constantly (movies, TV, music, historical events)
- Storytelling over statistics - make it narrative and personal
- "Remember when..." nostalgia - callbacks to past sports moments
- Playful conspiracy theories (not serious, just fun speculation)
- Parenthetical asides and footnotes energy - constant digressions that add color
- Rankings, lists, and hypotheticals
- "What if?" scenarios and alternate history
- Personal takes that feel like talking sports with a knowledgeable friend at a bar

**Format Requirements:**
1. Opening hook (2-3 paragraphs) - Start with a compelling story, moment, or question about sports in this country
2. The Big Issue 1 - Major sports story/trend (substantive analysis wrapped in conversational style)
3. The Big Issue 2 - Another major sports story/trend
4. The Big Issue 3 - Third major sports story/trend
5. The International Angle - How this country's sports scene connects globally
6. The Bottom Line - Wrap it up with your take

**Style notes:**
- Use lots of parentheticals (like this) and em-dashes
- Drop pop culture references naturally
- Ask rhetorical questions to engage reader
- Use specific player/team names and moments
- Mix reverence for great sports moments with irreverent humor
- Don't be afraid to digress into tangents
- "Remember when [historical sports moment]" callbacks
- Comparisons to other sports leagues/countries
- Light conspiracy theories for fun
- Personal hot takes presented as "here's the thing..."

Write a comprehensive sports summary for the country that covers current state of sports (November 2025), major issues, storylines, and international connections. Aim for 1200-1500 words total.`

async function generateCountryWriteup(country: typeof ALL_COUNTRIES[0]): Promise<{ summary: string; issues: string[] }> {
  const prompt = `${VOICE_PROMPT}

Now write a sports summary for: **${country.name}**

Consider:
- Popular sports in this country (soccer, cricket, basketball, baseball, rugby, etc.)
- Recent major tournaments, competitions, or events (November 2025)
- Star athletes and their stories
- League dynamics and team rivalries
- Youth development and emerging talent
- Sports infrastructure and investment
- International competitions and national team performance
- Social/cultural role of sports in the country
- Economic aspects (player transfers, sports betting, media rights)
- Any controversies, scandals, or major debates

Format as markdown with:
# ${country.name} - Sports

[Opening hook paragraphs]

## The Big Issue 1: [Title]
[Content]

## The Big Issue 2: [Title]
[Content]

## The Big Issue 3: [Title]
[Content]

## The International Angle
[Content]

## The Bottom Line
[Content]`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  // Extract the three main issues from the writeup
  const issueMatches = summary.match(/## The Big Issue \d+: (.+)/g) || []
  const issues = issueMatches.map(match => match.replace(/## The Big Issue \d+: /, '').trim())

  return { summary, issues }
}

async function checkExisting(countryName: string): Promise<boolean> {
  const existing = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: countryName,
        type: 'country',
        category: CATEGORY
      }
    }
  })
  return !!existing
}

async function saveWriteup(
  country: typeof ALL_COUNTRIES[0],
  summary: string,
  issues: string[]
) {
  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: country.name,
        type: 'country',
        category: CATEGORY
      }
    },
    create: {
      name: country.name,
      type: 'country',
      country: country.name,
      lat: country.lat,
      lng: country.lng,
      category: CATEGORY,
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

async function main() {
  console.log(`\n🏀 SPORTS WRITEUPS - BILL SIMMONS VOICE`)
  console.log(`Generating for all ${ALL_COUNTRIES.length} countries...\n`)

  let completed = 0
  let skipped = 0
  let generated = 0

  for (let i = 0; i < ALL_COUNTRIES.length; i++) {
    const country = ALL_COUNTRIES[i]

    // Check if already exists
    const exists = await checkExisting(country.name)
    if (exists) {
      console.log(`⏭️  ${i + 1}/${ALL_COUNTRIES.length} - ${country.name} (already exists)`)
      skipped++
      completed++

      // Report every 25 countries
      if (completed % 25 === 0) {
        console.log(`\n📊 PROGRESS REPORT - ${completed}/${ALL_COUNTRIES.length} countries processed`)
        console.log(`   ✅ Generated: ${generated}`)
        console.log(`   ⏭️  Skipped: ${skipped}\n`)
      }
      continue
    }

    try {
      console.log(`🏈 ${i + 1}/${ALL_COUNTRIES.length} - Generating ${country.name}...`)
      const { summary, issues } = await generateCountryWriteup(country)
      await saveWriteup(country, summary, issues)
      generated++
      completed++
      console.log(`   ✅ Saved (${issues.length} issues)`)

      // Report every 25 countries
      if (completed % 25 === 0) {
        console.log(`\n📊 PROGRESS REPORT - ${completed}/${ALL_COUNTRIES.length} countries processed`)
        console.log(`   ✅ Generated: ${generated}`)
        console.log(`   ⏭️  Skipped: ${skipped}\n`)
      }

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`   ❌ Error generating ${country.name}:`, error)
    }
  }

  console.log(`\n🎉 COMPLETE!`)
  console.log(`   Total: ${ALL_COUNTRIES.length}`)
  console.log(`   Generated: ${generated}`)
  console.log(`   Skipped: ${skipped}`)
  console.log(`   Category: ${CATEGORY}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
