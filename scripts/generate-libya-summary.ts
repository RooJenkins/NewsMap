import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const LIBYA = {
  name: 'Libya',
  type: 'country',
  lat: 26.3351,
  lng: 17.2283,
  country: 'Libya'
}

async function generateLibyaSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Libya...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `LIBYA - NOVEMBER 2025 SITUATION:

POLITICAL DIVISION:
- Libya remains split between two rival governments:
  * Government of National Unity (GNU) in Tripoli led by PM Abdul Hamid Mohammed Dbeibah (internationally recognized)
  * Government of National Stability (GNS) based in Tobruk led by PM Osama Hamad (backed by House of Representatives and General Khalifa Haftar's Libyan National Army)
- Warlord Khalifa Haftar calls for "radical change in the political landscape" to ensure security and stability
- Haftar incites protests for people to determine their destiny and build the state
- Late 2024/early 2025: Flare-up in violence near Tripoli - media reports suggest a "Third Civil War" is imminent
- May 2025: Sudden surge of violence left parts of Tripoli in ruins, claimed civilian lives after killing of prominent militia leader
- Both governments spending uncontrollably: GNU spent over 109 billion LYD in 2024, eastern government accrued 49 billion+ in off-budget obligations

OIL SECTOR CRISIS:
- Libya produces more than 1 million barrels per day, but ordinary Libyans see little improvement
- Haftar threatens to take oil ports by force - reportedly received another delivery of Russian BM-30 Smerch rocket launchers
- Eastern-based National Oil Corporation threatens force majeure in response
- Arkenu Oil Company (private firm linked to Haftar) shattered state National Oil Corporation's monopoly
- At least $600 million in oil revenues bypassed Central Bank
- January 2025: National Oil Corporation announced "soon" public tender for exploring key gas/oil plots - first since 2007
- Despite "oil boom" and production rebound optimism, energy infrastructure remains under militia control
- Big Oil bets ignore geopolitical and security risks that threaten every barrel

CENTRAL BANK STANDOFF & ECONOMIC CRISIS:
- August 2024: Dangerous dispute over Central Bank control after GNU unilaterally appointed new governor (ousting Sadiq al-Kabir)
- Standoff stopped imports, led most foreign financial institutions to suspend dealings with Central Bank
- Federal Reserve Bank of New York & US Treasury suspended all dealings with Central Bank of Libya and Libyan Foreign Bank
- Fed and Treasury insist no funds released until Libya establishes unified budget and government
- Central Bank Governor Naji Issa forced to devalue Libyan dinar due to uncontrolled spending by both governments
- Black-market exchange rate climbed to 7.8 LYD to dollar within 48 hours of devaluation decree
- Oil export revenues: only $18.6 billion in 2024, while foreign exchange expenditures reached $27 billion (massive deficit)
- First quarter 2025: Foreign currency expenditures ~$9.8 billion, revenues only ~$5.2 billion (deficit of $4.6 billion in 3 months)
- Central Bank Governor: "The state's goals cannot be achieved under the current division"

ELECTIONS DEADLOCK:
- Municipal council elections preparations discussed with British Ambassador
- Elections deadlocked over proposed legislation - key contention: formation of unified interim government to organize elections
- GNS/House of Representatives favor unified interim government; GNU opposes
- Some Libyans pushing for replacement of both governments with unified interim government
- International mediation obstructed by political divisions, lack of cooperation, absence of clear diplomatic framework

FOREIGN INTERFERENCE:
- Russia's Wagner Group mercenaries entrenched in south and east since October 2020 ceasefire
- Wagner took over military airbases, encamped near oil fields and natural resource infrastructure
- Wagner activities: military operations, hardware maintenance, political advisory, social media disinformation
- Turkey deployed troops, drones, and Syrian mercenaries to Libya in January 2020 supporting Tripoli government
- Haftar's 2019 military campaign to capture Tripoli collapsed after Turkish military support
- October 2020 cease-fire agreement called for withdrawal of foreign fighters/mercenaries - little evidence of withdrawals
- Haftar's oil blockades served Russian geopolitical interests, harmed US interests by stifling Europe oil supplies
- Washington distracted, Europe exhausted, Russia and Turkey now co-managing spheres of influence rather than zero-sum games

HUMAN RIGHTS & SECURITY:
- Fragile calm after violence, but risk of renewed civil war high
- Living conditions for ordinary Libyans unchanged despite oil wealth
- Prolonged political stalemate is root cause of Libya's security and economic challenges`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of LIBYA's situation in November 2025 based on the following real research:

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

Generate the Libya summary now:`

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

    console.log('\n=== GENERATED LIBYA SUMMARY ===\n')
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
          name: LIBYA.name,
          type: LIBYA.type,
          category: 'all'
        }
      },
      create: {
        name: LIBYA.name,
        type: LIBYA.type,
        country: LIBYA.country,
        lat: LIBYA.lat,
        lng: LIBYA.lng,
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

    console.log('\n✅ Libya summary saved to database!')
    console.log('\nNext step: Update MapViewLocations.tsx with tooltip text')

  } catch (error) {
    console.error('❌ Error generating Libya summary:', error)
    throw error
  }
}

generateLibyaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
