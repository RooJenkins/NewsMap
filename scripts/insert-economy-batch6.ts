import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ECONOMY_SUMMARIES = {
  LUXEMBOURG: {
    name: 'Luxembourg',
    country: 'Luxembourg',
    lat: 49.8153,
    lng: 6.1296,
    summary: `Luxembourg remains the world's wealthiest nation by GDP per capita—€132,370 in 2024—but that headline figure obscures a more complex economic reality. This is not a petro-state or resource bonanza; it's a hyper-financialized service economy built on regulatory arbitrage, tax optimization, and deep integration into European capital markets. The financial sector accounts for 26% of GDP and employs 47,000 people—12% of the workforce—but nearly 80% of Luxembourg's workers are either cross-border commuters or foreign residents. The prosperity is real, but it's concentrated and vulnerable.

**The Financial Services Engine**

Luxembourg is the world's second-largest investment fund domicile after the United States, managing €5.6 trillion in assets as of Q3 2025. The fund industry alone contributes €1.8 billion annually in tax revenue. Private banking thrives here—over 130 banks operate, many serving ultra-high-net-worth clients seeking discretion and favorable tax treatment. The insurance sector, particularly reinsurance and captive insurance for multinational corporations, adds another layer. Amazon, PayPal, and dozens of tech giants route European revenues through Luxembourg structures, generating substantial fees for advisors, auditors, and legal firms while minimizing corporate tax bills.

But the model faces mounting pressure. The EU's Anti-Tax Avoidance Directive (ATAD) and the OECD's global minimum corporate tax of 15%—fully implemented in Luxembourg as of January 2024—are eroding the competitive advantages. Ireland faced similar challenges and adapted, but Luxembourg's economy is more narrowly concentrated. When Fitch revised Luxembourg's credit outlook from stable to negative in September 2025, citing fiscal pressures and structural vulnerabilities, markets took note. The AAA rating remains, but the trajectory concerns bond investors.

**Inflation, Wages, and the Cost-of-Living Crisis**

Inflation hit 6.2% in 2023 before moderating to 3.1% in 2024 and an estimated 2.4% for 2025. That sounds manageable until you consider Luxembourg's automatic wage indexation system—when inflation exceeds 2.5% over six months, all wages rise by 2.5%. This protects purchasing power but creates a wage-price spiral that's difficult to control. Public sector wages, which are generous even by European standards, drive fiscal costs higher. The government employs 32,000 people directly, and total public spending reached 43% of GDP in 2024.

Housing costs are the killer. Average home prices in Luxembourg City exceed €12,000 per square meter. Rent for a two-bedroom apartment averages €2,400 monthly. Even with high wages—median gross salary is €68,000—affordability is a crisis, particularly for younger workers and recent immigrants. Cross-border workers from Belgium, France, and Germany (218,000 daily commuters) avoid housing costs by living abroad, but they create infrastructure strain and political tension. Traffic congestion is severe, and public transport investments lag demand.

**Growth, Employment, and Structural Challenges**

GDP growth slowed to 1.3% in 2024 and is projected at 2.1% for 2025—solid by European standards but below the 3-4% Luxembourg enjoyed pre-pandemic. The unemployment rate is just 5.4%, remarkably low, but youth unemployment (under 25) is 14.8%, signaling difficulty transitioning into a labor market dominated by finance and highly technical services. The dependency ratio is favorable for now—Luxembourg's population is young by European standards, median age 39.7—but pension liabilities are mounting. The state pension system runs a surplus today but will shift to deficit by 2035 without reform.

The government is attempting economic diversification. The space industry—satellite communications, data services—employs 1,200 people and generates €300 million annually. Luxembourg was the first country to pass legislation allowing commercial space mining (2017), positioning for future industries that may never materialize at scale. Logistics and e-commerce warehousing have grown, leveraging Luxembourg's central European location, but these are lower-wage sectors that don't replace finance sector salaries.

**Trade, Competitiveness, and the EU Context**

Luxembourg's trade balance is chronically negative—imports far exceed exports—but this is misleading. The country imports refined petroleum, machinery, and consumer goods while exporting financial services, which don't appear in traditional trade statistics. The current account surplus is 4.9% of GDP in 2025, driven by financial services income and cross-border investment returns. Luxembourg's competitiveness ranking (IMD World Competitiveness Center) is 10th globally, down from 6th in 2020, reflecting concerns about cost inflation and regulatory burden.

Currency stability is assured—Luxembourg uses the euro and benefits from ECB monetary policy. But fiscal policy is constrained by EU rules. The public debt-to-GDP ratio is 26%, among the EU's lowest, providing fiscal space. Yet structural deficits are projected to widen from 1.2% of GDP in 2025 to 2.8% by 2029 as aging costs rise and tax revenues plateau. The government proposed pension reforms in 2024—raising retirement age from 65 to 67 gradually—but labor unions and the Socialist party oppose it fiercely. Elections in 2028 will force a reckoning.

**Inequality and Distributional Questions**

Luxembourg's Gini coefficient is 0.35, moderate by global standards but concealing vast wealth disparities. The top 10% of earners capture 27% of income. Wealth inequality is starker—property ownership is concentrated, and financial assets are held overwhelmingly by the top 5%. The minimum wage is €2,570 gross monthly (highest in the EU), ensuring a decent floor, but the gap between minimum wage workers and financial sector professionals is a chasm. Social cohesion is tested by linguistic divisions (Luxembourgish, French, German, English all spoken) and the cultural gap between native Luxembourgers (52% of residents) and foreign nationals.

**The Bottom Line**

Luxembourg's economic model—tax optimization, regulatory expertise, and financial services dominance—has delivered extraordinary wealth, but the foundations are shifting. Global tax harmonization reduces advantages. Inflation and housing costs strain social cohesion. Demographic aging and fiscal pressures demand reforms that politicians avoid. The economy remains robust, unemployment low, and public finances strong, but the trajectory is toward slower growth, higher costs, and diminished competitiveness. Luxembourg must diversify or accept that its golden era of tax-driven prosperity is winding down. The next decade will reveal whether this small nation can adapt as successfully as it capitalized on 20th-century loopholes.`,
    issues: ['Financial Services Dominance', 'Tax Competition Erosion', 'Housing Affordability Crisis', 'Wage-Price Indexation Spiral', 'Pension Reform Delays']
  },

  MALAYSIA: {
    name: 'Malaysia',
    country: 'Malaysia',
    lat: 4.2105,
    lng: 101.9758,
    summary: `Malaysia is stuck in the middle-income trap, and everyone knows it. GDP per capita has hovered around $12,000-$13,000 for a decade, well above regional peers like Indonesia but far below the $30,000+ threshold economists associate with high-income status. Growth in 2024 came in at 4.8%, respectable but insufficient to break through. The 2025 forecast is 4.5-5.0%, constrained by global semiconductor demand weakness, elevated inflation, and persistent structural drags: cronyism, brain drain, and a subsidy system that costs RM80 billion annually while distorting investment decisions.

**The Semiconductor Dependency and Export Weakness**

Malaysia is the world's 7th largest exporter of semiconductors and the leading exporter of semiconductor testing and packaging services. Penang and Klang Valley host Intel, Infineon, and dozens of suppliers. But Malaysia is trapped in the lower-value segments—assembly, testing, packaging—while Taiwan, South Korea, and increasingly China dominate design and advanced manufacturing. The semiconductor export slowdown in 2024-2025, driven by inventory corrections and weak PC/smartphone demand, hit Malaysia hard. Electronics and electrical products account for 38% of total exports, creating dangerous concentration risk.

Total exports grew just 1.2% year-on-year in Q3 2025, the slowest pace since the pandemic. Palm oil, Malaysia's second-largest export, faces price volatility and environmental backlash. The EU's Deforestation Regulation, effective December 2024, restricts palm oil imports unless producers prove zero-deforestation sourcing. Malaysian producers are scrambling to comply, but certification costs are high and smallholders are squeezed. Natural gas exports to Singapore and Thailand provide revenue, but Malaysia shifted from net energy exporter to occasional importer as domestic demand rises and aging fields decline.

**Inflation, Ringgit Weakness, and Fiscal Strains**

The ringgit traded at 4.72 to the US dollar in October 2025, down from 4.13 in early 2022. Currency weakness is partly external—Fed rate hikes, dollar strength—but also reflects capital outflows, low investor confidence, and perceived mismanagement. Prime Minister Anwar Ibrahim's unity government, formed in November 2022, promised reforms but has delivered incrementalism. Foreign direct investment (FDI) inflows were $11.4 billion in 2024, down from $16.9 billion in 2021. Domestic private investment remains anemic at 11% of GDP, well below the 15-18% needed to sustain higher growth.

Inflation averaged 3.3% in 2024 and is running 2.8% in 2025, seemingly under control. But this masks price pressures concentrated in food (5.1% annually) and housing costs in Kuala Lumpur, where rents rose 12% year-on-year. The government maintains fuel subsidies—RON95 petrol is capped at RM2.05 per liter despite market prices exceeding RM3.00—costing the treasury RM35 billion in 2024. Electricity tariffs are subsidized, costing another RM18 billion. Anwar has repeatedly promised to rationalize subsidies, targeting them to the bottom 40% (B40) income group, but implementation has been delayed. Politically, removing subsidies risks backlash, especially among the Malay-majority rural voters who form the base of Anwar's coalition partners.

The fiscal deficit is projected at 4.3% of GDP for 2025, down from 5.6% in 2023 but still elevated. Public debt stands at 64% of GDP, near the self-imposed 65% ceiling. Interest payments consume 16% of government revenue, constraining spending on education, infrastructure, and R&D. The government's revenue base is narrow—income tax yields just 12% of GDP, compared to 15-18% in comparable economies. Goods and Services Tax (GST) was abolished in 2018 and replaced with the less efficient Sales and Services Tax (SST), costing RM15 billion annually in foregone revenue. Reintroducing GST would broaden the tax base but is political suicide.

**Labor Market, Brain Drain, and the Bumiputera Policy**

Unemployment is 3.3%, low by global standards, but youth unemployment (ages 15-24) is 11.2%, reflecting skills mismatches. Malaysia produces 250,000 university graduates annually, but many are underemployed or emigrate. An estimated 1.8 million Malaysians live abroad, two-thirds of whom are ethnic Chinese and Indian professionals seeking better pay and meritocratic systems. The brain drain costs Malaysia an estimated RM10 billion annually in lost human capital.

The New Economic Policy (NEP) and its successors, designed to uplift the Bumiputera (ethnic Malay) majority, mandate preferential treatment in government contracts, university admissions, and corporate equity. While these policies have expanded the Malay middle class, they've also created inefficiencies, discouraged non-Malay talent, and entrenched rent-seeking. Government-linked companies (GLCs) control 36% of market capitalization, often underperforming private competitors. Petronas, the national oil company, is the exception—well-managed and profitable—but many GLCs are bloated and politically compromised.

Foreign workers—3.5 million legal, perhaps 2 million undocumented—fill low-wage jobs in plantations, construction, and manufacturing. Malaysia relies on Bangladeshi, Indonesian, and Nepali labor while failing to upskill its own workforce. The minimum wage is RM1,500 ($315) monthly, insufficient for urban living. Real wage growth has been stagnant for a decade, contributing to household debt, which reached 82% of GDP in 2024, among Asia's highest.

**The China Balancing Act and Regional Trade**

Malaysia is China's largest trading partner in ASEAN, with bilateral trade exceeding $190 billion in 2024. Chinese investment in infrastructure—East Coast Rail Link (ECRL), industrial parks—brings capital but also debt and geopolitical complications. The US accounts for 11% of Malaysian exports, creating tension as Washington pressures ASEAN nations to decouple from Beijing. Anwar has pursued hedging, engaging both powers while committing to neither. Malaysia joined BRICS in 2024, signaling willingness to diversify geopolitical alignments, but the economic benefits remain unclear.

CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership) offers market access opportunities, but domestic opposition—particularly over labor standards and GLC reforms—has stalled ratification. The Regional Comprehensive Economic Partnership (RCEP), which Malaysia joined in 2022, reduces tariffs but has generated limited new trade flows. The ASEAN Economic Community promises regional integration, but infrastructure gaps, regulatory divergence, and political fragmentation limit its impact.

**The Bottom Line**

Malaysia's economy is fundamentally sound—diversified exports, manageable inflation, low unemployment—but it's treading water. Breaking into high-income status requires painful reforms: subsidy rationalization, tax base expansion, GLC restructuring, Bumiputera policy modernization, and massive upskilling. Anwar's unity government is politically fragile, dependent on coalitions spanning Malay nationalists, Islamic parties, and reformists. Bold reforms risk destabilizing the coalition. So Malaysia muddles through, growing at 4-5% annually, neither collapsing nor surging ahead. For a country with Malaysia's human capital, natural resources, and strategic location, that's a profound waste of potential. The middle-income trap isn't a curse; it's a choice. And Malaysia keeps choosing incrementalism over transformation.`,
    issues: ['Middle-Income Trap Persistence', 'Semiconductor Export Dependency', 'Subsidy Reform Delays', 'Brain Drain and Skills Mismatch', 'Ringgit Weakness and Capital Flight']
  },

  MEXICO: {
    name: 'Mexico',
    country: 'Mexico',
    lat: 23.6345,
    lng: -102.5528,
    summary: `Mexico is experiencing nearshoring's biggest beneficiary moment—and simultaneously testing whether it can capitalize on it. GDP growth hit 3.2% in 2024 and is forecast at 2.8% for 2025, driven almost entirely by manufacturing relocations from China. Foreign direct investment reached $36 billion in 2024, with Texas Instruments, Tesla, and dozens of auto suppliers building factories in Nuevo León, Guanajuato, and Querétaro. The US-Mexico-Canada Agreement (USMCA) provides tariff-free access to the world's largest consumer market, and Mexico's labor costs—$4.50/hour in manufacturing versus $28 in the US—make it irresistible for firms diversifying supply chains. But infrastructure bottlenecks, energy shortages, water scarcity, and organized crime threaten to squander this generational opportunity.

**The Nearshoring Boom and Manufacturing Transformation**

Manufacturing exports hit $560 billion in 2024, up 8% year-on-year, with automotive (32% of total) leading. Mexico is the world's 7th largest vehicle producer and 4th largest exporter. Tesla's Gigafactory Mexico in Monterrey, announced in 2023, will produce 1 million vehicles annually starting in 2026. General Motors, Ford, and Stellantis are expanding capacity. But it's not just autos—aerospace, medical devices, and electronics are surging. Guadalajara has become "Mexico's Silicon Valley," hosting Intel, HP, and hundreds of suppliers. The trade surplus with the United States reached $152 billion in 2024, Mexico's largest ever, surpassing China as the top US goods trading partner.

But nearshoring's benefits are geographically concentrated. The northern states—Nuevo León, Coahuila, Chihuahua—are booming, while the south—Chiapas, Oaxaca, Guerrero—remains impoverished. GDP per capita in Mexico City is $28,000; in Chiapas it's $6,200. Infrastructure is the chokepoint. The Monterrey-Laredo corridor is gridlocked; trucks wait 6-8 hours at border crossings. Rail capacity is insufficient. Ports lack modern container facilities. Electricity blackouts in industrial zones are increasingly common as demand outpaces generation capacity. President Claudia Sheinbaum, who took office in October 2024, has promised $20 billion in infrastructure investments, but execution is uncertain.

**Energy Policy, CFE Dominance, and Investment Deterrents**

Mexico's energy sector is the nearshoring boom's Achilles heel. The previous AMLO administration (2018-2024) renationalized energy, strengthening the state-owned Comisión Federal de Electricidad (CFE) and Pemex while sidelining private investment. Pemex, the national oil company, is drowning in $104 billion of debt—the highest of any oil company globally. Oil production has declined from 3.4 million barrels per day (bpd) in 2004 to 1.6 million bpd in 2025. Refining capacity is inadequate, forcing Mexico to import 65% of its gasoline despite being an oil producer. Sheinbaum inherited this mess and shows little inclination to reverse course. She's committed to CFE dominance and Pemex bailouts, which consumed $15 billion in fiscal transfers in 2024.

Electricity prices for industrial users have risen 18% since 2022, crimping competitiveness. Renewable energy projects—solar and wind farms in Sonora, Tamaulipas—face regulatory delays and arbitrary grid connection denials by CFE, which views private generators as competitors. Nearshoring firms need reliable, affordable power; Mexico is struggling to deliver. Water scarcity is worse. Monterrey faced severe shortages in summer 2024, forcing industrial rationing. Aquifer depletion in Bajío, Mexico's manufacturing heartland, threatens long-term viability. Climate change is intensifying droughts, and Mexico lacks water infrastructure for industrial expansion.

**Inflation, Monetary Policy, and Peso Dynamics**

Inflation peaked at 8.7% in 2022 before moderating to 4.7% in 2024 and an estimated 3.9% in 2025. Banco de México (Banxico) raised rates aggressively to 11.25% in March 2023, among the highest globally, before cutting to 10.0% by October 2025 as inflation eased. High rates attracted capital inflows, strengthening the peso to 16.8 per dollar in mid-2024, the strongest since 2017. But peso strength hurts exporters and tourism, creating political pressure for easing. Banxico faces the classic emerging market dilemma: tight policy to control inflation versus growth-supportive easing.

The peso weakened to 18.2 per dollar by November 2025 as the Fed held rates elevated and capital flowed to US assets. Currency volatility complicates corporate planning. Remittances—$63 billion in 2024, 3.6% of GDP—provide a crucial buffer, supporting consumption in migrant-sending states like Michoacán and Zacatecas. But remittances are pro-cyclical; if the US economy slows, they decline.

**Fiscal Constraints, Debt, and Pemex Liabilities**

Mexico's fiscal deficit was 4.9% of GDP in 2024, the widest since the pandemic, driven by Pemex bailouts, pension liabilities, and infrastructure spending. Public debt reached 52% of GDP, up from 45% in 2018. Moody's rates Mexico Baa2, stable outlook, but rising debt and Pemex's deteriorating finances risk downgrades. Fitch maintains BBB with negative outlook. The government collects just 16.5% of GDP in tax revenue, among the lowest in Latin America. Tax evasion is rampant, particularly in the informal sector, which employs 56% of workers. VAT is 16%, but collection efficiency is poor. Expanding the tax base requires formalizing the economy, a multi-decade challenge.

Sheinbaum's 2025 budget prioritizes social spending—cash transfers, pensions, education—over fiscal consolidation. She's politically constrained; Morena, the ruling party, depends on working-class voters who benefit from transfers. Austerity would be electoral suicide. But bond markets are watching. Mexican 10-year yields rose 65 basis points in Q3 2025, reflecting investor concerns about fiscal sustainability.

**Crime, Corruption, and Business Environment**

Organized crime is the elephant in every boardroom. Homicides declined to 26,000 in 2024 from 36,000 in 2019, but extortion, kidnapping, and cargo theft are rising. Criminal groups control trucking routes, charging "piso" (protection fees) to logistics companies. In Guanajuato, auto suppliers face weekly extortion demands. Some foreign firms hire private security costing $50,000-$200,000 annually per facility. Corruption perceptions index (Transparency International) ranks Mexico 126th of 180 countries. Customs officials solicit bribes. Permitting processes are opaque. Judicial reform passed in 2024—electing judges by popular vote—undermines rule of law, as elected judges are vulnerable to political and criminal pressure.

**The Bottom Line**

Mexico has a 10-year window to convert nearshoring into sustained development. Success requires infrastructure investment, energy sector reform, water management, tax base expansion, and improved security. Sheinbaum has the political capital—Morena controls both chambers of Congress—but not the policy orientation. She's doubling down on statism: CFE dominance, Pemex bailouts, social spending over investment. This may deliver short-term political wins but sacrifices long-term growth. Mexico is growing at 2.8% when it should be growing at 5%. The manufacturing boom is real, but without complementary reforms, it'll plateau. Firms will shift to Vietnam, India, or back to China if costs rise or reliability falters. Nearshoring is an opportunity, not a guarantee. Mexico is wasting it in slow motion.`,
    issues: ['Nearshoring Manufacturing Boom', 'Energy Sector Bottlenecks', 'Infrastructure and Water Scarcity', 'Pemex Debt Overhang', 'Organized Crime and Corruption']
  },

  MOLDOVA: {
    name: 'Moldova',
    country: 'Moldova',
    lat: 47.4116,
    lng: 28.3699,
    summary: `Moldova is Europe's poorest country, and 2025 has been a year of economic siege. GDP per capita is $5,670, less than a third of Romania's. Growth slowed to 2.3% in 2024 and is forecast at just 1.8% for 2025, dragged down by energy costs, Transnistria's frozen conflict turning hot economically, Russian interference, and the ongoing structural exodus of working-age population. Inflation spiked to 12.1% in 2022 during the energy crisis, moderated to 5.2% in 2024, but edged back to 6.8% in 2025 as global food and energy prices rose. The National Bank of Moldova holds rates at 6.5%, threading the needle between growth support and inflation control. This is survival economics in a geopolitical vice.

**The Energy Crisis and Transnistria's Economic Blackmail**

Moldova imports 100% of its natural gas, historically from Russia via Ukraine. When Russia cut supplies in late 2022, Moldova scrambled to source gas from Romania and European markets at 3-4x previous prices. The government subsidized household heating costs to prevent social collapse, but the fiscal hit was €400 million in 2023-2024. Energy prices for industrial users tripled, crippling manufacturing competitiveness. Several textile and food processing plants closed, shedding 8,000 jobs.

Transnistria, the Russian-backed breakaway region, complicates everything. It hosts the Cuciurgan power plant, which historically supplied 80% of Moldova's electricity. Gazprom provided free gas to Transnistria, which used it to generate power sold to Moldova. But in early 2025, Gazprom halted supplies, ostensibly over disputed debts. The Cuciurgan plant shut down, cutting Moldova's power supply by two-thirds overnight. Moldova now imports electricity from Romania at premium prices. Monthly electricity bills for households doubled. The government's emergency subsidies cost €150 million in Q1 2025 alone, blowing apart fiscal plans.

This isn't economics; it's hybrid warfare. Russia is using energy as a weapon to destabilize President Maia Sandu's pro-EU government. Transnistria's "independence" is fiction—it's a Russian military outpost with 1,500 troops, smuggling networks, and zero economic viability without Kremlin support. Moldova's economy is too small and fragile to withstand energy blackmail indefinitely.

**Remittances, Emigration, and Demographic Collapse**

Remittances were $2.1 billion in 2024, equivalent to 16% of GDP, down from 18% in 2022 as economic conditions worsened in Italy, Russia, and other destination countries where Moldovan migrant workers are employed. An estimated 700,000 Moldovans—a quarter of the pre-war population—live abroad, most working low-wage jobs in construction, agriculture, and care work. The working-age population (15-64) declined from 2.2 million in 2010 to 1.7 million in 2024. The median age is rising—now 38.4—and the birth rate of 1.2 children per woman is well below replacement. By 2050, Moldova's population could fall below 2 million from 2.6 million today.

Youth unemployment is 11.3%, but underemployment is rampant. University graduates earning €300-€400 monthly in Chișinău face the choice: stay in poverty or emigrate. Most leave. The brain drain hollows out the professional class, weakening institutions and private sector dynamism. Average monthly wages are €550, less than half Romania's €1,250, making emigration economically rational. Pensions average €150 monthly, forcing elderly into poverty. The poverty rate is 23%, concentrated in rural areas.

**Fiscal Fragility, EU Assistance, and Debt Sustainability**

Moldova's fiscal deficit was 5.1% of GDP in 2024, driven by energy subsidies, social spending, and defense costs (military budget doubled to 1.2% of GDP amid security threats). Public debt reached 38% of GDP, up from 29% in 2021. For most countries, 38% is sustainable; for Moldova, with narrow tax base (revenue is 28% of GDP) and extreme vulnerability to external shocks, it's concerning. The IMF provides a $600 million support program, conditional on reforms: energy tariff adjustments, pension system overhaul, anti-corruption measures.

The EU is Moldova's economic lifeline. In 2024, the EU provided €300 million in grants, €150 million in concessional loans, and fast-tracked Moldova's accession negotiations. Candidate status was granted in June 2022, and accession talks began in June 2024. The EU accounts for 62% of Moldova's exports—primarily wine, nuts, textiles, and agricultural products. DCFTA (Deep and Comprehensive Free Trade Area) provides tariff-free access, but Moldova struggles to meet EU standards. Wine exports, once booming, face sanitary and phytosanitary (SPS) compliance costs that small producers can't afford.

**Agriculture, Wine, and Structural Weaknesses**

Agriculture employs 26% of the workforce but contributes just 10% of GDP, signaling massive underproductivity. Small-scale subsistence farming dominates. Mechanization is low. Access to credit is limited—interest rates for agricultural loans are 12-15%, prohibitive for small farmers. Land fragmentation—average farm size is 1.6 hectares—prevents economies of scale. Attempts at land consolidation face resistance from rural communities.

Wine is Moldova's signature export, with 2,000+ wineries producing 1.5 million hectoliters annually. The EU is the largest market, but Russian import bans (imposed 2013, partially lifted 2024) devastated the sector. Exports to Russia, once 35% of total, are now 8%. Diversification to China, Japan, and the US is progressing slowly. The Milestii Mici winery, home to the world's largest wine cellar (2 million bottles), is a tourist draw, but wine tourism infrastructure is underdeveloped.

IT services are a rare bright spot. The tech sector employs 30,000, generates €400 million annually, and is growing 15% per year. Tech parks in Chișinău offer tax incentives, attracting startups and outsourcing firms serving EU and US clients. Moldova's IT engineers earn €1,200-€2,000 monthly, well above average wages, but still below Romanian or Polish levels, making retention difficult.

**The EU Accession Path and Reform Challenges**

EU accession is Moldova's only viable long-term strategy. Membership would bring structural funds, regulatory alignment, and security guarantees. But the path is long—2030 is the earliest plausible accession date, and that requires sustained reform. Corruption remains endemic; Transparency International ranks Moldova 91st of 180. The judiciary is weak and politically influenced. Oligarch Ilan Shor, convicted in absentia of the $1 billion bank fraud (12% of GDP stolen in 2014), continues to operate from exile, funding pro-Russian parties. Anti-corruption institutions—the National Anticorruption Center, the prosecutor's office—are under-resourced and politically pressured.

**The Bottom Line**

Moldova's economy is trapped between geopolitical aggression, demographic decline, and structural poverty. The energy crisis is managed, not solved. Remittances sustain consumption but can't drive development. EU accession offers hope, but it's a decade-long process requiring reforms that a fragile political system struggles to deliver. Growth of 1.8% is insufficient to close the income gap with Romania, let alone Western Europe. Without massive EU support—billions in grants, not loans—Moldova risks becoming a failed state on Europe's border. The tragedy is that Moldova's people are hardworking, educated, and pro-European. They're not failing; they're being failed by geography, history, and Russian aggression. The next five years will determine whether Moldova becomes the next EU success story or another frozen conflict zone. Right now, it could go either way.`,
    issues: ['Energy Crisis and Transnistria Blackmail', 'Remittance Dependency and Emigration', 'Demographic Collapse', 'Fiscal Strain from Energy Subsidies', 'EU Accession as Economic Lifeline']
  },

  MONTENEGRO: {
    name: 'Montenegro',
    country: 'Montenegro',
    lat: 42.7087,
    lng: 19.3744,
    summary: `Montenegro's economy is a high-wire act: tourism-dependent, heavily indebted, politically unstable, and geographically tiny (622,000 population). GDP per capita is $10,650, middle-income by Balkan standards but half of EU average. Growth rebounded to 6.1% in 2024 as tourism recovered, but the 2025 forecast is 3.2%, constrained by inflation, Chinese debt overhang, and domestic political dysfunction. The Chinese-financed Bar-Boljare highway project—€1 billion for 41 kilometers, one of the world's most expensive roads per kilometer—symbolizes Montenegro's development model: grand ambitions, external debt, and questionable returns.

**Tourism Dominance and Seasonal Vulnerability**

Tourism accounts for 25% of GDP directly and 40% when indirect effects are included. The Adriatic coast—Budva, Kotor, Tivat—attracts 2.7 million visitors annually, triple Montenegro's population. Russians and Serbians are the largest groups, followed by Western Europeans. Kotor's UNESCO-listed bay is stunning, but over-tourism is degrading infrastructure and environment. Cruise ships dump 500,000 passengers annually into Kotor's tiny old town, overwhelming sewage and waste systems.

Tourism revenues hit €1.8 billion in 2024, but the sector is seasonal—80% concentrated in June-September—leaving hotels, restaurants, and transport idle eight months yearly. Employment is precarious: 40,000 work in tourism seasonally, earning €600-€800 monthly during summer, then face unemployment. The government has attempted to promote winter tourism—skiing in Kolašin and Žabljak—but infrastructure is limited and marketing budgets tiny. Diversification into year-round cultural tourism faces competition from Croatia and Albania, which offer similar attractions at lower prices.

Real estate speculation drives a secondary tourism economy. Russian and Serbian investors buy coastal properties, driving prices in Budva to €3,500 per square meter, unaffordable for locals. The citizenship-by-investment program, active until 2022, sold passports for €450,000, generating €70 million but raising money laundering concerns. The EU pressured Montenegro to terminate it as a condition for accession progress.

**The Chinese Highway Debt Trap**

The Bar-Boljare highway was supposed to connect Montenegro's coast to Serbia, unlocking economic integration. China Exim Bank lent €944 million at 2% interest in 2014, financing construction by China Road and Bridge Corporation. The first 41-kilometer section, completed in 2021, cost €1 billion—€24 million per kilometer, among the world's most expensive due to mountainous terrain requiring tunnels and bridges. But traffic volumes are minimal—5,000 vehicles daily versus 15,000 projected—generating tolls of €4 million annually against debt service of €60 million.

Montenegro's public debt is 76% of GDP, with Chinese loans comprising 25% of total debt. The IMF warned in 2021 that Montenegro faced debt distress. The government secured a €1 billion EU loan in 2021 to refinance the Chinese debt, temporarily easing pressure. But the highway's second phase, connecting to Serbia, requires another €2 billion. Montenegro can't afford it without external financing, and the EU is reluctant to fund white elephants. The project is stalled indefinitely.

This is the Belt and Road Initiative's Balkan legacy: infrastructure that serves Chinese contractors, saddles host countries with debt, and delivers minimal economic returns. Montenegro learned this lesson too late.

**Inflation, Euroization, and Monetary Constraints**

Montenegro unilaterally adopted the euro in 2002 despite not being an EU member. This provides currency stability and low transaction costs but eliminates independent monetary policy. When inflation surged to 13.4% in 2023—driven by food and energy imports—Montenegro had no tools to respond. The ECB sets rates for eurozone members, but Montenegro isn't one, so it can't influence policy or access ECB facilities. Inflation moderated to 4.2% in 2024 and 3.1% in 2025 as global prices eased, but Montenegro had no agency in this process.

Euroization benefits tourism—visitors don't face exchange rate uncertainty—and anchors inflation expectations. But it constrains fiscal policy. Montenegro can't devalue to boost exports or inflate away debt. Competitiveness depends entirely on productivity and wage restraint. Wages rose 7% in 2024, outpacing productivity growth, eroding competitiveness against Albania and North Macedonia.

**Fiscal Policy, Tax Revenue, and Corruption**

The fiscal deficit was 3.8% of GDP in 2024, above the EU's 3% Maastricht criterion. Tax revenue is 35% of GDP, reasonable coverage, but VAT and excise taxes dominate while direct taxes are weak. Corporate tax is 9%, among Europe's lowest, designed to attract FDI. But FDI inflows are just €450 million annually, mostly in real estate and tourism, not manufacturing or tech. Personal income tax is flat at 9%, regressive and generating insufficient revenue.

Corruption is pervasive. Transparency International ranks Montenegro 63rd of 180, mid-table globally but worst in the Western Balkans candidate group. The cigarette smuggling trade, once controlled by political elites, persists. Public procurement is rigged; contracts go to politically connected firms. The Democratic Party of Socialists (DPS), which governed 1991-2020, built a patronage state. The post-2020 coalition governments have promised anti-corruption, but progress is slow. The EU accession process requires judicial reform, independent prosecution, and media freedom—all works in progress.

**Political Instability and EU Accession**

Montenegro began EU accession negotiations in 2012 and has opened all 33 chapters. It's the most advanced Western Balkan candidate, but progress stalled in 2024-2025 due to government instability. The coalition government collapsed in March 2025, triggering early elections in June. The new government, another fragile coalition, faces pressure on Serbian minority rights, Montenegrin-Serbian Orthodox Church disputes, and economic reforms. Political energy is consumed by identity politics, leaving economic policy adrift.

EU accession, if achieved by 2028-2030, would bring structural funds, regulatory alignment, and investor confidence. But membership requires fiscal consolidation—debt below 60% of GDP—which demands spending cuts or tax increases, both politically toxic. Pension reform is essential—Montenegro has one of the world's lowest retirement ages (64) and most generous pension-to-wage ratios (47%)—but attempts in 2023 were abandoned after public protests.

**The Bottom Line**

Montenegro's economy is precariously balanced. Tourism delivers growth, but it's seasonal and vulnerable to regional instability. Chinese debt weighs on fiscal sustainability, limiting investment in health, education, and infrastructure that might diversify the economy. Euroization provides stability but eliminates policy tools. Political fragmentation prevents coherent economic strategy. EU accession is the pathway to stability and development, but it requires reforms that weak coalition governments can't deliver. Montenegro is neither failing nor thriving—it's muddling through, hoping tourism keeps growing, Chinese creditors stay patient, and the EU eventually opens the door. For a small, beautiful, deeply indebted country, that's the best available strategy. But it's not a plan for prosperity; it's a plan for survival.`,
    issues: ['Tourism Seasonal Dependency', 'Chinese Highway Debt Trap', 'High Public Debt at 76% GDP', 'Euroization Without ECB Access', 'Political Instability Stalling Reforms']
  },

  MONGOLIA: {
    name: 'Mongolia',
    country: 'Mongolia',
    lat: 46.8625,
    lng: 103.8467,
    summary: `Mongolia is a mining economy wrapped in geopolitical tension. Sandwiched between China and Russia, with just 3.4 million people across a landmass the size of Western Europe, Mongolia's economic fate is determined by copper prices, coal demand, and Beijing's industrial policy. GDP growth hit 7.0% in 2024 and is projected at 6.2% for 2025, impressive on paper but entirely dependent on Oyu Tolgoi copper mine expansion and coal exports to China. This is resource curse economics: massive revenues, volatile growth, persistent poverty, and an economy that will collapse the moment commodity prices turn or China diversifies suppliers.

**Oyu Tolgoi Copper Mine: Blessing or Curse?**

Oyu Tolgoi (OT), operated by Rio Tinto under a 66% stake with the Mongolian government holding 34%, is one of the world's largest copper-gold deposits. The mine produced 216,000 tonnes of copper in 2024, generating $4.2 billion in export revenue—37% of Mongolia's total exports. The underground expansion, completed in 2022 at a cost of $7 billion, will ramp production to 500,000 tonnes annually by 2028. At current copper prices ($8,500/tonne in November 2025), OT could generate $8-10 billion annually, equivalent to 50% of Mongolia's GDP.

But here's the problem: the government's 34% equity stake is financed by debt to Rio Tinto and international lenders. Mongolia owes $3.2 billion to Rio Tinto, repayable from dividends, meaning the government won't see cash flows until the debt is repaid—estimated 2030 at earliest. In the meantime, Mongolia receives royalties (5% of revenue) and corporate tax (30% of profits), generating $600 million annually. That's significant revenue but far below the bonanza politicians promised.

The development agreement is deeply controversial. Mongolian nationalists argue Rio Tinto captured the lion's share of value while Mongolia shoulders environmental and social costs. Water usage—OT consumes 1.5 million cubic meters annually in the Gobi Desert, one of the driest regions on earth—threatens aquifers and pastoral livelihoods. Herder communities have been displaced. Air and water pollution near the mine site are documented but underreported due to government pressure. Civil society groups demanding contract renegotiation face harassment.

**Coal Exports to China and Commodity Dependence**

Coal is Mongolia's other pillar, accounting for 31% of exports. Mongolia exported 54 million tonnes of coal in 2024, 95% to China. Tavan Tolgoi, the world's largest untapped coking coal deposit, is under development, with production expected to double by 2027. Chinese steel mills are the sole market; when Chinese demand slumps, Mongolian coal piles up. In 2024, China's steel production slowdown caused Mongolian coal exports to decline 8%, hitting GDP growth and fiscal revenues.

Commodity dependence creates boom-bust cycles. Mining accounts for 24% of GDP, 89% of exports, and 30% of fiscal revenue. When copper and coal prices surged in 2021-2022, government revenues ballooned, funding wage increases, pensions, and infrastructure. When prices corrected in 2023, the fiscal deficit widened to 6.8% of GDP. The 2025 deficit is projected at 4.2%, still elevated. This volatility makes long-term planning impossible and encourages short-termism.

**Inflation, Currency Weakness, and Central Bank Challenges**

Inflation spiked to 15.2% in 2023, driven by food and fuel imports. The Bank of Mongolia (BoM) raised rates to 12.5%, among Asia's highest, to defend the tögrög and control inflation. Inflation moderated to 8.7% in 2024 and 6.5% in 2025, but food inflation remains 9.8%, hitting low-income households hard. The tögrög depreciated from 2,850 per dollar in early 2022 to 3,420 in November 2025, driven by capital outflows, trade deficits (imports exceed exports in value terms despite massive commodity exports, due to mining equipment and fuel imports), and weak investor confidence.

The BoM faces impossible trade-offs. High rates attract carry trade inflows but choke credit to SMEs. Easing to support growth risks currency collapse. Foreign exchange reserves are $3.8 billion, covering just 4.2 months of imports, below the IMF's 6-month adequacy threshold. Mongolia is vulnerable to external shocks—a sharp copper price decline or Chinese recession could trigger a balance-of-payments crisis.

**Fiscal Policy, Sovereign Wealth Fund, and Distributional Failures**

Mongolia established the Fiscal Stability Fund (FSF) in 2011 to save commodity windfalls, modeled on Norway's sovereign wealth fund. It failed spectacularly. Politicians raided the FSF to fund child allowances, pensions, and infrastructure projects. By 2016, the FSF was depleted, forcing Mongolia to seek an IMF bailout. The $5.5 billion IMF program (2017-2020) imposed austerity, stabilized debt, and reformed fiscal rules. But the lessons weren't learned. In 2022-2023, as commodity revenues surged, the government again expanded spending rather than saving.

Public debt is 72% of GDP, down from 88% in 2020 but still elevated for an emerging market commodity exporter. Debt service consumes 18% of government revenue. Infrastructure needs—roads, water, electricity—are immense. Ulaanbaatar, home to 50% of the population, faces severe air pollution (winter PM2.5 levels exceed WHO guidelines by 20x), traffic congestion, and housing shortages. Rural areas lack basic services. The government needs to invest billions but is fiscally constrained.

Inequality is stark. The Gini coefficient is 0.33, moderate globally, but wealth is concentrated in Ulaanbaatar's elite while rural herders live in poverty. Unemployment is officially 5.8%, but youth unemployment is 12.4%. Underemployment is rampant. University graduates face a choice: low-wage government jobs (average monthly salary $400) or emigration to South Korea, Japan, or Australia.

**Geopolitics, Trade Dependence, and Diversification Failures**

China accounts for 64% of Mongolia's exports and 32% of imports. Russia supplies 90% of petroleum products. Mongolia is economically vassalized by its neighbors. Diversification attempts—building railway access to Europe, courting Japanese and US investment—have gone nowhere. The Trans-Mongolian Railway runs north-south, serving Chinese and Russian interests, not east-west trade. Port access requires transiting Russia or China, both of whom charge prohibitive fees. Mongolia is landlocked and trapped.

Politically, Mongolia maintains "third neighbor" diplomacy—cultivating ties with the US, Japan, South Korea, and EU—but economic reality is that China decides Mongolia's fate. When Chinese steel demand is strong, Mongolia prospers. When it's weak, Mongolia suffers. There's no escaping this dependency.

**The Bottom Line**

Mongolia's economy is a case study in resource curse pathologies: commodity dependence, fiscal volatility, inequality, corruption, and geopolitical vulnerability. Oyu Tolgoi could transform Mongolia if revenues are invested in education, health, infrastructure, and diversification. But history suggests they'll be squandered on patronage and consumption. The fiscal stability fund was raided. The development agreement favors Rio Tinto. Environmental costs are externalized. Political elites capture rents while herders and urban poor struggle. Growth of 6% sounds robust, but it's fragile, commodity-driven, and unsustainable. Mongolia needs a Norwegian-style social contract: transparent resource management, long-term savings, and broad-based investment. Instead, it's following Nigeria's path: booms enriching elites, busts devastating the poor, and a permanent gap between potential and reality. Copper and coal will run out. What then?`,
    issues: ['Oyu Tolgoi Copper Dependence', 'Coal Export Reliance on China', 'Fiscal Volatility and Commodity Cycles', 'Currency Depreciation and High Inflation', 'Resource Curse and Inequality']
  }
}

