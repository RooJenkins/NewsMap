import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const FOUR_COUNTRIES = [
  {
    name: 'Bolivia',
    type: 'country',
    lat: -16.5000,
    lng: -68.1500,
    country: 'Bolivia',
    summary: `# Bolivia

Center-right President Rodrigo Paz takes office November 8, 2025, ending nearly two decades of socialist rule amid economic catastrophe—and marking a historic pivot toward Washington and market capitalism.

## Major Issues

### 1. Economic Crisis and Market Reforms
**What's happening:**
- Annual inflation has reached 24 percent, with international reserves plunging from $15 billion in 2014 to under $2 billion—most of that gold, leaving as little as $47 million in hard currency
- Fitch downgraded Bolivia to CCC- status in January, reflecting severe fiscal stress
- Paz plans to end Bolivia's fixed exchange rate, phase out fuel subsidies, and reduce public investment—dismantling the MAS economic model

**Why it matters:**
- The economic model that sustained the Morales/Arce era for 20 years is collapsing, forcing painful structural adjustments
- Fuel subsidies alone have been a massive drain on the treasury, and their removal will trigger social unrest but unlock fiscal space
- The economic crisis drove voters to give Paz a supermajority in parliament, providing rare political capital for reform

**Prospects:**
- Paz's "capitalism for everyone" agenda faces immediate tests: devaluation will spike inflation, subsidy cuts will spark protests
- Success depends on securing US fuel supplies and foreign investment quickly to stabilize the economy
- A botched reform process could trigger social upheaval reminiscent of 2019, when Morales was ousted

### 2. Geopolitical Realignment Toward Washington
**What's happening:**
- US Secretary of State Marco Rubio called the election "a transformative opportunity" for bilateral ties after decades of anti-US leadership
- Paz has met with US officials and oil and gas companies to secure fuel supplies and strengthen trade ties
- The new government plans to appoint a special envoy to manage US-Bolivia relations

**Why it matters:**
- Bolivia's shift mirrors a broader regional turn away from leftist governments, creating an opening for renewed US engagement in South America
- Access to US fuel markets is critical for stabilizing Bolivia's energy crisis
- This realignment could bring foreign investment and technical assistance, but also risks backlash from MAS loyalists and leftist movements

**Prospects:**
- Paz must balance pro-US rhetoric with domestic sensitivities—Bolivia has a long history of anti-imperialist sentiment
- If successful, Bolivia could become a model for center-right governance in the region
- Risk of China filling the void if US engagement doesn't deliver tangible benefits quickly

### 3. Lithium Politics and the Energy Transition
**What's happening:**
- Bolivia holds nearly 21 million metric tons of lithium reserves—the largest deposits in the world
- The MAS government's state-led lithium development model failed to commercialize these resources at scale
- Paz's pro-market approach could open the sector to foreign investment and joint ventures

**Why it matters:**
- Lithium is central to the global energy transition, and Bolivia's reserves are geopolitically significant
- Successful lithium development could transform Bolivia's economy and reduce reliance on traditional commodities
- China has been the dominant player in Latin American lithium; Paz's opening to the West could shift this dynamic

**Prospects:**
- Environmental and indigenous rights concerns will complicate large-scale lithium extraction
- MAS opposition could mobilize around resource nationalism to resist foreign control of lithium
- If Paz can strike deals with Western firms (Tesla, Albemarle, etc.), Bolivia could become a key supplier in battery supply chains

## Summary

Bolivia is undergoing a dramatic political and economic transformation. Paz inherits an economy in crisis, a polarized society, and a mandate for change. The next 12 months will determine whether Bolivia can execute painful reforms without descending into chaos—and whether its geopolitical pivot toward the US proves sustainable. Watch for fuel subsidy protests, lithium deals with Western firms, and the MAS opposition's response. Bolivia's fate will test whether market capitalism can deliver after socialism's collapse.`,
    issues: JSON.stringify([
      'Economic Crisis and Market Reforms',
      'Geopolitical Realignment Toward Washington',
      'Lithium Politics and the Energy Transition'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Centrist Rodrigo Paz wins Bolivia\'s presidential runoff',
        source: 'NPR',
        link: 'https://www.npr.org/2025/10/20/nx-s1-5580091/rodrigo-paz-bolivia-president',
        pubDate: new Date('2025-10-20').toISOString()
      },
      {
        title: 'Bolivia Economy on Knife\'s Edge ahead of 2025 Polls',
        source: 'Geopolitical Monitor',
        link: 'https://www.geopoliticalmonitor.com/bolivia-economy-on-knifes-edge-ahead-of-2025-polls/',
        pubDate: new Date('2025-10-15').toISOString()
      },
      {
        title: 'What Bolivia\'s move to the center means for its economy',
        source: 'Atlantic Council',
        link: 'https://www.atlanticcouncil.org/blogs/new-atlanticist/what-bolivias-move-to-the-center-means-for-its-economy-foreign-policy-and-security/',
        pubDate: new Date('2025-10-10').toISOString()
      }
    ]),
    storyCount: 8
  },
  {
    name: 'Bulgaria',
    type: 'country',
    lat: 42.7339,
    lng: 25.4858,
    country: 'Bulgaria',
    summary: `# Bulgaria

Bulgaria is trapped in chronic political paralysis—seven parliamentary elections in four years—while racing toward euro adoption and navigating Russian meddling on NATO's eastern flank.

## Major Issues

### 1. Endless Election Cycle and Political Fragmentation
**What's happening:**
- Bulgaria held its 7th parliamentary election on October 27, 2025, with no clear winner—spring 2026 could bring an 8th election
- The Movement for Rights and Freedoms (DPS) party split over disagreements between symbolic leader Ahmed Dogan and Delyan Peevski, who has been sanctioned by the US for corruption since 2021
- Election fraud allegations and corruption scandals plague the political process, eroding public trust

**Why it matters:**
- Chronic instability blocks EU fund absorption, delays investment, and undermines governance effectiveness
- The fragmented parliament cannot form stable coalitions, leaving Bulgaria effectively rudderless
- Political uncertainty is making Bulgaria vulnerable to Russian influence operations and organized crime

**Prospects:**
- No breakthrough in sight—another election is likely, deepening voter apathy and opening space for extremist parties
- The DPS split could realign coalitions, but more likely extends the deadlock
- Risk of democratic backsliding as citizens lose faith in electoral politics

### 2. Eurozone Accession and Economic Pressures
**What's happening:**
- Bulgaria requested a convergence report in January 2026 to assess euro readiness, with IMF Managing Director Kristalina Georgieva delivering a landmark speech in Sofia on euro adoption
- GDP is expected to grow 2.6% in 2025 and 2.3% in 2026, driven by household consumption and EU funds rollout
- Wage growth is outpacing productivity, squeezing profitability and competitiveness while pushing up inflation
- Credit is booming and housing prices are rising fast, creating overheating risks

**Why it matters:**
- Euro adoption would anchor Bulgaria more firmly in the Western economic sphere, reducing currency risk and boosting investment
- Political instability threatens the Eurozone accession timeline—the EU may delay entry if governance doesn't stabilize
- Economic imbalances (wages, credit, housing) could trigger a correction just as Bulgaria joins the euro

**Prospects:**
- If Bulgaria meets convergence criteria by early 2026, euro entry could happen by 2027—but political chaos could derail this
- Housing bubble and credit expansion are red flags—a financial shock would set back accession and damage confidence
- Watch for ECB and European Commission assessments in Q1 2026

### 3. Black Sea Security and Russian Interference
**What's happening:**
- As a NATO member on the Alliance's eastern flank, Bulgaria plays a critical role in Black Sea security amid the ongoing Ukraine war
- Large-scale vote buying uncovered in Moldova and interference in Romania's elections involved companies registered in Bulgaria, suggesting similar activities inside Bulgaria
- Prime Minister Rosen Zhelyazkov emphasized that safeguarding democracy must be treated as an integral part of European defense policy

**Why it matters:**
- Bulgaria's political instability makes it a prime target for Russian hybrid warfare—disinformation, vote buying, and elite capture
- The Black Sea is a strategic flashpoint, and Bulgaria's location gives it outsized importance in NATO's eastern posture
- Russian meddling could further destabilize Bulgarian politics, delaying euro adoption and weakening NATO cohesion

**Prospects:**
- Expect continued Russian efforts to exploit Bulgarian political dysfunction—especially around energy dependence and organized crime
- Bulgaria's ability to absorb EU security funding and modernize its military depends on political stability
- If Bulgaria can't get its house in order, it risks becoming the weak link in NATO's Black Sea strategy

## Summary

Bulgaria is stuck in a doom loop: political paralysis blocks reform, which delays EU funds and euro adoption, which deepens instability, which invites Russian interference. The stakes are high—Bulgaria's euro bid and its role in NATO's eastern defense depend on breaking this cycle. But with another election looming and no coalition breakthrough in sight, the paralysis looks set to continue. Watch for euro convergence reviews, election fraud scandals, and Russian influence operations. Bulgaria's crisis is structural, not cyclical—and time is running out.`,
    issues: JSON.stringify([
      'Endless Election Cycle and Political Fragmentation',
      'Eurozone Accession and Economic Pressures',
      'Black Sea Security and Russian Interference'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Bulgaria: Political Crisis With No End in Sight?',
        source: 'Wilson Center',
        link: 'https://www.wilsoncenter.org/article/bulgaria-political-crisis-no-end-sight',
        pubDate: new Date('2025-11-01').toISOString()
      },
      {
        title: 'Bulgaria\'s Eurozone Accession',
        source: 'IMF',
        link: 'https://www.imf.org/en/News/Articles/2025/11/04/sp110425-md-bulgaria-eurozone-accession',
        pubDate: new Date('2025-11-04').toISOString()
      },
      {
        title: 'Bulgarian PM: Safeguarding Democracy Is Europe\'s New Security Frontier',
        source: 'Novinite',
        link: 'https://www.novinite.com/view_news.php?id=235392',
        pubDate: new Date('2025-11-08').toISOString()
      }
    ]),
    storyCount: 7
  },
  {
    name: 'Cambodia',
    type: 'country',
    lat: 12.5657,
    lng: 104.9910,
    country: 'Cambodia',
    summary: `# Cambodia

Hun Manet's Cambodia is doubling down on repression and Chinese alignment—while scam compounds linked to the ruling family undermine regional security and draw Western scrutiny.

## Major Issues

### 1. Dynasty 2.0: Hun Manet's Authoritarian Consolidation
**What's happening:**
- Prime Minister Hun Manet marked 72nd independence anniversary on November 9, 2025, with King Norodom Sihamoni, Senate President Hun Sen (his father), and the ruling elite
- Cabinet reshuffle in November 2024 installed Prak Sokhonn as deputy PM and foreign minister; more reshuffles expected in 2025-2026
- Dozens of political opponents are now behind bars, with repression and incarcerations increasing under Hun Manet's rule

**Why it matters:**
- Any hope that the Western-educated Hun Manet would bring reform has been dashed—he is his father's son, consolidating dynastic control
- Cambodia has no viable opposition, and the November 2024 cabinet reshuffle signals Hun Manet is purging potential rivals and rewarding loyalists
- The regime's longevity depends on repression, patronage, and Chinese backing—not popular legitimacy

**Prospects:**
- Cabinet reshuffles in 2025-2026 will reveal whether Hun Manet tightens his grip or faces internal challenges from Hun Sen's old guard
- Expect continued crackdowns on civil society, media, and opposition figures to preempt any challenge
- Regional and Western pressure on human rights will intensify, but is unlikely to change behavior without economic consequences

### 2. China Dependence and Belt and Road Entrenchment
**What's happening:**
- China accounts for almost 50% of foreign direct investment into Cambodia, with Belt and Road Initiative projects dominating infrastructure development
- The Asian Development Bank assessed that US tariffs of 19% on Cambodian exports are unlikely to affect the economy in the immediate term
- Cambodia's economy is projected to expand 6.3% in 2025, reaching $51.39 billion in GDP and $2,924 per capita income

**Why it matters:**
- Cambodia's economic model is entirely dependent on Chinese capital and access to export markets—giving Beijing enormous leverage
- The US tariff threat is a warning shot: Cambodia's alignment with China could trigger escalating trade penalties
- Cambodia exported over 11 million tonnes of agricultural products in the first 10 months of 2025, generating $4.18 billion—a 28.57% increase, but vulnerable to trade disruptions

**Prospects:**
- Cambodia will continue to deepen ties with China regardless of Western pressure—the regime's survival depends on Chinese support
- If US-China tensions escalate, Cambodia could face a choice between access to Western markets and Chinese patronage
- Watch for Chinese military facilities in Cambodia, which would trigger a regional security crisis

### 3. Scam Compounds and Transnational Crime
**What's happening:**
- Hun To, cousin of Prime Minister Hun Manet and director of Huione, is linked to Cambodia's scam compounds—criminal networks running human trafficking and online fraud operations
- Deputy Prime Minister Sar Sokha has evidenced ties to scam compounds, implicating the highest levels of government
- These criminal enterprises pose a dual threat to regional and global stability, with coercion and criminality undermining rule of law

**Why it matters:**
- Cambodia's scam economy is not just a domestic issue—it fuels transnational organized crime, human trafficking, and cyber fraud across Asia
- Direct ties between the ruling family and criminal networks expose the regime's corruption and complicity
- US and EU sanctions targeting individuals linked to scam compounds could escalate, threatening Cambodia's access to global finance

**Prospects:**
- Expect continued international pressure to crack down on scam compounds, but the regime is unlikely to act as long as elites profit
- If sanctions hit Huione or other linked entities, Cambodia could face financial isolation
- The scam economy is a political liability—if it triggers a regional crisis or mass atrocity, Western governments may impose broader penalties

## Summary

Cambodia under Hun Manet is not reforming—it is entrenching. The dynasty is secure, the opposition is crushed, and the economy is growing on Chinese capital. But the regime's reliance on repression, Beijing, and criminal networks creates long-term vulnerabilities. Watch for cabinet reshuffles revealing internal power struggles, escalating US-China trade tensions forcing tough choices, and international scrutiny of scam compounds threatening elite impunity. Cambodia is stable for now, but the model is brittle—and the risks are mounting.`,
    issues: JSON.stringify([
      'Dynasty 2.0: Hun Manet\'s Authoritarian Consolidation',
      'China Dependence and Belt and Road Entrenchment',
      'Scam Compounds and Transnational Crime'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Cambodia\'s Decline Under 2 Years of Hun Manet',
        source: 'The Diplomat',
        link: 'https://thediplomat.com/2025/09/cambodias-decline-under-2-years-of-hun-manet/',
        pubDate: new Date('2025-09-15').toISOString()
      },
      {
        title: 'Coercion and Criminality: Cambodia\'s Dual Threat to Regional and Global Stability',
        source: 'The Diplomat',
        link: 'https://thediplomat.com/2025/01/coercion-and-criminality-cambodias-dual-threat-to-regional-and-global-stability/',
        pubDate: new Date('2025-01-10').toISOString()
      },
      {
        title: 'Cambodia\'s economy to grow 6.3% in FY2025',
        source: 'Khmer Times',
        link: 'https://www.khmertimeskh.com/501700854/cambodias-economy-to-grow-6-3-in-fy2025-pm-says/',
        pubDate: new Date('2025-11-05').toISOString()
      }
    ]),
    storyCount: 9
  },
  {
    name: 'Chile',
    type: 'country',
    lat: -35.6751,
    lng: -71.5430,
    country: 'Chile',
    summary: `# Chile

Chile votes November 16, 2025, in a high-stakes election that could deliver the country to the hard right—ending Gabriel Boric's progressive experiment and reflecting a region-wide backlash against leftist governance.

## Major Issues

### 1. Right-Wing Surge and the Kast Factor
**What's happening:**
- José Antonio Kast, a right-wing populist often compared to Trump, is positioned to win a runoff on December 14 if no candidate secures 50% on November 16
- Leftist Jeannette Jara (former labor minister, 2022-2025) leads first-round polling with around 25%, but is expected to fall short and lose to Kast in a runoff
- This is Chile's first presidential election since 2012 where voting is compulsory, which could increase turnout and favor more extreme candidates

**Why it matters:**
- A Kast victory would mark an unprecedented right turn for Chile, reversing Boric's progressive agenda on taxes, pensions, and lithium nationalization
- Kast's platform emphasizes crime, immigration, and free-market orthodoxy—appealing to voters frustrated by Boric's legislative gridlock and rising insecurity
- Chile has historically been centrist or center-left; a hard-right presidency would be a political earthquake

**Prospects:**
- If Kast wins, expect rapid deregulation, cuts to social spending, and a confrontational approach to indigenous rights and environmental activism
- A Kast government could align closely with the US, especially on trade and security, while distancing from progressive Latin American governments
- Risk of social unrest if Kast's policies alienate the left—Chile's 2019 protests showed how quickly discontent can explode

### 2. Boric's Legacy and Legislative Gridlock
**What's happening:**
- President Gabriel Boric (2021-2025) leaves office with an average approval rating of 30%, reflecting deep public dissatisfaction
- His administration faced legislative gridlock, unable to pass key reforms on taxation, pensions, and state-owned lithium
- Crime and immigration dominate the election campaign, overshadowing Boric's progressive social agenda

**Why it matters:**
- Boric's unpopularity is a warning to the Latin American left: progressive rhetoric without delivery breeds backlash
- Legislative gridlock blocked constitutional reform, pension reform, and lithium nationalization—Boric's signature policies all failed
- The election is a referendum on Boric's presidency, and voters are signaling rejection

**Prospects:**
- If Jara wins, she inherits Boric's unpopularity and legislative paralysis—unlikely to succeed where he failed
- If Kast wins, he will have a mandate to dismantle Boric's legacy and reverse progressive policies
- Watch for post-election protests and mobilization by the left if Kast takes power

### 3. Copper, Lithium, and Economic Vulnerability
**What's happening:**
- Chile's economy is projected to grow 2.3% in 2025 and 3% in 2026, driven by copper and lithium exports—copper alone accounts for 10% of GDP and 50% of export earnings
- Electricity tariff hikes of up to 60% between June 2024 and February 2025 are fueling consumer price inflation
- Unemployment remains high (9% for women, 7.9% for men), with informality rising to nearly 30% for women

**Why it matters:**
- Chile's economy is dangerously dependent on China, its largest trading partner—slower Chinese growth or a trade war would devastate Chile
- Lithium is central to the global energy transition, but Chile's lithium sector is underdeveloped compared to Argentina and Bolivia
- Electricity tariff hikes and high unemployment undermine living standards, fueling anti-incumbent sentiment

**Prospects:**
- If Kast wins, expect a push to privatize lithium and open the sector to foreign investment—Tesla, Albemarle, and Chinese firms will compete for access
- Copper prices are volatile; a downturn in 2026 could trigger a fiscal crisis and derail recovery
- Watch for labor market reforms and pension privatization under a Kast government—both likely to spark protests

## Summary

Chile is at a crossroads. The November 16 election will determine whether the country doubles down on market capitalism under Kast or attempts a second progressive experiment under Jara. Boric's failure has discredited the left, and the right senses an opening. But Kast's hard-line agenda risks social upheaval, and Chile's economic model remains vulnerable to external shocks. Watch for first-round results on November 16, runoff dynamics, and post-election protests. Chile's fate will reverberate across Latin America—and test whether the region's right turn can deliver stability and growth.`,
    issues: JSON.stringify([
      'Right-Wing Surge and the Kast Factor',
      'Boric\'s Legacy and Legislative Gridlock',
      'Copper, Lithium, and Economic Vulnerability'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Chile Is Making an Unprecedented Right Turn',
        source: 'Foreign Policy',
        link: 'https://foreignpolicy.com/2025/11/12/chile-is-making-an-unprecedented-right-turn/',
        pubDate: new Date('2025-11-12').toISOString()
      },
      {
        title: 'Poll Tracker: Chile\'s 2025 Presidential Election',
        source: 'AS/COA',
        link: 'https://www.as-coa.org/articles/poll-tracker-chiles-2025-presidential-election',
        pubDate: new Date('2025-11-10').toISOString()
      },
      {
        title: 'Chile: A 2025 Snapshot',
        source: 'Americas Quarterly',
        link: 'https://americasquarterly.org/article/chile-a-2025-snapshot/',
        pubDate: new Date('2025-11-05').toISOString()
      }
    ]),
    storyCount: 10
  }
]

async function addFourCountries() {
  console.log('Adding Bolivia, Bulgaria, Cambodia, and Chile to database...\n')

  for (const country of FOUR_COUNTRIES) {
    console.log(`Processing: ${country.name}`)

    try {
      await prisma.locationSummary.upsert({
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
          updatedAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${country.name} added/updated successfully\n`)
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
    }
  }

  console.log('✅ All four countries processed!')
}

addFourCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
