import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const CYPRUS = {
  name: 'Cyprus',
  type: 'country',
  lat: 35.1264,
  lng: 33.4299,
  country: 'Cyprus'
}

async function generateCyprusSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Cyprus...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `CYPRUS - NOVEMBER 2025 SITUATION:

OCTOBER 19, 2025 NORTHERN CYPRUS ELECTION BREAKTHROUGH:
- Opposition leader Tufan Erhürman defeated incumbent Ersin Tatar in landslide
- Erhürman secured roughly 62.8% of vote vs Tatar's 35.8%
- Unseated hardline, Ankara-aligned incumbent
- Installed moderate, pro-reunification figure as president of self-declared TRNC (Turkish Republic of Northern Cyprus)
- MAJOR SHIFT: Erhürman campaigned on reinvigorating stalled reunification talks
- Supports bi-zonal, bi-communal federal solution to Cyprus's decades-long division
- Tatar had staunchly advocated two-state policy aligned with Turkey's stance
- Tatar sought international recognition of north as separate sovereign state

IMMEDIATE REACTIONS & REUNIFICATION HOPES:
- Athens Foreign Minister George Gerapetritis: election represents "new chapter of hope and expectation"
- Greek FM stressed development can provide "much-needed boost to relaunch of UN-led negotiations"
- Cyprus President Nikos Christodoulides: "ready to resume negotiations even next week"
- Christodoulides: "If Erhürman talks clearly about bi-zonal, bi-communal federation, then the road is open for solution of Cyprus problem"
- Both sides expressing unprecedented optimism about renewed talks
- First real reunification momentum in years

TURKEY'S COMPLEX RESPONSE (NOVEMBER 2025):
- Devlet Bahçeli (leader of ultra-nationalist MHP, coalition partner to Erdogan): called for Northern Cyprus to be absorbed by Turkey within days of vote
- BUT: Rumors circulating through Turkey's political establishment suggest Erdogan actually favored Erhürman's victory above Tatar's
- Erdogan's vocal enthusiasm for Tatar far more muted in 2025 than previous years
- Potential shift in Turkish policy away from two-state solution?
- Turkey's response crucial as it maintains 30,000+ troops in Northern Cyprus
- Ankara's appetite for annexation vs federation remains key variable

EASTERN MEDITERRANEAN GAS TENSIONS:
- Core Cyprus-Turkey dispute: conflicting claims over maritime boundaries and resource ownership
- Turkey recognizes neither Republic of Cyprus nor Cyprus's claims to Exclusive Economic Zone (EEZ)
- Turkey opposes Nicosia's right to make investment decisions and lease exploration blocks
- Turkish claim: islands (including Cyprus) cannot have full 200 nautical mile EEZ, should only get 12 nautical mile territorial seas
- 2025 developments: Turkey continues naval patrols around contested waters
- Turkish cooperation expanded with Libya under maritime agreement signed late 2024
- Greece and Cyprus deepened ties with Israel and Egypt
- Eastern Mediterranean Gas Forum (EMGF) serves as counterweight to Turkish ambitions

NATURAL GAS DEVELOPMENTS:
- February 2025: Chevron's production plan approved for Aphrodite gas field
- Plan involves "cost-effective" 150-mile tieback pipeline to Port Said in Egypt
- Cronos field (3.1 Tcf) expected to begin production as soon as 2027
- Several recent discoveries expected to come onstream in coming years
- Significant economic potential but contested by Turkey

VAROSHA DISPUTE:
- Varosha: largely Greek Cypriot-owned ghost town, now within Turkish military zone
- Former inhabitants fled in 1974, never returned
- Long used as bargaining chip by Turkish Cypriot authorities
- Promise of return held against satisfactory reunification deal
- Remains unresolved humanitarian and political issue

CYPRUS ECONOMY (2025):
- Strong economic growth: 3% projected for 2025, 2.5% for 2026 (3.4% in 2024)
- Inflation declining: HICP inflation projected to converge to 2% by 2026
- Tourism and ICT sectors driving strong net exports
- Food and tourism prices showed marked increases in early 2025 (reflecting wage growth passthrough and strong tourist demand)
- Expected real GDP growth rate: 3.3% in 2025 with moderate 2.0% inflation rate
- Cost of living concerns: inflation impacted housing, food, and energy prices
- Monthly cost estimate: €1,800-€2,200 for single person, €4,000-€4,500 for families
- Housing affordability concerns especially in popular areas like Limassol

REPUBLIC OF CYPRUS (GREEK CYPRIOT) POLITICS:
- President Nikos Christodoulides showing strong pro-reunification stance
- Ready to move quickly on negotiations following Northern election results
- Cyprus maintains EU membership (joined 2004)
- Strong diplomatic backing from Greece and EU`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of CYPRUS's situation in November 2025 based on the following real research:

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

Generate the Cyprus summary now:`

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

    console.log('\n=== GENERATED CYPRUS SUMMARY ===\n')
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
          name: CYPRUS.name,
          type: CYPRUS.type,
          category: 'all'
        }
      },
      create: {
        name: CYPRUS.name,
        type: CYPRUS.type,
        country: CYPRUS.country,
        lat: CYPRUS.lat,
        lng: CYPRUS.lng,
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

    console.log('\n✅ Cyprus summary saved to database!')

  } catch (error) {
    console.error('❌ Error generating Cyprus summary:', error)
    throw error
  }
}

generateCyprusSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
