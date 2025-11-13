import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const BELARUS = {
  name: 'Belarus',
  type: 'country',
  lat: 53.9045,
  lng: 27.5615,
  country: 'Belarus'
}

async function generateBelarusSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Belarus...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `BELARUS - NOVEMBER 2025 SITUATION:

JANUARY 2025 ELECTION - "EUROPE'S LAST DICTATOR" EXTENDS RULE:
- Presidential election held January 26, 2025
- Lukashenko won with 86.8% (over 87% of vote) - no serious challenge on ballot
- Lukashenko has been in power since 2013 (now securing 7th term, extending 30-year rule)
- Opposition leader Sviatlana Tsikhanouskaya (exiled in Lithuania) called it "senseless farce, a Lukashenko ritual"
- Unlike 2020, NO mass protests inside Belarus - Tsikhanouskaya advised against protests "until the real moment of possibility"
- Crackdown so brutal Tsikhanouskaya declined to call for public protests, only asked for boycott
- Hundreds of Belarusians protested in Warsaw led by Tsikhanouskaya over rigged election
- EU foreign policy chief Kaja Kallas: election "blatant affront to democracy"
- EU, UK, and Canada refused to acknowledge results as fraudulent

NOVEMBER 2025 DOMESTIC DEVELOPMENTS:
- Lukashenko hinted in August 2025 this may be his final term - first time suggesting he may not seek another term
- Belarus finalizing socio-economic development program for 2026-2030 - Lukashenko demands it be "comprehensive, effective, realistic"
- November 13: Lukashenko challenged scientific community leadership to outline future development strategy
- November 7: Demanded clear development strategy for engine manufacturing industry during visit to Zhitkovichi Engine-Building Plant
- Industrial focus on self-sufficiency and reducing foreign dependency

BELARUS-LITHUANIA BORDER CRISIS (NOVEMBER 2025):
- Lithuania proposed resolution talks on border situation
- Lukashenko instructed Foreign Minister Maxim Ryzhenkov to organize negotiations
- Belarus stated ready for Lithuanian border to open - "was not the one that closed it"
- Belarus claims can resume border operations "within several hours"
- Border tensions part of broader hybrid warfare between Belarus/Russia and Baltic states
- Belarus attempting to break diplomatic and economic isolation

RUSSIA-BELARUS MILITARY COOPERATION & UKRAINE WAR:
- Belarus has NOT sent own troops to Ukraine battlefield
- BUT: allows Russian military to use territory and infrastructure extensively
- Zapad 2025 military drills: Belarus hosting 13,000 Russian troops
- Belarus enables: Russian ballistic missiles fired from Belarusian territory, transportation of Russian military personnel/weapons, Russian military aircraft flying through Belarusian airspace into Ukraine
- Since October 2020 ceasefire, Russia maintains extensive military presence in Belarus
- Belarus helps Russia circumvent sanctions

EU & WESTERN SANCTIONS:
- June 12, 2025: EU Council introduced tariffs on agricultural products and fertilizers from Russia and Belarus (applied July 1, 2025)
- February 24, 2025: EU adopted 16th sanctions package
- Latest EU package: sanctions on JSC Integral (makes semiconductors found in Russian missiles)
- Sanctions targeting Belarus for enabling Russia's Ukraine invasion

BELARUS MEDIATION ATTEMPTS:
- October 19, 2025: Ivan Tertel (head of Belarusian State Security Committee) claimed Belarus ready to "find consensus" with Ukraine regarding end to war
- Represents shift: Belarus attempting to break diplomatic/economic isolation by playing mediator role
- Hopes mediating could ease Western sanctions in return
- But credibility undermined by continued military cooperation with Russia

ECONOMIC DEPENDENCY ON RUSSIA:
- Belarus attracted $5.5 billion foreign investment January-September 2025
- Lukashenko's motives: continued economic assistance from Moscow
- Russia offers: energy resources on preferential terms, deferred loan payments, access to Russian ports and transportation infrastructure for export of sanctioned Belarusian goods
- Deep economic dependency makes Belarus essentially Russian satellite state

US ENGAGEMENT:
- Lukashenko's planned meeting with US delegation to address 5-6 issues
- Belarus stated ready to engage in negotiations to normalize relations with any country
- Represents attempt to diversify relationships beyond Russia while maintaining Putin's support

NOVEMBER 7 HOLIDAY SIGNIFICANCE:
- Lukashenko: "We've given new meaning to October Revolution Day"
- Soviet nostalgia remains potent political tool for regime legitimacy`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of BELARUS's situation in November 2025 based on the following real research:

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

Generate the Belarus summary now:`

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

    console.log('\n=== GENERATED BELARUS SUMMARY ===\n')
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
          name: BELARUS.name,
          type: BELARUS.type,
          category: 'all'
        }
      },
      create: {
        name: BELARUS.name,
        type: BELARUS.type,
        country: BELARUS.country,
        lat: BELARUS.lat,
        lng: BELARUS.lng,
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

    console.log('\n✅ Belarus summary saved to database!')

  } catch (error) {
    console.error('❌ Error generating Belarus summary:', error)
    throw error
  }
}

generateBelarusSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
