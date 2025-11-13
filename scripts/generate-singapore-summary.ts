import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const SINGAPORE = {
  name: 'Singapore',
  type: 'country',
  lat: 1.3521,
  lng: 103.8198,
  country: 'Singapore'
}

async function generateSingaporeSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Singapore...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `SINGAPORE - NOVEMBER 2025 SITUATION:

GENERAL ELECTION 2025 - POST-MORTEM:
- May 3, 2025: PAP secured 65.57% of overall vote share (media called it "landslide", PM Wong disagrees)
- Tampines GRC: Only four-cornered fight - PAP won 52.02% vs WP 47.37% (extremely narrow margin)
- Punggol GRC: PAP 55.17% vs WP 44.83% (DPM Gan Kim Yong deployed there to defend new GRC)
- November 9, 2025: PM Wong at PAP Awards Convention warned next election in 2030 or earlier will be "tougher"
- Wong spelled out consequences if PAP had lost Tampines/Punggol: would mean WP's calculated appeal to Malay-Muslim voters was effective, leaving Singapore "divided"
- WP gets 2 Non-Constituency MP seats (Faisal Manap and Jalan Kayu SMC candidate)
- NSP scored 0.18% in Tampines - lowest vote share by any opposition party/independent in post-independence Singapore history

LAWRENCE WONG'S GOVERNMENT PRIORITIES:
- Three core pillars: (1) Securing Singapore's place in changed world, (2) Keeping economy competitive, (3) Keeping society strong and united with support/assurance
- Economic blueprint: DPM Gan Kim Yong leading team to "chart new blueprint for economy"
- Recommendations expected early 2026, government to respond in Budget 2026
- Focus: Ensure Singapore doesn't get bypassed by new trade flows amid fragmenting global economy
- Singapore Economic Resilience Taskforce rolling out targeted measures to support businesses and keep Singaporeans employed

US-CHINA BALANCING ACT UNDER STRAIN:
- Singapore highly dependent on global commerce: trade-to-GDP ratio over 300%
- China is Singapore's largest trading partner (majority of export/import operations)
- US is top trading partner in services, second in goods, largest foreign investor
- Trump administration imposed 10% tariffs on imports from Singapore despite Singapore having trade deficit with US in 2024
- Foreign Minister Vivian Balakrishnan (February 2025): Singapore's foreign policy must "adapt swiftly" to "sharper major power rivalry"
- November 2025: PM Wong on Official Visit to South Korea - upgraded relations to Strategic Partnership
- Strategic Partnership covers: Political/Security/Public Sector Cooperation, Trade/Economic Cooperation, Sustainability/Green Economy, Advanced Technology/R&D, People-to-People Exchange
- Singapore will NOT choose between US and China but seeks to consolidate relations with both
- Policy approach: Champion regional integration through ASEAN, RCEP, CPTPP
- Risk: As US-China rivalry intensifies, pressure on Singapore to pick sides increases

FINANCIAL HUB STATUS - DIGITAL TRANSFORMATION:
- Singapore Fintech Map 2025: 520 fintech companies (notable increase from 2024)
- Over 1,000 Web3 companies established operations in Singapore
- Digital banks gaining ground but profitability elusive: Trust Bank led with S$96.9M total income but losses of S$93.3M (narrowed 27%)
- DBS Bank pioneered new crypto financial products for institutional investors
- ADDX became first Singapore financial institution to recognize cryptocurrency assets for accredited investor onboarding
- October 2025: Singapore delays bank crypto asset rules to 2027 amid industry pushback
- Delay is significant concession - banks warned implementing Basel standards ahead of other jurisdictions could disadvantage Singapore-based institutions
- Over 700 single family offices set up in past few years
- Heightened regulatory scrutiny and enforcement action expected in 2025
- DBS introduced DBS DigiPortfolio (robo-advisory for less experienced investors)

HOUSING POLICY & AFFORDABILITY:
- Four rounds of cooling measures: December 2021, September 2022, April 2023, August 2024
- August 2024: Loan-to-value limit for HDB loans reduced from 80% to 75%
- 2024 median multiple for resale HDB flats: 3.8 (down from 5.3 in 2023) - improved affordability
- BUT: Two-room flats rose 45.4%, three-room flats rose 41% in 2024
- Government committed to 100,000 new flats 2021-2025: Over 82,000 launched as of October 2024
- Private property downgraders buying million-dollar flats fell from 34% (early 2022) to 12% (late 2024)
- Minister Lee: 80% of first-time families buying new/resale HDB flats can finance entirely using CPF contributions (minimal/no cash needed)
- HDB prices remain hot political issue despite measures

SOCIETY & UNITY CONCERNS:
- Wong's focus on keeping society "strong and united" suggests tensions
- Ethnic/religious dimensions in electoral politics (WP appeal to Malay-Muslim voters)
- Balance between maintaining multiracial harmony and allowing political competition`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of SINGAPORE's situation in November 2025 based on the following real research:

