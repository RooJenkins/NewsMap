import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Country location definitions
const CHAD = {
  name: 'Chad',
  type: 'country',
  lat: 15.4542,
  lng: 18.7322,
  country: 'Chad'
}

const IVORY_COAST = {
  name: 'Ivory Coast',
  type: 'country',
  lat: 7.5400,
  lng: -5.5471,
  country: 'Ivory Coast'
}

const MALI = {
  name: 'Mali',
  type: 'country',
  lat: 17.5707,
  lng: -3.9962,
  country: 'Mali'
}

const MAURITANIA = {
  name: 'Mauritania',
  type: 'country',
  lat: 21.0079,
  lng: -10.9408,
  country: 'Mauritania'
}

// Comprehensive November 2025 contexts for each country
const CHAD_CONTEXT = `CHAD - NOVEMBER 2025 SITUATION:

PARLIAMENTARY ELECTIONS & POWER CONSOLIDATION:
- Parliamentary elections held late December 2024, final results released January 21, 2025
- Ruling Movement Patriotique du Salut (MPS) party won 124 seats out of 188 total seats
- Marks end of four-year transition period following Idriss Déby's death in March 2021
- Mahamat Déby now wields absolute parliamentary control - no effective opposition
- Déby elected to presidency in May 2024 after serving as interim president since October 2022
- Continues his father's pattern of rule without meaningful parliamentary oversight
- Appointed members of transitional parliament by presidential decree since 2021
- Successfully suppressed public opposition while co-opting important critics

SECURITY THREATS & REBEL MOVEMENTS:
- Early January 2025: Unidentified young people reportedly attacked presidency
- Possibility of renewed attacks by dissidents cannot be ruled out
- Front for Change and Concord in Chad (FACT) remains active threat from Libya
- Northern border vulnerable to attacks from Libya-based rebel groups since 2016
- Libya-based insurgents waging ongoing war to overthrow government
- Security situation deteriorated since fall of Muammar Gaddafi in Libya (2011)
- Multiple armed groups operating across porous northern border region

OIL REVENUE & ECONOMIC DIVERSIFICATION:
- Oil revenues (flowing since 2003) enabled rapid security force expansion
- Revenues used to counteract domestic and regional security challenges
- Chad presents itself as reliable, powerful partner for foreign patrons
- Potential path: leverage oil revenues for economic diversification
- Focus areas: mechanization of agriculture and livestock sectors
- Value chain development and improved pricing mechanisms needed
- Economic diversification prospects endangered by current political crisis
- Dependence on oil revenues limits economic resilience

DYNASTIC TRANSITION & GOVERNANCE:
- Military junta seized state to preserve neopatrimonial gatekeeper system
- Mahamat Déby managing consolidation of dynastic rule
- Parliamentary elections described as handing Déby "absolute control"
- Democratic backsliding accelerating under new regime
- International concerns about authoritarian consolidation
- Limited space for civil society and independent media`

