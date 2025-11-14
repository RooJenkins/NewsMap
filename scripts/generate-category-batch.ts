// Load environment variables manually instead of using dotenv
import { readFileSync } from 'fs'
import { existsSync } from 'fs'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

// Manually load .env if it exists
if (existsSync('/home/user/NewsMap/.env')) {
  const envContent = readFileSync('/home/user/NewsMap/.env', 'utf-8')
  envContent.split('\n').forEach((line) => {
    if (line.trim() && !line.startsWith('#')) {
      const [key, ...values] = line.split('=')
      const value = values.join('=').trim()
      if (value.startsWith('"') && value.endsWith('"')) {
        process.env[key.trim()] = value.slice(1, -1)
      } else {
        process.env[key.trim()] = value
      }
    }
  })
}

const prisma = new PrismaClient()

// Read all countries
const allCountries = JSON.parse(
  readFileSync('/home/user/NewsMap/ALL_COUNTRIES.json', 'utf-8')
) as Array<{ name: string; lat: number; lng: number }>

// Get command line arguments
const batchNum = parseInt(process.argv[2]) || 1
const category = process.argv[3] || 'crime'

if (!['crime', 'energy'].includes(category)) {
  console.error('Category must be "crime" or "energy"')
  process.exit(1)
}

if (batchNum < 1 || batchNum > 10) {
  console.error('Batch number must be between 1 and 10')
  process.exit(1)
}

// Divide into 10 batches
const batchSize = Math.ceil(allCountries.length / 10)
const startIdx = (batchNum - 1) * batchSize
const endIdx = Math.min(startIdx + batchSize, allCountries.length)
const batchCountries = allCountries.slice(startIdx, endIdx)

console.log(`\n${'='.repeat(80)}`)
console.log(`BATCH ${batchNum} - ${category.toUpperCase()} CATEGORY`)
console.log(`Processing ${batchCountries.length} countries (${startIdx + 1}-${endIdx} of ${allCountries.length})`)
console.log('='.repeat(80))
console.log()

// Category-specific prompts
const CATEGORY_PROMPTS = {
  crime: {
    voice: 'Preet Bharara (former US Attorney) and Jeffrey Toobin (legal analyst)',
    focus: `Crime rates and trends, justice system structure, police forces, prisons, incarceration rates, major cases, corruption trials, rule of law, organized crime`,
    sections: `
## Crime Landscape
[Current crime rates, notable trends, types of crime, geographic patterns, recent major incidents]

## Justice System
[Court structure, judicial independence, prosecution/defense capabilities, legal reforms]

## Law Enforcement
[Police structure, corruption levels, community relations, training and professionalization]

## Corrections & Incarceration
[Prison system, conditions, incarceration rates, rehabilitation approach, major issues]

## Key Cases & Investigations
[High-profile cases, corruption trials, ongoing investigations]

## Summary
[Final synthesis of crime and justice landscape]`
  },
  energy: {
    voice: 'Daniel Yergin (energy historian and analyst)',
    focus: `Energy mix (fossil fuels vs renewables), major energy resources, energy independence/dependence, power grid infrastructure, energy prices, future energy strategy, climate implications`,
    sections: `
## Energy Mix
[Current energy sources breakdown, fossil fuels vs renewables vs nuclear, recent shifts]

## Energy Resources & Production
[Domestic resources, key infrastructure, production trends, export/import dynamics]

## Energy Independence & Security
[Self-sufficiency, import dependence, trade partners, strategic vulnerabilities]

## Power Grid & Infrastructure
[Generation capacity, grid reliability, modernization efforts, access rates]

## Energy Prices & Economics
[Consumer prices, industrial costs, subsidies, economic impact]

## Future Energy Strategy
[Government plans, renewable investments, climate commitments, transition policies]

## Summary
[Final synthesis of energy landscape and trajectory]`
  }
}

const categoryInfo = CATEGORY_PROMPTS[category as keyof typeof CATEGORY_PROMPTS]

interface StoryForSummary {
  title: string
  link: string
  source: string
  pubDate: Date
  description: string | null
  importance: number
}

// Find stories relevant to a location
function findStoriesForLocation(
  countryName: string,
  allStories: StoryForSummary[]
): StoryForSummary[] {
  const keywords = [countryName.toLowerCase()]

  // Add common variations
  const variations: { [key: string]: string[] } = {
    'United States of America': ['usa', 'us', 'america', 'american', 'washington'],
    'United Kingdom': ['uk', 'britain', 'british', 'england', 'london'],
    'United Republic of Tanzania': ['tanzania', 'tanzanian'],
    'Democratic Republic of the Congo': ['drc', 'congo', 'congolese'],
    'Republic of the Congo': ['congo brazzaville', 'congo-brazzaville'],
    'Republic of Serbia': ['serbia', 'serbian'],
    'South Korea': ['korea', 'korean', 'seoul'],
    'North Korea': ['dprk', 'pyongyang'],
  }

  if (variations[countryName]) {
    keywords.push(...variations[countryName])
  }

  // Filter stories that mention this location
  const relevantStories = allStories.filter((story) => {
    const text = `${story.title} ${story.description || ''}`.toLowerCase()
    return keywords.some((keyword) => text.includes(keyword))
  })

  // Sort by importance and recency, take top 20
  return relevantStories
    .sort((a, b) => {
      const scoreA =
        a.importance + (Date.now() - a.pubDate.getTime() > 86400000 ? -0.2 : 0)
      const scoreB =
        b.importance + (Date.now() - b.pubDate.getTime() > 86400000 ? -0.2 : 0)
      return scoreB - scoreA
    })
    .slice(0, 20)
}

