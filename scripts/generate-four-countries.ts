import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Four countries to generate summaries for
const LOCATIONS = [
  { name: 'Haiti', type: 'country', lat: 18.9712, lng: -72.2852, country: 'Haiti' },
  { name: 'Honduras', type: 'country', lat: 15.2000, lng: -86.2419, country: 'Honduras' },
  { name: 'Hungary', type: 'country', lat: 47.1625, lng: 19.5033, country: 'Hungary' },
  { name: 'Indonesia', type: 'country', lat: -0.7893, lng: 113.9213, country: 'Indonesia' },
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
    'Haiti': ['haitian', 'port-au-prince', 'gang', 'kenya', 'transitional council', 'mss'],
    'Honduras': ['honduran', 'tegucigalpa', 'xiomara castro', 'castro', 'zelaya'],
    'Hungary': ['hungarian', 'orban', 'viktor', 'budapest', 'fidesz'],
    'Indonesia': ['indonesian', 'prabowo', 'jakarta', 'subianto', 'jokowi'],
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

  const prompt = `You are a geopolitical and regional analyst writing in the style of "The Rest is Politics" podcast. Based on these recent news stories about ${location.name}, generate a comprehensive one-page summary of the current situation in November 2025.

STYLE GUIDELINES - "The Rest is Politics" approach:
- Conversational but deeply informed
- Connect political dynamics to real human impact
- Explain "why this matters" beyond just reporting facts
- Weave geopolitical context throughout
- Engaging narrative that makes readers want to keep reading
- Avoid academic jargon - use accessible language
- Include specific names, dates, and concrete details
- Show the stakes for ordinary people and global powers alike

${additionalContext ? `\nAdditional Context for November 2025:\n${additionalContext}\n` : ''}

Recent News Stories:
${storyContext}

Generate a summary following this EXACT format:

# ${location.name}

[Opening paragraph: 2-3 sentences setting context for the current situation, written conversationally]

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
- Maintain a professional but conversational tone like "The Rest is Politics"
- Avoid speculation - stick to what's happening and logical implications
- Make it actionable for business, investment, or policy professionals
- Include specific dates, names, and events from November 2025
- Connect the dots between local events and broader geopolitical trends

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
  'Haiti': `November 2025 Context:
- Seven new armored vehicles delivered to Armed Forces (FAd'H) on November 8, 2025 - first since 2017 remobilization
- Gangs control over 90% of Port-au-Prince per UN estimates
- Between July-September 2025: 1,247 people killed, 710 injured
- 1.3+ million people displaced nationwide living in schools, abandoned buildings, makeshift camps
- No nationally elected officials since January 2023, parliament inactive since 2019
- Over 64% of Haiti's 11.7 million population lived on less than $3.65/day in 2024
- Half the country faces acute hunger
- Kenya-led Multinational Security Support (MSS) mission faces challenges making progress
- Elections initially expected by February 2026 now delayed indefinitely
- Transitional government tasked with restoring security, rule of law, humanitarian aid`,

  'Honduras': `November 2025 Context:
- Presidential, legislative, and municipal elections scheduled for November 30, 2025
- Three-way race: Rixi Moncada (LIBRE, Castro's former defense minister), Nasry Asfura (PN, former mayor), and third candidate
- Key voter concerns: economy/job creation, security/organized crime, corruption
- Castro administration made little progress fighting corruption, restoring democratic institutions
- High-level appointments of Castro family members including husband Manuel Zelaya (former president 2006-2009) raised concerns
- September 2025: Castro presented UN Secretary-General second draft agreement for International Commission against Corruption and Impunity (CICIH)
- 2022-2024 GDP growth averaged 3.8%; IMF projects 3.5% growth
- Remittances from abroad (85% from US) exceeded $9.7 billion (26% of GDP) in 2024
- Trump Administration terminated Temporary Protected Status for Honduras on September 8, 2025 (affecting 51,225 Hondurans)
- Trump Administration terminated $167 million in FY2024-2025 aid for Honduras
- 19,552 Hondurans returned from US (deportations or voluntary) between January-August 2025
- Growing mistrust of Honduran institutions could lead to electoral violence`,

  'Hungary': `November 2025 Context:
- November 7, 2025: US granted Hungary one-year exemption from Russian oil/gas sanctions after Trump-Orban White House meeting
- Hungary buys more Russian oil/gas than any other EU nation: 74% of gas, 86% of oil from Russia (2024 IMF figures)
- Hungary committed to buying $600 million in US liquefied natural gas contracts
- Parliamentary elections scheduled for April 2026: Orban vs younger conservative Peter Magyar
- Magyar campaigning on government's poor economic track record and cost-of-living crisis
- US tariffs on EU negatively impacted Hungary's economy
- Orban alone blocking Ukraine's EU bid and accession talks
- Hungary pushes back against EU Commission plans to phase out all Russian gas/LNG imports by end of 2027
- Orban told Trump cutting Russian energy would "cripple economy"
- Orban currently commands 80%+ seats in parliament
- Hungary claims exemption could be "indefinite" despite one-year official designation`,

  'Indonesia': `November 2025 Context:
- November 10, 2025: Former President Soeharto posthumously named national hero by President Prabowo Subianto (Soeharto's former son-in-law)
- 500+ civil society members, activists, academics published letter opposing designation, citing human rights violations, corruption, nepotism during Soeharto's 3-decade rule
- November 2025: Simultaneous countrywide elections for provincial and regional executive offices
- 605 out of 1,551 candidate pairs linked to political dynasties
- Economic growth slowed to 4.87% in Q1 2025
- Prabowo's budget efficiency measures paused existing government projects, no significant new growth sources
- Healthcare spending slashed 18.5%, infrastructure investment cut 73%
- Prabowo commands 80%+ seats in parliament
- Violent protests since electoral victory prompted by economic inequality and lavish lawmaker perks
- Democracy concerns: "hollowed-out democracy" with stability and accountability traded off
- Vulnerable populations rising to set limits on power`,
}

// Main execution
async function generateFourCountrySummaries() {
  console.log('Generating "Rest is Politics" style summaries for Haiti, Honduras, Hungary, and Indonesia...\n')

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
    console.log(`\n${'='.repeat(60)}`)
    console.log(`Processing: ${location.name} (${location.type})`)
    console.log('='.repeat(60))

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
      const previewLines = summary.split('\n').slice(0, 12)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line}`))
      console.log(`    [...]\n`)

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`  ❌ Failed:`, error)
      skipped++
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`COMPLETE!`)
  console.log('='.repeat(60))
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Skipped: ${skipped} locations`)
  console.log(`\nSummaries stored in database and ready to display on the map!`)
}

generateFourCountrySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
