import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Specific countries to generate summaries for
const LOCATIONS = [
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.6880, country: 'Iran' },
  { name: 'Iraq', type: 'country', lat: 33.3152, lng: 44.3661, country: 'Iraq' },
  { name: 'Ireland', type: 'country', lat: 53.4129, lng: -8.2439, country: 'Ireland' },
  { name: 'Jordan', type: 'country', lat: 30.5852, lng: 36.2384, country: 'Jordan' },
]

interface StoryForSummary {
  title: string
  link: string
  source: string
  pubDate: Date
  description: string | null
  importance: number
}

// Find stories relevant to a location
function findStoriesForLocation(location: typeof LOCATIONS[0], allStories: StoryForSummary[]): StoryForSummary[] {
  const keywords = [location.name.toLowerCase()]

  // Add country-specific keywords
  const countryKeywords: { [key: string]: string[] } = {
    'Iran': ['iranian', 'tehran', 'khamenei', 'irgc', 'persian', 'isfahan', 'mashhad'],
    'Iraq': ['iraqi', 'baghdad', 'kurdistan', 'erbil', 'basra', 'mosul', 'kurdish'],
    'Ireland': ['irish', 'dublin', 'belfast', 'cork', 'galway', 'taoiseach'],
    'Jordan': ['jordanian', 'amman', 'king abdullah', 'hashemite', 'petra'],
  }

  const extraKeywords = countryKeywords[location.name] || []
  keywords.push(...extraKeywords)

  // Filter stories that mention this location
  const relevantStories = allStories.filter(story => {
    const text = `${story.title} ${story.description || ''}`.toLowerCase()
    return keywords.some(keyword => text.includes(keyword))
  })

  // Sort by importance and recency, take top 15
  return relevantStories
    .sort((a, b) => {
      const scoreA = a.importance + (Date.now() - a.pubDate.getTime() > 86400000 ? -0.2 : 0)
      const scoreB = b.importance + (Date.now() - b.pubDate.getTime() > 86400000 ? -0.2 : 0)
      return scoreB - scoreA
    })
    .slice(0, 15)
}