// Generate AI summary
async function generateCategorySummary(
  country: { name: string; lat: number; lng: number },
  stories: StoryForSummary[]
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  // Prepare story context
  const storyContext =
    stories.length > 0
      ? stories
          .map(
            (s, i) =>
              `${i + 1}. "${s.title}" - ${s.source} (${s.pubDate.toLocaleDateString()})\n   ${s.description || 'No description'}`
          )
          .join('\n\n')
      : 'No recent news stories found. Generate a summary based on general knowledge of this country.'

  const prompt = `You are an expert analyst writing about ${category === 'crime' ? 'crime and justice' : 'energy'} for ${country.name}.

VOICE & STYLE: Write in the authoritative, analytical style of ${categoryInfo.voice}.

FOCUS AREAS: ${categoryInfo.focus}

${stories.length > 0 ? `RECENT NEWS STORIES (November 2025):\n${storyContext}\n` : ''}

Generate a comprehensive summary (2,500-3,500 characters) about ${category === 'crime' ? 'crime and justice' : 'energy'} in ${country.name} following this structure:

# ${country.name}: ${category === 'crime' ? 'Crime & Justice' : 'Energy'}

[Opening paragraph: 1-2 sentences setting context]

${categoryInfo.sections}

IMPORTANT REQUIREMENTS:
- Length: 2,500-3,500 characters (approximately 400-600 words)
- Professional, analytical tone
- Specific data points, numbers, and examples
- Evidence-based analysis
- Focus ONLY on ${category === 'crime' ? 'crime and justice' : 'energy'} topics
- If limited news stories, use general knowledge about the country's ${category} situation
- Include recent developments from November 2025 when available
- Make it actionable for professionals (business, policy, investment)

Generate the summary now:`

  try {
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

    const summaryText =
      message.content[0].type === 'text' ? message.content[0].text : ''

    // Verify length
    if (summaryText.length < 2000) {
      console.warn(`  ⚠️  Summary too short (${summaryText.length} chars), but saving anyway`)
    } else if (summaryText.length > 4000) {
      console.warn(`  ⚠️  Summary too long (${summaryText.length} chars), truncating...`)
    }

    // Extract issues from section headers
    const issueMatches = summaryText.match(/##\s+([^\n]+)/g) || []
    const issues = issueMatches
      .map((match) => match.replace(/##\s+/, '').trim())
      .filter((issue) => issue !== 'Summary')
      .slice(0, 6)

    // Top stories for links
    const topStories = stories.slice(0, 10).map((s) => ({
      title: s.title,
      source: s.source,
      link: s.link,
      pubDate: s.pubDate.toISOString(),
    }))

    return {
      summary: summaryText.slice(0, 4000), // Cap at 4000 chars
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories),
    }
  } catch (error) {
    console.error(`  ❌ Error generating summary: ${error}`)
    throw error
  }
}

// Main execution
async function generateBatch() {
  const startTime = Date.now()

  // Load all stories (last 30 days for better coverage)
  console.log('📰 Loading recent news stories...')
  const allStories = await prisma.story.findMany({
    select: {
      title: true,
      link: true,
      source: true,
      pubDate: true,
      description: true,
      importance: true,
    },
    where: {
      pubDate: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  })

  console.log(`📊 Found ${allStories.length} recent stories\n`)

  let generated = 0
  let skipped = 0

  for (let i = 0; i < batchCountries.length; i++) {
    const country = batchCountries[i]
    const countryNum = startIdx + i + 1

    console.log(`\n[${countryNum}/${allCountries.length}] Processing: ${country.name}`)

    try {
      // Find relevant stories
      const relevantStories = findStoriesForLocation(country.name, allStories)
      console.log(`  📰 Found ${relevantStories.length} relevant stories`)

      // Generate summary
      console.log(`  🤖 Generating ${category} summary...`)
      const { summary, issues, topStories } = await generateCategorySummary(
        country,
        relevantStories
      )

      console.log(`  ✅ Generated (${summary.length} characters)`)

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: category,
          },
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: category,
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date(),
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date(),
        },
      })

      console.log(`  💾 Saved to database`)
      generated++

      // Rate limit: 1 request per second
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`  ❌ Failed: ${error}`)
      skipped++
    }
  }

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1)

  console.log(`\n\n${'='.repeat(80)}`)
  console.log(`BATCH ${batchNum} COMPLETE - ${category.toUpperCase()}`)
  console.log('='.repeat(80))
  console.log(`✅ Generated: ${generated} summaries`)
  console.log(`❌ Skipped: ${skipped} countries`)
  console.log(`⏱️  Duration: ${duration} minutes`)
  console.log()
}

generateBatch()
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
