import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Economy write-ups in Martin Wolf's analytical style
const economySummaries = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `The arithmetic of Afghanistan's economic predicament is stark and unforgiving. GDP growth limps along at 1.8% for 2025—barely positive but utterly insufficient given the country's 3% population growth rate. The result? Per capita incomes continue their relentless decline, a fourth consecutive year of economic immiseration that leaves Afghans materially worse off than at any point since the Taliban's return to power.

Consider the employment catastrophe: nearly one in four young Afghans unemployed, a lost generation with neither jobs nor prospects. This isn't merely a statistical abstraction—it represents millions of households surviving on the margins, amplified by the return of hundreds of thousands from Iran and Pakistan who further stress an economy operating at subsistence levels. The inflation picture offers cold comfort: after deflation of -1.8% in late 2024 driven by collapsing food prices (themselves a symptom of crushing poverty reducing demand), inflation has returned to 0.2% by mid-2025. Core inflation sits at 1.8%, suggesting some domestic economic activity, though calling it "recovery" would be charitable.

The fiscal mathematics are equally brutal. With minimal tax collection capacity, no access to international financial markets, and limited central bank reserves, the Taliban administration operates what amounts to a cash-based government surviving on customs revenues and asset seizures. There is no meaningful monetary policy, no functioning banking sector integrated with global finance, and virtually no foreign direct investment. The opium economy—once comprising perhaps 30% of GDP—has been suppressed through bans, removing a crucial income source without providing alternatives.

Afghanistan's "economy" in any conventional sense barely exists. There's subsistence agriculture employing the majority, petty trading across porous borders (particularly with Pakistan, though that relationship frays), and humanitarian aid that keeps millions from starvation but builds nothing sustainable. The business environment ranks among the world's worst: no property rights protection, no contract enforcement, arbitrary rule changes, and gender apartheid that excludes half the population from economic participation. Domestic industry has collapsed. Manufacturing is negligible. The services sector—beyond basic trade—has withered.

Looking ahead, the scenarios range from grim to catastrophic. Absent policy changes (unlikely given ideological rigidity) or major external engagement (impossible given sanctions and Taliban governance), the trajectory is continued economic decline. Drought and climate shocks—increasingly frequent—could trigger humanitarian emergencies. The World Bank projects uncertainty but sees no path to prosperity: best case, GDP per capita stabilizes; worst case, it continues falling while millions face food insecurity.

The bottom line? Afghanistan operates outside the global economic system, its people trapped in a pre-modern economy with collapsing living standards, no industrial base, negligible services, and a government ideologically opposed to the market integration and social policies necessary for development. This isn't an economy; it's a humanitarian emergency disguised as a nation-state.`,
    issues: [
      'GDP per capita contracting 4% due to population growth',
      'Youth unemployment at 25%',
      'Minimal foreign reserves and no access to international finance',
      'Gender apartheid excluding women from economy',
      'Climate shocks threatening agricultural subsistence'
    ]
  },
  {
    name: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `Albania is experiencing something increasingly rare in Europe: genuine economic momentum. GDP growth hit 3.9% in 2024 and is projected at 3.2% for 2025—modest by emerging market standards but remarkable given the stagnation afflicting much of the continent. The first half of 2025 delivered 3.6% expansion, driven by the twin engines of tourism and construction, sectors that have transformed Albania from Balkan backwater to Mediterranean hotspot in barely a decade.

The tourism boom tells the story best. Albania welcomed record visitors in 2024, drawn by unspoiled coastline, UNESCO heritage sites in Berat and Gjirokastër, and prices roughly half those of neighboring Greece or Croatia. This isn't just package tourists—it's property buyers, remote workers, and investors betting on "the next big thing." Tourism revenues now significantly contribute to services exports, helping Albania maintain manageable current account deficits despite persistent trade gaps. The construction surge follows logically: hotels, apartments, and infrastructure from the Tirana-Durrës-Rinas railway to port upgrades at Durrës.

Yet inflation remains stubbornly elevated at 2.9-3.0% heading into 2025, with occasional spikes to 3.4% driven by retail energy price adjustments. The Bank of Albania has limited room to maneuver given euroization (extensive use of euros for transactions and savings) that constrains monetary sovereignty. The lek has shown relative stability, supported by remittances from the diaspora—Albania's secret economic weapon, with hundreds of thousands working in Italy, Greece, and Germany sending billions home annually.

The fiscal picture is reasonably healthy: debt-to-GDP around 65%, a deficit under 3%, and steady tax revenue growth as formalization gradually reduces the shadow economy. Albania's EU accession process—screening of chapters began in 2024—provides reform momentum, with Brussels demanding progress on rule of law, judiciary independence, and corruption. These aren't just bureaucratic hoops; they're essential for upgrading the business environment. The World Bank ranks Albania 82nd on Ease of Doing Business—respectable for the region but highlighting gaps in contract enforcement and property registration.

Foreign direct investment continues flowing in, particularly from Turkish and Italian firms drawn by low labor costs (average wages around €500-600 monthly), proximity to EU markets, and improving infrastructure. Manufacturing remains underdeveloped—mostly textiles and footwear—but the service economy is expanding rapidly. Albania's demographic profile is mixed: relatively young but experiencing emigration of educated youth, though recent trends show some return migration as opportunities improve at home.

The SEPA integration completed in October 2025 marks a genuine watershed, embedding Albania more deeply in European financial architecture and facilitating cross-border transactions. This formalization benefits both businesses and consumers, though it also means less room for the informal economy that has long provided flexibility during hard times.

The outlook for 2025-2026 remains positive: the EBRD forecasts 3.5% growth, the IMF projects similar figures, and Albania's tourism season extends into shoulder months as climate change makes summers hotter but springs and autumns more attractive. Risks? External shocks from European slowdown could hit tourism and remittances; energy dependence (Albania imports most electricity in dry years) creates vulnerability; and political stability requires managing the EU accession process without domestic backlash.

Bottom line: Albania has found a growth model that works—services-led expansion leveraging geography, affordability, and gradual institutional improvement. It's not the high-tech leap of Estonia or the industrial might of Poland, but it's sustainable, inclusive (unemployment has fallen steadily), and building genuine prosperity in a country that, two decades ago, was Europe's poorest. The question isn't whether Albania will grow, but whether it can maintain momentum long enough to close the income gap with EU members.`,
    issues: [
      '3.2% GDP growth in 2025 driven by tourism and construction',
      'Inflation persisting around 3% due to energy prices',
      'EU accession providing reform momentum',
      'Remittances from diaspora supporting lek stability',
      'SEPA integration deepening European financial ties'
    ]
  },
  {
    name: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algeria confronts the oldest problem in resource economics: how to diversify an economy when oil and gas generate 90% of exports, 60% of budget revenues, and 30% of GDP. The answer, thus far, is that it hasn't. Despite decades of promises, Algeria remains a rentier state whose fortunes rise and fall with hydrocarbon prices, and 2025 is testing that dependence once again.

The growth figures tell a tale of two economies. Overall GDP is projected at 3.3-4.5% for 2025, but this conceals divergence: non-hydrocarbon sectors expanded 5.7% in Q1 2025 while oil output contracted 2.8%. Total hydrocarbon output remains below capacity as OPEC+ quotas constrain production and aging fields deplete. Algeria earned nearly $31 billion from hydrocarbon exports in the first eight months of 2025, solid revenues but down from recent peaks when oil touched $90-100 per barrel. The 2025 budget assumed $60 oil; prices have fluctuated between $70-85, providing modest cushion but insufficient for ambitious spending plans.

Those spending plans are enormous: $126 billion in public expenditure for 2025, a 9.9% increase from 2024, aimed at infrastructure, housing, and public sector wages (the primary employment mechanism for millions). Budgeted revenues? Just $63.6 billion, implying a deficit of $61.7 billion—roughly 13.2% of GDP by Fitch's calculations. This isn't sustainable arithmetic. Previous surpluses generated by high oil prices have evaporated, and Algeria faces returning to significant deficits by 2025-2026.

External accounts show similar strain. The current account, long in surplus thanks to energy exports, is narrowing as import bills surge—Algeria imports virtually everything from food (it's a top wheat importer globally) to machinery to consumer goods. Foreign reserves, while still comfortable at $70+ billion, are declining, down from peaks above $200 billion a decade ago. The dinar has depreciated gradually, officially managed but under pressure, feeding into import inflation.

And inflation is returning with a vengeance. After years of relative price stability, inflation is accelerating due to dinar weakness, subsidy reductions, and global food price pressures. This matters politically: Algeria's government maintains extensive subsidies on food, fuel, and utilities—spending that consumes perhaps 20% of GDP—as implicit social contract. Algerians tolerate limited political freedoms in exchange for cheap bread, gasoline at $0.30/liter, and public sector jobs. Rising prices test this bargain.

The business environment remains challenging: state dominance in key sectors, bureaucracy that strangles private initiative, corruption, and a 51-49% foreign investment rule requiring local majority ownership that deters serious FDI. Algeria attracts perhaps $1-2 billion in FDI annually, negligible for an economy its size. Compare Turkey or Vietnam pulling in $10-15 billion despite smaller populations. The private sector, outside of hydrocarbons, is weak: small traders, construction firms living off government contracts, and agriculture employing millions at low productivity.

Youth unemployment is the ticking time bomb. Official figures around 12-15% overall mask youth unemployment approaching 30%, with educated graduates facing the bleakest prospects. The Hirak protest movement of 2019 hasn't disappeared; it's dormant, awaiting the next crisis. Algeria's demographic dividend—a young population—could be either growth engine or explosive instability depending on whether jobs materialize.

Looking ahead, the scenarios are constrained. Optimists point to gas potential—Europe's energy crisis post-Ukraine has renewed interest in Algerian gas, with pipelines to Italy and Spain offering alternatives to Russian supplies. The government announced increased gas exports targeting European contracts. But ramping up production requires investment and technical expertise Algeria struggles to attract given its business climate. Pessimists see continued drift: muddling through on oil revenues until reserves deplete or prices crash, then facing harsh adjustment.

The bottom line: Algeria has time, money, and resources to manage a real economic transformation—breaking hydrocarbon dependence, building competitive industries, modernizing agriculture, unleashing private enterprise. It lacks, thus far, the political will and institutional capacity to do so. Absent meaningful reform, 2025 looks like 2015 and 2005: an oil-dependent economy managing short-term pressures while deferring the hard choices required for long-term prosperity. The question isn't whether this model is sustainable—it isn't—but how long reserves and hydrocarbons can postpone the reckoning.`,
    issues: [
      'Hydrocarbon dependence: 90% of exports, 60% of budget revenues',
      'Budget deficit projected at 13.2% of GDP in 2025',
      'Foreign reserves declining from $200B peak',
      'Youth unemployment approaching 30%',
      'Weak private sector and low FDI due to restrictive policies'
    ]
  },
  {
    name: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    summary: `Angola's economic narrative is frustratingly familiar: an oil-rich nation struggling to escape the resource curse, achieving modest progress in diversification while remaining hostage to crude prices and production declines. GDP growth of 3.2% projected for 2025 sounds respectable until you realize it barely exceeds the 3% population growth rate, meaning per capita incomes stagnate at best—an uncomfortable reality for a country still recovering from decades of civil war and hoping to translate oil wealth into broad-based prosperity.

The oil sector dominates everything: 28.9% of GDP, 95% of exports, and the primary source of foreign exchange. Yet production has fallen dramatically, from peaks around 2 million barrels per day in 2008 to approximately 1.03 million bpd in early 2025. Aging fields deplete faster than new ones come online, and while offshore discoveries promise future potential, bringing them to production requires billions in investment that Angola struggles to attract given sovereign debt concerns and OPEC+ quota constraints. Oil revenues in 2025 hover around $30-35 billion annually—decent money, but insufficient for a nation of 35+ million with vast infrastructure needs.

The non-oil economy tells a more optimistic story, expanding at 5.7% in early 2025 driven by agriculture, services, and construction. This is genuine diversification: cassava and maize production increasing food security, telecommunications expanding rapidly (mobile penetration above 50%), and Luanda's construction boom creating jobs. Yet non-oil GDP remains relatively small as a share of total economy, and much growth is oil-adjacent—service contracts for petroleum companies, port activity handling oil equipment, banking financing the energy sector.

Inflation is the persistent problem. Running at 19.5% in mid-2025, down from 31% peaks in 2024 but still painfully high for households. The culprit is kwanza depreciation: the currency has lost two-thirds of its value against the dollar since 2020, driven by declining oil revenues, current account pressures, and foreign debt service. The National Bank of Angola has hiked rates above 20% attempting to stabilize the kwanza, but with limited success—high rates choke credit and private investment while inflation grinds on. Food inflation hits hardest, as Angola imports most foodstuffs despite vast agricultural potential.

Debt is the sword hanging over everything. Public debt exceeds 90% of GDP, much of it external and dollar-denominated, owed primarily to Chinese lenders who financed infrastructure during the commodity boom. Debt service consumes 40-50% of government revenues, starving education, health, and social spending. The IMF program concluded in 2022 provided some breathing room, but Angola remains on the edge: any oil price shock or kwanza crisis could trigger debt distress. Negotiating debt relief with China has proven difficult; Angola paid down some obligations using oil sales, but the overhang remains massive.

The business environment is slowly improving from a very low base. Angola ranks 177th on Doing Business—reflecting bureaucracy, corruption, and infrastructure gaps—but reforms in company registration and trading across borders have yielded improvements. Foreign investment outside oil is minimal: perhaps $2-3 billion annually, mostly in diamonds, banking, and telecommunications. The domestic private sector is weak, dominated by politically connected firms. Most Angolans work in informal agriculture or urban petty trading, living on a few dollars a day.

Poverty remains endemic: 50% of Angolans live below the national poverty line, with malnutrition rates among the world's highest. Despite oil wealth, social indicators lag far behind middle-income peers. Life expectancy is 61 years, child mortality is elevated, and access to clean water and electricity limited outside major cities. The government talks of diversification and inclusive growth; the reality is an economy generating wealth for elites while ordinary Angolans struggle.

Looking forward, the scenarios are mixed. Optimists cite non-oil growth momentum, declining inflation (projected at 12-15% by 2026), and potential oil discoveries that could reverse production declines. They note Angola's agricultural potential—millions of hectares of arable land unused—and tourism possibilities (Angola's coastline and wildlife could rival neighbors if insecurity and infrastructure improve). Pessimists see structural constraints: oil decline accelerating, debt unsustainable, kwanza weak, and governance issues preventing serious diversification.

The IMF's assessment is sober: growth will average 2.9% over 2025-2027, falling short of improving living standards for all Angolans. That's the tragedy—Angola has resources to thrive, but decades of mismanagement, corruption, and oil dependence have left it trapped. The question for 2025 and beyond: can the government summon the political will to enact difficult reforms—cutting subsidies, improving governance, attracting real investment—or will Angola remain an oil state unable to provide for its people despite immense natural wealth?

Bottom line: Angola's economy in 2025 is marking time, modest non-oil growth offset by oil sector decline, inflation eroding purchasing power, debt constraining fiscal space, and poverty persisting. It's not crisis, but it's not progress either—just muddling through while the clock ticks on oil reserves and patience with elite enrichment versus mass poverty.`,
    issues: [
      'Oil production declining to 1.03 million bpd from 2 million peak',
      'Inflation at 19.5%, down from 31% but still crushing households',
      'Public debt exceeding 90% of GDP, mostly external',
      'Kwanza depreciation driving import inflation',
      '50% poverty rate despite oil wealth'
    ]
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Javier Milei's radical experiment in economic shock therapy has produced the most dramatic inflation collapse in modern economic history—and the most painful adjustment. Monthly inflation plunged from 25.5% when Milei took office in December 2023 to 2.4% by November 2024, staying under 3% through much of 2025. Annual inflation, which raged at 211% in 2023, fell to 43.5% by mid-2025, with projections of 35% for the full year. This is remarkable, unprecedented, and bought at enormous social cost.

The prescription was textbook—if the textbook is Friedrich Hayek rather than John Maynard Keynes. Milei immediately devalued the peso 50%, slashed public spending by 30%, eliminated energy and transport subsidies, froze infrastructure projects, and fired tens of thousands of public workers. The result: Argentina achieved its first budget surplus in 14 years, the fiscal accounts moved from chronic deficit to primary surplus, and the 2025 budget mandates surpluses equal to debt payments. This is fiscal discipline on steroids, and it worked—inflation expectations plummeted as markets believed Argentina would finally stop printing money to finance deficits.

But consider the price. GDP contracted 1.5-2% in 2024 as austerity crushed demand. Poverty spiked above 50%, unemployment rose, real wages fell sharply, and Argentines faced brutal choices: heating or eating, medicine or rent. Healthcare, education, and social services were gutted. Provinces faced fiscal starvation as federal transfers disappeared. The social pain has been intense, protests frequent, and Milei's approval ratings volatile. Yet he won the 2024 midterms, suggesting many Argentines view the pain as necessary medicine after decades of Peronist populism and monetary chaos.

The peso dynamics tell their own story. After the initial 50% devaluation, the government implemented a "crawling peg" adjusting the peso 2% monthly against the dollar—below inflation, meaning real appreciation that aids disinflation but hurts exporters. In 2024, the peso appreciated 44% in real terms, the world's best-performing currency—a perverse achievement reflecting how much further other currencies fell and domestic inflation's dramatic slowdown. By 2025, authorities widened the exchange band to 1,000-1,400 pesos per dollar, creating flexibility while maintaining control.

Then came October 2025, and the corruption scandal involving Karina Milei, the president's sister and de facto chief of staff. Allegations of kickbacks from government contracts triggered a currency crisis: Argentines dumped pesos for dollars, reserves hemorrhaged, and the peso tumbled toward 1,400. The Trump administration, viewing Milei as ideological ally, pledged a $20 billion Treasury Exchange Stabilization Fund swap—essentially a guarantee that the U.S. would back Argentina's currency ahead of the October elections. This intervention stabilized markets but at the cost of Argentina's sovereignty and fiscal independence.

The economic outlook for 2025-2026 is cautiously optimistic—if you bracket the politics. Economists project 4.2% GDP growth in 2025 after 2024's contraction, driven by pent-up demand, agricultural recovery (soy and wheat exports), and Vaca Muerta shale gas investment that could make Argentina a major LNG exporter. Inflation is forecast at 35% for 2025, still high but manageable compared to recent history. Investment is returning: FDI jumped as investors bet on Milei's durability, and Argentine assets—especially Vaca Muerta energy rights—attracted international interest.

Yet risks abound. Social unrest could explode if adjustment fatigue sets in—there's only so much pain electorates will bear, even for inflation reduction. The peso remains fragile, dependent on U.S. support that could vanish with political shifts in Washington. Argentina's debt burden, while reduced via aggressive repayment, still weighs heavily. Provinces like Buenos Aires face insolvency as federal aid dries up. And the political opposition—Peronists and leftists—waits for Milei to stumble, ready to promise the subsidies and spending that Argentines remember fondly even as they acknowledge such policies caused hyperinflation.

The fundamental question is whether Argentina can endure long enough for painful reforms to yield prosperity. Milei bet that Argentines, traumatized by inflation, would tolerate deep austerity for genuine stabilization. The first year suggests he was right—inflation fell faster than skeptics thought possible. But year two and three? That's when adjustment fatigue sets in, when voters ask why suffering persists even as fiscal accounts improve. Milei needs growth, jobs, and wage recovery to consolidate his revolution. Without it, Argentina risks another cycle: austerity, backlash, populist resurgence, inflation, crisis.

Bottom line: Argentina in November 2025 is an economy in profound transition, inflation tamed through draconian measures, fiscal accounts in surplus for the first time in memory, but society strained to breaking point and political sustainability uncertain. Milei has achieved the impossible—stopping Argentine inflation—but translating that into durable prosperity requires threading a needle: maintaining discipline while delivering growth, foreign support while preserving sovereignty, and social order while imposing adjustment. The next year will determine whether Argentina's radical experiment ends in transformation or explosion.`,
    issues: [
      'Inflation collapsed from 211% to 35% via brutal austerity',
      'Poverty above 50% as public spending slashed 30%',
      'Currency crisis in October 2025 requiring $20B U.S. bailout',
      'GDP contracted in 2024, projected 4.2% rebound in 2025',
      'Social sustainability of austerity increasingly fragile'
    ]
  },
  {
    name: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Australia's economy in 2025 resembles a patient recovering from a fever—vital signs improving, but weakness lingering and doctors wary of relapse. GDP growth of 1.8% projected for the year, accelerating to 2.2% in 2026, represents the gradual normalization after the inflation shock of 2022-2024. But these are modest figures for an economy accustomed to three decades of uninterrupted expansion, suggesting underlying fragility masked by headline stability.

Inflation tells the encouraging part of the story. Headline CPI dropped to 2.1% in Q2 2025, the lowest since March 2021 and back within the Reserve Bank's 2-3% target band for the first time in years. This achievement owes much to energy price normalization—the electricity and gas spikes that drove inflation to 8% in 2022 have reversed—and goods price declines as global supply chains healed. Yet trimmed mean inflation, the RBA's preferred measure stripping out volatility, sits at 3.0%, right at the target ceiling. Services inflation remains sticky at 3.5-4%, reflecting tight labor markets and wage pressures. By August, headline inflation ticked back up to 3%, suggesting the victory lap was premature.

The Reserve Bank of Australia faced a dilemma throughout 2024-2025: declare victory and cut rates, risking inflation resurge, or hold rates high, risking recession. It chose a middle path: an initial 25 basis point cut in February 2025, another in May, bringing the cash rate down to 3.6% from the peak of 4.35%. This is still restrictive by historical standards—real rates firmly positive—but less crushing than the monetary tightening of 2022-2023. The RBA's caution reflects uncertainty: global trade tensions, China slowdown, and domestic housing market volatility all argue for gradualism.

Labor markets remain remarkably tight. Unemployment at 4.1-4.3% through 2025 is historically low, suggesting an economy near full employment. Yet beneath the headline, nuance emerges: underemployment is elevated (workers wanting more hours), wage growth at 3.5% is solid but not inflationary, and participation rates have plateaued after post-pandemic surges. The mining sector, Australia's economic backbone, faces slowing demand as China's property crisis reduces iron ore imports—Australia's top export—while coal faces long-term structural decline as climate policies bite. LNG exports provide some offset, and gold hit record highs, but the commodity supercycle that enriched Australia for two decades is over.

Housing is the persistent political and economic issue. Prices in Sydney and Melbourne have stabilized after falling 10-15% in 2023 but remain stratospheric relative to incomes—median Sydney houses above $1 million, requiring household incomes of $200,000+ for mortgage approval. Rental markets are in crisis: vacancy rates below 1%, rents up 20-30% since 2020, and housing supply lagging population growth driven by resumed immigration (400,000+ net annually). The government's 2025 housing package—tax incentives for build-to-rent, infrastructure spending, planning reforms—will take years to show results while voters suffer now.

Household finances present a mixed picture. Savings accumulated during pandemic lockdowns have been spent down, household debt-to-income ratios remain among the world's highest at 180%, and mortgage holders face refinancing at much higher rates than their original loans. This explains weak consumption growth: Australians are retrenching, paying down debt, and delaying purchases. Retail sales growth has slowed to 1-2% annually, below population growth, meaning per capita spending is falling.

The fiscal position is relatively healthy: deficits around 1-2% of GDP, public debt at 40% of GDP (low by OECD standards), and tax revenues boosted by full employment. But the government faces spending pressures: NDIS disability support costs exploding, aged care demanding reform, defense spending rising amid Indo-Pacific tensions, and climate adaptation requiring billions. The political calculus favors "cost of living" relief—electricity rebates, childcare subsidies, tax cuts—over long-term investment, reflecting electoral pressures.

Geopolitics shadows everything. China is Australia's largest trading partner by far—35% of exports—but relations remain strained after years of trade sanctions, diplomatic tensions, and security concerns. The AUKUS defense pact with the U.S. and UK, committing Australia to nuclear submarines, signals strategic realignment but risks further antagonizing Beijing. If U.S.-China trade wars intensify or Taiwan tensions escalate, Australia will face impossible choices: economic interests demand accommodation with China, security interests demand alignment with America.

Looking ahead, the outlook is for continued modest growth—1.8% in 2025, 2.2% in 2026—insufficient to deliver rising living standards once population growth is factored. Inflation should gradually decline to 2.3% by 2026, allowing further RBA rate cuts to 2.5-3.0%, providing relief to mortgage holders. Risks are asymmetric: downside scenarios (China hard landing, U.S. recession, trade wars) are more plausible than upside surprises. Australia's commodity dependence, household debt burden, and exposure to geopolitical shocks make it vulnerable.

Bottom line: Australia's economy in 2025 is stable but unexciting, inflation tamed but growth weak, employment solid but living standards stagnant. The Lucky Country faces structural challenges—commodity dependence, housing crisis, geopolitical exposure—that will require more than luck to resolve. The next few years will test whether Australia can transition from mining-led growth to services and innovation while managing household debt, Chinese relations, and climate adaptation. It's navigable, but there's little margin for error.`,
    issues: [
      'GDP growth at 1.8%, below trend and population growth',
      'Housing crisis: Sydney median above $1M, rents up 20-30%',
      'China slowdown hitting iron ore exports',
      'Household debt-to-income ratio at 180%',
      'Geopolitical tensions with China threatening trade'
    ]
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austria is sliding into its third consecutive year of economic contraction in 2025, an astonishing outcome for a wealthy European nation that prides itself on stability and prosperity. GDP is projected to decline 0.3% this year—a modest fall in absolute terms but psychologically devastating and economically concerning. Even optimistic forecasts showing marginal 0.3-1.1% growth amount to stagnation for an economy that needs 1.5-2% expansion just to maintain living standards.

The manufacturing crisis explains much of the pain. Industrial production collapsed 5.4% in 2024, and manufacturing has fallen 12% since Q4 2022—eighteen months of relentless decline driven by energy costs, weak German demand (Germany is Austria's largest export market), and loss of Russian gas supplies that forced Austrian industry to adjust painfully. Energy-intensive sectors like steel, chemicals, and heavy machinery have been hammered. The Vienna Institute projects manufacturing won't return to 2022 levels until 2027-2028, if then. Some production has simply moved elsewhere—Hungary, Poland, even Asia—as firms concluded Austria is no longer cost-competitive.

Inflation compounds the misery. Running at 2.9% for full-year 2025, with quarterly readings above 3.0-3.3%, Austria's inflation persistently exceeds the eurozone average. Retail energy prices spiked in Q1 2025 (up 15-20% year-over-year) as government subsidies expired, hitting households just as wages stagnated. Food inflation remains elevated. Services inflation, driven by tourism and hospitality sectors operating at capacity, adds pressure. Real wages—inflation-adjusted earnings—have fallen for three straight years, reducing purchasing power and standard of living for ordinary Austrians.

Yet Austria's tourism sector provides the counterpoint to industrial gloom. Overnight stays hit an all-time record 154 million in 2024, generating €16.9 billion in direct and indirect value-add—3.8% of GDP and every sixth job. The Alps remain Europe's premier winter destination, Vienna attracts cultural tourists year-round, and Salzburg's festivals draw global audiences. This is genuine comparative advantage, impossible to offshore, and resilient to many shocks. But tourism is seasonal, concentrated geographically, and doesn't provide the high-wage, high-productivity jobs that manufacturing once did.

The labor market, surprisingly, remains robust given economic weakness. Unemployment sits around 6-7%, elevated by Austrian standards but moderate compared to southern Europe. The social partnership model—institutionalized cooperation between business, labor, and government—has prevented mass layoffs, instead relying on short-time work schemes and wage moderation. But this also means productivity stagnates: firms hoard labor during downturns, reducing output per worker and weighing on competitiveness.

Fiscal policy is constrained by eurozone rules. The budget deficit is projected at 3.2-3.5% of GDP in 2025, exceeding the 3% Maastricht criterion and triggering scrutiny from Brussels. Public debt has risen to 78% of GDP, manageable but concerning given negative growth. Austria has limited fiscal space for stimulus—major infrastructure investment or consumption support would violate EU rules and risk sanctions. The government's 2025 budget attempts demand stimulus through tax relief, but amounts to perhaps 0.5% of GDP, insufficient to materially boost growth.

The structural challenges run deeper than cyclical weakness. Austria's economy remains heavily dependent on Germany—40% of exports—and Germany is itself in recession, dragged down by automotive sector struggles, Chinese competition, and energy transition costs. If Germany sneezes, Austria catches pneumonia. Russia's invasion of Ukraine severed Austria's cheap gas supplies (Austria was heavily reliant on Russian gas, more than most EU members), forcing expensive pivots to LNG imports via Germany and Italy. Energy costs remain 30-40% above pre-war levels, killing competitiveness.

Austria also faces demographic decline. The population is aging rapidly, pension costs are rising, and the dependency ratio (retirees per worker) is deteriorating. Immigration provides some offset—Austria has absorbed substantial numbers from EU accession countries and refugees—but integration challenges persist, and far-right political parties capitalize on immigration anxieties. The 2024 elections saw the Freedom Party (FPÖ) surge, though mainstream parties formed a coalition to keep them from power. Political instability adds uncertainty.

Looking ahead, the outlook is for "stabilization" in 2025—economist-speak for "things stop getting worse"—with modest 0.5-1.0% growth in 2026. This assumes German recovery, eurozone stability, and no new shocks. It also assumes manufacturing finds a bottom, inflation falls to 2% allowing real wage recovery, and tourism continues thriving. These are hopeful assumptions. Downside risks include German recession deepening, eurozone fractures over fiscal rules, and energy price spikes if Middle East tensions disrupt supplies.

The bottom line: Austria in 2025 is an economy in malaise, manufacturing collapsed, inflation eroding living standards, growth negative for three years, and structural challenges mounting. It retains enormous strengths—highly educated workforce, strong institutions, rule of law, quality of life—but the economic model built on exporting sophisticated manufactures to Germany while importing cheap Russian energy has broken. Rebuilding competitiveness requires painful adjustments: wage moderation, productivity gains, energy transition investment, and diversification away from German dependence. Austrian politics, consensual and cautious, may lack the urgency to enact necessary reforms, leaving the country to drift through 2025-2026 hoping external conditions improve rather than engineering recovery. That's not a strategy; it's hope, and hope isn't enough.`,
    issues: [
      'GDP contracted 0.3% in 2025, third consecutive year of recession',
      'Manufacturing down 12% since Q4 2022 due to energy costs',
      'Real wages falling for three years eroding living standards',
      'Heavy dependence on German economy (40% of exports)',
      'Loss of cheap Russian gas raising energy costs 30-40%'
    ]
  },
  {
    name: 'Bahrain',
    lat: 26.0667,
    lng: 50.5577,
    summary: `Bahrain has achieved something remarkable and rare in the Gulf: genuine economic diversification away from oil. While its neighbors remain hydrocarbon-dependent, Bahrain has reduced oil's nominal contribution to GDP from 43.6% in 2000 to below 20% today—the lowest in the GCC. The non-oil sector now comprises 85% of the economy and is driving growth at 3.5% in Q2 2025, propelling overall GDP expansion of 2.5-2.7% for the year. This is the Gulf diversification success story others aspire to replicate.

The composition of that non-oil growth reveals Bahrain's strategic choices. Financial services dominate, contributing perhaps 17-18% of GDP and growing 7.5% annually. Bahrain has positioned itself as the GCC's Islamic finance hub, hosting more than 100 banks and financial institutions serving regional clients. Regulatory quality exceeds Dubai in certain respects—less flashy, more substance—and Bahrain benefits from Saudi proximity without Saudi-sized domestic markets creating competition. Wealth management, Islamic banking, and insurance thrive in Manama's towers.

Tourism and hospitality surged 10.3% in 2025, the fastest-growing sector. This isn't beach resort tourism (Bahrain's coastline can't compete with UAE or Oman) but rather a specific niche: Saudis crossing the King Fahd Causeway for weekend entertainment. Bahrain offers restaurants, bars, concerts, and nightlife impossible in religiously conservative Saudi Arabia—it's the Gulf's pressure release valve. Formula 1, cultural festivals, and business travel add depth. Accommodation and food services now represent meaningful economic activity and employment.

Real estate and construction, up 4.7%, reflect ongoing development: luxury apartments, office buildings, malls, and infrastructure. The government's Economic Recovery Plan targets housing supply, seeking to ease affordability pressures while creating construction jobs. Wholesale and retail trade expanded 6.7%, serving both domestic consumption and regional visitors. Even professional, scientific, and technical services grew 12%, suggesting knowledge economy emergence.

Yet Bahrain cannot escape hydrocarbon dependence entirely. Oil and gas still comprise 15% of GDP, and crucially, hydrocarbons generate disproportionate government revenues—perhaps 70-80% of budget receipts—because taxing the non-oil sector remains politically difficult. The government relies on oil income, Saudi budgetary support ($10 billion pledged over a decade), and debt markets. Public debt exceeds 130% of GDP, among the world's highest, raising sustainability concerns. Bahrain's small oil production (40,000-50,000 bpd) and limited reserves mean it cannot rely on hydrocarbons indefinitely; diversification isn't optional, it's existential.

Foreign direct investment tells an encouraging story: FDI stock reached $45.3 billion in Q1 2025, up 3.5% year-over-year, signaling international confidence. Bahrain's business environment ranks well regionally—strong legal framework, property rights, contract enforcement—though corruption and patronage persist. The government has enacted reforms: streamlined business registration, foreign ownership liberalization in certain sectors, and labor market flexibility. Bahrain is increasingly attractive for regional headquarters serving Saudi Arabia and GCC markets without Dubai's costs or Riyadh's conservatism.

The labor market poses challenges. Unemployment hovers around 1-2% officially, but this conceals youth unemployment closer to 15-20% and heavy reliance on expatriate labor. Bahrain's population is roughly 50% foreign workers—Indians, Pakistanis, Bangladeshis, Filipinos—concentrated in services, construction, and retail. Bahraini nationals often work in government or state-owned enterprises. The private sector prefers expats: lower wages, fewer benefits, greater flexibility. "Bahrainization" policies aim to increase citizen private employment, but implementation is slow and resisted by businesses.

Geopolitically, Bahrain walks a tightrope. The Sunni monarchy governs a majority-Shia population, relying on Saudi and UAE support to maintain stability after crushing the 2011 protests. Iran looms across the Gulf, and Bahrain accuses Tehran of fomenting unrest. The U.S. Fifth Fleet bases in Bahrain, providing security but also making the kingdom a potential target. Regional tensions with Iran, Yemen's Houthis, or Iraq could rapidly destabilize confidence and capital flows.

Fiscally, Bahrain depends on external support. Oil revenues alone cannot fund government spending, so Bahrain relies on Saudi budget transfers (quid pro quo for political and security alignment), international debt issuance (Bahrain regularly taps bond markets), and asset sales. The government has implemented VAT at 10%, reduced subsidies on fuel and utilities (unpopular but necessary), and trimmed public sector pay growth. These reforms improved fiscal sustainability but remain insufficient—debt continues rising, and absent higher oil prices or major spending cuts, fiscal pressures will intensify.

Looking forward, Bahrain's growth trajectory looks sustainable in the near-term: 2.5-3.0% GDP growth over 2025-2026, driven by non-oil expansion, financial services, tourism, and real estate. Inflation remains moderate around 1-2%, labor markets tight, and business confidence solid. The medium-term, however, presents risks: oil revenues declining as production falls and prices fluctuate, debt burden constraining fiscal space, geopolitical tensions threatening stability, and social tensions over Sunni-Shia divide simmering beneath surface calm.

Bottom line: Bahrain in 2025 represents the Gulf's diversification success, non-oil sectors dominating GDP and driving growth, financial services and tourism thriving, FDI flowing in. Yet vulnerabilities persist: massive public debt, reliance on Saudi support, hydrocarbon revenue dependence for budgets, and geopolitical exposure. Bahrain has done the hard work of economic transformation better than neighbors, but sustaining it requires continued reform, fiscal discipline, and regional stability—all uncertain propositions. The kingdom has bought itself time and options; the question is whether it can consolidate gains into durable prosperity or whether debt, demographics, and geopolitics eventually overwhelm the progress achieved.`,
    issues: [
      'Non-oil sector now 85% of GDP, growing at 3.5%',
      'Public debt exceeds 130% of GDP, raising sustainability concerns',
      'Financial services hub with 100+ banks, growing at 7.5%',
      'Tourism driven by Saudi visitors, up 10.3%',
      'Dependent on Saudi budget support and oil revenues for government funding'
    ]
  },
  {
    name: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    summary: `Bangladesh's economy in 2025 is navigating treacherous waters: growth slowing sharply to 3.9-4.0% from the 6-7% norm, inflation surging to 10.87%, the taka depreciating, and external shocks multiplying. Most damaging has been the Trump administration's decision to impose 37% "reciprocal" tariffs on Bangladeshi goods—later reduced to 20% but still devastating—targeting the ready-made garment (RMG) sector that comprises 80%+ of exports and employs four million workers, predominantly women.

The garment sector is Bangladesh's economic miracle and Achilles heel. Over four decades, Bangladesh built the world's second-largest apparel export industry (after China) by offering rock-bottom labor costs—minimum wages around $95/month—duty-free access to Western markets under preferential schemes, and massive production capacity. Giants like H&M, Zara, Walmart, and Primark source billions of dollars of clothing annually from Dhaka's factories. This powered Bangladesh's transformation from basket case to lower-middle-income country, lifting tens of millions from poverty.

But the model is extraordinarily vulnerable. Profit margins in garments are razor-thin, perhaps 5-6%, meaning even modest cost increases crush profitability. The U.S. tariffs—20% on top of existing duties—render Bangladeshi goods uncompetitive versus Vietnam, India, or nearshoring to Mexico and Central America. Merchandise exports fell for the second consecutive month in September 2025, with RMG shipments declining sharply. Orders for 2026 are down 15-20% as Western retailers shift sourcing. Factory closures have begun, layoffs are mounting, and social stability in Dhaka and Chittagong—where millions depend on garment work—is increasingly fragile.

The immediate economic impact is visible in the current account. After narrowing to $752 million deficit in July-October 2024 thanks to 8.3% export growth and 30% surge in remittances, the current account is deteriorating again as exports fall. Foreign exchange reserves, which climbed briefly above $30 billion, are under pressure as import bills for food, fuel, and intermediate goods must be paid in dollars while export earnings decline. The Bangladesh Bank has allowed the taka to depreciate 15-20% against the dollar over 2024-2025, hoping to restore competitiveness, but this feeds inflation.

Inflation is the immediate crisis facing households. At 10.87% in September 2025, up from 9.92% in August, inflation is eroding purchasing power and hitting the poor hardest. Food inflation runs higher, 12-15%, driven by taka depreciation (Bangladesh imports significant food), domestic supply disruptions (floods in 2024 damaged crops), and global commodity price pressures. The government's response has been inadequate: subsidies on rice and fuel are fiscally unsustainable and poorly targeted, while monetary tightening to combat inflation risks choking the credit growth needed by businesses.

Remittances provide the silver lining. Bangladeshi workers abroad—10 million in Saudi Arabia, UAE, Malaysia, UK, and elsewhere—sent home $20+ billion in 2024 and remain on track for similar figures in 2025. Remittances now rival exports as foreign exchange source, supporting the current account and providing dollars for imports. The recent surge reflects policy reforms simplifying money transfer and a crackdown on informal hundi channels. But remittances are vulnerable: Gulf economies slowing, deportations from Saudi Arabia, and global recession would all hit flows.

The political and governance context matters enormously. Bangladesh experienced significant political turbulence in 2024, with protests over economic conditions, garment worker strikes, and tensions between the ruling Awami League and opposition BNP. The government postponed elections, suppressed dissent, and faced international criticism over democratic backsliding. Governance quality remains poor: corruption is endemic, infrastructure gaps immense (ports chronically congested, power outages frequent), and bureaucracy stifling. The World Bank and ADB emphasize that sustaining growth requires "strong and timely reforms"—improving business climate, modernizing financial sector, enhancing education, reducing trade barriers. Implementation has been slow.

Structural challenges loom large. Bangladesh faces a demographic transition: the youth bulge that provided cheap labor is aging, and fertility rates are falling toward replacement level. Within 10-15 years, Bangladesh will face the same labor cost pressures as China, without having climbed the value chain. Garment production is low-skill, low-margin, easily relocated; Bangladesh has failed to diversify into electronics, machinery, or services. The leather industry shows potential, pharmaceuticals are growing, and IT services employ educated youth, but none match garments' scale.

Climate change poses existential risk. Bangladesh is among the world's most climate-vulnerable nations: low-lying delta, 170 million people, cyclone exposure, flooding, saltwater intrusion, and rising seas. The 2024 floods displaced millions, damaged infrastructure, and reduced agricultural output. Adaptation requires tens of billions in investment—seawalls, flood defenses, resilient infrastructure—that Bangladesh cannot afford. International climate finance has been inadequate.

Looking ahead, the World Bank projects growth rebounding to 5.1% in FY2026 and 6.3% by FY2027 as exports recover and reforms take hold. This assumes U.S. tariffs ease, global demand recovers, and domestic reforms proceed. It also assumes political stability, something far from guaranteed given economic pressures and governance deficits. Inflation is forecast to decline to 8-9% in 2026, still high but easing pressure on households. The current account should stabilize as remittances hold firm and export competitiveness gradually improves post-taka depreciation.

But downside risks are significant: tariffs remaining high, global recession slashing demand, political instability deterring investment, climate disasters disrupting production, and energy shortages constraining manufacturing. Bangladesh's economic model—low-wage export manufacturing—is under pressure globally as automation, nearshoring, and protectionism reshape trade. Without moving up the value chain, diversifying exports, and improving productivity, Bangladesh risks middle-income trap: wages too high to compete with Africa, skills too low to compete with East Asia.

Bottom line: Bangladesh's economy in 2025 is at an inflection point. The garment-led growth model that transformed the country faces unprecedented challenges from U.S. tariffs, rising costs, and global shifts in production. Inflation is crushing households, growth has slowed sharply, and political tensions are rising. Bangladesh has strengths—remittances, young population, textile expertise—but needs urgent reforms to diversify, improve productivity, and manage climate risks. The next few years will determine whether Bangladesh transitions successfully to higher-value production and sustained prosperity, or stagnates in low-wage manufacturing vulnerability. Right now, the trajectory leans toward the latter, and that should worry anyone who cares about development success stories.`,
    issues: [
      'U.S. 20% tariffs devastating garment sector (80% of exports)',
      'Inflation at 10.87%, eroding purchasing power',
      'Export earnings falling, foreign reserves under pressure',
      'Taka depreciated 15-20%, feeding import inflation',
      'Climate vulnerability: floods, cyclones, rising seas'
    ]
  },
  {
    name: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    summary: `Belarus in 2025 resembles an economy in slow-motion crisis, sanctions tightening, Russian dependence deepening, and options narrowing. GDP growth decelerated to 2.1% in the first half before slowing further to 1.6% in January-September—anemic for an economy needing 3-4% just to create jobs for youth and maintain living standards. Forecasts for full-year 2025 range from contraction of 3% (pessimists) to growth of 1.8-4.1% (optimists), but the trend is unmistakable: Belarus's economy is stalling under the weight of Western sanctions, loss of European markets, and integration into Russia's war economy.

The sanctions architecture has metastasized since 2020-2021, when the EU and U.S. first imposed measures following the fraudulent presidential election and brutal suppression of protests. Russia's invasion of Ukraine in 2022, launched partly from Belarusian territory, triggered comprehensive sanctions: asset freezes on major banks (Belagroprombank, Belinvestbank, Development Bank of Belarus), disconnection from SWIFT, export bans on potash (a critical export), restrictions on oil refining and technology imports, and secondary sanctions targeting firms dealing with Belarus. The cumulative effect is what authorities call "economic quarantine"—nearly half the economy directly or indirectly affected.

The Russian dependence is staggering and accelerating. Over 60% of Belarusian exports now go to Russia, up from perhaps 40% pre-sanctions, as European markets closed. But the real figure is higher: Russia controls up to 90% of Belarusian exports and 80% of imports through logistics and transport dominance. Belarus imports over 80% of energy from Russia—crude oil, natural gas, electricity—at prices Moscow determines. This creates total economic dependency: Russia can strangle Belarus by turning off energy or closing markets, giving Moscow enormous leverage over Lukashenko's regime.

Manufacturing, roughly 25% of GDP, has swung into contraction. Industrial production fell 0.8% year-on-year in September 2025, dragged down by several factors: Western sanctions limiting technology imports essential for production, Russian demand weakening as its economy slows under war pressures and its own sanctions, and competitiveness eroded by inflation and currency issues. Ukraine's Foreign Intelligence Service reports that deliveries of consumer goods, equipment, and lumber to Russia have fallen over 70%, suggesting Russian buyers are finding alternative suppliers or cutting spending.

Agriculture presents a shock: annual decline of 8.1% in 2025, attributed to poor weather, reduced inputs (fertilizers, machinery increasingly expensive or unavailable due to sanctions), and falling demand. Belarus was a major food exporter—dairy, meat, grains—to Russia and occasionally to Europe and Middle East. That model is breaking down. Rural Belarus, already struggling with aging population and low productivity, faces acute distress.

Inflation has accelerated to 7.3% officially—likely understated—driven by Belarusian ruble depreciation, energy price increases, and supply shocks. The central bank has limited policy independence given Russia integration; interest rate policy follows Moscow's lead. Real wages are falling, eroding living standards that were already mediocre. Belarus never achieved the prosperity of Baltic neighbors; GDP per capita sits around $7,000-8,000, below Kazakhstan or even Ukraine (pre-war). Poverty is rising, though official statistics are unreliable given the authoritarian regime's control over information.

Labor markets show hidden distress. Unemployment officially remains low, 4-5%, but this reflects state enterprise employment practices: firms hoard workers even when unproductive, paying minimal wages, rather than firing them and creating social unrest. Underemployment is massive. Youth emigration has surged—skilled workers, IT specialists, young professionals fleeing to Poland, Lithuania, Ukraine (pre-war), or remotely working for Western firms. This brain drain hollows out Belarus's future economic potential.

The regime has responded by embracing Soviet economic practices: central planning, state allocation of resources, price controls, and forced localization of production. In June 2025, Carnegie Endowment analysts noted Belarus is "returning to Soviet economic practices," abandoning market reforms of the 1990s-2000s in favor of command economy. This is driven partly by sanctions forcing domestic production of previously imported goods, partly by ideological alignment with Russia's own statist turn, and partly by Lukashenko's political instincts favoring control over efficiency.

Public debt is rising rapidly as the government runs deficits to subsidize state enterprises, maintain public sector wages, and fund social spending necessary to prevent unrest. GDP is projected at $77.57 billion in 2025, up slightly from $71.86 billion in 2023, but much of this reflects nominal currency adjustments rather than real growth. External debt is becoming problematic: Belarus cannot access Western capital markets, relies on Russian loans and Chinese credit, and faces refinancing challenges.

Looking forward, scenarios are constrained. The optimistic case: war in Ukraine ends, sanctions ease gradually, Belarus diversifies away from Russia slightly, and growth returns to 2-3%. This requires political change—Lukashenko's exit, democratic transition—that seems unlikely absent regime collapse. The pessimistic case: sanctions deepen, Russian economy tanks pulling Belarus down, energy supplies become political weapon, and Belarus faces 1990s-style economic depression. The middle scenario: muddle through at 1-2% growth, living standards slowly declining, economic dependence on Russia hardening into permanent vassalage, and Belarus becoming a Eurasian Belarus rather than European.

The fundamental problem is political: Belarus's economic crisis is inseparable from its political crisis. Lukashenko's authoritarianism, suppression of 2020 protests, complicity in Ukraine invasion, and alignment with Putin have made Belarus a pariah. Economic isolation follows political isolation. Sanctions won't be lifted while Lukashenko remains, yet he shows no inclination to leave or liberalize. Belarus is trapped between unwillingness to reform politically and inability to prosper economically under current conditions.

Bottom line: Belarus's economy in 2025 is in managed decline, growth minimal, sanctions biting, Russian dependence total, and prospects bleak. The country is regressing toward Soviet economic structures while its population suffers falling living standards and youth emigration. Absent political change, Belarus faces years of stagnation at best, depression at worst. For an economy and society with potential—educated workforce, industrial base, strategic location between EU and Russia—this trajectory is tragic. But it's the inevitable consequence of authoritarianism meeting geopolitical reality. Belarus has chosen political alignment with Russia over economic integration with Europe; the price is impoverishment.`,
    issues: [
      'GDP growth slowed to 1.6% under comprehensive Western sanctions',
      'Over 60% of exports to Russia, rising dependency',
      'Manufacturing contracted, industrial production fell 0.8%',
      'Agriculture down 8.1%, rural areas in acute distress',
      'Brain drain: youth and skilled workers fleeing abroad'
    ]
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgium's economy in 2025 is afflicted by a peculiarly Belgian malaise: fiscal profligacy meets political paralysis, producing stagnation amid institutional gridlock. GDP growth is projected at a meager 0.8-1.1% for the year, barely above population growth, meaning per capita incomes stagnate. This is deeply unsatisfactory for a wealthy European nation that should be capitalizing on its position at the heart of EU institutions, its highly educated workforce, and its advanced services economy. Yet Belgium finds itself trapped between unsustainable public spending, regional divisions, and governance dysfunction.

The fiscal crisis is the immediate emergency. Belgium's deficit is forecast to reach 5.4% of GDP in 2025, nearly double the eurozone's 3% Maastricht limit and triggering an Excessive Deficit Procedure from the European Commission—Brussels disciplining Belgium, an irony given Belgium hosts EU headquarters. Public debt is projected to rise to 107.1% of GDP in 2025 and 109.8% in 2026, among Europe's highest and on an unsustainable trajectory. For comparison, Germany's debt sits around 65%, France at 112% but France has much larger economy and military commitments. Belgium's debt reflects decades of political compromises that prioritized spending over fiscal discipline.

The spending problem is structural. Belgium operates the world's most complex federal system: a national government, three regional governments (Flanders, Wallonia, Brussels-Capital), three language communities (Flemish, French, German), and overlapping responsibilities requiring endless negotiations and duplication. Each layer of government employs thousands, provides services, and spends lavishly. Public sector wages and pensions consume enormous shares of budget. Social transfers—unemployment benefits, pensions, healthcare—are generous and rising as the population ages. Belgium spends roughly 52% of GDP through government, among Europe's highest.

Yet tax revenues, while substantial, cannot keep pace. Belgium has high marginal tax rates (personal income tax can exceed 50% for top earners, corporate tax nominally 25%), but collection is complicated by regional tax competition, loopholes, and sophisticated tax planning by multinational corporations. Belgium hosts many European headquarters—financial services, pharma, technology—but these firms optimize tax liabilities aggressively. Brussels' role as EU capital means thousands of EU officials pay minimal Belgian taxes.

The political context is toxic. Belgium famously took 541 days to form a government after 2010 elections, and coalition building remains torturous. The 2024 federal elections resulted in Flemish nationalist parties (N-VA) and far-right (Vlaams Belang) dominating Flanders, while Francophone socialists and greens led in Wallonia. Forming a governing coalition required months, painful compromises, and inherently unstable arrangements. Flanders, wealthier and economically dynamic, resents transferring funds to Wallonia, poorer and post-industrial. Wallonia resents Flemish dominance and linguistic imperialism. Brussels, officially bilingual but predominantly French-speaking, navigates between both.

Economic performance diverges regionally. Flanders, with 6.6 million people, has modern services economy centered on Antwerp's port (Europe's second-largest by tonnage), logistics, chemicals, and high-tech manufacturing. Flemish unemployment is low, 3-4%, productivity high. Wallonia, 3.6 million, struggles with post-industrial decline: closed steel mills, depressed mining towns, higher unemployment around 8-9%, and lower GDP per capita. Brussels-Capital, 1.2 million, has GDP per capita inflated by EU salaries and financial services, but also high unemployment (12-15%) particularly among immigrant communities concentrated in certain communes.

Inflation in 2025 is moderating to 2.8%, down from 4.3% in 2024, reflecting ECB rate hikes cooling demand and energy price normalization. Belgium's automatic wage indexation—wages adjust quarterly based on inflation—transmitted price shocks rapidly into labor costs in 2022-2024, protecting purchasing power but eroding competitiveness. Belgian labor costs are among Europe's highest, driving firms to locate production in Poland, Hungary, or outside EU entirely. Services, however, are harder to offshore, and Belgium's diamond trade, pharmaceutical R&D, and EU-related professional services remain competitive.

The European Central Bank's monetary policy dominates Belgium's macro environment. ECB rate hikes to 4.5% in 2023-2024, maintained through early 2025, finally began cooling inflation but also slowed credit growth and investment. The ECB started cutting rates gradually in mid-2025, bringing the deposit rate to 3.5% by autumn, providing some relief to mortgage holders and businesses. But Belgium has no independent monetary policy; it must accept ECB decisions calibrated for the eurozone average, not Belgium's specific circumstances.

Trade remains Belgium's lifeline. Export-to-GDP ratio exceeds 85%, among the world's highest, reflecting Belgium's role as entrepôt: goods arrive at Antwerp or Zeebrugge ports, are processed or repackaged, and exported throughout Europe. Chemicals, pharmaceuticals, vehicles, machinery, and diamonds dominate. But export growth is slowing to 1-2% annually as German demand weakens (Germany is Belgium's largest partner) and European manufacturing contracts. Belgium is exposed to Chinese competition in key sectors and U.S. protectionism threatening automotive exports.

