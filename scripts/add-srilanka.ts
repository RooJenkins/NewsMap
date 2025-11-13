import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SRI_LANKA_SUMMARY = {
  name: 'Sri Lanka',
  type: 'country',
  lat: 7.8731,
  lng: 80.7718,
  country: 'Sri Lanka',
  summary: `# Sri Lanka

Three years after defaulting on $51 billion in debt and watching protesters storm the presidential palace, Sri Lanka is defying expectations: 4.8% GDP growth in the first half of 2025, tourism at an all-time high of 2.5 million visitors, and inflation down from 70% in 2022 to just 1.2% in August 2025. But the real shock came in September 2024, when Anura Kumara Dissanayake—a Marxist-leaning outsider from the National People's Power (NPP) coalition—won the presidency with 42%, then secured a two-thirds parliamentary supermajority in November, obliterating the Rajapaksa dynasty and Ranil Wickremesinghe's old guard in one electoral sweep. By August 2025, Wickremesinghe was arrested—the first Sri Lankan head of state ever detained—and seven major politicians face corruption charges as Dissanayake's anti-corruption crusade accelerates. The IMF's $2.9 billion bailout is halfway through, with $350 million released in the fourth tranche, but Dissanayake is renegotiating the terms: he wants tax relief for citizens crushed by austerity, while the IMF demands fiscal discipline and the 2025 budget targets 6.7% deficit against the IMF's preferred 5.2%. Meanwhile, geopolitical whiplash: India pulled Adani's $442 million wind farm project in February after Colombo tried to renegotiate, China's $3.7 billion Sinopec oil refinery moves forward at Hambantota (the port Beijing already controls on a 99-year lease), and Tamil reconciliation remains frozen as the 13th Amendment sits unimplemented for 35 years. Sri Lanka is navigating the impossible: satisfy the IMF, deliver populist promises, balance India and China, prosecute the old elite, and rebuild an economy still carrying 103.9% debt-to-GDP. It's working—for now. But Dissanayake's honeymoon won't last forever, and in November 2025, the contradictions are piling up.

## Major Issues

### 1. Dissanayake's Gamble: Renegotiating the IMF Deal Without Blowing It Up

**What's happening:**
- President Anura Kumara Dissanayake won the September 2024 presidential election with 42% of first-choice votes, defeating 37 other candidates including incumbent President Ranil Wickremesinghe (who placed third)
- In November 2024, Dissanayake's NPP coalition won a landslide parliamentary victory, securing 159 of 225 seats—a two-thirds supermajority and the second-highest seat proportion in Sri Lankan history
- The NPP won every district except Batticaloa, marking the first election since 1977 where a single party obtained a supermajority
- Dissanayake campaigned on renegotiating the IMF's Extended Fund Facility (EFF) agreement, particularly regarding taxation and subsidies, promising to ease the burden on ordinary Sri Lankans crushed by austerity
- The IMF's four-year program has reached its halfway mark with four tranches already released; the fourth tranche of approximately $350 million was approved in April 2025 based on satisfactory achievement of benchmarks
- In December 2024, Dissanayake announced Sri Lanka achieved flexibility with the IMF on its "rigid state revenue tax regime"—a key election promise delivered
- The 2025 budget, Sri Lanka's first under Dissanayake, targets a deficit of 6.7% of GDP, above the IMF's preferred 5.2% for 2025
- On November 7, 2025, Dissanayake delivered the second reading of the 2026 Appropriation Bill to Parliament, continuing his balancing act between IMF commitments and domestic priorities
- Tax revenues have increased by more than two-thirds as a share of GDP since the crisis, and gross official reserves reached $6.5 billion at end-March 2025
- Despite campaign rhetoric about "renegotiating key elements," no substantial changes that would derail the IMF program were made—Dissanayake chose pragmatism over revolution
- Economic growth expanded 5% in 2024, and 4.8% in the first half of 2025, exceeding World Bank and IMF projections
- Inflation declined to -4.2% in February 2025 (due to energy price adjustments, currency appreciation, and subdued demand), then turned positive at 1.2% in August 2025 as food prices rebounded

**Why it matters:**
- Dissanayake's election victory was a repudiation of Sri Lanka's entire political establishment: the Rajapaksas (who drove the country into bankruptcy), Wickremesinghe (who imposed IMF austerity without accountability), and the traditional parties that rotated power for decades. Voters wanted systemic change, and they gave Dissanayake a supermajority to deliver it
- The two-thirds parliamentary majority is extraordinary power: Dissanayake can amend the constitution, pass any legislation, and implement reforms without compromise. This is a mandate for transformation—but also a mandate to avoid the mistakes of past leaders who abused supermajorities
- Renegotiating the IMF deal was always a tightrope: push too hard, the program collapses, foreign reserves evaporate, and Sri Lanka is back in crisis. Don't push enough, and voters who elected you on anti-austerity promises feel betrayed. Dissanayake threaded the needle: secured tax relief flexibility without derailing the program
- The 6.7% deficit target (vs. IMF's 5.2%) is deliberate defiance—but calibrated defiance. Dissanayake is signaling: "We'll cooperate, but we won't sacrifice our people on the altar of fiscal orthodoxy." The IMF has grudgingly accepted this because the alternative (program collapse, default 2.0) is worse
- The $350 million fourth tranche release in April 2025 is proof the strategy works: the IMF isn't happy about the higher deficit, but growth is strong (4.8%), reserves are rebuilding ($6.5 billion), and the program stays on track. Dissanayake gets domestic political cover ("I stood up to the IMF") and international credibility ("Sri Lanka is a reliable partner")
- The tax revenue increase (up two-thirds as share of GDP) was the IMF's core demand—Wickremesinghe delivered it through brutal tax hikes that crushed the middle class. Dissanayake now has the revenue base to fund social spending without blowing up the deficit. This is the payoff for austerity, but Dissanayake gets the credit
- Inflation turning positive (1.2% in August) after eleven months of deflation is a red flag: food prices rising, energy prices rebounding, and private sector credit growth surging to 19.6% in July. The economy is overheating slightly—watch for the IMF to demand tighter monetary policy in late 2025 or early 2026
- The November 2026 budget speech is the next flashpoint: Dissanayake will have to balance populist spending (infrastructure, subsidies, public sector wages) against IMF discipline. Expect another 6-7% deficit target, more rhetorical clashes with the IMF, but ultimately continued cooperation
- The real test comes in 2026-2027: the IMF program ends in 2028, and Sri Lanka needs private capital markets reopened (issuing bonds, attracting FDI) to sustain growth. If Dissanayake's deficits spook investors, Sri Lanka stays locked out of markets, and the debt spiral resumes

**Prospects:**
- The IMF program will hold through 2026-2027, but expect escalating tensions: Dissanayake will push for more fiscal space, the IMF will demand faster consolidation, and every budget cycle will be a negotiation
- Watch the 2026 deficit outcome: if it exceeds 7% of GDP, the IMF might delay the next tranche, triggering a credibility crisis. If it stays around 6-6.5%, the program continues
- Private sector credit growth at 19.6% is unsustainable—expect the Central Bank to raise rates in Q1 2026 to cool demand, which will slow GDP growth from 4.8% to 3-3.5% by mid-2026
- Tourism hitting 2.5 million visitors (all-time high) in 2025 is a massive win, but vulnerability: global recession, regional instability (India-Pakistan tensions, Middle East escalation), or a major terrorist attack could tank arrivals
- Debt-to-GDP at 103.9% (down from 119.2% in 2022) is still dangerously high—Sri Lanka needs sustained 4-5% growth for a decade to bring it below 70%. Any growth slowdown, and debt becomes unsustainable again
- The real question: can Dissanayake maintain public support when austerity fatigue sets in? He's bought 18 months with anti-corruption arrests and IMF flexibility, but if poverty (double 2019 levels) doesn't decline and real wages don't recover, expect protests by late 2026

### 2. The Anti-Corruption Purge: Wickremesinghe's Arrest and the Assault on the Old Elite

**What's happening:**
- On August 22, 2025, former President Ranil Wickremesinghe was arrested and remanded—marking the first time in Sri Lankan history that a head of state has been taken into custody
- At least seven major political figures have been arrested as part of Dissanayake's anti-corruption drive, launched in response to public frustration and opposition criticism
- The arrests target politicians associated with decades of corruption, economic mismanagement, and the 2022 financial crash that forced President Gotabaya Rajapaksa to flee the country
- Dissanayake's campaign promise was to "combat corruption and reclaim the country's misappropriated assets," and the November 2024 parliamentary landslide vindicated his decision to call snap elections and secure backing for this agenda
- The International Crisis Group noted that Dissanayake "tapped into an anti-corruption strand among the Sri Lankan voters"—this wasn't just policy, it was the core of his electoral appeal
- The arrests are popular: the masses welcomed Wickremesinghe's detention and the broader crackdown, viewing it as long-overdue accountability for political elites who enriched themselves while ordinary Sri Lankans suffered
- Wickremesinghe held office from 2022-2024 after Gotabaya Rajapaksa resigned during the Aragalaya protest movement, and implemented the IMF's austerity program—but was seen as protecting the old elite rather than holding them accountable
- The Rajapaksa dynasty, which dominated Sri Lankan politics for two decades, has been decimated: Mahinda Rajapaksa remains an MP for the Sri Lanka Podujana Peramuna (SLPP), but his influence has "significantly waned" and he no longer holds top leadership
- As of November 2025, prosecutions are ongoing, with no high-profile convictions yet—the legal process is slow, and critics warn of potential political interference or show trials

**Why it matters:**
- Arresting a former president is a seismic shift in a country where political elites have operated with impunity for decades. Wickremesinghe, a fixture of Sri Lankan politics since the 1970s, symbolizes the old guard—his arrest signals that no one is untouchable under Dissanayake
- The timing (August 2025, nine months into Dissanayake's presidency) is strategic: early enough to show action, late enough to gather evidence and build cases. This isn't reactive—it's a planned assault on the ancien régime
- For voters who lived through the 2022 crisis—fuel queues, blackouts, food shortages, elderly people dying in pharmacy lines—seeing Wickremesinghe arrested is cathartic. It validates their suffering and confirms that Dissanayake is different from past leaders who promised change but delivered continuity
- The risk: if prosecutions become politicized (targeting only opposition figures, ignoring NPP-aligned elites), or if trials drag on without convictions, public cynicism returns. Sri Lanka has seen "anti-corruption drives" before (Rajapaksa used them against rivals), and voters are skeptical
- The Rajapaksa collapse is the end of an era: Mahinda Rajapaksa won the civil war in 2009, ruled as president until 2015, returned as prime minister under his brother Gotabaya (2019-2022), and built a political machine that seemed unbreakable. The NPP's November 2024 landslide obliterated it. This is generational political realignment
- Wickremesinghe's arrest also complicates international relations: he negotiated the IMF deal, managed debt restructuring with China and India, and was seen by Western governments as a "safe pair of hands." His detention sends a message: Dissanayake won't be constrained by what international partners prefer
- The danger of overreach: arresting political opponents can slide into authoritarianism. Dissanayake has a two-thirds majority, control of Parliament, and a popular mandate—but unchecked power has corrupted every Sri Lankan leader since independence. The question is: will he resist the temptation?

**Prospects:**
- Expect more arrests through late 2025 and into 2026: Dissanayake needs to show the crackdown is comprehensive, not selective. Watch for mid-level SLPP and UNP (Wickremesinghe's party) figures targeted next
- Convictions are the test: arrests are easy, securing corruption convictions against well-connected elites with expensive lawyers is hard. If Wickremesinghe and others walk free after long trials, Dissanayake's credibility collapses
- The judiciary is the wildcard: Sri Lanka's courts have been politicized for years (Rajapaksa-appointed judges, executive interference). Can Dissanayake reform the judiciary without appearing to stack it with NPP loyalists? This is the accountability paradox
- International pressure will mount if prosecutions look like political vendettas: Western donors (IMF, World Bank, EU) tolerate anti-corruption drives, but not show trials. If human rights groups flag due process violations, aid conditionality kicks in
- Watch for blowback from the old elite: the Rajapaksas, Wickremesinghe's UNP, and their business allies still control wealth, media outlets, and international connections. They'll fight back through courts, media campaigns, and potentially destabilization
- If Dissanayake succeeds in securing convictions and recovering stolen assets, he resets Sri Lankan politics permanently: accountability becomes the norm, not the exception. If he fails, this becomes another false dawn, and cynicism deepens

### 3. The India-China Balancing Act: Adani's Withdrawal and Hambantota's Reality

**What's happening:**
- In February 2025, India's Adani Green Energy withdrew from a $442 million, 484 MW renewable energy wind farm project in northern Sri Lanka (Mannar and Pooneryn), citing "Sri Lankan government efforts to renegotiate a previously awarded contract"
- The project, approved under Wickremesinghe, would have been the largest investment in the Northern Province (heavily Tamil) since the end of the civil war in 2009, with a 20-year power purchase agreement
- Adani's withdrawal followed Dissanayake's September 2024 campaign rhetoric questioning foreign mega-projects and demanding "better terms for Sri Lankans"—signaling that Colombo would scrutinize inherited deals
- Meanwhile, in January 2025, Dissanayake committed to finalizing a $3.7 billion Sinopec (Chinese state oil company) oil refinery project at Hambantota—the largest FDI in Sri Lankan history
- When completed, the Hambantota refinery will be Sinopec's first fully controlled overseas facility, located adjacent to Hambantota Port, which China Merchants Port Holdings has controlled since 2017 on a 99-year lease
- Hambantota Port was built with Chinese loans Sri Lanka couldn't repay, leading to the 2017 debt-for-equity swap—the textbook "debt trap diplomacy" case cited by Western critics
- India continues strategic investments: the Trincomalee energy hub (India-Sri Lanka-UAE tripartite agreement), a 135 MW Sampur solar project (50 MW by 2025), and the $91 million upgrade of a railway connecting north and south
- India is also building 60,000 homes for war-affected Tamils in Northern and Eastern provinces, and recently renamed the Jaffna Cultural Centre as the "Jaffna Thiruvalluvar Cultural Centre" after Tamil protests
- Sri Lanka aims to generate 70% of power from renewables by 2030 and 100% by 2050, making energy infrastructure a geopolitical battlefield
- China holds approximately 11% of Sri Lanka's $51 billion external debt; India and Japan hold smaller shares but are key creditors in the IMF-led debt restructuring framework

**Why it matters:**
- Adani's withdrawal is a diplomatic earthquake: India sees Sri Lanka as within its sphere of influence (just 30 km across the Palk Strait), and Adani Group is Modi's geopolitical tool—losing the $442 million wind project is a blow to New Delhi's Sri Lanka strategy
- Dissanayake's decision to renegotiate the Adani deal (prompting withdrawal) while greenlight the Sinopec refinery sends a clear message: Sri Lanka won't be dictated to by India or China, but it will balance them. This is strategic autonomy, not alignment
- For India, this is a nightmare scenario: China controls Hambantota Port (on Sri Lanka's southern coast, overlooking Indian Ocean shipping lanes), and now secures a $3.7 billion oil refinery next door. This is dual-use infrastructure—civilian today, potential naval logistics tomorrow
- The Tamil dimension complicates India's position: the Northern Province (where Adani's wind farm was planned) is Tamil-majority, and India positions itself as protector of Sri Lankan Tamils. Losing the largest Northern Province investment since 2009 undermines that narrative
- Hambantota is the "debt trap" in concrete: Sri Lanka borrowed $1.3 billion from China to build a port it couldn't afford, defaulted, and handed over 70% equity on a 99-year lease. Now China is doubling down with the refinery, creating a Chinese-controlled economic zone on Sri Lankan soil
- But the "debt trap" narrative is oversimplified: only 11% of Sri Lanka's debt is to China; the majority is International Sovereign Bonds (Western investors) and multilateral lenders. Sri Lanka's crisis was governance failure and revenue collapse, not just Chinese loans
- Sri Lanka's renewable energy targets (70% by 2030) are ambitious but require massive FDI—and energy is where India-China competition is fiercest. Every solar farm, wind project, and power plant is a zero-sum game for influence
- The Trincomalee energy hub (India-Sri Lanka-UAE) is India's counter to Hambantota: strategically located on the east coast, it positions India as the energy partner of choice. But Trincomalee is a concept; Hambantota is operational
- Tamil reconciliation remains the third rail: the 13th Amendment (devolving powers to Tamil-majority provinces) has been in the constitution for 35 years but never fully implemented. India demands it, successive Colombo governments resist, and Dissanayake shows no signs of breaking the deadlock

**Prospects:**
- The Sinopec refinery will proceed—Dissanayake needs the $3.7 billion investment, China needs the strategic foothold, and no amount of Indian pressure will stop it. Expect completion by 2027-2028
- India will retaliate through other channels: scaling back aid, delaying Trincomalee projects, or tightening visa rules for Sri Lankan workers (remittances are critical). New Delhi won't cut ties, but the relationship will cool
- Watch for India to court Tamil political parties directly: if Dissanayake won't implement the 13th Amendment, New Delhi will pressure through Tamil MPs and international advocacy. This risks inflaming Sinhalese nationalism and destabilizing Dissanayake's coalition
- Sri Lanka's balancing act is unsustainable long-term: India and China both demand loyalty, and neutrality frustrates both. Eventually, Dissanayake will have to choose—or accept that neither trusts him fully
- The renewable energy targets (70% by 2030) are achievable only with massive foreign investment, meaning Sri Lanka will remain dependent on India and China. The question is: who gets the bigger share?
- If U.S.-China tensions escalate (Taiwan crisis, South China Sea conflict), Sri Lanka gets caught in the crossfire: Washington will pressure Colombo to distance from Beijing, China will threaten economic retaliation, and India will demand alignment. Dissanayake's neutrality collapses
- The 99-year Hambantota lease is irreversible unless Sri Lanka buys back equity—which it can't afford. This is China's permanent foothold in the Indian Ocean, and India will spend decades trying to counter it

### 4. The Tamil Question: 35 Years, Zero Implementation

**What's happening:**
- The 13th Amendment to Sri Lanka's constitution, passed in 1987 following Indian pressure, promised devolution of powers to Tamil-majority provinces (Northern and Eastern) including control over police and land administration
- Despite being constitutional law for 35 years, the 13th Amendment has never been fully implemented—successive Sinhalese-majority governments resist, fearing separatism
- India continues to demand full implementation as a precondition for deeper Sri Lanka ties, viewing it as essential for Tamil minority rights and regional stability
- In recent years, India named a cultural center in Jaffna (Northern Province capital) after Tamil poet-philosopher Thiruvalluvar; initial omission of "Jaffna" from the name sparked Tamil protests, prompting India to rename it the "Jaffna Thiruvalluvar Cultural Centre"
- India is building 60,000 homes for war-affected Tamils in Northern and Eastern provinces and contributing to ambulance services and infrastructure—positioning itself as the protector of Tamil rights
- The civil war (1983-2009) killed an estimated 100,000 people, with the final months (2009) seeing mass atrocities as government forces crushed the Tamil Tigers; UN reports documented evidence of war crimes by both sides
- Tamil political parties (Tamil National Alliance, TNA) hold seats in Parliament but lack influence in Dissanayake's Sinhalese-dominated NPP coalition
- As of November 2025, Dissanayake has made no public commitment to implementing the 13th Amendment, and his nationalist base (historically skeptical of Tamil devolution) would resist any move perceived as conceding to separatism
- International pressure continues: UN Human Rights Council resolutions, diaspora Tamil advocacy, and periodic U.S./EU statements calling for accountability and reconciliation—but no enforcement mechanism

**Why it matters:**
- The 13th Amendment is the litmus test for Tamil reconciliation: without it, Tamils remain second-class citizens in provinces they dominate, perpetuating grievance and ensuring eventual conflict
- India's insistence on implementation isn't altruism—it's domestic politics. Tamil Nadu (India's southernmost state, 75 million people, ethnically Tamil) closely watches Sri Lanka, and no Indian government can afford to be seen as abandoning Sri Lankan Tamils. The 13th Amendment is India's minimum demand for political cover
- The civil war ended in 2009, but reconciliation hasn't begun: no accountability for war crimes, no truth commission, no reparations, and no power-sharing. The government declared "victory" and moved on; Tamils were left with mass graves and displacement
- For Dissanayake, implementing the 13th Amendment is political suicide: his Sinhalese nationalist voter base (which gave him a supermajority) views devolution as betrayal. The JVP (core of the NPP coalition) historically opposed the 13th Amendment as an Indian imposition. He can't deliver without fracturing his coalition
- But ignoring the Tamil question indefinitely guarantees instability: the Northern Province economy is stagnant (Adani withdrawal killed the largest investment), diaspora Tamils fund international advocacy against Colombo, and every UN session becomes a referendum on Sri Lanka's human rights record
- The Jaffna cultural center naming controversy (Thiruvalluvar vs. Jaffna Thiruvalluvar) illustrates the sensitivity: Tamils see every slight as erasure, and India uses cultural diplomacy to signal support. Even small gestures become geopolitical flashpoints
- The 60,000 homes India is building are more than aid—they're a visible Indian presence in Tamil areas, signaling to Colombo that New Delhi won't abandon the North and East. This is soft power with hard implications
- International accountability efforts (UNHRC resolutions, ICC pressure) keep the war crimes issue alive, but Sri Lanka has successfully avoided prosecution for 16 years. Dissanayake's anti-corruption drive targets economic crimes, not war crimes—conveniently avoiding military accountability

**Prospects:**
- The 13th Amendment won't be implemented under Dissanayake—he lacks political will, and his coalition would revolt. Expect symbolic gestures (ministerial visits to Jaffna, development funding) but no structural change
- India will continue low-level pressure: cultural diplomacy, economic aid to Tamil areas, and periodic statements, but won't escalate to sanctions or coercion. New Delhi needs Colombo stable, even if unresponsive
- Watch for Tamil diaspora escalation: international lobbying, funding opposition parties, and pushing for ICC referral. The diaspora (U.S., Canada, UK, Australia) is well-organized, wealthy, and politically connected
- If economic development in the North stalls (post-Adani withdrawal), Tamil frustration grows, raising the risk of renewed militancy. The Tamil Tigers are gone, but grievance-driven radicalization is a long-term threat
- The UN Human Rights Council will pass another resolution on Sri Lanka in 2026, Colombo will reject it, and the cycle continues—symbolic condemnation without consequences
- Reconciliation requires Sinhalese political leadership willing to confront nationalism, acknowledge war crimes, and share power. Dissanayake isn't that leader, and no one on the horizon is. This issue remains frozen for another generation

## The International Angle

Sri Lanka is a case study in strategic autonomy—or strategic exhaustion. Dissanayake inherited a country crushed by debt (103.9% of GDP), beholden to the IMF ($2.9 billion bailout), squeezed between India and China, and haunted by a civil war that never achieved reconciliation. His response: defy everyone just enough to preserve room for maneuver, but not enough to trigger retaliation.

For the IMF, Sri Lanka is a success story (so far): growth rebounding, reserves rebuilding, inflation controlled. But Dissanayake's 6.7% deficit target challenges fiscal orthodoxy, and the IMF privately worries that populist pressures will derail consolidation by 2026. If the program collapses, Sri Lanka defaults again, and the IMF's credibility in Asia takes a hit.

For India, Sri Lanka is slipping: China controls Hambantota, Sinopec locks in the $3.7 billion refinery, and Adani was shown the door. New Delhi still has influence (Trincomalee, Tamil aid, cultural diplomacy), but Dissanayake won't be India's client—and that terrifies South Block. The nightmare scenario: a Chinese naval base at Hambantota during a Taiwan crisis.

For China, Sri Lanka is a patient investment: Hambantota is already secured (99-year lease), the refinery cements economic dependence, and 11% of Sri Lanka's debt gives Beijing leverage in restructuring talks. China doesn't need Dissanayake to love them—just to accept that distancing from Beijing tanks the economy.

For the U.S., Sri Lanka is a secondary theater in great power competition: Washington wants Colombo tilted toward the Quad (U.S.-India-Japan-Australia), away from China's Belt and Road. But U.S. leverage is limited—no massive aid packages, no security treaties, just diplomatic pressure and occasional IMF influence. If Dissanayake chooses neutrality, Washington grumbles but accepts it.

For the Tamil diaspora, Sri Lanka is unfinished business: war crimes unpunished, the 13th Amendment unimplemented, and Tamils still marginalized. Diaspora lobbying targets Western governments (Canada, UK, EU), pushing for ICC referrals and aid conditionality. They won't win justice from Colombo, but they can make international engagement costly.

## The Bottom Line

Sri Lanka in November 2025 is defying the crisis narratives: 4.8% growth, 2.5 million tourists, IMF program on track, and Ranil Wickremesinghe in jail. Anura Kumara Dissanayake pulled off the improbable—win a supermajority, renegotiate the IMF without collapse, arrest the old elite, and maintain stability. But the contradictions are mounting: the 6.7% deficit exceeds IMF targets, inflation is creeping back (1.2% in August after eleven months of deflation), and private sector credit growth at 19.6% signals overheating. Poverty is still double 2019 levels, debt-to-GDP at 103.9% requires a decade of discipline to fix, and the labor market recovery is slow.

Geopolitically, Dissanayake is threading needles: China gets the $3.7 billion Sinopec refinery at Hambantota, India gets Trincomalee and Tamil aid, and Adani's $442 million wind farm gets scrapped to prove Sri Lanka won't be dictated to. The 13th Amendment remains unimplemented after 35 years, Tamil reconciliation is frozen, and India quietly fumes. The IMF gets growth and reserves, but Dissanayake won't accept fiscal orthodoxy, targeting 6.7% deficit for 2025 and likely 6-7% for 2026.

The anti-corruption purge is popular but risky: Wickremesinghe arrested in August (first head of state ever detained), seven major politicians facing charges, and the Rajapaksa dynasty reduced to irrelevance. But convictions are hard, the judiciary is politicized, and if trials become vendettas, international donors impose conditionality. If Dissanayake secures genuine accountability, he transforms Sri Lankan politics. If he fails, cynicism returns.

What to watch: the 2026 budget (will the deficit exceed 7% and spook the IMF?), inflation trends (1.2% in August could hit 3-4% by Q1 2026 if food prices surge), Wickremesinghe's trial (conviction or acquittal?), Sinopec refinery construction (completion by 2027-2028 cements China's Hambantota dominance), and Tamil province economic stagnation (post-Adani, will India or China fill the gap?). If tourism hits 2.5 million but a global recession tanks 2026 arrivals, reserves evaporate. If the IMF loses patience with deficits and delays tranches, the program unravels. If India-China tensions explode over Taiwan or the Maldives, Sri Lanka's neutrality collapses. Dissanayake has bought 18 months of stability through smart politics and economic luck. The question is: can he turn recovery into sustainable growth, or does Sri Lanka revert to the mean—crisis, bailout, austerity, repeat?`,
  issues: JSON.stringify([
    "Dissanayake's Gamble: Renegotiating the IMF Deal Without Blowing It Up",
    "The Anti-Corruption Purge: Wickremesinghe's Arrest and the Assault on the Old Elite",
    "The India-China Balancing Act: Adani's Withdrawal and Hambantota's Reality",
    "The Tamil Question: 35 Years, Zero Implementation"
  ]),
  topStories: JSON.stringify([
    {
      title: 'Sri Lanka Development Update 2025',
      source: 'World Bank',
      link: 'https://www.worldbank.org/en/country/srilanka/publication/sri-lanka-development-update-2025',
      pubDate: new Date('2025-04-23').toISOString()
    },
    {
      title: 'Landslide win for Sri Lanka\'s leftist coalition in snap general elections',
      source: 'Al Jazeera',
      link: 'https://www.aljazeera.com/amp/news/2024/11/15/sri-lankas-leftist-ruling-coalition-headed-for-landslide-election-win',
      pubDate: new Date('2024-11-15').toISOString()
    },
    {
      title: 'Will Former President\'s Arrest Mark a Break From Elite Impunity in Sri Lanka?',
      source: 'The Diplomat',
      link: 'https://thediplomat.com/2025/08/will-former-presidents-arrest-mark-a-break-from-elite-impunity-in-sri-lanka/',
      pubDate: new Date('2025-08-22').toISOString()
    },
    {
      title: 'Sri Lanka\'s 2025 Budget: Balancing IMF Commitments and Domestic Priorities',
      source: 'The Diplomat',
      link: 'https://thediplomat.com/2025/02/sri-lankas-2025-budget-balancing-imf-commitments-and-domestic-priorities/',
      pubDate: new Date('2025-02-01').toISOString()
    },
    {
      title: 'IMF Staff Team Concludes Visit to Sri Lanka',
      source: 'IMF',
      link: 'https://www.imf.org/en/News/Articles/2025/04/11/pr25102-srilanka-imf-staff-team-concludes-visit',
      pubDate: new Date('2025-04-11').toISOString()
    },
    {
      title: 'Sri Lanka gives provisional approval to two wind power projects by Adani Group',
      source: 'EconomyNext',
      link: 'https://economynext.com/sri-lanka-gives-provisional-approval-to-two-wind-power-projects-by-adani-group-98691/',
      pubDate: new Date('2025-02-15').toISOString()
    },
    {
      title: 'Renewable Energy In Sri Lanka: Is China Set To Return?',
      source: 'Eurasia Review',
      link: 'https://www.eurasiareview.com/24102025-renewable-energy-in-sri-lanka-is-china-set-to-return-analysis/',
      pubDate: new Date('2025-10-24').toISOString()
    },
    {
      title: 'Sri Lanka\'s Elusive Democratic Renewal',
      source: 'Carnegie Endowment',
      link: 'https://carnegieendowment.org/research/2025/11/sri-lanka-democracy-protest-one-year-later?lang=en',
      pubDate: new Date('2025-11-11').toISOString()
    }
  ]),
  storyCount: 22
}

