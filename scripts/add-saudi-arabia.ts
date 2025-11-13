import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SAUDI_ARABIA_SUMMARY = {
  name: 'Saudi Arabia',
  type: 'country',
  lat: 23.8859,
  lng: 45.0792,
  country: 'Saudi Arabia',
  summary: `# Saudi Arabia

Mohammed bin Salman's grand Vision 2030 is hitting reality—and reality is winning. In November 2025, The Line has been scaled back to just 1.5 miles (from 100 miles), NEOM costs have tripled beyond $1.5 trillion, and oil at $70 per barrel means Saudi Arabia is operating with only 60% of expected revenue. MBS wrote Vision 2030 assuming $100 oil forever; instead, the kingdom is pivoting hard toward AI and tech investments while scrambling to keep mega-projects from becoming mega-embarrassments. On the geopolitical front, Israel normalization remains blocked by Netanyahu's refusal to commit to Palestinian statehood, Houthi threats from Yemen are escalating again, and Russia just convinced Riyadh to halt OPEC+ production increases effective early 2026—leaving Trump's demand for cheaper oil dead in the water. Domestically, tourism is the one bright spot: 32 million visitors in summer 2025 (up 26%), $14.2 billion in tourist spending, and non-oil GDP now represents 56% of total economy. Economy Minister Faisal Alibrahim upgraded 2025 growth forecast to 5.1%, but here's the catch: the kingdom's priorities are shifting from futuristic mega-cities to whatever can show results before 2030. NEOM is becoming a sideshow, Vision 2030 is being quietly rewritten, and MBS is betting on AI partnerships and tourism to diversify away from oil—because the mega-projects he staked his legacy on are collapsing under their own weight.

## Major Issues

### 1. NEOM's Nightmare: The Line Shrinks to 1.5 Miles and Costs Triple

**What's happening:**
- The Line—NEOM's flagship mega-project, originally pitched as a 100-mile linear city housing 9 million people by 2045—has been dramatically scaled back to just 1.5 miles for the 2030 deadline
- NEOM's total cost estimate has tripled from the original $1.5 trillion projection in 2021, with the final price tag still climbing
- Engineering nightmares plague the project: basic infrastructure oversights (water, sewage, power distribution for a vertical city), structural challenges (building 500m-tall mirrored walls in the desert), and construction logistics (moving millions of tons of materials into remote Tabuk province)
- Reports in November 2025 describe NEOM as "quickly turning apocalyptic" and an "impending disaster," with workers describing chaotic management, constantly changing plans, and unrealistic timelines
- Saudi Economy Minister Faisal Alibrahim announced in late October 2025 that the kingdom is "reprioritizing a little bit towards sectors that need it the most, and today it's technology, artificial intelligence"
- Oil prices hovering around $70 per barrel in November 2025—well below the $100 per barrel MBS assumed when writing Vision 2030—mean Saudi Arabia is operating with only 60% of anticipated funds
- The government is pivoting away from long-term mega-projects toward "smaller projects with firm short-term completion dates" to show tangible results before 2030
- Moody's reported in October 2025 that Saudi Arabia's major projects are in "uneven progress," with significant delays and budget overruns across the Vision 2030 portfolio
- NEOM continues employing thousands of workers, and construction proceeds on the scaled-back 1.5-mile segment, but the original vision of 9 million residents in a 100-mile linear city is effectively dead

**Why it matters:**
- The Line wasn't just a construction project—it was the symbolic centerpiece of MBS's Vision 2030, the proof that Saudi Arabia could build a post-oil future through sheer ambition and cash. Scaling it back to 1.5 miles (less than 2% of the original length) is an admission of failure
- The cost tripling from $1.5 trillion exposes the recklessness of mega-project planning: nobody did proper feasibility studies, engineering assessments, or cost-benefit analyses before MBS greenlit the thing. This was hubris-driven development
- Oil at $70 versus $100 per barrel is a 30% revenue shortfall—and Vision 2030's entire financial model collapses. MBS bet on perpetually high oil prices to fund diversification away from oil. That bet failed
- The pivot to "AI and technology" is sensible (global tech boom, Saudi sovereign wealth fund has $700+ billion to invest), but it's also an admission that physical mega-projects are too expensive, too slow, and too risky
- "Smaller projects with firm short-term completion dates" means Vision 2030 is being quietly rewritten: instead of transformational mega-cities, expect incremental tourism infrastructure, tech campuses, and solar farms—achievable, but far less ambitious
- Moody's warning about "uneven progress" is credit rating agencies signaling concern: if Saudi Arabia can't deliver Vision 2030 projects on time and on budget, investor confidence drops, borrowing costs rise, and the whole diversification plan stalls
- For workers and contractors, this is chaos: constantly shifting priorities, canceled projects, unpaid invoices, and visa uncertainties. NEOM's reputation is toxic in global construction circles
- For MBS personally, this is legacy damage: he staked his legitimacy on Vision 2030, and now the flagship project is collapsing. The Line was supposed to make him a visionary; instead, it's making him look like a delusional spender

**Prospects:**
- The 1.5-mile Line segment will be completed by 2030 as a face-saving measure, but it'll be a glorified luxury resort for ultra-wealthy tourists, not the revolutionary linear city promised
- NEOM will survive in diminished form: Trojena (ski resort in the desert), Sindalah (Red Sea island resort), and smaller developments will proceed because they're achievable and marketable to tourists
- The 100-mile Line is dead—expect quiet abandonment post-2030, with the 1.5-mile segment rebranded as "Phase 1" and "future phases pending economic conditions"
- Vision 2030 will be rebranded around tourism, AI, and renewable energy—sectors where Saudi Arabia can show measurable progress (visitor numbers, tech partnerships, solar capacity) rather than unfulfillable mega-city promises
- Watch for more cost overruns and delays across the Vision 2030 portfolio (Qiddiya entertainment city, Red Sea Project, Diriyah Gate) as oil revenue shortfalls force budget cuts
- Investor confidence in Saudi mega-projects will decline, making future fundraising harder—bondholders and sovereign wealth fund partners want returns, and NEOM's trajectory suggests poor project management
- MBS will double down on AI and tech partnerships (partnerships with Google, Microsoft, OpenAI, Chinese tech firms) to pivot away from construction-heavy mega-projects and show "innovation" instead of "infrastructure"
- If oil prices stay below $80 through 2026-2027, expect further project cancellations and a broader Vision 2030 reset—the 2030 deadline will become symbolic rather than literal

### 2. Israel Normalization Blocked: Netanyahu, Palestinians, and Trump's Failure

**What's happening:**
- Saudi Crown Prince Mohammed bin Salman is resisting Trump's efforts to bring Saudi Arabia into the Abraham Accords, with Riyadh consistently stating that normalization requires "a definitive roadmap to an independent Palestinian state"
- In November 2025, there are "too many factors related to normalization that are in motion"—including elections in Israel, the conduct of the Trump administration, and potential Palestinian Authority elections
- Netanyahu's government has shown no willingness to commit to a two-state solution or halt settlement expansion in the West Bank, making Saudi demands politically impossible for Israel
- MBS is seeking a formal defense pact with the U.S. that implicitly includes Israel, to shield Saudi Arabia from Iran and its proxies (Houthis in Yemen, Hezbollah, Iraqi militias)
- The Houthis escalated threats against Saudi Arabia in early November 2025: Hezam al-Asad (Houthi political bureau member) accused the kingdom of violating ceasefire commitments on November 1
- Saudi Arabia fears a resurgence of Houthi missile and drone attacks—the 2019 attack on Aramco facilities in Abqaiq and Khurais knocked out 5% of global oil supply, causing oil prices to spike 15% overnight
- The U.S.-Saudi-Israel normalization deal remains stalled because MBS won't move without Palestinian statehood commitments, Netanyahu won't give those commitments, and Trump can't force either side
- Saudi Arabia and Israel share security concerns (Iran, Houthis, regional instability), but domestic politics in both countries block normalization: MBS can't sell a deal to the Saudi public without Palestinian concessions, and Netanyahu's coalition includes far-right parties that reject Palestinian statehood

**Why it matters:**
- Saudi-Israel normalization would be the biggest geopolitical shift in the Middle East since the 1979 Iran Revolution—it would isolate Iran, formalize the Sunni-Israeli alliance, and reshape regional security architecture. But it's not happening
- MBS's Palestinian statehood demand is both genuine (he needs domestic and Arab League legitimacy) and tactical (a bargaining chip for defense pacts and U.S. security guarantees). He won't budge because he doesn't have to—Saudi leverage is stronger than U.S. pressure
- Netanyahu's refusal to commit on Palestinians is political survival: his coalition includes Bezalel Smotrich and Itamar Ben-Gvir, far-right ministers who oppose any Palestinian state. If Netanyahu concedes, his government collapses
- Trump's failure to broker normalization exposes his limited influence: he can't force MBS (oil, arms sales, Iran containment) and can't force Netanyahu (U.S.-Israel alliance, domestic politics). The Abraham Accords were his signature foreign policy achievement; expanding them to Saudi Arabia was supposed to be his second-term triumph
- The Houthi threat is real and escalating: the November 1 threats, ongoing attacks on Red Sea shipping (targeting Israeli-linked vessels), and Yemen's strategic position (Bab-el-Mandeb Strait, 10% of global oil trade) give the Houthis asymmetric leverage over Saudi Arabia
- Saudi Arabia's defense pact demand shows MBS's strategy: he wants formal U.S. security guarantees (Article 5-style commitment) in exchange for normalization. This is a massive ask—it would obligate the U.S. to defend Saudi Arabia against Iran, essentially dragging America into another Middle East war
- For Israel, losing Saudi normalization is a strategic blow: it was supposed to legitimize Israel's regional role, provide intelligence-sharing on Iran, and open economic ties (tech partnerships, trade, investment). Without it, Israel remains isolated in the Arab world
- For the Palestinians, this stalemate is a rare win: MBS's insistence on statehood keeps the issue alive internationally, even as the Palestinian Authority weakens and Hamas remains in Gaza post-2024 war

**Prospects:**
- Normalization won't happen in 2025-2026: the political conditions (Netanyahu's coalition, MBS's domestic constraints, Trump's limited leverage) don't align
- If Netanyahu's government collapses and a centrist Israeli government takes power, normalization talks could restart—but that's unlikely given Israel's rightward political shift
- Watch for incremental Saudi-Israel cooperation below formal normalization: intelligence sharing on Iran, covert military coordination against Houthis, and economic ties through third parties (UAE, Bahrain)
- The Houthi threat will escalate if Saudi-Israel normalization appears imminent—expect missile attacks, Red Sea shipping disruptions, and Iranian-backed provocations to derail the deal
- MBS will use normalization as leverage with the U.S.: "We'll normalize if you give us defense pacts, advanced weapons (F-35s?), nuclear technology, and Palestinian concessions." This is a long-term negotiation, not a 2025 deal
- Trump's failure to deliver Saudi normalization undermines his Middle East credibility—he promised "the ultimate deal," and it's not happening. This weakens U.S. influence in the region
- For Iran, blocking Saudi-Israel normalization is a strategic victory: it prevents the Sunni-Israeli alliance from formalizing, keeps Saudi Arabia vulnerable to Houthi attacks, and maintains Iran's regional leverage
- If oil prices spike due to Houthi attacks or Iran tensions, Saudi Arabia's calculus changes: security concerns might override Palestinian demands, and MBS could normalize without statehood commitments—but that's a last resort, not current policy

### 3. Oil Policy Dilemma: Russia's OPEC+ Victory and Trump's Demand for Cheaper Oil

**What's happening:**
- In early November 2025, Russia successfully persuaded Saudi Arabia to halt OPEC+ production increases scheduled for early 2026
- Russia argued that adding to the existing oil glut would magnify economic damage from Trump's sanctions on Russia's energy industry
- Trump has consistently pressured Saudi Arabia to increase oil production to lower global prices, but Riyadh sided with Moscow—prioritizing OPEC+ cohesion and price stability over U.S. demands
- Oil prices in November 2025 hover around $70 per barrel—below Saudi Arabia's fiscal breakeven price (estimated at $80-85 per barrel) and far below the $100 per barrel MBS assumed for Vision 2030
- The OPEC+ alliance (Saudi Arabia, Russia, UAE, Iraq, Kuwait, Kazakhstan, others) has been managing production cuts since 2022 to prop up prices, but discipline is fraying as members cheat on quotas
- Saudi Arabia's oil production capacity is approximately 12 million barrels per day, but the kingdom is producing around 9 million barrels per day under OPEC+ quotas
- The U.S. is the world's largest oil producer (13+ million barrels per day from shale), reducing Saudi Arabia's leverage over global oil markets
- Trump's demand for lower oil prices conflicts with Saudi Arabia's fiscal needs: the kingdom needs higher prices to fund Vision 2030, balance the budget, and service debt
- Russia's influence within OPEC+ is growing because Moscow offers Saudi Arabia alignment on production policy, geopolitical coordination (Syria, Libya, Sudan), and a counterbalance to U.S. pressure

**Why it matters:**
- Saudi Arabia choosing Russia over Trump on OPEC+ production is a geopolitical signal: Riyadh won't automatically defer to U.S. demands, especially when its economic survival (oil revenue) is at stake
- Oil at $70 per barrel is a fiscal crisis for Saudi Arabia: the government's 2025 budget assumes $80-85 per barrel breakeven, meaning the kingdom is running deficits and burning through foreign reserves to cover spending
- The OPEC+ production halt protects oil prices in the short term, but it sacrifices market share: U.S. shale producers ramp up output when prices rise above $70, capturing customers Saudi Arabia used to serve
- Russia's leverage within OPEC+ stems from its willingness to enforce discipline (Moscow also needs higher oil prices to fund its war in Ukraine) and its alternative geopolitical partnerships (China, India, Iran)—Saudi Arabia has fewer options
- Trump's failure to secure Saudi production increases undermines his "America First" energy policy: he promised lower gasoline prices for U.S. consumers, but Saudi Arabia and Russia control supply, not Washington
- The OPEC+ alliance is fragile: members like Iraq, Nigeria, and Kazakhstan routinely exceed quotas, and the UAE is pushing for higher production. If the alliance collapses, oil prices crash—devastating Saudi fiscal planning
- For Vision 2030, sustained oil below $80 is catastrophic: the kingdom can't fund mega-projects, debt servicing consumes 90%+ of revenue, and austerity measures (subsidy cuts, tax increases) risk domestic unrest
- For global energy markets, this OPEC+ production halt signals continued tight supply—expect oil price volatility through 2026 as geopolitical tensions (Iran, Russia-Ukraine, Middle East instability) create supply shocks

**Prospects:**
- OPEC+ will hold production steady through early 2026, prioritizing price stability over market share—expect oil prices in the $70-80 range unless geopolitical shocks (Iran-Israel war, Russia-Ukraine escalation) spike prices
- Watch for OPEC+ defections: if oil prices stay low, members with weaker fiscal positions (Nigeria, Angola, Iraq) will cheat on quotas to maximize revenue, undermining the alliance
- Saudi-Russia coordination will deepen: both countries need higher oil prices, both face U.S. sanctions/pressure, and both benefit from OPEC+ cohesion. Expect joint production management through 2026-2027
- Trump's demand for lower oil prices will fail unless he releases U.S. Strategic Petroleum Reserve (SPR) or incentivizes U.S. shale expansion—but higher U.S. production takes months to ramp up, and SPR releases are politically risky ahead of 2026 midterms
- If oil drops below $65, Saudi Arabia faces a fiscal crisis: budget cuts, Vision 2030 project cancellations, subsidy reductions, and potential borrowing from international markets—testing investor confidence
- If oil spikes above $90 (due to Iran tensions, Houthi attacks, or Russia-Ukraine escalation), Saudi Arabia's fiscal position improves, but global economic slowdown reduces demand—creating a self-correcting cycle
- Long-term, Saudi Arabia's oil leverage is declining: renewable energy expansion, electric vehicle adoption, and U.S. shale production reduce global dependence on Middle Eastern oil. MBS knows this, which is why Vision 2030 exists—but the transition is failing
- For Russia, this OPEC+ victory is strategic: it demonstrates influence over Saudi Arabia, undermines U.S. energy dominance, and protects Russian oil revenues despite sanctions

### 4. The Tourism Triumph: 32 Million Visitors, $14.2 Billion, and Non-Oil GDP at 56%

**What's happening:**
- The "Saudi Summer" 2025 program attracted more than 32 million domestic and international visitors, representing a 26% increase compared to summer 2024, with tourist expenditure reaching SAR 53.2 billion ($14.2 billion)
- Tourism revenues reached $700 million in 2025, with expectations of $750 million in 2026, and the sector now contributes 10.3% of national GDP (Frw 2.1 trillion)
- According to the UN World Tourism Organisation, Saudi Arabia recorded the world's highest growth in international tourism spending during the first quarter of 2025
- Saudi Arabia is working to make tourism its second-largest economic sector, with Deputy Minister of Tourism Mahmoud Abdulhadi announcing this goal during the 26th session of the UNWTO General Assembly
- Tourism targets set for 2030 have been achieved years in advance, prompting the kingdom to increase its target to 150 million visitors by the end of the decade
- The kingdom has 29 airports and more than 70,000 km of roads, with a developing rail network to strengthen its appeal to visitors
- Non-oil activities now represent 56% of total real GDP in Saudi Arabia, demonstrating significant progress in economic diversification efforts under Vision 2030
- Economy Minister Faisal Alibrahim upgraded the 2025 growth forecast to 5.1% real GDP growth, driven by tourism, ICT sector expansion (25% growth), and infrastructure investments
- Kigali now ranks second in Africa for business events according to ICCA, and Saudi Arabia is positioning itself as a regional hub for conferences, sports events (Formula 1, LIV Golf, boxing matches), and cultural festivals

**Why it matters:**
- 32 million visitors and $14.2 billion in tourism revenue is real, tangible diversification—this is Vision 2030 actually working, unlike NEOM's collapsed promises
- Tourism's 26% year-on-year growth proves Saudi Arabia's strategy is viable: relaxing visa restrictions (e-visas for 49 countries), investing in heritage sites (Al-Ula, Diriyah), and hosting mega-events (Formula 1, Riyadh Season festivals) attract visitors
- Non-oil GDP at 56% of total economy is a milestone: for decades, oil was 70-80% of GDP, and the kingdom was trapped in resource dependence. This shift is structural, not cyclical—it reflects real economic transformation
- The 5.1% GDP growth forecast (up from earlier projections) shows the diversification strategy is delivering macroeconomic results, not just PR wins
- Saudi Arabia's tourism branding has shifted from "religious tourism only" (Mecca, Medina for Muslim pilgrims) to "global destination" (beaches, mountains, archaeology, sports, entertainment)—this opens the kingdom to non-Muslim tourists, massively expanding the addressable market
- The UN World Tourism Organisation's recognition of Saudi Arabia as the world's highest growth market legitimizes the kingdom's tourism push and attracts international hotel chains, airlines, and tour operators
- The infrastructure investments (airports, roads, rail, hotels) are tangible and deliverable, unlike NEOM's speculative mega-projects—this is "Vision 2030 realism" replacing "Vision 2030 hubris"
- For MBS, tourism is the policy win he desperately needs: it's measurable (visitor numbers, revenues), achievable (infrastructure is being built), and politically safe (no ideological backlash from conservatives, unlike social reforms)
- The 25% ICT sector growth shows Saudi Arabia's tech pivot is also working: mobile money, fintech, e-commerce, and digital government services are expanding, creating jobs and attracting investment

**Prospects:**
- Tourism will continue growing at 15-20% annually through 2026-2027, driven by infrastructure expansion (New Bugesera International Airport, Red Sea resorts), visa liberalization, and mega-event hosting
- The 150 million visitors by 2030 target is achievable if Saudi Arabia maintains current growth rates—but it requires sustained investment, political stability, and global economic growth (recessions reduce discretionary travel)
- Watch for reputational risks: if Jamal Khashoggi-style scandals resurface, international tourism takes a hit. "Sportswashing" criticisms (hosting Formula 1, golf, boxing to distract from human rights abuses) haven't deterred tourists yet, but sustained NGO campaigns could
- The Red Sea Project (50+ resorts on Saudi Arabia's western coast) will be a major tourism driver post-2026, positioning the kingdom as a luxury beach destination competing with Maldives, Seychelles, and Dubai
- Religious tourism (Hajj, Umrah pilgrimages) will remain the foundation: 10-15 million Muslim pilgrims annually provide steady, recession-proof tourism revenue
- Business tourism (conferences, corporate events) will grow if Saudi Arabia successfully positions itself as a regional hub—but Dubai and Abu Dhabi are entrenched competitors with better infrastructure and liberal social environments
- Domestic tourism (32 million visitors in summer 2025 were mostly Saudi nationals) shows cultural shift: Saudis are vacationing domestically rather than flying to London, Paris, or Dubai, keeping tourism spending within the kingdom
- Tourism jobs are being created (hospitality, transport, entertainment), but they're low-wage service sector jobs—this doesn't replace high-paying oil industry employment, so Vision 2030's "job creation" goals remain challenging
- If oil prices stay low and Vision 2030 mega-projects get canceled, tourism becomes even more critical to economic diversification—expect MBS to double down on tourism investments

## The International Angle

Saudi Arabia is navigating a treacherous geopolitical landscape: courting Trump for defense pacts while rejecting his oil production demands, resisting Israel normalization until Netanyahu commits on Palestinians, managing OPEC+ tensions with Russia's growing influence, and positioning itself as the Middle East's tourism and tech hub. For the U.S., Saudi Arabia is a frustrating ally: Riyadh won't lower oil prices, won't normalize with Israel without Palestinian concessions, and won't cut ties with China (Belt and Road investments, Huawei 5G, yuan-denominated oil sales). Trump's leverage is limited—military aid and Iran containment aren't enough to override Saudi self-interest.

For Israel, Saudi normalization remains the holy grail, but Netanyahu's domestic politics block the path: his far-right coalition rejects Palestinian statehood, and MBS won't move without it. The result is strategic stalemate, with incremental covert cooperation (intelligence sharing, Iran containment) but no formal breakthrough.

For Iran, Saudi Arabia is both adversary and negotiation partner: Riyadh and Tehran restored diplomatic relations in 2023 (China-brokered deal), but tensions remain high over Yemen (Houthi attacks), Iraq (militia influence), and regional power competition. The Houthis' November 2025 threats show Iran's proxies can still destabilize Saudi Arabia, giving Tehran leverage.

For China, Saudi Arabia is a Belt and Road anchor: infrastructure investments, yuan-denominated oil sales, Huawei 5G networks, and AI partnerships. Beijing offers Saudi Arabia an alternative to U.S. dependence—no human rights lectures, no Israel normalization demands, just trade and investment.

For Russia, OPEC+ coordination with Saudi Arabia is existential: Moscow needs oil above $70 to fund the Ukraine war and domestic spending. Russia's early November victory (convincing Riyadh to halt production increases) shows Riyadh values OPEC+ cohesion over U.S. pressure.

## The Bottom Line

Saudi Arabia in November 2025 is a kingdom in transition—but not the transition MBS promised. The Line has shrunk to 1.5 miles, NEOM costs have tripled, and Vision 2030 mega-projects are being quietly shelved. Oil at $70 per barrel (not the $100 MBS assumed) means 40% less revenue, forcing a pivot from futuristic cities to achievable wins: tourism (32 million visitors, $14.2 billion revenue, 26% growth), AI investments, and economic diversification (non-oil GDP at 56%). Israel normalization is blocked by Netanyahu's refusal on Palestinians, Houthi threats from Yemen are escalating, and Russia just convinced Riyadh to halt OPEC+ production increases—ignoring Trump's demand for cheaper oil.

The economic numbers are real: 5.1% GDP growth, tourism sector booming, and ICT growing 25%. But the fiscal math is brutal: oil below breakeven ($80-85), Vision 2030 projects canceled or delayed, and debt servicing consuming 90%+ of revenue. MBS is betting on tourism and tech to save his legacy, because the mega-projects he staked everything on are collapsing.

What to watch: Will The Line's 1.5-mile segment get completed by 2030, or will it become another abandoned desert monument? Can Saudi Arabia maintain tourism growth if geopolitical tensions (Iran, Houthis, Israel-Palestine) escalate? Will OPEC+ hold together, or will defections crash oil prices and trigger Saudi fiscal crisis? Will Netanyahu's government collapse, opening space for normalization? Will Trump force MBS to choose between OPEC+ and U.S. alliance? The answers will define whether Vision 2030 is remembered as a transformational success or a cautionary tale of hubris.`,
  issues: JSON.stringify([
    "NEOM's Nightmare: The Line Shrinks to 1.5 Miles and Costs Triple",
    "Israel Normalization Blocked: Netanyahu, Palestinians, and Trump's Failure",
    "Oil Policy Dilemma: Russia's OPEC+ Victory and Trump's Demand for Cheaper Oil",
    "The Tourism Triumph: 32 Million Visitors, $14.2 Billion, and Non-Oil GDP at 56%"
  ]),
  topStories: JSON.stringify([]),
  storyCount: 0
}

