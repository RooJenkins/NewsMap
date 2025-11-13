import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const BOSNIA = {
  name: 'Bosnia and Herzegovina',
  type: 'country',
  lat: 43.9159,
  lng: 17.6791,
  country: 'Bosnia and Herzegovina'
}

async function generateBosniaSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Bosnia and Herzegovina...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `BOSNIA AND HERZEGOVINA - NOVEMBER 2025 SITUATION:

NOVEMBER 23, 2025 ELECTION CRISIS - DODIK'S POWER STRUGGLE:
- Special election called for November 23 to replace Milorad Dodik as Republika Srpska president
- Dodik has vowed to block the vote, setting up another conflict with central government in Sarajevo
- Election follows Dodik's conviction and ban from politics by electoral authorities in August 2025
- Appeals court sentenced Dodik to one year in prison, barred from political office for six years
- February conviction: Sarajevo court found Dodik guilty of refusing to comply with decisions by international envoy Christian Schmidt
- Dodik refused to vacate office despite political ban - forced out in October
- Experts warn election "bound to trigger incidents" allowing Dodik to challenge vote legitimacy
- Volatile political situation with concerns about potential disruptions to November 23 election

INTERIM LEADERSHIP & SUCCESSION:
- October 2025: Republika Srpska parliament confirmed Ana Trisic Babic as interim president
- She will serve until November 23 early presidential elections
- Bosniak leader Bakir Izetbegovic fears emergence of "new strong Serb leader, Sinisa Karan, with support of Milorad Dodik"
- No Serb successor likely to resolve simmering conflict or accept High Representative's authority
- Support for autonomy remains strong in Republika Srpska
- Continued separatist rhetoric despite leadership change

ETHNIC TENSIONS & POLITICAL POLARIZATION:
- Ethnic tensions mark political environment
- Polarized political environment between Republika Srpska and central Sarajevo government
- Dodik (pro-Russian nationalist) has pushed for Republika Srpska to break away and join Serbia
- Ongoing institutional conflicts between Republika Srpska and Bosnia's central government
- Frozen conflict could reignite as Dodik clings to power
- Political integrity could depend on Sarajevo court's verdict and enforcement
- Change in electoral system adding to tensions

EU MEMBERSHIP PROGRESS (NOVEMBER 2025):
- Bosnia granted EU candidate status December 15, 2022
- Accession negotiations opened March 2024
- November 2025 Enlargement Package assessment: MIXED PROGRESS
- Political crisis in Republika Srpska entity and end of ruling coalition undermined EU accession progress
- Result: LIMITED reforms (only data protection and border control)
- Signature of Frontex status agreement completed
- September 2025: Bosnia submitted Reform Agenda to European Commission
- Following institutional changes in Republika Srpska, Bosnia now has "opportunity to deliver on reforms"
- KEY REQUIREMENTS to effectively start negotiations:
  * Finalize and adopt judicial reform laws in full alignment with European standards
  * Appoint a chief negotiator
- Assessment: mixed progress with ongoing political challenges but some forward movement

INTERNATIONAL OVERSIGHT:
- International envoy Christian Schmidt continues to play crucial role
- High Representative's authority rejected by Republika Srpska leadership
- UN Security Council continues monitoring situation
- European Union-led Stabilization Force (EUFOR) mandate renewed
- Brewing crisis threatening stability
- International mediation obstructed by political divisions, lack of cooperation

SEPARATIST DYNAMICS:
- Republika Srpska maintains separate government structure from central Bosnia government
- Strong autonomy sentiment in Republika Srpska entity
- Dodik's conviction creates succession crisis but doesn't resolve underlying tensions
- Russia backing Republika Srpska separatist ambitions
- Serbia's interest in potential Republika Srpska annexation

INSTITUTIONAL PARALYSIS:
- Central government in Sarajevo vs Republika Srpska government standoff continues
- End of ruling coalition further complicates governance
- Limited capacity for reform implementation
- Judicial system remains unreformed
- High stakes: political integrity depends on court enforcement
- Security Council continues monthly monitoring of Bosnia situation (May, October forecasts)`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of BOSNIA AND HERZEGOVINA's situation in November 2025 based on the following real research:

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

Generate the Bosnia and Herzegovina summary now:`

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

    console.log('\n=== GENERATED BOSNIA AND HERZEGOVINA SUMMARY ===\n')
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
          name: BOSNIA.name,
          type: BOSNIA.type,
          category: 'all'
        }
      },
      create: {
        name: BOSNIA.name,
        type: BOSNIA.type,
        country: BOSNIA.country,
        lat: BOSNIA.lat,
        lng: BOSNIA.lng,
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

    console.log('\n✅ Bosnia and Herzegovina summary saved to database!')

  } catch (error) {
    console.error('❌ Error generating Bosnia and Herzegovina summary:', error)
    throw error
  }
}

generateBosniaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