// Generate AI summary using Claude with additional context
async function generateLocationSummary(
  location: typeof LOCATIONS[0],
  stories: StoryForSummary[],
  additionalContext: string
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  // Prepare story context for AI
  const storyContext = stories.map((s, i) =>
    `${i + 1}. "${s.title}" - ${s.source} (${s.pubDate.toLocaleDateString()})\n   ${s.description || 'No description'}`
  ).join('\n\n')

  const prompt = `You are a geopolitical and regional analyst. Based on these recent news stories about ${location.name}, generate a comprehensive one-page summary of the current situation in November 2025.

${additionalContext ? `\nAdditional Context for November 2025:\n${additionalContext}\n` : ''}

Recent News Stories:
${storyContext}

Generate a summary following this EXACT format:

# ${location.name}

[Opening paragraph: 1-2 sentences setting context for the current situation]

## Major Issues

### 1. [Issue Title]
**What's happening:**
- [Bullet point describing current events]
- [Bullet point with specific examples and citations]

**Why it matters:**
- [Bullet point explaining strategic/economic/social significance]
- [Bullet point on stakeholder impacts]

**Prospects:**
- [Bullet point on likely short-term trajectory]
- [Bullet point on medium-term scenarios]
- [Bullet point on risks and opportunities]

### 2. [Second Issue Title]
[Same format as above]

### 3. [Third Issue Title]
[Same format as above]

## Summary
[Final paragraph synthesizing the key themes and watch-words for anyone tracking this location]

IMPORTANT REQUIREMENTS:
- Focus on 3-4 major issues maximum
- Each issue should be specific, current, and evidence-based
- Use concrete details from the news stories and additional context provided
- Maintain a professional, analytical tone in the style of "The Rest is Politics"
- Avoid speculation - stick to what's happening and logical implications
- Make it actionable for business, investment, or policy professionals
- Include specific dates, names, and events from November 2025

Generate the summary now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract issues (rough parsing - look for ### headers)
    const issueMatches = summaryText.match(/### \d\.\s+(.+)/g) || []
    const issues = issueMatches.map(match => match.replace(/### \d\.\s+/, ''))

    // Top 10 stories for links
    const topStories = stories.slice(0, 10).map(s => ({
      title: s.title,
      source: s.source,
      link: s.link,
      pubDate: s.pubDate.toISOString()
    }))

    return {
      summary: summaryText,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`Error generating summary for ${location.name}:`, error)
    throw error
  }
}

// Additional context for each country based on November 2025 research
const ADDITIONAL_CONTEXT: { [key: string]: string } = {
  'Iran': `November 2025 Context:
- November 11, 2025: Massive wave of protests across Iran - nurses, oil workers, government employees, retirees, and human rights activists demonstrated simultaneously
- Over 3,000 contract workers rallied at South Pars gas complex in strategic energy sector
- Power outages have forced 50% of country's production capacity offline
- Most industrial factories now operate only 2-3 days per week
- Electricity shortages caused approximately $20 billion in losses to Iranian industries
- Nearly 7 million people fled major cities during 12-day war with Israel earlier in year
- Iran has lost international leverage following military strikes by Israel and US
- Economy under weight of sanctions, chronic water/electricity shortages, and mismanagement
- September 2025: Widespread protests across Iran from political heartland to industrial centers delivering unified message of defiance against corrupt ruling theocracy`,

  'Iraq': `November 2025 Context:
- November 11, 2025: Iraq held 6th parliamentary elections since fall of Saddam Hussein in 2003
- Over 21 million Iraqis registered to vote (down from 24 million four years ago)
- Election took place amid relative calm but widespread distrust of political elites persisted
- Shia cleric Muqtada al-Sadr led boycott denouncing corruption, sectarianism, foreign interference
- Youth unemployment at 32% contributing to political disillusionment
- Kurdistan Regional Government failed to form new cabinet, weakening Erbil's leverage in Baghdad
- Kurdistan oil fields under repeated drone attacks in July (suspected Iranian-backed Iraqi militias)
- US-led coalition mission planned to end by September 2025, shifting to bilateral security arrangements
- Economy relies on oil revenues (95% of federal budget), Iraq sells 35% of exports to China
- UN Mission (UNAMI) drawing down by end of 2025 as situation "definitively normalized"`,

  'Ireland': `November 2025 Context:
- November 11, 2025: Catherine Connolly inaugurated as Ireland's president (3rd female president)
- Connolly gained support among young voters by blaming government policy for housing crisis
- November 2025: New government launched 4th housing plan in 12 years
- Government formed after late 2024 election: Fianna Fáil and Fine Gael remain at helm
- Department of Finance predicted housing crisis likely to persist for at least 15 more years
- Housing crisis driving people into homelessness, debt, and emigration
- Ireland has 26-billion-euro budget surplus, one of wealthiest countries in world
- Census shows population rose 8% (2016-2022) while new homes up only 5%
- Housing has failed to keep up with population growth
- Post-election focus shifting back to housing as central political issue`,

  'Jordan': `November 2025 Context:
- King Abdullah II appointed new government headed by PM Jafar Hassan (former chief of staff)
- September 2024 elections: Islamic Action Front (Muslim Brotherhood) gained most seats despite low turnout
- Trump's return to power alarming Jordanians about Palestinian displacement to Jordan
- Israeli government stated intention to annex West Bank viewed as "existential threat" by Amman
- July 2025: Work permit renewal fees for Syrian refugees increased from $14 to $705
- One million Syrian refugees expected to return home voluntarily in first half of 2025
- Over 710,000 refugees and asylum seekers in Jordan (5th-highest per capita globally)
- Jordan hosting over 1 million refugees, facing water scarcity and infrastructure strain
- Over 1,500 protesters arrested in 2024 crackdown on pro-Palestinian protests
- Authorities continued limiting civic space, arresting peaceful dissidents and journalists
- Syria's transition following Assad's downfall creating new security concerns for Jordan
- Iran's "Axis of Resistance" seeking to use Jordan as pressure point on Israel's periphery`
}

// Main execution
async function generateSpecificCountrySummaries() {
  console.log('Generating summaries for Iran, Iraq, Ireland, and Jordan...\n')

  // Load all stories
  const allStories = await prisma.story.findMany({
    select: {
      title: true,
      link: true,
      source: true,
      pubDate: true,
      description: true,
      importance: true
    },
    where: {
      pubDate: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days for better coverage
      }
    }
  })

  console.log(`Found ${allStories.length} recent stories\n`)

  let generated = 0
  let skipped = 0

  for (const location of LOCATIONS) {
    console.log(`\nProcessing: ${location.name} (${location.type})`)

    // Find relevant stories
    const relevantStories = findStoriesForLocation(location, allStories)

    console.log(`  Found ${relevantStories.length} relevant stories`)

    if (relevantStories.length < 3) {
      console.log(`  Only ${relevantStories.length} stories found - using additional context to generate anyway`)
    }

    console.log(`  Generating AI summary with November 2025 context...`)

    try {
      const { summary, issues, topStories } = await generateLocationSummary(
        location,
        relevantStories,
        ADDITIONAL_CONTEXT[location.name] || ''
      )

      // Store in database
      await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: location.name,
            type: location.type
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✅ Summary generated and saved!`)

      // Show preview of summary
      const previewLines = summary.split('\n').slice(0, 10)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line}`))

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`  ❌ Failed:`, error)
      skipped++
    }
  }

  console.log(`\n\n✅ Complete!`)
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Skipped: ${skipped} locations`)
}

generateSpecificCountrySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