const IVORY_COAST_CONTEXT = `IVORY COAST (CÔTE D'IVOIRE) - NOVEMBER 2025 SITUATION:

2025 PRESIDENTIAL ELECTION RESULTS:
- October 25, 2025: Presidential election held with controversial candidate exclusions
- President Alassane Ouattara (83 years old) won fourth term decisively
- Official results: 89.77% to 91% of votes cast (sources vary slightly)
- Nearly 9 million Ivorians eligible to vote in restricted race
- Build-up marred by protests against exclusion of major opposition candidates
- Several hundred people arrested, dozens jailed during pre-election period
- International observers noted concerns about democratic fairness

SUCCESSION CRISIS & RULING PARTY DIVISIONS:
- No clear successor identified despite Ouattara's age (83)
- Ouattara vowed to facilitate "passing of the torch" to new generation
- Ruling party riven with internal divisions over succession
- Former Prime Minister Patrick Achi seen as potential successor
- Vice-President Tiémoko Meyliet Koné also positioned as possible heir
- Power struggle brewing within ruling coalition
- Uncertainty threatens political stability beyond Ouattara era

OPPOSITION EXCLUSIONS & DEMOCRATIC CONCERNS:
- Ex-President Laurent Gbagbo barred from running due to criminal conviction
- Former Credit Suisse CEO Tidjane Thiam disqualified for acquiring French citizenship
- Top rivals systematically excluded from electoral process
- Election described as "missed opportunity for real democratic choice"
- Opposition fragmented and weakened by legal barriers
- Questions about legitimacy of democratic process
- International criticism of electoral restrictions

ECONOMIC PERFORMANCE & INEQUALITY:
- Ouattara overseen economic reconstruction since civil war
- Annual growth rate: 6% backed by cocoa boom
- Côte d'Ivoire remains world's largest cocoa producer
- However: 37.5% of 30 million population still lives in poverty
- Youth unemployment remains critically high
- Jobs scarce for young people despite overall growth
- Economic growth has not translated to broad-based prosperity
- Inequality gap widening between urban elites and rural poor

REGIONAL INSTABILITY CONCERNS:
- Sahel security crisis spreading southward toward Ivorian borders
- Burkina Faso instability creating refugee pressures
- Regional terrorism threats increasing
- Economic growth vulnerable to regional conflicts
- Questions about whether strong economic performance can be sustained
- Balancing act: maintaining stability amid regional chaos`

const MALI_CONTEXT = `MALI - NOVEMBER 2025 SITUATION:

COUNTRY ON THE BRINK OF COLLAPSE:
- November 2025: Mali stands on brink of total collapse
- Al-Qaeda Sahelian branch (JNIM - Jama'at Nusrat ul-Islam wa al-Muslimin) attacking fuel supplies
- Jihadists burning fuel trucks, choking off capital Bamako's fuel supply
- Multiple Western countries (USA, Australia, Italy, Germany) advised citizens to leave immediately
- Capital city increasingly vulnerable and isolated
- JNIM exerts more territorial control than any time in 13-year insurgency
- First half of 2025: JNIM carried out 280 attacks (double previous year's rate)
- Concerns about "domino effect" if Mali falls - threatening Burkina Faso and Niger

ASSIMI GOÏTA'S AUTHORITARIAN CONSOLIDATION:
- Colonel Assimi Goïta seized power in back-to-back coups (2020 and 2021)
- Promised "refoundation" of sovereign and secure Mali
- Serving as President since 2025 (previously military leader)
- Indefinitely postponed elections scheduled for 2024
- May 2025: Dissolved all political parties by decree
- July 2025: National Transitional Council allowed Goïta 5-year term
- Term renewable "as many times as necessary" - effectively unlimited
- Democratic transition completely abandoned
- Authoritarian rule entrenched with no end date

WAGNER GROUP & RUSSIA'S FAILED PARTNERSHIP:
- Goïta cut military ties with France, allied with Russia and Wagner Group
- Initially optimistic about Russian mercenaries suppressing jihadist insurgencies
- Partnership produced "disastrous outcomes" instead
- Around 2,000 Russian mercenaries operating in Mali as of 2025
- Mix of Africa Corps (restructured in June) and remnants of Wagner Group
- After 3+ years, security in Mali has dramatically deteriorated
- Russian mercenaries failed to make meaningful gains against insurgents
- Partnership discredited but Malian junta continues cooperation

FRENCH WITHDRAWAL & SECURITY VACUUM:
- France withdrew military forces from Mali in 2022
- From 2020 onwards, French influence gradually weakened
- French counterterrorism operations (Operation Barkhane) ended
- European forces withdrew as Mali turned to Russia
- Security vacuum filled by jihadist groups, not government forces
- Mali's security situation worse now than before French withdrawal
- Questions about effectiveness of any external military intervention

THE FEUDALIZATION OF MALI:
- Central government losing control over vast territories
- Local militias and armed groups filling power vacuum
- Jihadist groups establishing parallel governance structures
- Mali fragmenting into competing zones of control
- Junta has "no one left to blame but itself" for deteriorating situation
- Years of mismanagement and broken promises
- Country unraveling after years of incremental decline`

