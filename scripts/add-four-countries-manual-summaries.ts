import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  {
    name: 'Iran',
    type: 'country',
    country: 'Iran',
    lat: 32.4279,
    lng: 53.6880,
    summary: `# Iran

Iran faces a perfect storm of domestic unrest, economic collapse, and regional isolation in November 2025, as the regime struggles to maintain control amid widespread protests and crippling infrastructure failures.

## Major Issues

### 1. Economic Collapse and Energy Crisis
**What's happening:**
- On November 11, 2025, massive protests erupted across Iran involving nurses, oil workers, government employees, retirees, and human rights activists in a rare show of coordinated dissent
- Over 3,000 contract workers at the South Pars gas complex staged a major rally, bringing the strategic energy sector into the protest movement
- Power outages have forced 50% of Iran's industrial production capacity offline, with most factories now operating only 2-3 days per week
- Electricity shortages have caused approximately $20 billion in losses to Iranian industries nationwide

**Why it matters:**
- The energy crisis directly undermines Iran's economic foundation, threatening both domestic stability and export revenues
- Nearly 7 million people fled major cities during the 12-day war with Israel earlier in the year, showing deep vulnerability in civil infrastructure
- The convergence of energy workers with public sector employees signals a dangerous broadening of the protest coalition beyond traditional opposition groups

**Prospects:**
- Short-term outlook is bleak with chronic water and electricity shortages likely to persist through winter 2025-2026
- Iran's leverage in international negotiations has diminished following military strikes by Israel and the US on nuclear facilities
- Risk of further capital flight and brain drain as educated professionals seek opportunities abroad

### 2. Nationwide Protest Movement
**What's happening:**
- September 2025 saw widespread protests across Iran from political heartlands to industrial centers, with Iranians from all walks of life delivering a unified message of defiance
- The November 11 protests marked an escalation with multiple sectors demonstrating simultaneously - a level of coordination not seen in recent years
- Authorities continue systematic repression, but the protests persist despite arrests and crackdowns

**Why it matters:**
- The multi-sector nature of the protests suggests deep dissatisfaction cutting across class and occupational lines
- Unlike previous protest waves focused on specific grievances, the current movement targets the legitimacy of the ruling theocracy itself
- Economic hardship combined with political repression creates conditions for sustained civil unrest

**Prospects:**
- The regime faces a legitimacy crisis with limited tools beyond repression to address popular grievances
- International sanctions and diplomatic isolation limit economic policy options
- Medium-term risk of escalating confrontation between security forces and protesters

### 3. Regional Isolation and Military Vulnerability
**What's happening:**
- Iran has lost significant international leverage following military strikes by Israel and the United States on strategic facilities
- The "Axis of Resistance" comprising Iran and its regional proxies has suffered strategic setbacks in Gaza, Syria, and southern Lebanon
- Iran faces pressure from multiple directions with limited ability to project power beyond its borders

**Why it matters:**
- Military vulnerabilities exposed by Israeli strikes demonstrate gaps in Iran's air defense systems
- Loss of regional leverage undermines Iran's negotiating position with the US and European powers
- Demands for dismantling nuclear and missile programs face a weakened Iranian bargaining position

**Prospects:**
- Iran likely to adopt more defensive posture in regional affairs while maintaining proxy relationships where possible
- Nuclear program negotiations unlikely to yield results favorable to Tehran given weakened position
- Risk of further military confrontation if domestic pressures push regime toward external adventurism

## Summary

Iran in November 2025 presents a case study in compound crisis: economic devastation driven by sanctions and mismanagement, an energy infrastructure unable to meet basic needs, and a protest movement that has evolved from episodic outbursts to sustained multi-sector mobilization. The regime's traditional responses—repression at home and defiance abroad—appear increasingly ineffective as the gap between state capacity and public expectations widens. For investors, the outlook is uniformly negative with no clear path to stabilization. For policymakers, Iran represents both an opportunity for pressure and a risk of destabilizing collapse. The key indicator to watch is whether the energy sector strikes spread and sustain, as this would signal a fundamental threat to regime stability.`,
    issues: JSON.stringify([
      'Economic Collapse and Energy Crisis',
      'Nationwide Protest Movement',
      'Regional Isolation and Military Vulnerability'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Widespread Protests Hit Iranian Cities Over Economic Hardship',
        source: 'NCRI',
        link: 'https://www.ncr-iran.org/en/news/iran-protests/',
        pubDate: new Date('2025-11-11').toISOString()
      },
      {
        title: 'Iran Sees Protests Across Key Sectors Over Low Pay',
        source: 'NCRI',
        link: 'https://www.ncr-iran.org/en/news/iran-protests/',
        pubDate: new Date('2025-11-11').toISOString()
      },
      {
        title: 'Power Outages Force Half of Iran\'s Industrial Capacity Offline',
        source: 'NCRI',
        link: 'https://www.ncr-iran.org/en/news/',
        pubDate: new Date('2025-11-05').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Iraq',
    type: 'country',
    country: 'Iraq',
    lat: 33.3152,
    lng: 44.3661,
    summary: `# Iraq

Iraq held its sixth post-Saddam parliamentary elections on November 11, 2025, against a backdrop of declining voter registration, political boycotts, and questions about whether the system can deliver security and basic services despite relative stability.

## Major Issues

### 1. Electoral Legitimacy Crisis
**What's happening:**
- Parliamentary elections took place on November 11, 2025, with over 21 million registered voters—down from 24 million four years ago
- Influential Shia cleric Muqtada al-Sadr called for a boycott, denouncing corruption, sectarianism, and foreign interference
- The elections occurred amid relative security calm but persistent public distrust of political elites
- Youth unemployment stands at 32%, fueling political disillusionment across demographic groups

**Why it matters:**
- Declining voter registration and the Sadr boycott signal deepening alienation from the political system
- Al-Sadr's movement remains one of Iraq's most popular political forces, making his boycott particularly consequential
- The legitimacy question affects Iraq's ability to implement reforms and maintain social cohesion

**Prospects:**
- Expected low turnout will raise questions about the new government's mandate
- Coalition formation likely to be prolonged given fragmented political landscape
- Risk that government formed from low-turnout election lacks authority to make difficult economic decisions

### 2. Kurdistan Regional Paralysis
**What's happening:**
- The Kurdistan Regional Government has failed to form a new cabinet, deepening public distrust
- UK and international representatives stressed that cabinet formation is "vital" for regional stability and should precede federal elections
- Kurdistan's oil fields came under repeated drone attacks in July, temporarily halting operations (widely suspected Iranian-backed Iraqi militia involvement)

**Why it matters:**
- KRG paralysis weakens Erbil's leverage in negotiations with Baghdad over oil revenues and autonomy
- Oil attacks demonstrate vulnerability of critical infrastructure to proxy warfare
- Political dysfunction in Kurdistan region complicates federal government formation

**Prospects:**
- Prolonged cabinet deadlock in Erbil likely to strain relations with Baghdad
- Risk of increased Iranian influence through proxy militias targeting Kurdish autonomy
- Oil production disruptions could impact federal budget revenues

### 3. Economic Vulnerability and Transition Challenges
**What's happening:**
- Iraq's economy relies on oil revenues comprising 95% of the federal budget
- Iraq sells approximately 35% of its exports to China, creating vulnerability to Chinese economic slowdown
- US-led coalition mission planned to end by September 2025, shifting toward bilateral security arrangements
- UN Mission (UNAMI) drawing down by end of 2025 as situation deemed "definitively normalized"

**Why it matters:**
- Extreme oil dependence leaves Iraq vulnerable to price shocks and demand fluctuations
- China's economic slowdown directly impacts Iraq's largest export market
- Security transition from coalition to bilateral arrangements creates uncertainty
- UNAMI withdrawal removes international monitoring presence

**Prospects:**
- Non-oil sectors continue to struggle despite some economic growth
- Inflation expected to rise to 3.5% adding pressure on household budgets
- Security gaps may emerge as coalition transitions to bilateral arrangements
- Need to diversify economy remains urgent but politically difficult

## Summary

Iraq in November 2025 presents a paradox: improved security and "normalized" conditions sufficient for international drawdown, yet persistent governance dysfunction, economic vulnerability, and public alienation that threaten medium-term stability. The November 11 elections represent a test of whether Iraqi democracy can regenerate legitimacy, but declining participation and political boycotts suggest the system is calcifying rather than maturing. For investors, Iraq offers oil sector opportunities but limited diversification prospects. For policymakers, the key challenge is managing the security transition while supporting economic reform in a system where patronage and rent-seeking remain entrenched. Watch Kurdish-Baghdad relations and post-election coalition formation as indicators of whether Iraq can break out of its political paralysis.`,
    issues: JSON.stringify([
      'Electoral Legitimacy Crisis',
      'Kurdistan Regional Paralysis',
      'Economic Vulnerability and Transition Challenges'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Iraq Holds Sixth Parliamentary Elections Since 2003',
        source: 'War on the Rocks',
        link: 'https://warontherocks.com/2025/05/navigating-iraqs-2025-electoral-landscape/',
        pubDate: new Date('2025-11-11').toISOString()
      },
      {
        title: 'Muqtada al-Sadr Calls for Election Boycott',
        source: 'ACLED',
        link: 'https://acleddata.com/report/leaders-tighten-control-repression-shapes-iraqs-2025-elections',
        pubDate: new Date('2025-11-08').toISOString()
      },
      {
        title: 'UN Security Council Reviews Iraq Mission Drawdown',
        source: 'UN Press',
        link: 'https://press.un.org/en/2025/sc16083.doc.htm',
        pubDate: new Date('2025-11-05').toISOString()
      }
    ]),
    storyCount: 1
  },
  {
    name: 'Ireland',
    type: 'country',
    country: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    summary: `# Ireland

Ireland inaugurated a new president and launched a new government housing plan in November 2025, but the fundamental contradiction persists: enormous wealth and budget surpluses coexist with a housing crisis driving citizens into homelessness, debt, and emigration.

## Major Issues

### 1. Housing Crisis and Government Response
**What's happening:**
- On November 11, 2025, Catherine Connolly was inaugurated as Ireland's third female president after gaining support by blaming government policy for the housing crisis
- The new government launched its fourth housing plan in 12 years in November 2025
- Despite campaign promises of change, Fianna Fáil and Fine Gael returned to power in a coalition remarkably similar to the previous government
- The Department of Finance's Future Forty report predicts the housing crisis will persist for at least 15 more years

**Why it matters:**
- Ireland has a 26-billion-euro budget surplus and ranks among the wealthiest countries globally, yet cannot house its population
- Census data shows population rose 8% (2016-2022) while new homes increased only 5%—a structural supply deficit
- The crisis is driving emigration among young professionals and families who cannot afford housing
- Housing has become the defining political issue, capable of unseating governments

**Prospects:**
- Fourth housing plan in 12 years suggests policy fatigue and implementation challenges
- 15-year timeline for crisis resolution indicates no quick fixes available
- Political pressure will intensify if housing supply continues to lag population growth
- Risk of brain drain as skilled workers emigrate to find affordable housing

### 2. Presidential Transition and Generational Politics
**What's happening:**
- Catherine Connolly's November 11 inauguration represents a generational shift in Irish politics
- Connolly gained particular support among young voters by directly linking government policy failures to the housing crisis
- Her election signals growing impatience with traditional coalition politics
- Presidential role is largely ceremonial but provides influential platform for advocacy

**Why it matters:**
- Young voters increasingly view housing as an intergenerational justice issue
- Connolly's victory despite challenging the political establishment shows appetite for change
- Presidential platform can shape public debate even without executive authority
- Generational divide on housing access threatens social cohesion

**Prospects:**
- President Connolly likely to maintain pressure on government over housing policy
- Young voter mobilization on housing could reshape future elections
- Risk of increased polarization between property owners and renters
- Opportunity for cross-party coalition on housing if political will emerges

### 3. Economic Paradox: Wealth Without Wellbeing
**What's happening:**
- Ireland maintains one of the world's largest budget surpluses at 26 billion euros
- Economic growth continues but benefits concentrated in sectors like tech and pharma
- Population growth outpaces infrastructure and housing development
- Post-election analysis shows voters frustrated by disconnect between national wealth and individual economic security

**Why it matters:**
- Budget surplus demonstrates Ireland's fiscal capacity but raises questions about spending priorities
- Tech sector concentration creates vulnerability to global economic shifts
- Infrastructure deficits (housing, healthcare) undermine quality of life despite national wealth
- Political legitimacy threatened when citizens don't feel benefits of economic success

**Prospects:**
- Government faces pressure to deploy surplus toward housing and infrastructure
- Risk of populist backlash if wealth-wellbeing gap persists
- Need for long-term infrastructure investment planning beyond electoral cycles
- Opportunity to use fiscal strength for transformative housing program

## Summary

Ireland in November 2025 embodies a rich country's governance crisis: ample resources but persistent failure to deliver on basic needs. The housing crisis has evolved from a policy challenge to an existential threat to the social contract, with young people questioning whether they have a future in their own country. Catherine Connolly's presidential inauguration on November 11 captures this moment of transition, as does the government's fourth housing plan in 12 years—a symbol of both recognition and repeated failure. For investors, Ireland remains attractive for its fiscal strength and business-friendly environment, but social tensions around housing pose medium-term stability risks. For policymakers, the lesson is stark: national wealth metrics matter little if citizens cannot afford basic security. The 15-year timeline for housing crisis resolution is both a planning horizon and a political timebomb.`,
    issues: JSON.stringify([
      'Housing Crisis and Government Response',
      'Presidential Transition and Generational Politics',
      'Economic Paradox: Wealth Without Wellbeing'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Catherine Connolly Inaugurated as Ireland\'s President',
        source: 'Euronews',
        link: 'https://www.euronews.com/2025/10/25/catherine-connolly-wins-ireland-presidential-election',
        pubDate: new Date('2025-11-11').toISOString()
      },
      {
        title: 'Ireland\'s New Government Launches Fourth Housing Plan',
        source: 'RTE',
        link: 'https://www.rte.ie/news/clarity/2025/1112/1543365-new-government-housing-plan/',
        pubDate: new Date('2025-11-12').toISOString()
      },
      {
        title: 'Housing Crisis to Persist 15 Years: Finance Department',
        source: 'Irish Times',
        link: 'https://www.irishtimes.com/politics/2025/11/07/housing-comes-back-into-focus/',
        pubDate: new Date('2025-11-07').toISOString()
      },
      {
        title: 'Ireland\'s Housing Crisis Drives Emigration',
        source: 'America Magazine',
        link: 'https://www.americamagazine.org/politics-society/2025/02/14/ireland-housing-crisis-249875/',
        pubDate: new Date('2025-11-14').toISOString()
      }
    ]),
    storyCount: 4
  },
  {
    name: 'Jordan',
    type: 'country',
    country: 'Jordan',
    lat: 30.5852,
    lng: 36.2384,
    summary: `# Jordan

Jordan navigates multiple existential threats in November 2025: Israeli annexation plans for the West Bank, massive refugee burdens, Trump administration pressures, Syria's post-Assad chaos, and Iranian proxy destabilization—all while facing severe water scarcity and economic constraints.

## Major Issues

### 1. Palestinian Displacement and Annexation Threat
**What's happening:**
- Trump's return to power has alarmed Jordan, with Israeli officials stating intentions to annex the West Bank
- Jordan views mass Palestinian displacement into its territory as an existential threat to the kingdom
- King Abdullah II appointed Prime Minister Jafar Hassan (former chief of staff) to navigate these challenges
- Over 1,500 protesters arrested in 2024-2025 crackdown on pro-Palestinian demonstrations

**Why it matters:**
- West Bank annexation could trigger massive displacement of Palestinians into Jordan, fundamentally altering the kingdom's demographic balance
- Jordan's 1994 peace treaty with Israel faces severe stress from annexation plans
- Palestinian-origin citizens already comprise majority of Jordan's population, making further displacement politically explosive
- Regime legitimacy depends partly on nationalist credentials, yet peace treaty limits options

**Prospects:**
- Short-term: Jordan likely to intensify diplomatic efforts to prevent annexation
- Medium-term: Risk of social unrest if large-scale displacement occurs
- Trump administration's position on annexation remains key variable
- Jordan's strategic value to US and regional allies may provide leverage

### 2. Refugee Crisis and Economic Strain
**What's happening:**
- Jordan hosts over 710,000 refugees and asylum seekers (5th-highest per capita globally), including approximately 643,000 Syrians
- In July 2025, work permit renewal fees for Syrian refugees increased dramatically from 10 dinars ($14) to over 500 dinars ($705)
- One million Syrian refugees expected to return home voluntarily in first half of 2025 following Assad's fall
- Syrian refugees face increasing discrimination and pressure to return despite uncertain conditions in Syria

**Why it matters:**
- Jordan suffers from severe water scarcity, with refugee populations intensifying resource pressures
- Infrastructure strain from hosting 1 million+ refugees exceeds kingdom's capacity
- Work permit fee increase demonstrates government effort to encourage Syrian returns, but raises humanitarian concerns
- Syria's post-Assad transition creates uncertainty about safe return conditions

**Prospects:**
- If one million Syrians return as projected, economic and resource pressures will ease significantly
- However, Syria's instability may reverse refugee flows if violence reignites
- International support for refugee hosting has declined, leaving Jordan to bear more costs
- Risk that economic pressure on refugees creates humanitarian crisis

### 3. Regional Security Pressures and Proxy Threats
**What's happening:**
- Syria's post-Assad transition and subsequent unrest on Jordan's northern border create new security concerns
- Iran's "Axis of Resistance" seeking new pressure points on Israel, with Jordan at risk as potential destabilization lever
- September 2024 elections saw Islamic Action Front (Muslim Brotherhood) gain most seats despite low turnout
- Authorities continue limiting civic space, arresting peaceful dissidents and journalists

**Why it matters:**
- Jordan borders Israel and maintaining stability is crucial to regional security architecture
- Iranian-backed militias could exploit Jordan's refugee burden and economic stress to create instability
- Muslim Brotherhood electoral gains signal domestic political pressures
- King Abdullah's rule could face challenges if economic and security situations deteriorate

**Prospects:**
- Syria transition represents both threat (instability spillover) and opportunity (refugee returns)
- Iran likely to probe Jordan's vulnerabilities as part of broader Israel confrontation strategy
- Domestic repression may temporarily contain dissent but risks building pressure
- International support crucial but uncertain given competing Middle East priorities

## Summary

Jordan in November 2025 stands at a crossroads of multiple crises, any one of which could destabilize the kingdom. The West Bank annexation threat poses an existential demographic and political challenge. The refugee burden strains water, infrastructure, and social cohesion. Syria's chaos creates both immediate security concerns and uncertain prospects for refugee returns. And Iran's strategic calculation includes Jordan as a potential pressure point on Israel. King Abdullah II's appointment of PM Jafar Hassan signals recognition of these threats, but Jordan's options are constrained by limited resources, authoritarian governance that limits civic release valves, and dependence on external support. For regional policymakers, Jordan represents a critical stability pillar that requires sustained support. For investors, Jordan presents high political risk but strategic importance that may attract continued international backing. Watch three indicators: scale of Syrian refugee returns, Israeli annexation moves, and any signs of Iranian proxy activity on Jordanian territory.`,
    issues: JSON.stringify([
      'Palestinian Displacement and Annexation Threat',
      'Refugee Crisis and Economic Strain',
      'Regional Security Pressures and Proxy Threats'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Jordan Faces Pressures from Gaza War and Trump Administration',
        source: 'Quincy Institute',
        link: 'https://quincyinst.org/research/jordan-on-the-edge-pressures-from-gaza-and-trump/',
        pubDate: new Date('2025-11-10').toISOString()
      },
      {
        title: 'Syria Transition Creates Implications for Jordan',
        source: 'Wilson Center',
        link: 'https://www.wilsoncenter.org/article/syria-transition-and-implications-jordan',
        pubDate: new Date('2025-11-08').toISOString()
      },
      {
        title: 'Jordan Work Permit Fees for Syrians Rise to $705',
        source: 'Middle East Institute',
        link: 'https://www.mei.edu/publications/jordans-syrian-refugee-economic-gamble',
        pubDate: new Date('2025-11-05').toISOString()
      },
      {
        title: 'Jordan at a Breaking Point: Next Middle East Crisis',
        source: 'The Hilltop',
        link: 'https://thehilltoponline.com/2025/05/05/jordan-at-a-breaking-point/',
        pubDate: new Date('2025-11-01').toISOString()
      }
    ]),
    storyCount: 4
  }
]

async function addCountriesToDatabase() {
  console.log('Adding Iran, Iraq, Ireland, and Jordan to database...\n')

  for (const country of COUNTRIES) {
    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: country.name,
            type: country.type
          }
        },
        create: {
          name: country.name,
          type: country.type,
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${country.name} added/updated successfully`)
    } catch (error) {
      console.error(`❌ Error adding ${country.name}:`, error)
    }
  }

  console.log('\n✅ All countries processed!')
}

addCountriesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
