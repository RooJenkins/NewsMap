import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const SURINAME = {
  name: 'Suriname',
  type: 'country',
  lat: 3.9193,
  lng: -56.0278,
  country: 'Suriname'
}

const TRINIDAD_AND_TOBAGO = {
  name: 'Trinidad and Tobago',
  type: 'country',
  lat: 10.6918,
  lng: -61.2225,
  country: 'Trinidad and Tobago'
}

async function generateCountrySummary(
  location: typeof SURINAME | typeof TRINIDAD_AND_TOBAGO,
  context: string
) {
  console.log(`\nGenerating comprehensive "Rest is Politics" style summary for ${location.name}...\n`)

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
  const surinameContext = `SURINAME - NOVEMBER 2025 SITUATION:

POLITICAL TRANSITION - MAY 2025 ELECTIONS:
- Parliamentary elections held May 25, 2025 resulted in opposition victory
- Center-left opposition National Democratic Party (NDP), headed by Jennifer Geerlings-Simons, won 18 seats in 51-seat National Assembly
- Incumbent President Chan Santokhi's Progressive Reform Party (VHP) won 17 seats - defeated after one term
- NDP quickly formed coalition with other parties, securing 34 seats total (two-thirds supermajority)
- Jennifer Geerlings-Simons became Suriname's first female president in November 2025
- Marks significant political transition after Santokhi's administration focused on economic reforms and austerity measures
- Election campaigns centered on management of upcoming oil wealth and economic recovery

SANTOKHI'S LEGACY AND ECONOMIC REFORMS (2020-2025):
- Inherited economic crisis with roots in corruption, poor policy and ballooning public debt from 10-year rule of predecessor Dési Bouterse
- Negotiated $688 million loan deal with International Monetary Fund
- Implemented painful economic reforms: eliminating subsidies for electricity, natural gas and fuels
- Reforms magnified domestic inflation and triggered massive spike in cost of living
- Created political backlash that contributed to election defeat
- However, by January 2025 IMF noted: authorities' commitment to policy reforms strengthening macroeconomic stability
- Economy growing, inflation receding, donor support increasing, public debt declining
- International bond spreads at historical lows
- Real GDP growth expected to be 3.2 percent in 2025

OIL DISCOVERIES AND COMING BOOM:
- Final investment decision announced October 2024 for GranMorgu offshore field (Block 58)
- TotalEnergies and partners plan to invest approximately $10.5 billion between 2025 and 2028
- Estimated capacity: 220,000 barrels per day
- Oil production expected to begin 2028
- Represents transformational economic opportunity for small nation of ~600,000 people
- Government created "Royalties for Everyone" fund to put money from oil windfall directly into citizens' hands once production starts
- Elections fought over who would best manage this coming oil wealth
- New Geerlings-Simons government inherits both opportunity and responsibility

CHINESE INVESTMENT AND GEOPOLITICAL POSITIONING:
- In recent years, Suriname looked increasingly toward China as political ally and trading partner
- 2019: Became one of first Latin American countries to join China's Belt and Road infrastructure drive
- Former President Bouterse's National Democratic Party historically favored economically populist policies
- NDP's foreign policy orientation traditionally more pro-China
- With NDP now in power under Geerlings-Simons, potential shifts in foreign policy orientation expected
- Geopolitical positioning critical as country prepares for oil wealth
- Balance between China, Netherlands (former colonial power), United States, and regional partners

DUTCH COLONIAL LEGACY:
- Suriname gained independence from Netherlands in 1975
- Dutch colonial legacy still shapes politics, economy, society
- Significant Surinamese diaspora in Netherlands
- Complex post-colonial relationship continues to influence development
- Language, institutions, cultural ties remain strong
- Economic and political orientation still partially influenced by Dutch connections

CURRENT CHALLENGES (NOVEMBER 2025):
- New Geerlings-Simons government facing critical transition period
- Must balance economic reforms with public expectations
- Managing transition from austerity to potential oil prosperity
- Preventing "resource curse" - corruption, inequality often accompanying oil wealth
- Maintaining macroeconomic stability while preparing for oil revenues
- Foreign policy balancing act: China, Western powers, regional integration
- Infrastructure development needed to support oil industry and broader economy
- Ensuring oil wealth benefits all citizens through "Royalties for Everyone" and other mechanisms`

  const trinidadContext = `TRINIDAD AND TOBAGO - NOVEMBER 2025 SITUATION:

POLITICAL LEADERSHIP TRANSITION:
- Prime Minister Keith Rowley stepped down before end of term in August 2025 after 45 years in public office
- Stuart Young, former Minister of Energy and Acting Attorney General, selected to succeed Rowley
- Young assumed leadership of ruling People's National Movement (PNM)
- Rowley's resignation introduced new dynamics into political landscape
- New leadership facing immediate crises: unprecedented crime wave, economic challenges
- General elections approaching with PNM under new leadership
- Opposition United National Congress (UNC) positioning for potential victory

UNPRECEDENTED CRIME CRISIS:
- 623 murders recorded in 2024 - HIGHEST IN HISTORY
- Staggering rate: 45.7 murders per 100,000 population (among highest globally)
- 42 percent of homicides linked to gang-related activity
- Government declared three-month national state of emergency effective December 30, 2024 through March 30, 2025
- Parliament EXTENDED state of emergency by three months in January 2025
- Police received intelligence on imminent gang war
- PM Rowley stated measure was "saving lives and preventing mass killings with high-powered rifles"
- Expanded powers for security forces: detain suspects and conduct property searches without warrants
- State of emergency continues into November 2025 - extraordinary measure becoming normalized
- Organized crime and gang violence tied to Trinidad and Tobago's location as transshipment point in hemispheric drug trade
- Broader socioeconomic conditions: unemployment, inequality, lack of opportunities fueling violence

ENERGY SECTOR COLLAPSE:
- Energy sector contracted by 5.4 percent in recent years
- Represents "glaring indictment of administration's lack of foresight"
- Economy trapped in cycle of dependency on dwindling energy revenues
- Trinidad and Tobago historically major natural gas and oil producer in Caribbean
- Aging infrastructure, declining reserves, lack of new investment
- No clear strategy to revitalize energy sector or attract new exploration
- Energy revenues historically funded government spending and social programs
- Decline creating fiscal crisis and forcing difficult budget decisions

ECONOMIC DIVERSIFICATION FAILURES:
- Promises of diversification, innovation, and structural reform remained UNFULFILLED
- Trinidad and Tobago "ill-prepared for challenges of global economy"
- Unemployment rising as energy sector contracts
- FOREIGN EXCHANGE SHORTAGES crippling businesses
- Government failure to provide stable foreign exchange system
- Businesses struggling to access US dollars for critical imports
- Poor infrastructure hampering economic development
- No coherent diversification strategy despite decades of talk
- Economy remains dangerously dependent on energy sector

KEY CONCERNS HEADING INTO 2025 ELECTIONS:
- Crime & Public Safety: 68% of voters (top issue)
- Economic Decline: 59% of voters
- Foreign Exchange Shortages: 52% of voters
- Energy Sector Crisis: 45% of voters
- Elections coming amid economic instability, rising crime, leadership transitions within PNM
- Public frustration with government's handling of multiple crises
- State of emergency controversial - some see as necessary, others as political tool

STUART YOUNG'S CHALLENGE (NOVEMBER 2025):
- Inherited multiple simultaneous crises
- Must address crime crisis while respecting civil liberties
- Revitalize energy sector and attract investment
- Solve foreign exchange crisis affecting businesses and consumers
- Deliver economic diversification after decades of failure
- Win public confidence ahead of general elections
- Navigate complex relationship with opposition and civil society
- Balance security measures with democratic governance

REGIONAL AND INTERNATIONAL CONTEXT:
- Trinidad and Tobago is wealthiest nation in Caribbean per capita (historically)
- Crime crisis threatens investment, tourism, quality of life
- Energy sector decline affects regional gas supplies to Caribbean neighbors
- Strategic location near Venezuela creates geopolitical considerations
- US-Caribbean relations, drug interdiction cooperation
- Potential for Trinidad and Tobago to become cautionary tale or turnaround story
- Regional partners watching closely as challenges mirror broader Caribbean issues`

  try {
    // Generate summary for Suriname
    await generateCountrySummary(SURINAME, surinameContext)

    // Small delay between API calls
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate summary for Trinidad and Tobago
    await generateCountrySummary(TRINIDAD_AND_TOBAGO, trinidadContext)

    console.log('\n\n🎉 Successfully generated and saved summaries for both countries!')

  } catch (error) {
    console.error('❌ Error in main process:', error)
    throw error
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