const MAURITANIA_CONTEXT = `MAURITANIA - NOVEMBER 2025 SITUATION:

NATIONAL DIALOGUE INITIATIVE (NOVEMBER 2024-2025):
- November 27, 2024: President Mohamed Ould Ghazouani called for national political dialogue
- Goal: strengthen social cohesion and consolidate democracy
- Fulfilled electoral promise and key commitment from second term
- Ongoing throughout 2025 but facing significant skepticism
- Five previous dialogues (2004, 2005, 2007, 2017, 2018) all failed
- Without meaningful change, dialogue risks deepening divisions
- Could threaten stability rather than strengthen it
- Test of Ghazouani's commitment to genuine democratic reform

PERSISTENT SLAVERY LEGACY:
- Around 149,000 people remain in modern slavery (2023 Global Slavery Index)
- Country population: less than 5 million total
- Slavery rate among highest in world relative to population
- Government dialogue aims to address but history suggests limited action
- Fundamental social divisions along ethnic and caste lines
- Haratine (former slave caste) still facing discrimination
- Legal abolition not translating to effective enforcement
- International pressure mounting for concrete action

HUMANITARIAN LIABILITIES & HISTORICAL ABUSES:
- Government abuses against black Mauritanian civil servants and soldiers (1986-1991)
- Hundreds expelled or killed during "Black Mauritanian Massacre"
- Unresolved grievances from ethnic violence decades ago
- Limited accountability or justice for historical crimes
- Dialogue aims to address but victims remain skeptical
- Ethnic tensions between Arab-Berber and Black African communities persist
- Poor governance and corruption compound historical grievances

SAHEL REFUGEE CRISIS & REGIONAL SECURITY:
- Escalating violence in Sahel region poses significant security threat
- Instability in Mali, Burkina Faso creating refugee flows into Mauritania
- Extremist groups operating in neighboring countries
- Risk of cross-border attacks from jihadist organizations
- Transnational criminal networks exploiting porous borders
- Illicit weapons proliferation from regional conflicts
- Mauritania trying to maintain stability while neighbors collapse
- Security forces stretched monitoring southern borders

GOVERNANCE CHALLENGES:
- Fundamental problems: poor governance and corruption
- Electoral dysfunction and limited political competition
- Social divisions undermining national cohesion
- Questions about Ghazouani's genuine commitment to reform
- Risk of dialogue becoming empty political theater
- International community watching for concrete reforms
- Balance between stability and democratic progress
- Relatively stable compared to neighbors but facing mounting pressures`

async function generateCountrySummary(
  location: typeof CHAD,
  context: string
): Promise<void> {
  console.log(`\n========================================`)
  console.log(`Generating summary for ${location.name}...`)
  console.log(`========================================\n`)

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of ${location.name.toUpperCase()}'s situation in November 2025 based on the following real research:

${context}

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

    console.log('\n=== GENERATED SUMMARY ===\n')
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

async function generateAllSummaries() {
  console.log('\n🚀 Starting generation of summaries for 4 countries...\n')
  console.log('Countries: Chad, Ivory Coast, Mali, Mauritania\n')

  try {
    // Generate summaries sequentially to avoid rate limits
    await generateCountrySummary(CHAD, CHAD_CONTEXT)
    await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay

    await generateCountrySummary(IVORY_COAST, IVORY_COAST_CONTEXT)
    await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay

    await generateCountrySummary(MALI, MALI_CONTEXT)
    await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay

    await generateCountrySummary(MAURITANIA, MAURITANIA_CONTEXT)

    console.log('\n\n========================================')
    console.log('✅ ALL SUMMARIES GENERATED SUCCESSFULLY!')
    console.log('========================================\n')
    console.log('Countries processed:')
    console.log('  ✓ Chad')
    console.log('  ✓ Ivory Coast')
    console.log('  ✓ Mali')
    console.log('  ✓ Mauritania')
    console.log('\nAll summaries saved to locationSummary table.\n')

  } catch (error) {
    console.error('\n❌ Error during summary generation:', error)
    throw error
  }
}

generateAllSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
