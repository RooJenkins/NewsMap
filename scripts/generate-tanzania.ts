import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TANZANIA_SUMMARY = `# Tanzania

President Samia Suluhu Hassan has won a second term with 97.66 percent of the vote in elections that international observers and opposition groups decry as neither free nor fair—a coronation rather than a contest that has triggered deadly unrest and exposed the tension between Tanzania's economic ambitions and its authoritarian trajectory.

## Major Issues

### 1. Disputed Elections and Deadly Crackdown
**What's happening:**
- Hassan declared winner with 97.66% on October 29, 2025, after main opposition leaders were barred from running or jailed for months
- Opposition leader Tundu Lissu of Chadema party charged with treason for calling for electoral reforms
- Another candidate, Luhaga Mpina of ACT-Wazalendo, barred from ballot
- Chadema reports up to 1,000 people killed by police and unidentified security forces in eight of Tanzania's 31 regions
- Violent protests erupted in Dar es Salaam and Mwanza, with demonstrators setting buses and police posts on fire

**Why it matters:**
- Marks significant backsliding from brief democratic opening under Hassan's early presidency
- Hassan assumed power in 2021 after predecessor John Magufuli's death, initially signaling reforms
- Violent suppression of dissent risks destabilizing East Africa's second-largest economy
- International legitimacy and foreign investment increasingly at stake as democratic credentials erode
- Sets precedent for authoritarian consolidation across region

**Prospects:**
- Opposition now fragmented and leaderless, facing years in political wilderness
- Civil society crackdown likely to intensify as Hassan consolidates power
- Regional and international pressure minimal—neighbors prioritize stability over democracy
- Economic growth may continue short-term but political risk premium rising
- Youth unemployment and frustration create potential for sustained unrest

### 2. Economic Growth vs. Political Instability
**What's happening:**
- Tanzania maintains 6% projected GDP growth for 2025, driven by agriculture, mining, and tourism
- Hassan credited with completing mega infrastructure projects: roads, railways, power generation
- Port of Dar es Salaam shut down during November protests, with workers ordered to stay home
- Shipping lines redirected vessels to Kenya's Port of Mombasa as protests disrupted trade
- Government imposed internet blockade during election period, further disrupting commerce

**Why it matters:**
- Tanzania is one of Africa's fastest-growing economies and critical East African trade hub
- Political instability threatens to undermine decade of strong economic performance
- Port shutdown demonstrates how political crisis can cascade into regional economic disruption
- Foreign investors increasingly nervous about authoritarian unpredictability and protest risk
- Tourism sector (key foreign exchange earner) vulnerable to travel advisories and unrest

**Prospects:**
- Short-term: Infrastructure momentum continues but protest disruptions recurring
- Medium-term: Authoritarian governance may deter Western investment and development aid
- China likely to fill vacuum as strategic partner less concerned with democratic backsliding
- If unrest persists, Tanzania risks losing competitive advantage to more stable neighbors
- Economic growth model increasingly dependent on regime stability rather than institutional strength

### 3. Regional Role and Trade Disruptions
**What's happening:**
- November protests and internet shutdown severely disrupted East African Community trade flows
- Kenya sounded alarm as Tanzania unrest hit regional supply chains and port operations
- Tanzania serves as critical transit corridor for landlocked neighbors: Burundi, Rwanda, Uganda, DRC
- Regional integration efforts (EAC common market) undermined by political instability
- Tanzania's Port of Dar es Salaam handles significant cargo for entire East and Central Africa region

**Why it matters:**
- Tanzania is linchpin of East African trade infrastructure—its instability reverberates regionally
- Landlocked neighbors economically vulnerable to Tanzanian political shocks
- Regional blocs (EAC, SADC) face dilemma: condemn democratic backsliding or prioritize stability
- Kenya positioning itself as more reliable alternative hub, potentially shifting regional trade patterns
- Long-term competitiveness of regional integration projects at stake

**Prospects:**
- Neighbors will pressure Tanzania to stabilize quickly but avoid meaningful democratic demands
- Kenya gains strategically if businesses and trade routes diversify away from Tanzania
- Regional integration agenda stalls as political risk trumps economic cooperation
- Tanzania may face quiet isolation within regional bodies without explicit condemnation
- Economic interdependence gives Hassan leverage—neighbors need Tanzania stable more than democratic

## Summary

Tanzania's November 2025 elections have crystallized a stark contradiction: economic ambition colliding with authoritarian consolidation. Hassan's overwhelming "victory" has delivered short-term political control but at the cost of democratic legitimacy, civilian lives, and regional stability. The shutdown of Dar es Salaam port and internet blackouts demonstrate how political repression can trigger economic self-harm, threatening Tanzania's role as East Africa's trade backbone. With opposition crushed, civil society under siege, and regional partners prioritizing stability over democracy, Hassan faces little external pressure—but mounting internal contradictions. The key watch-word is sustainability: can Tanzania sustain 6% growth while suppressing dissent, or will authoritarian brittleness eventually crack under the weight of youth unemployment, fiscal pressures, and simmering unrest? For investors and regional partners, Tanzania remains a "growth story with a governance asterisk"—opportunity and risk intertwined, with the balance shifting toward the latter.`