${november2025Context}

WRITE IN THIS EXACT FORMAT:

[OPENING HOOK - 1 paragraph, ~150 words]
- Lead with the most dramatic/recent event
- Set the scene with vivid details
- Make it feel like insider analysis
- Pull readers in immediately

**The Big Issue 1: [Title]** (~200 words)
- Deep dive into the primary crisis/event
- Include specific details: dates, names, numbers
- Explain the stakes and consequences
- Use conversational tone, not dry reporting
- Make readers understand WHY this matters

**The Big Issue 2: [Title]** (~200 words)
- Second major storyline
- Connect to broader trends
- Include international implications
- Show how pieces connect

**The Big Issue 3: [Title]** (~200 words)
- Third storyline or emerging issue
- Can be economic, social, or political
- Forward-looking angle
- What's coming next?

**The International Angle** (~150 words)
- How this affects other countries
- Regional and global implications
- Power dynamics and alliances
- The great power game

**The Bottom Line** (~100 words)
- Synthesis of all threads
- What to watch next
- Punchy conclusion
- Leave readers informed and engaged

CRITICAL REQUIREMENTS:
- Use REAL details from the November 2025 context above
- Include specific names, dates, statistics
- Write conversationally - like you're explaining to a smart friend over coffee
- Use vivid language and dramatic framing where appropriate
- Make it engaging - use rhetorical questions, show stakes for real people
- Total length: 4,000-6,000 characters
- Be specific, not vague
- Connect local events to global trends

Generate the Singapore summary now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    console.log('\n=== GENERATED SINGAPORE SUMMARY ===\n')
    console.log(summaryText)
    console.log('\n=== END SUMMARY ===\n')
    console.log(`Character count: ${summaryText.length}`)

    // Extract issues from the summary (look for ** headers)
    const issueMatches = summaryText.match(/\*\*The Big Issue \d: (.+?)\*\*/g) || []
    const issues = issueMatches.map(match => match.replace(/\*\*The Big Issue \d: /, '').replace(/\*\*/, ''))

    // Also add the International Angle
    if (summaryText.includes('**The International Angle**')) {
      issues.push('International Involvement')
    }

    console.log('\nExtracted Issues:', issues)

    // Save to database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: SINGAPORE.name,
          type: SINGAPORE.type,
          category: 'all'
        }
      },
      create: {
        name: SINGAPORE.name,
        type: SINGAPORE.type,
        country: SINGAPORE.country,
        lat: SINGAPORE.lat,
        lng: SINGAPORE.lng,
        category: 'all',
        summary: summaryText,
        issues: JSON.stringify(issues),
        topStories: JSON.stringify([]), // Empty for now - will be populated from real news
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: summaryText,
        issues: JSON.stringify(issues),
        updatedAt: new Date()
      }
    })

    console.log('\n✅ Singapore summary saved to database!')
    console.log('\nNext step: Update MapViewLocations.tsx with tooltip text')

  } catch (error) {
    console.error('❌ Error generating Singapore summary:', error)
    throw error
  }
}

generateSingaporeSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
