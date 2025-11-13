import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const NAMIBIA = {
  name: 'Namibia',
  type: 'country',
  lat: -22.9576,
  lng: 18.4904,
  country: 'Namibia'
}

const NIGER = {
  name: 'Niger',
  type: 'country',
  lat: 17.6078,
  lng: 8.0817,
  country: 'Niger'
}

const REPUBLIC_OF_CONGO = {
  name: 'Republic of Congo',
  type: 'country',
  lat: -0.2280,
  lng: 15.8277,
  country: 'Republic of Congo'
}

const SOUTH_SUDAN = {
  name: 'South Sudan',
  type: 'country',
  lat: 6.8770,
  lng: 31.3070,
  country: 'South Sudan'
}

async function generateCountrySummary(
  location: typeof NAMIBIA,
  contextText: string
) {
  console.log(`\n=== Generating summary for ${location.name} ===\n`)

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of ${location.name.toUpperCase()}'s situation in November 2025 based on the following real research:

${contextText}

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

  } catch (error) {
    console.error(`❌ Error generating ${location.name} summary:`, error)
    throw error
  }
}

async function main() {
  console.log('=== GENERATING REST IS POLITICS SUMMARIES FOR 4 AFRICAN COUNTRIES ===')

  // NAMIBIA CONTEXT - November 2025
  const namibiaContext = `NAMIBIA - NOVEMBER 2025 SITUATION:

ELECTION VICTORY & HISTORIC LEADERSHIP TRANSITION:
- November 2024 elections resulted in SWAPO retaining power despite worst electoral performance in history
- Netumbo Nandi-Ndaitwah became first female president with 53.4% of votes, winning 51 parliamentary seats
- Nandi-Ndaitwah was picked as successor by late President Hage Geingob before his death in February 2024
- Historic achievement: first woman elected president in Namibia
- SWAPO has ruled since independence in 1990, but facing increasing challenges

SWAPO'S DECLINING DOMINANCE:
- 2014: Geingob received over 80% of votes
- 2019: Geingob's share dropped to 56%, SWAPO lost two-thirds parliamentary majority
- 2024: 53.4% - worst performance yet, signaling growing dissatisfaction
- Electoral decline attributed to economic hardships and major corruption scandals
- The "Fishrot scandal" involving bribery allegations linked to Icelandic fishing company severely damaged party credibility

LAND REFORM REVOLUTION:
- Government discontinued "willing-buyer-willing-seller" principle in favor of expropriative policy
- Constitutional provisions allow for land expropriation
- New policy: "One Namibian, one farm" - discouraging multiple farm ownership
- Foreigners prohibited from purchasing underdeveloped residential land
- Significant shift in land redistribution approach aimed at addressing colonial-era inequalities
- Land reform remains one of most contentious political issues

ECONOMIC DIVERSIFICATION & GREEN HYDROGEN PROMISES:
- President-elect Nandi-Ndaitwah pledged to transform management of natural resources (uranium, diamonds)
- Major promises around green hydrogen development as economic game-changer
- Opposition parties skeptical: warning these may be "false hopes" if not properly managed
- Challenge: maintaining investor confidence while pursuing resource nationalism
- Need to balance promises of jobs and economic diversification with practical implementation
- Economic hardships key factor in SWAPO's declining support

CHALLENGES AHEAD (NOVEMBER 2025):
- Managing expectations: delivering on campaign promises after 32 years of SWAPO rule
- Balancing resource nationalism with need for foreign investment
- Addressing unemployment and economic inequality
- Implementing land reform without destabilizing agricultural sector
- Restoring public trust after corruption scandals
- First female president faces pressure to prove transformational leadership`

  // NIGER CONTEXT - November 2025
  const nigerContext = `NIGER - NOVEMBER 2025 SITUATION:

MILITARY GOVERNMENT & ECOWAS DEPARTURE:
- July 2023 coup: General Abdourahamane Tchiani overthrew democratically elected President Mohamed Bazoum
- January 2025: Niger officially left ECOWAS after required 1-year notice period
- Major geopolitical shift: Niger joining Burkina Faso and Mali in exiting regional bloc
- January 29, 2025: Official withdrawal from ECOWAS alongside Burkina Faso and Mali
- Alliance of Sahel States (AES) became confederation in July 2024
- Three countries now circulating new AES passports, signaling deeper integration

ALLIANCE OF SAHEL STATES MILITARY COOPERATION:
- Unified 5,000-strong military unit announced to fight jihadist insurgency
- Deepening military cooperation among three coup-led nations
- Rejection of traditional Western security partnerships
- New security architecture emerging in Sahel region
- Military junta consolidating power while facing security deterioration

URANIUM NATIONALIZATION & FRENCH WITHDRAWAL:
- June 20, 2024: Junta rescinded operating license for French nuclear firm Orano's uranium mine in Imouraren
- June 20, 2025: Niger announced plan to nationalize SOMAIR, unit of French company Orano
- Niger among world's biggest uranium exporters - top 4 provider to EU in 2022 and 2023
- Economic nationalism targeting former colonial power France
- Major implications for European energy security
- Resource sovereignty driving economic policy

JIHADIST INSURGENCY INTENSIFYING:
- Security conditions deteriorated following coup
- Withdrawal of French and U.S. troops created security vacuum
- Insurgents affiliated with Al-Qaeda and Islamic State active in border regions
- Boko Haram presence in border areas
- United States, France, and other countries previously engaged due to Islamist insurgency in Sahel
- Military junta facing challenge of fighting insurgency without Western military support
- Humanitarian concerns rising with increased violence

GEOPOLITICAL REALIGNMENT (NOVEMBER 2025):
- Breaking away from traditional Western partnerships
- Closer ties with Russia and other non-Western powers
- AES confederation represents new regional order rejecting ECOWAS and Western influence
- Implications for counterterrorism strategy in Sahel
- Regional stability concerns as democratic governance replaced by military rule
- Niger's pivot affects broader Sahel security landscape`

  // REPUBLIC OF CONGO CONTEXT - November 2025
  const republicOfCongoContext = `REPUBLIC OF CONGO - NOVEMBER 2025 SITUATION:

SASSOU-NGUESSO'S LONG RULE:
- President Denis Sassou-Nguesso reelected in March 2021
- First ruled from 1979 to 1992, returned to power in 1997, won all elections since 2002
- One of Africa's longest-serving leaders
- Authoritarian governance with restricted opposition space
- Political stability through tight control of institutions

OIL PRODUCTION EXPANSION GOALS:
- Current production: 274,000 barrels per day (bpd)
- Ambitious target: 500,000 bpd by end of 2025
- Sub-Saharan Africa's fourth-largest oil producer
- Wave of independent explorers and investments across energy value chain
- Petroleum supplanted forestry as economic mainstay
- Oil provides major share of government revenues and exports
- High dependency on oil prices creates economic vulnerability

ENERGY DIVERSIFICATION & GAS DEVELOPMENT:
- Ministry of Hydrocarbons launching Gas Master Plan
- Strategy to harness gas resources for domestic consumption and export
- Goal: boost gas utilization and diversify beyond crude oil revenues
- Phase 2 scheduled to start Q4 2025: increase exports to 4.5 billion cubic meters/year
- President Sassou-Nguesso leading energy ambitions at inaugural Congo Energy & Investment Forum (CEIF) 2025
- July 2025: Meeting with Eni CEO Claudio Descalzi on energy cooperation

INFRASTRUCTURE MEGAPROJECTS (2024-2025):
- November 2024: Government approved construction of Sounda Dam
- Sounda Dam: €2 billion price tag, 600-800 MW electricity generation capacity
- Construction to begin in 2025
- €150 million bulk cargo port project approved for Pointe-Noire Special Economic Zone (SEZ)
- Infrastructure push aimed at supporting industrial development
- Major investments in power generation to address electricity shortages

ECONOMIC OUTLOOK & CHALLENGES (2025):
- 2024 economic growth: 2.6% (modest)
- 2025 projected growth: 2.9%
- Poverty rate stalled at approximately 52% forecast for 2025
- Persistent power and fuel shortages hampering economic activity
- Oil price volatility creating fiscal pressures
- Tighter financing conditions
- Delayed oil investments
- Slow reform implementation
- Liquidity pressures affecting government operations

POLITICAL ENVIRONMENT (NOVEMBER 2025):
- Opposition restrictions continue under Sassou-Nguesso's rule
- Limited political pluralism
- Governance concerns amid infrastructure development push
- Balancing economic development with political control
- International scrutiny of democratic space and human rights`

  // SOUTH SUDAN CONTEXT - November 2025
  const southSudanContext = `SOUTH SUDAN - NOVEMBER 2025 SITUATION:

PEACE PROCESS COLLAPSE:
- 2018 peace accord has collapsed following house arrest of First Vice-President Riek Machar in March 2025
- UN warns South Sudan at "turning point" amid worsening violence and humanitarian crisis
- UN Security Council briefed on growing instability in November 2025
- Under-Secretary-General warns of need for government to recommit to peace agreement
- Window to salvage peace process closing fast according to International Crisis Group

KIIR-MACHAR CONFRONTATION ESCALATES:
- September 11, 2025: Government formally charged First Vice-President Riek Machar with murder, treason, and crimes against humanity
- Prosecution alleges Machar directed White Army militias in attacks on SSPDF garrison in Nasir, killing over 250 soldiers
- Riek Machar remains under house arrest since March 2025
- Political standoff between President Salva Kiir and Riek Machar degenerated into direct military confrontation
- Longstanding mistrust between leaders preventing unification of armed groups into national force
- Collapsing transition and militarized politics threatening all-out war

CATASTROPHIC HUMANITARIAN CRISIS (NOVEMBER 2025):
- 9.3 million people in dire need of assistance
- 7.7 million suffering from acute food insecurity
- Crisis driven by multiple factors: conflict, severe flooding, cholera outbreak, spillover from Sudan's war
- UN Commission warns protection of civilians critical to preventing all-out war
- Humanitarian access severely constrained by fighting
- Displacement continuing as violence spreads

OIL PRODUCTION COLLAPSE:
- Oil accounts for 90% of South Sudan's revenue
- Disruptions reduced daily production by approximately 68% between December 2024 and January 2025
- Devastating blow to already fragile economy
- $25 billion in oil revenue since independence, but leaders "prioritized personal enrichment" over humanitarian needs
- Economic crisis compounding humanitarian catastrophe
- Loss of oil revenue limiting government capacity to respond to crises

REGIONAL & INTERNATIONAL IMPLICATIONS (NOVEMBER 2025):
- Spillover from Sudan's war exacerbating South Sudan's instability
- Regional security concerns as violence threatens to spread
- International community pressing for renewed dialogue and end to fighting
- UN peacekeeping mission (UNMISS) struggling to protect civilians
- Risk of return to full-scale civil war
- Failed state dynamics threatening regional stability
- Revitalized peace deal unraveling completely
- Humanitarian organizations warning of impending catastrophe

OUTLOOK:
- Security Council urges government to recommit to peace agreement
- Critical need for protection of civilians and adherence to peace commitments
- Political will lacking as leaders focus on power struggle
- International patience wearing thin
- November 2025: Crisis point requiring urgent action to prevent total collapse`

  try {
    // Generate summaries sequentially for all 4 countries
    await generateCountrySummary(NAMIBIA, namibiaContext)
    await generateCountrySummary(NIGER, nigerContext)
    await generateCountrySummary(REPUBLIC_OF_CONGO, republicOfCongoContext)
    await generateCountrySummary(SOUTH_SUDAN, southSudanContext)

    console.log('\n\n=== ✅ ALL 4 COUNTRY SUMMARIES COMPLETED ===')
    console.log('Countries processed:')
    console.log('1. Namibia')
    console.log('2. Niger')
    console.log('3. Republic of Congo')
    console.log('4. South Sudan')

  } catch (error) {
    console.error('❌ Error in main process:', error)
    throw error
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