async function addSriLanka() {
  console.log('Adding Sri Lanka to database...\n')

  try {
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: SRI_LANKA_SUMMARY.name,
          type: SRI_LANKA_SUMMARY.type,
          category: 'all'
        }
      },
      create: {
        name: SRI_LANKA_SUMMARY.name,
        type: SRI_LANKA_SUMMARY.type,
        country: SRI_LANKA_SUMMARY.country,
        lat: SRI_LANKA_SUMMARY.lat,
        lng: SRI_LANKA_SUMMARY.lng,
        category: 'all',
        summary: SRI_LANKA_SUMMARY.summary,
        issues: SRI_LANKA_SUMMARY.issues,
        topStories: SRI_LANKA_SUMMARY.topStories,
        storyCount: SRI_LANKA_SUMMARY.storyCount,
        updatedAt: new Date()
      },
      update: {
        summary: SRI_LANKA_SUMMARY.summary,
        issues: SRI_LANKA_SUMMARY.issues,
        topStories: SRI_LANKA_SUMMARY.topStories,
        storyCount: SRI_LANKA_SUMMARY.storyCount,
        updatedAt: new Date()
      }
    })

    console.log('✅ Sri Lanka added/updated successfully\n')
  } catch (error) {
    console.error('❌ Error processing Sri Lanka:', error)
    throw error
  }
}

addSriLanka()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
