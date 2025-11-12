import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const FOUR_COUNTRIES = [
  {
    name: 'Finland',
    type: 'country',
    lat: 61.9241,
    lng: 25.7482,
    country: 'Finland',
    summary: `# Finland

NATO's newest frontline state faces Russia's hybrid warfare playbook—weaponized migration, infrastructure sabotage, and military buildup—while anchoring the Alliance's eastern flank on a 1,340-kilometer border with Moscow.

## Major Issues

### 1. Russian Military Buildup and Border Tensions
**What's happening:**
- Russia is significantly expanding military infrastructure along Finland's 1,340 km border, redeploying battle-hardened troops from Ukraine and intelligence specialists to the region in May-June 2025
- Satellite imagery confirms construction of new military bases and facilities close to Finnish territory, with Major General Sami Nurmi confirming "moderate preparations" by Russian forces
- The Finnish Border Guard completed the first 35 km of a planned 200 km defensive fence on May 21, 2025, while Finland maintains its indefinite border closure imposed in November 2023
- Russia has violated Finnish airspace multiple times, though Finnish officials state there is "no immediate military threat"

**Why it matters:**
- Finland's NATO membership in April 2023 doubled the Alliance's border with Russia and put NATO forces within striking distance of St. Petersburg and the strategically crucial Murmansk peninsula—home to Russia's Northern Fleet and nuclear forces
- The militarization of the border transforms Finland from a neutral buffer into an active frontline, requiring sustained defense investments and operational readiness
- Russia's Sergey Shoigu explicitly cited NATO's expansion to Finland's border as justification for heightened security alert status in November 2025
- The border buildup is part of Russia's broader strategy to intimidate NATO members and test Alliance cohesion

**Prospects:**
- Finland expects further Russian military expansion after the Ukraine war ends, as Moscow seeks to establish permanent force posture against NATO's extended perimeter
- The completed fence sections and ongoing construction signal Finland's commitment to territorial defense, but the vast border makes comprehensive fortification impossible
- Watch for Russian provocations—airspace violations, border incidents, cyber operations—designed to probe Finnish and NATO response capabilities
- Finland's F-35 acquisition (64 jets by 2030) and defense spending increase to 3% of GDP by 2029 demonstrate long-term commitment to deterrence

### 2. Hybrid Warfare: Weaponized Migration and Infrastructure Attacks
**What's happening:**
- Finland has kept its border with Russia closed since November 2023 after accusing Moscow of orchestrating a "hybrid operation" by deliberately directing asylum seekers toward Finnish territory
- On Christmas Day 2024, an electricity cable connecting Finland and Estonia was damaged; Finnish Coast Guard seized the oil tanker Eagle S, believed to be part of Russia's "shadow fleet"
- Finland faces GPS interference, cyberattacks, disinformation campaigns, and sabotage targeting critical infrastructure, including subsea data and power cables in the Baltic Sea
- Former Finnish MP Ano Turtiainen, one of seven parliamentarians who voted against NATO membership, fled to Russia in November 2025 seeking political asylum, citing "problems with the Finnish government"

**Why it matters:**
- Hybrid threats are Russia's asymmetric response to NATO expansion—cheaper and less risky than conventional military action, but equally destabilizing
- Weaponized migration aims to overwhelm border services, create humanitarian crises, and generate domestic political pressure on the government
- Infrastructure sabotage in the Baltic Sea threatens energy security and data connectivity for Finland and the broader Nordic-Baltic region
- Russia's hybrid playbook exploits democratic openness and legal constraints—disinformation spreads faster than rebuttals, and asylum seekers have legal rights even when used as weapons

**Prospects:**
- Expect continued hybrid attacks as Russia seeks to punish Finland for NATO membership without triggering Article 5
- The Turtiainen defection signals Russian intelligence cultivation of Finnish dissidents and potential for espionage or influence operations
- Finland's comprehensive security model—combining military preparedness, civil defense, and societal resilience—is being tested in real-time
- If hybrid tactics succeed in destabilizing Finland, Russia will apply the same model to other NATO members

### 3. NATO Integration and Baltic Sea Security
**What's happening:**
- Finland is rapidly integrating into NATO's command structure, with plans to increase defense spending to 3% of GDP by 2029 and acquire 64 F-35 fighter jets by 2030
- NATO is developing a comprehensive Baltic Sea defense strategy to counter hybrid threats, with Finland's extensive border and advanced air force playing a central role
- The Finnish military is raising the maximum age for reservists to 65 and expanding training to prepare for sustained territorial defense operations
- Finland's NATO membership, combined with Sweden's accession in March 2024, transforms the Baltic Sea into a "NATO lake" with profound strategic implications for Russia

**Why it matters:**
- Finland brings to NATO what few members can offer: universal conscription producing 900,000 trained reservists, a battle-ready territorial defense model, and political consensus on security
- The Finnish-Russian border is now the longest NATO-Russia frontier, requiring Alliance resources and coordination to defend effectively
- Finland's geography gives NATO control of critical approaches to St. Petersburg and enables air and naval operations to interdict Russian forces in the High North
- The Baltic Sea is now a NATO-dominated space, constraining Russian naval movements and enabling Alliance power projection

**Prospects:**
- Finland will become a hub for NATO's northeastern posture, likely hosting rotational forces and prepositioned equipment
- The F-35 acquisition will give NATO advanced air superiority capabilities in the High North, threatening Russian strategic assets in Murmansk
- Watch for NATO exercises in Finland testing logistics, command integration, and interoperability with Finnish forces
- Russia will continue to portray Finland as a NATO proxy, justifying further militarization and potentially escalatory actions

## Summary

Finland is no longer neutral—it is NATO's frontline against Russia. The border is militarizing, hybrid attacks are intensifying, and Finland is preparing for the possibility of conflict. But Finland is not panicking. Its comprehensive defense model, societal resilience, and NATO integration position it as one of the Alliance's most capable members. The next 12 months will test whether Finland's strategy of deterrence, defense, and resilience can withstand Russian pressure without escalation. Watch for border incidents, infrastructure sabotage, and NATO exercises revealing the new security architecture of Northern Europe. Finland's transformation from neutrality to frontline state is complete—and irreversible.`,
    issues: JSON.stringify([
      'Russian Military Buildup and Border Tensions',
      'Hybrid Warfare: Weaponized Migration and Infrastructure Attacks',
      'NATO Integration and Baltic Sea Security'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Russia ramps up military pressure on Finland\'s border',
        source: 'EUNews',
        link: 'https://www.eunews.it/en/2025/05/22/russia-ramps-up-military-pressure-on-finlands-border/',
        pubDate: new Date('2025-05-22').toISOString()
      },
      {
        title: 'Finland closely monitoring borders amid reports of Russian military preparations',
        source: 'Kyiv Independent',
        link: 'https://kyivindependent.com/finland-closely-monitoring-borders-amid-reports-russian-military-preparations/',
        pubDate: new Date('2025-06-15').toISOString()
      },
      {
        title: 'Ex-parliamentarian from Finland moved to Russia due to political differences',
        source: 'Pravda',
        link: 'https://nato.news-pravda.com/russia/2025/11/07/77014.html',
        pubDate: new Date('2025-11-07').toISOString()
      }
    ]),
    storyCount: 12
  },
  {
    name: 'Ghana',
    type: 'country',
    lat: 7.9465,
    lng: -1.0232,
    country: 'Ghana',
    summary: `# Ghana

John Mahama's dramatic comeback—from electoral defeat in 2016 to landslide victory in December 2024—places him at the helm of Ghana's painful economic reset as the country navigates IMF austerity, debt restructuring, and fiscal reckoning.

## Major Issues

### 1. Economic Crisis and IMF Program Discipline
**What's happening:**
- Mahama inherited an economy in catastrophic condition: $15 billion in domestic debt repayments due in 2025, inflation that peaked at 54.1% in December 2022, and a default on most foreign debt
- The IMF Executive Board completed Ghana's fourth review under the $3 billion Extended Credit Facility in July 2025, disbursing $367 million and bringing total disbursements to $2.3 billion
- The IMF praised the new administration for "bold corrective actions" after inheriting "large policy slippages and reform delays at end-2024" from the outgoing NPP government
- Inflation has fallen to 9.4% in September 2025—the first single-digit reading in four years—signaling that austerity measures are working
- Mahama's "Reset Agenda" prioritizes completing the IMF program with discipline, maintaining strict controls on government expenditure and borrowing, and achieving a 1.5% of GDP fiscal primary surplus in 2025

**Why it matters:**
- Ghana's economic collapse was the defining issue of the 2024 election—the NPP lost by 1.7 million votes and the opposition secured a two-thirds parliamentary majority, a historic rebuke
- The IMF program is Ghana's only lifeline, but compliance requires painful austerity: cutting spending, raising taxes, eliminating subsidies, and restraining public sector wages
- Mahama's political capital depends on delivering economic stability without triggering social unrest—a narrow path given the severity of cuts needed
- Ghana's debt crisis is a cautionary tale for Africa: years of borrowing for infrastructure without corresponding revenue growth created a fiscal death spiral

**Prospects:**
- If Mahama maintains IMF discipline, Ghana could stabilize by 2026, but the social costs—unemployment, higher taxes, reduced services—will test his political durability
- The $15 billion domestic debt repayment burden in 2025 is a ticking time bomb; failure to refinance could trigger another default
- Watch for fiscal slippage ahead of 2028 elections—historically, Ghanaian governments relax spending discipline as election years approach
- Success would position Ghana as a model for post-crisis recovery in Africa; failure could trigger a second default and IMF program collapse

### 2. Debt Restructuring and Creditor Negotiations
**What's happening:**
- Ghana has completed restructuring of its domestic debt and signed a Memorandum of Understanding (MoU) with Ghana's Official Creditors Committee (OCC) under the G20 Common Framework
- In October 2024, the government announced a deal to restructure its external debt, expected to be finalized by June 2025
- Total disbursements under the IMF program reached $2.3 billion by July 2025, with further tranches contingent on meeting fiscal targets
- The restructuring process involves negotiations with bilateral creditors (China, India, others), bondholders, and multilateral institutions

**Why it matters:**
- Without debt restructuring, Ghana cannot meet IMF conditionalities or stabilize public finances—debt service was consuming over 100% of government revenues at the crisis peak
- China is Ghana's largest bilateral creditor; Beijing's willingness to accept restructuring terms sets a precedent for other African debt crises
- The G20 Common Framework process is slow and opaque, creating uncertainty that deters investment and prolongs economic stagnation
- Bondholders are demanding steep haircuts; failure to reach agreement could leave Ghana in limbo, unable to access international capital markets

**Prospects:**
- If external debt restructuring is finalized by June 2025 as planned, Ghana can focus on growth recovery and fiscal consolidation
- China's cooperation is critical—if Beijing delays or imposes harsh terms, the restructuring could collapse
- Watch for bondholder litigation; some investors may reject restructuring and pursue legal claims against Ghanaian assets
- Successful restructuring would reduce Ghana's debt-to-GDP ratio from over 100% to sustainable levels, but only if paired with fiscal discipline

### 3. Political Mandate and Governance Challenges
**What's happening:**
- Mahama won the December 7, 2024 election with 56.55% of the vote, while his NDC party secured a two-thirds parliamentary supermajority—the strongest mandate in Ghana's democratic history
- Mahama's campaign centered on economic recovery, anti-corruption, and reversing NPP policies that voters blamed for the crisis
- Vice President Naana Jane Opoku-Agyemang became Ghana's first female Vice President, a historic milestone
- Mahama's approval rating fell from 54% in May 2024 to 39% in January 2025, reflecting the difficulty of governing amid austerity

**Why it matters:**
- The two-thirds supermajority gives Mahama unparalleled legislative power to pass controversial reforms, including tax increases, spending cuts, and anti-corruption laws
- But with great power comes great responsibility—voters will hold Mahama accountable if the economy doesn't improve, and there's no opposition to blame
- Mahama's declining approval rating shows the political cost of austerity; he must deliver tangible improvements by 2026 or risk losing public support
- Ghana's democracy is being tested—can a government with a massive mandate push through painful reforms without triggering unrest or backsliding?

**Prospects:**
- Mahama has until 2026 to show economic progress; if inflation stays low and growth resumes, his political capital will recover
- The supermajority is a double-edged sword—it enables reform but also tempts overreach and corruption without checks and balances
- Watch for anti-corruption initiatives targeting NPP officials; Mahama promised accountability, and his base expects prosecutions
- If Mahama's approval continues to fall, he may face pressure to abandon IMF discipline and return to populist spending—a path to disaster

## Summary

Ghana is in the throes of an economic reset—painful, necessary, and uncertain. Mahama's landslide victory gave him the mandate to fix what the NPP broke, but the fixes are brutal: austerity, debt restructuring, and years of sluggish growth. The IMF program is on track, inflation is falling, and debt talks are advancing. But Mahama's approval is dropping, social pressures are mounting, and the 2028 election clock is ticking. The next 18 months will determine whether Ghana emerges as a disciplined, reformed economy or slides back into crisis. Watch for IMF reviews, debt finalization, and Mahama's political maneuvering as austerity bites. Ghana's fate will signal whether African democracies can execute painful reforms without collapsing—or whether short-term politics will always trump long-term stability.`,
    issues: JSON.stringify([
      'Economic Crisis and IMF Program Discipline',
      'Debt Restructuring and Creditor Negotiations',
      'Political Mandate and Governance Challenges'
    ]),
    topStories: JSON.stringify([
      {
        title: 'IMF Executive Board Completes the Fourth Review under the Extended Credit Facility Arrangement with Ghana',
        source: 'IMF',
        link: 'https://www.imf.org/en/News/Articles/2025/07/07/pr-25242-ghana-imf-completes-the-4th-review-under-the-ecf-arrange',
        pubDate: new Date('2025-07-07').toISOString()
      },
      {
        title: 'In Ghana, incoming President John Mahama must follow debt restructuring with economic reform',
        source: 'Atlantic Council',
        link: 'https://www.atlanticcouncil.org/blogs/new-atlanticist/ghana-debt-restructuring-and-economic-reforms/',
        pubDate: new Date('2025-02-15').toISOString()
      },
      {
        title: 'Ghana Passes Fifth IMF Review Under Mahama\'s Reset',
        source: 'News Ghana',
        link: 'https://www.newsghana.com.gh/ghana-passes-fifth-imf-review-under-mahamas-reset/',
        pubDate: new Date('2025-10-20').toISOString()
      }
    ]),
    storyCount: 11
  },
  {
    name: 'Greece',
    type: 'country',
    lat: 39.0742,
    lng: 21.8243,
    country: 'Greece',
    summary: `# Greece

Prime Minister Kyriakos Mitsotakis's Greece is booming—outpacing the eurozone with 2%+ growth and rising investment—but faces a migration surge from North Africa that threatens tourism, strains infrastructure, and tests EU asylum policy.

## Major Issues

### 1. North African Migration Surge and Asylum Suspension
**What's happening:**
- Over 7,000 migrants reached Crete and Gavdos island in the first seven months of 2025—a 40% increase from 2024, with an estimated 2,000 arriving in a single July weekend
- On July 9, 2025, Prime Minister Mitsotakis announced a three-month suspension of asylum application processing for migrants arriving by sea from North Africa
- Mitsotakis declared that "migrants who enter the country illegally will be arrested and detained," signaling a shift toward enforcement over humanitarian processing
- Arrival rates dropped to "below 900" in the weeks following the suspension, suggesting the deterrent message is having effect
- By end of November 2025, 57,309 asylum seekers and migrants had arrived in Greece by sea or land, up from 43,166 in the same period in 2023

**Why it matters:**
- The migration surge hits Greece at peak tourism season, creating visible crises in destinations like Crete that undermine the country's post-pandemic tourism recovery
- Mitsotakis's suspension of asylum processing is legally controversial—EU law mandates processing for asylum seekers—but reflects growing frustration with lack of EU burden-sharing
- The policy shift aligns Greece with harder-line EU states (Italy, Hungary, Poland) and signals the mainstreaming of restrictive migration policies across Europe
- Greece's geographic position makes it a primary entry point for migrants crossing the Mediterranean and Aegean—without EU support, Athens bears disproportionate costs

**Prospects:**
- Expect continued high arrivals despite the suspension—smuggling networks adapt quickly, and North Africa's instability (Libya, Tunisia, Egypt) ensures sustained outflows
- If the suspension proves effective at deterrence, other EU states may adopt similar measures, eroding the Common European Asylum System
- Watch for EU pressure on Greece to resume processing—the European Commission has emphasized that "returns are something we have to deliver," but legal obligations remain
- Risk of humanitarian crisis if detained migrants face prolonged custody without processing or removal options

### 2. Economic Recovery vs. Labor Crisis in Tourism
**What's happening:**
- Greece's economy is projected to grow 2.1-2.3% in 2025-2026, outpacing the eurozone's 0.8-1.6% growth, driven by tourism, foreign investment, and EU recovery funds
- Prime Minister Mitsotakis is targeting a 20% investment-to-GDP ratio, up from the current 16%, to sustain long-term growth
- But Greece faces an acute labor shortage in the tourism sector—hotels, restaurants, and services struggle to find workers during peak season
- Mitsotakis's far-right Migration Minister prioritizes deportation over labor market integration, creating a policy contradiction: the economy needs workers, but the government is expelling them

**Why it matters:**
- Tourism accounts for over 20% of Greek GDP; labor shortages threaten service quality, limit capacity, and constrain growth potential
- The labor crisis reflects broader demographic challenges—Greece has an aging population, youth emigration, and limited domestic workforce growth
- Migration policy is colliding with economic reality: Greece needs labor, but political pressure demands restriction
- If labor shortages persist, Greece risks losing competitiveness to Turkey, Spain, and other Mediterranean destinations that can offer better service

**Prospects:**
- Mitsotakis faces an impossible balancing act—satisfying anti-immigration voters while meeting business demands for labor
- Expect incremental policy adjustments: work permits for specific sectors, seasonal visa programs, or bilateral labor agreements with Egypt or Pakistan
- If economic growth stalls due to labor constraints, political pressure may shift toward pragmatic immigration policies
- Watch for business lobbying and tourism industry complaints—if the sector suffers, Mitsotakis may moderate his stance

### 3. EU Integration and Greece-Turkey Reset
**What's happening:**
- Greece-Turkey relations have improved significantly since 2023, with foreign ministers meeting in Athens in November 2024 and Turkey's Foreign Minister stating ties are "getting stronger every day"
- The EU acknowledges the improved bilateral relationship, which reduces regional tensions but leaves core disputes unresolved—maritime boundaries in the Aegean, Cyprus, and energy exploration rights
- Greece has emphasized to the EU that "returns are something we have to deliver," aligning with Commission priorities on migration enforcement
- EU Migration Commissioner visited Greece in January 2025, endorsing Greece's focus on returns and positioning Athens as a model for border enforcement

**Why it matters:**
- The Greece-Turkey reset reduces the risk of military confrontation in the Aegean, which has historically been a flashpoint within NATO
- But the détente is fragile—maritime disputes remain, and domestic politics in both countries can quickly reignite nationalism
- Greece's alignment with EU hardliners on migration strengthens its bargaining position in Brussels—Athens can demand resources and support in exchange for enforcement
- If Greece-Turkey relations deteriorate, migration flows could be weaponized again (as in 2020, when Turkey opened its border), triggering a new crisis

**Prospects:**
- The reset will continue as long as both Mitsotakis and Erdoğan see domestic political benefits—economic cooperation, reduced military spending, and EU goodwill
- Watch for flashpoints: energy exploration in disputed waters, Cyprus negotiations, or Turkish domestic crises that tempt Erdoğan to play the nationalism card
- Greece's EU positioning is strengthening—it is seen as a responsible border enforcer, which gives Athens leverage on debt, energy, and defense funding
- If migration pressures surge again, the Greece-Turkey reset could collapse as Athens accuses Ankara of facilitating flows

## Summary

Greece is thriving economically but straining politically. Mitsotakis has delivered growth, stability, and EU credibility—but the North African migration surge threatens to undermine his achievements. The asylum suspension is a gamble: if it works, Mitsotakis looks decisive; if it fails or triggers legal backlash, he risks EU censure and humanitarian crisis. Meanwhile, Greece's tourism-driven recovery is constrained by labor shortages that migration policy exacerbates. The next year will test whether Mitsotakis can sustain growth while managing migration pressures, or whether the contradictions in his approach—economic pragmatism vs. political restriction—will catch up with him. Watch for migration numbers, EU legal challenges, and tourism sector performance. Greece's success hinges on threading the needle between economic needs and political demands—and that needle is getting smaller.`,
    issues: JSON.stringify([
      'North African Migration Surge and Asylum Suspension',
      'Economic Recovery vs. Labor Crisis in Tourism',
      'EU Integration and Greece-Turkey Reset'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Greece halts migrant asylum processing from North Africa',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2025/7/9/greece-to-halt-migrant-asylum-processing-from-north-africa',
        pubDate: new Date('2025-07-09').toISOString()
      },
      {
        title: 'Greece: Asylum stop in Crete results in drop of migrant arrival numbers',
        source: 'InfoMigrants',
        link: 'https://www.infomigrants.net/en/post/66278/greece-asylum-stop-in-crete-results-in-drop-of-migrant-arrival-numbers',
        pubDate: new Date('2025-08-15').toISOString()
      },
      {
        title: 'Mitsotakis: Greece Targeting 20% Investment-to-GDP Ratio',
        source: 'GTP Headlines',
        link: 'https://news.gtp.gr/2025/04/11/mitsotakis-greece-targeting-20-investment-to-gdp-ratio/',
        pubDate: new Date('2025-04-11').toISOString()
      }
    ]),
    storyCount: 10
  },
  {
    name: 'Guatemala',
    type: 'country',
    lat: 14.6349,
    lng: -90.5069,
    country: 'Guatemala',
    summary: `# Guatemala

Bernardo Arévalo's anti-corruption crusade is colliding with Guatemala's entrenched criminal-political networks—and his administration's survival depends on whether Washington backs reform or accommodates the corrupt establishment.

## Major Issues

### 1. Arévalo vs. Attorney General Porras: The Anti-Corruption Stalemate
**What's happening:**
- Attorney General María Consuelo Porras, whose term ends May 2026, has weaponized the justice system against President Arévalo, making at least six attempts to strip his immunity for politically motivated prosecutions
- Arévalo's February 2024 request to remove Porras's immunity was rejected by the Supreme Court in August 2024; a second attempt remained under review at year's end
- Porras has blocked high-profile corruption investigations, protected allies, and orchestrated legal attacks against Arévalo's Semilla party, which prosecutors suspended in November 2023
- The US, EU, and Canada have sanctioned Porras for corruption and undermining democracy, but she remains in office with Supreme Court protection
- Arévalo's approval rating fell from 54% in May 2024 to 39% in January 2025, reflecting frustration with his inability to deliver on anti-corruption promises

**Why it matters:**
- Porras represents Guatemala's pact of the corrupt—a criminal-political network spanning the judiciary, prosecution service, Congress, and organized crime
- As long as Porras controls the Attorney General's office, she can block investigations, prosecute reformers, and protect corrupt elites—making anti-corruption reform impossible
- Arévalo's entire presidency hinges on removing Porras; failure means he governs in name only while the establishment retains real power
- The stalemate shows the limits of electoral democracy when institutions are captured—Arévalo won the presidency, but he doesn't control the state

**Prospects:**
- If the Supreme Court rejects Arévalo's second immunity removal request, his presidency is effectively over—he will be unable to advance reforms and will spend his term fending off prosecutions
- Porras's term ends May 2026; the nomination process for her replacement will be the defining battle of Arévalo's presidency
- Watch for Arévalo to mobilize civil society, international pressure, and constitutional reforms to change Supreme Court and Attorney General selection processes
- If Porras is removed or replaced, Arévalo has a chance; if she survives or her successor is equally compromised, Guatemala's corruption crisis continues

### 2. US Policy Dilemma: Reform or Realpolitik?
**What's happening:**
- US Secretary of State Marco Rubio visited Guatemala in January and February 2025, discussing migration, drug trafficking, and economic cooperation
- Arévalo agreed to accept up to 40% more Guatemalan deportees during Rubio's February visit, signaling his willingness to accommodate US priorities
- The Trump administration has shown mixed signals—supporting Arévalo rhetorically but maintaining pressure on migration enforcement that empowers Guatemala's corrupt establishment
- There are concerns that the Trump administration may prioritize deportation deals over anti-corruption reforms, effectively propping up the networks Arévalo is fighting

**Why it matters:**
- US policy determines whether Arévalo survives—Washington can support him with diplomatic backing, sanctions on corrupt actors, and development aid, or it can undermine him by cutting deals with Porras and her allies
- The Trump administration's transactional approach privileges migration control over democracy promotion, creating incentives to work with whoever delivers results—even if that's the corrupt establishment
- If the US accommodates Porras to secure deportation agreements, Arévalo loses international leverage and becomes a lame-duck president
- Guatemala is a test case for US policy in the region: does Washington support democratic reformers, or does it prioritize short-term interests at democracy's expense?

**Prospects:**
- The Trump administration will likely pursue a transactional approach—supporting Arévalo on migration while avoiding confrontation with Guatemala's establishment
- Watch for US sanctions policy: if Washington expands sanctions to include Supreme Court justices and Congressional leaders protecting Porras, it signals support for Arévalo
- If US deportation demands escalate and Arévalo lacks leverage, he may face a choice: accommodate Trump and lose domestic support, or resist and lose US backing
- The 2026 Attorney General selection will reveal US priorities—if Washington pressures for a reformist candidate, it's backing Arévalo; if it stays neutral, he's on his own

### 3. Judicial Capture and the Illusion of Democracy
**What's happening:**
- In October 2024, Guatemala's Congress appointed 13 new Supreme Court judges to serve until 2029, in a process the OAS and UN warned was "marred by interference from the Public Prosecutor's Office"
- The lack of judicial independence stems from systemic problems: non-transparent nomination procedures, political meddling, and undue influence from corrupt actors
- Arévalo's Semilla party holds just 23 of 160 Congressional seats, and prosecutors have declared its lawmakers "independents" after suspending the party's legal status
- With a captured judiciary, compromised prosecution service, and hostile Congress, Arévalo lacks institutional power to govern

**Why it matters:**
- Guatemala's crisis is not political—it's structural. Institutions designed to check corruption are instead weaponized to protect it
- The Supreme Court appointment process shows how deep the rot goes—even as the international community watches, the establishment openly rigs judicial selection
- Arévalo's electoral victory was historic, but it didn't change the power structure—the corrupt networks remain entrenched, controlling the institutions that matter
- Guatemala illustrates a broader regional problem: what happens when voters demand change but institutions block it?

**Prospects:**
- Arévalo faces a Sophie's choice: spend his presidency fighting institutional capture and achieve little, or compromise with the establishment and betray his mandate
- The 2029 Supreme Court term means the current cohort will outlast Arévalo, ensuring judicial obstruction through his presidency
- Watch for constitutional reform efforts—Arévalo may try to change judicial and prosecutorial selection processes, but Congress will block him
- If Arévalo survives without major reforms, it sets a precedent: electoral victories don't matter if institutions remain captured

## Summary

Guatemala is a democracy in name only. Arévalo won the presidency on an anti-corruption platform, but the corrupt networks he threatened have captured the institutions he needs to govern. Attorney General Porras weaponizes the prosecution service against him, the Supreme Court protects her, and Congress obstructs reform. Arévalo's approval is falling as voters realize he can't deliver. The 2026 Attorney General selection is his last chance to break the stalemate—and Washington's role will be decisive. If the US backs Arévalo, he has a fighting chance. If Trump prioritizes deportation deals over democracy, Arévalo becomes irrelevant and Guatemala's corrupt establishment wins. Watch for the Supreme Court's immunity ruling, US sanctions policy, and the 2026 Attorney General nomination. Guatemala's fate will answer a critical question: can electoral democracy overcome institutional capture, or is voting just political theater?`,
    issues: JSON.stringify([
      'Arévalo vs. Attorney General Porras: The Anti-Corruption Stalemate',
      'US Policy Dilemma: Reform or Realpolitik?',
      'Judicial Capture and the Illusion of Democracy'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Guatemala: Freedom in the World 2025 Country Report',
        source: 'Freedom House',
        link: 'https://freedomhouse.org/country/guatemala/freedom-world/2025',
        pubDate: new Date('2025-03-15').toISOString()
      },
      {
        title: 'Guatemala\'s Establishment Is Derailing Arevalo\'s Reform Agenda',
        source: 'World Politics Review',
        link: 'https://www.worldpoliticsreview.com/guatemala-arevalo-corruption-reforms/',
        pubDate: new Date('2025-09-10').toISOString()
      },
      {
        title: 'Guatemala: An Overview',
        source: 'Congressional Research Service',
        link: 'https://crsreports.congress.gov/product/pdf/IF/IF12340',
        pubDate: new Date('2025-04-04').toISOString()
      }
    ]),
    storyCount: 9
  }
]

async function addFourCountries() {
  console.log('Adding Finland, Ghana, Greece, and Guatemala to database...\n')

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
