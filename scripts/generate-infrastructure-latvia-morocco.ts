import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const infrastructureSummaries = {
  'Latvia': {
    summary: `Latvia's infrastructure reflects its strategic position as a Baltic crossroads, with the Port of Riga handling over 30 million tons annually, serving as a crucial gateway between EU markets and post-Soviet space. Rail Baltica—the €5.8 billion high-speed rail project connecting Tallinn to Warsaw via Riga—represents the most transformative infrastructure initiative, promising 240 km/h speeds and integration into European rail networks by 2030. Yet implementation lags, costs escalate, and questions persist about ridership projections in a region of just 6 million people.

Riga's urban infrastructure demonstrates post-Soviet adaptation. The tram network, dating to 1901, carries 30% of public transport passengers across 11 lines totaling 40 kilometers. Recent fleet modernization with Škoda ForCity trams improves service quality, though the system remains underfunded. The city's compact core enables cycling—25 kilometers of dedicated lanes—but car dependency grows in suburban sprawl, straining road capacity.

Road infrastructure received €2 billion EU investment since accession, upgrading the Via Baltica corridor and east-west connections. The A1 highway from Riga to the Lithuanian border meets EU standards, but secondary roads suffer chronic maintenance deficits. Rural depopulation means infrastructure serves declining populations—economically inefficient but socially necessary.

Digital infrastructure advances impressively. Latvia boasts the world's fourth-fastest average internet speeds at 100+ Mbps, with near-universal fiber coverage in urban areas. 5G deployment accelerates, though rural connectivity lags. Riga's smart city initiatives pilot IoT integration for traffic management and energy systems, leveraging the nation's strong IT sector.

The Daugava River hydropower cascade generates 70% of domestic electricity, but aging Soviet-era infrastructure requires massive refurbishment. Energy infrastructure faces strategic vulnerability: historical dependence on Russian gas (now rapidly decreasing) and electricity grid isolation from European networks until the planned synchronization with Continental Europe by 2025.

Most critically, demographic decline threatens infrastructure sustainability. Latvia lost 27% of its population since 1990—infrastructure built for 2.7 million now serves 1.9 million. The challenge is not building new systems but intelligently managing oversized networks as cities contract and rural areas empty, requiring planning paradigms that accept decline rather than chase perpetual growth.`,
    issues: [
      'Rail Baltica project facing cost escalation and implementation delays',
      'Demographic decline creating infrastructure overcapacity challenges',
      'Chronic maintenance deficits on secondary road networks',
      'Energy grid isolation until European synchronization in 2025',
      'Rural digital connectivity lagging despite excellent urban broadband',
      'Aging Soviet-era hydropower infrastructure requiring refurbishment'
    ],
    lat: 56.8796,
    lng: 24.6032
  },
  'Lebanon': {
    summary: `Lebanon's infrastructure stands as perhaps the Middle East's most tragic infrastructure story—a nation that once boasted the region's finest road networks, airports, and utilities now trapped in systematic collapse. Electricity infrastructure tells this story most starkly: the state utility Électricité du Liban provides just 3-4 hours of power daily, forcing citizens to pay three times—official bills, generator subscriptions, and solar panels. This isn't mere inconvenience; it's infrastructure failure as economic catastrophe, costing businesses an estimated $2 billion annually.

Beirut's port, devastated by the 2020 ammonium nitrate explosion that killed 218 and destroyed critical infrastructure within a 10-kilometer radius, exemplifies institutional collapse. The blast obliterated grain silos, cargo handling facilities, and the container terminal handling 70% of national imports. Reconstruction stalls amid political paralysis and corruption, with temporary fixes replacing strategic rebuilding. The port that once rivaled Dubai now can barely function.

Transportation infrastructure deteriorates under impossible strain. Roads crumble from lack of maintenance and overloading—the government hasn't paved major highways in years. Beirut lacks any metro or modern public transit; traffic congestion costs an estimated 5% of GDP. The coastal highway from Beirut to Tripoli, a 90-kilometer journey, can take four hours. Private generators and water trucks have become parallel infrastructure networks, symptoms of state failure.

Telecommunications presents contradiction: Lebanon achieved 98% 4G coverage and fiber optic backbone connects major cities, yet state monopoly pricing keeps internet among the region's slowest and most expensive. This digital infrastructure dysfunction strangles the tech sector that could partially offset economic collapse.

Water infrastructure fails catastrophically. Beirut receives running water just three hours weekly in many neighborhoods, forcing residents to buy from private tankers at 500% markup. Wastewater treatment is virtually non-existent—80% of sewage flows untreated into the Mediterranean, creating public health crises and destroying coastal ecosystems.

The fundamental issue transcends technical fixes: Lebanon's infrastructure collapse reflects state collapse. Sectarian politics, corruption, and deliberate privatization of public service delivery into parallel systems controlled by political factions mean that infrastructure has become a tool of patronage rather than public good. Until political economy transforms, infrastructure will continue spiraling downward, regardless of technical solutions or international loans.`,
    issues: [
      'Electricity utility providing only 3-4 hours power daily, forcing parallel systems',
      'Beirut port reconstruction stalled two years after catastrophic explosion',
      'Road networks crumbling from years of zero maintenance',
      'Water infrastructure providing running water just hours weekly',
      '80% of sewage flowing untreated into Mediterranean Sea',
      'State monopoly telecommunications keeping internet slow and expensive'
    ],
    lat: 33.8547,
    lng: 35.8623
  },
  'Libya': {
    summary: `Libya's infrastructure embodies the paradox of petro-state wealth devastated by conflict. The nation that financed the Great Man-Made River—the world's largest irrigation project, pumping 6.5 million cubic meters of fossil water daily from Saharan aquifers through 4,000 kilometers of pipelines—now struggles to maintain roads in Tripoli. This $25 billion marvel of engineering, completed under Gaddafi, provides 70% of Libya's fresh water, yet sections suffer damage from conflict and lack of maintenance expertise.

Civil war since 2011 fragmented infrastructure along factional lines. Tripoli and Benghazi, Libya's two major cities, operate under different authorities with separate infrastructure management. The coastal highway connecting the two, critical for national unity, has been contested territory where checkpoints and fighting disrupt movement. Airports in Tripoli and Benghazi have suffered repeated closures from shelling, with flights rerouting through Misrata.

Oil infrastructure—the source of 95% of government revenue—operates at fraction of capacity. Export terminals, refineries, and pipelines face constant threat from militia control, sabotage, and lack of investment. Production averaging 1.2 million barrels daily is half the pre-revolution peak, not from geological constraints but infrastructure insecurity and institutional chaos.

Electricity generation capacity reaches 8,000 MW, theoretically sufficient for the population of 7 million, yet chronic load-shedding plagues all cities. The problem isn't capacity but fuel supply chains disrupted by conflict, maintenance skills lost to emigration, and grid infrastructure damaged in fighting. Hospitals and critical facilities depend on generators; residential areas can face 12-hour daily blackouts.

Telecommunications infrastructure surprisingly resilient: mobile coverage reaches 95% of the population, with 4G in major cities. Two competing operators (aligned with rival governments) maintain parallel networks, creating redundancy through rivalry. Internet penetration reaches 75%, though speeds lag regional peers.

The deeper challenge is governance fragmentation. Infrastructure requires unified planning, investment, and maintenance—impossible when rival governments control different territories, each maintaining separate utility companies, road authorities, and development plans. Even if conflict ended tomorrow, institutional integration would take years. Libya's infrastructure crisis is inseparable from its political crisis: infrastructure requires functional states, and Libya currently has competing claims to statehood rather than the state itself.`,
    issues: [
      'Great Man-Made River sections damaged with maintenance expertise lost',
      'Oil infrastructure operating at half capacity due to militia disruption',
      'Electricity grid suffering chronic blackouts despite adequate generation capacity',
      'Coastal highway disrupted by checkpoints and factional conflict',
      'Airport closures from repeated shelling forcing flight diversions',
      'Governance fragmentation preventing unified infrastructure planning'
    ],
    lat: 26.3351,
    lng: 17.2283
  },
  'Lithuania': {
    summary: `Lithuania's infrastructure renaissance centers on its strategic pivot from post-Soviet networks toward European integration. The decommissioning of Ignalina Nuclear Power Plant in 2009—a condition of EU accession—eliminated 70% of electricity generation, forcing Lithuania into energy dependence that shaped infrastructure priorities for the following decade. The response demonstrates infrastructure as geopolitics: construction of the Klaipėda LNG terminal in 2014 broke Russian gas monopoly, while electricity interconnections to Poland and Sweden reduced grid isolation.

Vilnius exemplifies Baltic urban planning evolution. The capital's public transport system carries 150 million annual passengers via buses and trolleybuses—no metro or tram yet, though feasibility studies continue. The city prioritized cycling infrastructure instead: 200 kilometers of lanes and bike-sharing systems that see 25% annual ridership growth. Pedestrianization of the UNESCO-listed Old Town and traffic calming in residential districts demonstrate post-car urbanism gaining traction in Eastern Europe.

Rail Baltica represents Lithuania's largest infrastructure commitment—€1.5 billion for the Lithuanian section of the high-speed corridor from Warsaw to Tallinn. The project requires integrating European standard gauge (1,435mm) with the existing Soviet broad gauge (1,520mm), creating dual-gauge capability. Kaunas Intermodal Terminal, under construction, will handle the transition—though questions persist about freight economics and passenger demand justifying this massive investment.

Road infrastructure absorbed €3 billion EU structural funds since 2004, upgrading the Via Baltica corridor and east-west arterials. The A1 highway from Vilnius to Kaunas meets modern standards, but municipal roads suffer maintenance deficits. Lithuanian logistics companies leverage Klaipėda port and road networks to position Lithuania as northern Europe's transit hub, but bottlenecks at Polish border crossings limit potential.

Digital infrastructure advances impressively: 95% 4G coverage, fiber optic networks reaching 85% of households, and Vilnius emerging as a fintech hub. Yet rural areas lag—30% of countryside lacks quality broadband, contributing to urban migration.

The critical challenge is demographic: Lithuania lost 23% of its population since 1990 through emigration and low birth rates. Infrastructure planned for 3.7 million now serves 2.8 million. The Vilnius-Kaunas corridor concentrates 60% of population, creating investment dilemmas: maintain infrastructure in depopulating regions for social cohesion, or accept managed decline and concentrate resources where people actually live? Lithuania's infrastructure future depends on answering this question honestly.`,
    issues: [
      'Rail Baltica economic justification unclear with low population density',
      'Population decline creating infrastructure overcapacity in rural regions',
      'Energy infrastructure dependence despite LNG terminal diversification',
      'Rural digital divide with 30% of countryside lacking quality broadband',
      'Municipal road maintenance deficits outside main corridors',
      'Border crossing bottlenecks limiting transit hub potential'
    ],
    lat: 55.1694,
    lng: 23.8813
  },
  'Luxembourg': {
    summary: `Luxembourg's infrastructure operates at absurd scale relative to its 645,000 residents—a city-state that functions as a major European financial center and transit crossroads, straining systems built for a different era. Daily commuters from France, Belgium, and Germany swell the daytime population by 200,000, creating infrastructure demands more typical of cities three times Luxembourg's size. The result: crushing road congestion despite the world's highest GDP per capita and generous infrastructure investment.

The government's response proves radical: making all public transport free since 2020—the world's first country to do so. Buses, trams, and trains carry passengers without tickets, removing fare infrastructure entirely while attempting modal shift. The Luxembourg City tramway, opened in 2017 and expanding to 19 kilometers by 2025, anchors this strategy. Ridership increased 40% after free fares, though car traffic barely declined—commuters still prefer automobiles despite zero-cost alternatives.

Rail infrastructure punches above national weight. Luxembourg connects to France, Germany, and Belgium via electrified lines handling both high-speed services (Paris in 2 hours) and dense regional traffic. CFL, the national railway, operates some of Europe's most frequent service—trains every 15 minutes on core routes. The Pfaffenthal-Kirchberg funicular and planned cable car demonstrate creative mobility solutions in Luxembourg's dramatic topography of plateaus and gorges.

Road infrastructure struggles despite massive investment. The A3 motorway toward France becomes a parking lot during rush hours; the A6 toward Belgium similarly congested. Luxembourg built more roads per capita than almost any European nation, yet induced demand negates capacity gains. The government now pivots to demand management: park-and-ride facilities, congestion pricing studies, and employer incentives for flexible working.

Digital infrastructure excels predictably: universal gigabit fiber availability, 5G blanket coverage, and data centers serving European cloud infrastructure. Luxembourg positions itself as secure digital infrastructure hub, though energy consumption of server farms creates sustainability tensions.

The deeper challenge is land use. Luxembourg's spatial planning created low-density suburbs dependent on cars, while concentrating employment in Luxembourg City and financial district in Kirchberg. Infrastructure cannot solve what planning created: 75% of commuters drive because housing near jobs is unaffordable, and dispersed residential patterns make transit inefficient. Free public transport is progressive policy but addresses symptoms rather than causes—until land use reforms densify housing near employment centers, Luxembourg's infrastructure will struggle against its own success.`,
    issues: [
      'Chronic road congestion despite highest per-capita road investment',
      'Free public transport increasing ridership but failing to reduce car traffic',
      'Cross-border commuter flows straining infrastructure by 30% daily',
      'Land use patterns creating car dependency despite transit investment',
      'Data center energy consumption conflicting with sustainability goals',
      'Housing affordability near jobs forcing long commutes'
    ],
    lat: 49.8153,
    lng: 6.1296
  },
  'Malaysia': {
    summary: `Malaysia's infrastructure ambitions crystallize in Kuala Lumpur, where the Merdeka 118—the world's second-tallest building at 678 meters—rises above a city transformed by massive construction. The capital's metro, monorail, LRT, and commuter rail networks total 240 kilometers, carrying 1.3 million daily passengers through systems built since 1995. The MRT Putrajaya Line, completed in 2023, adds 57 kilometers of automated metro, demonstrating continued transit investment even as questions mount about system integration and fare coordination across competing operators.

Yet urban transit success doesn't extend beyond Kuala Lumpur. Penang, Malaysia's second-largest metro, lacks any rail transit—residents depend entirely on cars and buses, creating severe congestion. The proposed Penang LRT and undersea tunnel projects face funding uncertainty and political disputes. Johor Bahru, pressed against Singapore, suffers legendary traffic jams at the causeway, with plans for a high-speed rail link to Singapore abandoned in 2021 after years of negotiation.

Road infrastructure received massive investment: the North-South Expressway spans 966 kilometers from Thai border to Singapore, Southeast Asia's longest. Toll highways connect all major cities, maintained to high standards but expensive—reducing accessibility for lower-income Malaysians. The Pan Borneo Highway project aims to transform Sarawak and Sabah connectivity, though the 2,200-kilometer network faces ecological concerns in biodiverse rainforests and indigenous land rights issues.

Digital infrastructure advances rapidly. 5G deployment covers 70% of populated areas, with the government pushing universal coverage by 2025. Fiber optic networks reach 9 million premises, though rural Sabah and Sarawak lag significantly—digital divide between peninsular Malaysia and Borneo states persists despite nominal equality.

Kuala Lumpur International Airport, handling 60 million passengers pre-pandemic, ranks among Asia's major hubs, yet the KLIA Ekspres rail link costs more than budget airline fares—infrastructure pricing misaligned with user economics. Port infrastructure at Port Klang moves 13 million TEUs annually, Southeast Asia's second-largest, yet efficiency lags Singapore, losing Malaysia potential transshipment business.

The fundamental tension: infrastructure as showcase versus infrastructure as system. Malaysia excels at landmark projects—MRT lines, expressways, towers—but struggles with maintenance, integration, and last-mile connectivity. Flashy infrastructure attracts headlines and serves political narratives; unglamorous infrastructure like drainage, pedestrian networks, and bus shelters receives inadequate attention. Until planning prioritizes systematic networks over symbolic monuments, Malaysian infrastructure will remain impressive in parts but disconnected as a whole.`,
    issues: [
      'Transit infrastructure concentrated in Kuala Lumpur, absent in other major cities',
      'High-speed rail to Singapore cancelled after years of planning',
      'Digital divide between peninsular Malaysia and Borneo states',
      'Pan Borneo Highway ecological and indigenous rights concerns',
      'Infrastructure pricing (KLIA Ekspres) misaligned with user economics',
      'Focus on landmark projects over systemic network integration'
    ],
    lat: 4.2105,
    lng: 101.9758
  },
  'Maldives': {
    summary: `The Maldives faces infrastructure challenges unlike any nation: 1,192 islands scattered across 900 kilometers of ocean, with no single island exceeding 8 square kilometers. Connectivity isn't about roads or rail—it's about boats, seaplanes, and the impossibility of traditional infrastructure networks. Yet the opening of the Sinamalé Bridge in 2018—a 2-kilometer China-funded connection between Malé and Hulhumalé—represents the nation's first road infrastructure linking separate islands, a minor marvel demonstrating infrastructure constraints most countries never imagine.

Malé, the capital, concentrates 40% of national population on 6 square kilometers, creating urban density (47,000 per km²) exceeding Mumbai. The island's infrastructure groans: narrow streets built for pedestrians now choked with motorcycles, inadequate waste management, chronic flooding during monsoons, and housing crisis driving the artificial island development of Hulhumalé. This 4 square kilometer reclamation project aims to house 240,000, easing Malé's pressure, but requires massive infrastructure investment—desalination plants, power generation, sewage treatment—on land that barely exists above sea level.

Airport infrastructure defines connectivity. Velana International Airport on Hulhulé island handles 3.5 million annual passengers, with a new terminal expanding capacity to 7.5 million. But inter-island connectivity depends on seaplanes—Trans Maldivian Airways operates the world's largest seaplane fleet with 58 aircraft—and speedboat transfers. This creates two-tier infrastructure: luxury resorts enjoy direct flights; local island populations depend on irregular ferries and cargo boats.

Energy infrastructure remains fossil fuel dependent despite abundant solar potential. Diesel generators on each inhabited island create fragmented, inefficient systems. Solar deployment increases—several islands now run on 60% renewables—but battery storage and inter-island grid connections remain prohibitively expensive. The paradox: the nation most vulnerable to climate change still relies 90% on imported diesel.

Digital infrastructure advances surprisingly well: 4G coverage reaches all inhabited islands via undersea fiber optic cables connecting atolls. Mobile penetration exceeds 150%—remarkable for a scattered archipelago. Yet internet costs remain high, reflecting infrastructure economics of serving tiny populations across vast distances.

The existential challenge transcends conventional infrastructure: sea level rise threatens the nation's existence. Malé's seawalls, raised multiple times, defend against storm surges, but IPCC projections suggest the Maldives could become uninhabitable by 2100. Infrastructure planning must confront whether to invest in defending islands or managed retreat. For now, the government builds upward and outward—reclamation and vertical development—but these are temporary fixes to permanent geophysical transformation driven by global heating beyond Maldivian control.`,
    issues: [
      'Extreme geographic dispersion making infrastructure networks nearly impossible',
      'Malé urban density creating housing and flooding crises',
      'Energy infrastructure 90% dependent on imported diesel',
      'Two-tier connectivity: resorts versus local island populations',
      'Sea level rise threatening long-term infrastructure viability',
      'Infrastructure economics challenged by small populations across vast distances'
    ],
    lat: 3.2028,
    lng: 73.2207
  },
  'Mali': {
    summary: `Mali's infrastructure confronts Saharan geography and security collapse across territories larger than France and Germany combined. The Niger River, flowing 1,600 kilometers through Malian territory, remains more critical for transport than any road—paddle steamers and pirogues move goods and people along routes unchanged for centuries. This isn't infrastructure romanticism; it's necessity in a nation where just 4,500 kilometers of roads are paved from a theoretical network of 139,000 kilometers.

Bamako, the capital, concentrates limited infrastructure investment. The city's bus rapid transit system, launched in 2023, represents West Africa's newest BRT network—yet just two lines covering 18 kilometers in a metropolitan area of 3 million. Most residents depend on sotrama (shared minibuses) and motorcycles navigating unpaved streets that flood catastrophically each rainy season. The Niger River bridge connecting central Bamako to the north shore remains the only crossing point, a chokepoint that creates hours-long traffic jams.

The trans-Sahara highway network—linking Algeria to coastal West Africa through Mali—exists more on maps than reality. The Bamako-Gao route stretches 1,200 kilometers, nominally paved but degraded to gravel in many sections. Beyond Gao, the mythical route to Algeria is sand and rock tracks, impassable much of the year. Security deterioration since 2012 makes northern infrastructure inaccessible—the government lacks presence, insurgent groups control territory, and maintenance crews cannot reach projects.

Rail infrastructure tells history clearly: the 730-kilometer line from Bamako to Dakar, Senegal—built in 1924 by French colonial administration—remains Mali's only railway. Averaging 50 km/h on deteriorating track, the weekly passenger service takes 16 hours for journeys that should take six. Freight service collapsed; track sections were dismantled for scrap metal. Plans to rehabilitate the line remain unfunded.

Electricity infrastructure reaches just 50% of population, concentrated in Bamako and regional capitals. Rural electrification is virtually non-existent—villages depend on diesel generators and solar panels where affordable. The Sélingué and Manantali dams on the Niger River generate hydropower, but transmission infrastructure barely extends beyond urban centers.

Digital infrastructure surprisingly advances: mobile coverage reaches 70% of population, with 4G in major cities. Chinese Huawei investment deployed cell towers even in remote regions, though service quality varies dramatically. Internet penetration reaches just 40%—smartphones are common but data costs prohibitive for most Malians.

The core challenge is state capacity. Mali's infrastructure crisis reflects broader governance collapse—corruption, conflict, and coup cycles prevent sustained investment or maintenance. Chinese and international funding built infrastructure in better times; that infrastructure now crumbles as Mali lacks institutions to maintain it. Until political stability and functional government return, infrastructure will continue degrading toward subsistence-level connectivity.`,
    issues: [
      'Just 4,500 km paved roads from theoretical 139,000 km network',
      'Northern infrastructure inaccessible due to insurgent control',
      'Colonial-era Bamako-Dakar railway degraded to weekly service',
      'Electricity reaching only 50% of population, minimal rural access',
      'Trans-Sahara highway largely impassable with maintenance crews unable to reach projects',
      'State capacity collapse preventing infrastructure maintenance'
    ],
    lat: 17.5707,
    lng: -3.9962
  },
  'Mauritania': {
    summary: `Mauritania's infrastructure embodies extreme geography: 90% desert, population of 4.6 million scattered across territories the size of Egypt, and single railway built for one purpose—moving iron ore from Saharan mines to Atlantic port. The Mauritania Railway, operated by SNIM (National Industrial and Mining Company), runs 700 kilometers from Zouérat mines to Nouadhibou port, carrying 84-car freight trains stretching 2.5 kilometers—among the world's longest and heaviest. A few passenger cars attach to freight trains, offering the world's most stark commute: 17 hours across lunar landscapes where passengers ride exposed on iron ore wagons when official cars fill.

Nouakchott, the capital, expanded from fishing village of 15,000 in 1960 to metropolis of 1.4 million—unplanned sprawl creating infrastructure nightmares. Most streets lack pavement, turning to impassable mud during rare rains. Flooding routinely inundates neighborhoods built in topographic depressions—the city's rapid expansion ignored basic drainage requirements. Water infrastructure struggles: desalination and pumping from inland aquifers provides erratic supply, with wealthier neighborhoods receiving service while informal settlements depend on water trucks.

Road infrastructure remains rudimentary: just 3,300 kilometers paved from a network of 12,000 kilometers. The Route de l'Espoir (Hope Road) connecting Nouakchott to Néma in the east, completed in 2004, marked a national achievement—898 kilometers of asphalt across the desert enabling year-round travel previously impossible. Yet maintenance suffers: sand encroachment requires constant clearing, and many sections deteriorate without repairs.

Port infrastructure at Nouadhibou handles iron ore exports and fishing industry—Mauritania's two economic pillars. The new container port, Chinese-funded and opened in 2016, aims to attract regional transshipment, though utilization remains low. Nouakchott's port, modernized with EU funding, improves import capacity for a nation dependent on food imports for 70% of consumption.

Energy infrastructure is transforming: Nouakchott's thermal power plant runs on diesel, but massive solar potential remains largely untapped. Rural electrification reaches just 8% of countryside—one of the world's lowest rates. The Banda gas field project, starting production in 2024, promises to revolutionize energy infrastructure with domestic natural gas replacing imports.

Digital infrastructure leapfrogs traditional development: mobile penetration reaches 95%, with 4G covering all major cities and highways. Fiber optic cables land at Nouakchott, connecting Mauritania to global internet backbone. Yet only 35% of population accesses internet—smartphones are common but data unaffordable for most.

The fundamental challenge is ecological: desertification advances, pushing populations south and west into already stressed urban areas. Infrastructure planning must confront whether to serve nomadic populations across vast territories or accept urbanization and concentrate resources. Mauritania's infrastructure reflects this tension—scattered, minimal, yet somehow functional in one of Earth's most inhospitable environments.`,
    issues: [
      'Just 3,300 km paved roads with severe sand encroachment requiring constant clearing',
      'Nouakchott flooding from unplanned expansion ignoring drainage needs',
      'Rural electrification at 8%—among world\'s lowest rates',
      'Water infrastructure providing erratic supply, informal settlements using trucks',
      'Desertification pushing populations into stressed urban areas',
      'Infrastructure economics challenged by low population density across vast desert'
    ],
    lat: 21.0079,
    lng: -10.9408
  },
  'Mexico': {
    summary: `Mexico's infrastructure narrative divides sharply between aspiration and reality—a nation that built Latin America's second-largest metro system in Mexico City, yet struggles with crumbling roads in rural Oaxaca. Mexico City's Metro carries 4.5 million daily passengers across 226 kilometers, a remarkable achievement undermined by tragic maintenance failures: the Line 12 collapse in 2021 killed 26, exposing systemic corruption in construction and inadequate safety oversight. Infrastructure here tells political economy stories—grand projects inaugurated by outgoing presidents, corners cut to meet deadlines, maintenance budgets raided for new ribbons to cut.

The Tren Maya—President López Obrador's signature $20 billion mega-project—epitomizes this pattern. The 1,500-kilometer railway circling the Yucatán Peninsula promises to transform regional connectivity and boost tourism, yet construction bulldozes through ecologically sensitive jungle, threatens archaeological sites, and proceeds despite incomplete environmental reviews. Opening sections in 2023-24 demonstrate typical issues: rushed timelines, cost overruns, and questions about whether tourist demand justifies this scale of investment.

Highway infrastructure underwent massive expansion via the Autopistas program—creating 10,000 kilometers of modern toll roads. Yet toll costs price out most Mexicans: Mexico City to Guadalajara costs $50 one-way, prohibitive when minimum wage is $10 daily. This creates two-tier road infrastructure: expensive, well-maintained toll roads and crumbling federal highways where buses and trucks create dangerous conditions. The Pan-American Highway through southern states suffers chronic disrepair.

Port infrastructure modernized significantly: Manzanillo and Lázaro Cárdenas on the Pacific, plus Veracruz on the Gulf, handle growing trade with Asia. Yet last-mile logistics—road connections from ports to industrial centers—create bottlenecks. The Transisthmian Corridor project aims to compete with the Panama Canal via rail freight across Mexico's narrowest point, though implementation lags promises.

Energy infrastructure faces transformation: Mexico's grid transmitted 95% fossil fuel power, but recent mandates push renewable deployment. Yet transmission capacity hasn't expanded adequately—wind farms in Oaxaca and solar in Sonora face grid connection delays. The 2021 Texas freeze demonstrated energy infrastructure vulnerability when gas supply disruptions caused rolling blackouts affecting millions.

Digital infrastructure advances unevenly: 4G covers 92% of population, but quality varies dramatically. Rural connectivity remains poor—30% of municipalities lack adequate broadband, contributing to urban migration. The "Internet for All" program deploys fiber optic backbone to underserved regions, though implementation suffers typical Mexican infrastructure challenges: political interference, incomplete deployment, maintenance neglect.

The deeper pattern is governance: Mexico can build impressive infrastructure when political will and funding align, but struggles with maintenance, safety oversight, and equitable access. Infrastructure becomes political spectacle—presidents want monuments, not maintenance budgets. Until institutions prioritize lifecycle management over ribbon-cutting ceremonies, Mexican infrastructure will oscillate between impressive and tragic.`,
    issues: [
      'Metro Line 12 collapse exposing systemic corruption and safety failures',
      'Tren Maya construction proceeding despite environmental and archaeological concerns',
      'Toll road costs creating two-tier highway system excluding most citizens',
      'Energy grid transmission capacity lagging renewable deployment',
      'Rural connectivity at 30% of municipalities lacking adequate broadband',
      'Political culture prioritizing new projects over maintenance and safety'
    ],
    lat: 23.6345,
    lng: -102.5528
  },
  'Moldova': {
    summary: `Moldova's infrastructure reflects the challenging economics of Europe's poorest nation—a landlocked country of 2.6 million with GDP per capita one-tenth of neighboring Romania, struggling to maintain Soviet-era networks while aspiring to European standards. The Good Roads for Moldova program, launched in 2013 with World Bank support, rehabilitated 1,600 kilometers of roads, demonstrating improvement is possible despite budget constraints. Yet 70% of the national road network remains in poor condition, and winter freeze-thaw cycles destroy roads faster than Moldova can repair them.

Chișinău, the capital, operates Soviet-era trolleybus and bus networks serving 500,000 daily passengers—affordable at $0.20 per ride but featuring aging vehicles and irregular service. The fleet includes trolleybuses from the 1980s, somehow still operational through resourceful maintenance and cannibalization of parts. Plans to modernize with EU-funded vehicles proceed slowly; municipal budgets prioritize keeping current systems running over replacement.

Rail infrastructure deteriorated dramatically: Moldova's railways operate diesel trains on tracks averaging 30 km/h—journeys from Chișinău to Bălți (140 km) take four hours. Soviet-era integration routed lines through Ukraine, creating absurd situations where domestic journeys cross international borders multiple times. The Chișinău-Iași rail connection to Romania, broken for decades, was restored in 2020, symbolically important for European integration though little-used due to poor service quality.

Energy infrastructure demonstrates extreme vulnerability: Moldova imports 100% of natural gas from Russia (or Russian-controlled Gazprom in disputed Transnistria), creating energy security crisis. The Chișinău heating system depends on this gas; winters without supply could prove catastrophic. Plans to integrate into Romanian electricity grid and diversify gas sources proceed but require massive investment Moldova struggles to afford.

Digital infrastructure advances through EU support: 4G reaches 95% of population, and fiber optic deployment accelerates. Mobile penetration exceeds 100%, and internet costs remain low relative to incomes. Moldova's IT sector—particularly software development and outsourcing—grows despite infrastructure challenges, leveraging language skills and educated workforce.

Water and sanitation infrastructure remains dire: just 45% of population has piped water access, and 30% has sewerage—among Europe's lowest rates. Rural areas depend on wells and outhouses; urban infrastructure dates to Soviet era and leaks extensively. EU funds target improvement, but scale of need vastly exceeds available resources.

The fundamental challenge is emigration: Moldova lost 35% of population since independence, with young, educated workers leaving for EU jobs. Infrastructure built for 4.3 million serves 2.6 million—overcapacity would be manageable except that tax base and skilled labor also departed, leaving Moldova unable to maintain what remains. Infrastructure planning must confront painful reality: managed decline and consolidation rather than expansion, focusing resources where population concentrates while accepting that rural infrastructure cannot be sustained at historical levels.`,
    issues: [
      '70% of road network in poor condition with freeze-thaw destruction outpacing repairs',
      'Energy infrastructure 100% dependent on Russian gas imports',
      'Water access at 45% and sewerage at 30%—Europe\'s lowest rates',
      'Rail infrastructure operating at 30 km/h with routes crossing Ukraine multiple times',
      'Population loss of 35% creating infrastructure overcapacity and tax base erosion',
      'Soviet-era trolleybus fleet maintained through parts cannibalization'
    ],
    lat: 47.4116,
    lng: 28.3699
  },
  'Mongolia': {
    summary: `Mongolia's infrastructure operates at the extremes of human settlement—a nation the size of Western Europe with 3.3 million people, where the capital Ulaanbaatar concentrates 1.5 million while nomadic herders disperse across steppes and Gobi desert. Infrastructure planning confronts questions few nations face: how do you build networks for populations that deliberately remain mobile? The answer: you don't. Mongolia's infrastructure concentrates in Ulaanbaatar and mining corridors, accepting that vast territories will remain essentially roadless.

Ulaanbaatar suffers catastrophic infrastructure stress. Built for 400,000, the capital houses 1.5 million, with 200,000 living in ger districts—informal settlements of traditional felt tents ringing the city without water, sewerage, or paved roads. Winter air pollution ranks among Earth's worst: residents burn coal and trash for heating, creating PM2.5 levels exceeding WHO safe limits by 80x. The Soviet-era combined heat and power plants provide district heating to formal apartment blocks but can't extend to ger districts given infrastructure constraints and affordability issues.

Road infrastructure remains minimal: just 12,700 kilometers paved from a theoretical network of 113,000 kilometers. The Millennium Road, completed in 2013, connects Ulaanbaatar to Russia and China with asphalt—2,200 kilometers of modernity slicing through steppe. Beyond these corridors, "roads" are merely tracks across grassland, impassable when wet. The severe continental climate—temperatures from -40°C to +40°C—destroys pavement, requiring constant reconstruction.

Rail infrastructure centers on the Trans-Mongolian Railway—the single line connecting Russia to China through Ulaanbaatar, built in the 1950s. This 1,110-kilometer lifeline moves 90% of freight and most long-distance passengers. Mining companies built additional lines to coal and copper deposits, but these serve extraction, not public connectivity. Ulaanbaatar's urban railway proposals remain unfunded dreams—the city lacks even basic bus rapid transit.

Energy infrastructure depends on coal: Mongolia burns domestic lignite for 90% of electricity, with transmission grids barely extending beyond mining areas and major towns. Rural populations—still 30% of national total—depend on solar panels and generators. Abundant renewable potential—sun, wind—remains mostly untapped; fossil fuel dominance persists despite Mongolia's climate vulnerability.

Digital infrastructure surprisingly advanced: 4G reaches 90% of population through cell towers along roads and settlements. Mobile penetration exceeds 130%, and even nomadic herders use smartphones for coordination and commerce. Yet internet speeds lag, and rural connectivity relies on satellite links.

The existability of infrastructure paradox: Mongolia needs infrastructure to develop economically, yet low population density makes infrastructure economically unviable. Mining revenues fund what exists, but extraction creates point infrastructure—ports, rail lines, power plants serving mines—rather than networks serving populations. Until Mongolia confronts whether to accept rural depopulation and urbanization or commit to serving dispersed populations at enormous cost, infrastructure will remain concentrated in Ulaanbaatar while the countryside relies on pre-industrial mobility patterns barely modified by 21st-century technology.`,
    issues: [
      'Ulaanbaatar ger districts housing 200,000 without water, sewerage, or roads',
      'Winter air pollution from coal heating exceeding WHO limits by 80x',
      'Just 12,700 km paved roads from theoretical 113,000 km network',
      'Energy infrastructure 90% coal-dependent with minimal rural electrification',
      'Single Trans-Mongolian Railway creating critical infrastructure dependency',
      'Low population density making network infrastructure economically unviable'
    ],
    lat: 46.8625,
    lng: 103.8467
  },
  'Montenegro': {
    summary: `Montenegro's infrastructure ambitions vastly exceed its scale—a nation of 620,000 people attempting projects that challenge countries ten times larger. The Bar-Boljare Highway epitomizes this: a Chinese-built 40-kilometer highway section through mountainous terrain to Serbia, completed in 2022, cost $1.1 billion—nearly 25% of Montenegro's GDP. The price included 105 bridges and tunnels totaling 60% of the route's length, demonstrating Balkan topography's brutal infrastructure economics. Debt to China for this single project threatens fiscal stability, and the highway remains unconnected to Serbia, which hasn't built its corresponding section.

Kotor and Budva, Adriatic tourism centers, face infrastructure collapse each summer when population swells from 40,000 year-round residents to 200,000+ tourists. The coastal road becomes a parking lot; water supply struggles; waste management fails. The scenic coastline that attracts visitors lacks space for infrastructure expansion—mountains plunge directly to sea, leaving a narrow strip for roads, buildings, and utilities. Proposals for coastal rail or highway expansion face environmental opposition and extraordinary costs.

Podgorica, the capital, operates minimal public transport: bus network only, no rail or metro. The city's car dependency creates congestion despite tiny population, and parking consumes valuable urban space. Plans for Bus Rapid Transit remain unfunded. The railway from Bar port on the coast to Belgrade, Serbia—one of Europe's most scenic, completed in 1976—suffers chronic underinvestment. Trains average 50 km/h on deteriorating track through stunning gorges and mountains, a heritage railway in all but name.

Energy infrastructure depends heavily on imports and hydropower: the Adriatic coast lacks generation, importing from the interior and neighbors. Plans for submarine cable to Italy would improve connectivity, but remain in planning stages. Solar and wind potential remains largely undeveloped despite abundant sun and Adriatic winds.

Digital infrastructure advances through EU accession preparations: 4G covers 95% of territory, fiber optic deployment reaches major population centers, and Podgorica positions itself as a regional IT outsourcing hub. Mobile and internet penetration exceeds 100%, though service quality varies in mountainous interior.

Water infrastructure faces summer stress: coastal tourism creates demand that natural supply and treatment capacity cannot meet. Inadequate wastewater treatment sees Adriatic discharges that threaten the very tourism industry driving development. The Adriatic coast's karst geology complicates infrastructure installation—porous limestone resists excavation for pipes and cables.

The fundamental issue is scale economics: Montenegro's population cannot support major infrastructure networks that require critical mass to function efficiently. The nation could have remained infrastructurally modest, but political imperatives demanded showy projects regardless of economics. The Bar highway may eventually connect to Serbia, but Montenegro will service Chinese debt for decades, limiting funds for maintenance and necessary but unglamorous infrastructure like water treatment and public transit. Small nations require different infrastructure strategies than their larger neighbors—Montenegro hasn't yet learned this lesson.`,
    issues: [
      'Bar-Boljare Highway debt at 25% of GDP threatening fiscal stability',
      'Coastal infrastructure overwhelmed by 5x population surge during tourist season',
      'Railway to Belgrade deteriorating with trains averaging 50 km/h',
      'Water and wastewater treatment capacity inadequate for summer tourism demands',
      'Energy infrastructure dependent on imports with coastal areas lacking generation',
      'Scale economics making major infrastructure networks economically unviable'
    ],
    lat: 42.7087,
    lng: 19.3744
  },
  'Morocco': {
    summary: `Morocco's infrastructure represents North Africa's most ambitious built environment transformation, anchored by the Al Boraq high-speed rail—Africa's first—connecting Casablanca to Tangier at 320 km/h, reducing journey time from 5 hours to 2. This €2 billion French-built line, opened in 2018, carries 6 million annual passengers, demonstrating that quality infrastructure attracts users even in developing nations. Extensions to Marrakech and eventually Agadir promise to create North Africa's only high-speed network, though financing and ridership projections face scrutiny.

Casablanca and Rabat showcase Morocco's urban transit evolution. Casablanca's tramway, launched in 2012, now spans 55 kilometers carrying 200,000 daily passengers—modern, efficient service that transformed mobility in Africa's fifth-largest city. Rabat's tram network similarly provides 21st-century transit. Yet Marrakech and Fez lack modern public transport, depending on buses and petit taxis while tourism swells populations seasonally, creating predictable congestion.

Road infrastructure received massive investment: 1,800 kilometers of autoroutes (toll highways) connect Atlantic cities and link Morocco to Spain via Tangier. These roads meet European standards, though tolls limit accessibility—the Casablanca-Marrakech autoroute costs 130 dirhams ($13), significant when daily minimum wage is 70 dirhams. Secondary roads in rural areas, particularly the Atlas Mountains and Saharan regions, remain poorly maintained, isolating communities.

Port infrastructure positions Morocco as Mediterranean-Atlantic gateway: Tanger-Med, opened in 2007 and expanded multiple times, handles 9 million TEUs annually—Africa's largest port and Mediterranean's second-largest, surpassing Barcelona. This Chinese-French-Moroccan megaproject transformed Morocco into logistics hub, with automotive manufacturing and textiles exporting through world-class facilities. The integration of port, rail, and highway infrastructure demonstrates planning sophistication rare in Africa.

Energy infrastructure undergoes renewable revolution: Morocco invested $15 billion in solar and wind, including the Noor Ouarzazate solar complex—the world's largest concentrated solar plant at 580 MW. Wind farms in Tarfaya and elsewhere generate 37% of electricity from renewables, targeting 52% by 2030. This represents genuine leadership, though grid integration and storage challenges persist.

Digital infrastructure advances steadily: 4G reaches 90% of population, fiber optic deployment accelerates in cities, and submarine cables at Tangier and Casablanca connect Morocco to European internet backbone. Rural connectivity lags—30% of countryside lacks quality broadband—but smartphone penetration reaches 80%.

Water infrastructure faces existential crisis: Morocco suffers severe droughts, reservoirs at 30% capacity, and agriculture consuming 85% of water while producing just 12% of GDP. Urban supply relies on desalination increasingly—expensive energy-intensive infrastructure necessitated by climate change. Wastewater treatment reaches just 60% of urban population, with inadequate treatment threatening health and tourism.

The deeper tension is inequality: Morocco builds impressive infrastructure in economic corridors—the Atlantic axis from Tangier to Agadir—while rural areas and Saharan provinces receive minimal investment. Infrastructure becomes political: impressive projects demonstrate regime capacity and attract international praise, but widespread benefits remain elusive when rural schools lack electricity and mountain villages lack paved road access. Morocco's infrastructure success is real, but unevenly distributed, raising questions about whether development reaches beyond showcase corridors.`,
    issues: [
      'Water infrastructure crisis with reservoirs at 30% capacity during severe droughts',
      'Toll road costs limiting accessibility when daily minimum wage is 70 dirhams',
      'Rural connectivity with 30% of countryside lacking quality broadband',
      'Wastewater treatment at 60% of urban population creating health risks',
      'Infrastructure inequality between Atlantic corridor and rural/Saharan regions',
      'Grid integration challenges for rapidly expanding renewable energy'
    ],
    lat: 31.7917,
    lng: -7.0926
  }
}

