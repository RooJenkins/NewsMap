import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const OMAN = {
  name: 'Oman',
  type: 'country',
  lat: 21.4735,
  lng: 55.9754,
  country: 'Oman'
}

async function generateOmanSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Oman...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `OMAN - NOVEMBER 2025 SITUATION:

SULTAN HAITHAM'S DIPLOMATIC MEDIATION ROLE:
- May 2025: Iran and Oman signed 18 cooperation documents in Muscat with Iranian President Masoud Pezeshkian and Sultan Haitham bin Tariq Al Said
- Agreements covered legal, economic, political, cultural, educational, health, defense, media, technology, energy, and mining sectors
- Pezeshkian praised Oman's "active and constructive" role in facilitating indirect nuclear talks between Tehran and Washington
- Five rounds of indirect Iran-US nuclear negotiations mediated by Oman, most recent concluded in Rome on May 23, 2025
- Sultan Haitham received calls from Turkish President Erdogan and German Chancellor Friedrich Merz on Iran-Israel escalation
- Omani Foreign Minister Badr al-Busaidi maintaining close contact with regional and international counterparts
- Oman re-emerged as key diplomatic player with long-standing reputation for neutrality and back-channel diplomacy
- Sultan Haitham emphasized need for greater energy cooperation and welcomed collaboration with Iran in military affairs
- Oman's policy: neutrality and non-intervention in both regional and international conflicts
- Sultan promised to follow "the same line as the late sultan, and the principles that he asserted for the foreign policy of our country, of peaceful coexistence among nations and people, and good neighborly behavior of non-interference"

ECONOMIC TRANSFORMATION - VISION 2040:
- 2025: Oman became the FIRST country in the Gulf to impose a personal income tax (major policy shift)
- Vision 2040 blueprint: moving decisively away from traditional oil-dependent model toward diversified, knowledge-based economy
- Hydrocarbon sector projected to decline from 39% of GDP (2017) to 16% (2030), then 8.4% by 2040
- Non-oil sector expected to climb to 91.6% by 2040
- Sultan Haitham levied VAT and slightly reduced fuel subsidies, making everything slightly more expensive
- Oman regarded as relatively poor in Gulf terms, poor in natural resources
- Future Fund Oman launched 2024 with $5.2 billion investment capacity targeting tourism, manufacturing, green energy, logistics
- November 2025: Digital Tax Stamp system for specific beverages delayed from November 2025 to January 1, 2026

RENEWABLE ENERGY PUSH:
- Target: 30% of electricity from renewables by 2030
- Ambitious goal: 50% of electricity from renewable sources by 2040
- Aiming to become top global exporter of green hydrogen
- Investments into green hydrogen have potential to produce nearly 1 GW of energy by 2025
- Large-scale solar farms in Ibri and wind energy installations in Dhofar
- Key to economic diversification strategy

REGIONAL INFRASTRUCTURE CONNECTIVITY:
- Etihad Rail project: 1,200km high-speed rail system spanning UAE linking Saudi Arabia and Oman
- Hafeet Rail project: railway network linking Sohar port in northern Oman to Al Ain in Abu Dhabi, completion expected end of 2027
- Etihad Rail developing luxury services to connect Abu Dhabi, Dubai, extending toward Oman and Saudi Arabia
- Oman developed multimodal transport services connecting Salalah port to Jeddah in Saudi Arabia
- Duqm developed inland roads to connect with Saudi Arabia and UAE
- Oman-Saudi border formalized at 658 km (409 mi)
- Cooperation with UAE set to increase traffic volumes at Sohar port

TOURISM DEVELOPMENT:
- Tourism is key pillar of Vision 2040
- By 2040: aiming to become world-class premium tourism destination
- Goals: attract 5 million+ tourists, offer 560,000 jobs
- November 2025: Al Baleed Culinary Festival (4th edition) running throughout month at Al Baleed Resort Salalah by Anantara
- Featuring fusion of Michelin-starred culinary mastery and authentic Omani flavors

NATIONAL CELEBRATIONS:
- November 20-21, 2025: Oman celebrates National Day with two-day holiday
- Celebrations reflect pride in nation's heritage and progress
- Residents using break to enjoy peaceful getaway or explore new parts of country`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of OMAN's situation in November 2025 based on the following real research:

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

Generate the Oman summary now:`

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

    console.log('\n=== GENERATED OMAN SUMMARY ===\n')
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
          name: OMAN.name,
          type: OMAN.type,
          category: 'all'
        }
      },
      create: {
        name: OMAN.name,
        type: OMAN.type,
        country: OMAN.country,
        lat: OMAN.lat,
        lng: OMAN.lng,
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

    console.log('\n✅ Oman summary saved to database!')
    console.log('\nNext step: Update MapViewLocations.tsx with tooltip text')

  } catch (error) {
    console.error('❌ Error generating Oman summary:', error)
    throw error
  }
}

generateOmanSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
