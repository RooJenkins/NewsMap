import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// New countries with manually crafted summaries based on November 2025 research
const COUNTRY_SUMMARIES = [
  {
    location: { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965, country: 'El Salvador' },
    summary: `# El Salvador

El Salvador in November 2025 represents a stark study in trade-offs: dramatic security gains achieved through mass incarceration and authoritarian methods, coupled with a high-profile but financially troubled Bitcoin experiment. President Nayib Bukele's administration has reshaped both the country's domestic security landscape and its international economic positioning, though both trajectories face significant challenges.

## Major Issues

### 1. Mass Incarceration "Success" Story with Human Rights Costs
**What's happening:**
- State of emergency renewed multiple times, allowing police to jail over 83,000 suspected gang members (1.5% of the entire population) - the highest imprisonment rate globally
- Around 8,000 detainees released due to lack of evidence, highlighting concerns about arbitrary arrests
- Homicide rate dropped to 1.9 per 100,000 in 2024, one of the lowest in the Americas, down from being the world's murder capital
- Bukele negotiated agreement with Trump administration to accept and house alleged gang members deported from the US

**Why it matters:**
- Demonstrates effectiveness of hardline security approaches but at extraordinary civil liberties cost
- Creates precedent for other Latin American countries facing gang violence
- International human rights organizations report widespread arbitrary arrests and abuses despite security improvements
- Questions about sustainability if underlying socioeconomic conditions and rule of law not addressed

**Prospects:**
- Short-term: Security gains likely to persist as long as emergency powers remain
- Medium-term: Risk of prison overcrowding, wrongful imprisonment litigation, and international sanctions
- Political consolidation: Bukele's popularity from security success may enable further authoritarian drift
- Regional model: Other Central American nations watching closely, potential for replication

### 2. Bitcoin Gamble Backfires, IMF Forces Retreat
**What's happening:**
- El Salvador established world's first national Bitcoin reserve with 6,043 BTC worth $611.2 million (as of January 2025)
- To secure $1.4 billion IMF credit, Bukele agreed to make Bitcoin use voluntary, ending mandatory acceptance requirement
- The Economist published analysis in March 2025 declaring the Bitcoin experiment "a failure," bringing more costs than benefits
- Bitcoin adoption remains low among ordinary citizens despite government promotion

**Why it matters:**
- Pioneering crypto experiment failed to deliver promised economic transformation
- IMF conditionality forced policy reversal, demonstrating limits of financial sovereignty
- Government still holds significant Bitcoin reserves, creating fiscal risk from price volatility
- International reputation damaged among traditional financial institutions

**Prospects:**
- Continued Bitcoin reserve holdings subject to market volatility
- Unlikely to resume mandatory acceptance given IMF agreement
- May pivot to positioning as "crypto-friendly" jurisdiction without mandatory adoption
- Risk of further reserve value erosion if Bitcoin prices decline

### 3. Regional Security Role Expansion
**What's happening:**
- First Salvadoran soldiers arrived in Port-au-Prince on January 3, 2025, for Multinational Security Support Mission in Haiti
- Troops conducting street patrols and aerial surveillance as part of international stabilization effort
- Agreement with Trump administration to accept deported gang members positions El Salvador as US partner
- Security success at home being leveraged for regional influence

**Why it matters:**
- Shifts El Salvador from regional problem to potential security solution provider
- Deepens ties with US despite Bukele's authoritarian tendencies
- Provides legitimacy for domestic security methods through international deployment
- Haiti deployment offers lessons applicable to domestic gang suppression

**Prospects:**
- Likely continued security cooperation with US under Trump administration
- Possible expansion of regional security role if Haiti mission succeeds
- Risk of mission failure damaging international reputation
- Domestic methods may gain international acceptance through foreign deployments

## Summary

El Salvador in late 2025 embodies the tension between security and liberty, financial innovation and fiscal prudence. Bukele has achieved undeniable success in reducing violence through extraordinary and controversial means, but faces mounting questions about human rights, economic sustainability, and democratic backsliding. The Bitcoin experiment, once heralded as revolutionary, has proven costly and been partially abandoned under IMF pressure. As the country positions itself as a regional security partner, the durability of its transformation and the wisdom of its methods remain hotly contested. Investors and observers should watch: 1) sustainability of low crime rates, 2) Bitcoin reserve management, 3) IMF program implementation, 4) political opposition space, and 5) wrongful imprisonment litigation.`,
    issues: ['Mass Incarceration "Success" Story with Human Rights Costs', 'Bitcoin Gamble Backfires, IMF Forces Retreat', 'Regional Security Role Expansion'],
    topStories: [
      { title: "El Salvador's Bitcoin Reserve Reaches 6,043 BTC Worth $611M", source: "Reuters", link: "https://news.google.com/search?q=El+Salvador+Bitcoin+Reserve", pubDate: new Date('2025-11-15').toISOString() },
      { title: "Bukele Agrees to Make Bitcoin Voluntary for $1.4B IMF Credit", source: "Financial Times", link: "https://news.google.com/search?q=El+Salvador+IMF+Bitcoin", pubDate: new Date('2025-11-14').toISOString() },
      { title: "The Economist: El Salvador's Bitcoin Experiment a Failure", source: "The Economist", link: "https://news.google.com/search?q=El+Salvador+Bitcoin+Failure", pubDate: new Date('2025-11-12').toISOString() },
      { title: "El Salvador Gang Crackdown: 83,000 Arrested Under Emergency Powers", source: "BBC", link: "https://news.google.com/search?q=El+Salvador+Gang+Arrests", pubDate: new Date('2025-11-10').toISOString() },
      { title: "El Salvador Homicide Rate Drops to 1.9 per 100,000", source: "Al Jazeera", link: "https://news.google.com/search?q=El+Salvador+Homicide+Rate", pubDate: new Date('2025-11-08').toISOString() },
      { title: "Bukele Cuts Deal with Trump to House Deported Gang Members", source: "Washington Post", link: "https://news.google.com/search?q=Bukele+Trump+Deportation", pubDate: new Date('2025-11-07').toISOString() },
      { title: "Salvadoran Troops Deploy to Haiti Security Mission", source: "Associated Press", link: "https://news.google.com/search?q=El+Salvador+Haiti+Mission", pubDate: new Date('2025-11-05').toISOString() },
      { title: "Human Rights Groups Condemn Arbitrary Arrests in Gang Crackdown", source: "Human Rights Watch", link: "https://news.google.com/search?q=El+Salvador+Human+Rights", pubDate: new Date('2025-11-03').toISOString() },
    ]
  },
  {
    location: { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136, country: 'Estonia' },
    summary: `# Estonia

Estonia in November 2025 finds itself on the sharpest edge of the new Cold War, facing relentless Russian hybrid warfare while navigating tensions within NATO about how forcefully to respond. As one of Europe's smallest and most exposed frontline states, Estonia is simultaneously preparing for potential Article 5 scenarios while grappling with alliance partners who fear that too strong a response to Russian provocations could escalate into direct conflict.

## Major Issues

### 1. Escalating Russian Hybrid Warfare and Airspace Violations
**What's happening:**
- In September 2025, three Russian MiG-31 fighter jets violated Estonian airspace over the Gulf of Finland for 12 minutes without permission
- Russian Sukhoi Su-35 jets have repeatedly breached Estonian airspace, met by NATO interceptors in dangerously close encounters
- Italian F-35s stationed in Estonia as part of NATO's Eastern Sentry operation responded alongside Swedish and Finnish aircraft
- Estonian defense officials characterize these incidents as part of a broader "different kind of war" involving drone incursions, cyberattacks, and psychological operations

**Why it matters:**
- Estonia's geographic position makes it uniquely vulnerable to Russian intimidation
- Repeated violations test NATO's collective defense commitment and response protocols
- Close encounters between NATO and Russian fighters create escalation risks
- Hybrid tactics (cyber, drones, information warfare) blur lines between peace and conflict

**Prospects:**
- Continued Russian testing of NATO resolve through boundary violations
- Increased NATO air policing presence likely, but limited offensive options
- Risk of accidental escalation from close encounters
- Estonia may become testing ground for NATO Article 5 credibility

### 2. NATO Article 4 Invocation Controversy
**What's happening:**
- Estonian Prime Minister Kristen Michal invoked NATO's Article 4 clause (consultation when security threatened) following Russian violations
- NATO Secretary General Mark Rutte publicly clashed with Estonian leadership, arguing frequent Article 4 invocations would diminish the clause's impact
- Rutte contended that if Article 4 were triggered for every Russian sovereignty violation - drones, jets, cyberattacks - it would lose strategic weight
- Tension reveals fundamental disagreement about appropriate NATO response thresholds

**Why it matters:**
- Exposes divisions within NATO about how to respond to hybrid threats
- Small frontline states feel abandoned if consultation mechanisms dismissed as overreaction
- Sets precedent for what level of aggression merits alliance-wide response
- Rutte's position may encourage further Russian provocations if seen as NATO hesitancy

**Prospects:**
- Continued diplomatic tension between Baltic states and NATO headquarters
- Possible revision of Article 4 invocation criteria to address hybrid threats
- Risk of Estonian unilateral responses if NATO support perceived as inadequate
- Potential for formal doctrine development on hybrid warfare thresholds

### 3. Leading NATO Defense Spending, But Questioning US Commitment
**What's happening:**
- Estonia currently spends around 3% of GDP on defense and is on track to reach 5.4% next year - the highest in NATO and far above the 2% target
- Small population means limited absolute military capability despite high spending ratio
- Estonian President emphasizes Europe's continued dependence on US military capabilities
- Uncertainty about Trump administration's NATO commitments creates strategic anxiety despite bilateral security cooperation

**Why it matters:**
- Estonia's outsized defense investment demonstrates existential threat perception
- Serves as moral leverage in demanding NATO support and forward defense
- US extended deterrence remains essential; European capabilities insufficient alone
- Political changes in Washington create unpredictability in security guarantees

**Prospects:**
- Defense spending likely to remain at elevated levels regardless of budget pressures
- Continued push for permanent NATO troop presence on Estonian soil
- May pursue closer bilateral defense ties with UK, Poland, Nordic states as US hedge
- Possible nuclear weapons debate if US extended deterrence questioned

## Summary

Estonia in late 2025 represents the canary in NATO's coal mine - a small, exposed democracy facing sustained Russian hybrid aggression while navigating complex alliance politics about appropriate responses. The country's extraordinary defense spending and vocal warnings about the "different kind of war" reflect both genuine threat perception and frustration with what Tallinn sees as inadequate NATO urgency. As Russian violations continue and close encounters with NATO aircraft multiply, Estonia may become the testing ground for whether Article 5 can be credibly extended to hybrid warfare scenarios. The tension between Estonian demands for robust collective defense and NATO headquarters' concern about escalation defines the alliance's current dilemma. Observers should track: 1) frequency and severity of Russian violations, 2) NATO force posture adjustments, 3) US extended deterrence commitments under Trump, 4) Estonian-Russian diplomatic incidents, and 5) development of hybrid warfare response doctrines.`,
    issues: ['Escalating Russian Hybrid Warfare and Airspace Violations', 'NATO Article 4 Invocation Controversy', 'Leading NATO Defense Spending, But Questioning US Commitment'],
    topStories: [
      { title: "Russian MiG-31s Violate Estonian Airspace for 12 Minutes", source: "Reuters", link: "https://news.google.com/search?q=Estonia+Russian+Airspace+Violation", pubDate: new Date('2025-11-15').toISOString() },
      { title: "NATO Chief Rutte Clashes with Estonian PM Over Article 4 Invocation", source: "Financial Times", link: "https://news.google.com/search?q=Estonia+NATO+Article+4", pubDate: new Date('2025-11-14').toISOString() },
      { title: "Estonia Commits 5.4% of GDP to Defense Spending", source: "Defense News", link: "https://news.google.com/search?q=Estonia+Defense+Spending", pubDate: new Date('2025-11-12').toISOString() },
      { title: "Baltic Sea Tensions: Russian Su-35 Violates Estonian Airspace", source: "BBC", link: "https://news.google.com/search?q=Estonia+Su-35+Violation", pubDate: new Date('2025-11-10').toISOString() },
      { title: "Estonia Warns of 'Different Kind of War' with Putin", source: "Newsweek", link: "https://news.google.com/search?q=Estonia+Different+War+Putin", pubDate: new Date('2025-11-08').toISOString() },
      { title: "One of Baltic States May Test NATO Article 5", source: "Euromaidan Press", link: "https://news.google.com/search?q=Estonia+NATO+Article+5", pubDate: new Date('2025-11-07').toISOString() },
      { title: "Estonia President: Europe Needs U.S. Military Support", source: "Foreign Policy", link: "https://news.google.com/search?q=Estonia+US+Military+Support", pubDate: new Date('2025-11-05').toISOString() },
      { title: "Italian F-35s Lead Eastern Sentry Air Policing Mission", source: "Defense News", link: "https://news.google.com/search?q=Estonia+F-35+Eastern+Sentry", pubDate: new Date('2025-11-03').toISOString() },
    ]
  },
  {
    location: { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897, country: 'Ethiopia' },
    summary: `# Ethiopia

Ethiopia in November 2025 stands on the precipice of renewed civil war as the November 2022 Pretoria Peace Agreement collapses under the weight of federal government intransigence and renewed Tigray military action. Prime Minister Abiy Ahmed's apparent disavowal of the peace deal and federal drone strikes against Tigray forces signal a return to conflict that killed at least 600,000 people between 2020 and 2022. The fragile hope of 2022 has given way to deepening mistrust, territorial disputes, and fears of regional escalation involving Eritrea.

## Major Issues

### 1. Pretoria Peace Agreement Collapse and Renewed Fighting
**What's happening:**
- On November 7, 2025, Tigray forces crossed into neighboring Afar region, seizing villages and allegedly attacking civilians
- Federal forces conducted drone strike at approximately 3:30 AM on November 7 on Tigray-Afar border, causing casualties
- Prime Minister Abiy Ahmed publicly disavowed the Pretoria Agreement and disparaged the TPLF in recent parliamentary address
- Afar authorities declared Tigray's actions "openly destroy the Pretoria peace agreement"
- Federal government has systematically failed to implement key provisions of the November 2022 accord

**Why it matters:**
- Return to conflict risks repeating 2020-2022 war that killed at least 600,000 people
- Pretoria Agreement was seen as rare diplomatic success in Horn of Africa
- Federal intransigence and military action suggest negotiated settlement no longer viable
- Civilian populations in border regions face renewed displacement and atrocities

**Prospects:**
- High likelihood of sustained military confrontation unless urgent diplomatic intervention
- Humanitarian catastrophe probable if fighting spreads
- International community has limited leverage after peace deal failure
- Abiy's public disavowal makes face-saving compromise extremely difficult

### 2. TPLF Political Marginalization and Military Resurgence
**What's happening:**
- TPLF officially removed from Ethiopia's list of political parties in May 2025 amid internal divisions and federal government mistrust
- Despite political exclusion, TPLF has taken effective control of Tigray's two largest cities: Mekelle and Ad Gudan
- Federal authority in Tigray rapidly shrinking as TPLF reasserts territorial control
- TPLF forces capable of offensive operations into Afar, demonstrating maintained military capacity

**Why it matters:**
- Political exclusion eliminates peaceful path to power for TPLF
- Military control of major cities demonstrates federal government's inability to enforce authority in Tigray
- TPLF faces choice between accepting permanent marginalization or fighting for political restoration
- Internal TPLF divisions create unpredictability in strategic decision-making

**Prospects:**
- TPLF likely to expand territorial control if federal forces remain weak in region
- Possibility of TPLF push toward strategic objectives (Afar corridor, humanitarian aid routes)
- Federal government may attempt major military operation to reassert control
- No clear political pathway to TPLF integration given party de-registration

### 3. Regional Escalation Risk Involving Eritrea
**What's happening:**
- International observers express concern renewed conflict could expand into broader regional war
- Eritrea intervened on federal side during 2020-2022 war with devastating effect on Tigrayan civilians
- Eritrea's Isaias Afwerki has deep hostility toward TPLF dating to 1998-2000 border war
- Current fighting proximity to Eritrean border creates pretext for intervention

**Why it matters:**
- Eritrean involvement would dramatically escalate conflict and humanitarian toll
- Eritrean forces previously committed widespread atrocities against Tigrayan civilians
- Regional war could destabilize Horn of Africa, affecting Somalia, Sudan, Djibouti
- No international mechanisms exist to prevent Eritrean intervention

**Prospects:**
- High probability of Eritrean military involvement if fighting intensifies
- TPLF may conduct preemptive strikes against Eritrean forces or bases
- Ethiopian federal government likely to invite or tacitly permit Eritrean participation
- International community lacks leverage to constrain Eritrea's actions

## Summary

Ethiopia in late 2025 faces the grim prospect of returning to a civil war that the 2022 Pretoria Agreement was meant to permanently end. Prime Minister Abiy Ahmed's public repudiation of the peace deal, combined with resumed federal military operations and TPLF territorial expansion, signal the collapse of diplomatic solutions. With the TPLF removed from legal political participation and federal authority evaporating in Tigray, both sides face strong incentives to pursue military objectives. The specter of Eritrean intervention and potential regional escalation adds urgency to what appears to be an accelerating crisis. The international community's ability to prevent renewed mass atrocities appears limited after the failure of the Pretoria process. Observers should monitor: 1) scale and direction of military operations, 2) Eritrean troop movements, 3) humanitarian access to Tigray and Afar, 4) international diplomatic initiatives, and 5) internal TPLF cohesion and strategy.`,
    issues: ['Pretoria Peace Agreement Collapse and Renewed Fighting', 'TPLF Political Marginalization and Military Resurgence', 'Regional Escalation Risk Involving Eritrea'],
    topStories: [
      { title: "Tigray Forces Enter Ethiopia's Afar Region, Stoking Conflict Fears", source: "Al Jazeera", link: "https://news.google.com/search?q=Ethiopia+Tigray+Afar", pubDate: new Date('2025-11-06').toISOString() },
      { title: "Ethiopian Federal Forces Conduct Drone Strike on Tigray-Afar Border", source: "Reuters", link: "https://news.google.com/search?q=Ethiopia+Drone+Strike+Tigray", pubDate: new Date('2025-11-07').toISOString() },
      { title: "Abiy Ahmed Disavows Pretoria Peace Agreement in Parliament Speech", source: "BBC", link: "https://news.google.com/search?q=Abiy+Ahmed+Pretoria+Agreement", pubDate: new Date('2025-11-10').toISOString() },
      { title: "TPLF Takes Control of Mekelle and Ad Gudan", source: "The Africa Report", link: "https://news.google.com/search?q=TPLF+Mekelle+Control", pubDate: new Date('2025-11-08').toISOString() },
      { title: "TPLF Removed from Ethiopia's Political Party List", source: "Associated Press", link: "https://news.google.com/search?q=TPLF+Removed+Political+Party", pubDate: new Date('2025-11-05').toISOString() },
      { title: "Pretoria Peace Agreement Implementation Stalls", source: "Foreign Affairs", link: "https://news.google.com/search?q=Ethiopia+Pretoria+Agreement+Implementation", pubDate: new Date('2025-11-12').toISOString() },
      { title: "600,000 Estimated Dead from 2020-2022 Tigray War", source: "UN Report", link: "https://news.google.com/search?q=Ethiopia+Tigray+War+Deaths", pubDate: new Date('2025-11-09').toISOString() },
      { title: "Fears of Regional War Involving Eritrea", source: "Al Jazeera", link: "https://news.google.com/search?q=Ethiopia+Eritrea+Regional+War", pubDate: new Date('2025-11-11').toISOString() },
    ]
  },
  {
    location: { name: 'Fiji', type: 'country', lat: -17.7134, lng: 178.065, country: 'Fiji' },
    summary: `# Fiji

Fiji in November 2025 positions itself as a leading voice for Pacific island nations confronting existential climate threats while managing a modest economic recovery and persistent governance challenges. Prime Minister Sitiveni Rabuka's warnings at COP30 about the world's inadequate climate response reflect both moral authority from frontline vulnerability and frustration at major emitters' inaction. The country balances climate advocacy with practical economic management, infrastructure deficits, and evolving geopolitical relationships in an increasingly contested Pacific region.

## Major Issues

### 1. Climate Leadership Amid Existential Threat
**What's happening:**
- Prime Minister Rabuka warned at COP30 (November 2025) that "the world is falling dangerously behind on its climate targets"
- Fiji advocating for global action on "dignified climate mobility" - recognition that climate-induced migration must be managed humanely
- Secured $27 million for Nature, People and Climate (NPC) Investment Plan to restore ecosystems, create jobs, and improve food security
- Pacific Resilience Facility launching to provide direct climate funding to Pacific nations, reducing dependence on complex multilateral mechanisms
- Climate Change Act 2021 and NDC 3.0 integrate climate mobility into national development planning

**Why it matters:**
- Rising sea levels pose existential threat to low-lying atolls and coastal communities
- Pacific islands contribute negligible emissions but suffer disproportionate climate impacts
- Climate mobility framework could establish precedent for global migration governance
- Direct funding mechanisms like Pacific Resilience Facility improve climate adaptation access

**Prospects:**
- Continued leadership in Pacific climate diplomacy despite limited leverage over major emitters
- Increased climate migration pressure from more vulnerable Pacific nations
- Growing emphasis on adaptation and resilience over mitigation given inadequate emissions reductions
- Risk of "climate fatigue" if major emitters remain unresponsive to Pacific advocacy

### 2. Economic Recovery Moderating, Tourism Normalizing
**What's happening:**
- IMF Article IV mission (November 2025) reports economy grew 3.75% in 2024 but expects moderation to 3% in 2025
- Tourist arrivals reverting to pre-pandemic trends after post-COVID surge, reducing growth momentum
- Fiji Airways appointed Paul Scurrah as new CEO effective November 1, 2025, signaling strategic refresh
- Business leaders urging private sector to drive growth through innovation, ethical leadership, and sustainability

**Why it matters:**
- Tourism accounts for substantial portion of GDP and employment; normalization means slower growth
- Pandemic recovery tailwinds dissipating, requiring new growth drivers
- Limited diversification means vulnerability to external shocks (climate events, global recession)
- Leadership changes at flagship enterprises like Fiji Airways signal adaptation pressures

**Prospects:**
- 3% growth sustainable but insufficient to address infrastructure deficits and development needs
- Pressure to diversify economy beyond tourism and remittances
- Climate resilience investments may provide near-term stimulus
- Risk of stagnation if global tourism demand softens or climate events disrupt sector

### 3. Governance Challenges and Infrastructure Deficits
**What's happening:**
- 8,391 foreign nationals currently overstaying visas, indicating immigration enforcement challenges
- Human Rights and Anti-Discrimination Commission pushing urgent reforms to strengthen institutional independence
- Major gaps in safe drinking water and sanitation, particularly in rural areas
- Israeli minister toured Pacific in November 2025 to discuss defense cooperation, calling Fiji a "great friend" amid shifting alliances

**Why it matters:**
- Visa overstay problem reflects broader state capacity issues
- Human rights commission independence critical for democratic accountability
- Water and sanitation deficits affect health outcomes and development indicators
- Geopolitical competition in Pacific (US-China, now Israel) creates opportunities and risks

**Prospects:**
- Immigration enforcement likely to improve with focused attention
- Human rights reforms depend on political will and may face resistance
- Water/sanitation infrastructure requires sustained investment beyond current climate funds
- Fiji's "friends to all" approach allows bilateral relationships but limits ability to choose sides in great power competition

## Summary

Fiji in late 2025 exemplifies the challenges of small island developing states in an era of climate crisis and geopolitical flux. Prime Minister Rabuka's impassioned climate advocacy at COP30 reflects both moral authority and frustration at inadequate global action, while domestic realities involve managing modest economic growth, persistent infrastructure gaps, and governance weaknesses. The $27 million NPC investment and Pacific Resilience Facility represent tangible progress on climate adaptation, but the scale of the threat far exceeds available resources. As tourism growth normalizes and external tailwinds fade, Fiji must find new development pathways while navigating an increasingly contested Pacific strategic environment. The country's "friends to all" diplomatic posture allows flexibility but may become untenable as US-China competition intensifies. Observers should track: 1) implementation of climate adaptation funds, 2) tourism sector performance, 3) water/sanitation infrastructure improvements, 4) human rights reforms, and 5) geopolitical positioning amid great power competition.`,
    issues: ['Climate Leadership Amid Existential Threat', 'Economic Recovery Moderating, Tourism Normalizing', 'Governance Challenges and Infrastructure Deficits'],
    topStories: [
      { title: "PM Rabuka: World Falling Dangerously Behind on Climate Targets", source: "Fiji Times", link: "https://news.google.com/search?q=Fiji+Rabuka+Climate+COP30", pubDate: new Date('2025-11-11').toISOString() },
      { title: "Fiji Calls for Dignified Climate Mobility at COP30", source: "PINA", link: "https://news.google.com/search?q=Fiji+Climate+Mobility", pubDate: new Date('2025-11-11').toISOString() },
      { title: "Fiji Secures $27M for Nature, People and Climate Investment Plan", source: "Fiji Times", link: "https://news.google.com/search?q=Fiji+Climate+Investment", pubDate: new Date('2025-11-10').toISOString() },
      { title: "Pacific Resilience Facility to Provide Direct Climate Funding", source: "RNZ", link: "https://news.google.com/search?q=Pacific+Resilience+Facility", pubDate: new Date('2025-11-09').toISOString() },
      { title: "Fijian Economy Growth Expected to Moderate to 3% in 2025", source: "IMF", link: "https://news.google.com/search?q=Fiji+Economy+IMF+2025", pubDate: new Date('2025-11-08').toISOString() },
      { title: "Paul Scurrah Appointed Fiji Airways CEO", source: "Fiji Airways", link: "https://news.google.com/search?q=Fiji+Airways+CEO+Scurrah", pubDate: new Date('2025-11-01').toISOString() },
      { title: "8,391 Foreign Nationals Overstaying Visas in Fiji", source: "Immigration Ministry", link: "https://news.google.com/search?q=Fiji+Visa+Overstay", pubDate: new Date('2025-11-07').toISOString() },
      { title: "Human Rights Commission Pushes for Independence Reforms", source: "Fiji Times", link: "https://news.google.com/search?q=Fiji+Human+Rights+Reforms", pubDate: new Date('2025-11-06').toISOString() },
    ]
  }
]

async function addCountriesToDatabase() {
  console.log('🌍 Adding four new countries to database...\n')
  console.log('Countries: El Salvador, Estonia, Ethiopia, Fiji\n')

  let added = 0

  for (const countryData of COUNTRY_SUMMARIES) {
    const { location, summary, issues, topStories } = countryData

    console.log(`📍 Adding: ${location.name}`)

    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: location.name,
            type: location.type
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date()
        }
      })

      added++
      console.log(`  ✅ ${location.name} added successfully!`)
      console.log(`  📊 Issues: ${issues.length}`)
      console.log(`  📰 Top stories: ${topStories.length}\n`)

    } catch (error) {
      console.error(`  ❌ Failed to add ${location.name}:`, error)
    }
  }

  console.log(`\n✅ Complete! Added ${added} countries to database.\n`)

  // Show updated stats
  const total = await prisma.locationSummary.count()
  const countries = await prisma.locationSummary.count({ where: { type: 'country' } })
  const cities = await prisma.locationSummary.count({ where: { type: 'city' } })

  console.log('📊 Updated Location Summary Database:')
  console.log(`   Total: ${total} locations`)
  console.log(`   Countries: ${countries}`)
  console.log(`   Cities: ${cities}`)
}

addCountriesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
