import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const BRUNEI = {
  name: 'Brunei',
  type: 'country',
  lat: 4.5353,
  lng: 114.7277,
  country: 'Brunei'
}

const MALDIVES = {
  name: 'Maldives',
  type: 'country',
  lat: 3.2028,
  lng: 73.2207,
  country: 'Maldives'
}

const TURKMENISTAN = {
  name: 'Turkmenistan',
  type: 'country',
  lat: 38.9697,
  lng: 59.5563,
  country: 'Turkmenistan'
}

const BAHAMAS = {
  name: 'Bahamas',
  type: 'country',
  lat: 25.0343,
  lng: -77.3963,
  country: 'Bahamas'
}

const november2025Contexts = {
  BRUNEI: `BRUNEI - NOVEMBER 2025 SITUATION:

SULTAN HASSANAL BOLKIAH - LONGEST-REIGNING MONARCH:
- Sultan Hassanal Bolkiah ruling since 1967 (58 years) - world's longest-reigning current monarch
- Born July 15, 1946 (age 79 in November 2025)
- One of world's few remaining absolute monarchs with supreme executive authority
- Serves as Prime Minister, Defense Minister, Finance Minister, and Foreign Affairs Minister
- May 2025 health scare: Hospitalized in Kuala Lumpur for fatigue during ASEAN summit
- Estimated net worth $28-50 billion, primarily from oil and gas investments

SUCCESSION PLANNING - CROWN PRINCE:
- Crown Prince Al-Muhtadee Billah (born Feb 17, 1974, age 51) - eldest son with Queen Saleha
- Longest-serving current heir apparent - in line since birth, formally proclaimed 1998
- Appointed Senior Minister at Prime Minister's Office in 2005
- Served as chairman of Brunei Shell Joint Venture Companies (2018-2024)
- Succession question increasingly relevant given Sultan's age and recent health concerns
- Smooth transition expected but personality cult and absolute power concentrated around Sultan

ECONOMIC TRANSFORMATION (2024-2025):
- Stunning economic performance: 4.2% GDP growth in 2024 - fastest in 25 years (since 1999)
- GDP reached BND 20.7 billion in 2024
- Similar growth rate projected for 2025 before normalizing to 1.5-2.0% steady state
- DRAMATIC STRUCTURAL SHIFT: Non-oil and gas sector now 53.3% of GDP (oil/gas 46.7%)
- Petrochemical manufacturing surge: 12% growth, now 61% of total exports
- Non-oil/gas exports reached 70% of total exports - historic diversification milestone
- Oil and gas still critical but no longer dominant: Half of GDP still relies on oil revenues

OIL & GAS WEALTH MANAGEMENT:
- Energy sector contributed 46.7% of GDP in 2024, climbing 5.5% year-on-year
- Brunei Shell Joint Ventures remain cornerstone of economy
- Oil and gas investments underpin Sultan's massive personal wealth
- Proven oil and gas reserves ensuring continued revenue stream
- Balance between maintaining oil wealth and diversifying economy

ISLAMIC LAW IMPLEMENTATION:
- Strict Sharia law penal code implemented 2019 - international controversy ongoing
- Dual legal system: Common law and Sharia law operating in parallel
- Sultan exercises supreme religious authority as head of Islamic faith in Brunei
- February 22, 2024: Sultan's National Day speech referred to independence as "blessing from God"
- Islamic governance principles deeply embedded in absolute monarchy structure
- No separation of religious and political authority

GOVERNANCE STRUCTURE:
- No elected legislature - Sultan exercises supreme authority across all branches
- Highly centralized decision-making concentrated in Sultan and inner circle
- Crown Prince increasingly involved but Sultan maintains firm control
- Legislative Council exists but purely advisory, appointed by Sultan
- Political parties banned in practice, no democratic representation

REGIONAL RELATIONS (2025):
- August 2025: Four-day state visit to Malaysia - King welcomed Sultan at Istana Negara
- ASEAN member maintaining strong regional ties despite absolute monarchy
- May 2025 ASEAN summit participation (cut short due to health concerns)
- Balancing relations with major powers while maintaining political isolation domestically
- Close economic ties with Malaysia, Singapore for trade and investment

CHALLENGES AHEAD:
- Succession planning and ensuring smooth transition of absolute power
- Maintaining economic diversification momentum while oil prices fluctuate
- International scrutiny over human rights and Sharia law implementation
- Need to develop democratic institutions while Sultan maintains absolute control
- Managing Crown Prince's increasing profile and responsibilities
- Economic dependency risk despite diversification gains
- Population expectations for continued prosperity and stability
- November 2025: Growing questions about Sultan's health and timeline for transition`,

  MALDIVES: `MALDIVES - NOVEMBER 2025 SITUATION:

PRESIDENT MUIZZU'S PRAGMATIC PIVOT (2025):
- Mohamed Muizzu elected September 2023 on "India Out" platform, pro-China stance
- July 25-26, 2025: PM Modi's state visit to Maldives - MAJOR diplomatic reset
- Muizzu replaced partisan policy with pragmatic approach, respecting India's redlines
- Balancing act: China key defense partner, India crucial for commercial/economic ties
- January 2025: Beijing visit, signed infrastructure and climate deals with China
- Shift from confrontation to cooperation marks strategic recalibration

INDIA-CHINA BALANCING ACT:
- Tourist dynamics shifted: China now top source market, surpassing India
- India maintains position as "closest friend" while China labeled "key partner"
- Chinese infrastructure projects ongoing despite improved India relations
- Maldives caught in Indian Ocean great power competition
- Strategic location makes neutrality difficult - both powers seeking influence
- October 2024: Relations "back on track" - from "India Out" to "biggest development partner"
- Muizzu seeking to preserve sovereignty amid competing pressures

ECONOMIC CRISIS URGENCY (2024-2025):
- DIRE FINANCIAL STRAITS: Foreign reserves plummeted to $440 million (March 2024)
- Reserves barely cover 1.5 months of imports - critical shortage
- Total debt: $8.3 billion as of March 2024 = 110.1% of GDP
- Debt crisis driven by Chinese infrastructure lending, tourism downturn recovery
- Government facing debt servicing challenges amid revenue constraints
- Economic vulnerability forcing diplomatic pragmatism with both India and China
- Need for bailouts or restructuring becoming increasingly urgent

TOURISM ECONOMY - DOUBLE-EDGED SWORD:
- Tourism sector comprises nearly 33% of GDP - massive dependency
- Post-pandemic recovery slower than expected despite luxury market strength
- "India Out" controversy damaged India tourist arrivals initially
- China tourist surge offsetting India decline but geopolitical risk remains
- Luxury resort development continuing despite economic headwinds
- Climate crisis threatens long-term viability of tourism business model
- Economic model heavily exposed to external shocks and geopolitical tensions

CLIMATE CRISIS URGENCY:
- Existential threat: 80% of islands less than 1 meter above sea level
- Rising sea levels threaten nation's very existence within decades
- Climate deals signed with China in January 2025 visit
- Western countries offering climate cooperation as diplomatic tool
- Need for massive investment in climate adaptation infrastructure
- Tension between short-term economic needs and long-term survival
- Climate vulnerability driving diplomatic engagement with all major powers

DEMOCRATIC BACKSLIDING CONCERNS:
- Muizzu's election "critical test in upholding democracy"
- Nascent democracy facing challenges from executive power consolidation
- Political polarization between pro-India and pro-China factions
- Democratic institutions under strain from economic crisis
- Civil society concerns about erosion of freedoms
- Media pressure and political opposition facing constraints
- Democratic gains since 2008 at risk amid crisis governance

POLITICAL LANDSCAPE (2023-2025):
- Muizzu's People's National Congress (PNC) pursuing nationalist agenda
- Opposition Maldivian Democratic Party (MDP) weakened after 2023 defeat
- Former President Nasheed's influence waning after MDP split
- Political instability risk if economic crisis deepens
- Youth population increasingly frustrated with economic prospects
- Social media driving political discourse and polarization

REGIONAL DYNAMICS:
- Indian Ocean emerging as key arena for US-China competition
- Maldives' strategic location makes it prize in great power game
- Sri Lanka's crisis serving as warning about Chinese debt trap
- Relations with South Asian neighbors complicated by China ties
- SAARC membership but limited regional integration
- November 2025: Walking tightrope between competing powers while economy burns

NOVEMBER 2025 REALITY:
- Muizzu learning that geopolitical rhetoric meets economic reality
- Pragmatism replacing ideology as debt crisis forces difficult choices
- Climate and economic crises creating perfect storm of vulnerability
- Democratic future uncertain as strongman governance temptation grows
- Tourism dependency making country hostage to geopolitical winds
- Nation's survival requiring both climate action and economic stabilization`,

  TURKMENISTAN: `TURKMENISTAN - NOVEMBER 2025 SITUATION:

BERDIMUHAMEDOW DYNASTY - POWER IN REVERSE:
- Serdar Berdimuhamedow became President March 2022, succeeding father Gurbanguly
- TWIST: 2023 constitutional changes granted People's Council (still headed by father) powers superseding president
- Father's People's Council can change constitution, oversee all government branches
- "Like father, like son" - but power actually flowing backward to father
- Dynastic succession but elder Berdimuhamedov maintaining control from shadows
- Resembles North Korea's power structure more than typical succession
- Serdar serves as figurehead while father pulls strings

PERSONALITY CULT CONTINUATION:
- Father's personality cult (golden statues, bizarre stunts) being replicated by son
- Gurbanguly's eccentric governance style (weightlifting, rapping, horse riding) set template
- Serdar attempting to build own cult but overshadowed by father's continuing presence
- State propaganda machinery working overtime for both Berdimuhamedovs
- Public displays of loyalty and adoration mandatory for citizens
- November 2025: Dynasty consolidation more important than actual governance

GAS EXPORTS TO CHINA - DANGEROUS DEPENDENCY:
- Natural gas: 71% of exports by value (2023), oil another 20%
- China receives almost entire gas exports - single customer vulnerability
- 2022: Gas export revenues to China surged 51% to $10.3 billion
- Central Asia-China gas pipeline (Line C and D) critical infrastructure
- "All eggs in one pipeline" - catastrophic economic risk
- BUT: June 2025 diplomatic shift - meetings with Iran, Russia, AND United States
- Eroding China alliance driving diversification efforts
- China reducing purchases amid own economic slowdown creating crisis

ISOLATION POLICY - ONE OF WORLD'S MOST CLOSED:
- Sealed off from outside world since 1991 independence
- Tight government control over economy, society, information
- Internet heavily restricted, media totally controlled
- Travel restrictions severe for citizens and foreigners
- COVID-19 pretext used to intensify isolation (officially "no cases")
- Diplomatic missions minimal, international engagement limited
- November 2025: Isolation both policy choice and economic necessity

HUMAN RIGHTS CONCERNS - "COUNTRY OF PARTICULAR CONCERN":
- Freedom House: "Repressive authoritarian state, rights almost completely denied"
- Designated "Country of Particular Concern" for religious freedom violations since 2014
- Enforced disappearances common - critics vanish without trace
- Arbitrary arrest and detention standard practice
- Torture documented by international organizations
- No freedom of expression, assembly, or association
- Corruption endemic at all government levels
- Zero political opposition tolerated

ECONOMIC CRISIS AND DIVERSIFICATION ATTEMPTS (2025):
- Previous economic crisis from China dependency forcing painful adjustment
- June 2025: Establishing "stronger diplomatic relations" with Iran, Russia, US
- Desperate diversification of trading partners beyond China
- Gas revenues volatile as Chinese demand fluctuates
- Attempts at economic reform hampered by authoritarian control
- Corruption and mismanagement draining resources
- November 2025: Economic model unsustainable but reform blocked by regime

STRATEGIC SHIFT TOWARD MOSCOW-TEHRAN-BEIJING AXIS:
- Moving away from exclusive China focus toward multi-polar authoritarian alliance
- Russia relationship strengthening amid Western sanctions pressure
- Iran partnership growing around gas exports and regional stability
- Still maintaining China ties but reducing catastrophic dependency
- Playing authoritarian powers against each other for better terms
- No Western engagement except transactional diplomacy

REGIONAL DYNAMICS:
- Central Asian gas competition with Kazakhstan, Uzbekistan
- Afghan border security concerns with Taliban-controlled Afghanistan
- Caspian Sea territorial disputes with Azerbaijan, Iran
- Relations with neighbors limited by regime's isolation policy
- TAPI pipeline to Afghanistan/Pakistan/India perpetually delayed
- November 2025: Regional integration impossible under current regime

SOCIETY AND GOVERNANCE:
- Education system propaganda-focused, quality deteriorating
- Healthcare system inadequate despite official claims
- Food security concerns amid economic problems
- Youth population with no opportunities, no freedoms
- Brain drain as educated citizens flee when possible
- Environmental degradation from gas extraction ignored

NOVEMBER 2025 OUTLOOK:
- Dynasty consolidated but father still in control
- Economic model breaking down, forced diversification beginning
- Human rights situation worsening despite international condemnation
- China relationship cooling but no Western alternative
- Isolation deepening as regime tightens control
- Succession within succession creating confusion about who actually governs
- Country trapped between failed economic model and authoritarian rigidity`,

  BAHAMAS: `BAHAMAS - NOVEMBER 2025 SITUATION:

DAVIS GOVERNMENT - PROGRESSIVE LIBERAL PARTY DOMINANCE:
- Prime Minister Philip Edward "Brave" Davis KC, MP serving since September 2021
- Progressive Liberal Party (PLP) won landslide: 32 of 39 seats in House of Assembly
- Four years into five-year term, next election due 2026
- Early election speculation dismissed by political observers (November 2025)
- Davis also serves as Minister of Finance - direct control over economic policy
- PLP enjoying strong parliamentary majority enabling legislative agenda
- Opposition Free National Movement (FNM) weakened and fractured

ECONOMIC PERFORMANCE - EXCEEDING EXPECTATIONS (2024-2025):
- Economy grew 3.4% in 2024 - surpassing government projections
- GDP growth trajectory: From contractions (2019-2020) to consistent positive growth
- IMF upgraded 2025 growth forecast from 1.7% to 1.8%
- IMF upgraded 2026 growth forecast from 1.6% to 1.7%
- "Growing confidence in Bahamian economy" - PM Davis October 2025 statement
- Financial services sector remains robust - business-friendly tax environment
- One of "most dynamic tourism economies in the hemisphere"

TOURISM DEPENDENCY - RECORD LEVELS WITH STRUCTURAL SHIFT:
- Tourism described as "very lifeblood" of economy by PM Davis
- Visitor arrivals reaching record levels in 2025
- CRITICAL SHIFT: Cruise visitors surging, stopover visitors declining
- Cruise industry growth expected to sustain overall visitor expenditure
- Tourism sector providing jobs but vulnerable to external shocks
- Hurricane disruptions remain existential threat to industry
- November 2025: Tourism booming but model evolution creating winners/losers

BUDGET 2025/2026 - "EXPANDING OPPORTUNITIES ISLAND BY ISLAND":
- Budget theme emphasizes spreading development beyond Nassau/Freeport
- Family Island development priority - addressing historical inequality
- Infrastructure investment in outer islands
- Mid-year budget debate showing strong fiscal position
- Revenue collection robust, deficit concerns manageable
- Focus on inclusive growth and reducing geographic disparities

INVESTMENT FORUM 2025 - DIVERSIFICATION PUSH:
- PM Davis remarks at 2025 Bahamas Business & Investment Forum highlighting opportunities:
- RENEWABLE ENERGY: Transition from fossil fuel dependency
- DIGITAL ASSETS: Positioning Bahamas as crypto/blockchain hub
- BLUE ECONOMY: Sustainable ocean resource development
- TECHNOLOGY PARKS: Attracting tech companies and digital nomads
- CLIMATE ADAPTATION INFRASTRUCTURE: Building resilience to storms
- Attracting foreign direct investment while maintaining sovereignty

HURRICANE RECOVERY - ONGOING CHALLENGE:
- Recovery from recent hurricane seasons ongoing in 2025
- Abaco and Grand Bahama still rebuilding from Hurricane Dorian (2019 devastation)
- Climate change intensifying hurricane threats - existential risk
- Insurance costs skyrocketing, making development more expensive
- Need for resilient infrastructure competing with budget constraints
- PM Davis's food program supporting affected communities despite political criticism

RELATIONSHIP WITH UNITED STATES:
- Geographic proximity to US (50 miles from Florida) defining relationship
- US remains top source market for stopover tourism and investment
- Security cooperation on drug trafficking interdiction critical
- Immigration pressure as Haitians use Bahamas as transit route to US
- Bahamas navigating US policy changes carefully
- Trade relationship crucial but Bahamas maintaining independent foreign policy
- November 2025: Balancing close US ties with sovereignty concerns

FINANCIAL SERVICES SECTOR:
- Offshore banking and financial services major economic pillar
- "Business-friendly tax environment" attracting international firms
- Regulatory compliance with international standards improving reputation
- Competition from other Caribbean jurisdictions increasing
- Digital assets/cryptocurrency creating new opportunities and risks
- Transparency requirements from OECD affecting traditional privacy model
- Sector evolution from pure tax haven to legitimate financial center

SOCIAL AND POLITICAL CHALLENGES:
- Crime rates, particularly in Nassau, remain political liability for PLP
- Cost of living pressures despite economic growth
- Youth unemployment concerns despite tourism boom
- Healthcare system strains in Family Islands
- Education quality disparities between islands
- Opposition criticizing government spending priorities (food program controversy)

POLITICAL LANDSCAPE (NOVEMBER 2025):
- PM Davis popularity solid but not unassailable
- PLP internal factions manageable with strong majority
- FNM opposition struggling to articulate alternative vision
- Democratic Alliance of Bahamas (DNA) third party minimal impact
- Next election 2026: PLP favored but not certain
- Voter concerns: Crime, cost of living, hurricane preparedness
- Davis's lawyer background (KC - King's Counsel) shapes governance style

REGIONAL CONTEXT:
- CARICOM member but limited regional integration
- Haiti crisis creating migration pressures and security concerns
- Competition with other Caribbean tourism destinations
- Climate change affecting all Caribbean nations collectively
- November 2025: Bahamas leading Caribbean in economic performance

NOVEMBER 2025 SNAPSHOT:
- Economy performing well above expectations
- Tourism at record levels despite model shift
- Government fiscally stable with ambitious development agenda
- Hurricane threat and climate change creating long-term vulnerability
- US relationship stable and mutually beneficial
- Davis government confident heading toward 2026 election
- Challenges manageable but structural vulnerabilities remain`
}

