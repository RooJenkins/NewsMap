import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ECONOMY_SUMMARIES = [
  {
    name: 'Bosnia and Herzegovina',
    type: 'country',
    lat: 43.9159,
    lng: 17.6791,
    country: 'Bosnia and Herzegovina',
    category: 'economy',
    summary: `Bosnia and Herzegovina's economy is navigating a fragile recovery in November 2025, growing at a modest 2.5-3% annually—respectable but insufficient to close the gap with EU neighbors it aspires to join. Inflation has cooled to around 5%, down from the energy-shock spikes of 2022-23, but the cost of living remains elevated for a population whose average monthly salary hovers around €600. Unemployment sits at 12%, and youth unemployment exceeds 25%, fueling continued emigration to Germany, Austria, and Croatia. The convertible mark, pegged rigidly to the euro at 1.95583, provides monetary stability but eliminates any room for independent policy maneuvering.

The economy's structural weaknesses are deeply entrenched. GDP per capita remains stuck at roughly €6,500—less than half the EU average—and growth is constrained by a political system that splits economic governance between two entities (the Federation and Republika Srpska) plus the Brčko District. This Dayton Agreement architecture creates overlapping bureaucracies, conflicting regulations, and massive inefficiencies. Foreign direct investment is anemic, deterred by corruption, slow courts, and the hassle of navigating multiple regulatory frameworks. The World Bank's Doing Business indicators place BiH in the bottom half of European countries. Manufacturing—steel, metals, wood products, textiles—anchors exports, mostly destined for the EU, but productivity lags. Remittances from the diaspora account for nearly 10% of GDP, a lifeline but also a symptom of economic dysfunction.

Looking forward, EU candidacy status (granted in 2022) offers a potential reform catalyst, but progress has been glacial. Brussels demands judicial reforms, anti-corruption measures, and constitutional changes that threaten entrenched interests in both entities. Public debt at 34% of GDP is manageable, but fiscal space is tight, and the entities often bicker over revenue-sharing. Trade deficits are chronic, reflecting low competitiveness. The risk is stagnation: growth too weak to reverse brain drain, reforms too slow to unlock investment, and political gridlock perpetuating the status quo.

**Bottom Line:** Bosnia's economy is stable but stuck—low growth, high unemployment, and political fragmentation blocking the reforms needed for EU convergence. Without serious institutional overhaul, it risks becoming Europe's perpetual laggard.`,
    issues: JSON.stringify(['Slow GDP Growth', 'High Unemployment', 'Political Fragmentation', 'EU Reform Requirements', 'Low FDI']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Botswana',
    type: 'country',
    lat: -22.3285,
    lng: 24.6849,
    country: 'Botswana',
    category: 'economy',
    summary: `Botswana's economy is posting robust 4.2% growth in 2025, underpinned by a rebound in diamond sales and a booming tourism sector, yet the prosperity remains frustratingly uneven. Diamonds still dominate, accounting for 70-80% of export earnings and roughly 30% of GDP through the Debswana joint venture with De Beers. Global luxury demand has recovered from the pandemic trough, and diamond prices have stabilized, providing the government with healthy revenues. Inflation sits at a manageable 4.5% in November 2025, comfortably within the Bank of Botswana's target band, and the pula remains relatively stable under a managed float against a basket of currencies. The country boasts Africa's highest credit rating—A from Moody's—reflecting exceptionally prudent fiscal management and strong institutions.

Yet beneath these impressive macro indicators lies a stubborn challenge: unemployment remains sky-high at 24%, and job creation has not kept pace with economic growth. The diamond industry, capital-intensive and dominated by a few large players, employs relatively few Batswana directly. Efforts to diversify—into financial services, beef exports, and tourism—are bearing fruit but not fast enough. The government has poured resources into education and infrastructure, and the Pula Fund sovereign wealth fund (worth ~$6 billion) provides a fiscal cushion, but inequality remains stark. The Gini coefficient hovers around 53, among the highest globally, and rural areas lag far behind Gaborone's gleaming shopping malls and business districts. Youth unemployment is particularly acute, and the skills mismatch between education outputs and labor market needs persists.

The outlook hinges on diversification and the global diamond market. De Beers and Botswana recently renegotiated their partnership, with the government securing a larger share of rough diamonds for local beneficiation—processing and polishing within Botswana to capture more value. This could create jobs, but the industry faces long-term headwinds from lab-grown diamonds and shifting consumer preferences. Tourism is growing (the Okavango Delta, Chobe National Park), but climate change threatens water resources and wildlife. Fiscally, Botswana has room to invest, but the challenge is execution: translating spending into productive capacity.

**Bottom Line:** Botswana is Africa's governance success story with impressive GDP growth and fiscal discipline, but stubbornly high unemployment and inequality reveal the limits of diamond-led development. Diversification is essential, not optional.`,
    issues: JSON.stringify(['Diamond Dependency', 'High Unemployment', 'Income Inequality', 'Economic Diversification', 'Youth Jobs Crisis']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Brazil',
    type: 'country',
    lat: -14.2350,
    lng: -51.9253,
    country: 'Brazil',
    category: 'economy',
    summary: `Brazil's economy is sputtering in November 2025, posting sluggish 2.1% growth that falls well short of the government's ambitions and the country's potential. President Lula da Silva's expansive fiscal policies—raising the minimum wage, expanding Bolsa Família social programs—have supported consumption but spooked financial markets worried about debt sustainability. The Brazilian real has depreciated to around 5.6 per dollar, weakening from early 2025 levels, as investors fret over the primary budget deficit (approximately 0.5% of GDP) and rising public debt approaching 85% of GDP. Inflation sits at 4.8% in November, above the central bank's 3% target, forcing the Banco Central to hike rates to 11.75%, which in turn crimps credit and investment. Unemployment at 7.8% is relatively low by Brazilian standards, but job quality remains poor, with a vast informal sector offering no protections or benefits.

Brazil's economic strengths remain formidable but underutilized. Agriculture is a global powerhouse: Brazil is the world's top exporter of soybeans, coffee, beef, and sugar, with agribusiness accounting for roughly 25% of GDP. China absorbs 30% of exports, making Brazil deeply exposed to Chinese demand and trade policy. Petrobras, the state-controlled oil giant, has ramped up pre-salt offshore production, positioning Brazil as a major oil exporter, but political interference in pricing and investment decisions has been a recurring concern. Manufacturing has lost competitiveness due to the "Brazil cost"—high taxes, Byzantine bureaucracy, poor infrastructure, and a volatile currency. Investment rates remain stubbornly low at around 17% of GDP, half the level of fast-growing Asian economies.

The fiscal framework introduced in 2023 aimed to anchor expectations, but markets are skeptical. Lula's coalition is fractious, and Congress pushes for higher spending. The risk is a return to the 2015-16 crisis pattern: widening deficits, rising debt, loss of investor confidence, currency collapse. Infrastructure bottlenecks—creaking ports, inadequate rail, congested roads—raise logistics costs and hurt competitiveness. Inequality remains extreme, though social programs have helped; the Gini coefficient is improving slowly. Looking ahead, Brazil faces a trilemma: deliver the social spending Lula promised, maintain fiscal credibility with markets, and invest in productivity-enhancing reforms. Threading that needle looks increasingly difficult.

**Bottom Line:** Brazil's economy is underperforming, held back by fiscal anxiety, currency weakness, and structural inefficiencies. Lula's social agenda clashes with market demands for discipline, and without credible reform, the risk is stagflation or worse.`,
    issues: JSON.stringify(['Sluggish Growth', 'Fiscal Deficits', 'Currency Depreciation', 'High Interest Rates', 'Infrastructure Bottlenecks']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Bulgaria',
    type: 'country',
    lat: 42.7339,
    lng: 25.4858,
    country: 'Bulgaria',
    category: 'economy',
    summary: `Bulgaria's economy is posting steady 2.8% growth in 2025, powered by EU structural funds, resilient domestic consumption, and a thriving IT outsourcing sector in Sofia. Inflation has cooled sharply to 3.2% in November, down from the brutal 15%+ spikes of 2022-23 driven by energy costs, and the currency board maintaining the lev's peg to the euro at 1.95583 has provided an anchor of stability. Unemployment is remarkably low at 4.1%, and businesses in construction, hospitality, and manufacturing report labor shortages—a striking reversal for a country that spent the 1990s and 2000s hemorrhaging workers to Western Europe. Yet Bulgaria remains the EU's poorest member state by GDP per capita, at roughly €10,000, less than half the union average. The catch-up process is real but painfully slow.

The economy's structure is shifting. Services now dominate, with Sofia emerging as a regional hub for IT outsourcing, call centers, and back-office operations—companies like SAP, HP, and IBM have significant presences, attracted by low costs, educated labor, and EU membership. Manufacturing exports, particularly to Germany, Turkey, and Romania, remain important, and agriculture benefits from EU subsidies. Remittances from the Bulgarian diaspora—an estimated 2 million Bulgarians live abroad, mostly in Spain, Germany, the UK—provide a significant income boost. Fiscally, Bulgaria is in enviable shape: a budget surplus in 2024-25 and public debt at just 23% of GDP, the lowest in the EU. The currency board, in place since 1997, has locked in credibility, and euro adoption—repeatedly delayed, now targeted for January 2026—would formalize what's already de facto monetary integration.

But structural weaknesses persist. Corruption remains a major drag on business confidence and EU fund absorption; Bulgaria ranks near the bottom of Transparency International's EU rankings. Judicial independence is questionable, and organized crime retains influence in certain sectors. Infrastructure is improving with EU funding—highways, broadband—but rural areas remain neglected. The energy transition from coal is underway but contentious; coal-dependent regions face job losses. Demographic decline is severe: Bulgaria's population has shrunk from 9 million in 1989 to under 6.5 million today, with low birth rates and continued emigration. Labor shortages will worsen, constraining growth potential. The risk is a middle-income trap: growth insufficient to reverse emigration, corruption scaring off higher-value investment.

**Bottom Line:** Bulgaria is converging toward EU living standards, with low debt, low unemployment, and steady growth, but corruption, demographics, and low productivity threaten to stall the catch-up. Euro adoption would be a symbolic milestone, but real convergence requires deeper reform.`,
    issues: JSON.stringify(['EU Convergence', 'Corruption', 'Demographic Decline', 'Labor Shortages', 'Euro Adoption Delays']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Burkina Faso',
    type: 'country',
    lat: 12.2383,
    lng: -1.5616,
    country: 'Burkina Faso',
    category: 'economy',
    summary: `Burkina Faso's economy is limping through 2025 with anemic 1.5% growth, strangled by an escalating jihadist insurgency and the economic fallout from successive military coups. Captain Ibrahim Traoré seized power in September 2022, the country's second coup in a year, and suspended the IMF program, pivoting toward Russia and China after severing ties with former colonial power France. Inflation sits at 7.5% in November 2025, driven by soaring food prices as insecurity disrupts agricultural production and supply chains. Unemployment data is unreliable—most Burkinabé survive through subsistence farming or informal trade—but underemployment is massive, and poverty rates exceed 40%. The West African CFA franc, pegged to the euro and shared with seven neighbors, provides monetary stability but eliminates any independent policy lever just when the country needs flexibility most.

Gold has become the economy's lifeline, accounting for over 80% of export revenues and overtaking cotton, the traditional mainstay. Major international miners—Endeavour Mining, West African Resources, B2Gold—operate large-scale operations in relatively secure zones, though even these face increasing threats. Gold production hit record levels in 2024, providing the junta with hard currency, but the windfall hasn't translated into broad-based prosperity. Artisanal and small-scale mining proliferates, often unregulated, with revenues siphoned off by armed groups or smuggled across borders. Agriculture employs the majority of the workforce—cotton, millet, sorghum, livestock—but the insurgency controls an estimated 40% of national territory, displacing over 2 million people and rendering vast swathes of farmland unusable. Food insecurity is acute, and humanitarian needs are overwhelming.

Fiscally, the situation is dire. The deficit has widened to around 6% of GDP as military spending surges—Traoré has tripled defense budgets, purchased drones from Turkey, and hired Russian Wagner mercenaries (or their Africa Corps successors). Public debt is rising toward 55% of GDP, and debt service absorbs an increasing share of revenues. Foreign aid from traditional donors (EU, US, World Bank) has been suspended or reduced following the coup and deteriorating human rights conditions. China and Russia have stepped in with arms sales and resource deals, but these come with strings and don't replace the scale of previous support. Infrastructure is crumbling, schools and clinics in conflict zones are closed, and investment has collapsed.

**Bottom Line:** Burkina Faso's economy is in crisis, with growth choked by insecurity, inflation eroding purchasing power, and the military junta's policies isolating the country from Western financial support. Without a security turnaround, economic collapse looms.`,
    issues: JSON.stringify(['Jihadist Insurgency', 'Food Insecurity', 'Rising Military Spending', 'Gold Dependency', 'Suspended IMF Program']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Cambodia',
    type: 'country',
    lat: 12.5657,
    lng: 104.9910,
    country: 'Cambodia',
    category: 'economy',
    summary: `Cambodia is growing at a blistering 6.5% in 2025, one of the fastest rates in Asia, powered by garment exports, a construction boom, and rebounding tourism. Inflation is low at 2.5% in November, reflecting stable food and energy prices, and the economy remains heavily dollarized—roughly 90% of transactions are in US dollars, which provides stability but eliminates any independent monetary policy. The garment sector, dominated by exports to the US and EU, accounts for about 40% of GDP, employing over 800,000 workers (mostly women) in factories clustered around Phnom Penh and provincial industrial zones. Tourism is roaring back post-COVID, with 6.5 million visitors expected in 2025, drawn to Angkor Wat, Sihanoukville's beaches, and Phnom Penh's nightlife. Prime Minister Hun Manet, who took over from his father Hun Sen in August 2023, has maintained the pro-business, pro-investment orientation that has defined Cambodia's economic model for decades.

Yet the growth model is fragile and increasingly skewed. Chinese investment has flooded in, accounting for roughly 60% of FDI, particularly in real estate and infrastructure. Sihanoukville has transformed from a sleepy beach town into a casino-saturated boomtown with Chinese-owned hotels, casinos, and condos—many now sitting empty as Chinese demand softened. Real estate prices in Phnom Penh have surged, fueled by speculation and loose lending, raising fears of a bubble. The banking sector has expanded rapidly, often funded by Chinese capital, but lending standards are opaque, and non-performing loans may be understated. The garment industry, while employing hundreds of thousands, is vulnerable to trade policy shifts; any US tariffs or loss of EU preferential access (threatened over human rights concerns) would devastate exports. Minimum wages in garments hover around $200/month—competitive but barely livable, and labor rights are weak, with unions suppressed.

Diversification is limited. Agriculture still employs roughly 30% of the workforce—rice, rubber, cassava—but productivity is low. Manufacturing beyond garments is minimal. Governance remains a major constraint: corruption is pervasive (Cambodia ranks near the bottom of Transparency International's index), the judiciary is politicized, and land rights are insecure, with forced evictions common. Fiscally, Cambodia runs a modest deficit of ~3.5% of GDP, and public debt at 35% is manageable, but tax revenues are low due to weak enforcement and widespread evasion. The risk is a sudden stop: Chinese capital dries up, garment demand drops, or a financial sector blowup exposes hidden weaknesses.

**Bottom Line:** Cambodia's 6.5% growth is impressive but precariously balanced on garments, Chinese capital, and tourism—each vulnerable to external shocks. Weak governance, labor exploitation, and real estate froth threaten sustainability.`,
    issues: JSON.stringify(['Garment Export Dependence', 'Chinese Capital Influx', 'Real Estate Bubble Risks', 'Weak Labor Rights', 'Corruption']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Cameroon',
    type: 'country',
    lat: 7.3697,
    lng: 12.3547,
    country: 'Cameroon',
    category: 'economy',
    summary: `Cameroon's economy is expanding at a modest 3.8% in 2025, with oil sector decline offset by agriculture, services, and the country's strategic position as Central Africa's commercial hub. Oil production has dwindled to around 60,000 barrels per day—down from a peak of 180,000 bpd—as reserves deplete and investment flags, reducing government revenues and forcing economic diversification by necessity rather than choice. Inflation sits at 5.5% in November 2025, elevated by food price pressures linked to the Anglophone crisis disrupting production in the Northwest and Southwest regions. Unemployment officially stands at 12%, but youth unemployment is far higher, and the informal sector dominates employment. The Central African CFA franc, pegged to the euro and shared with five neighbors, provides monetary stability through the franc zone but leaves no room for independent policy adjustments.

Cameroon's economic geography is both asset and liability. The Port of Douala handles roughly 90% of the country's imports and exports and serves as a critical gateway for landlocked Chad and the Central African Republic, generating transit fees and logistics business. Agriculture remains the backbone: cocoa and coffee exports (mostly to Europe), timber, bananas, and palm oil, plus subsistence farming employing the majority. The service sector, particularly telecoms and banking, has grown in Yaoundé and Douala, and infrastructure investment—Chinese-built highways, a deepwater port at Kribi—has improved connectivity. Yet growth is constrained by an entrenched patronage system, state-owned enterprise inefficiency, and corruption that permeates every level of government. Transparency International ranks Cameroon around 140th globally; doing business requires navigating a maze of bribes and red tape.

Fiscally, the picture is deteriorating. Public debt has climbed toward 45% of GDP, and an IMF program is in place, demanding subsidy cuts and revenue reforms that are politically painful. The Anglophone crisis, simmering since 2017, has displaced hundreds of thousands, destroyed businesses in two regions, and drained security budgets. President Paul Biya, 92 years old and in power since 1982, shows no sign of stepping down, and succession uncertainty clouds the investment climate. Oil dependency is declining but not replaced with higher-value industries; cocoa and coffee are commodity exports with volatile prices. The risk is slow erosion: growth insufficient to absorb a young population, debt rising, and governance failures perpetuating inefficiency.

**Bottom Line:** Cameroon's economy is muddling through, leveraging its port and agricultural base, but oil decline, the Anglophone conflict, and endemic corruption limit potential. Without serious reform and political transition, stagnation looms.`,
    issues: JSON.stringify(['Oil Production Decline', 'Anglophone Crisis Impact', 'Corruption', 'Rising Public Debt', 'Infrastructure Gaps']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Canada',
    type: 'country',
    lat: 56.1304,
    lng: -106.3468,
    country: 'Canada',
    category: 'economy',
    summary: `Canada's economy is stumbling through 2025 with anemic 1.2% growth, the weakest in the G7 outside of Japan, as high interest rates, a housing market correction, and sluggish investment weigh heavily. The Bank of Canada has cut rates from their peak to 4.25% in November 2025, but inflation at 2.8% remains stubbornly above the 2% target, limiting further easing. Unemployment has risen to 6.5%, up from around 5% in 2023, as the labor market cools rapidly; hiring freezes and layoffs have hit tech, finance, and construction particularly hard. The Canadian dollar has weakened to roughly 1.39 per US dollar, reflecting concerns about growth divergence with the United States and exposure to a potential USMCA renegotiation in 2026, where protectionist pressures could threaten the 75% of Canadian goods exports that go south of the border.

The housing crisis dominates economic and political debate. Average home prices hover around $720,000 CAD nationally, with Toronto and Vancouver far higher, pricing out first-time buyers and younger generations. Immigration running at 500,000+ per year adds demand, while construction has slowed due to higher borrowing costs and municipal zoning restrictions. Household debt is at 180% of disposable income, the highest in the G7, and a wave of mortgage renewals in 2024-26 is forcing homeowners who locked in ultra-low rates during the pandemic onto much higher payments—many face payment shocks of $500-$1,000/month. Mortgage delinquencies are ticking up, and consumer spending is weakening as households tighten belts. The housing drag ripples through construction, real estate, home furnishings, and related services that together account for a significant share of GDP.

Energy remains a pillar: oil and gas account for roughly 20% of goods exports, with the Trans Mountain Expansion pipeline (completed 2024) increasing capacity to ship Alberta crude to Pacific markets, reducing reliance on the US. Yet oil prices have been volatile, and the carbon tax—politically divisive and attacked by conservatives—adds costs. The tech sector, concentrated in Toronto, Vancouver, and Montreal, is growing, with AI research hubs (Vector Institute, Mila) attracting talent, but Canada still loses top engineers to Silicon Valley. Fiscally, Ottawa is running a deficit around $40 billion CAD (~1.5% of GDP), manageable but with little room for major stimulus. The risk is prolonged stagnation: investment stays weak, productivity growth remains dismal (Canada lags US badly), and potential output erodes.

**Bottom Line:** Canada's economy is mired in low growth, hobbled by a housing affordability crisis, over-leveraged households, and dependence on a slowing US. Without productivity gains and housing reform, mediocrity beckons.`,
    issues: JSON.stringify(['Housing Affordability Crisis', 'High Household Debt', 'Weak Productivity', 'US Trade Dependence', 'Rising Unemployment']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Chile',
    type: 'country',
    lat: -35.6751,
    lng: -71.5430,
    country: 'Chile',
    category: 'economy',
    summary: `Chile's economy is sputtering in November 2025, posting anemic 1.8% growth, dragged down by weak investment, copper price volatility, and political paralysis over pension reform. Copper—"el salario de Chile"—still dominates, accounting for over 50% of exports, and prices have slipped to around $4.20 per pound from highs above $5 in 2022, crimping government revenues and mining sector investment. The Chilean peso has weakened to approximately 950 CLP per US dollar, down from around 800 in 2024, reflecting investor caution about fiscal policy and global risk appetite. Inflation sits at 4.1% in November, above the central bank's 3% target, forcing the Banco Central to proceed cautiously on rate cuts. Unemployment at 8.6% is elevated, particularly in mining regions where job cuts have followed lower copper prices and operational challenges at major mines like Codelco's aging assets.

President Gabriel Boric, a leftist elected in 2021, has struggled to advance his ambitious reform agenda. The proposed new constitution was rejected by voters in 2022, and subsequent pension reform efforts have stalled in Congress amid fierce opposition from the right and centrist parties. Chile's pension system—fully privatized AFPs (Administradoras de Fondos de Pensiones) introduced under Pinochet—is deeply unpopular; retirees receive pensions averaging 40% of their working salary, fueling protests and demands for state involvement. The political stalemate has paralyzed major economic decisions. Meanwhile, lithium—the "white gold" for electric vehicles—has become a strategic focus. Chile holds the world's second-largest reserves, and Boric announced plans in 2023 to nationalize future lithium concessions and increase state control through Codelco and a new state lithium company. This has spooked private investors, notably SQM and Albemarle, who fear expropriation or renegotiation of contracts.

Fiscally, Chile remains relatively disciplined, with public debt around 38% of GDP and a fiscal rule in place, but revenues are constrained by low copper prices. Investment rates have dropped sharply, reflecting political uncertainty and regulatory unpredictability. Mining, which accounts for about 15% of GDP, requires massive capex to sustain production, but companies are holding back. Inequality, while improved, remains high, and social unrest that erupted in 2019 still simmers. The risk is a prolonged slump: copper and lithium prices soften further, investment stays frozen, and Chile's traditional economic outperformance in Latin America fades.

**Bottom Line:** Chile's economy is stuck in low gear, buffeted by copper volatility, political gridlock over pensions, and uncertainty around lithium nationalization. Without investment recovery and political compromise, growth will remain disappointing.`,
    issues: JSON.stringify(['Copper Price Volatility', 'Pension Reform Paralysis', 'Lithium Nationalization Uncertainty', 'Weak Investment', 'Political Gridlock']),
    topStories: JSON.stringify([])
  },
  {
    name: 'China',
    type: 'country',
    lat: 35.8617,
    lng: 104.1954,
    country: 'China',
    category: 'economy',
    summary: `China's economy is slowing to 4.8% growth in 2025, below the official 5% target, weighed down by a deepening property crisis, deflationary pressures, and weakening export momentum. The property sector—long the engine of Chinese growth, accounting for roughly 25% of GDP directly and indirectly—remains mired in distress. Evergrande and Country Garden, two of the largest developers, defaulted on offshore bonds, and property sales are down 40% from peak levels. Local governments, whose revenues depended heavily on land sales to developers, face massive fiscal shortfalls, with hidden debts estimated in the trillions of yuan. Consumer inflation (CPI) is barely positive at 0.3% in November 2025, and producer prices remain negative, reflecting weak domestic demand and overcapacity. The People's Bank of China has cut rates and reserve requirements repeatedly, but monetary easing has limited traction when households and businesses are pessimistic.

Youth unemployment became a political flashpoint in 2023, prompting authorities to suspend and revise the data, but the underlying crisis persists: graduates face a brutal job market as the private sector retrenches under regulatory pressure and state-owned enterprises can't absorb the surplus. The official unemployment rate sits at 5.2%, but this vastly understates slack. Debt across the economy—households, corporations, local governments—exceeds 280% of GDP, one of the highest levels globally, constraining further stimulus. The yuan has weakened to around 7.25 per dollar, the lowest since 2023, as capital outflows accelerate despite capital controls. The PBOC is managing depreciation carefully, balancing competitiveness against instability, but the direction is clear.

Export strength in manufacturing—especially electric vehicles, where BYD and others are conquering global markets—provides a partial offset, but US tariffs, European anti-subsidy investigations, and the broader "de-risking" by Western companies threaten this lifeline. Semiconductors remain a chokepoint; US export controls have starved Chinese firms of advanced chips, though Huawei's surprise Mate 60 phone using domestically produced 7nm chips suggests partial workarounds. President Xi Jinping's third term has consolidated personal power, but his emphasis on "common prosperity," crackdowns on tech giants, and state control over the private sector have chilled entrepreneurial confidence. Real estate remains the zombie in the room: too big to bail out fully, too systemic to let collapse. Stimulus has been piecemeal and insufficient—Beijing fears repeating the mistakes of 2008-09, when massive credit expansion created the debt overhang.

**Bottom Line:** China's growth model is broken—property crisis, deflation, weak consumption, and Xi's statist turn combine to trap the economy in low gear. Without bold stimulus or genuine reform, the risk is Japanification: low growth, high debt, lost decades.`,
    issues: JSON.stringify(['Property Crisis', 'Deflation Risks', 'Youth Unemployment', 'Debt Overhang', 'Geopolitical Decoupling']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Colombia',
    type: 'country',
    lat: 4.5709,
    lng: -74.2973,
    country: 'Colombia',
    category: 'economy',
    summary: `Colombia's economy is growing at a tepid 2.5% in 2025, well below potential, as President Gustavo Petro's ambitious reform agenda collides with investor anxiety, a weakening peso, and tight monetary policy. Inflation remains sticky at 6.8% in November, far above the Banco de la República's 3% target, forcing the central bank to hold rates at 11.5%—among the highest in Latin America—crimping credit and investment. The peso has depreciated to around 4,100 per US dollar, weakened by fiscal concerns, falling oil prices, and capital outflows. Unemployment at 10.5% is elevated, and the informal sector employs roughly 60% of workers, leaving vast swathes of the population without labor protections, pensions, or social security.

Colombia's economic base remains commodity-dependent. Oil production hovers around 800,000 barrels per day, but the sector is under pressure: Petro, Colombia's first leftist president, froze new exploration licenses shortly after taking office in 2022, citing climate commitments, and has pushed to phase out fossil fuel dependency. This has spooked international oil companies and crimped future production prospects, threatening a major revenue source—oil accounts for roughly 30% of export earnings. Coffee, coal, and flower exports provide diversification, but all are vulnerable to price swings. The trade deficit has widened as low oil prices reduce export revenues, and the peso's weakness raises import costs, feeding inflation.

Petro's reform push—healthcare overhaul, pension reform, labor market changes—aims to reduce inequality (Gini coefficient around 54, among Latin America's highest) and expand social protections, but implementation has been chaotic, and business groups warn of unintended consequences. Healthcare reform, which would centralize the system and eliminate private insurers' intermediary role, has stalled amid legal challenges and fierce lobbying. Fiscally, the deficit has widened to around 5% of GDP, and public debt is approaching 60%, raising concerns about sustainability. Petro's "Total Peace" policy, seeking negotiated settlements with ELN guerrillas and dissident FARC factions, has produced mixed results; violence persists in several regions, and security challenges drain budgets.

The risk is a confidence crisis: investors pull back further, the peso weakens more, inflation stays high, and growth stalls. Colombia has traditionally been seen as one of Latin America's more stable economies, but Petro's heterodox policies and political confrontations (with Congress, the judiciary, business elites) have rattled that perception. Oil sector uncertainty is particularly damaging; without new exploration, production will decline, and revenues will fall just as spending commitments rise.

**Bottom Line:** Colombia's economy is caught between Petro's social transformation agenda and market realities—weak growth, high inflation, and investor flight. Without fiscal discipline and pragmatic compromise, the risk is stagflation or a balance of payments crisis.`,
    issues: JSON.stringify(['Oil Sector Uncertainty', 'High Inflation', 'Fiscal Deficits', 'Peso Depreciation', 'Informal Employment']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Costa Rica',
    type: 'country',
    lat: 9.7489,
    lng: -83.7534,
    country: 'Costa Rica',
    category: 'economy',
    summary: `Costa Rica's economy is motoring along at a solid 4.2% in 2025, outperforming most of Latin America, driven by a booming tech and business process outsourcing (BPO) sector, resilient tourism, and prudent macroeconomic management. Inflation has cooled to 2.5% in November, comfortably within the central bank's 2-4% target, allowing rate cuts to 5.5% that support credit growth and investment. Unemployment sits at 7%, and while the informal sector remains large (around 40% of employment), job quality in the formal economy—particularly in tech, medical devices, and services—is improving. The colón is stable at approximately 520 per US dollar under a managed float, though the economy is highly dollarized in practice, with many transactions, mortgages, and savings denominated in dollars.

The absence of a military since 1948—savings redirected to education and healthcare—has been a defining competitive advantage. Costa Rica boasts the highest literacy rates in Central America, a relatively healthy and educated workforce, and a reputation for stability that attracts multinationals. Intel famously established a major operation in the 1990s (closed in 2014 for chip manufacturing but maintains design centers), and today companies like Boston Scientific, Align Technology (Invisalign), Abbott, and Concentrix employ tens of thousands in high-value manufacturing and services. Medical device exports have surged, positioning Costa Rica as a regional hub. Tourism is the other pillar: over 3 million visitors are expected in 2025, drawn to eco-tourism, beaches, national parks (25% of the country is protected), and the "pura vida" lifestyle. Tourism revenues support countless small businesses, from hotels to tour operators.

Yet challenges loom. Public debt stands at around 70% of GDP, high for a developing country, accumulated over years of fiscal deficits and insufficient tax revenues. An IMF program put in place in 2021 demanded fiscal reforms, including a VAT increase and public sector wage restraint, which have stabilized finances but remain politically contentious. Infrastructure is a persistent bottleneck: roads are in poor condition, ports are inefficient, and congestion in San José strangles productivity. Inequality, while lower than neighbors, is rising, and rural areas lag urban centers. The education system, once a source of pride, faces quality challenges, and PISA scores have slipped. Carbon neutrality by 2050 is an ambitious goal—renewable energy already provides 99%+ of electricity (hydro, geothermal, wind)—but transport emissions remain high.

**Bottom Line:** Costa Rica is Central America's economic bright spot—stable, diversified, and growing—but high public debt, infrastructure deficits, and inequality threaten to slow convergence. Continued fiscal discipline and investment in education are essential.`,
    issues: JSON.stringify(['High Public Debt', 'Infrastructure Bottlenecks', 'Inequality', 'Tourism Dependence', 'Education Quality']),
    topStories: JSON.stringify([])
  },
  {
    name: 'Croatia',
    type: 'country',
    lat: 45.1,
    lng: 15.2,
    country: 'Croatia',
    category: 'economy',
    summary: `Croatia's economy is posting steady 3.2% growth in 2025, fueled by a booming tourism season, EU structural funds, and the benefits of euro adoption and Schengen entry in January 2023. Inflation has eased to 3.5% in November, down from the spike that followed euro adoption (some businesses used the currency switch to raise prices), and unemployment is remarkably low at 6.1%, with labor shortages reported in tourism, construction, and hospitality. The euro replaced the kuna at a rate of 7.53450, and while the transition caused initial price anxiety, the elimination of exchange rate risk and transaction costs has been economically beneficial, particularly for a country so tightly integrated with the eurozone.

Tourism is the engine: the Adriatic coast, with its stunning islands, medieval cities like Dubrovnik and Split, and Plitvice Lakes National Park, draws over 20 million visitors annually—more than four times Croatia's population of 3.8 million. Tourism accounts for roughly 20% of GDP and supports countless jobs in hotels, restaurants, transport, and retail. The sector roared back post-pandemic, with 2025 on track to exceed pre-COVID visitor numbers. High-end tourism is growing, attracted by yacht charters, luxury hotels, and Croatia's inclusion in premium travel itineraries. EU membership (since 2013) and Schengen accession have removed border hassles, making Croatia more accessible to European tourists driving or taking short flights.

Yet the tourism-dependent model has weaknesses. Seasonality is extreme—coastal economies boom June-September and nearly shut down in winter, creating precarious, low-wage, seasonal jobs. Housing affordability in Dubrovnik, Split, and coastal towns has deteriorated as short-term rentals (Airbnb) displace residents, echoing Barcelona or Venice. Corruption and rule of law remain concerns flagged by Brussels; the judiciary is improving but still not fully independent, and public procurement is marred by favoritism. Demographic decline is severe: Croatia's population has shrunk from 4.5 million in 1990 to 3.8 million today due to low birth rates and mass emigration to Germany, Austria, Ireland. Labor shortages will worsen, and without immigration (which is politically sensitive), the workforce will shrink further.

Fiscally, Croatia has improved: public debt has declined to ~63% of GDP from COVID highs, and the budget is near balance. EU funds are critical for infrastructure—highways, rail, ports—and absorption rates are improving. The risk is stagnation: tourism plateaus, emigration continues, and productivity growth remains insufficient to close the income gap with Western Europe. Investment in education, innovation, and diversification beyond tourism is essential but lacking.

**Bottom Line:** Croatia is thriving on tourism and EU integration, with low unemployment and steady growth, but over-reliance on seasonal tourism, demographic collapse, and weak institutions threaten long-term sustainability. Diversification is urgent.`,
    issues: JSON.stringify(['Tourism Dependency', 'Demographic Decline', 'Seasonal Employment', 'Labor Shortages', 'Corruption']),
    topStories: JSON.stringify([])
  },
]

async function insertEconomySummaries() {
  console.log('Inserting ECONOMY & BUSINESS write-ups for Batch 2...\n')

  let inserted = 0
  let errors = 0

  for (const location of ECONOMY_SUMMARIES) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`Inserting: ${location.name} - ECONOMY & BUSINESS`)
    console.log('='.repeat(60))

    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: location.category
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: location.category,
          summary: location.summary,
          issues: location.issues,
          topStories: location.topStories,
          storyCount: 0,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary: location.summary,
          issues: location.issues,
          topStories: location.topStories,
          updatedAt: new Date()
        }
      })

      inserted++
      console.log(`  ✓ Successfully inserted/updated`)
      console.log(`  Character count: ${location.summary.length}`)

      // Show preview
      const previewLines = location.summary.split('\n\n')[0]
      console.log(`\n  Preview:`)
      console.log(`    ${previewLines.substring(0, 200)}...`)

    } catch (error) {
      console.error(`  ✗ Failed to insert ${location.name}:`, error)
      errors++
    }
  }

  console.log(`\n\n${'='.repeat(60)}`)
  console.log(`INSERTION COMPLETE`)
  console.log('='.repeat(60))
  console.log(`   Inserted/Updated: ${inserted} economy summaries`)
  console.log(`   Errors: ${errors}`)
  console.log('='.repeat(60))
}

insertEconomySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
