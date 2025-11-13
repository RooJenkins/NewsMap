import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const COUNTRIES = {
  BARBADOS: {
    name: 'Barbados',
    type: 'country',
    lat: 13.1939,
    lng: -59.5432,
    country: 'Barbados'
  },
  BELIZE: {
    name: 'Belize',
    type: 'country',
    lat: 17.1899,
    lng: -88.4976,
    country: 'Belize'
  },
  GUYANA: {
    name: 'Guyana',
    type: 'country',
    lat: 4.8604,
    lng: -58.9302,
    country: 'Guyana'
  },
  JAMAICA: {
    name: 'Jamaica',
    type: 'country',
    lat: 18.1096,
    lng: -77.2975,
    country: 'Jamaica'
  }
}

async function generateCountrySummary(
  countryData: typeof COUNTRIES.BARBADOS,
  contextData: string,
  countryName: string
) {
  console.log(`\n=== Generating summary for ${countryName} ===\n`)

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of ${countryName.toUpperCase()}'s situation in November 2025 based on the following real research:

${contextData}

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

Generate the ${countryName} summary now:`

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

    // Extract issues from the summary
    const issueMatches = summaryText.match(/\*\*The Big Issue \d: (.+?)\*\*/g) || []
    const issues = issueMatches.map(match => match.replace(/\*\*The Big Issue \d: /, '').replace(/\*\*/, ''))

    if (summaryText.includes('**The International Angle**')) {
      issues.push('International Implications')
    }

    console.log('\nExtracted Issues:', issues)

    // Save to database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: countryData.name,
          type: countryData.type,
          category: 'all'
        }
      },
      create: {
        name: countryData.name,
        type: countryData.type,
        country: countryData.country,
        lat: countryData.lat,
        lng: countryData.lng,
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

    console.log(`\n✅ ${countryName} summary saved to database!\n`)

  } catch (error) {
    console.error(`❌ Error generating ${countryName} summary:`, error)
    throw error
  }
}

async function generateAllSummaries() {
  const barbadosContext = `BARBADOS - NOVEMBER 2025 SITUATION:

POLITICAL LEADERSHIP:
- Prime Minister: Mia Amor Mottley (Barbados Labour Party - BLP)
- Sworn in as PM on January 20, 2022 after BLP won second consecutive clean sweep in General Elections
- First Prime Minister under Barbados' republican system
- 8th Prime Minister of Barbados overall
- First woman to hold the position
- Led Barbados' historic transition from constitutional monarchy to republic in November 2021

REGIONAL LEADERSHIP:
- Chaired CARICOM (Caribbean Community) from January to June 2025
- CARICOM is 15-member regional trade bloc headquartered in Georgetown, Guyana
- Previously chaired CARICOM in 2020 as well
- Gives Barbados outsized influence in Caribbean regional politics

CLIMATE LEADERSHIP & COP30 (NOVEMBER 2025):
- Major global spotlight in lead-up to COP30 in Brazil (November 2025)
- Mottley positioned as key climate voice as Trump administration likely to boycott COP30
- Climate becoming back-burner issue in US and elsewhere - Mottley pushing opposite direction
- Spearheaded plans to reform global climate adaptation finance
- Champion of "Bridgetown Initiative" - proposal to reform international financial architecture
- Advocate for vulnerable states facing climate change impacts
- However, domestic contradictions exist: Barbados heavily reliant on imported fossil fuels
- Rising fuel bill conflicts with climate rhetoric - struggled to advance renewable energy materially

ECONOMIC SITUATION (2025):
- Issued $500 million bond in July 2025 to invest in social services
- Shows continued economic activity and international market access
- Economy traditionally dependent on tourism (historically 26% of GDP in peak years)
- Mottley working to diversify: focus on creative industries, fintech, digital education
- Tourism sector recovering post-pandemic

REPUBLICAN TRANSITION AFTERMATH:
- Successfully transitioned to republic November 30, 2021 (removed Queen Elizabeth II as head of state)
- Sandra Mason became first President of Barbados
- Constitutional reforms introduced by Mottley government
- Barbados now fully independent republic while remaining in Commonwealth
- Historic achievement separating from British colonial legacy

INTERNATIONAL PROFILE:
- Mottley has extraordinary international profile for leader of nation of 280,000 people
- Frequent speaker at UN, climate conferences, international forums
- Strong relationships with international financial institutions
- Advocate for small island developing states (SIDS)
- Called "exceptional woman in 2025" by Caribbean media
- However, some critics argue gap between progressive international image and domestic policies

CHALLENGES:
- Balancing climate leadership rhetoric with fossil fuel dependency
- Economic diversification from tourism dependency
- Managing expectations from international climate finance advocacy
- Domestic renewable energy rollout slower than international commitments suggest`

  const belizeContext = `BELIZE - NOVEMBER 2025 SITUATION:

POLITICAL LEADERSHIP:
- Prime Minister: Johnny Briceño (People's United Party - PUP)
- Full name: Elijio Constantino "Johnny" Briceño Jr.
- In office since November 2020 after defeating UDP
- Leading nation of approximately 400,000 people

GUATEMALA TERRITORIAL DISPUTE - NOVEMBER 2025 ICJ HEARING:
- Major development: ICJ (International Court of Justice) scheduled oral hearings November 24, 2025
- Hearing focuses on whether Guatemala can formally intervene in Belize-Honduras territorial case
- Case involves Sapodilla Cayes - disputed maritime territory
- Main Guatemala-Belize territorial dispute at ICJ: both countries submitted final written arguments by June 2023
- Oral arguments for main case not yet scheduled as of November 2025
- Guatemala claims approximately half of Belize's territory based on colonial-era claims
- Dispute intensified after Belize gained independence in 1981
- Both countries held referendums in 2018-2019 agreeing to submit dispute to ICJ

BORDER SECURITY & CRIMINAL ACTIVITY:
- One-kilometer "adjacency zone" along Guatemala-Belize border where neither can station military forces
- This governance vacuum enables criminal economies:
  * Drug trafficking (cocaine transshipment from South America)
  * Illegal logging of mahogany and other valuable hardwoods
  * Illegal fishing in protected marine areas
  * Wildlife trafficking (parrots, jaguars, other endangered species)
  * People smuggling and irregular migration
  * "Eco-trafficking" - illegal exploitation of natural resources
- Higher crime rates in border areas due to lack of enforcement
- Neither country wants to appear aggressive given pending ICJ case
- Criminal organizations exploit this legal limbo

ECO-TOURISM GROWTH:
- Belize positioning itself as eco-tourism destination
- Home to Belize Barrier Reef (UNESCO World Heritage Site) - second largest in world
- Extensive protected areas: marine reserves, rainforest preserves, Mayan archaeological sites
- Tourism increasingly important to economy
- Tension between eco-tourism branding and illegal environmental crime at borders
- Government promoting sustainable tourism while struggling with border enforcement

ECONOMY:
- Tourism-dependent economy
- Agriculture: sugar, bananas, citrus exports
- Offshore financial services sector
- Small population (400,000) means limited economic base
- Revenue challenges from territorial insecurity
- Investment uncertain due to Guatemala dispute

REGIONAL POSITION:
- Only English-speaking country in Central America
- Member of CARICOM (Caribbean Community) and Central American Integration System
- Unique position bridging Caribbean and Central American regions
- Close ties with UK due to colonial history (former British Honduras)
- Dependent on international support for territorial integrity`

  const guyanaContext = `GUYANA - NOVEMBER 2025 SITUATION:

POLITICAL LEADERSHIP - SEPTEMBER 2025 ELECTION:
- President: Irfaan Ali (People's Progressive Party/Civic - PPP/C)
- Re-elected for second term in September 2025
- PPP/C won 55% of 65-seat parliament in September 1, 2025 elections
- Victory margin: 32 percentage points over opposition
- Secured mandate to manage Guyana's unprecedented oil wealth
- Elections held amid oil boom debate and Venezuela tensions
- International observers deemed elections credible

MASSIVE OIL BOOM - ECONOMIC TRANSFORMATION:
- Largest oil reserves per capita in world
- ExxonMobil started pumping offshore oil in late 2019
- $7.5 billion windfall from oil sales and royalties since 2019
- Current production: 650,000 barrels per day
- Target: 1 million barrels per day by 2030
- State budget quadrupled in 5 years - from ~$1.7bn to $6.7bn in 2025
- GDP growth: Staggering 43.6% in 2024 (world-beating)
- Guyana becoming one of fastest-growing economies globally
- Oil expected to generate over $150 billion in revenue over next 20 years

PARADOX OF PROSPERITY:
- More than half population still lives in poverty despite soaring GDP
- Wealth distribution highly unequal
- Infrastructure development lagging behind oil revenue growth
- Corruption concerns over resource management
- "Dutch disease" risk - oil wealth overshadowing other economic sectors
- Massive development projects announced but implementation challenges

VENEZUELA TERRITORIAL CRISIS - ESSEQUIBO REGION:
- Venezuela claims Essequibo region - approximately 2/3 of Guyana's territory
- Dispute intensified dramatically after 2015 oil discoveries in contested waters
- Escalating threats in recent months (2025):
  * Venezuelan military movements near border
  * Shots fired at Guyanese security personnel transporting election materials
  * Venezuela accused of attempting to intimidate voters in Essequibo
  * Venezuelan President Nicolás Maduro making increasingly aggressive statements
- ICJ ruling in favor of Guyana's sovereignty, but Venezuela refuses to recognize
- Existential threat to Guyana despite oil wealth

US MILITARY INVOLVEMENT (2025):
- United States significantly increased military presence in Caribbean
- F-35 stealth fighters deployed to Guyana and Puerto Rico
- US warships conducting "anti-drug operations" in Caribbean waters
- Clear signal of US support for Guyana against Venezuelan threats
- Strategic importance: protecting oil interests and countering Venezuelan/Russian influence
- Ali government has strong US backing
- Military cooperation agreements expanded

REGIONAL DYNAMICS:
- CARICOM (Caribbean Community) headquarters in Georgetown
- Guyana seeking to position itself as regional economic powerhouse
- Tensions with Suriname over maritime boundary (resolved peacefully in 2007)
- Trinidad and Tobago involved in Caribbean energy sector
- Brazil supportive of Guyana (shares border, opposes Venezuelan expansionism)

NOVEMBER 2025 SITUATION:
- Two months post-election, Ali consolidating second term
- Budget planning for 2026 with massive oil revenues
- Venezuela tensions remain high - daily concern
- US military presence ongoing
- Infrastructure projects ramping up
- Poverty reduction programs announced but implementation slow
- International attention focused on how Guyana manages oil wealth`

  const jamaicaContext = `JAMAICA - NOVEMBER 2025 SITUATION:

POLITICAL LEADERSHIP:
- Prime Minister: Andrew Michael Holness (Jamaica Labour Party - JLP)
- In third term as Prime Minister
- Most recent election: 2025 (exact date not specified, but returned to power)
- Previously served 2016-2020, 2020-2025
- Youngest PM in Jamaica's history when first appointed (2011)
- Population: approximately 2.8 million

HISTORIC CRIME REDUCTION (2025):
- Jamaica poised to achieve historic milestone: murder rate projected to fall below 1,000 for first time in decades
- Murders declined 19% in 2024
- Murders declined 27% in early 2025 compared to same period in 2024
- Overall: 43% drop in killings in 2025 compared to previous year - most significant decline in decades
- Holness: crime reduction strategy not only about public safety but reducing cost of living and unlocking economic opportunity
- Government affirms commitment to "removing crime as a barrier to growth"
- States of Emergency (SOEs) used controversially in high-crime areas
- Enhanced security measures and community policing initiatives

ECONOMIC GROWTH (2025):
- Economic fundamentals strengthening under Holness administration
- Debt servicing dropped from 33% (2014-2015) to 18% (2025)
- Debt-to-GDP set to decline to 68% - lowest since 1970s
- World Bank expects economy to grow 1.7% in 2025
- Economic growth driving infrastructure upgrades, crime reduction, disaster resilience
- Investments in public services increasing
- Eight years of progress highlighted by administration
- Low inflation environment
- Macroeconomic stability maintained

INEQUALITY & POVERTY CHALLENGES:
- Despite economic progress, nearly 19% of Jamaicans live below poverty line
- Opposition argues many Jamaicans still feel "pinch" of socioeconomic challenges
- Inadequate infrastructure in some areas
- Corruption concerns remain
- Gap between GDP growth and lived experience of many citizens
- Vision 2030 goals: addressing disparities essential for achieving targets
- Cost of living remains concern despite economic indicators
- Youth unemployment still elevated

CANNABIS INDUSTRY DEVELOPMENT:
- Cannabis Licensing Authority (CLA) established 2015 under Dangerous Drug Amendment Act
- As of December 31, 2024: 166 licenses issued
- 18 applications at license granted stage, 36 at conditional approval stage
- Cannabis technically still illegal, but small amounts decriminalized (petty offense) as of 2015
- Medical cannabis legalized 2015
- Market size: Revenue expected to reach $44.38 million USD by 2025
- Forecast: 2.93% annual growth, reaching $49.82 million by 2029
- Export breakthrough: Jamaica now legal exporter of pharmaceutical-grade THC
- Pure Jamaican and Seven-10 Pharmaceuticals exporting to US, Brazil, other major markets
- DEA permits granted for THC exports to United States
- Government priority: cannabis industry growth for medicinal purposes, particularly value-added exports
- Trend: increasing popularity of medical cannabis products
- However, industry facing delays in regulatory framework for large-scale medical marijuana exports
- Small farmers struggling to access licensing due to costs and requirements

DIASPORA RELATIONS:
- Large Jamaican diaspora in US, UK, Canada (over 3 million diaspora vs 2.8 million in Jamaica)
- Remittances critical to economy
- Government seeking to leverage diaspora for investment and development
- Diaspora Conferences held to strengthen ties

POLITICAL ENVIRONMENT (NOVEMBER 2025):
- Holness recently returned to power amid crime reduction success
- Opposition People's National Party (PNP) challenges government on inequality issues
- Political debate over whether economic growth benefiting average Jamaicans
- Election mandated focus: crime, economy, social services
- Holness emphasizing "bold strategies to drive Jamaica's further economic growth"

CHALLENGES AHEAD (2025):
- Sustaining crime reduction momentum
- Translating macroeconomic gains into poverty reduction
- Building out cannabis industry infrastructure while protecting small farmers
- Climate resilience (hurricane vulnerability)
- Education system improvements needed
- Healthcare system under pressure
- Balancing fiscal discipline with social spending demands`

  // Generate summaries for all countries sequentially
  await generateCountrySummary(COUNTRIES.BARBADOS, barbadosContext, 'Barbados')
  await generateCountrySummary(COUNTRIES.BELIZE, belizeContext, 'Belize')
  await generateCountrySummary(COUNTRIES.GUYANA, guyanaContext, 'Guyana')
  await generateCountrySummary(COUNTRIES.JAMAICA, jamaicaContext, 'Jamaica')

  console.log('\n✅ All 4 Caribbean country summaries generated and saved successfully!')
}

generateAllSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