async function saveInfrastructureSummaries() {
  console.log('🚀 Saving infrastructure summaries for Latvia to Morocco\n')
  console.log('='.repeat(80))

  let savedCount = 0
  let errorCount = 0
  const completedCountries: string[] = []

  for (const [countryName, data] of Object.entries(infrastructureSummaries)) {
    console.log(`\n📝 Processing: ${countryName}`)

    try {
      // Get stories for top stories list
      const stories = await prisma.story.findMany({
        where: { country: countryName },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 7,
      })

      const topStories = stories.map(s => ({
        title: s.title,
        source: s.source,
        link: s.link,
        pubDate: s.pubDate.toISOString(),
      }))

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'infrastructure',
          },
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify(topStories),
          storyCount: stories.length,
          lat: data.lat,
          lng: data.lng,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: data.lat,
          lng: data.lng,
          category: 'infrastructure',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify(topStories),
          storyCount: stories.length,
        },
      })

      console.log(`✅ Saved infrastructure summary for ${countryName}`)
      console.log(`   Character count: ${data.summary.length}`)
      console.log(`   Issues: ${data.issues.length}`)
      console.log(`   Top stories: ${topStories.length}`)
      savedCount++
      completedCountries.push(countryName)

    } catch (error) {
      console.error(`❌ Error saving ${countryName}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary save complete!')
  console.log('='.repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successfully saved: ${savedCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log('\n🏗️  Category: infrastructure')
  console.log('👤 Perspective: Norman Foster / urban planning expert')
  console.log('📏 Summary lengths: 2,500-3,500 characters')
  console.log('\n✅ Completed countries:')
  completedCountries.forEach((country, i) => {
    console.log(`   ${i + 1}. ${country}`)
  })
}

saveInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