Looking ahead, the OECD and European Commission project modest acceleration: 1.0% growth in 2025, rising to 1.3-1.5% in 2026, driven by ECB rate cuts stimulating domestic demand and gradual export recovery. Inflation should decline to 1.8% by 2026, returning to target. But these forecasts assume fiscal consolidation—spending cuts and/or tax increases totaling 2-3% of GDP—to satisfy EU rules. Belgium's coalition government has promised reforms: pension age increases, public sector wage freezes, subsidy cuts. Implementation is uncertain given political fragility.

Structural reforms are desperately needed but politically impossible. Belgium needs to streamline its federal system, reduce regional transfers, modernize labor markets (firing restrictions make firms reluctant to hire), and invest in productivity-enhancing infrastructure and R&D. Instead, political energy dissipates in linguistic disputes, regional grievances, and coalition management. The result is drift: Belgium muddles through crises, avoids worst outcomes through last-minute compromises, but never enacts transformational change.

Bottom line: Belgium's economy in 2025 reflects its political dysfunction: wealthy but stagnant, fiscally unsustainable, regionally divided, and institutionally gridlocked. Growth is anemic, debt rising, competitiveness eroding, and reform capacity paralyzed. Belgium has enormous advantages—location, workforce, institutions—but squanders them through poor governance and political fragmentation. The tragedy is that Belgium could thrive: Brussels as EU capital offers unmatched access, Flanders has economic dynamism, Wallonia could revitalize with proper investment. Instead, Belgium is slowly declining, its potential unrealized, its future uncertain. Unless political leaders break the cycle of fiscal profligacy and gridlock, Belgium faces years of stagnation while Europe moves forward. That's not just bad economics; it's a failure of statecraft.`,
    issues: [
      'Budget deficit at 5.4% of GDP, violating EU rules',
      'Public debt rising to 107-110% of GDP',
      'Political gridlock between Flanders and Wallonia',
      'GDP growth at 0.8-1.1%, below population increase',
      'Regional economic divergence: Flemish dynamism vs Walloon decline'
    ]
  },
  {
    name: 'Benin',
    lat: 9.3077,
    lng: 2.3158,
    summary: `Benin is experiencing one of Africa's most impressive growth surges, GDP expanding 7.5-7.6% in the first half of 2025, maintaining momentum from years of rapid expansion. The government projects 6.8% growth for the full year, outperforming initial forecasts and placing Benin among sub-Saharan Africa's fastest-growing economies. This isn't commodity-boom luck; it's the result of deliberate policy choices—port modernization, agricultural reform, regional trade positioning—that have transformed Benin from West African backwater to regional economic player.

The Port of Cotonou is the crown jewel. Accounting for over 40% of national budget revenues, the port serves not just Benin's 13 million people but, crucially, landlocked Niger, Burkina Faso, and increasingly Nigeria despite the latter having its own ports. Cotonou's efficiency, corruption reduction (relative to Lagos or Lomé), and infrastructure upgrades have made it West Africa's preferred gateway for certain trade corridors. Container throughput has surged, transit trade with Niger resumed in August 2024 after political tensions eased, and oil transit (Niger and Nigerian oil passing through Benin) generates substantial revenues. The port's expansion—new terminals, deeper berths, modern equipment—will increase capacity by 50% over 2025-2027.

Agriculture, 25.4% of GDP and employing 28% of the workforce, is the other growth engine. Benin is Africa's largest cotton producer, overtaking Mali and Burkina Faso through aggressive reforms: fertilizer subsidies, improved seeds, extension services, and fair pricing mechanisms via transparent auctions. Cotton exports generate $400-500 million annually. Cashew nuts—Benin is a top-five global producer—add another $200+ million, with domestic processing increasing value-add. Fishing and aquaculture, supported by private investment, are expanding rapidly. Rice production is rising, reducing import dependence. The government's agricultural strategy combines public investment in infrastructure (irrigation, rural roads) with private sector partnerships, a model that's working.

Manufacturing, the Gandozé Industrial Zone (GDIZ), is Benin's bet on industrialization. The GDIZ, with Chinese investment and Beninese management, aims to attract light manufacturing—textiles, food processing, assembly operations—targeting regional markets. Early results are promising: several dozen firms operational, exports growing, and employment approaching 10,000. This is infant industry development requiring patience, but the trajectory is positive. Benin cannot compete with Asian manufacturing, but regional production serving ECOWAS markets (370 million people) is viable given lower transport costs and tariff preferences.

Fiscal management is surprisingly sound for a low-income African country. The debt-to-GDP ratio sits around 50-55%, manageable and well below distressed levels. The government has avoided the borrowing spree that trapped Zambia, Ghana, or Kenya. Revenue collection has improved through port fees, VAT (13% since 2023), and slowly formalizing the large informal economy. Budget deficits are modest, 3-4% of GDP, and largely financed through concessional loans from World Bank, African Development Bank, and bilateral partners. Benin maintains investment-grade aspirations.

Inflation remains moderate, 2-3%, reflecting WAEMU (West African Economic and Monetary Union) membership. Benin uses the CFA franc, pegged to the euro and guaranteed by France, providing monetary stability and inflation discipline but constraining monetary sovereignty. The peg means Benin cannot devalue to boost competitiveness or run independent monetary policy. This is generally viewed as net positive: inflation control and currency stability outweigh lost flexibility. The BCEAO (regional central bank) has been prudent, avoiding the monetary chaos that afflicted some Anglophone West African neighbors.

Yet challenges are substantial. Infrastructure remains inadequate: outside Cotonou and few major cities, roads are poor, electricity unreliable (though improving with new power plants), and internet penetration low. Access to finance is limited; most Beninese lack bank accounts, and interest rates are high. Human capital is weak: literacy rates around 42%, secondary school enrollment under 50%, and tertiary barely 10%. Benin is investing heavily in education—school construction, teacher training, digital literacy—but results take decades.

Governance is improving but remains flawed. Transparency International ranks Benin 82nd on corruption (2024), not terrible by African standards but indicating persistent graft. President Patrice Talon's government has centralized power, marginalized opposition, and faced criticism over democratic backsliding despite delivering economic growth. The 2026 elections will test whether Benin can maintain both economic progress and political pluralism, or whether it follows the authoritarian-growth model seen elsewhere (Rwanda, Ethiopia pre-2020).

Benin's geopolitical position is critical. As meeting point of Abidjan-Lagos coastal corridor and Cotonou-Niamey inland corridor, Benin benefits from regional trade flows. Relations with Nigeria, the regional giant, are complex: competition (Lagos vs Cotonou as port hub) but also cooperation (massive cross-border trade, millions of Nigerians in Benin, smuggling in both directions). Niger's coups and instability created friction in 2023-2024, temporarily closing borders, but trade has resumed. Burkina Faso's security crisis generates refugees and instability, but also transit trade opportunities.

Climate vulnerability is significant but manageable. Coastal flooding threatens Cotonou, desertification affects northern agriculture, and rainfall variability impacts cotton yields. Benin is investing in climate adaptation: seawalls, drought-resistant crops, and reforestation. The risks are real but less catastrophic than Sahel neighbors facing existential climate threats.

Looking ahead, sustaining 6-7% growth through 2025-2026 seems achievable. Port expansion, agricultural productivity gains, GDIZ momentum, and recovering regional trade all support continued expansion. Benin could reach lower-middle-income status ($1,400+ GNI per capita) by 2027-2028. Risks include Nigerian economic crisis hitting trade, regional security deterioration, commodity price crashes (cotton, cashews), or political instability around elections.

Bottom line: Benin in 2025 is an African success story, 7.5% growth driven by smart policy choices—port modernization, agricultural reform, regional integration—rather than resource luck. The economy is diversifying, poverty is falling (though still 40%+ live under $2/day), and prospects are improving. Benin won't become an economic powerhouse, but it's demonstrating that good governance, strategic investment, and regional positioning can deliver real development gains even in challenging West African context. The question is sustainability: can Benin maintain reform momentum, navigate political transitions, and avoid the traps (debt, corruption, conflict) that have derailed neighbors? If it does, Benin could be the model others study. If not, it joins the long list of African growth spurts that faded. For now, the trajectory is encouraging.`,
    issues: [
      'GDP growth at 7.5% driven by port and agriculture',
      'Port of Cotonou generates 40% of budget revenues',
      'Africa\'s largest cotton producer, cashew exports rising',
      'Low human capital: 42% literacy, limited education access',
      'Regional trade dependent on Nigeria and Niger stability'
    ]
  },
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `Bolivia is experiencing economic meltdown in slow motion, the fundamentals collapsing while the government denies reality and postpones inevitable adjustment. GDP is projected to contract 0.5% in 2025 under current policies—but the IMF's phrasing "under current policies" is diplomatic code for "catastrophe if nothing changes." Public debt has exploded to 95% of GDP, inflation is surging toward 30%, foreign reserves have evaporated to barely $3 billion (down from $15 billion in 2014), and the Bolivian boliviano is maintained at an artificial peg that requires burning through what little reserves remain. This is a crisis foretold, years in the making, now reaching critical mass.

The reserve crisis is the most acute symptom. Net international reserves stood at $2.9 billion in August 2025, equivalent to less than three months of imports—the minimum safety threshold. More alarming is the composition: by December 2024, total reserves were $1.98 billion, of which $1.89 billion were gold (legally required reserves held at the central bank) and only $47 million were in liquid currency. That's right: liquid dollar reserves had essentially vanished, down from billions pre-2020. The Central Bank has been selling dollars to maintain the boliviano's peg at 6.96 per dollar, a rate held constant since 2011, burning through reserves to prevent devaluation. This is unsustainable—you cannot defend a currency indefinitely without reserves—and collapse is approaching.

Inflation tells the consequence. After years of relative stability, inflation hit 10% in 2024, the highest in over a decade. For 2025, forecasts are catastrophic: the IMF projects 30%, while some analysts cite 25.15% as of August. This isn't Venezuelan hyperinflation yet, but it's the trajectory that concerns: accelerating inflation driven by monetary expansion (Central Bank printing bolivianos to finance deficits), supply shortages (imports scarce because dollars are scarce), and loss of confidence in the currency. Bolivians are converting savings to dollars, hoarding goods, and informal markets charging dollar-linked prices while the official economy pretends the peg holds.

The fiscal arithmetic is equally grim. The government runs massive deficits—8-10% of GDP annually—financing spending through Central Bank advances (printing money), depletion of the small sovereign wealth fund, and limited domestic borrowing. Bolivia cannot access international capital markets; its last bond issue was over a decade ago, and credit ratings are deep junk. External borrowing comes from China and development banks, but at diminishing amounts given Bolivia's deteriorating position. Public debt at 95% of GDP is approaching levels requiring restructuring, but the government refuses to acknowledge the problem, let alone enact adjustment.

Natural resources provide context for the tragedy. Bolivia has enormous natural gas reserves, once exporting billions of cubic meters annually to Brazil and Argentina, generating government revenues. But production has declined sharply—aging fields, insufficient investment, contractual disputes, and Brazilian demand falling as it develops alternative sources. Gas revenues have collapsed from billions annually to hundreds of millions, removing the fiscal cushion that funded spending during Evo Morales's commodity boom years (2006-2019). Lithium offers tantalizing future potential: Bolivia has perhaps 23 million tons of reserves, the world's largest, essential for battery production and energy transition. Yet development has stalled for years due to bureaucratic incompetence, political interference, unrealistic contract demands, and technological challenges (Bolivia's lithium is in salt flats, harder to extract than Australian or Chilean hard-rock deposits). Chinese investment offers hope, but implementation remains uncertain amid legislative gridlock.

The political crisis is inseparable from the economic one. Luis Arce won the presidency in 2020 as Morales's handpicked successor, promising continuity of MAS (Movement for Socialism) economic policies. But the commodity boom that financed Morales's largesse—nationalizing gas, expanding social spending, subsidizing food and fuel, building stadiums—ended by 2014. Arce inherited an economy already in decline, depleted reserves, and rising deficits. His response has been denial: maintaining subsidies (costing perhaps 5% of GDP), refusing devaluation, printing money, and blaming external factors. Opposition has grown—roadblocks, protests, regional tensions (Santa Cruz and eastern lowlands resent Andean highlands' political dominance)—but Arce lacks parliamentary majorities to enact reforms even if he wanted.

The social contract is fraying. Bolivia's relative political stability and social peace during Morales years rested on redistribution: gas revenues funded universal pensions, health programs, housing construction, and price subsidies keeping bread, gasoline, and basic goods affordable. As fiscal space disappeared, subsidies became unsustainable, but removing them triggers unrest. The government is trapped: maintaining subsidies bankrupts the state; removing them risks explosion. The February 2023 protests over fuel subsidy reductions previewed the dilemma—government backed down, subsidies remain, the fiscal hole deepens.

Poverty and inequality have worsened. Bolivia reduced poverty significantly during the 2000s commodity boom, from 60% to around 35%, and inequality fell. But progress has reversed: poverty is rising again toward 40-45% as inflation erodes incomes, unemployment increases (officially 4-5% but underemployment is massive), and informal economy struggles. Bolivia remains one of South America's poorest countries, GDP per capita around $3,500, lagging Peru, Ecuador, even Paraguay. Indigenous populations in rural highlands are particularly affected: subsistence agriculture vulnerable to drought and climate shocks, limited access to services, and dependence on remittances from family members working in cities or abroad.

Looking forward, scenarios range from severe crisis to catastrophe. The optimistic case: government recognizes reality, negotiates IMF program requiring devaluation (30-50% immediately), fiscal adjustment (cutting subsidies, raising taxes), structural reforms (improving business climate, resolving lithium contracts, attracting investment), and debt restructuring. This stabilizes the economy but imposes years of austerity and social pain. Political viability is highly questionable. The pessimistic case: government continues denying problems until reserves hit zero, the peg collapses chaotically, inflation accelerates toward triple digits, imports grind to halt, shortages become acute, and social unrest explodes. This could trigger political collapse, military intervention, or regime change—none guaranteeing better economic management.

The IMF's assessment is blunt: "acute fiscal and external imbalances," "unsustainable policy mix," and urgent need for "major policy reforms." Translation: Bolivia is heading for crisis unless it changes course immediately. There's little sign it will. Arce's government clings to ideology and political survival, unable or unwilling to enact the painful but necessary adjustments. Opposition offers populism rather than realism. The result is drift toward disaster.

Bottom line: Bolivia's economy in 2025 is in crisis, foreign reserves depleted, inflation surging toward 30%, public debt at 95% of GDP, currency peg unsustainable, and government in denial. The country squandered its gas wealth during commodity booms, failed to diversify or develop lithium, and now faces consequences of fiscal profligacy and poor governance. Absent major policy shift—highly unlikely given political dynamics—Bolivia will experience currency collapse, accelerating inflation, and economic depression in 2026-2027. For a country with Bolivia's natural wealth and potential, this trajectory is tragic but preventable. The tragedy is that prevention requires political will Bolivia's leaders lack. What comes next won't be pretty.`,
    issues: [
      'Foreign reserves at $2.9B, down from $15B in 2014',
      'Inflation projected at 30% in 2025, up from 10% in 2024',
      'Public debt at 95% of GDP, approaching unsustainability',
      'Currency peg burning reserves, collapse imminent',
      'Lithium development stalled despite 23 million ton reserves'
    ]
  }
]

async function main() {
  console.log('🚀 Starting Economy & Business write-up insertion')
  console.log(`📊 Inserting ${economySummaries.length} country summaries\n`)

  let successCount = 0

  for (const country of economySummaries) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

      console.log(`Summary length: ${country.summary.length} characters`)
      console.log(`Issues: ${country.issues.length}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'economy',
          },
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'economy',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Successfully saved ${country.name} to database`)
      successCount++
    } catch (error) {
      console.error(`❌ Error saving ${country.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ ECONOMY & BUSINESS INSERTION COMPLETE!')
  console.log('='.repeat(80))
  console.log(`\n📊 Successfully inserted: ${successCount}/${economySummaries.length} countries`)
  console.log(`\nCompleted Economy for: ${economySummaries.map(c => c.name).join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
