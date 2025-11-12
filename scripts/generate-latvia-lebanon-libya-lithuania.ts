import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Four countries to generate summaries for
const LOCATIONS = [
  { name: 'Latvia', type: 'country', lat: 56.9496, lng: 24.1052, country: 'Latvia' },
  { name: 'Lebanon', type: 'country', lat: 33.8547, lng: 35.8623, country: 'Lebanon' },
  { name: 'Libya', type: 'country', lat: 26.3351, lng: 17.2283, country: 'Libya' },
  { name: 'Lithuania', type: 'country', lat: 55.1694, lng: 23.8813, country: 'Lithuania' },
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
    'Latvia': ['latvian', 'riga', 'saeima', 'istanbul convention', 'baltic', 'border guard'],
    'Lebanon': ['lebanese', 'beirut', 'hezbollah', 'aoun', 'dbeibah', 'ceasefire', 'idf', 'southern lebanon'],
    'Libya': ['libyan', 'tripoli', 'haftar', 'dbeibah', 'benghazi', 'gnu', 'gns', 'lna'],
    'Lithuania': ['lithuanian', 'vilnius', 'paluckas', 'social democratic', 'baltic', 'kaliningrad'],
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
  'Latvia': `November 2025 Context:
- November 6, 2025: Parliament approved 2026 state budget (first reading) after 12+ hours of work
- Budget priorities: security, support for families with children, and education (nearly 700 million euros additional funding)
- November 6, 2025: At least 10,000 people protested in Riga against Latvia's potential withdrawal from Istanbul Convention (Council of Europe Convention on preventing and combating violence against women)
- Saeima returned draft law on Istanbul Convention withdrawal to Foreign Affairs Committee for reconsideration
- November 7, 2025: State Border Guard reported 73 attempted illegal crossings from Belarus - highest number in recent weeks
- Defense spending committed to increase to 5% of GDP from 2026 onwards
- November 10, 2025: Government discussed Latvia's EU long-term budget priorities including: (1) security and defence, (2) Cohesion Policy, (3) Common Agricultural Policy, (4) Rail Baltica project support, (5) additional support due to Russia's war of aggression, (6) favorable criteria in EU centralized programmes
- Headline fiscal deficit projected to increase to about 3% of GDP in 2025 due to higher defense and investment spending
- November 5, 2025: Riga hosted political consultations between Latvian and Indian Ministries of Foreign Affairs
- State-owned JSC Latvenergo placed EUR 400 million in bonds with 5.5x oversubscription from 140 investors`,

  'Lebanon': `November 2025 Context:
- Israeli strikes continue in southern Lebanon despite November 2024 ceasefire - near-daily attacks throughout November 2025
- 270+ killed, 850+ wounded by Israeli military actions since ceasefire began (Lebanon health ministry)
- UN human rights office verified 107 of those killed were civilians/noncombatants (as of October 9)
- Hezbollah urged Lebanese government not to enter negotiations with Israel
- President Aoun open to negotiations with Israel; Hezbollah opposes political negotiations while bound by ceasefire
- PM Netanyahu states Israel determined to enforce ceasefire "with an iron fist" while continuing strikes
- November 2025: Lebanese delegation received "clear and firm" US Treasury message to actively fight Hezbollah's funding sources
- Iran transferred more than $1 billion to Hezbollah since January 2025
- Extensive destruction in Lebanon's south, east, and southern Beirut suburbs requiring reconstruction funding
- No international funders willing to pay for reconstruction while Hezbollah holds political sway
- Lebanese Armed Forces do not control all of Lebanon
- Israel maintains forces at five sites in southern Lebanon
- Hezbollah faces social and political squeeze due to destroyed regions and lack of reconstruction funding`,

  'Libya': `November 2025 Context:
- Libya remains divided: UN-recognised Government of National Unity (GNU) in Tripoli (PM Abdul Hamid Mohammed Dbeibah) vs eastern-based Government of National Stability (GNS) (PM Osama Hamad, backed by House of Representatives and General Khalifa Haftar's Libyan National Army)
- Early November 2025: Chairman of High National Elections Commission met British Ambassador to discuss municipal council elections preparations
- Governor of Central Bank of Libya stated "the state's goals cannot be achieved under the current division"
- Elections deadlocked over proposed legislation - key contention: formation of unified interim government to organise elections (GNS/HoR favor, GNU opposes)
- Some Libyans pushing for replacement of both governments with unified interim government to lead to elections
- Oil sector: Arkenu Oil Company (private firm linked to Khalifa Haftar) shattered National Oil Corporation's monopoly
- At least $600 million in oil revenues bypassed Central Bank
- January 2025: National Oil Corporation announced "soon" public tender for exploring key gas/oil plots - first since 2007
- Economic growth in 2025 faces challenges from instability, power struggles for financial institutions, oil dynamics shifts
- International mediation obstructed by political divisions, lack of cooperation between factions, absence of clear diplomatic framework
- Prolonged political stalemate is root cause of Libya's security and economic challenges`,

  'Lithuania': `November 2025 Context:
- October 2024 parliamentary elections: Social Democratic Party (LSDP) won 52 seats, defeating center-right Homeland Union (28 seats)
- Nationalist-populist Dawn of Nemunas won 20 seats; Democratic Union "For Lithuania" took 14 seats
- Social Democrats formed coalition achieving 86 out of 141 seats
- November 21, 2024: Gintautas Paluckas appointed Prime Minister after Social Democratic leader chose to remain in European Parliament
- New government took office December 2024
- Defense spending: At least 3% of GDP allocated in 2025, aiming for 3.5%
- Preparing infrastructure to host full German brigade by 2027
- Goal to form national division by 2030
- Foreign and security policy expected to remain largely unchanged: strong NATO/EU alignment, support for Ukraine, firm stance on China
- Public opinion strongly supports NATO and EU alliances
- Location makes Lithuania obvious potential Russian target, though better prepared than many NATO members
- Government officials acutely aware of security realities
- National security and foreign affairs were not central campaign issues but continuity expected`,
}

// Main execution
async function generateFourCountrySummaries() {
  console.log('Generating "Rest is Politics" style summaries for Latvia, Lebanon, Libya, and Lithuania...\n')

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