async function addSaudiArabia() {
  console.log('Adding Saudi Arabia to database...\n')

  try {
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: SAUDI_ARABIA_SUMMARY.name,
          type: SAUDI_ARABIA_SUMMARY.type,
          category: 'all'
        }
      },
      create: {
        name: SAUDI_ARABIA_SUMMARY.name,
        type: SAUDI_ARABIA_SUMMARY.type,
        country: SAUDI_ARABIA_SUMMARY.country,
        lat: SAUDI_ARABIA_SUMMARY.lat,
        lng: SAUDI_ARABIA_SUMMARY.lng,
        category: 'all',
        summary: SAUDI_ARABIA_SUMMARY.summary,
        issues: SAUDI_ARABIA_SUMMARY.issues,
        topStories: SAUDI_ARABIA_SUMMARY.topStories,
        storyCount: SAUDI_ARABIA_SUMMARY.storyCount,
        updatedAt: new Date()
      },
      update: {
        summary: SAUDI_ARABIA_SUMMARY.summary,
        issues: SAUDI_ARABIA_SUMMARY.issues,
        topStories: SAUDI_ARABIA_SUMMARY.topStories,
        storyCount: SAUDI_ARABIA_SUMMARY.storyCount,
        updatedAt: new Date()
      }
    })

    console.log('✅ Saudi Arabia added/updated successfully\n')
  } catch (error) {
    console.error('❌ Error processing Saudi Arabia:', error)
    throw error
  }
}

addSaudiArabia()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