async function generateCountrySummary(location: any, contextKey: keyof typeof november2025Contexts) {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`Generating "Rest is Politics" style summary for ${location.name}...`)
  console.log('='.repeat(60))

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of ${location.name.toUpperCase()}'s situation in November 2025 based on the following real research:

${november2025Contexts[contextKey]}

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

Generate the ${location.name} summary now:`

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

    console.log(`\n=== GENERATED ${location.name.toUpperCase()} SUMMARY ===\n`)
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
          name: location.name,
          type: location.type,
          category: 'all'
        }
      },
      create: {
        name: location.name,
        type: location.type,
        country: location.country,
        lat: location.lat,
        lng: location.lng,
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

    console.log(`\n✅ ${location.name} summary saved to database!`)
    return true

  } catch (error) {
    console.error(`❌ Error generating ${location.name} summary:`, error)
    throw error
  }
}

async function generateAllSummaries() {
  console.log('\n' + '='.repeat(60))
  console.log('GENERATING REST IS POLITICS SUMMARIES FOR 4 COUNTRIES')
  console.log('='.repeat(60))
  console.log('Countries: Brunei, Maldives, Turkmenistan, Bahamas')
  console.log('='.repeat(60) + '\n')

  try {
    // Generate summaries sequentially to avoid rate limits
    await generateCountrySummary(BRUNEI, 'BRUNEI')
    await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay

    await generateCountrySummary(MALDIVES, 'MALDIVES')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generateCountrySummary(TURKMENISTAN, 'TURKMENISTAN')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generateCountrySummary(BAHAMAS, 'BAHAMAS')

    console.log('\n' + '='.repeat(60))
    console.log('✅ ALL 4 COUNTRY SUMMARIES GENERATED AND SAVED!')
    console.log('='.repeat(60))

  } catch (error) {
    console.error('\n❌ Error in batch generation:', error)
    throw error
  }
}

generateAllSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
