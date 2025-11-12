import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Specific countries to generate summaries for
const LOCATIONS = [
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587, country: 'Democratic Republic of Congo' },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627, country: 'Dominican Republic' },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834, country: 'Ecuador' },
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025, country: 'Egypt' },
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
    'Democratic Republic of Congo': ['drc', 'congo', 'congolese', 'kinshasa', 'm23', 'rwanda', 'eastern congo'],
    'Dominican Republic': ['dominican', 'santo domingo', 'abinader', 'dr'],
    'Ecuador': ['ecuadorian', 'quito', 'guayaquil', 'noboa'],
    'Egypt': ['egyptian', 'cairo', 'sisi', 'el-sisi', 'suez'],
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
  'Democratic Republic of Congo': `November 2025 Context:
- DRC and Rwanda signed US-backed Regional Economic Integration Framework (REIF) in early November
- First monitoring meeting for ceasefire verification mechanism between Congolese government and M23
- M23 rebels strengthened administrative control: established inspector general office, recruited 370+ judicial officials, created arbitration center
- Military clashes continued: M23-aligned militia captured villages in Fizi/Mwenga highlands (South Kivu)
- Political repression: Seth Kikuni (former presidential candidate) sentenced to 1 year for "propagating rumors"
- Human rights defenders Jack Sinzahera and Gloire Saasita released Nov 8 after detention without charge`,

  'Dominican Republic': `November 2025 Context:
- President Luis Abinader opened Vallejuelo roads network (Nov 1)
- Abinader skipped Brazil Climate Summit to handle domestic matters
- Central Bank lowered monetary policy rate from 5.50% to 5.25% (October meeting)
- Economy growth revised down to 2.5% for 2025, projected 4-5% for 2026
- Zemi Miches All-Inclusive Resort opened (Oct 29) - sustainable tourism push
- Senate president Ricardo de los Santos said country lacks conditions for salary indexing
- IMF called for comprehensive fiscal reform, but Abinader withdrew reform bill in October citing lack of consensus`,

  'Ecuador': `November 2025 Context:
- November 16, 2025: National referendum with 4 questions including proposal to convene constituent assembly for new constitution
- 13.9 million registered voters, nearly 119,000 troops/police deployed for security
- Ministry of Labor suspended VP Verónica Abad for "unjustified abandonment" before she was to replace President Noboa during campaign
- Supreme Electoral Tribunal barred Jan Topic from 2025 presidential race based on "confidential evidence"
- Fundamedios reported 160+ attacks on press freedom in November, mostly by state actors and organized crime
- Government faced criticism over violence surge, ordered investigations into whether previous administrations underreported homicide figures`,

  'Egypt': `November 2025 Context:
- Parliamentary elections began November 10 for 596-seat House of Representatives
- Phase 1 covered 14 governorates, results announced November 18
- Expected low turnout due to dominance of pro-government candidates
- Inflation at 12%, Egyptian pound lost value multiple times since 2022
- Houthi Red Sea attacks reduced Suez Canal traffic 60% since 2023, depriving Egypt of hard currency
- Egypt secured $57 billion in bailout deals since January 2025
- Total external assistance exceeds $60 billion (since 2024) against $152 billion external debt (June 2025)
- Egypt took proactive regional role: key negotiator for Gaza ceasefire with Qatar, deployed diplomats to Lebanon`
}

// Main execution
async function generateSpecificCountrySummaries() {
  console.log('Generating summaries for specific countries...\n')

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
      console.log(`  Summary generated and saved!`)

      // Show preview of summary
      const previewLines = summary.split('\n').slice(0, 10)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line}`))

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`  Failed:`, error)
      skipped++
    }
  }

  console.log(`\n\nComplete!`)
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Skipped: ${skipped} locations`)
}

generateSpecificCountrySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
