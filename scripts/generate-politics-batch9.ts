import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Batch 9: Countries for politics write-ups
const LOCATIONS = [
  { name: 'Spain', type: 'country', lat: 40.4637, lng: -3.7492, country: 'Spain' },
  { name: 'Sri Lanka', type: 'country', lat: 7.8731, lng: 80.7718, country: 'Sri Lanka' },
  { name: 'Sudan', type: 'country', lat: 15.5007, lng: 32.5599, country: 'Sudan' },
  { name: 'Sweden', type: 'country', lat: 60.1282, lng: 18.6435, country: 'Sweden' },
  { name: 'Switzerland', type: 'country', lat: 46.8182, lng: 8.2275, country: 'Switzerland' },
  { name: 'Syria', type: 'country', lat: 34.8021, lng: 38.9968, country: 'Syria' },
  { name: 'Taiwan', type: 'country', lat: 23.6978, lng: 120.9605, country: 'Taiwan' },
  { name: 'Tanzania', type: 'country', lat: -6.3690, lng: 34.8888, country: 'Tanzania' },
  { name: 'Thailand', type: 'country', lat: 15.8700, lng: 100.9925, country: 'Thailand' },
  { name: 'Tunisia', type: 'country', lat: 33.8869, lng: 9.5375, country: 'Tunisia' },
  { name: 'Turkey', type: 'country', lat: 38.9637, lng: 35.2433, country: 'Turkey' },
  { name: 'Uganda', type: 'country', lat: 1.3733, lng: 32.2903, country: 'Uganda' },
  { name: 'Ukraine', type: 'country', lat: 48.3794, lng: 31.1656, country: 'Ukraine' },
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
    'Spain': ['spanish', 'madrid', 'barcelona', 'sanchez', 'spain', 'catalan'],
    'Sri Lanka': ['sri lanka', 'colombo', 'dissanayake', 'anp', 'rajapaksa'],
    'Sudan': ['sudan', 'khartoum', 'rsf', 'burhan', 'hemedti', 'darfur'],
    'Sweden': ['sweden', 'swedish', 'stockholm', 'kristersson', 'moderates'],
    'Switzerland': ['swiss', 'switzerland', 'bern', 'geneva', 'federal council'],
    'Syria': ['syria', 'syrian', 'damascus', 'assad', 'aleppo', 'idlib'],
    'Taiwan': ['taiwan', 'taiwanese', 'taipei', 'tsai', 'lai', 'dpp', 'kmt'],
    'Tanzania': ['tanzania', 'tanzanian', 'dar es salaam', 'dodoma', 'hassan'],
    'Thailand': ['thailand', 'thai', 'bangkok', 'prayuth', 'pheu thai'],
    'Tunisia': ['tunisia', 'tunisian', 'tunis', 'saied', 'kais'],
    'Turkey': ['turkey', 'turkish', 'ankara', 'erdogan', 'istanbul'],
    'Uganda': ['uganda', 'ugandan', 'kampala', 'museveni'],
    'Ukraine': ['ukraine', 'ukrainian', 'kyiv', 'zelensky', 'zelenskyy', 'zelenskiy'],
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
async function generatePoliticsSummary(
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

  const prompt = `You are writing a POLITICS write-up in the style of Rory Stewart from "The Rest is Politics" podcast.

CATEGORY: Politics
VOICE: Rory Stewart (The Rest is Politics)
STYLE: Deep political analysis with insider Westminster/DC tone. Conversational but deeply informed. Focus on power dynamics, electoral systems, key politicians, and institutional strengths/weaknesses.

FOCUS AREAS FOR POLITICS:
- Current government/leadership and approval ratings
- Opposition parties and key figures
- Electoral system and recent/upcoming elections
- Political institutions and their health
- Key political debates and fault lines
- Corruption/transparency levels

LENGTH: 3,000-4,500 characters

${additionalContext ? `\nKEY POLITICAL CONTEXT FOR NOVEMBER 2025:\n${additionalContext}\n` : ''}

${storyContext ? `\nRECENT NEWS STORIES:\n${storyContext}\n` : ''}

Write a comprehensive politics summary for ${location.name} that:

1. OPENING HOOK (100-150 words): Lead with the most compelling recent political event or dynamic. Make it vivid and engaging.

2. CURRENT STATE (300-400 words):
   - Who's in power right now and what's their approval like?
   - What's the structure of government?
   - Major political figures and their influence
   - Recent elections or upcoming votes

3. CHALLENGES & FAULT LINES (300-400 words):
   - Key political debates and divisions
   - Opposition strength and strategy
   - Corruption or transparency issues
   - Institutional strengths/weaknesses
   - Specific examples and controversies

4. FUTURE OUTLOOK (200-300 words):
   - What elections or political events are coming?
   - Emerging political trends
   - Risks and scenarios to watch

5. BOTTOM LINE (100 words):
   - Sharp synthesis of what matters most
   - Punchy Rory Stewart-style conclusion

CRITICAL REQUIREMENTS:
- Use real November 2025 context and recent political events
- Be specific with names, dates, approval ratings, election results
- Conversational insider tone - like you're explaining politics over dinner
- Connect to broader democratic/authoritarian trends globally
- Be honest and nuanced - no cheerleading or doom-saying
- 3,000-4,500 characters total

Generate the politics write-up now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract key issues (look for major political themes)
    const issueMatches = summaryText.match(/(?:^|\n)(?:#{2,3})\s*(.+?)(?:\n|$)/g) || []
    const issues = issueMatches
      .map(match => match.replace(/^#+\s*/, '').trim())
      .filter(issue => issue.length > 5 && issue.length < 100)
      .slice(0, 5)

    // Top stories for links
    const topStories = stories.slice(0, 10).map(s => ({
      title: s.title,
      source: s.source,
      link: s.link,
      pubDate: s.pubDate.toISOString()
    }))

    return {
      summary: summaryText,
      issues: JSON.stringify(issues.length > 0 ? issues : ['Government Structure', 'Electoral Politics', 'Key Debates', 'Political Institutions']),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`Error generating politics summary for ${location.name}:`, error)
    throw error
  }
}

// Political context for November 2025 (researched)
const POLITICAL_CONTEXT: { [key: string]: string } = {
  'Spain': `- Pedro Sánchez (PSOE) governs in minority coalition with Sumar, relying on Catalan separatist support
- November 2025: Ongoing tensions over Catalonia amnesty law and separatist negotiations
- Sánchez faces corruption allegations involving his wife and brother (investigated throughout 2025)
- PP leader Alberto Núñez Feijóo leads opposition, polling ahead nationally
- Regional elections in Catalonia earlier in 2025 saw Salvador Illa (PSC) become president
- Far-right Vox party remains third force, opposing immigration and regional autonomy
- Congress remains fragmented; Sánchez needs support from ERC, Junts, PNV, Bildu for each vote`,

  'Sri Lanka': `- Anura Kumara Dissanayake (NPP/JVP) elected president September 2024, first leftist leader
- November 2025: NPP won landslide in parliamentary elections (November 14, 2025) - 159 seats of 225
- Historic shift: NPP dominates north/east Tamil areas, first time non-ethnic party wins there
- Previous opposition decimated: SJB 40 seats, New Democratic Front (Wickremesinghe allies) only 3 seats
- Dissanayake's platform: anti-corruption, renegotiate IMF deal, tackle cost-of-living crisis
- IMF program continues but under pressure; inflation easing from 2022-23 crisis
- Tamil National Alliance lost badly; ethnic politics giving way to economic focus`,

  'Sudan': `- Brutal civil war since April 2023 between SAF (Gen. Abdel Fattah al-Burhan) and RSF (Gen. Mohamed Hamdan Dagalo/"Hemedti")
- November 2025: RSF controls much of Darfur and Khartoum areas; SAF holds Port Sudan (interim capital)
- Humanitarian catastrophe: 11+ million displaced, famine conditions in Darfur
- Political process collapsed; civilian politicians sidelined completely
- UAE accused of arming RSF; Egypt backs SAF; regional powers fueling conflict
- Geneva talks (August 2025) failed; ceasefire efforts by US/Saudi Arabia stalled
- No functioning government; international community divided on approach`,

  'Sweden': `- Ulf Kristersson (Moderate Party) leads center-right coalition government with Christian Democrats and Liberals
- Government relies on confidence and supply from Sweden Democrats (SD) - anti-immigration party
- November 2025: Coalition stable but tensions over SD influence on policy
- Sweden joined NATO in March 2024 after Turkey/Hungary delays - major strategic shift
- Political focus: gang violence, immigration restrictions, integration policy
- Social Democrats (opposition) led by Magdalena Andersson, polling competitively
- Next election: September 2026; SD remains kingmaker
- Debate over nuclear power expansion, energy policy`,

  'Switzerland': `- Federal Council (7-member executive) elected by parliament; rotating 1-year presidency
- November 2025: Viola Amherd (Center Party) likely serving as president for 2025
- Four-party coalition (SVP, Social Democrats, FDP, Center) governs with "magic formula" since 1959
- SVP (Swiss People's Party) is largest party, right-wing populist, strong on immigration/EU skepticism
- Major debate: EU relations (Switzerland not in EU, but hundreds of bilateral treaties)
- Direct democracy: frequent referendums on everything from tax to foreign policy
- September 2025 referendum on biodiversity initiative; immigration debates ongoing
- Neutrality under pressure with Ukraine war; frozen Russian assets controversy`,

  'Syria': `- Bashar al-Assad regime consolidated control after civil war; no political opposition allowed
- November 2025: Arab League readmitted Syria (May 2023), normalization with Saudi/UAE ongoing
- No genuine elections; Assad "re-elected" 2021 with 95.1% in sham vote
- Political power: Assad family, security services (mukhabarat), inner circle from Alawite minority
- Economy in ruins; 90% live in poverty, currency collapsed
- Captagon drug trade major regime revenue source
- Idlib province remains opposition-held (Turkey-backed); US forces in northeast with SDF
- Russia/Iran remain key backers; political process (Geneva, Astana) dead`,

  'Taiwan': `- Lai Ching-te (William Lai) of DPP won presidency January 2024, inaugurated May 2024
- November 2025: DPP lacks legislative majority; KMT and TPP hold balance in Legislative Yuan
- KMT (Kuomintang) opposition led by Han Kuo-yu as legislative speaker; blocks DPP bills regularly
- Cross-strait tensions high: China increased military pressure, gray-zone tactics, sanctions on DPP officials
- Lai's approach: status quo on China policy but more assertive on Taiwan identity than Tsai
- Local elections in 2026 will be key test; KMT strong in local governments
- US support continues but uncertainty over 2024 US presidential election impacts
- Defense spending rising; one-year conscription extended to counter China threat`,

  'Tanzania': `- President Samia Suluhu Hassan (CCM) took office March 2021 after John Magufuli's death
- November 2025: Hassan seeking re-election in October 2025 presidential election
- CCM (Chama Cha Mapinduzi) dominates politics since independence; opposition weak and harassed
- Hassan initially promised reforms, media freedom improvements, but backsliding in 2024-25
- Opposition leader Freeman Mbowe (Chadema) arrested multiple times; rallies banned
- Election environment: restricted; observers note lack of level playing field
- Regional politics: Hassan more pragmatic than Magufuli on COVID, international engagement
- Zanzibar semi-autonomous; political tensions over autonomy continue`,

  'Thailand': `- Srettha Thavisin (Pheu Thai) became PM August 2023 after complex post-election negotiations
- November 2025: Coalition government includes military-linked parties; Move Forward Party (election winner) excluded
- Move Forward Party won May 2023 election but blocked from power by Senate/establishment
- King Vajiralongkorn and military remain powerful; Constitutional Court dissolved Move Forward in August 2024 for lèse-majesté reform proposal
- New party (People's Party) formed from Move Forward; remains popular but sidelined
- Thaksin Shinawatra returned from exile (August 2023), influence over Pheu Thai government
- Political instability continues; coups/judicial intervention cycle persists
- Next election due by May 2027 unless earlier dissolution`,

  'Tunisia': `- President Kais Saied consolidated authoritarian control since July 2021 "self-coup"
- November 2025: Saied likely preparing for 2024 presidential election (held October 2024) - won with 90.7%
- Main opponents arrested or barred from running; election widely criticized as unfair
- Parliament weak: low turnout in 2022-23 elections (11%), opposition boycotted
- Saied's agenda: anti-corruption populism, anti-elite rhetoric, but increasingly autocratic
- Economic crisis: IMF negotiations stalled, debt unsustainable, shortages of basics
- Political opposition silenced: Ennahda leaders jailed, civil society restricted
- Migration deal with EU brings funding but not democratic progress`,

  'Turkey': `- Recep Tayyip Erdoğan (AKP) won presidential election May 2023; in power since 2003 (PM then President)
- November 2025: Economic crisis dominates; inflation over 60%, lira weak, cost-of-living anger
- Opposition CHP won major cities (Istanbul, Ankara) in March 2024 local elections - blow to Erdoğan
- Istanbul Mayor Ekrem İmamoğlu (CHP) most popular opposition figure; potential 2028 challenger
- Political system: presidential, highly centralized since 2018 constitutional change
- Media controlled; judiciary not independent; political prisoners including Selahattin Demirtaş (HDP)
- Kurdish issue: HDP successor (DEM Party) third force but marginalized
- Foreign policy: balancing Russia/West on Ukraine, NATO tensions over Sweden, active in Syria/Libya`,

  'Uganda': `- Yoweri Museveni (NRM) in power since 1986; won 2021 election (sixth term) amid repression
- November 2025: Museveni age 81, succession questions growing but no clear plan
- Opposition leader Bobi Wine (National Unity Platform) remains under heavy surveillance/harassment
- Parliament dominated by NRM; multiparty system in name only
- Political debate: constitutional amendment removed age limits (2017), term limits already abolished (2005)
- Corruption endemic; military and Museveni family control key sectors
- Regional role: troops in Somalia (ATMIS), DRC (against ADF); UPDF influential
- Next elections: 2026; expected to be neither free nor fair`,

  'Ukraine': `- President Volodymyr Zelenskyy governs under martial law since February 2022 Russian invasion
- November 2025: War continues; no elections held (scheduled for 2024 postponed due to war)
- Political unity fraying: tensions between Zelenskyy and Commander-in-Chief Valerii Zaluzhnyi (replaced February 2024 with Oleksandr Syrskyi)
- Parliament (Verkhovna Rada) functions but many MPs at front or in defense roles
- Opposition minimal during war; pro-Russian parties banned
- Corruption remains issue despite reforms; military procurement scandals in 2024
- Western aid critical but faces political uncertainty in US/Europe
- Debate over mobilization, potential negotiations, territorial compromises`,
}

// Main execution
async function generatePoliticsSummaries() {
  console.log('Generating POLITICS write-ups for Batch 9...\n')

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

  let generated = 0
  let skipped = 0

  for (const location of LOCATIONS) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`Processing: ${location.name} - POLITICS`)
    console.log('='.repeat(60))

    // Find relevant stories
    const relevantStories = findStoriesForLocation(location, allStories)
    console.log(`  Found ${relevantStories.length} relevant stories`)

    console.log(`  Generating POLITICS summary with Claude Sonnet 4.5...`)

    try {
      const { summary, issues, topStories } = await generatePoliticsSummary(
        location,
        relevantStories,
        POLITICAL_CONTEXT[location.name] || ''
      )

      console.log(`  Character count: ${summary.length}`)

      // Store in database with category='politics'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'politics'
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: 'politics',
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
      console.log(`  ✓ POLITICS summary saved to database`)

      // Show preview
      const previewLines = summary.split('\n').slice(0, 8)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line}`))
      console.log(`    ... (${summary.length} characters total)\n`)

      // Rate limit: 1.5 seconds between requests
      await new Promise(resolve => setTimeout(resolve, 1500))

    } catch (error) {
      console.error(`  ✗ Failed:`, error)
      skipped++
    }
  }

  console.log(`\n\n${'='.repeat(60)}`)
  console.log(`BATCH 9 COMPLETE`)
  console.log('='.repeat(60))
  console.log(`   Generated: ${generated} politics summaries`)
  console.log(`   Skipped: ${skipped} locations`)
  console.log('='.repeat(60))
}

generatePoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
