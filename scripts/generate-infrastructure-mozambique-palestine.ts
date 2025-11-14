import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CountryData {
  name: string;
  lat: number;
  lng: number;
  summary: string;
  issues: string[];
}

const countries: CountryData[] = [
  {
    name: "Mozambique",
    lat: -18.6657,
    lng: 35.5296,
    summary: `Mozambique's infrastructure presents a textbook case of post-colonial fragmentation compounded by climate vulnerability. The nation's transportation network remains critically underdeveloped, with only 30% of the 30,000-kilometer road network paved—a shocking statistic for a country spanning 800,000 square kilometers along Africa's southeast coast.

The Maputo Development Corridor represents the country's most significant infrastructure achievement: a 600-kilometer transport link connecting South Africa's industrial heartland to Maputo's deep-water port. The port itself has undergone substantial modernization, now handling 20 million tons annually with Chinese-funded expansion projects. Yet this corridor serves primarily as an extraction route, benefiting regional trade more than domestic connectivity.

Rail infrastructure tells a story of colonial legacy and decay. The three main rail corridors—linking Maputo, Beira, and Nacala to landlocked neighbors—operate far below capacity due to poor maintenance and security issues. The Nacala Corridor railway, despite recent rehabilitation funded by Vale mining operations, serves mineral exports rather than passenger mobility.

Urban infrastructure in Maputo barely functions beyond the cement city center. Only 40% of the capital's 2 million residents have formal electricity access, with frequent load-shedding crippling economic activity. Water infrastructure is similarly fragmented: less than 30% of urban households have piped water, forcing reliance on informal vendors selling water at 10-20 times the utility rate.

The most pressing infrastructure challenge is climate resilience. Cyclones Idai and Kenneth (2019) destroyed over 3,000 kilometers of roads, 90 bridges, and damaged water systems serving 1.85 million people. The reconstruction revealed a fundamental truth: building back to previous standards simply recreates vulnerability. Mozambique needs elevated roads, climate-resistant bridges, and flood-proof utilities—infrastructure that costs 30-40% more than standard construction.

Digital infrastructure shows promise but dramatic inequalities. While 4G coverage reaches 45% of the population, it concentrates in coastal cities. Rural areas—home to 65% of Mozambicans—remain largely disconnected, limiting access to digital services, mobile banking, and agricultural information systems that could transform productivity.

The energy sector epitomizes unrealized potential. The Cahora Bassa Dam produces 2,075 MW, yet most power exports to South Africa while 78% of Mozambicans lack electricity access. Recent LNG discoveries off the Cabo Delgado coast promise transformation, but ongoing conflict has halted the $20 billion Total project indefinitely, demonstrating how security failures undermine infrastructure investment.`,
    issues: [
      "Only 30% of roads paved, limiting rural connectivity and economic integration",
      "Climate vulnerability destroying infrastructure faster than reconstruction",
      "Electricity access at 22%, with urban grid suffering frequent outages",
      "Colonial-era rail network serving extraction over domestic transport",
      "Water infrastructure reaching only 30% of urban households"
    ]
  },
  {
    name: "Myanmar",
    lat: 21.9162,
    lng: 95.9560,
    summary: `Myanmar's infrastructure development has been catastrophically reversed since the February 2021 military coup, with systematic destruction of telecommunications networks and deliberate underdevelopment serving as tools of control. The country's already fragile infrastructure base now faces accelerating decay amid political crisis.

The transportation network reflects decades of isolation and underinvestment. Of Myanmar's 157,000 kilometers of roads, only 15% are paved—extraordinarily low for a nation of 55 million. The Yangon-Mandalay Expressway, the country's first modern highway completed in 2010, remains largely the only road meeting international standards. Travel times between major cities routinely take 12-18 hours for distances manageable in 4-5 hours with proper infrastructure.

Rail infrastructure is even more dire. The 6,000-kilometer network operates on colonial-era tracks with average speeds of 30 km/h—passengers routinely experience 20-hour journeys for 600 kilometers. The Yangon Circular Railway, serving 2 million riders daily through the capital, runs on 1954 Japanese rolling stock. Recent Chinese investment in the Muse-Mandalay rail link exemplifies Myanmar's infrastructure dilemma: projects serve external connectivity rather than domestic needs.

Yangon's infrastructure epitomizes urban dysfunction. The city of 7 million has no metro system, minimal bus rapid transit, and suffers chronic congestion with commute times exceeding 90 minutes. Power outages occur daily, even in central districts. The drainage system, designed for 500,000 residents, fails catastrophically during monsoons, flooding major thoroughfares and paralysing the commercial capital for days.

The most dramatic infrastructure story is telecommunications destruction. Before the coup, mobile penetration reached 120% with competitive 4G networks. The military has since imposed internet blackouts affecting millions, dismantled cell towers in resistance areas, and throttled connectivity nationwide. This represents deliberate infrastructure vandalism, weaponizing digital isolation against the population.

Energy infrastructure reveals systemic failures. Despite massive hydropower potential—estimated at 100,000 MW—Myanmar produces only 3,600 MW, leaving 50% of the population without electricity. The military-backed Myitsone Dam project on the Irrawaddy would generate 6,000 MW but faces widespread opposition due to displacement and environmental concerns, remaining suspended since 2011.

Port infrastructure at Yangon handles 90% of the country's trade despite operating at capacity. The Thilawa Special Economic Zone, developed with Japanese investment, represents Myanmar's most modern logistics infrastructure—yet political instability has driven away investors, leaving facilities underutilized. The Kyaukphyu deep-sea port, a Chinese-funded project, faces local resistance and questions about debt sustainability.`,
    issues: [
      "Only 15% of roads paved, with average travel speeds among Asia's lowest",
      "Deliberate telecommunications destruction since 2021 coup",
      "Power generation meeting only 50% of demand, chronic urban outages",
      "Colonial-era rail network averaging 30 km/h speeds",
      "Urban drainage systems failing catastrophically during monsoons"
    ]
  },
  {
    name: "Namibia",
    lat: -22.9576,
    lng: 18.4904,
    summary: `Namibia's infrastructure reflects a paradox: exemplary road networks spanning vast desert distances, yet severe gaps in urban services and digital connectivity. For a nation of 2.5 million across 825,000 square kilometers—among the world's lowest population densities—infrastructure planning requires fundamentally different approaches than conventional urban-focused models.

The road network is southern Africa's best-maintained, with 48,000 kilometers of roads including 8,000 kilometers of paved highways. The Trans-Kalahari Corridor linking Walvis Bay to Botswana and South Africa enables efficient regional trade flows. Road quality exceeds many European standards—a legacy of systematic maintenance investment and low traffic volumes. Yet this masks deeper issues: rural settlements remain hours from paved roads, limiting market access for agricultural communities.

Walvis Bay port represents critical regional infrastructure, handling 6 million tons annually and serving as landlocked Botswana, Zambia, and Zimbabwe's Atlantic gateway. Recent expansion increased capacity to 750,000 TEU containers, with modern gantry cranes and automated systems. The port-rail corridor to the interior demonstrates how infrastructure can leverage geographic advantages—Namibia's position provides faster Atlantic access than South African ports for central African trade.

Rail infrastructure operates below potential. The 2,600-kilometer network, built to Cape gauge, connects major centers but carries minimal passenger traffic. TransNamib's freight operations focus on bulk minerals rather than diversified cargo. The proposed Walvis Bay-Lubumbashi rail link would transform regional logistics, yet remains stalled by financing challenges and multi-country coordination complexity.

Urban infrastructure reveals dramatic inequalities. Windhoek's formal areas enjoy reliable services, but informal settlements housing 40% of the capital's 400,000 residents lack piped water, sanitation, and electricity. The municipality has pioneered low-cost infrastructure models, including communal water points and pre-paid electricity, yet struggles to keep pace with urban migration. Housing infrastructure lags severely—the backlog exceeds 45,000 units nationally.

Water infrastructure faces existential challenges in one of the world's driest countries. Windhoek operates the world's first and longest-running potable water recycling plant, treating wastewater for 35% of municipal supply—a necessity in a city receiving 360mm annual rainfall. The system represents pioneering water infrastructure, yet droughts reveal fragility. The proposed desalination plant at Swakopmund would provide climate-resilient supply but at high energy costs.

Digital infrastructure shows advancing coverage with significant rural gaps. 4G networks cover 60% of the population, concentrated in urban corridors. The government's digital transformation agenda targets universal connectivity, yet implementation lags. Rural areas lack basic mobile coverage, limiting access to mobile banking, which serves as critical infrastructure for the 70% without traditional bank accounts.

Energy infrastructure depends overwhelmingly on imports—Namibia purchases 60% of electricity from South Africa and Zimbabwe despite abundant solar and wind potential. Recent solar projects near Windhoek and Walvis Bay add capacity, but the grid requires substantial upgrading to integrate renewable energy. The proposed Kudu gas project would reduce import dependence but raises climate concerns.`,
    issues: [
      "Urban informal settlements lacking basic water, sanitation, electricity for 40% of residents",
      "60% electricity import dependence despite exceptional renewable potential",
      "Digital infrastructure gaps leaving rural populations disconnected",
      "Water scarcity requiring advanced recycling, climate vulnerability increasing",
      "45,000-unit housing deficit with infrastructure unable to match urban migration"
    ]
  },
  {
    name: "Nepal",
    lat: 28.3949,
    lng: 84.1240,
    summary: `Nepal's infrastructure confronts perhaps the world's most challenging topography: a landlocked Himalayan nation with elevation changes of 8,000 meters, requiring roads that climb mountainsides, bridges spanning gorges, and infrastructure designed for seismic resilience. The result is spectacular engineering achievements alongside devastating vulnerabilities.

The highway network tells the story. The 17,000-kilometer Strategic Road Network includes the East-West Highway spanning 1,030 kilometers across the Terai plains—Nepal's infrastructural spine. Yet 60% of roads remain unpaved, and those reaching hill districts suffer monsoon washouts annually. The Araniko Highway to Tibet and Prithvi Highway to Pokhara demonstrate both achievement and fragility: essential arteries closed regularly by landslides, sometimes for weeks. Road construction costs average $500,000 per kilometer in hill districts—five times the South Asian average.

The Kathmandu Valley's infrastructure dysfunction exemplifies planning failure. A metropolitan area of 3 million operates without metro or light rail, relying entirely on roads that create 3-hour commutes for 20-kilometer distances. Air pollution reaches hazardous levels 90% of winter days, driven by infrastructure inadequacy. The half-completed ring road, started decades ago, remains fragmented. The planned Kathmandu Metro has been discussed for 15 years without progress—a failure of political will and financing.

Earthquake vulnerability defines infrastructure imperatives. The 2015 Gorkha earthquake killed 9,000 people and damaged 750,000 buildings, revealing how substandard construction created death traps. Reconstruction has been painfully slow: five years later, 30% of damaged infrastructure remained unrepaired. Building codes exist but enforcement fails, particularly in rural areas where 80% of housing uses traditional methods highly vulnerable to seismic events. Nepal's entire infrastructure requires seismic retrofitting—an overwhelming but non-negotiable challenge.

Hydropower infrastructure represents both achievement and controversy. Nepal's theoretical hydro potential exceeds 43,000 MW; current production barely reaches 2,000 MW. Projects like the 456 MW Upper Tamakoshi demonstrate capability, yet most potential remains undeveloped. The infrastructure challenges are formidable: construction in remote valleys, transmission line corridors through challenging terrain, and dam safety in seismically active zones. Indian and Chinese financing brings infrastructure forward but raises sovereignty concerns.

Air transport infrastructure serves as critical connectivity where roads fail. Lukla Airport exemplifies extreme infrastructure: a 527-meter runway on a mountain cliff, serving as the only practical access to Everest region. Nepal operates 47 airports, many in remote valleys where infrastructure alternatives are impossible. Yet safety standards lag—crashes remain frequent, maintenance struggles with resource constraints, and weather regularly closes facilities for days.

Digital infrastructure shows surprising progress. 4G coverage reaches 75% of the population despite topographic challenges. Mobile towers cling to mountainsides, extending connectivity to remote valleys. Yet rural areas still experience regular outages, and data speeds lag regional averages. The fiber optic backbone remains incomplete, particularly in hill districts where installation costs are prohibitive.

Water and sanitation infrastructure faces acute challenges. While 88% have basic water access, service quality varies enormously. Kathmandu experiences regular shortages, with tankers delivering water to neighborhoods the piped system cannot reach. In hill districts, water sources are often kilometers from settlements, with women bearing the infrastructure burden through hours of daily collection labor.`,
    issues: [
      "60% of roads unpaved, with monsoon washouts isolating communities annually",
      "Seismic vulnerability requiring infrastructure-wide retrofitting after 2015 earthquake",
      "Kathmandu Valley lacking metro system, creating hazardous air pollution",
      "Hydropower potential 95% undeveloped despite chronic electricity shortages",
      "Water infrastructure inadequate for Kathmandu, rural areas dependent on distant sources"
    ]
  },
  {
    name: "Netherlands",
    lat: 52.1326,
    lng: 5.2913,
    summary: `The Netherlands represents infrastructure excellence at the intersection of water management, cycling networks, and climate adaptation—a nation that literally created itself through hydraulic engineering. With 26% of land below sea level, infrastructure isn't merely about transportation or utilities; it's an existential requirement that has shaped Dutch culture, economy, and urban form.

The Delta Works stands as the world's most comprehensive flood protection infrastructure: 13 major barriers including the Oosterscheldekering storm surge barrier—a 9-kilometer engineering marvel that can close 62 steel gates in 75 minutes. This infrastructure protects 4 million people and represents perpetual reconstruction as climate change demands higher design standards. Recent projects like the Maeslantkering near Rotterdam employ automated systems that can seal off waterways without human intervention—infrastructure that must function when failure means catastrophe.

Cycling infrastructure is the Netherlands' most visible achievement: 37,000 kilometers of dedicated cycle paths serving 28% of all trips. This isn't recreational infrastructure but core transportation: the Hovenring suspended cycle roundabout in Eindhoven, bicycle parking for 12,500 bikes at Amsterdam Centraal, and grade-separated cycle highways like the F35 connecting cities. The economic benefits are profound—reduced healthcare costs alone exceed €1 billion annually, while cycling infrastructure requires a fraction of road infrastructure investment per kilometer traveled.

Public transit infrastructure demonstrates integration at the highest level. The national rail network operates 7,000 trains daily with punctuality exceeding 90%, using integrated timetables where connections are timed to the minute. The OV-chipkaart provides seamless payment across train, tram, metro, and bus systems nationwide. Amsterdam's metro expansion, particularly the North-South Line completed 2018 after 15 years of complex construction under a historic city, shows how infrastructure can be delivered in constrained urban environments despite cost overruns and delays.

Port infrastructure at Rotterdam handles 470 million tons annually—Europe's largest port by far. The Maasvlakte 2 expansion added 2,000 hectares of land reclaimed from the sea, with automated container terminals achieving productivity that manual operations cannot match. Yet climate adaptation looms: the port requires continuous raising and reinforcement as sea levels rise. Infrastructure that took a century to build must now be protected from existential water threats.

Digital infrastructure places the Netherlands among global leaders: 99% of households have access to internet exceeding 100 Mbps, with fiber-to-the-home coverage reaching 85% in urban areas. The Amsterdam Internet Exchange is the world's second-largest data hub by traffic. Yet the digital divide persists—rural areas and lower-income households lag in actual usage despite technical availability.

Water infrastructure extends beyond flood protection to resource management. The country's polder systems, controlled by 21 regional water authorities, manage water tables across the entire nation through thousands of pumping stations. Climate change demands adaptive infrastructure: water storage capacity for extreme rainfall events, drought-resistant water supply systems, and urban designs that integrate water management rather than fighting it. Projects like Rotterdam's water squares—public spaces that temporarily store stormwater—exemplify the infrastructure innovation required.

The energy transition reveals infrastructure inadequacy. While the Netherlands targets climate neutrality by 2050, the electrical grid cannot handle renewable energy growth. Grid congestion forces companies to wait 5-10 years for new connections—a shocking failure for such an advanced nation. Offshore wind requires massive grid infrastructure investment, while heat network infrastructure to replace natural gas heating barely exists. The infrastructure challenge isn't ambition but delivery speed.`,
    issues: [
      "Electrical grid congestion creating 5-10 year connection delays for renewable energy",
      "Sea level rise requiring perpetual upgrading of flood protection infrastructure",
      "Heat network infrastructure inadequate for natural gas phase-out",
      "Housing construction hampered by grid capacity, water management constraints",
      "Digital infrastructure rural-urban divide despite high overall coverage"
    ]
  },
  {
    name: "New Zealand",
    lat: -40.9006,
    lng: 174.8860,
    summary: `New Zealand's infrastructure faces a reckoning after decades of underinvestment masked by geographic isolation and a small population. For a developed nation of 5 million, critical infrastructure gaps have become impossible to ignore: earthquake-vulnerable buildings, congested cities lacking rapid transit, water systems losing 30% of supply to leaks, and digital infrastructure that leaves rural communities disconnected.

The road network spans 94,000 kilometers but reveals systemic maintenance deficits. State highways, managed centrally, receive adequate funding, yet local roads—comprising 88% of the network—deteriorate from deferred maintenance. Auckland, home to 1.7 million, operates largely without grade-separated motorways through the central city, creating peak congestion that costs the economy $2 billion annually. The recent Waterview Connection tunnel provides relief but highlights how single projects cannot compensate for systemic underbuild.

Rail infrastructure reflects historical decline and tentative recovery. The freight network, privatized then renationalized, now requires $1 billion in catch-up maintenance. Passenger rail barely exists outside Auckland and Wellington—major cities like Hamilton and Tauranga lack commuter services entirely. Wellington's electrified network serves 12 million trips annually but operates on infrastructure requiring urgent renewal. Auckland's City Rail Link, under construction, will transform the system but arrives decades late—the 3.4-kilometer tunnel should have been built in the 1960s.

Public transit infrastructure inadequacy forces car dependence. Auckland's rapid transit network expansion started only in 2016 with the Eastern Busway, while light rail has been promised, cancelled, and promised again for 15 years without progress. Wellington's aging trolley buses were replaced by diesel despite climate commitments—a decision that exemplifies short-term thinking over infrastructure sustainability. No New Zealand city has metro or light rail systems, despite populations justifying such infrastructure.

Earthquake resilience defines much infrastructure planning. Wellington sits on the Alpine Fault with 75% probability of a major earthquake within 50 years, yet thousands of buildings require seismic strengthening. The CentrePort facilities, critical for regional supply, were severely damaged in the 2016 Kaikōura earthquake—exposing infrastructure vulnerabilities that threaten economic continuity. Infrastructure codes now require higher seismic standards, but retrofitting existing systems remains woefully incomplete.

Water infrastructure is in crisis. The 67 local water authorities deliver wildly variable service quality—many systems lose 30-50% of water to leaks, treatment failures cause regular boil-water notices, and stormwater systems overflow in heavy rain. The 2016 Havelock North contamination affected 5,500 people, revealing infrastructure failure with deadly consequences. The recent creation of four regional water entities aims to consolidate infrastructure management, but political opposition has delayed implementation.

Digital infrastructure shows urban-rural divides characteristic of dispersed populations. While cities enjoy fiber and 5G networks, rural areas—where 15% of New Zealanders live—often lack basic mobile coverage. The Rural Broadband Initiative extended connectivity to isolated communities, but speeds lag urban standards. For a country dependent on agricultural exports, rural digital infrastructure gaps limit precision farming adoption and economic optimization.

Housing infrastructure cannot keep pace with demand. Auckland requires 40,000 new homes annually but infrastructure provision—water, wastewater, transport—constrains development. Infrastructure funding models based on developer contributions slow construction and inflate costs. The infrastructure deficit contributes directly to New Zealand's housing crisis, with prices among the world's least affordable relative to incomes.`,
    issues: [
      "Water infrastructure losing 30-50% of supply to leaks, treatment failures causing contamination",
      "No metro or light rail systems despite Auckland's 1.7 million population",
      "Earthquake vulnerability with thousands of buildings requiring seismic strengthening",
      "Rural digital infrastructure gaps limiting agricultural innovation",
      "Housing development constrained by inadequate water, transport infrastructure provision"
    ]
  },
  {
    name: "Nicaragua",
    lat: 12.8654,
    lng: -85.2072,
    summary: `Nicaragua's infrastructure development has been repeatedly derailed by political instability, natural disasters, and economic crises, creating a patchwork of modern corridors alongside vast areas with barely functional services. The country's strategic position linking Central America to both Pacific and Caribbean coasts remains underexploited due to chronic infrastructure deficits.

The road network spans 23,000 kilometers, but only 15% is paved—a shocking statistic for Central America's largest country by area. The Pan-American Highway provides the infrastructural spine, yet secondary roads remain largely dirt tracks that become impassable during rainy season. Rural communities can be isolated for weeks, limiting market access and reinforcing poverty. Road maintenance funding averages 30% of required levels, leading to accelerating deterioration even of paved sections.

The proposed Nicaragua Canal epitomizes infrastructure fantasy: a $50 billion ship canal to rival Panama, backed by Chinese investment and granted extraordinary territorial concessions. The project would traverse Lake Nicaragua, require massive lock systems, and displace thousands. Yet five years after the 2013 announcement, virtually no construction has occurred—the scheme appears primarily a political tool rather than serious infrastructure development. It demonstrates how mega-project announcements can distract from addressing basic infrastructure needs.

Port infrastructure operates well below potential. Puerto Corinto on the Pacific handles limited container traffic with outdated facilities. Bluefields on the Caribbean coast, despite serving the Atlantic autonomous regions, lacks deep-water berths and modern cargo handling. The infrastructure gap prevents Nicaragua from capitalizing on its unique position as the Central American nation with substantial coastlines on both oceans—a geographic advantage that could enable transshipment and logistics operations.

Energy infrastructure shows recent progress but persistent vulnerabilities. Renewable energy, particularly geothermal and wind, now generates 60% of electricity—a transformation from near-total oil dependence in 2007. However, grid infrastructure remains fragile, with rural electrification barely reaching 70%. Managua experiences regular outages, while countryside areas often have no grid connection at all. The distribution infrastructure requires comprehensive upgrading to deliver reliable power.

Water and sanitation infrastructure reaches only half the population. Managua, a city of 1.5 million, operates without comprehensive wastewater treatment—sewage flows untreated into Lake Managua, creating public health hazards and environmental degradation. Only 45% of rural populations have access to improved water sources, forcing reliance on wells and surface water that carry disease risks. The infrastructure investment required exceeds $2 billion, yet political instability deters the international financing necessary.

Digital infrastructure development has accelerated but from a low base. Mobile coverage reaches 85% of the population, yet 4G availability lags regional standards. Internet penetration remains under 30%—among Central America's lowest—limiting economic opportunities in an increasingly digital global economy. Rural areas particularly lack connectivity, reinforcing urban-rural divides and limiting access to digital services, education, and banking.

Public transit infrastructure in Managua exemplifies dysfunction. The capital operates without a formal public transit system—transportation relies entirely on privately operated buses with no integrated network, scheduling, or payment systems. Traffic congestion costs the economy $250 million annually in lost productivity and fuel waste. Plans for bus rapid transit have been discussed for over a decade without implementation—a failure that reflects broader governance challenges affecting infrastructure delivery.`,
    issues: [
      "Only 15% of roads paved, with rural areas isolated during rainy season",
      "Managua lacking wastewater treatment, sewage polluting lake systems",
      "Rural electrification at 70%, grid infrastructure suffering regular outages",
      "No formal public transit system in capital city of 1.5 million",
      "Internet penetration under 30%, among Central America's lowest rates"
    ]
  },
  {
    name: "Niger",
    lat: 17.6078,
    lng: 8.0817,
    summary: `Niger's infrastructure challenges are staggering even by sub-Saharan African standards: a landlocked Sahel nation of 25 million with only 3,700 kilometers of paved roads across 1.27 million square kilometers—an area larger than France, Spain, and Germany combined. The infrastructure deficit isn't merely developmental lag but an active constraint on economic survival and climate adaptation in one of the world's most vulnerable regions.

The road network is barely functional. Of 21,000 total kilometers, only 18% is paved, and much of that deteriorates from inadequate maintenance. The RN1 highway linking Niamey to Algeria represents the country's primary north-south artery, yet sections become impassable during rainy season. Eastern regions bordering Chad can be completely isolated for months—a catastrophic failure when these areas face recurring humanitarian crises requiring infrastructure for aid delivery. Road construction costs exceed $800,000 per kilometer in remote areas due to material transport logistics, making expansion economically prohibitive.

Niamey's urban infrastructure serves perhaps 30% of the capital's 1.3 million residents. The city has no public transit system—transportation relies on informal motorcycles (kabu-kabu) creating chaotic traffic and air pollution. Only central districts have paved roads; peripheral neighborhoods operate without basic infrastructure. Population growth at 3.8% annually overwhelms any infrastructure development, with informal settlements expanding faster than utilities can extend.

Energy infrastructure represents critical failure. National electricity generation capacity barely reaches 350 MW for 25 million people—among the world's lowest per-capita levels. Grid access extends to only 19% of the population, concentrated in Niamey and regional capitals. Rural areas, where 84% of Nigeriens live, have virtually no electrical infrastructure. The country possesses significant uranium deposits and potential solar resources, yet imports electricity from Nigeria. Even Niamey experiences load-shedding during peak demand—a capital city that cannot power itself.

Water infrastructure faces climate catastrophe. The Niger River, which gives the country its name and provides water for millions, has seen flow decline 30% in recent decades due to upstream extraction and climate change. Urban piped water reaches only 65% of city dwellers and 44% of rural populations. Infrastructure for wells, boreholes, and water storage exists in only a fraction of communities. Women and children walk an average of 5 kilometers daily to collect water—human infrastructure substituting for absent physical systems.

The Grand Inga Bridge over the Niger River in Niamey, completed in 2011 with Chinese funding, exemplifies both progress and limitations. The modern suspension bridge provides critical connectivity, yet approaches on both sides remain unpaved for kilometers—modern infrastructure meeting pre-industrial surroundings. This pattern repeats: point investments in isolated infrastructure without systematic network development.

Digital infrastructure shows surprising mobile coverage—70% have access to cellular service—yet most areas have only 2G networks. Internet penetration barely reaches 15%, among Africa's lowest. The lack of digital infrastructure compounds other deficits: mobile banking could reduce cash dependency, agricultural information systems could improve yields, and telemedicine could extend scarce healthcare—but all require connectivity infrastructure that doesn't exist.

Border infrastructure barely functions. As a landlocked nation, Niger depends on transport corridors through Benin (Cotonou port), Nigeria (Lagos), and Togo (Lomé) for trade. Yet border crossings suffer from inadequate processing facilities, creating delays that can extend to weeks for commercial traffic. The lack of multimodal transport infrastructure—rail connectivity, container handling facilities, cold chain systems—prevents economic diversification beyond subsistence agriculture and uranium exports.`,
    issues: [
      "Only 18% of roads paved across territory larger than Western Europe",
      "Electricity access at 19%, rural areas almost entirely without power",
      "44% of rural populations lacking improved water sources amid declining river flows",
      "No public transit in capital, urban infrastructure serving only 30% of residents",
      "Landlocked trade hampered by inadequate border processing infrastructure"
    ]
  },
  {
    name: "Nigeria",
    lat: 9.0820,
    lng: 8.6753,
    summary: `Nigeria's infrastructure deficit represents sub-Saharan Africa's greatest paradox: the continent's largest economy and most populous nation operating with infrastructure that would embarrass nations at a fraction of its GDP. With 220 million people, oil wealth exceeding $400 billion in the past decade, and rapid urbanization creating megacities, Nigeria should have world-class infrastructure. Instead, it has among the world's worst, throttling economic potential and forcing parallel informal systems.

The road network spans 195,000 kilometers, yet barely 20% meets acceptable standards. Lagos, a megacity of 21 million, operates with road infrastructure designed for 2 million, creating legendary congestion where 20-kilometer commutes consume 3-4 hours. The Third Mainland Bridge, carrying 180,000 vehicles daily, requires constant emergency repairs. Major highways like the Lagos-Ibadan Expressway or Abuja-Kano route suffer chronic disrepair despite generating toll revenue—funds disappear into opacity while infrastructure crumbles.

Rail infrastructure is being rebuilt from near-total collapse. By 2010, the entire national network was effectively defunct, with services operating at speeds below 30 km/h on tracks laid in the 1960s. The Lagos-Ibadan rail project, completed in 2021 with Chinese financing, demonstrates what's possible: modern trains cutting travel time from 6 hours to 2.5 hours. Yet the broader network remains dysfunctional—cities like Port Harcourt and Kano lack functional rail service despite populations exceeding 3 million.

Power infrastructure is a perpetual catastrophe. National grid generation peaks at 4,500 MW for 220 million people—less than one-tenth of South Africa's capacity for one-quarter the population. Lagos alone requires 6,000 MW yet receives perhaps 1,500 MW. Blackouts occur multiple times daily; backup generators consume more fuel than the national grid delivers electricity. The infrastructure exists for 12,000 MW capacity, but transmission losses, gas supply failures, and distribution incompetence prevent delivery. Nigeria has essentially no functional power infrastructure despite being an oil and gas exporter.

Lagos port infrastructure demonstrates dysfunction at global scale. Apapa and Tin Can Island ports handle 80% of Nigeria's trade yet operate with 1970s infrastructure. Ships wait 20-30 days to berth; cargo clearance takes weeks; the access roads collapse under container truck traffic. The Lekki Deep Sea Port, opening in 2023, adds modern capacity but cannot overcome systemic corruption and inefficiency. Port congestion costs the economy $50 billion annually—infrastructure failure at catastrophic scale.

Urban water infrastructure barely functions. Lagos's water production reaches only 40% of demand, forcing reliance on private boreholes that deplete aquifers and risk contamination. Sewage infrastructure serves perhaps 10% of urban residents—most areas operate with septic tanks or open defecation. The Ogun-Osun River Basin scheme, designed to supply Lagos, operates at a fraction of capacity due to maintenance failures and water loss from leaking pipes exceeding 50%.

Digital infrastructure shows private sector success overcoming state failure. Mobile networks cover 90% of the population with 4G reaching major cities—achieved despite vandalism of cell towers, irregular power forcing generator dependence, and inadequate fiber backbone. Internet penetration reaches 55%, enabling a thriving tech ecosystem in Lagos. Yet the infrastructure remains fragile, expensive, and dependent on workarounds rather than systematic buildout.

The Lagos-Calabar coastal railway and road projects exemplify mega-infrastructure ambitions repeatedly announced and abandoned. Proposed coastal infrastructure would transform connectivity along the 800-kilometer coastline serving 60 million people. Yet decades of announcements yield no progress—corruption, financing failures, and political instability preventing implementation. Nigeria's infrastructure deficit isn't technical inability but governance catastrophe.`,
    issues: [
      "Power grid delivering 4,500 MW for 220 million people, daily blackouts universal",
      "Lagos port congestion costing economy $50 billion annually from infrastructure failure",
      "Road infrastructure serving less than 20% adequately despite massive traffic volumes",
      "Urban water infrastructure producing only 40% of demand, sewage systems near-absent",
      "Rail network largely defunct despite Chinese-funded modernization of single corridors"
    ]
  },
  {
    name: "North Korea",
    lat: 40.3399,
    lng: 127.5101,
    summary: `North Korea's infrastructure represents frozen development: a system built with Soviet assistance in the 1960s-70s that has barely advanced since, operating in a state of managed decay that occasionally collapses entirely. International sanctions, economic isolation, and resource prioritization for military over civilian infrastructure create a nation where even basic services function erratically. Understanding the infrastructure requires recognizing it serves regime control as much as citizen welfare.

The road network spans 25,000 kilometers but exists primarily for military mobility rather than economic connectivity. Paved roads concentrate around Pyongyang and military installations; rural areas operate with dirt tracks impassable during rain or snow. Private car ownership is minimal—estimated at one vehicle per 100 people—so roads serve state transport, military convoys, and elite movement. Satellite imagery reveals highways devoid of traffic that would fill equivalent roads in any other nation. The infrastructure exists but barely functions for civilian purposes.

Rail infrastructure represents the primary internal transport mode, yet operates with equipment and systems from the 1970s. The network spans 5,000 kilometers connecting major cities, but average speeds barely exceed 30 km/h due to track condition, aging locomotives, and chronic power shortages affecting electrified lines. Journey times from Pyongyang to Chongjin (700 kilometers) can exceed 24 hours. The infrastructure serves freight movement—particularly coal and military equipment—more effectively than passenger service.

Pyongyang's metro system is both showcase infrastructure and strategic asset. The two lines serve propaganda purposes, with stations featuring elaborate socialist-realist decorations described as the world's deepest metro (110 meters), though this depth suggests dual purpose as nuclear shelter. The system operates as genuine public transit for Pyongyang's 3 million residents, but service quality varies with power availability. Outside the capital, no other North Korean city has metro or light rail infrastructure.

Energy infrastructure has largely collapsed. Hydroelectric plants built in the 1950s-60s provide baseline power, but transmission infrastructure decays while demand exceeds supply by wide margins. Satellite imagery shows North Korea nearly dark at night—a visual representation of infrastructure failure. Rural electrification is minimal; even Pyongyang experiences regular blackouts. Coal plants operate below capacity due to maintenance failures and equipment age. The country has essentially no functioning grid infrastructure by modern standards.

Port infrastructure at Nampo and Wonsan handles limited international trade. Facilities operate with 1960s cargo handling equipment, limiting efficiency and capacity. International sanctions restrict shipping that can use North Korean ports, further reducing infrastructure utilization. The infrastructure exists but operates in near-isolation from global logistics networks.

Water and sanitation infrastructure shows extreme urban-rural divides. Pyongyang receives prioritized service with piped water, though quality and reliability remain uncertain. Rural areas largely lack piped water infrastructure, relying on wells and surface water sources. Satellite imagery suggests irrigation infrastructure for agriculture, though maintenance appears minimal. Sewage treatment infrastructure, if it exists beyond Pyongyang, operates at unknown levels—environmental reporting is non-existent.

Digital infrastructure barely exists. North Korea operates an isolated intranet (Kwangmyong) with perhaps 6,000 websites accessible to limited users. International internet access is essentially restricted to elite and foreign entities. Mobile networks launched in 2008 now claim 6 million subscribers, but service is heavily monitored and restricted. The fiber optic cables and cell tower infrastructure required for modern connectivity exist in fragmentary form, primarily serving state surveillance rather than citizen communication.

Border infrastructure with China at the Yalu River reveals selective connectivity: the Sino-Korean Friendship Bridge handles 70% of North Korean trade, creating a single-point dependence that gives China extraordinary leverage. Infrastructure modernization depends entirely on Chinese investment and priorities.`,
    issues: [
      "Energy infrastructure collapsed, satellite imagery showing country dark at night",
      "Rail network operating with 1970s equipment, 24-hour journeys for 700 kilometers",
      "Rural areas lacking paved roads, piped water, electricity infrastructure",
      "Digital infrastructure isolated from global internet, serving surveillance over connectivity",
      "Urban-rural infrastructure divide extreme, with Pyongyang receiving prioritized service"
    ]
  },
  {
    name: "Norway",
    lat: 60.4720,
    lng: 8.4689,
    summary: `Norway's infrastructure represents what hydrocarbon wealth can achieve when invested systematically: a nation of 5.5 million operating infrastructure that rivals countries ten times larger, from the world's longest road tunnel to comprehensive coastal shipping networks. Yet Norway's geographic challenges—mountainous terrain, dispersed population, arctic conditions—mean that maintaining this infrastructure consumes extraordinary resources that fossil fuel revenues have financed but energy transition may not sustain.

The road network spans 94,000 kilometers with extraordinary engineering: the 24.5-kilometer Lærdal Tunnel (world's longest road tunnel), the Hardanger Bridge spanning 1,380 meters, and countless tunnels boring through mountains where surface routes were impossible. The E39 coastal highway requires seven ferry crossings to traverse Norway's western coast—a $47 billion project to replace these with tunnels and bridges has been proposed, including a floating tunnel across 5-kilometer-wide fjords at 400-meter depth. This is infrastructure ambition at scales few nations contemplate.

Public transit infrastructure demonstrates commitment to accessibility despite low population density. Oslo's metro, tram, and bus networks integrate seamlessly with suburban rail, using Norway's sovereign wealth to subsidize comprehensive coverage. Bergen's light rail, opened 2010 and expanding, serves a city of only 280,000—economically questionable but socially prioritized. The infrastructure model differs from density-dependent systems: Norway builds transit infrastructure as public service regardless of financial returns.

Rail infrastructure operates through challenging terrain with mixed results. The Bergen Line crosses the Hardangervidda plateau at 1,200 meters elevation—spectacular but slow, requiring 7 hours for 500 kilometers. The network serves passengers well but freight poorly, with trucks dominating goods transport due to inadequate rail infrastructure. The recent closure of the Nordland Line's northern section revealed maintenance challenges even Norway's wealth struggles to overcome in arctic conditions.

Ferry infrastructure functions as critical transport links. The coastal Hurtigruten serves as maritime highway for communities where road infrastructure is impossible or prohibitively expensive. Over 200 ferry routes provide essential connectivity, many subsidized heavily. The shift to electric ferries demonstrates infrastructure innovation: the MF Ampere pioneered battery-electric ferry operations in 2015, and now dozens of routes employ electric vessels—infrastructure decarbonization in action.

Energy infrastructure exemplifies the Norwegian paradox: 98% renewable electricity from hydropower, yet the economy depends on exporting oil and gas through extensive offshore infrastructure. The electrical grid handles renewable abundance through reservoir storage, essentially using hydro as a massive battery. Yet interconnectors to Denmark, Sweden, and now Germany create controversies as exports raise domestic prices. The infrastructure built for self-sufficiency now serves regional energy markets with complex political consequences.

Digital infrastructure provides near-universal coverage: 99% of households have high-speed internet access, 5G networks blanket urban areas, and even remote valleys have fiber connectivity. The government's broadband-as-universal-service mandate drives infrastructure buildout regardless of cost. Yet this masks challenges: rural areas still depend on copper lines, mobile coverage gaps exist in mountain regions, and the Arctic archipelago of Svalbard requires submarine cables for connectivity.

Urban infrastructure in Oslo reveals tensions between car-dependence legacy and climate ambition. The city has removed parking, prioritized cycling, and expanded transit, yet the E18 highway through the city center remains a congested barrier. The Fornebubanen metro extension and new tram lines demonstrate ongoing infrastructure investment, but Oslo's dispersed urban form requires more infrastructure per capita than compact cities.

Climate change creates new infrastructure imperatives: increased rainfall requires upgraded stormwater infrastructure, glacier retreat demands new water storage, permafrost thaw threatens northern infrastructure, and sea level rise endangers coastal communities. Infrastructure designed for historical climate must adapt to changing conditions—a perpetual challenge even for wealthy Norway.`,
    issues: [
      "Road tunnel and bridge maintenance costs escalating with infrastructure aging",
      "Ferry infrastructure requiring electrification transition with charging network buildout",
      "Rail freight infrastructure inadequate, forcing truck dependence and emissions",
      "Climate change demanding stormwater, permafrost infrastructure adaptations",
      "Power grid interconnectors creating domestic price increases, political tensions"
    ]
  },
  {
    name: "Oman",
    lat: 21.4735,
    lng: 55.9754,
    summary: `Oman's infrastructure development exemplifies petro-state transformation: a nation that barely had paved roads in 1970 now operates modern highways, ports, and utilities across challenging desert and mountain terrain. Sultan Qaboos's development vision invested oil revenues in comprehensive infrastructure, yet the post-oil transition now raises questions about maintaining systems designed for higher revenue levels while diversifying the economy beyond hydrocarbons.

The road network spans 60,000 kilometers with 30,000 kilometers paved—a dramatic achievement for a nation of 5 million across 310,000 square kilometers. The network quality rivals European standards: the Muscat Expressway, Batinah Coastal Road, and mountain highways through Jebel Akhdar demonstrate sophisticated engineering adapted to extreme terrain and climate. Yet maintenance costs are substantial, particularly where roads cross sabkha (salt flats) or mountain passes requiring constant repair from thermal expansion and flash floods.

Port infrastructure positions Oman as a regional logistics hub. Salalah Port, operated by APM Terminals, handles 5 million TEU containers annually—a transshipment hub serving the Indian Ocean rim. The Port of Duqm, a massive new development, aims to diversify from oil dependence through manufacturing and logistics zones. The strategic location outside the Strait of Hormuz provides geopolitical advantage, though whether traffic volumes justify infrastructure investment remains uncertain.

Water infrastructure represents existential challenge in one of the world's driest countries. Desalination plants produce 87% of municipal water supply, with infrastructure at Barka, Sohar, and Salalah providing 400 million cubic meters annually. Yet the energy intensity creates sustainability concerns as oil subsidies decline. Ancient aflaj irrigation systems, some 3,000 years old, continue serving rural areas—traditional infrastructure that modern systems struggle to replace efficiently. Groundwater depletion accelerates as aquifer extraction exceeds recharge, requiring infrastructure for alternative sources.

Energy infrastructure depends on natural gas for 95% of electricity generation. The grid reaches 99% of the population—nearly universal coverage achieved in four decades. Recent solar projects like the 500 MW Ibri plant demonstrate diversification, yet the grid requires substantial upgrading to integrate renewable energy at scale. The Petroleum Development Oman infrastructure network includes 32,000 kilometers of pipelines and extensive processing facilities—infrastructure built for hydrocarbon extraction that employs only 2% of Omanis, creating development distortions.

Muscat's urban infrastructure serves a dispersed metropolitan area of 1.6 million stretched across 50 kilometers of coast. The city has no metro or light rail despite traffic congestion—plans for Muscat Metro remain unimplemented after years of discussion. The infrastructure model relies on private car usage, creating sprawl that requires more roads, utilities, and services per capita than compact cities. Bus rapid transit proposals could provide affordable alternatives but have not been prioritized.

Digital infrastructure shows advancing coverage with 95% mobile penetration and 4G networks covering major population centers. The national fiber optic backbone provides high-speed connectivity to urban areas, yet rural mountain communities remain underserved. The government's smart city initiatives and e-government services require digital infrastructure that extends beyond current capabilities, particularly in data center capacity and cybersecurity systems.

Airport infrastructure demonstrates ambitious development. Muscat International Airport, opened 2018, handles 20 million passengers annually with capacity for expansion. Salalah and Duqm airports position Oman for tourism growth. Yet tourist arrivals remain modest—the infrastructure precedes demand, a common pattern in Gulf states where building proves easier than attracting users.

The broader infrastructure challenge is fiscal: oil revenue funded rapid buildout, but declining prices and depleting reserves mean Oman can no longer finance infrastructure at historical rates. The transition to user fees, privatization, and fiscal discipline requires rethinking infrastructure models built on subsidy assumptions. Roads designed for free usage must introduce tolls; water priced below cost must rise to market levels; utilities dependent on subsidies must achieve profitability. Infrastructure sustainability requires not just physical maintenance but economic viability.`,
    issues: [
      "Water infrastructure dependent on energy-intensive desalination as aquifers deplete",
      "Muscat lacking metro/light rail despite 1.6 million population and traffic congestion",
      "Infrastructure maintenance costs rising as oil revenues decline",
      "Port and airport capacity exceeding demand, raising investment efficiency questions",
      "Urban sprawl requiring more infrastructure per capita than compact development"
    ]
  },
  {
    name: "Pakistan",
    lat: 30.3753,
    lng: 69.3451,
    summary: `Pakistan's infrastructure crisis compounds daily—a nation of 230 million operating with systems designed for half that population, maintained at a fraction of required investment, and overwhelmed by climate disasters that destroy more infrastructure annually than can be rebuilt. The infrastructure deficit isn't merely developmental lag but accelerating catastrophe that threatens economic viability and human survival.

The road network spans 264,000 kilometers, yet only 65% is paved and much of that operates below acceptable standards. The motorway system—M1, M2, M3—provides modern corridors between major cities, demonstrating what's possible, yet secondary roads crumble from neglect. Karachi, a megacity of 20 million, operates with road infrastructure that barely functions: 6-hour commutes for 30 kilometers are routine, accidents kill thousands annually, and monsoon rains create impassable flooding. The infrastructure serves perhaps one-third of actual traffic volumes.

Rail infrastructure operates in crisis despite recent Chinese investment. The network spans 11,800 kilometers but relies largely on colonial-era tracks and signaling. Accidents occur monthly; average speeds rarely exceed 40 km/h; delays of 6-10 hours are normalized. The Main Line-1 upgrade, part of CPEC (China-Pakistan Economic Corridor), promises transformation, yet implementation has been delayed repeatedly by financing disputes and technical challenges. The infrastructure serves 65 million passengers annually but could serve triple with adequate investment.

Energy infrastructure represents comprehensive failure. Installed generation capacity exceeds 40,000 MW, yet the transmission and distribution system delivers perhaps 25,000 MW to end users—circular debt exceeding $12 billion cripples the sector. Load-shedding affects even major cities for 8-12 hours daily; rural areas experience 18-hour blackouts. The infrastructure exists but doesn't function—a system broken by corruption, theft, and non-payment. Industry operates at a fraction of capacity due to power unavailability, costing the economy $18 billion annually.

Water infrastructure faces climate catastrophe. The Indus River system serves 200 million people through the world's largest irrigation network—14 million hectares dependent on infrastructure built by the British and barely maintained since. Canals lose 30-40% of water to seepage; storage capacity serves only 30 days of demand (compared to 1,000+ days in developed nations). The 2022 floods destroyed 13,000 kilometers of roads, 439 bridges, and irrigation infrastructure serving millions—climate change destroying infrastructure faster than reconstruction.

Urban water and sanitation infrastructure barely exists in functional form. Karachi's water supply reaches 60% of residents with 30% losses to leaks; sewage treatment serves perhaps 10% of wastewater. Lahore, population 13 million, operates with Mughal-era drainage systems that flood catastrophically. Groundwater depletion in major cities creates land subsidence, cracking infrastructure and creating future failure. The infrastructure investment required exceeds $50 billion—politically impossible to finance.

Port infrastructure at Karachi handles 95% of trade but operates with inadequate depth, outdated cargo handling, and congestion creating 20-day delays. Gwadar Port, built with Chinese investment as CPEC centerpiece, has modern infrastructure but minimal traffic—infrastructure without economic integration. The lack of multimodal transport connections prevents ports from achieving potential efficiency.

Digital infrastructure shows mobile coverage reaching 88% of the population, yet internet penetration barely achieves 36%. Chronic power outages cripple digital infrastructure; cell towers require generators, fiber networks suffer regular failures, and speeds lag regional averages. The infrastructure for digital economy exists fragmentarily but cannot deliver consistent service.

The CPEC projects—highways, power plants, ports—represent the largest infrastructure investment in Pakistan's history at $62 billion. Yet implementation reveals challenges: delayed projects, cost overruns, debt sustainability concerns, and questions about whether infrastructure built primarily to serve Chinese connectivity to the Indian Ocean benefits Pakistan proportionately. Infrastructure investment doesn't automatically deliver development without institutional capacity for operation and maintenance.`,
    issues: [
      "Power infrastructure delivering only 60% of generated capacity, 8-12 hour daily blackouts",
      "Water storage capacity serving 30 days of demand vs 1,000+ days in developed nations",
      "2022 floods destroyed 13,000 km roads, 439 bridges—climate overwhelming reconstruction",
      "Karachi port congestion creating 20-day delays, costing economy billions",
      "Urban sewage treatment serving only 10% of wastewater, Mughal-era drainage failing"
    ]
  },
  {
    name: "Palestine",
    lat: 31.9522,
    lng: 35.2332,
    summary: `Palestinian infrastructure exists under conditions unique in the modern world: an occupied territory where infrastructure development requires occupying power approval, where water networks, roads, and utilities reflect power asymmetries rather than planning logic, and where systematic restrictions prevent the coherent infrastructure necessary for economic development or state function. Understanding this infrastructure requires recognizing it as a tool of political control as much as public service.

The road network in the West Bank demonstrates fragmentation by design. Palestinians access approximately 60% of West Bank roads; the remainder are Israeli-only or restricted. This creates journey distortions: travel between Palestinian cities 20 kilometers apart can require 2-hour detours through checkpoints. The bypass road network built for settlers cuts through Palestinian areas while restricting Palestinian access—infrastructure that privileges one population over another. Gaza's road infrastructure, while not subject to the same restrictions, suffers from blockade-related damage and inability to import repair materials.

Water infrastructure reveals the occupation's most stark impacts. Palestinians access 70-80 liters per capita daily—the WHO minimum—while Israeli settlers in the West Bank use 300+ liters. This reflects infrastructure control: Israel operates the water networks through Mekorot, determining allocations. Palestinian wells require permits rarely granted; new infrastructure is systematically denied or destroyed. In Gaza, 97% of water is contaminated and unfit for drinking—a water crisis created by infrastructure destruction, seawater intrusion from over-extraction, and inability to build treatment plants due to blockade restrictions on materials.

Energy infrastructure in Gaza epitomizes infrastructure as collective punishment. The single power plant provides electricity for perhaps 4-6 hours daily, dependent on fuel imports Israel controls. The infrastructure can theoretically generate 140 MW; actual output rarely exceeds 60 MW. Hospitals, water pumps, and sewage treatment operate on generators, creating cascading infrastructure failures. The West Bank imports 95% of electricity from Israel through infrastructure Palestinians don't control, limiting economic development and creating permanent dependence.

Sewage infrastructure in Gaza represents a public health catastrophe. Treatment plants operate intermittently due to power shortages, meaning 110,000 cubic meters of partially treated sewage enters the Mediterranean daily. The infrastructure exists but cannot function without reliable electricity. In West Bank Area C (60% of the territory), Israeli military control prevents Palestinians from building sewage treatment infrastructure, forcing untreated discharge that pollutes groundwater and wadis.

Border infrastructure demonstrates control mechanisms. The Erez Crossing between Gaza and Israel processes perhaps 300 people daily through elaborate security infrastructure designed to restrict rather than facilitate movement. The Allenby/King Hussein Bridge to Jordan handles tens of thousands of Palestinian crossings monthly but with delays of 6-12 hours through infrastructure deliberately designed for security over efficiency. Palestinians cannot build an airport or seaport—infrastructure sovereignty is denied entirely.

Gaza's infrastructure faces unique destruction cycles. Repeated conflicts destroy infrastructure systematically: the 2014 war damaged 19,000 housing units, destroyed sewage treatment capacity, and damaged the power plant. Reconstruction faces blockade restrictions on materials classified as dual-use (cement, steel, electrical equipment)—infrastructure rebuilding becomes functionally impossible. The result is infrastructure that degrades continuously while reconstruction is prevented.

Digital infrastructure shows surprising mobile and internet coverage in West Bank cities, yet Palestine lacks control over telecommunications spectrum, cell tower placement requires Israeli approval, and fiber optic backbone depends on Israeli infrastructure. In Gaza, internet speeds are among the world's slowest, with regular service disruptions when Israel restricts or cuts connectivity during conflicts. Infrastructure nominally exists but under external control.

The broader infrastructure reality is systematic prevention of development. Palestinian infrastructure in Area C (where 60% of West Bank land is located) requires Israeli military approval—over 96% of requests are rejected. This prevents coherent planning: water pipes cannot cross certain areas, roads cannot connect logically, electrical infrastructure cannot integrate. The result is infrastructure islands rather than systems, incapable of supporting normal economic development or state function. Infrastructure development isn't merely challenging but actively prevented as political policy.`,
    issues: [
      "Water infrastructure providing 70-80 liters per capita vs 300+ for settlers, WHO minimum",
      "Gaza electricity available 4-6 hours daily, crippling hospitals, water treatment",
      "110,000 cubic meters daily untreated sewage entering Mediterranean from Gaza",
      "West Bank Area C (60% of territory) Palestinian infrastructure systematically denied permits",
      "Border infrastructure designed for restriction over facilitation, no airport or seaport permitted"
    ]
  }
];

async function main() {
  console.log('Starting infrastructure summary generation for 14 countries...\n');

  for (const country of countries) {
    try {
      // Check if summary already exists
      const existing = await prisma.locationSummary.findFirst({
        where: {
          name: country.name,
          type: 'country',
          category: 'infrastructure'
        }
      });

      if (existing) {
        console.log(`✓ ${country.name}: Already exists, skipping`);
        continue;
      }

      // Create the summary
      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'infrastructure',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0
        }
      });

      console.log(`✓ ${country.name}: Created (${country.summary.length} chars, ${country.issues.length} issues)`);
    } catch (error: any) {
      console.error(`✗ ${country.name}: Error - ${error.message}`);
    }
  }

  console.log('\n=== Summary Generation Complete ===');

  // Verify results
  const totalCreated = await prisma.locationSummary.count({
    where: {
      category: 'infrastructure',
      name: {
        in: countries.map(c => c.name)
      }
    }
  });

  console.log(`\nTotal infrastructure summaries in database for these countries: ${totalCreated}/14`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
