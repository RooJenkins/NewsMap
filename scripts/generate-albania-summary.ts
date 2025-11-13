import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const ALBANIA = {
  name: 'Albania',
  type: 'country',
  lat: 41.1533,
  lng: 20.1683,
  country: 'Albania'
}

async function generateAlbaniaSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Albania...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `ALBANIA - NOVEMBER 2025 SITUATION:

POLITICAL LANDSCAPE - MAY 2025 ELECTIONS:
- Parliamentary elections held May 11, 2025 resulted in decisive Socialist Party (PS) victory
- PM Edi Rama secured fourth consecutive term - governing since 2013
- Socialist Party won 82 seats in 140-seat parliament (52% of votes) - strongest result to date
- Democratic Party (centre-right) secured 51 seats (34% of votes) led by Sali Berisha
- Campaign focused heavily on EU membership: "Albania 2030 in EU, only with Edi and SP"
- Democratic Party hired Chris LaCivita (Trump strategist), adopted "Make Albania Great" slogan
- International observers noted: competitive elections but marred by ruling party's misuse of public resources, confrontational tone, divisive language, non-transparent financing, unbalanced media coverage

RAMA'S AI MINISTER INNOVATION:
- November 2025: Rama presented 16 members of fourth term cabinet
- Introduced world-first: "Minister Diella" - AI-driven ministerial role
- Tasked with overseeing public procurement to boost transparency and efficiency
- Controversial innovation drawing international attention

EU MEMBERSHIP PROGRESS (OCTOBER-NOVEMBER 2025):
- Albania made significant progress in 2025 enlargement package assessment
- 28 accession chapters opened in less than one year
- Four clusters opened: Fundamentals (Oct 2024), External Relations (Dec 2024), Internal Market (Apr 2025), Competitiveness (May 2025)
- Sixth accession conference (Sept 16, 2025): Cluster 4 (green agenda) opened
- On track to open all negotiating chapters before end of 2025
- Progress on fundamentals, justice reform, organized crime and corruption fight
- Albania on track to meet ambitious objective of concluding negotiations by 2027
- Full EU membership target: 2030
- Expected to begin final phase (closing chapters) from 2026

ECONOMIC SITUATION (2025):
- Economic growth: 3.6% in first half 2025 (similar to 2024)
- Growth projected to moderate to 3.2% in 2025, 3.1% medium-term
- Inflation: 2.40% (September 2025), up from 2.30% (August)
- Average inflation projected 2.3% for 2025 (vs 2.2% in 2024)
- Historic EUR 8.2 billion public spending in 2025 budget (32% of GDP)
- EUR 1.6 billion in investments (6.2% of GDP)
- NO fiscal crisis: Primary surplus meeting fiscal rules, overall deficit low at 0.8% of GDP
- Strong fiscal performance supported by solid revenue collection
- Primary fiscal balance expected to remain positive from 2025 (averaging 0.4% of GDP)

TOURISM & ECONOMIC DRIVERS:
- Tourism boom continuing - 26% of GDP in 2024
- Stimulating private and public investment in residential construction and infrastructure
- Exports driven by services, benefiting from tourism sector development
- Current account deficit expected to grow in 2025 (widening goods deficit, slower tourism growth)
- SEPA system operational since October 2025 - strengthening financial integration with EU

CHALLENGES:
- Global trade policy uncertainty affecting economic outlook
- Current account deficit concerns
- Need to maintain reform momentum for EU accession
- Political polarization and confrontational political environment`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of ALBANIA's situation in November 2025 based on the following real research:

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

Generate the Albania summary now:`

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

    console.log('\n=== GENERATED ALBANIA SUMMARY ===\n')
    console.log(summaryText)
    console.log('\n=== END SUMMARY ===\n')
    console.log(`Character count: ${summaryText.length}`)

    // Extract issues from the summary (look for ** headers)
    const issueMatches = summaryText.match(/\*\*The Big Issue \d: (.+?)\*\*/g) || []
    const issues = issueMatches.map(match => match.replace(/\*\*The Big Issue \d: /, '').replace(/\*\*/, ''))

    // Also add the International Angle
    if (summaryText.includes('**The International Angle**')) {
      issues.push('International Implications')
    }

    console.log('\nExtracted Issues:', issues)

    // Save to database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: ALBANIA.name,
          type: ALBANIA.type,
          category: 'all'
        }
      },
      create: {
        name: ALBANIA.name,
        type: ALBANIA.type,
        country: ALBANIA.country,
        lat: ALBANIA.lat,
        lng: ALBANIA.lng,
        category: 'all',
        summary: summaryText,
        issues: JSON.stringify(issues),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: summaryText,
        issues: JSON.stringify(issues),
        updatedAt: new Date()
      }
    })

    console.log('\n✅ Albania summary saved to database!')

  } catch (error) {
    console.error('❌ Error generating Albania summary:', error)
    throw error
  }
}

generateAlbaniaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