async function insertEconomySummaries() {
  console.log('\n' + '='.repeat(70))
  console.log('💰 INSERTING ECONOMY SUMMARIES - BATCH 6')
  console.log('='.repeat(70) + '\n')

  let successCount = 0
  let errorCount = 0

  for (const [key, data] of Object.entries(ECONOMY_SUMMARIES)) {
    try {
      console.log(`\nProcessing: ${data.name}`)
      console.log(`Summary length: ${data.summary.length} characters`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: data.name,
            type: 'country',
            category: 'economy'
          }
        },
        create: {
          name: data.name,
          type: 'country',
          country: data.country,
          lat: data.lat,
          lng: data.lng,
          category: 'economy',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${data.name} saved successfully`)
      successCount++

    } catch (error) {
      console.error(`❌ Error saving ${data.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(70))
  console.log('📊 INSERTION COMPLETE')
  console.log('='.repeat(70))
  console.log(`✅ Successfully saved: ${successCount}`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log('\n💰 BATCH 6 COUNTRIES (Part 1):')
  console.log('  ✓ Luxembourg - Economy')
  console.log('  ✓ Malaysia - Economy')
  console.log('  ✓ Mexico - Economy')
  console.log('  ✓ Moldova - Economy')
  console.log('  ✓ Montenegro - Economy')
  console.log('  ✓ Mongolia - Economy')
  console.log('\n📝 Next: Part 2 with 7 more countries\n')
}

insertEconomySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
