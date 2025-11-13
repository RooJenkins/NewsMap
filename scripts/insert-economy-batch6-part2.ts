import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ECONOMY_SUMMARIES_PART2 = {
  MOROCCO: {
    name: 'Morocco',
    country: 'Morocco',
    lat: 31.7917,
    lng: -7.0926,
    summary: `Morocco is North Africa's economic success story, and it's not particularly close. GDP per capita is $3,900, double Algeria's oil-dependent economy and four times Tunisia's imploding one. Growth was 3.4% in 2024 and is forecast at 3.8% for 2025, driven by auto exports, phosphate revenues, tourism recovery, and agricultural resilience despite severe drought. Morocco has leveraged its proximity to Europe, political stability, and strategic industrial policy to become a manufacturing hub. But the model has limits: inequality is extreme, unemployment is stubbornly high, and the economy is vulnerable to European demand shocks and climate change.

**The Automotive Export Miracle**

Morocco is Africa's largest auto exporter and the world's 13th largest auto parts manufacturer. Renault and Stellantis (Peugeot) operate massive factories in Tangier and Kenitra, producing 700,000 vehicles annually. Auto and auto parts exports hit $14.2 billion in 2024, 26% of total exports. The Tangier-Med port, one of the Mediterranean's largest, ships vehicles to Europe in under 48 hours. Morocco's proximity to France, Spain, and Germany—combined with free trade agreements and competitive labor ($450 monthly wages for assembly workers versus $3,200 in Spain)—makes it an irresistible nearshoring destination.

But Morocco is in the lower-value segments: assembly, wiring harnesses, seats. The Renault Dacia brand, assembled in Morocco, is Europe's budget car. Design, engineering, and high-value components remain in Europe. Morocco is upgrading—electric vehicle battery plants are under construction, with Chinese firms investing $6.5 billion—but the transition requires skills Morocco's workforce lacks. Vocational training is expanding, but illiteracy is 28%, constraining upskilling.

Aerospace is the other manufacturing bright spot. Bombardier, Boeing, and Safran source components from Moroccan suppliers, generating $2.1 billion in exports. Textiles, once dominant, are declining as wages rise and competition from Bangladesh and Vietnam intensifies.

**Phosphate Dominance and OCP's Economic Role**

Morocco controls 70% of global phosphate rock reserves, the raw material for fertilizers. The state-owned OCP Group is the world's largest phosphate exporter, generating $10.4 billion in revenue in 2024. Phosphate and fertilizer exports account for 19% of Morocco's total exports. OCP's profits fund infrastructure, education, and green hydrogen projects. When global fertilizer prices spiked in 2021-2022 due to the Ukraine war, OCP's revenues surged, providing a fiscal windfall. Prices have since corrected, but OCP remains profitable.

The downside is concentration risk. Morocco's economy is overly reliant on a single commodity. Environmental costs are mounting—phosphate mining depletes aquifers, and fertilizer production emits significant CO2. OCP has committed to carbon neutrality by 2040, investing $13 billion in green ammonia and desalination, but these are decades-long projects with uncertain returns.

**Tourism Recovery and Structural Constraints**

Tourism contributed $9.6 billion in 2024, 8% of GDP, as visitor numbers hit 14.5 million, recovering to pre-pandemic levels. Marrakech, Fes, and Casablanca attract European tourists seeking affordability and proximity. The 2030 World Cup (co-hosted with Spain and Portugal) will drive infrastructure investment—stadiums, hotels, transport—but the economic benefits depend on execution. Morocco has a poor track record on mega-projects. The Tangier-Casablanca high-speed rail line, inaugurated in 2018, cost $2.3 billion and operates at a loss due to low ridership and poor connectivity.

Tourism is geographically concentrated—coastal and imperial cities—while interior regions remain impoverished. Seasonal employment dominates, creating precarious livelihoods. The government aims to diversify to eco-tourism and cultural tourism, but infrastructure in rural areas is inadequate.

**Inflation, Currency Peg, and Monetary Policy**

Inflation peaked at 8.3% in 2023, driven by food (40% of CPI basket) and energy imports. It moderated to 4.6% in 2024 and 3.2% in 2025 as global prices eased. Bank Al-Maghrib (central bank) raised rates to 3.0% in 2023, the highest in a decade, before cutting to 2.75% in October 2025 as inflation cooled. The dirham is pegged to a basket (60% euro, 40% dollar), providing stability but limiting monetary flexibility. Morocco has gradually widened the fluctuation band (±5% since 2020) but full float remains distant due to fear of capital flight and import price shocks.

The peg anchors inflation expectations and facilitates trade with Europe but constrains growth. Real interest rates are positive, discouraging investment. Credit to the private sector grew just 2.1% in 2024, insufficient to support expansion. SMEs, which employ 90% of the workforce, face interest rates of 6-8%, prohibitive for many.

**Fiscal Policy, Subsidies, and Debt Dynamics**

The fiscal deficit was 4.4% of GDP in 2024, driven by energy and food subsidies. Butane gas subsidies alone cost $2.1 billion annually, benefiting the middle class more than the poor. The government has repeatedly attempted subsidy reform—targeting the bottom 40% while phasing out universal subsidies—but faced protests in 2022, forcing rollback. Public debt is 70% of GDP, manageable but rising. Debt service consumes 26% of government revenue, crowding out education and health spending.

Tax revenue is 22% of GDP, below Morocco's potential. VAT is 20%, but evasion is rampant in the informal sector, which employs 70% of workers. Corporate tax collection is weak due to exemptions and avoidance. The government needs to expand the tax base, but formalizing the economy is a multi-decade challenge.

**Unemployment, Inequality, and the Social Contract**

Unemployment is 12.3%, among the region's highest. Youth unemployment (15-24) is 29.6%, a powder keg. University graduates face joblessness or underemployment, driving the "Harraga" phenomenon—young men risking their lives to migrate illegally to Europe. Morocco and Spain cooperate on migration control, with Spain providing aid in exchange for border enforcement. But suppressing migration doesn't address root causes: joblessness and hopelessness.

Inequality is stark. The Gini coefficient is 0.40, but wealth is concentrated in Casablanca and Rabat while rural areas stagnate. Access to education and healthcare is unequal. The 2011 constitutional reforms, prompted by Arab Spring protests, promised decentralization and accountability. But implementation is slow. Local government budgets are tiny, constraining service delivery.

King Mohammed VI's personal wealth—estimated $5-8 billion—derived from holdings in agriculture, real estate, and banking, contrasts with widespread poverty. The monarchy is politically untouchable, but economic dissatisfaction fuels the underground Islamist opposition and secular youth movements.

**Climate Vulnerability and Water Crisis**

Morocco is experiencing its worst drought in 30 years. Reservoirs are at 23% capacity. Agriculture, which employs 34% of the workforce and contributes 12% of GDP, is devastated. Wheat production fell 40% in 2024, forcing imports that widened the trade deficit. Irrigation consumes 87% of water resources, much of it for water-intensive crops like citrus and avocados exported to Europe. The government is investing $11 billion in desalination plants—six major projects by 2030—but desalination is energy-intensive and expensive.

Climate change threatens agriculture, tourism (water shortages deter visitors), and social stability. Rural-to-urban migration is accelerating as farming becomes unviable. Casablanca's population could swell by 3 million by 2035, straining infrastructure.

**Trade, FDI, and the EU Relationship**

The EU accounts for 63% of Morocco's exports and 52% of imports. The EU-Morocco Association Agreement provides preferential access, and Morocco has "advanced status" with the EU, the deepest relationship short of membership. FDI inflows were $3.2 billion in 2024, primarily from France, Spain, and the UAE, concentrated in real estate, manufacturing, and energy. Morocco is diversifying trade—China is the largest single import source (18%), providing consumer goods and infrastructure financing.

The Western Sahara dispute complicates trade. The EU Court of Justice ruled in 2021 that trade agreements don't apply to Western Sahara, a non-self-governing territory Morocco controls. The EU and Morocco negotiated a workaround, but legal challenges persist. Polisario Front, backed by Algeria, contests Moroccan sovereignty, creating regional tension that deters some investors.

**The Bottom Line**

Morocco is leveraging geographic proximity, political stability, and industrial policy to become North Africa's manufacturing hub. Auto exports, phosphates, and tourism drive growth. But the model is fragile. Youth unemployment, inequality, and water scarcity threaten social stability. The economy needs to create 200,000 jobs annually just to absorb new entrants; it's creating 80,000. Education and skills mismatches persist. The monarchy's grip ensures political stability but stifles accountability and reform. Morocco is the best-performing economy in the Maghreb, but that's a low bar. The question is whether Morocco can escape middle-income status and join the ranks of emerging market successes. The trajectory is positive, but obstacles are formidable. The next decade will be decisive.`,
    issues: ['Auto Export Manufacturing Hub', 'Phosphate Revenue Dependence', 'Youth Unemployment at 30%', 'Severe Drought and Water Crisis', 'Energy Subsidy Fiscal Drain']
  },

  MOZAMBIQUE: {
    name: 'Mozambique',
    country: 'Mozambique',
    lat: -18.6657,
    lng: 35.5296,
    summary: `Mozambique should be rich. The Rovuma Basin off the northern coast holds 180 trillion cubic feet of natural gas, among the world's largest untapped reserves. With proper development, LNG exports could generate $50 billion annually, transforming Mozambique from one of the world's poorest countries into a middle-income energy exporter. Instead, GDP per capita is $620, among the world's lowest. Growth was 4.9% in 2024 and is projected at 5.2% in 2025, but this is recovery from civil war lows, not transformational development. TotalEnergies' $20 billion Mozambique LNG project remains suspended since 2021 due to Islamist insurgency in Cabo Delgado. Until security is restored, the gas stays in the ground.

**The LNG Projects and Security Crisis**

Mozambique has three major LNG projects. The Coral South FLNG, operated by Eni, began production in 2022, generating 3.4 million tonnes annually—Mozambique's first LNG exports, worth $2.1 billion in 2024. Mozambique receives royalties and taxes, but the project is offshore, employing few Mozambicans and generating limited local benefits. The larger onshore projects—Mozambique LNG (TotalEnergies, $20 billion investment) and Rovuma LNG (ExxonMobil/Eni, $30 billion)—are stalled.

The TotalEnergies project was progressing until March 2021, when Islamic State-affiliated militants attacked Palma, killing dozens and displacing 100,000. TotalEnergies evacuated personnel and declared force majeure. The project has been suspended for four years. ExxonMobil's Rovuma LNG hasn't reached final investment decision (FID) due to security concerns. Combined, these projects would generate $15-20 billion in annual export revenue and 15,000 jobs. Instead, they're frozen.

The Cabo Delgado insurgency is driven by local grievances—poverty, unemployment, marginalization—exploited by jihadist groups. The Mozambican military, poorly trained and equipped, lost control of entire districts. Rwanda deployed 2,500 troops in 2021, backed by Southern African Development Community (SADC) forces, and recaptured territory. Security has improved—no major attacks in Palma since 2023—but the area remains unstable. TotalEnergies demands guarantees that the government can't credibly provide. The longer the delay, the more investors doubt Mozambique's capacity to deliver.

**Debt Crisis, Hidden Debt Scandal, and Fiscal Collapse**

Mozambique defaulted on its debt in 2016 after the "tuna bonds" scandal. The government secretly borrowed $2 billion from Credit Suisse and VTB to finance a tuna fishing fleet and maritime security projects. The loans were guaranteed by the state but hidden from parliament and the IMF. When they were revealed, donors suspended aid, and Mozambique's creditworthiness collapsed. Public debt reached 112% of GDP in 2020. The IMF and creditors negotiated restructuring in 2023, extending maturities and reducing the debt-to-GDP ratio to 91% in 2024. But debt service consumes 39% of government revenue, crowding out health and education.

The fiscal deficit is 5.7% of GDP in 2024, financed by external concessional loans and domestic borrowing. Tax revenue is 24% of GDP, reasonable coverage, but collection is weak. The informal economy employs 85% of workers, evading taxes. Corruption siphons revenues—Transparency International ranks Mozambique 142nd of 180. The tuna bonds scandal resulted in prosecutions; former finance minister Manuel Chang was extradited to the US in 2023 and convicted of conspiracy and fraud in 2024. But systemic corruption persists.

**Cyclones, Climate Vulnerability, and Humanitarian Crises**

Mozambique is one of the world's most climate-vulnerable countries. Cyclones Idai (2019) and Freddy (2023) killed thousands and displaced millions. Cyclone Freddy alone caused $1.3 billion in damages, 8% of GDP. Agriculture, which employs 70% of the workforce and contributes 24% of GDP, is devastated repeatedly. Subsistence farmers lose crops, livestock, and homes. The government lacks resources for disaster response; UN agencies provide emergency aid, but recovery is slow.

Droughts alternate with floods, destroying harvests. Food insecurity affects 1.3 million people. Malnutrition rates are among the world's highest—43% of children under five are stunted. The health system is overwhelmed. Life expectancy is 60 years, among the lowest globally. HIV prevalence is 12.6%, with 2.3 million people living with HIV. The government spends $4 per capita annually on healthcare; donors provide the majority of funding.

**Inflation, Currency Depreciation, and Monetary Constraints**

Inflation was 7.1% in 2024 and is projected at 6.3% for 2025, seemingly moderate. But food inflation is 9.4%, hitting the poor hardest. The metical depreciated from 63 per dollar in 2022 to 75 in November 2025, driven by current account deficits (imports far exceed exports outside LNG), capital outflows, and weak investor confidence. The central bank raised rates to 16.25% in 2023 to defend the currency, choking credit. Lending to the private sector is minimal—interest rates are 20-25% for SMEs, prohibitive for most.

Foreign exchange reserves are $3.1 billion, covering 3.8 months of imports, below adequacy thresholds. Mozambique depends on external financing—IMF programs, World Bank loans, donor aid. In 2024, external aid was $1.9 billion, 12% of GDP. Donors demand governance reforms, anti-corruption measures, and fiscal transparency, but progress is glacial.

**Coal Mining, Tete Province, and Export Infrastructure**

Mozambique has significant coal reserves in Tete Province. Vale and Rio Tinto invested billions in mining and rail infrastructure in the 2000s, but low coal prices and logistical bottlenecks made projects unprofitable. Vale sold its Moatize mine to Vulcan Resources in 2017. Coal exports were 7.8 million tonnes in 2024, generating $900 million, a fraction of potential. The Sena railway line and Beira port lack capacity. Plans to expand were shelved due to financing gaps.

Graphite mining is growing—Mozambique is the world's second-largest producer. Graphite exports, used in EV batteries, were $240 million in 2024. But this is small-scale compared to LNG potential.

**Political Instability and Frelimo's Dominance**

Frelimo, the liberation movement that has governed since independence in 1975, controls all levers of power. The October 2024 elections saw Frelimo candidate Daniel Chapo declared president with 71% of the vote. Opposition parties and international observers alleged fraud. Protests erupted; security forces killed dozens. The Constitutional Council is reviewing the results, but Frelimo's dominance is assured. Renamo, the former rebel group turned opposition party, is weak and divided.

Political repression is routine. Journalists investigating corruption are threatened. Civil society activists face harassment. The judiciary is politicized. Property rights are weak; land grabs by elites are common. Investors demand rule of law; Mozambique can't deliver.

**The Bottom Line**

Mozambique's economic future hinges entirely on LNG. If TotalEnergies and ExxonMobil resume projects and reach production by 2028-2030, Mozambique could generate $15-20 billion annually in export revenue. That would fund infrastructure, health, education, and debt repayment. But if security in Cabo Delgado deteriorates or investors lose patience, the gas remains stranded. Mozambique would then continue as a low-income, aid-dependent country vulnerable to climate shocks and political instability.

The tragedy is that Mozambique has the resources—gas, coal, graphite, agricultural land, a young population—to escape poverty. But it lacks governance, security, and infrastructure. Corruption is endemic. Climate change is relentless. The government is incapable or unwilling to reform. Donors are fatigued. The LNG projects are Mozambique's last, best chance at transformation. If they fail, the next generation of Mozambicans will ask why their country, blessed with such wealth, remained so poor. The answer will be: governance failure, pure and simple.`,
    issues: ['LNG Projects Suspended Due to Insurgency', 'Debt Crisis Post-Tuna Bonds Scandal', 'Climate Vulnerability and Cyclones', 'Corruption and Governance Failure', 'Extreme Poverty at $620 Per Capita']
  },

  MYANMAR: {
    name: 'Myanmar',
    country: 'Myanmar',
    lat: 21.9162,
    lng: 95.9560,
    summary: `Myanmar's economy is in free fall. The February 2021 military coup, which overthrew the democratically elected government, triggered civil war, international sanctions, and economic collapse. GDP contracted 18% in 2021, grew modestly 3% in 2022-2023 as the military junta stabilized urban areas, but shrank again by 1.2% in 2024 as conflict intensified. The 2025 forecast is negative 0.8%. Foreign investment has fled. The kyat has collapsed from 1,350 per dollar pre-coup to 4,850 in November 2025. Inflation is officially 9.3% but realistically 20-30% as food and fuel shortages worsen. Half the population—27 million people—lives below the poverty line. This isn't an economy; it's a humanitarian catastrophe with a central bank.

**The Civil War and Territorial Fragmentation**

The military junta, led by Senior General Min Aung Hlaing, controls major cities—Yangon, Naypyidaw, Mandalay—but has lost vast swathes of territory to ethnic armed organizations (EAOs) and People's Defense Forces (PDFs) aligned with the National Unity Government (NUG), the shadow government in exile. In late 2023, Operation 1027—a coordinated offensive by three EAOs—captured towns along the China-Myanmar border, severing trade routes. The military has lost control of 60% of the country by some estimates.

This territorial fragmentation destroys economic activity. Trade routes are blocked. Supply chains are severed. Businesses can't operate across conflict zones. The Myawaddy border crossing with Thailand, critical for trade, changed hands multiple times in 2024. The military resorted to airstrikes and artillery, destroying infrastructure. Entire towns—Lashio, Thandwe—are rubble. Investment is impossible in war zones.

The junta finances itself through jade and gemstone exports ($1.5 billion annually), timber smuggling, and methamphetamine production. Myanmar is the world's largest producer of methamphetamine, generating an estimated $2 billion annually for armed groups, both junta-aligned and opposition. The economy has criminalized.

**Currency Collapse, Inflation, and Banking System Failure**

The kyat's depreciation is catastrophic. Import prices have tripled. Rice, Myanmar's staple, costs 40% more than in 2023. Fuel is rationed; power outages last 12-18 hours daily in Yangon. The Central Bank of Myanmar imposed capital controls, banning dollar transactions and requiring exporters to surrender foreign exchange at the official rate (2,100 per dollar), which is 56% below the black market rate (4,850). This punishes legitimate businesses and drives activity underground.

The banking system is dysfunctional. International banks—SWIFT, Visa, Mastercard—suspended operations. Domestic banks face liquidity crises as depositors withdraw savings. The military raided accounts of political opponents, eroding trust. Businesses operate on cash. Digital payments, which grew during Myanmar's brief democratic period (2011-2021), have collapsed. The formal financial system has shrunk by 40%.

Inflation is officially 9.3%, but independent estimates suggest 20-30%. Food prices rose 35% year-on-year in Q3 2025. The military prints money to finance operations, fueling inflation. Monetary policy is non-existent; the central bank is a junta tool, not an independent institution.

**Sanctions, Trade Collapse, and Energy Sector Destruction**

Western sanctions target the military, gemstone exports, and oil and gas revenues. The US, EU, UK, Canada, and Australia have imposed asset freezes and trade restrictions. Chevron and TotalEnergies exited Myanmar in 2022, costing the junta $1.5 billion annually in oil and gas revenues. But sanctions are leaky. Thailand, China, and India continue trade. China imports jade, timber, and minerals. Thailand buys natural gas from the Yadana offshore field, generating $1 billion annually for the junta. Sanctions hurt the broader economy—reducing investment, disrupting supply chains—without dislodging the military.

Exports fell to $14 billion in 2024 from $17 billion in 2020. Garment exports, which employed 700,000 workers pre-coup, collapsed as international buyers pulled out due to reputational risk and labor rights concerns. The garment sector has shrunk 60%. Hundreds of thousands lost jobs, swelling poverty. Rice and bean exports to China and India continue, but volumes are down 20% due to conflict disrupting agriculture.

**Agriculture, Food Security, and Displacement**

Agriculture employs 60% of the workforce and contributes 25% of GDP, but the sector is devastated. Conflict zones overlap with rice-growing regions—Sagaing, Magway, Shan State. Farmers abandon fields due to fighting. Internally displaced persons (IDPs) number 2.6 million; they're not farming. Fertilizer prices have tripled due to import costs and supply chain disruptions. Irrigation systems are damaged or non-functional.

Rice production fell 12% in 2024. Myanmar, historically a rice exporter, faces domestic shortages. The World Food Programme estimates 12.9 million people face acute food insecurity. Malnutrition is rising, particularly among children. The humanitarian crisis is compounded by the military's obstruction of aid. UN agencies can't access conflict zones. The junta refuses independent monitoring, fearing it legitimizes the opposition.

**The Parallel Economy and NUG Financing**

The National Unity Government, operating in exile from Thailand and controlled territory, has established a parallel economy. The NUG issues bonds, collects taxes in areas under PDF control, and receives donations from the diaspora. NUG bonds raised $60 million in 2022-2024, financing resistance operations. The NUG minted "USDD" digital currency backed by the dollar, attempting to circumvent the kyat's collapse. Adoption is limited—perhaps 50,000 users—but it signals ambition.

In NUG-controlled areas, local administrations collect taxes on trade, timber, and mining. Revenue is estimated at $100-200 million annually, tiny compared to the junta's resource base but sufficient to sustain resistance. The parallel economy is fragmented, informal, and vulnerable to military offensives, but it persists.

**China's Role: Economic Patron and Security Broker**

China is Myanmar's largest trading partner ($16 billion in 2024) and investor. Chinese firms operate the Kyaukphyu deep-sea port, oil and gas pipelines, and hydroelectric dams. China provides diplomatic cover at the UN, blocking Security Council resolutions. But China is frustrated by instability disrupting the Belt and Road Initiative projects. In late 2023, China brokered ceasefires between the junta and EAOs along the border to restore trade. The ceasefires are fragile and repeatedly violated.

China's dilemma is that the junta is too weak to control the country but too entrenched to dislodge. China engages both the junta and EAOs, hedging bets. China's economic interests—trade routes, resource extraction—require stability, which neither side can provide.

**The Bottom Line**

Myanmar's economy will not recover while civil war continues. The junta lacks legitimacy and capacity to govern. The opposition controls territory but can't form a national government. The conflict is stalemated militarily, and both sides are too weak to win decisively. The economy contracts or stagnates, poverty deepens, and humanitarian needs grow.

The international community—ASEAN, the UN—has failed to mediate effectively. Sanctions punish the population more than the military. China and Thailand enable the junta through trade. The NUG can't convert military gains into governance. Myanmar is a failed state economically, politically, and institutionally.

The only scenarios for economic recovery are: (1) decisive opposition victory, which is unlikely given military airpower and arms access, or (2) negotiated settlement, which both sides reject. Absent either, Myanmar faces a decade of low-intensity civil war, economic contraction, and deepening poverty. A country that was Southeast Asia's rising star in 2015—growing 7% annually, attracting investment, reducing poverty—is now its basket case. The coup didn't just destroy democracy; it destroyed livelihoods, futures, and hope.`,
    issues: ['Civil War Economic Collapse', 'Currency Crisis at 4,850 per Dollar', 'Territorial Fragmentation Disrupting Trade', 'Sanctions and Foreign Investment Flight', 'Food Insecurity Affecting 13 Million']
  },

  NEPAL: {
    name: 'Nepal',
    country: 'Nepal',
    lat: 28.3949,
    lng: 84.1240,
    summary: `Nepal is one of the world's most remittance-dependent economies, and that dependence is both blessing and curse. Remittances were $9.8 billion in 2024, equivalent to 24% of GDP, sent home by 3.5 million Nepali workers in the Gulf states, Malaysia, and India. This inflow sustains consumption, funds imports, and keeps the poverty rate at 18% rather than 40%. But it also creates Dutch disease effects, disincentivizes domestic production, and leaves Nepal vulnerable to labor market conditions in destination countries. GDP growth was 4.7% in 2024, forecast at 5.1% for 2025, entirely driven by remittance-fueled consumption and tourism recovery. Manufacturing is 5.6% of GDP. Agriculture is 25%. Nepal produces almost nothing the world wants to buy, and remittances have removed the urgency to change that.

**Remittances: Economic Lifeline and Development Trap**

Young Nepali men—primarily from Madheshi and hill communities—migrate to Qatar, UAE, Saudi Arabia, and Malaysia, working construction, security, and domestic labor. They earn $300-$600 monthly, sending $200-$400 home. For families in rural Nepal, this is transformative. It funds children's education, builds concrete houses, buys motorcycles. But it also hollows out villages. Men aged 18-40 are absent. Agriculture suffers from labor shortages. Women, left behind, manage households and farms but lack capital and agency.

Remittances appreciate the Nepali rupee (pegged to the Indian rupee at 1.6:1), making exports uncompetitive. Manufacturing can't compete with Chinese and Indian imports. The trade deficit is catastrophic: $15.7 billion in imports versus $1.3 billion in exports in 2024. Remittances finance the deficit, but this isn't sustainable. If Gulf economies slow or labor-sending countries like Bangladesh and India compete more effectively, remittance inflows could decline, triggering balance-of-payments crisis.

Efforts to redirect remittances into productive investment—government bonds, SME funds—have failed. Recipients use remittances for consumption (49%), debt repayment (18%), and housing (22%). Just 6% goes to business investment. The government lacks mechanisms to channel remittances productively.

**Tourism Recovery and Earthquake Vulnerability**

Tourism generated $2.1 billion in 2024, 6.2% of GDP, as visitor numbers hit 850,000, recovering toward pre-pandemic levels (1.2 million in 2019). Everest base camp trekking, Annapurna circuit, Kathmandu's cultural heritage sites draw Western trekkers and Indian pilgrims. The government targets 2 million visitors by 2030, but infrastructure bottlenecks constrain growth. Tribhuvan International Airport is overcrowded and outdated. Road access to trekking regions is poor. Waste management in Everest region is a crisis—literally tons of garbage left by climbers.

Tourism is seasonal (spring and autumn) and geographically concentrated (Kathmandu Valley, Annapurna, Everest). Off-season and off-trail areas see minimal economic benefit. The 2015 earthquake killed 9,000, destroyed heritage sites, and shattered tourism for three years. Nepal is seismically active—another major quake is inevitable. Building codes exist but aren't enforced. Kathmandu's infrastructure would collapse in a 7.0+ magnitude quake, devastating tourism and the broader economy.

**Hydropower Potential and India's Energy Market**

Nepal has 83,000 MW of hydropower potential, second only to Brazil per capita. Installed capacity is 3,100 MW, leaving 96% untapped. If developed, Nepal could export electricity to India and Bangladesh, generating $3-5 billion annually. The Upper Tamakoshi project (456 MW, completed 2021) demonstrates viability. But financing is the bottleneck. Hydropower projects require $2-4 million per MW, totaling $20-40 billion to develop even 10,000 MW. Nepal's government budget is $13 billion; it can't self-finance.

China and India compete to fund projects, seeking geopolitical influence. Chinese firms have proposed large dams but face environmental and displacement concerns. India prefers smaller run-of-river projects. Bureaucracy, land acquisition delays, and corruption slow development. The West Seti project (750 MW) was approved in 2008, canceled in 2014, revived in 2017, and is still not under construction.

Even if projects are built, Nepal depends entirely on India to purchase electricity. India's power surplus reduces import demand. Transmission lines to India are limited. Nepal has no negotiating leverage.

**Inflation, Currency Peg, and Import Dependency**

Inflation was 7.8% in 2024, driven by food (31% of CPI) and fuel imports. Nepal produces 60% of its food needs, importing rice, lentils, and vegetables from India. Fuel—100% imported from India—is a fiscal drain. The Nepali rupee is pegged to the Indian rupee, eliminating exchange rate risk with Nepal's largest trade partner (65% of imports) but tying monetary policy to India's Reserve Bank. When India raised rates to combat inflation in 2022-2023, Nepal's central bank followed, raising rates to 10%, choking domestic credit.

The peg provides stability but eliminates monetary independence. Nepal can't pursue counter-cyclical policy or depreciate to boost exports. The trade-off is acceptable as long as remittances finance deficits, but vulnerability is high.

**Political Instability, Corruption, and Governance Failure**

Nepal has had 14 governments in 16 years. Coalition governments, formed from 7-10 parties, collapse over patronage disputes. Prime Minister Pushpa Kamal Dahal "Prachanda" (2022-2024) was ousted in a no-confidence vote in July 2024. KP Sharma Oli returned as PM in a fragile coalition. Policy continuity is impossible. Budgets are delayed. Infrastructure projects stall. Investors demand stability; Nepal can't provide it.

Corruption is endemic. Transparency International ranks Nepal 110th of 180. Public procurement is rigged. The Melamchi Water Supply Project, meant to solve Kathmandu's water crisis, was approved in 1998, began construction in 2013, and partially opened in 2021—23 years and $500 million over budget. Floods destroyed infrastructure in 2021; it's still not fully operational. This is typical of Nepali governance.

**Fiscal Constraints and Debt Sustainability**

The fiscal deficit is 4.9% of GDP in 2024, financed by external concessional loans from the World Bank, Asian Development Bank, and China. Public debt is 48% of GDP, sustainable for now but rising. Revenue is 23% of GDP, reasonable coverage, but tax evasion is rampant. VAT is 13%, income tax is 30%, but the informal sector—70% of employment—evades. Customs revenue depends on imports, which are consumption-driven, not productive.

The government spends 26% of budget on salaries and pensions for 300,000 civil servants, a bloated and inefficient bureaucracy. Capital spending—roads, schools, hospitals—is just 18% of budget. Nepal is trapped: too poor to fund development, too bureaucratic to attract investment, too politically unstable to sustain reform.

**The Bottom Line**

Nepal's economy is sustained by remittances and tourism, but neither drives transformational development. Remittances fund consumption, not investment. Tourism is seasonal and vulnerable to disasters. Hydropower potential remains mostly untapped due to financing gaps and bureaucracy. Manufacturing is negligible. Agriculture is subsistence-level. Political instability prevents coherent policy. Corruption saps resources. The trade deficit is structural and widening.

Nepal needs $10-20 billion in infrastructure investment—hydropower, roads, airports, power grids—to escape low-income status. But where does the money come from? The government can't afford it. Foreign investors won't commit without stability and rule of law. China offers loans but at commercial rates that risk debt distress. India is wary of Chinese encroachment and offers less financing. The result is stasis. Nepal grows at 4-5%, enough to keep pace with population growth but insufficient to reduce poverty meaningfully. For a country with Nepal's natural resources—water, mountains, biodiversity—and human capital—educated diaspora, entrepreneurial spirit—this is a tragic waste. But without governance reform and political stability, waste is the trajectory.`,
    issues: ['Remittance Dependency at 24% of GDP', 'Massive Trade Deficit at $14 Billion', 'Hydropower Potential Untapped', 'Political Instability with 14 Governments in 16 Years', 'Earthquake Vulnerability and Infrastructure Weakness']
  },

  NETHERLANDS: {
    name: 'Netherlands',
    country: 'Netherlands',
    lat: 52.1326,
    lng: 5.2913,
    summary: `The Netherlands is the world's 18th largest economy and the 6th largest in Europe, punching well above its weight given its modest population of 17.9 million. GDP per capita is €59,200 ($64,500), among Europe's highest. Growth was 1.7% in 2024 and is forecast at 1.9% for 2025, moderate by historical standards but solid for a mature economy. The Dutch model—trade openness, fiscal discipline, innovation in agriculture and logistics, and pragmatic coalition governance—has delivered prosperity. But cracks are showing: housing crisis, nitrogen emissions limits choking agriculture, labor shortages, and the far-right Party for Freedom (PVV) winning elections in 2023 signal voter frustration with the status quo.

**Trade, Rotterdam, and the European Gateway**

The Netherlands is the world's 5th largest exporter of goods ($870 billion in 2024), remarkable for a country the size of Maryland. This isn't due to natural resources or manufacturing dominance; it's logistics and re-export. The Port of Rotterdam, Europe's largest, handles 470 million tonnes of cargo annually. Containers arrive from Asia, are repackaged, and dispatched to Germany, Belgium, France. Schiphol Airport is Europe's 3rd busiest cargo hub. The Netherlands earns fees, warehousing revenue, and value-added services.

Re-exports account for 45% of total exports, meaning Dutch trade statistics overstate domestic production. Excluding re-exports, the Netherlands exports €400 billion in goods, still impressive. Agricultural exports—flowers, dairy, vegetables, meat—are $120 billion annually, second globally only to the U.S. The Netherlands is the world's largest flower exporter (€6.2 billion), second-largest tomato exporter, and a top-five dairy exporter. This is high-tech agriculture: greenhouse horticulture, precision farming, vertical integration. A single Dutch greenhouse produces tomatoes worth €5 million annually on 2 hectares.

The Rotterdam effect also distorts GDP. Multinational corporations—Shell, Unilever, ASML—are headquartered in the Netherlands for tax reasons. Their revenues are booked in the Netherlands but economic activity occurs globally. The Netherlands' effective corporate tax rate is 15-20%, making it attractive for tax optimization. The EU has pressured the Netherlands to close loopholes, and the 2021 tax reforms reduced incentives, but the Netherlands remains a preferred domicile.

**Housing Crisis and Affordability Collapse**

The housing crisis is the Dutch economy's Achilles heel. Average home prices are €440,000, up 60% since 2019. In Amsterdam, prices exceed €700,000. Rent for a two-bedroom apartment in Amsterdam averages €2,200 monthly. Supply is constrained—the Netherlands builds 70,000 units annually but needs 100,000 to keep pace with population growth (driven by immigration and household formation). Zoning restrictions, environmental regulations (nitrogen limits restrict construction), and NIMBYism block development.

The shortage drives both prices and rents, squeezing young people and middle-class families. Homeownership is declining—now 58%, down from 65% in 2010—as first-time buyers are priced out. Mortgage interest deductibility, a subsidy costing €6 billion annually, benefits existing owners and inflates prices. Renters face waitlists of 10+ years for social housing in Amsterdam and Rotterdam. The government proposed building 900,000 homes by 2030, but execution is uncertain.

Housing unaffordability is a political flashpoint. The PVV won the 2023 elections partly by blaming immigration for housing shortages. The coalition government, formed in 2024 under Prime Minister Dick Schoof (PVV-backed technocrat), promises tougher immigration controls and prioritizing housing for Dutch citizens. This is economically dubious—immigrants are net fiscal contributors, and labor shortages constrain growth—but politically potent.

**Nitrogen Crisis and Agriculture's Existential Threat**

The Netherlands has the highest nitrogen deposition in Europe, damaging ecosystems and violating EU environmental directives. Agriculture, particularly livestock farming, emits 46% of nitrogen. The government's 2023 nitrogen reduction plan requires cutting emissions by 50% by 2030, forcing closure or reduction of 3,000 farms (11% of total). Compensation is offered, but many farmers reject it, viewing the policy as an assault on rural livelihoods.

Farmer protests—tractors blocking highways, manure dumped at government buildings—erupted in 2022-2023. The Farmer-Citizen Movement (BBB), a new party, won provincial elections in 2023, shocking the establishment. BBB opposes forced farm closures, arguing technology can reduce emissions without reducing production. The government faces impossible trade-offs: meet EU environmental mandates or protect farmers. Delays risk EU fines; enforcement risks rural revolt.

The broader issue is land use. The Netherlands is densely populated—508 people per square kilometer, highest in Europe—and intensively farmed. Balancing agriculture, housing, nature, and infrastructure in a small country requires choices that anger someone. The nitrogen crisis is emblematic of a country running out of space.

**Inflation, ECB Policy, and Fiscal Discipline**

Inflation peaked at 10.0% in 2022, driven by energy costs (the Netherlands imports 95% of energy), before moderating to 3.8% in 2024 and 2.6% in 2025 as ECB rate hikes cooled demand. The Netherlands uses the euro, so monetary policy is set by the ECB. The Dutch government can't influence rates but benefits from eurozone stability and low borrowing costs. Dutch 10-year bond yields are 2.3%, among the eurozone's lowest, reflecting fiscal credibility.

The fiscal deficit was 2.3% of GDP in 2024, below the 3% Maastricht criterion. Public debt is 47% of GDP, well below the 60% threshold. The Netherlands is fiscally disciplined, running surpluses during booms and small deficits during recessions. But this discipline has costs: underinvestment in infrastructure, education, and defense. Roads are congested. Railways face delays. Schools are overcrowded. Defense spending is 2.1% of GDP (meeting NATO's target), but military equipment is outdated.

**Labor Market, Skills Shortages, and Immigration**

Unemployment is 3.6%, near full employment. But labor shortages are acute in healthcare, education, tech, and logistics. Vacancy rates are at record highs—400,000 job openings. The Netherlands relies on immigration to fill gaps—175,000 net migration in 2024, primarily EU citizens (Poland, Romania, Bulgaria) and skilled migrants (India, Turkey, China). But the PVV government is restricting migration, creating tension with employers who depend on foreign labor.

The skills mismatch is structural. The Netherlands produces 130,000 university graduates annually, many in social sciences and humanities, while demand is for STEM and vocational trades. The vocational education (MBO) system is underfunded and stigmatized. Apprenticeships are limited. Companies complain they can't find welders, electricians, nurses—occupations that don't require degrees but do require training.

Women's labor force participation is high (73%), but part-time work is common—37% of employed women work part-time, highest in Europe. This reflects cultural norms (Dutch women value work-life balance) and childcare costs (€1,200 monthly per child), but it constrains productivity. Increasing female full-time participation could boost GDP by 6%, but changing norms is slow.

**ASML, Innovation, and the Tech Sector**

ASML, the Dutch semiconductor equipment manufacturer, is the crown jewel of Dutch industry. It's the only company globally producing extreme ultraviolet (EUV) lithography machines, essential for advanced chips. Market capitalization is €350 billion, making it Europe's most valuable tech company. ASML employs 40,000, generates €28 billion in revenue, and pays €2 billion in Dutch taxes annually. Its success is built on decades of R&D investment, public-private collaboration, and skilled engineering talent.

But ASML is an outlier. The Netherlands lacks a deep tech ecosystem like Silicon Valley or Shenzhen. Startups are founded—Amsterdam and Eindhoven have growing tech scenes—but scale-ups struggle to access late-stage capital, so they're acquired by US or Asian firms. Brain drain is an issue; Dutch engineers emigrate to the US for higher salaries and bigger opportunities.

The government invests 2.2% of GDP in R&D, above EU average but below South Korea (4.8%) or Israel (5.6%). Increasing R&D spending and venture capital availability is essential to compete in AI, biotech, and green tech.

**The Bottom Line**

The Netherlands is rich, stable, and efficient, but complacency is creeping in. The housing crisis is unsolved. Nitrogen limits threaten agriculture. Labor shortages constrain growth. Immigration backlash risks undermining the openness that built Dutch prosperity. Fiscal discipline is admirable, but underinvestment in infrastructure and innovation will erode competitiveness. The PVV government's nationalist turn—tougher immigration, Euroscepticism, farmer protection—may satisfy voters but risks damaging the trade, talent, and European integration that underpin the economy. The Netherlands has thrived by being open, pragmatic, and forward-looking. If it turns inward, that prosperity will fade. The test is whether the Dutch can solve housing, nitrogen, and labor challenges without sacrificing the model that made them rich. History suggests they can, but the path is narrowing.`,
    issues: ['Housing Crisis with Prices Up 60%', 'Nitrogen Emissions Forcing Farm Closures', 'Labor Shortages at 400,000 Vacancies', 'Immigration Backlash Under PVV Government', 'Rotterdam Re-Export Dependence']
  },

  NEW_ZEALAND: {
    name: 'New Zealand',
    country: 'New Zealand',
    lat: -40.9006,
    lng: 174.8860,
    summary: `New Zealand's economy is small, remote, and commodity-dependent, growing at 2.4% in 2024 and forecast at 2.8% for 2025. GDP per capita is NZ$77,000 ($47,000 USD), solidly high-income but trailing Australia ($65,000 USD). The country's 5.3 million people are dispersed across two islands 2,000 kilometers from the nearest major economy (Australia). This geography shapes everything: high transport costs, limited scale economies, and dependency on agricultural exports—dairy, meat, wine, fruit—which account for 48% of total exports. The National-led coalition government, elected in October 2023 under Prime Minister Christopher Luxon, inherited an economy battling inflation, housing unaffordability, and productivity stagnation. Eighteen months in, the diagnosis is clear; the cure remains elusive.

**Dairy Dominance and Fonterra's Outsized Role**

Dairy exports were NZ$21.4 billion in 2024, 22% of total exports. Fonterra, the farmer-owned cooperative, processes 80% of New Zealand's milk and is the world's largest dairy exporter. Fonterra's global dairy trade auctions set international prices for whole milk powder, butter, and cheese. When Chinese demand is strong—as in 2021-2022—prices surge, enriching farmers and boosting GDP. When demand weakens—as in 2023-2024 due to China's economic slowdown—prices fall, and New Zealand's terms of trade deteriorate.

The concentration risk is profound. China accounts for 28% of New Zealand's exports, with dairy comprising the majority. If China's economy slows or if it diversifies dairy sources (increasing domestic production or sourcing from EU, Uruguay), New Zealand is vulnerable. Fonterra's payout to farmers—the price per kilogram of milk solids—was NZ$8.10 in 2022, then fell to NZ$7.30 in 2024 as global prices softened. Rural communities, heavily dependent on dairy income, face tighter budgets. The government has limited policy levers; it doesn't control global commodity markets or Chinese demand.

Environmental costs are mounting. Dairy farming contributes 48% of New Zealand's greenhouse gas emissions (methane from cows) and 23% of nitrogen pollution in waterways. The government's Zero Carbon Act (2019) requires net-zero emissions by 2050, but pathways are unclear. Fonterra is investing in methane inhibitors (feed additives reducing emissions by 30%), but adoption is slow and costly. Freshwater regulations, introduced by the previous Labour government and retained by the current National government, limit nitrogen use, constraining intensification. New Zealand must decarbonize dairy or face export market pressure—EU buyers increasingly demand low-carbon products.

**Housing Crisis, Immigration, and Infrastructure Strain**

The median house price is NZ$780,000 ($475,000 USD), 8.7x median household income, among the world's least affordable. Auckland, home to 1.7 million (33% of population), has median prices of NZ$1.1 million. Supply is constrained by zoning, land banking, and construction sector inefficiencies. The previous Labour government relaxed zoning in 2021-2022, allowing three-story townhouses on most residential land, but construction hasn't kept pace. New Zealand builds 38,000 homes annually; it needs 50,000 to accommodate population growth.

Net migration was 136,000 in 2024, driven by visa liberalization for skilled workers and working holiday visas. Migrants fill labor shortages in construction, hospitality, and healthcare. But they also increase housing demand, pushing rents higher. The National government promised to restrict migration, then reversed course, recognizing that labor shortages constrain growth. The dilemma is acute: immigrants are needed economically but exacerbate housing and infrastructure strain.

Infrastructure—roads, water, public transport—is inadequate. Auckland's housing boom added 200,000 residents without commensurate investment in schools, hospitals, or transport. The Auckland Light Rail project, promised for a decade, is stalled due to cost ($15 billion) and political indecision. Water infrastructure in Wellington is crumbling—pipes burst regularly, and earthquake resilience is low. The government's infrastructure pipeline is NZ$200 billion over 10 years, but financing is uncertain. Public debt is 41% of GDP, low by OECD standards, but the government resists borrowing for capital projects, fearing credit rating downgrades.

**Inflation, Monetary Policy, and RBNZ Independence**

Inflation peaked at 7.3% in 2022, driven by supply chain disruptions, fuel costs, and robust domestic demand. The Reserve Bank of New Zealand (RBNZ) raised the Official Cash Rate (OCR) from 0.25% to 5.5% between 2021 and 2023, the steepest hiking cycle in decades. Inflation fell to 4.7% in 2024 and 3.2% in 2025, but the RBNZ held rates at 5.25% through October 2025, prioritizing inflation control over growth. High rates have cooled housing (prices fell 12% peak-to-trough in 2022-2024) and dampened consumer spending. Retail sales are flat. Business investment is weak.

The RBNZ faces criticism from the government. Finance Minister Nicola Willis publicly called for rate cuts, arguing the economy needs stimulus. The RBNZ governor, Adrian Orr, resisted, citing inflation risks. This tension highlights the trade-offs inherent in independent central banking. The government, facing election cycles, wants growth; the central bank, focused on price stability, prioritizes disinflation. The RBNZ's independence is enshrined in law and respected, but political pressure is intensifying.

The New Zealand dollar (NZD) trades at 0.59 USD, down from 0.72 in 2021, driven by high US interest rates and weak commodity prices. Currency depreciation boosts export competitiveness but raises import costs, contributing to inflation. The RBNZ doesn't target exchange rates, but depreciation complicates inflation management.

**Productivity, Innovation, and Brain Drain**

Labor productivity growth is 0.6% annually, half the OECD average. New Zealand produces the same output per hour as in 2008. This stagnation reflects low capital investment (machinery, software, infrastructure), skills mismatches, and firm size distribution (95% of firms have fewer than 20 employees; small firms are less productive than large ones). R&D spending is 1.4% of GDP, below Australia (1.9%) and far below Israel (5.6%).

The government's research and development tax credit subsidizes 15% of R&D costs, but uptake is limited to large firms. Small businesses lack awareness or capacity to apply. The tertiary education system produces graduates in arts and social sciences while demand is for STEM and vocational trades. Polytechnics (vocational colleges) are underfunded and fragmented.

Brain drain is relentless. An estimated 700,000 New Zealanders live abroad, primarily in Australia, UK, and Canada. Australia, offering higher wages (median salary AU$85,000 vs NZ$65,000) and larger job markets, lures skilled workers. Nurses, teachers, engineers—occupations in shortage—emigrate. The government can't compete on salaries due to fiscal constraints. Immigration partially offsets brain drain, but incoming migrants are often less skilled than outgoing New Zealanders.

**Fiscal Policy, Tax Reform, and Public Services**

The fiscal deficit was 2.9% of GDP in 2024, driven by cyclone recovery costs (Cyclone Gabrielle in 2023 caused NZ$13 billion in damages), health system pressures, and lower tax revenues. The National government promised tax cuts pre-election but has delayed implementation due to fiscal constraints. Public debt is rising to 43% of GDP by 2026, still low but concerning given the government's fiscal conservatism.

Tax revenue is 33% of GDP, OECD-average. But the tax base is narrow. New Zealand has no capital gains tax, wealth tax, or estate tax. Property investors benefit from tax advantages, fueling housing speculation. The Labour government attempted a capital gains tax in 2019 but abandoned it after public backlash. The National government opposes new taxes, leaving revenue growth dependent on income tax and GST (15%), both of which are cyclical.

Public services are strained. The health system faces waitlists of 6-12 months for elective surgery. Teacher shortages force school closures. Emergency housing waitlists exceed 25,000 families. The government must choose: raise taxes, cut services, or borrow. Each option is politically toxic.

**Climate Change, Agriculture Emissions, and Trade Policy**

New Zealand ratified the Paris Agreement and committed to reducing emissions by 50% by 2030 (from 2005 levels). Agriculture is exempt from the Emissions Trading Scheme (ETS) until 2025, but the government will introduce farm-level pricing in 2026. Farmers oppose this, arguing it raises costs without reducing global emissions (if New Zealand produces less meat/dairy, other countries fill the gap). The government is caught between climate commitments and rural voters.

Trade diversification is a priority. New Zealand joined the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP) in 2018, securing tariff reductions with Japan, Vietnam, and Mexico. The EU and UK free trade agreements, ratified in 2023-2024, provide new market access. But China remains dominant—28% of exports—and geopolitical tensions create risk. New Zealand navigates China-US tensions by maintaining economic ties with China while security ties with the US, Australia, and Five Eyes. This balancing act is sustainable for now but vulnerable to shocks.

**The Bottom Line**

New Zealand's economy is fundamentally sound—low debt, high-income, strong institutions—but structural weaknesses limit growth. Dairy dependency creates volatility. Housing unaffordability strains households and fuels inequality. Productivity stagnation reflects underinvestment in capital and skills. Brain drain hemorrhages talent. Climate obligations clash with agricultural interests. The National government's policy mix—fiscal conservatism, migration liberalization, deregulation—aims to boost growth, but early results are modest. Growth of 2.8% is fine for a mature economy but insufficient to close the income gap with Australia or address housing, infrastructure, and productivity challenges. New Zealand risks becoming a high-income, low-growth economy—comfortable but stagnant. Breaking that pattern requires bold reforms: tax base expansion, infrastructure investment, R&D subsidies, and agricultural transformation. The question is whether New Zealand's political system, which favors incrementalism and consensus, can deliver transformation. History suggests it can't. But the alternative—slow decline in relative prosperity—is worse.`,
    issues: ['Dairy Export Dependence on China', 'Housing Affordability Crisis', 'Productivity Stagnation at 0.6%', 'Brain Drain to Australia', 'Agricultural Emissions and Climate Targets']
  },

  NICARAGUA: {
    name: 'Nicaragua',
    country: 'Nicaragua',
    lat: 12.8654,
    lng: -85.2072,
    summary: `Nicaragua is Central America's poorest country after Honduras, with GDP per capita of $2,350 and an economy that's collapsing under the weight of authoritarianism, sanctions, and institutional decay. Daniel Ortega, president since 2007 (and previously 1985-1990), has transformed Nicaragua from a fragile democracy into a personalist dictatorship. His wife, Rosario Murillo, serves as vice president. Together, they've imprisoned opposition leaders, shuttered universities, exiled journalists, seized church properties, and expelled international NGOs. The economic consequences are catastrophic: GDP growth was 3.8% in 2024 but is forecast at just 1.9% for 2025 as capital flight, emigration, and sanctions intensify. This isn't an economy; it's a kleptocracy with GDP statistics.

**The 2018 Protests and Economic Collapse**

In April 2018, protests erupted over pension reforms. Ortega's security forces and paramilitary groups killed 355 protesters (by independent counts; the government admits only 200). The crackdown destroyed investor confidence. FDI fell from $1.4 billion in 2017 to $500 million in 2019. GDP contracted 3.8% in 2018 and 3.9% in 2019, the worst recession in Central America. Banks faced deposit runs. Businesses closed. Unemployment spiked to 15%. Tourism, which generated $840 million in 2017, collapsed to $400 million as Western visitors boycotted.

The economy stabilized in 2020-2023 through remittances and agricultural exports, but underlying fragility remains. An estimated 400,000 Nicaraguans have emigrated since 2018, primarily to Costa Rica and the United States. Remittances hit $3.6 billion in 2024, 17% of GDP, sustaining consumption. But remittance dependency is a sign of failure—people leave because the economy offers no future.

**Sanctions, Trade Restrictions, and Isolation**

The United States imposed sanctions on Ortega family members, government officials, and security forces for human rights abuses. The NICA Act (2018) blocks Nicaragua's access to international financial institutions, preventing World Bank and IMF loans. The RENACER Act (2021) expanded sanctions, targeting Nicaraguan gold exports (gold is 12% of exports) and restricting trade. In 2024, the US suspended Nicaragua from CAFTA-DR, the Central American Free Trade Agreement, removing tariff-free access to the US market. Textiles, which employed 60,000 and generated $600 million in exports, lost competitiveness overnight. Several maquiladora factories closed, shedding jobs.

Ortega responded by deepening ties with Russia and China. Russia announced $50 million in aid in 2024, and China committed $1 billion for infrastructure projects (roads, ports). But these aren't grants; they're loans at commercial rates, creating debt dependency. Public debt is 62% of GDP, up from 45% in 2017. Debt service consumes 22% of government revenue, crowding out health and education.

**Agriculture, Coffee, and Gold Exports**

Agriculture employs 30% of the workforce and contributes 18% of GDP. Coffee is the largest export ($600 million in 2024), followed by gold ($420 million), beef ($310 million), and sugar ($180 million). Coffee production is labor-intensive, relying on smallholders in the northern highlands. But coffee rust (a fungal disease), climate change (erratic rainfall), and low productivity constrain output. Yields are 800 kg per hectare versus 1,500 in Colombia, reflecting poor soil management and lack of inputs.

Gold mining, dominated by Canadian firm B2Gold's El Limon and La India mines, generates royalties for the government. But environmental costs are severe—mercury pollution, deforestation, displacement of indigenous communities. Civil society groups documenting abuses are suppressed or expelled.

Beef exports to the US were $310 million in 2024, but the industry faces scrutiny over deforestation. Nicaragua's forests are disappearing at 1.6% annually as cattle ranching expands into protected areas. US importers face pressure to source sustainably, threatening future demand.

**Inflation, Currency Stability, and Central Bank Manipulation**

Inflation was 7.9% in 2024, driven by food (corn, beans, rice) and fuel imports. The Nicaraguan córdoba is managed by the central bank, which depreciates it 2% annually against the dollar to maintain export competitiveness—a crawling peg. The official exchange rate is 36.8 córdobas per dollar in November 2025, but black market rates are 40:1, signaling capital flight and lack of confidence.

The central bank lacks independence—it's controlled by Ortega loyalists. Foreign exchange reserves are $4.5 billion, covering 5.2 months of imports, adequate for now but vulnerable to shocks. If remittances decline or sanctions intensify, reserves could deplete rapidly, forcing devaluation and import compression.

Credit to the private sector is stagnant—banks are risk-averse, lending only to established firms with collateral. SMEs, which drive employment, can't access capital. Interest rates for business loans are 12-15%, prohibitive for many. The banking sector is dominated by Banco de América Central (BAC) and Banpro, both politically connected.

**Fiscal Collapse, Tax Evasion, and Corruption**

The fiscal deficit is 3.1% of GDP in 2024, but this understates reality. Off-budget spending—security forces, Murillo's personal projects—is opaque. Tax revenue is 19% of GDP, far below potential. VAT is 15%, income tax is 30%, but collection is weak. The informal sector employs 70% of workers, evading taxes. High-wealth individuals and Ortega-connected businesses receive exemptions or simply don't pay.

Corruption is institutionalized. Transparency International ranks Nicaragua 162nd of 180 countries. Contracts are awarded to family members or loyalists. Rosario Murillo's children control telecommunications, media, and import monopolies. The judiciary is politicized—judges serve Ortega, not the law. Property rights are insecure; opponents have land expropriated without compensation.

**Emigration, Brain Drain, and Demographic Decline**

Nicaragua's population is 6.9 million, but net emigration is 40,000 annually. The working-age population is shrinking. University graduates—engineers, doctors, teachers—emigrate to Costa Rica, Panama, or the US, seeking opportunity and freedom. The brain drain hollows out the professional class. Those who remain either work for the government (and stay silent) or scrape by in the informal economy.

Birth rates are falling—2.2 children per woman, near replacement level—as economic uncertainty discourages families. The median age is 27, but the demographic dividend is being squandered as young people leave.

**The Bottom Line**

Nicaragua's economy is trapped in authoritarian decline. Ortega and Murillo prioritize political control over economic development. Sanctions and isolation reduce trade and investment. Remittances sustain consumption, but they're dependent on migrants' success abroad, not domestic growth. Agriculture and mining generate export revenue but are environmentally destructive and low-productivity. The fiscal situation is deteriorating. Debt is rising. Corruption siphons resources.

The only scenarios for improvement are: (1) Ortega's death or removal, which could trigger political transition and policy reversal, or (2) a negotiated settlement that restores democratic norms in exchange for sanctions relief. Neither seems likely. Ortega is 79, in poor health, but he's grooming Murillo and loyalists to succeed him. The opposition is exiled, imprisoned, or cowed. International pressure is ineffective—Russia and China provide enough support to sustain the regime.

Nicaragua will muddle through, growing at 1-2% annually, with persistent poverty, emigration, and decay. It's a tragedy because Nicaragua has resources—agricultural land, geothermal energy, a young population. But resources without governance, rule of law, and economic freedom are wasted. Ortega has destroyed Nicaragua's potential, and the damage will take decades to repair. The Nicaraguan people deserve better. But as long as Ortega rules, better won't come.`,
    issues: ['Authoritarian Economic Collapse', 'US Sanctions and CAFTA-DR Suspension', 'Remittance Dependency at 17% of GDP', 'Mass Emigration and Brain Drain', 'Corruption and Kleptocracy']
  }
}

async function insertEconomySummariesPart2() {
  console.log('\n' + '='.repeat(70))
  console.log('💰 INSERTING ECONOMY SUMMARIES - BATCH 6 PART 2')
  console.log('='.repeat(70) + '\n')

  let successCount = 0
  let errorCount = 0

  for (const [key, data] of Object.entries(ECONOMY_SUMMARIES_PART2)) {
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
  console.log('\n💰 BATCH 6 COUNTRIES (Part 2):')
  console.log('  ✓ Morocco - Economy')
  console.log('  ✓ Mozambique - Economy')
  console.log('  ✓ Myanmar - Economy')
  console.log('  ✓ Nepal - Economy')
  console.log('  ✓ Netherlands - Economy')
  console.log('  ✓ New Zealand - Economy')
  console.log('  ✓ Nicaragua - Economy')
  console.log('\n🎉 BATCH 6 COMPLETE: 13 ECONOMY SUMMARIES TOTAL! 🎉\n')
}

insertEconomySummariesPart2()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