const TANZANIA_ISSUES = [
  'Disputed Elections and Deadly Crackdown',
  'Economic Growth vs. Political Instability',
  'Regional Role and Trade Disruptions'
]

const TANZANIA_TOP_STORIES = [
  {
    title: "Tanzania's 2025 Elections: No Real Race, No Real Reform",
    source: "Modern Diplomacy",
    link: "https://moderndiplomacy.eu/2025/11/01/tanzanias-2025-elections-no-real-race-no-real-reform/",
    pubDate: new Date("2025-11-01").toISOString()
  },
  {
    title: "Tanzanian President Hassan wins disputed election",
    source: "NPR",
    link: "https://www.npr.org/2025/11/01/nx-s1-5594080/tanzania-hassan-wins-presidential-election-landslide",
    pubDate: new Date("2025-11-01").toISOString()
  },
  {
    title: "Tanzania: Killings, Crackdown Follow Disputed Elections",
    source: "Human Rights Watch",
    link: "https://www.hrw.org/news/2025/11/04/tanzania-killings-crackdown-follow-disputed-elections",
    pubDate: new Date("2025-11-04").toISOString()
  },
  {
    title: "Tanzania election: Erosion of democracy will also come at the cost of economic potential",
    source: "Chatham House",
    link: "https://www.chathamhouse.org/2025/10/tanzania-election-erosion-democracy-will-also-come-cost-economic-potential",
    pubDate: new Date("2025-10-30").toISOString()
  },
  {
    title: "Tanzanian President Hassan declared winner of disputed vote with 98 percent",
    source: "Al Jazeera",
    link: "https://www.aljazeera.com/news/2025/11/1/tanzanian-president-samia-suluhu-hassan-declared-winner-of-election",
    pubDate: new Date("2025-11-01").toISOString()
  },
  {
    title: "Tanzania's President sworn in amid disputed election and deadly protests",
    source: "NPR",
    link: "https://www.npr.org/2025/11/03/nx-s1-5594858/tanzanian-opposition-decries-sham-elections-alleges-hundreds-of-deaths",
    pubDate: new Date("2025-11-03").toISOString()
  },
  {
    title: "Tanzania election violence sparks Kenya trade fears",
    source: "Semafor",
    link: "https://www.semafor.com/article/11/04/2025/kenya-sounds-alarm-as-tanzania-unrest-hits-regional-trade",
    pubDate: new Date("2025-11-04").toISOString()
  },
  {
    title: "Tanzania frees opposition leaders following deadly election protests",
    source: "Al Jazeera",
    link: "https://www.aljazeera.com/news/2025/11/11/tanzania-frees-opposition-leaders-following-deadly-election-protests",
    pubDate: new Date("2025-11-11").toISOString()
  }
]

async function generateTanzaniaSummary() {
  console.log('Generating Tanzania country summary...\n')

  try {
    // Store in database with coordinates -6.3690, 34.8888
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: 'Tanzania',
          type: 'country',
          category: 'all'
        }
      },
      create: {
        name: 'Tanzania',
        type: 'country',
        country: 'Tanzania',
        lat: -6.3690,
        lng: 34.8888,
        category: 'all',
        summary: TANZANIA_SUMMARY,
        issues: JSON.stringify(TANZANIA_ISSUES),
        topStories: JSON.stringify(TANZANIA_TOP_STORIES),
        storyCount: TANZANIA_TOP_STORIES.length,
        updatedAt: new Date()
      },
      update: {
        summary: TANZANIA_SUMMARY,
        issues: JSON.stringify(TANZANIA_ISSUES),
        topStories: JSON.stringify(TANZANIA_TOP_STORIES),
        storyCount: TANZANIA_TOP_STORIES.length,
        updatedAt: new Date()
      }
    })

    console.log('✅ Tanzania summary generated and saved to database!')
    console.log('\nPreview:')
    console.log(TANZANIA_SUMMARY.split('\n').slice(0, 15).join('\n'))
    console.log('\n...')
    console.log('\n✅ Complete!')

  } catch (error) {
    console.error('Error generating Tanzania summary:', error)
    throw error
  }
}

generateTanzaniaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
