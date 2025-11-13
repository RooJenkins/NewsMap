import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// South Africa location details
const LOCATION = {
  name: 'South Africa',
  type: 'country',
  lat: -30.5595,
  lng: 22.9375,
  country: 'South Africa'
}

interface StoryForSummary {
  title: string
  link: string
  source: string
  pubDate: Date
  description: string | null
  importance: number
}

// Find stories relevant to South Africa
function findStoriesForLocation(allStories: StoryForSummary[]): StoryForSummary[] {
  const keywords = [
    'south africa', 'south african', 'pretoria', 'cape town', 'johannesburg',
    'ramaphosa', 'cyril ramaphosa', 'anc', 'african national congress',
    'gnu', 'government of national unity', 'da', 'democratic alliance',
    'john steenhuisen', 'eskom', 'loadshedding', 'load shedding',
    'brics', 'g20 south africa', 'rand', 'zuma'
  ]

  // Filter stories that mention South Africa
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

// Generate AI summary using Claude with November 2025 context
async function generateSouthAfricaSummary(
  stories: StoryForSummary[]
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

  const additionalContext = `November 2025 Context for South Africa:

GOVERNMENT OF NATIONAL UNITY (GNU) CRISIS:
- President Ramaphosa held secret GNU retreat November 3, 2025 at Cradle of Humankind
- First meeting between GNU leaders in 177 days
- Leaders declared coalition "united and strong" but analysts call it a "mixed bag"
- John Steenhuisen (DA leader) expressed dissatisfaction with Ramaphosa excluding GNU partners from decision-making
- Significant tensions around 2025 budget process - leaders committed to better consultation on fiscal priorities
- Media reports suggest growing ANC sentiment that Ramaphosa may step down before 2029
- Many in ANC no longer have confidence in his leadership ability
- GNU formed after 2024 elections where ANC lost majority for first time since 1994
- Coalition includes 10 parties, with ANC and DA as dominant partners

ELECTRICITY CRISIS STATUS:
- Stage 4 loadshedding extended in November 2025 across several provinces
- However, more recent updates show loadshedding suspended, grid stable and within capacity
- Significant improvement from 2023: only 69 days of loadshedding in 2024 vs nearly 300 in 2023
- Energy Availability Factor rose to 67% in July 2024 (highest since 2021)
- After 10 months without loadshedding, South Africa hit with Stage 3 cuts end of January 2025
- Current concern: Eskom's Energy Availability Factor remained below 60% throughout 2025
- Unplanned outages at unacceptable 28%
- Not adding new generation capacity fast enough to prevent crisis when coal plants decommissioned

ECONOMIC OUTLOOK:
- GDP growth projected at 1.3% in 2025 (OECD), though estimates vary: World Bank 0.9%, Bureau for Economic Research 2.2%
- Unemployment increased to 32.6% in Q1 2025, then 33.2% in Q2 2025
- Youth unemployment (15-24 years) at devastating 62.2%
- Consumer price inflation forecast 4.5% in 2025
- Rand averaging R18.82/$ in 2025 vs R18.32/$ in 2024
- Rand depreciated sharply in early April but has since reversed
- Currency unpredictable due to global economic and geopolitical developments
- Contractionary fiscal policy limiting government spending
- Monetary policy easing since late 2024 supporting economic activity

INTERNATIONAL RELATIONS & G20:
- South Africa holds G20 Presidency in 2025, summit scheduled for November in South Africa
- Brazil handed over G20 presidency baton to South Africa
- Postponed joint BRICS naval exercise with Russia and China (originally planned November 2025) due to G20 activities
- This would have been third iteration of exercise between BRICS partners
- On June 10, defense chief Rudzani Maphwanya met China's defense minister in Beijing, vowed to expand military cooperation
- August 26: South African navy chief received Russian medal for strengthening naval cooperation
- South Africa caught between US-led liberal bloc and China-Russia revisionist axis
- China and Russia actively competing with US for influence over South Africa
- Internal BRICS tensions over relations with US and Russia's Ukraine invasion

POLITICAL DYNAMICS:
- ANC in historic decline after losing majority in 2024 elections
- Forced into unprecedented GNU coalition with ideological opponents (DA is center-right)
- Speculation about Ramaphosa's future leadership
- Municipal governance crisis - Ramaphosa urged GNU leaders to work together to rescue struggling municipalities
- GNU forum agreed to meet regularly to provide strategic political direction`

  const prompt = `You are writing in the conversational, insider-analytical style of "The Rest is Politics" podcast. Based on the November 2025 context and recent news stories about South Africa, generate a compelling, engaging one-page summary.

Additional Context for November 2025:
${additionalContext}

Recent News Stories:
${storyContext}

Write a summary following this EXACT structure and style:

[OPENING HOOK - 150 words]
Lead with the most dramatic or revealing moment. Make it feel like insider analysis. Set the scene vividly. This should grab attention immediately and establish the stakes.

**The Big Issue 1: [Compelling Title]** (~200 words)
Deep dive into the GNU coalition crisis. Include specific details: the November 3 retreat, 177 days between meetings, Steenhuisen's complaints, speculation about Ramaphosa stepping down. Explain what this means for South Africa's political stability. Use rhetorical questions, vivid language, conversational tone. Make readers feel they're getting the real story behind the headlines.

**The Big Issue 2: [Compelling Title]** (~200 words)
Focus on the electricity crisis paradox - improvements vs ongoing vulnerability. Include the statistics: 69 days in 2024 vs 300 in 2023, 67% Energy Availability Factor, but still 28% unplanned outages. Explain why Eskom's problems aren't really solved. Connect to economic competitiveness and daily life impacts.

**The Big Issue 3: [Compelling Title]** (~200 words)
Economic malaise and unemployment crisis. Hit the devastating numbers: 33.2% unemployment, 62.2% youth unemployment, sluggish 1.3% growth. Explain the policy constraints. Connect to fiscal tensions within the GNU. Forward-looking: what happens if this doesn't improve?

**The International Angle** (~150 words)
South Africa's G20 presidency, the China-Russia-US tug of war, postponed BRICS naval exercises, deepening military ties with China and Russia. What does South Africa's positioning mean for the West? For Africa? The geopolitical implications of being caught between blocs.

**The Bottom Line** (~100 words)
Synthesize the threads. What should investors, policymakers, and observers watch next? Punchy conclusion that ties together the GNU instability, electricity vulnerability, economic stagnation, and geopolitical positioning. End with a sharp observation or forward-looking question.

CRITICAL STYLE REQUIREMENTS:
- Write conversationally, like you're explaining to a smart friend over coffee
- Use specific names, dates, and numbers from the context
- Include rhetorical questions occasionally
- Use vivid, punchy language - not academic prose
- Make it engaging and readable, not dry reporting
- Channel the "Rest is Politics" vibe: informed, slightly irreverent, analytical but accessible
- Target 4,000-6,000 characters total
- Be specific about November 2025 events and context

Generate the summary now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract issues (rough parsing - look for ** headers)
    const issueMatches = summaryText.match(/\*\*([^*:]+):/g) || []
    const issues = issueMatches.map(match => match.replace(/\*\*/g, '').replace(':', '').trim())

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
    console.error(`Error generating summary for South Africa:`, error)
    throw error
  }
}

// Main execution
async function generateSouthAfricaSummaryScript() {
  console.log('Generating summary for South Africa...\n')

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
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
      }
    }
  })

  console.log(`Found ${allStories.length} recent stories\n`)

  // Find relevant stories
  const relevantStories = findStoriesForLocation(allStories)

  console.log(`Found ${relevantStories.length} relevant stories for South Africa`)

  if (relevantStories.length < 3) {
    console.log(`Only ${relevantStories.length} stories found - using context to generate anyway`)
  }

  console.log(`Generating AI summary with November 2025 context...`)

  try {
    const { summary, issues, topStories } = await generateSouthAfricaSummary(relevantStories)

    // Store in database with category 'all'
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: LOCATION.name,
          type: LOCATION.type,
          category: 'all'
        }
      },
      create: {
        name: LOCATION.name,
        type: LOCATION.type,
        country: LOCATION.country,
        lat: LOCATION.lat,
        lng: LOCATION.lng,
        category: 'all',
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

    console.log(`Summary generated and saved!\n`)

    // Show preview of summary
    console.log(`Preview:\n`)
    console.log(summary)
    console.log(`\n\nExtracted Issues:`)
    console.log(JSON.parse(issues))
    console.log(`\n\nCharacter count: ${summary.length}`)

  } catch (error) {
    console.error(`Failed:`, error)
    throw error
  }
}

generateSouthAfricaSummaryScript()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
