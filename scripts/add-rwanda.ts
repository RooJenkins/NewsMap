import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const RWANDA_SUMMARY = {
  name: 'Rwanda',
  type: 'country',
  lat: -1.9403,
  lng: 29.8739,
  country: 'Rwanda',
  summary: `# Rwanda

While Paul Kagame's Rwanda posts 7.8% GDP growth and bills itself as Africa's Singapore, the M23 rebels he backs just seized Goma—eastern DRC's largest city, home to 2 million people—in January 2025, killing nearly 3,000. Now it's November, the ceasefire is holding (barely), and Rwanda faces a reckoning: UN experts have documented proof of Rwandan Defense Forces fighting alongside M23, SADC peacekeepers are trapped in their bases under M23 guns, and the U.S.-brokered Regional Economic Integration Framework (REIF) signed in July is already crumbling as Kinshasa accuses Kigali of bad faith. Domestically, Kagame won July's presidential election with 99.18% of the vote—his fourth term secured after changing the constitution—while opposition leader Victoire Ingabire was rearrested in June and remains detained on charges of "inciting public disorder." Tourism revenues hit $700 million, the New Bugesera International Airport is under construction, and Kigali Innovation City positions Rwanda as Africa's tech hub. But beneath the gleaming infrastructure and "Singapore of Africa" branding lies the same old Kagame playbook: authoritarian control, regional proxy wars, and an economy fueled by conflict minerals extracted from the very Congolese territories M23 controls. Rwanda is simultaneously East Africa's economic miracle and its most destabilizing force—and in November 2025, that contradiction is reaching a breaking point.

## Major Issues

### 1. The M23 Proxy War: Goma's Fall and the Ceasefire That Won't Hold

**What's happening:**
- On January 26, 2025, M23 fighters entered Goma, DRC's largest eastern city (population 2 million), and claimed control a day later—the most significant territorial gain for the Rwanda-backed rebels since their inception
- Nearly 3,000 people were killed during the battle for Goma, according to UN estimates, and over 500,000 civilians were displaced
- A firefight between M23 and SADC Mission forces (SAMIDRC—troops from South Africa, Malawi, Tanzania) during the Goma offensive killed 20 SADC soldiers
- Approximately 1,300 SAMIDRC troops remain confined to their bases in Goma and Sake under M23 watch after negotiating a localized ceasefire—they're effectively hostages
- On February 4, M23 declared a unilateral humanitarian ceasefire following international pressure, but sporadic clashes continued through the spring
- In July 2025, the DRC and Rwanda signed the U.S.-backed Regional Economic Integration Framework (REIF) under Trump administration pressure—the deal promised ceasefire verification mechanisms and regional trade integration
- On November 10, 2025, the Congolese government and M23 held the first monitoring meeting for the REIF ceasefire verification mechanism in Goma
- Throughout November, M23-aligned militia fighters captured several villages from pro-Congolese forces in Fizi and Mwenga highlands (South Kivu), while Wazalendo fighters repelled M23 attacks along the RP503 highway
- M23 conducted cordon-and-search operations in Masisi town (North Kivu) in early November, consolidating territorial control
- UN Group of Experts released reports in October 2025 documenting over 4,000 Rwandan Defense Forces (RDF) troops fighting alongside M23 inside DRC territory, with direct command integration between RDF officers and M23 leadership

**Why it matters:**
- The fall of Goma in January was a geopolitical earthquake: a regional city of 2 million, a major trading hub, and the symbolic heart of eastern DRC, now under de facto Rwandan control via M23 proxies
- Rwanda's proxy war strategy is working: M23 controls mineral-rich territories (coltan, gold, tin), Kigali extracts resources without international condemnation for direct invasion, and Kagame maintains plausible deniability
- The SADC peacekeepers confined to bases expose the impotence of regional security frameworks—1,300 troops sent to "contain M23" are now prisoners in all but name. South Africa, Tanzania, and Malawi invested soldiers, money, and credibility, and got nothing
- The REIF ceasefire deal brokered by Trump in July was supposed to be the breakthrough: U.S. diplomatic pressure, economic carrots (regional trade integration), and verification mechanisms. Four months later, fighting continues, and Kinshasa accuses Kigali of bad faith
- UN documentation of 4,000 RDF troops in DRC obliterates Rwanda's denial—this isn't just "supporting M23," it's direct military intervention. But the UN Security Council is paralyzed: France and UK want sanctions, U.S. under Trump prioritizes "stability" over accountability, and Russia/China block anything punitive
- The ceasefire monitoring meeting on November 10 was mostly theater: M23 shows up, Kinshasa shows up, but M23 keeps capturing villages in South Kivu the same week. The "ceasefire" is a diplomatic fiction
- For civilians, this is catastrophic: 500,000 displaced from Goma alone, mass graves documented by humanitarian groups, cholera outbreaks in refugee camps, and DRC's health system (already fragile) collapsing under the weight
- The November clashes in Fizi, Mwenga, and along RP503 show M23 is expanding south and west—away from North Kivu's traditional conflict zone and into new territories, threatening Bukavu and further destabilizing South Kivu

**Prospects:**
- The REIF ceasefire will collapse fully by early 2026: neither side has incentive to comply. M23 controls territory and resources, Kinshasa can't militarily defeat them, and Rwanda won't withdraw as long as minerals flow
- Expect escalation in South Kivu through December 2025 and into 2026: M23 is probing Wazalendo (pro-DRC militias) defenses, testing how far south they can push before SADC or Congolese forces respond
- SADC's credibility is shattered—the 1,300 trapped troops are a humiliation for Pretoria, Dodoma, and Lilongwe. Don't expect SADC reinforcements; more likely, quiet withdrawal negotiations to save face
- Watch Kinshasa's next move: President Félix Tshisekedi faces domestic pressure to "do something" about M23, but his military can't win. Options: escalate diplomatically (demand UN/AU intervention), arm more militias (fueling chaos), or accept de facto partition of eastern DRC
- International sanctions on Rwanda are possible but unlikely: U.S. under Trump prioritizes Kagame as a "stability partner," and China/Russia won't back Western sanctions. France and Belgium might impose unilateral measures, but Kigali can weather that
- The mineral extraction continues: coltan, gold, and tin from M23-controlled areas flow through Rwandan supply chains to global markets (smartphones, electronics). Companies claim "conflict-free" sourcing, but enforcement is nonexistent
- Humanitarian catastrophe deepens: 500,000 displaced from Goma, millions more across North and South Kivu, cholera, malnutrition, and sexual violence as weapons of war. Aid agencies are overwhelmed, funding is short, and access is blocked by M23
- If M23 pushes toward Bukavu (South Kivu's capital, 1 million people), the crisis escalates exponentially—refugee flows into Burundi, Rwanda, and Tanzania, regional destabilization, and possible SADC military re-engagement

### 2. Kagame's Fourth Term: 99.18% and the Ingabire Rearrest

**What's happening:**
- On July 15, 2024, Paul Kagame won his fourth presidential term with 99.18% of the vote—the highest margin in Rwanda's post-genocide history
- Only two candidates were allowed to run against Kagame: Frank Habineza (Democratic Green Party, 0.53%) and Philippe Mpayimana (independent, 0.32%)—both considered non-threatening by the regime
- Opposition leader Victoire Ingabire, who spent eight years in prison (2010-2018) for "conspiracy to undermine the government" and "genocide denial," was barred from running after a Kigali court rejected her request to expunge her criminal record in March 2024
- On June 19, 2025, Ingabire was rearrested during a trial targeting opposition figures and charged with "forming a criminal group" and "planning activities aimed at inciting public disorder"
- Seven members of Ingabire's unregistered party (DALFA-Umurinzi) were detained in October 2024 around "Ingabire Day" (October 14), when she planned to speak about political repression, suspicious deaths, disappearances, and abusive prosecutions
- Human Rights Watch documented that interrogators tortured detained opposition members to coerce confessions
- On September 10, 2025, the European Parliament adopted a resolution condemning Ingabire's arrest, calling for her immediate release, and expressing "serious concern at the pattern of abuse"
- Amnesty International stated in September 2025 that "Rwandan authorities continue to send a clear message that political opposition in the country will not be tolerated"
- Ingabire remains detained as of November 2025, with no trial date set

**Why it matters:**
- 99.18% is not an election—it's a coronation. Even in authoritarian states, leaders usually allow 5-10% dissent for plausibility. Kagame doesn't bother—he's signaling total control
- The constitutional changes Kagame pushed through in 2015 (allowing him to run for two more seven-year terms after his third term) were sold as "the people's will," but the 2024 election shows what that means: no real opposition, no debate, no choice
- Victoire Ingabire is the most prominent opposition figure Rwanda has—she's internationally known, has European Parliament backing, and represents a constituency (Hutu moderates) that Kagame fears. Her rearrest in June 2025, one year after the election, is deliberate: Kagame won, now he's cleaning house
- The charges against Ingabire—"forming a criminal group," "inciting public disorder"—are the same vague, elastic accusations used across authoritarian regimes (see Russia, Belarus, Egypt). They mean: "You challenged power, now you're a criminal"
- The October 2024 arrests of seven DALFA-Umurinzi members around "Ingabire Day" reveal the paranoia: Kagame's regime won't tolerate even a speech about repression. This isn't strength, it's fear
- Torture of opposition members, documented by HRW, is routine in Rwandan detention—this isn't a few bad apples, it's state policy
- The European Parliament resolution in September is symbolically important but practically useless—Kagame doesn't care about European condemnation as long as aid keeps flowing and Rwanda remains the West's "good governance" darling in Africa
- Amnesty's statement captures the reality: opposition in Rwanda is illegal in practice, even if the constitution pretends otherwise

**Prospects:**
- Ingabire will remain detained through 2026 at minimum—Kagame's pattern is long pre-trial detention, then a show trial, then conviction. She'll spend more years in prison
- Don't expect mass protests: Rwanda's surveillance state (neighborhood informants, mandatory "community policing," pervasive intelligence services) makes organizing impossible. Dissent is atomized, isolated, and crushed
- International pressure will continue (European Parliament, HRW, Amnesty) but won't move Kagame—he's calculated that Western governments prioritize "stability" and "development success" over human rights
- Watch for more opposition arrests in 2025-2026: Kagame's 99.18% victory and Ingabire's rearrest send a message, but enforcement requires ongoing crackdowns to maintain fear
- The Rwandan diaspora (especially in Europe and North America) will escalate protests and advocacy, but Kigali's reach is long—exiled dissidents face harassment, surveillance, and in some cases assassination (see Patrick Karegeya, killed in South Africa in 2014)
- If Western aid donors (U.S., UK, EU) condition funding on releasing Ingabire, Kagame might bend—but that's unlikely under Trump, who praises "strong leaders," and European governments are too invested in Rwanda's "development model"
- The July 2024 election established precedent: Kagame can run again in 2031 and 2038 under the 2015 constitutional changes. He's 67 now, so he could rule until age 81. The question isn't if he'll win, it's who succeeds him when he finally exits

### 3. The Economic Miracle Mirage: 7.8% Growth and Conflict Minerals

**What's happening:**
- Rwanda's economy grew 7.8% in Q1 and Q2 of 2025, maintaining the 8.9% growth rate achieved in 2024—making it one of Africa's fastest-growing economies
- Tourism revenues reached $700 million in 2025, with expectations of $750 million in 2026, and the sector now contributes 10.3% of national GDP (Frw 2.1 trillion)
- The New Bugesera International Airport (partnership with Qatar) is under construction, expected to handle 14 million passengers annually when completed in approximately 2027-2028
- Kigali Innovation City is operational, positioning Rwanda as an ICT hub—the information and communication sector grew 25% in 2025, driven by mobile money, fintech, and e-commerce
- Rwanda receives over 1.2 million visitors annually, and Kigali now ranks second in Africa for business events according to ICCA
- In November 2025, President Kagame visited Guinea to discuss the Simandou iron ore project (estimated 3-4 billion tonnes, largest untapped reserve globally), with first shipments scheduled for November 2025—Rwanda is positioning itself as a logistics and processing hub
- Real GDP is projected at 7.1% for full-year 2025, boosted by infrastructure investments including the airport and RwandAir expansion
- However, Rwanda's public debt is projected to peak at 80% of GDP in 2025, according to World Bank assessments
- The IMF and World Bank note that overcoming debt challenges requires greater private sector investment to enhance productivity and address infrastructure shortfalls

**Why it matters:**
- 7.8% growth is real, but the question is: where's the money coming from? Answer: minerals extracted from DRC territories controlled by M23
- UN Group of Experts reports document how conflict minerals (coltan, gold, tin, tungsten) flow from M23-controlled areas in eastern DRC through Rwandan supply chains, then into global markets. Rwanda's "mining sector growth" is partly laundering DRC resources
- Tourism at $700 million and Kigali as a business hub is impressive, but it's a small economy (total GDP around $13-14 billion). The tourism branding ("Africa's Singapore," "land of a thousand hills") masks the authoritarian reality underneath
- The New Bugesera International Airport and Kigali Innovation City are real investments, but they're also Potemkin projects—showpieces for international investors and tourists while rural Rwanda (90% of the population) remains impoverished
- The 25% ICT sector growth is legitimate: Rwanda has invested heavily in fiber optics, digital government services, and tech education. But this benefits Kigali elites and expats, not the subsistence farmers in rural provinces
- Kagame's visit to Guinea over Simandou iron ore shows Rwanda's regional ambitions: position as a logistics and processing hub for African resources, leverage relationships (Qatar for airport, China for infrastructure loans), and diversify beyond DRC conflict minerals
- 80% debt-to-GDP is dangerous—Rwanda is borrowing heavily to fund infrastructure (airport, roads, energy), betting that growth continues. If oil prices drop, tourism declines, or donor aid cuts (due to human rights concerns), fiscal crisis looms
- The World Bank's warning about "greater reliance on private sector investment" is code for: "Your government spending is unsustainable, and we can't keep lending." Austerity measures could follow, which risks political unrest

**Prospects:**
- Economic growth will slow in 2026-2027: 7.8% is unsustainable without continued conflict mineral flows, donor aid, and infrastructure debt. Expect 5-6% growth—still solid, but not "miracle" levels
- The conflict minerals pipeline is Rwanda's economic Achilles heel: if international pressure forces supply chain transparency (EU's Conflict Minerals Regulation, U.S. Dodd-Frank Section 1502), Rwandan mining sector revenues drop
- Tourism is vulnerable to reputational damage: if Ingabire's detention, M23 atrocities, or UN reports get sustained international media attention, "Visit Rwanda" branding takes a hit. Tourists don't want to vacation in a dictatorship
- The Bugesera Airport will be completed, but will it fill 14 million passenger capacity? Rwanda's population is only 13 million, so this is betting on regional hub status—but neighboring countries (Kenya, Tanzania, Ethiopia) have their own airports and ambitions
- Kigali Innovation City could succeed if Rwanda becomes East Africa's Singapore—but that requires rule of law, open markets, and political stability. Kagame offers two of three, and the missing one (political openness) may eventually tank investor confidence
- Watch the debt crisis: 80% debt-to-GDP with 90%+ of revenue going to debt servicing is a ticking time bomb. If global interest rates rise or China (Rwanda's largest creditor) demands repayment, Kigali faces austerity or default
- Private sector investment won't materialize at scale without political reform—investors talk about "stability," but Kagame's succession uncertainty (who follows him? peaceful transition or power struggle?) is a long-term risk
- The Simandou iron ore play is smart diversification, but Guinea is politically unstable (military junta since 2021), and Rwanda's logistics role depends on infrastructure (rail, ports) that doesn't exist yet. This is a 10-year bet, not a 2025 revenue stream

### 4. The UK Asylum Deal's Collapse: £715 Million for Four Migrants

**What's happening:**
- The UK-Rwanda Migration and Economic Development Partnership (MEDP), announced in April 2022, was designed to relocate UK asylum seekers to Rwanda for processing and permanent resettlement
- By the time the deal was scrapped in July 2024 (after Keir Starmer's Labour Party won the UK general election), the UK had spent £715 million—£270 million into Rwanda's Economic Transformation and Integration Fund, plus £134 million on IT systems alone
- Only four migrants were voluntarily relocated while the scheme was active—meaning the UK spent approximately £179 million per relocated person
- Starmer announced the Rwanda plan would be cancelled and replaced by the Border Security Command in July 2024
- Despite the scheme's cancellation, Rwanda retained the £270 million in economic development funds—money already transferred with no clawback provisions
- As of November 2025, the UK and Rwanda have not renegotiated the funds, and Kigali shows no intention of returning the money

**Why it matters:**
- £715 million for four migrants is one of the most expensive policy failures in British history—and Rwanda pocketed £270 million of it with zero accountability
- The deal was always about optics for the UK Conservative government (look tough on immigration) and cash for Rwanda (development funds, international legitimacy). Neither side cared about actual migration outcomes
- Rwanda's retention of £270 million after the scheme collapsed reveals the asymmetry: Kigali negotiated a no-strings-attached transfer into the Economic Transformation and Integration Fund, so cancellation doesn't trigger refunds
- For Kagame, this was a windfall: international legitimacy (partnership with the UK), cash infusion (£270 million), and reputation boost ("Rwanda as safe haven") with minimal obligations
- The £134 million spent on IT systems (biometric data transfer, visa processing platforms) is pure waste—systems built for a program that relocated four people
- The scheme's collapse under Labour doesn't erase the precedent: other European countries (Denmark, Austria) explored similar Rwanda-style outsourcing deals. If they proceed, Kagame will demand even more
- For UK-Rwanda relations, this is awkward: Britain spent £715 million, got nothing, and Rwanda kept the money. Future bilateral negotiations are poisoned by this failure

**Prospects:**
- The £270 million is gone—Labour won't pursue clawback because it would require admitting the Conservatives negotiated a terrible deal, which Labour wants to memory-hole
- Don't expect new UK-Rwanda migration deals under Starmer, but the precedent exists: if Conservative government returns post-2029, they might try again (with "lessons learned")
- Other European countries will watch this failure and either avoid Rwanda or demand better terms (money conditional on results, clawback provisions, independent monitoring)
- For Rwanda, this is a case study in extractive diplomacy: negotiate cash upfront, deliver minimal obligations, keep the money when it collapses. Expect Kagame to replicate this model with other wealthy countries facing migration pressures
- The reputational damage is asymmetric: UK looks incompetent (£715 million wasted), Rwanda looks opportunistic but not dishonest (they didn't break the contract, the UK cancelled). Kagame wins
- If European migration deals proceed, they'll likely involve smaller sums, more conditions, and trial phases—but Rwanda's leverage is high as long as Europe's migration politics remain toxic

## The International Angle

Rwanda is simultaneously East Africa's economic darling and its most destabilizing force—and the international community can't decide which narrative to prioritize. The U.S. under Trump sees Kagame as a "stability partner" and brokered the REIF ceasefire deal in July, but American influence is limited: Trump won't sanction Rwanda over M23 (too focused on China containment), and Kigali knows Washington needs African partners more than Africa needs Washington.

For the DRC, Rwanda is existential threat number one: M23 controls mineral-rich territories, 500,000 displaced from Goma alone, and Kinshasa's military can't win. Tshisekedi faces impossible choices: escalate diplomatically (demand UN/AU intervention that won't come), arm militias (fueling chaos), or accept de facto partition. SADC's humiliation—1,300 troops confined to bases—means regional security frameworks are broken.

For Europe, Rwanda is a paradox: the UK wasted £715 million on the asylum scheme, but development aid continues because Rwanda is the "good governance" success story donors need to justify Africa budgets. France and Belgium might impose sanctions over M23, but neither wants to blow up decades of post-genocide reconstruction investment. The European Parliament condemns Ingabire's arrest, but EU foreign policy is paralyzed by competing interests.

For China, Rwanda is a Belt and Road showcase: infrastructure loans, Bugesera Airport partnership (via Qatar), and access to Congolese minerals through M23 supply chains. Beijing doesn't care about Kagame's authoritarianism—they care about resources, market access, and geopolitical influence. If Western donors cut aid over human rights, China fills the gap.

For the UN, Rwanda is a credibility crisis: UN Group of Experts document 4,000 RDF troops in DRC, but the Security Council can't act (U.S./UK/France vs. Russia/China gridlock). MONUSCO (UN peacekeeping in DRC) is overstretched, underfunded, and ineffective—basically spectators to M23's advance.

## The Bottom Line

Rwanda in November 2025 is Paul Kagame's ultimate contradiction: 7.8% GDP growth funded partly by conflict minerals, 99.18% election victory achieved through repression, and regional destabilization masked by "Africa's Singapore" branding. M23's seizure of Goma in January killed 3,000, displaced 500,000, and trapped 1,300 SADC peacekeepers—but the February ceasefire and July REIF deal are diplomatic fictions that collapse with every November skirmish in South Kivu. Victoire Ingabire sits in detention since June, the European Parliament demands her release, and Kagame ignores them because he knows Western governments prioritize "stability" over accountability.

The economic miracle is real but fragile: tourism at $700 million, Kigali Innovation City, and 25% ICT growth, but 80% debt-to-GDP and 90%+ revenue going to debt servicing. The UK asylum deal collapsed after spending £715 million to relocate four people, and Rwanda kept £270 million. The Bugesera Airport will open in 2027-2028, Kagame visited Guinea in November to discuss iron ore logistics, and the World Bank warns about unsustainable borrowing.

What to watch: M23's next move in South Kivu (push toward Bukavu?), SADC's exit strategy (withdrawal or re-engagement?), Ingabire's trial (when does it start, and will it be another show trial?), and the debt crisis (can Rwanda sustain 80% debt-to-GDP if growth slows?). If conflict minerals supply chains face international scrutiny, Rwanda's mining revenues drop. If Kagame's succession remains unresolved, investor confidence wavers. If REIF collapses entirely, Trump's credibility in Africa is shot. Rwanda is the "good governance" success story donors need and the authoritarian proxy war state no one wants to confront—and that contradiction can't last forever.`,
  issues: JSON.stringify([
    "The M23 Proxy War: Goma's Fall and the Ceasefire That Won't Hold",
    "Kagame's Fourth Term: 99.18% and the Ingabire Rearrest",
    "The Economic Miracle Mirage: 7.8% Growth and Conflict Minerals",
    "The UK Asylum Deal's Collapse: £715 Million for Four Migrants"
  ]),
  topStories: JSON.stringify([
    {
      title: 'Congo War Security Review, November 10, 2025',
      source: 'Critical Threats',
      link: 'https://www.criticalthreats.org/briefs/congo-war-security-review',
      pubDate: new Date('2025-11-10').toISOString()
    },
    {
      title: 'Rwanda: What to Know About Guinea\'s Mega Iron Ore Project Kagame Is Visiting',
      source: 'AllAfrica',
      link: 'https://allafrica.com/stories/202511120091.html',
      pubDate: new Date('2025-11-12').toISOString()
    },
    {
      title: 'Rwanda-backed M23 strengthens its control over DRC\'s Goma',
      source: 'Al Jazeera',
      link: 'https://www.aljazeera.com/news/2025/1/29/rwanda-backed-m23-strengthens-its-control-over-drcs-goma',
      pubDate: new Date('2025-01-29').toISOString()
    },
    {
      title: 'M23 rebels declare unilateral ceasefire in DR Congo\'s war-torn east',
      source: 'France 24',
      link: 'https://www.france24.com/en/africa/20250204-m23-rebels-declare-unilateral-ceasefire-in-dr-congo-s-war-torn-east',
      pubDate: new Date('2025-02-04').toISOString()
    },
    {
      title: 'Rwanda: Opposition Leader Arrested',
      source: 'Human Rights Watch',
      link: 'https://www.hrw.org/news/2025/06/24/rwanda-opposition-leader-arrested',
      pubDate: new Date('2025-06-24').toISOString()
    },
    {
      title: 'European Parliament Demands Immediate Release of Victoire Ingabire in Rwanda',
      source: 'The Rwandan',
      link: 'https://www.therwandan.com/european-parliament-demands-immediate-release-of-victoire-ingabire-in-rwanda/',
      pubDate: new Date('2025-09-10').toISOString()
    },
    {
      title: 'Rwanda\'s Economy Grew by 7.8% in the First Quarter of 2025',
      source: 'Ministry of Finance Rwanda',
      link: 'https://www.minecofin.gov.rw/news-detail/rwandas-economy-grew-by-78-in-the-first-quarter-of-2025',
      pubDate: new Date('2025-04-01').toISOString()
    },
    {
      title: 'IT systems for ditched Rwanda asylum scheme cost £134m',
      source: 'Public Technology',
      link: 'https://www.publictechnology.net/2025/01/20/international-relations/it-systems-for-ditched-rwanda-asylum-scheme-cost-134m-report/',
      pubDate: new Date('2025-01-20').toISOString()
    }
  ]),
  storyCount: 18
}

async function addRwanda() {
  console.log('Adding Rwanda to database...\n')

  try {
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: RWANDA_SUMMARY.name,
          type: RWANDA_SUMMARY.type,
          category: 'all'
        }
      },
      create: {
        name: RWANDA_SUMMARY.name,
        type: RWANDA_SUMMARY.type,
        country: RWANDA_SUMMARY.country,
        lat: RWANDA_SUMMARY.lat,
        lng: RWANDA_SUMMARY.lng,
        category: 'all',
        summary: RWANDA_SUMMARY.summary,
        issues: RWANDA_SUMMARY.issues,
        topStories: RWANDA_SUMMARY.topStories,
        storyCount: RWANDA_SUMMARY.storyCount,
        updatedAt: new Date()
      },
      update: {
        summary: RWANDA_SUMMARY.summary,
        issues: RWANDA_SUMMARY.issues,
        topStories: RWANDA_SUMMARY.topStories,
        storyCount: RWANDA_SUMMARY.storyCount,
        updatedAt: new Date()
      }
    })

    console.log('✅ Rwanda added/updated successfully\n')
  } catch (error) {
    console.error('❌ Error processing Rwanda:', error)
    throw error
  }
}

addRwanda()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
