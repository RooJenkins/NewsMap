import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const NORTH_KOREA = {
  name: 'North Korea',
  type: 'country',
  lat: 40.3399,
  lng: 127.5101,
  country: 'North Korea'
}

async function generateNorthKoreaSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for North Korea...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `NORTH KOREA - NOVEMBER 2025 SITUATION:

RUSSIA-NORTH KOREA MILITARY ALLIANCE:
- October 24, 2025: Kim Jong Un hailed "invincible" alliance with Russia at Memorial Museum groundbreaking
- First Memorial Museum "of its kind" in North Korean history to honor troops who fought in Russia's Kursk region
- Kim called deployment of North Korean troops "the beginning of a new history of militant solidarity" with Moscow
- October 27, 2025: Putin met with North Korean Foreign Minister Choe Son Hui at Kremlin
- Putin stated relations progressing "according to plan"
- North Korea confirmed troop deployment in April 2025 after initial denials
- Both Kim and Putin praised "heroic feats" of Korean People's Army in Ukraine

NORTH KOREAN TROOPS IN UKRAINE WAR:
- More than 10,000 North Korean troops deployed to Russia in return for economic and military technology assistance
- Troops deployed to Russia's Kursk region to repel Ukrainian forces
- September 2025: South Korea's intelligence agency said 2,000 North Korean soldiers killed
- North Korean troops gained firsthand combat experience against NATO-trained Ukrainian forces
- Developed tactics to counter Western military strategies
- Troops no longer actively participating in combat as of November 2025 but gained valuable experience
- Unprecedented integration of North Korea's military and industrial sector into Russia's war machine

NUCLEAR AND MILITARY TECHNOLOGY TRANSFER:
- Russia acquired North Korea's Pantsir-S1 self-propelled anti-aircraft system now deployed defending Pyongyang
- Ukraine's military intelligence: Technical support from Russia to North Korea's nuclear program already underway
- Experts assess it's "highly likely" Moscow gave Pyongyang what it demanded in building new weapons
- Most ominous development: North Korea believed close to obtaining advanced Russian technology for nuclear and missile programs
- Kim Jong Un wants to "speed up becoming a nuclear superpower"
- July 2025: Kim Yo Jong stated attempts to deny North Korea's nuclear status would be "thoroughly rejected"
- Kim Yo Jong: "The year 2025 is neither 2018 nor 2019" - recognition as nuclear state prerequisite for negotiations

INTERNAL ECONOMIC CRISIS:
- Urban residents experiencing dire food conditions - many living on two meals or fewer per day
- White rice prices increased 1.65 times since beginning of year
- Corn prices increased 1.38 times since beginning of year
- "Starving spring" period continues until potato harvest (June) and corn harvest (August-September)
- February 2025: Regime began surveying "households in food crisis" - neighborhood units listing impoverished families
- Most significant blow: Sharp decline in cash income as regime strictly regulates private economic activities since 2022
- January 2023: Regime imposed complete ban on sales of certain foods in local markets
- January 2025: UN granted sanctions exemptions allowing FAO to send technical support for feed production and wheat/barley cultivation
- 45.5% of population (11.8 million people) suffering from malnutrition according to UN agency

POLITICAL CONTROL & CENTRALIZATION:
- Regime forced people to report to state-owned enterprises
- Strict border closures during COVID blocked trade with China leading to acute shortages
- Legal changes adopted increasing centrality of Workers Party and state in agricultural production/distribution
- Food insecurity changed from market-based access to politically-determined access
- Kim Jong Un regime prioritizes centralized control over market-based solutions

FOREIGN POLICY & DIPLOMATIC STANCE:
- North Korea made Russia the priority of its foreign policy since 2022
- Sent thousands of troops and large supplies of military equipment to Russia: artillery and missiles
- Kim Yo Jong reiterated North Korea has no immediate interest in reviving negotiations with Washington and Seoul
- Relationship with Russia transformed into alliance-like structure based on ideological alignment and long-term strategic interests
- North Korea deepening military cooperation despite international sanctions and pressure`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of NORTH KOREA's situation in November 2025 based on the following real research:

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

Generate the North Korea summary now:`

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

    console.log('\n=== GENERATED NORTH KOREA SUMMARY ===\n')
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
          name: NORTH_KOREA.name,
          type: NORTH_KOREA.type,
          category: 'all'
        }
      },
      create: {
        name: NORTH_KOREA.name,
        type: NORTH_KOREA.type,
        country: NORTH_KOREA.country,
        lat: NORTH_KOREA.lat,
        lng: NORTH_KOREA.lng,
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

    console.log('\n✅ North Korea summary saved to database!')
    console.log('\nNext step: Update MapViewLocations.tsx with tooltip text')

  } catch (error) {
    console.error('❌ Error generating North Korea summary:', error)
    throw error
  }
}

generateNorthKoreaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
