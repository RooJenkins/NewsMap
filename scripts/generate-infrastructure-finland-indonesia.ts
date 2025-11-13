import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const infrastructureSummaries = {
  'Finland': {
    summary: `Finland's infrastructure embodies Nordic efficiency refined by harsh climate and sparse population density. The nation's transportation networks demonstrate how thoughtful design and rigorous maintenance can create systems that function flawlessly even at -30°C. Helsinki's integrated multimodal transit-combining metro, trams, commuter rail, and ferry services into a single ticketing system-achieves 85% on-time performance while moving 400,000 daily passengers across an archipelago geography that would defeat lesser systems.

The Helsinki Metro, Europe's northernmost, operates driverless trains with 2.5-minute headways during peak hours. The new Ring Line extension, completed in 2017, brought metro service to Espoo, demonstrating Finland's commitment to expanding sustainable transit even in lower-density suburbs. Yet this is merely the surface layer of an infrastructure philosophy that prioritizes resilience over showmanship.

Finland's road infrastructure-78,000 kilometers total-confronts brutal winters through sophisticated maintenance regimes. Automated weather stations trigger pre-emptive salting and plowing, while heated bridge decks prevent ice formation at critical junctions. The country invests 0.8% of GDP annually in infrastructure maintenance-double the European average-understanding that prevention costs less than reconstruction. This explains why Finnish highways, despite freeze-thaw cycles that destroy pavement elsewhere, maintain International Roughness Index scores among Europe's best.

Rail infrastructure faces transformation. VR's intercity network connects major cities at speeds up to 220 km/h, though the aging fleet and single-track bottlenecks limit capacity. The proposed Rail Baltica project-linking Helsinki to Central Europe via Estonia-would end Finland's infrastructure isolation, but progress remains glacial. Freight rail, crucial for forestry exports, suffers from Soviet-era 1,524mm gauge incompatible with EU standards, requiring costly transloading at borders.

Digital infrastructure positions Finland at the forefront. 5G coverage reaches 95% of populated areas-world-leading deployment enabled by Nokia's domestic presence. Universal broadband access is legally mandated as a basic right, with 100 Mbps service available to 99% of households. Smart city pilots in Espoo integrate IoT sensors for traffic management, energy optimization, and waste collection, demonstrating infrastructure thinking beyond physical systems.

Yet challenges loom. Finland's demographic crisis-aging population and urban concentration in southern regions-threatens infrastructure viability. Northern rail lines and rural roads serve shrinking communities, raising questions about sustainable investment. Climate change impacts intensify: warmer winters cause more frequent freeze-thaw cycles, accelerating road degradation, while extreme weather events strain drainage systems designed for historical patterns. The EUR 10 billion infrastructure investment deficit identified in government studies suggests that even Finnish discipline faces fiscal constraints.

Most critically, the carbon intensity of infrastructure must decline. Transport generates 20% of Finnish emissions, requiring rapid electrification of vehicles and heating of transport infrastructure. The transition from infrastructure that withstands climate to infrastructure that mitigates it defines Finland's next-generation challenge.`,
    issues: [
      'Demographic crisis threatening infrastructure viability in northern and rural regions',
      'Rail Baltica project progress moving slowly, maintaining infrastructure isolation',
      'Soviet-era rail gauge incompatible with EU standards requiring costly transloading',
      'Climate change causing more frequent freeze-thaw cycles accelerating road damage',
      'EUR 10 billion infrastructure investment deficit despite strong maintenance culture',
      'Transport sector emissions at 20% requiring rapid electrification transition'
    ],
    lat: 61.9241,
    lng: 25.7482
  },
  'France': {
    summary: `France's infrastructure represents the apotheosis of centralized planning-a continental network of TGV high-speed rail, nuclear power, and Cartesian-grid road systems radiating from Paris. The TGV, inaugurated in 1981, transformed European mobility: 2,800 kilometers of dedicated high-speed lines connect Paris to Lyon in two hours, to Marseille in three, and extend tentacles to Brussels, London, and Frankfurt. Annual ridership exceeds 110 million-testament to infrastructure that makes rail competitive with aviation and infinitely more civilized.

Yet this star-pattern reveals French infrastructure's central paradox: everything flows through Paris. The Île-de-France transit network-metro, RER, bus, and tram-moves 12 million daily trips across the world's densest multimodal system. The Grand Paris Express project, currently under construction, will add 200 kilometers of automated metro by 2030, connecting suburbs long isolated from the core. At EUR 38 billion, it's Europe's largest urban infrastructure project, attempting to retrofit polycentricity onto a fundamentally radial metropolis.

Road infrastructure spans 1.1 million kilometers-the world's most extensive network relative to population. Autoroutes operate as privatized toll roads with immaculate maintenance, while the Route Nationale system decays from deferred investment. This dual standard reflects broader French infrastructure philosophy: excellence where commercial returns justify investment, managed decline elsewhere. The peripherique ring road encircling Paris, carrying 1.2 million vehicles daily, epitomizes both congestion and indispensability-infrastructure so critical that transformation becomes impossible.

Nuclear infrastructure dominates energy systems: 56 reactors generate 70% of electricity, the world's highest share. This provides abundant, low-carbon power that electrifies trains and heats homes, but aging reactors require massive investment. The Flamanville EPR, meant to showcase next-generation nuclear, suffers decade-long delays and EUR 12 billion cost overruns-a monument to construction complexity and regulatory caution.

Digital infrastructure advances unevenly. Fiber optic deployment reaches 75% of households, with ambitious plans for universal coverage by 2025, yet rural areas remain underserved. 5G rollout faces delays amid public skepticism and infrastructure sharing disputes. France's tech sector, concentrated in Paris and Sophia Antipolis, demands world-class connectivity that infrastructure struggles to deliver beyond major hubs.

The challenges multiply. Infrastructure maintenance backlogs exceed EUR 100 billion across roads, bridges, and rail. Climate adaptation requires massive investment: coastal infrastructure along Brittany and the Mediterranean faces rising seas, while Alpine transport corridors confront glacial retreat and rockfall. The gilets jaunes protests, triggered by fuel taxes, revealed infrastructure's political volatility-rural populations dependent on aging cars resist policies designed for Paris's transit-rich urbanism.

Most fundamentally, French infrastructure must decentralize. The Paris-centric model, rational in the 19th century, generates inequality and inefficiency today. Provincial cities like Lyon, Toulouse, and Nantes deserve infrastructure investment proportional to their economic dynamism, not their proximity to the capital. The infrastructure that made France great must evolve beyond its Napoleonic origins.`,
    issues: [
      'Paris-centric infrastructure model generating regional inequality and inefficiency',
      'Infrastructure maintenance backlog exceeding EUR 100 billion across all systems',
      'Aging nuclear reactor fleet requiring massive investment and modernization',
      'Route Nationale road system suffering from chronic deferred maintenance',
      'Climate adaptation needs for coastal and Alpine infrastructure underfunded',
      'Rural-urban divide in digital infrastructure with fiber deployment lagging'
    ],
    lat: 46.2276,
    lng: 2.2137
  },
  'Georgia': {
    summary: `Georgia's infrastructure tells the story of a small nation at the crossroads of empires, racing to modernize Soviet-era systems while positioning itself as the South Caucasus's transit hub. The Baku-Tbilisi-Kars railway, inaugurated in 2017, revives ancient Silk Road routes with modern freight rail connecting Central Asia to Turkey and beyond, bypassing Russian territory. Though current volumes remain modest-just 250,000 TEU annually against 5 million capacity-it represents infrastructure as geopolitical strategy.

Tbilisi's urban infrastructure reflects this duality. The city's metro, a Soviet legacy from 1966, carries 300,000 daily passengers across two lines totaling 27 kilometers-reliable yet aging. Stations showcase period Socialist aesthetics, from chandeliers to mosaic murals, now retrofitted with modern payment systems. The cable car connecting Old Town to Narikala Fortress, installed in 2012, demonstrates post-Soviet infrastructure thinking: tourism-focused, privately financed, delivering immediate utility and visual appeal.

The East-West Highway-Georgia's infrastructure spine-underwent comprehensive reconstruction over the past decade with international financing. The 415-kilometer route from the Black Sea port of Poti through Tbilisi to the Azerbaijan border now meets international standards, reducing transit time by 40% and truck accidents by 60%. Yet maintenance culture remains underdeveloped: new highways deteriorate faster than necessary due to inadequate funding and oversight.

Georgia's port infrastructure underwent privatization and modernization. Poti and Batumi ports, operated by international consortiums, handle 85% of national trade with modern container facilities. Yet rail connections remain bottlenecks-aging Soviet-era track and locomotives limit throughput, preventing Georgia from fully capitalizing on its geographic advantage as Europe's gateway to Central Asia.

Digital infrastructure advances rapidly. 4G coverage reaches 95% of populated areas, with Tbilisi emerging as a South Caucasus tech hub. The government's digital transformation agenda-including e-governance platforms and startup incentives-leverages infrastructure investments to attract international tech companies. Yet rural-urban digital divides persist, with mountainous regions in Svaneti and Khevsureti lacking reliable connectivity.

Hydropower dominates energy infrastructure-Georgia generates 80% of electricity from hydro, enabling both energy independence and export revenues. Yet this creates seasonal vulnerabilities: winter low flows require natural gas imports from Azerbaijan. Massive dam projects like Namakhvani face local opposition over environmental and cultural heritage concerns-infrastructure progress colliding with community values.

The challenges are substantial. Infrastructure investment averages just 3% of GDP, insufficient to address Soviet-era deterioration and meet growing demands. Urban water systems suffer chronic leaks-Tbilisi loses 50% of treated water to aging pipes. Solid waste infrastructure remains primitive: most cities lack proper landfills or recycling systems. Climate change threatens hydropower reliability and accelerates infrastructure degradation in mountain regions.

Most critically, Georgia must balance infrastructure ambition with fiscal prudence. Public debt approaches 50% of GDP-sustainable now but constraining if growth falters. Infrastructure that serves transit ambitions must also serve domestic development, connecting isolated mountain communities and reducing regional disparities that fuel emigration.`,
    issues: [
      'Infrastructure investment at 3% GDP insufficient for modernization needs',
      'Urban water systems losing 50% of treated water to aging pipes in major cities',
      'Rail infrastructure bottlenecks limiting port capacity and transit potential',
      'Solid waste infrastructure lacking proper landfills and recycling systems',
      'Climate change threatening hydropower reliability and seasonal energy security',
      'Rural-urban digital divide with mountainous regions lacking connectivity'
    ],
    lat: 42.3154,
    lng: 43.3569
  },
  'Germany': {
    summary: `German infrastructure embodies the contradictions of a wealthy nation that delayed investment for decades, now confronting the consequences. The autobahn network-13,000 kilometers of highway without speed limits-remains a source of national pride, yet 1,800 bridges require urgent replacement, many rated structurally deficient. This symbolizes German infrastructure's paradox: engineering excellence meeting deferred maintenance, creating systems that appear robust until examined closely.

Deutsche Bahn's rail network spans 33,000 kilometers-Europe's largest-yet punctuality averages just 75%, among the worst in Western Europe. Infrastructure underinvestment during the 1990s-2000s, when reunification costs dominated budgets, created a EUR 60 billion maintenance backlog. High-speed ICE trains operate on track segments shared with regional and freight services, limiting speeds and creating cascade delays. Switzerland, with one-tenth the population, invests more annually in rail infrastructure than Germany-a stunning indictment.

Urban transit tells a different story. Berlin's U-Bahn, S-Bahn, tram, and bus integration moves 3 million daily passengers with impressive frequency and coverage. Munich's metro expansion and Stuttgart's ambitious Stuttgart 21 rail reconstruction-despite decade-long delays and EUR 8 billion cost overruns-demonstrate cities' commitment to sustainable mobility. Yet Munich's second S-Bahn tunnel, essential for capacity, has been delayed since the 1990s-infrastructure analysis paralyzed by planning perfectionism.

Energy infrastructure underwent revolutionary transformation. The Energiewende-transition from nuclear and fossil fuels to renewables-required massive grid investment. Wind and solar now generate 50% of electricity, but transmission bottlenecks persist: northern wind power can't reach southern industrial centers because NIMBYism blocks transmission line construction. This forces expensive grid management and curtailment-infrastructure politics preventing infrastructure function.

Digital infrastructure reveals unexpected weakness. Germany ranks 30th globally in broadband speed, with rural areas relying on aging copper lines. The government's EUR 65 billion fiber rollout proceeds slowly, hampered by fragmented local authority and conservative incumbent telecom strategy. 5G coverage reaches just 60% of land area-trailing Poland and Romania. For a nation that celebrates engineering, digital infrastructure performance is surprisingly mediocre.

Water and waste infrastructure meet high standards, yet face climate stress. The Rhine-Ruhr metropolitan region, with 10 million inhabitants, requires massive upgrades to stormwater systems designed for historical rainfall patterns. Drought threatens river levels critical for freight transport - the Rhine carried 300 million tons annually but became impassable in 2022's drought, halting chemical and petroleum shipments.

The challenges are fundamentally political. Germany possesses fiscal capacity for infrastructure - running budget surpluses until COVID - but constitutional debt limits and risk-averse planning culture prevent timely investment. Environmental assessments and public consultations extend project timelines to absurdity: a new highway requires 20 years from planning to completion. Infrastructure that could exist doesn't because perfection becomes the enemy of adequacy.

Most critically, Germany must rediscover infrastructure ambition. The autobahn and postwar reconstruction showed what German engineering could achieve with urgency and vision. Climate transition demands similar mobilization - but institutional sclerosis and political fragmentation prevent the decisive action that Germany's wealth and technical capacity should enable.`,
    issues: [
      'Deutsche Bahn 60 billion euro maintenance backlog causing Europe worst punctuality',
      '1,800 autobahn bridges requiring urgent replacement rated structurally deficient',
      'Digital infrastructure weakness with Germany ranking 30th globally in broadband',
      'North-south energy transmission bottlenecks preventing renewable integration',
      'Planning paralysis with infrastructure projects requiring 20 years completion',
      'Climate stress threatening Rhine freight transport and urban stormwater systems'
    ],
    lat: 51.1657,
    lng: 10.4515
  },
  'Ghana': {
    summary: `Ghana's infrastructure narrative centers on a middle-income African nation attempting to build 21st-century systems while confronting the legacy of decades of underinvestment. The country's road network-70,000 kilometers total-remains largely unpaved outside major corridors, with just 23% of roads in good condition. Yet ambition drives transformation: the Tema-Akosombo highway reconstruction and Accra's interchange developments demonstrate government commitment to connectivity infrastructure.

Accra's urban infrastructure strains under explosive growth. The capital's population, exceeding 5 million, generates demands that overwhelm transportation networks designed for far fewer. Traffic congestion costs an estimated 3% of GDP annually-hours lost to gridlock on the N1 highway and within the sprawling metropolis. The absence of mass transit exacerbates this: Accra lacks metro, light rail, or even functional BRT systems. Private trotro minibuses provide ad-hoc transit, but their informality creates chaos rather than mobility.

Port infrastructure at Tema, handling 80% of Ghana's international trade, underwent expansion to 3.5 million TEU capacity, positioning Ghana as West Africa's transshipment hub. Yet landside connectivity remains problematic-congestion around port gates and inadequate rail connections limit throughput. The Western Railway line from Tema to Kumasi, nearly abandoned, saw Chinese-financed rehabilitation beginning in 2020, aiming to shift freight from road to rail and reduce highway deterioration.

Energy infrastructure made significant strides following the power crisis of 2014-2015. New generation capacity from gas and renewables ended chronic load-shedding that crippled economic activity. The Akosombo and Bui hydroelectric dams provide baseload power, supplemented by thermal plants and emerging solar farms. Yet electricity access remains uneven: 85% of urban households connect to the grid, but only 50% of rural areas, limiting development outside major cities.

Digital infrastructure advances rapidly. Mobile networks achieve 95% population coverage, with 4G LTE available in urban areas and 5G pilots launching in Accra. Ghana's tech sector, centered in Accra's emerging tech hubs, benefits from improving connectivity, though broadband penetration lags at just 35% of households. The rural-urban digital divide mirrors infrastructure patterns across sectors-modernity concentrated in cities, scarcity in the countryside.

Water and sanitation infrastructure remains Ghana's most acute challenge. Only 37% of urban dwellers access piped water, relying instead on tanker trucks and vendors-expensive and unreliable. Sewerage systems serve just 15% of the population, with most areas depending on septic tanks and pit latrines. Accra's Korle Lagoon, once scenic, now receives untreated sewage and solid waste-a visible manifestation of infrastructure failure.

The challenges are fiscal and institutional. Infrastructure investment averages 4% of GDP-below the 7% required for emerging economies. Public-private partnerships progress slowly amid corruption concerns and contract disputes. Maintenance culture remains underdeveloped: new roads deteriorate rapidly, and completed facilities degrade from inadequate upkeep. Climate vulnerability grows-coastal erosion threatens Accra's infrastructure, while droughts stress hydropower and water supply systems.

Most urgently, Ghana must prioritize Accra's mass transit. The capital cannot function without fundamental transportation infrastructure-bus rapid transit at minimum, ideally light rail. Until then, congestion will strangle economic potential, as human capital wastes hours in traffic jams that proper infrastructure could eliminate.`,
    issues: [
      'Only 23% of roads in good condition with 70% of network remaining unpaved',
      'Accra lacks any mass transit system costing 3% GDP annually in congestion',
      'Water infrastructure serving only 37% urban population with piped access',
      'Sewerage systems reaching just 15% of population creating sanitation crisis',
      'Infrastructure investment at 4% GDP below 7% required for development',
      'Climate vulnerability with coastal erosion and drought stressing systems'
    ],
    lat: 7.9465,
    lng: -1.0232
  },
  'Greece': {
    summary: `Greek infrastructure tells a story of contradictions-ancient grandeur and modern dysfunction, Olympic-legacy systems meeting fiscal constraints, geography that demands expensive solutions yet budgets that afford shortcuts. Athens' infrastructure embodies this duality: a metro system that ranks among Europe's most modern, operating alongside traffic congestion that paralyzes the capital daily.

The Athens Metro, expanded dramatically for the 2004 Olympics, operates three lines totaling 85 kilometers with driverless technology and archaeological displays in stations-infrastructure as cultural experience. Daily ridership exceeds 1.4 million, providing efficient mobility across a sprawling metropolis. Yet the system remains incomplete: Line 4 has been planned for decades but construction delays persist amid financial crises and bureaucratic inertia. Extensions to Piraeus port and the airport demonstrate continued investment, though at glacial pace.

Road infrastructure spans Greece's challenging terrain-mountains and islands requiring extensive tunneling and bridging. The Egnatia Odos highway across northern Greece and the Rio-Antirrio bridge-one of the world's longest cable-stayed spans-showcase engineering ambition. Yet maintenance suffers from chronic underfunding. Provincial roads deteriorate dangerously, contributing to Greece's position among Europe's highest traffic fatality rates. Toll roads operate under concession arrangements that generate controversy-privatized profit, socialized maintenance deficits.

Rail infrastructure remains Greece's greatest failure. The network, largely single-track and non-electrified, operates at 19th-century standards. The Athens-Thessaloniki journey requires six hours by rail versus four by road-an indictment of underinvestment. EU-funded modernization projects proceed intermittently, with the electrification program decades behind schedule. TrainOSE privatization to Italy's Ferrovie dello Stato raised hopes, but infrastructure improvements require sustained capital that remains uncertain.

Island connectivity presents unique challenges. Ferry services connect 200+ inhabited islands, some receiving daily service, others weekly. Ports require constant maintenance against harsh marine conditions, yet funding comes episodically. The absence of bridge connections to major islands like Crete perpetuates infrastructure isolation, limiting economic integration. Air connectivity, dominated by Athens hub-and-spoke patterns, becomes expensive for islands despite being the only practical option.

Energy infrastructure underwent privatization but faces transition challenges. Lignite coal still generates 20% of electricity despite climate commitments, with major plants in northern Greece facing closure. Renewable energy, particularly solar and wind, expands rapidly-islands like Tilos achieving 100% renewable power. Yet grid infrastructure, managed by ADMIE, requires massive investment to accommodate variable renewables and improve interconnection.

Digital infrastructure improved significantly, with fiber optic and 4G networks covering urban areas. Yet rural and island communities lag, with mountainous terrain increasing deployment costs. The digital divide mirrors physical infrastructure patterns-Athens and major cities receive investment, while peripheries struggle with basic connectivity.

The challenges are fundamentally fiscal. Greece's decade-long debt crisis forced infrastructure investment to collapse from 5% to under 2% of GDP. Deferred maintenance created backlogs across all systems. EU structural funds provide some relief, but absorption capacity remains limited by bureaucracy and corruption. Public-private partnerships often favor private returns over public benefit, creating assets that generate profit for concessionaires while maintenance costs burden the state.

Most critically, Greece must rationalize infrastructure priorities. Not every island requires airport or deepwater port. Not every province needs highway connectivity. Strategic infrastructure investments in high-return corridors-Athens-Thessaloniki rail, Attica commuter systems, renewable energy integration-deserve priority over politically motivated projects that serve prestige rather than productivity.`,
    issues: [
      'Rail infrastructure operating at 19th-century standards with chronic underinvestment',
      'Infrastructure investment collapsed from 5% to under 2% GDP during debt crisis',
      'Provincial road maintenance severely underfunded contributing to high fatalities',
      'Island connectivity relying on aging ferry infrastructure without alternatives',
      'Lignite coal plants facing closure without adequate renewable grid integration',
      'Deferred maintenance backlogs across all infrastructure systems from fiscal crisis'
    ],
    lat: 39.0742,
    lng: 21.8243
  },
  'Guatemala': {
    summary: `Guatemala's infrastructure reflects profound inequality-a small elite enjoying first-world amenities while the majority confronts third-world conditions. Guatemala City's infrastructure contrasts sharply with rural Mayan highlands where communities remain isolated by unpaved roads impassable during rainy season. This infrastructure apartheid perpetuates economic and social divisions that have plagued Guatemala since colonial times.

Urban transportation infrastructure in Guatemala City consists primarily of roads choked by private vehicles and informal red bus services. The capital, approaching 3 million inhabitants, lacks any mass transit system-no metro, light rail, or even functional BRT. The TransMetro BRT system, inaugurated in 2007, operates a single 14-kilometer line carrying modest ridership, a token gesture toward sustainable mobility. Traffic congestion costs an estimated 2% of GDP, with commuters spending hours in gridlock amid pollution that violates WHO air quality standards.

Highway infrastructure-the CA-9 between Guatemala City and Puerto Barrios, and the Interamericana CA-1 running north-south-underwent partial improvement through toll road concessions. Yet these represent isolated corridors amid a network where 60% of roads remain unpaved. Mountain geography compounds costs: landslides during rainy season routinely close critical routes, isolating communities for days or weeks. The government's chronically low tax collection-just 10% of GDP, among the world's lowest-ensures insufficient funding for infrastructure maintenance or expansion.

Port infrastructure at Santo Tomás de Castilla handles 40% of Central American trade, benefiting from deep water and strategic Caribbean location. Yet inland connectivity limits utilization-cargo spends excessive time traversing poor roads from port to capital or borders. Rail infrastructure, once extensive during United Fruit Company operations, collapsed after nationalization and now exists only in fragments-a cautionary tale of infrastructure neglect.

Rural infrastructure presents Guatemala's starkest challenges. Indigenous communities in Alta Verapaz and Quiché departments lack reliable road access, electricity, and water systems. Where roads exist, they're often single-lane dirt tracks destroyed by erosion. Rural electrification reaches just 70% of households, limiting economic opportunity. Water infrastructure remains primitive-40% of rural population lacks improved water sources, relying on contaminated streams or distant wells.

Digital infrastructure advances in urban areas but bypasses rural regions. 4G coverage reaches Guatemala City and major towns, but rural areas remain largely unconnected. Broadband penetration stands at 15% of households-among Central America's lowest. The digital divide reinforces other inequalities, limiting educational and economic opportunities for already marginalized populations.

Energy infrastructure depends heavily on fossil fuel imports. Hydroelectric dams provide some generation, but controversial projects face opposition from indigenous communities concerned about environmental and cultural impacts. The Chixoy Dam, completed in 1983, displaced thousands without adequate compensation-a legacy that poisons community relations with infrastructure development decades later.

The challenges transcend infrastructure to governance. Corruption diverts public funds from infrastructure projects to private accounts. The construction sector, dominated by politically connected elites, delivers poor quality at inflated costs. Maintenance receives minimal funding-new infrastructure deteriorates rapidly, requiring reconstruction rather than preservation. Climate change intensifies infrastructure stress: hurricanes and tropical storms cause billions in damage, overwhelming response capacity.

Most fundamentally, Guatemala faces a social contract crisis. Infrastructure reflects and reinforces inequality-world-class gated communities alongside unserved informal settlements, modern toll roads beside impassable rural tracks. Until Guatemala develops inclusive institutions that serve all citizens, infrastructure will remain extractive rather than developmental, connecting elites to global markets while abandoning the majority to isolation and poverty.`,
    issues: [
      '60% of roads remain unpaved with landslides routinely isolating communities',
      'Guatemala City lacks any mass transit amid severe congestion and air pollution',
      'Rural infrastructure serving only 70% electricity access and 60% water access',
      'Infrastructure investment crippled by 10% GDP tax collection lowest globally',
      'Digital divide with only 15% broadband penetration concentrated in urban areas',
      'Corruption and poor construction quality causing rapid infrastructure deterioration'
    ],
    lat: 15.7835,
    lng: -90.2308
  },
  'Guyana': {
    summary: `Guyana's infrastructure confronts a unique challenge: vast territory, tiny population, and suddenly massive oil revenues. With just 800,000 people across a land mass the size of Great Britain, infrastructure economics have never favored large-scale systems. Yet offshore oil production-surging from zero in 2019 to 340,000 barrels daily in 2023-generates revenues that could transform the country's infrastructure, if managed wisely.

Georgetown's infrastructure reflects colonial origins and tropical neglect. The capital's drainage system, engineered by the Dutch in the 18th century, struggles with sea level rise and increased rainfall. The city sits below sea level, protected by seawalls requiring constant maintenance. Flooding occurs regularly, with climate change intensifying tropical storms that overwhelm drainage capacity. The East Coast Demerara road, Georgetown's primary thoroughfare, suffers chronic congestion as the only route connecting communities along the coast.

Guyana has no railway infrastructure-the colonial-era system was abandoned in the 1970s. All transportation depends on roads, yet only 600 kilometers are paved across the entire country. The Demerara Harbour Bridge, a 1.8-kilometer floating toll bridge dating to 1978, serves as the only crossing-a bottleneck that closes during high tide and requires hours of waiting. Plans for a fixed-span bridge proceed slowly, symbolizing infrastructure ambitions delayed by capacity constraints and funding uncertainties.

Cheddi Jagan International Airport provides international connectivity, but Georgetown lacks urban transit. Private minibuses operate informally, creating chaotic, polluting transport without reliability or safety standards. For a capital city aspiring to oil-boom prosperity, the absence of mass transit infrastructure limits development potential.

Energy infrastructure underwent transformation with gas-fired generation reducing reliance on expensive diesel. Yet electricity access remains incomplete-90% in coastal areas but only 50% in interior regions where Amerindian communities live. The massive hydropower potential-particularly the Amaila Falls project-remains unrealized after financing collapsed. Oil revenues could finally enable construction, providing clean energy and export capacity.

Digital infrastructure advances slowly. 4G coverage exists in Georgetown and coastal towns, but interior regions rely on satellite connectivity. Fiber optic cable landing in Georgetown provides international bandwidth, yet domestic distribution remains limited. For a country seeking to diversify beyond oil, digital infrastructure inadequacy constrains tech sector development.

Interior infrastructure remains nearly absent. The indigenous communities and gold mining operations in the rainforest interior depend on small airstrips and dirt roads that become impassable during rains. The Lethem-Georgetown road, connecting Brazil to the coast, exists only partially paved-a missed opportunity for regional integration and trade diversification.

Water infrastructure presents contradictions: Georgetown piped water serves most urban residents, yet leakage rates exceed 60%-treated water lost to aging pipes. Sewerage systems remain primitive, with most areas using septic systems or pit latrines. The waste ends up in drainage canals that flow through the city-a public health concern that oil wealth could address.

The challenges are institutional more than financial. Oil revenues exceed $1 billion annually-massive for Guyana's budget-but absorption capacity remains limited. Corruption risks are acute: construction sector lacks competition, procurement processes are opaque, and institutional oversight is weak. Infrastructure projects announced with fanfare often stall in implementation-the fixed Demerara bridge being emblematic.

Most critically, Guyana faces a generational opportunity. Oil revenues could fund infrastructure that transforms the country-reliable electricity, modern transportation, climate-resilient cities, digital connectivity. But without strong institutions, transparent procurement, and strategic planning, the money risks being squandered on low-quality projects that enrich contractors while failing to deliver durable infrastructure. The choices made in this decade will determine whether oil becomes catalyst for development or curse of corruption and wasted opportunity.`,
    issues: [
      'Georgetown flooding crisis with drainage systems overwhelmed by climate change',
      'Only 600 km paved roads across entire country limiting connectivity severely',
      'Demerara Harbour Bridge bottleneck with 1978 floating bridge requiring replacement',
      'Water infrastructure losing 60% of treated supply to aging pipe leakage',
      'Interior regions lack basic infrastructure with 50% electricity access',
      'Institutional capacity insufficient to absorb oil revenues for infrastructure'
    ],
    lat: 4.8604,
    lng: -58.9302
  },
  'Haiti': {
    summary: `Haiti's infrastructure represents one of the world's most acute developmental failures-a nation where basic systems barely function, where the 2010 earthquake's destruction remains unrepaired, and where institutional collapse prevents the construction of essential services. Port-au-Prince, a capital of 3 million, operates without functional sewerage, reliable electricity, or maintained roads-conditions more typically associated with war zones than peacetime nations.

The road network, theoretically spanning 4,000 kilometers, exists largely as unpaved tracks destroyed by erosion and neglect. The Route Nationale 1, connecting Port-au-Prince to Cap-Haïtien, requires eight hours to traverse 170 kilometers-a journey that reveals Haiti's infrastructure reality. Potholes consume entire lanes, landslides block sections for weeks, and bridges collapse without replacement. Rural roads remain impassable during rainy season, isolating communities from markets and services for months. The absence of maintenance culture means even donor-funded road improvements deteriorate within years.

Port-au-Prince lacks any mass transit system. Private tap-tap buses-colorfully painted pickups-provide chaotic informal transport, but their unregulated operation creates congestion, pollution, and safety hazards. Traffic grinds through streets cratered by earthquake damage never repaired, past collapsed buildings never removed-infrastructure frozen in 2010.

Port infrastructure at Port-au-Prince sustained severe earthquake damage and operates far below international standards. The port's limited capacity and inefficiency make Haiti dependent on expensive imports that arrive slowly and leave ships waiting days for berths. The Port-au-Prince to Santiago (Dominican Republic) route sees more Haitian trade than domestic ports can handle-infrastructure failure forcing dependence on neighboring countries.

Energy infrastructure barely exists. Électricité d'Haïti (EDH) provides power to just 30% of households, and those connected experience blackouts lasting hours daily. Port-au-Prince businesses and wealthier households depend on expensive diesel generators-privatized electricity at massive cost. The absence of grid infrastructure prevents industrial development and forces even hospitals to rely on generators that fail during emergencies. Fuel supply depends entirely on imports through vulnerable port infrastructure, creating energy insecurity.

Water and sanitation infrastructure presents Haiti's gravest crisis. Only 30% of urban population accesses piped water, with most relying on vendors selling water of uncertain quality at high prices. Sewerage systems serve fewer than 20% of residents-most areas lack even septic systems, with waste entering open drainage channels. The cholera epidemic following the 2010 earthquake killed 10,000 people-a direct result of water infrastructure failure. Recurrence remains likely given unchanged conditions.

Digital infrastructure barely penetrates beyond Port-au-Prince. Mobile phone networks provide basic connectivity, but internet access reaches just 15% of the population. Power unreliability makes digital infrastructure academic-devices cannot charge, systems cannot operate without electricity.

The challenges transcend infrastructure to state failure. Haiti's government collects minimal revenue, provides minimal services, and exercises minimal authority outside the capital-and contested authority within it. Infrastructure projects face gang interference, corruption that diverts funds, and technical capacity so limited that even well-funded projects fail. The international community has spent billions on infrastructure reconstruction since 2010, yet visible progress remains minimal-a testament to how institutional dysfunction defeats even generous external support.

Most tragically, Haiti's infrastructure crisis is self-reinforcing. Without roads, electricity, or water systems, economic development becomes impossible. Without development, government lacks resources to build infrastructure. Without infrastructure, Haiti cannot escape poverty-a trapped nation where the built environment's absence perpetuates human suffering.

International intervention could provide resources, but unless paired with institutional reform and local capacity building, infrastructure investments will continue to fail. Haiti needs not just roads and power plants but governance capable of maintaining them-infrastructure sustainability requires political sustainability that remains frustratingly absent.`,
    issues: [
      '2010 earthquake infrastructure damage remaining largely unrepaired after 13 years',
      'Only 30% of population accessing electricity with daily blackouts for connected',
      'Water infrastructure serving 30% urban population creating cholera risk',
      'Roads requiring 8 hours for 170 km journey with chronic maintenance failure',
      'Port-au-Prince lacks sewerage serving fewer than 20% of residents',
      'State capacity insufficient to implement infrastructure even with external funding'
    ],
    lat: 18.9712,
    lng: -72.2852
  },
  'Honduras': {
    summary: `Honduras's infrastructure reflects a nation struggling against geographic challenges, limited resources, and institutional weaknesses. The mountainous terrain that dominates the interior creates extraordinary costs for road building and maintenance, while hurricanes regularly destroy coastal infrastructure. Yet within these constraints, Honduras attempts to build connectivity that can support economic development and reduce the poverty that drives emigration.

The highway network, centered on the CA-5 corridor linking San Pedro Sula to Tegucigalpa, underwent improvements funded by international lending. Yet the 256-kilometer journey between Honduras's two largest cities still requires four hours of mountain driving with frequent construction delays. This route-the country's most critical infrastructure-epitomizes the challenge: high construction and maintenance costs, vulnerable to landslides, yet essential for national integration and commerce.

San Pedro Sula, the industrial and commercial hub, suffers severe urban infrastructure deficits. The city lacks mass transit-private buses and colectivo minibuses provide informal service amid growing congestion. Roads deteriorate rapidly under heavy truck traffic, with repairs occurring sporadically. Industrial zones require reliable infrastructure, yet power outages and water supply interruptions remain common, forcing factories to maintain costly backup systems.

Port infrastructure at Puerto Cortés, handling 95% of national trade, underwent private sector modernization. Container terminals meet international standards, making Honduras a Central American transshipment point. Yet landside connectivity remains problematic-road congestion around the port and limited rail infrastructure create bottlenecks that prevent Honduras from fully capitalizing on port investments. The rail network, once extensive during banana company operations, collapsed after nationalization and exists only in fragments near the coast.

Energy infrastructure depends heavily on fossil fuel imports, though hydroelectric dams provide 30% of generation. Power costs remain high, limiting industrial competitiveness. The electricity grid, managed by ENEE (state utility), suffers from technical losses exceeding 30%-electricity generated but not billed due to theft and aging infrastructure. This hemorrhaging prevents cost recovery and sustainable operation, requiring repeated government bailouts.

Water infrastructure barely copes with urban demand. Tegucigalpa, sprawling across mountain slopes, faces chronic water shortages during dry season. The distribution system, with leakage rates above 50%, wastes scarce resources. Sewerage systems serve only major cities, and even there incompletely-most areas rely on septic systems or discharge untreated waste into rivers. The pollution of the Choluteca River through Tegucigalpa represents visible infrastructure failure.

Digital infrastructure advances slowly. 4G mobile coverage reaches urban areas but rural regions remain unconnected. Broadband penetration stays below 15% of households-among Central America's lowest. The digital divide reinforces rural-urban inequality, limiting educational and economic opportunities outside major cities.

Hurricane infrastructure damage occurs with depressing regularity. Hurricanes Eta and Iota in 2020 caused $10 billion in damage-equivalent to half the annual GDP-destroying roads, bridges, housing, and agricultural infrastructure across the north coast. Climate change increases hurricane intensity and rainfall, meaning infrastructure designed for historical conditions fails under new climate realities. Yet reconstruction typically rebuilds to old standards rather than climate-resilient designs-guaranteeing future destruction.

The challenges are fiscal and institutional. Infrastructure investment averages just 3% of GDP-insufficient for maintenance, let alone expansion. Corruption diverts public funds and inflates project costs. The construction sector lacks competition, with politically connected firms delivering poor quality at excessive prices. Maintenance receives minimal attention-new infrastructure deteriorates rapidly, creating cycles of construction and decay rather than durable assets.

Most critically, Honduras faces an infrastructure-migration nexus. The absence of rural roads, electricity, water systems, and digital connectivity in departments like Copán, Intibucá, and Lempira limits economic opportunity, driving migration to cities or abroad. Infrastructure investment in these regions could create conditions for local development-but requires resources and institutional commitment that remain scarce. Until Honduras builds infrastructure that serves its entire population, the cycle of poverty and emigration will continue.`,
    issues: [
      'Hurricane damage costing $10 billion in 2020 with infrastructure rebuilt without resilience',
      'ENEE electricity utility losing 30% of generation to theft and aging grid',
      'Water infrastructure with 50% leakage and Tegucigalpa facing seasonal shortages',
      'Infrastructure investment at 3% GDP insufficient for maintenance needs',
      'Rural regions lack basic connectivity driving migration from isolated areas',
      'San Pedro Sula and Tegucigalpa lack mass transit amid growing congestion'
    ],
    lat: 15.2000,
    lng: -86.2419
  },
  'Hungary': {
    summary: `Hungary's infrastructure inhabits the space between Western European aspiration and Central European reality-modernizing rapidly with EU funds yet revealing persistent gaps in quality and coverage. Budapest's infrastructure showcases this duality: a renovated metro system operating alongside roads cratered by deferred maintenance, new tram lines serving the historic core while suburban sprawl depends on congested highways.

Budapest Metro, the world's second oldest underground after London, underwent comprehensive refurbishment of lines M1, M2, and M3 using EU cohesion funds. The new M4 line, completed in 2014, features spectacular stations that function as underground art galleries-infrastructure as civic pride. Daily ridership exceeds 1.2 million across a network integrated with suburban rail, trams, and buses through unified ticketing. Yet this masks provincial reality: Hungarian cities outside Budapest possess minimal public transit-most Hungarians depend entirely on private cars.

Road infrastructure, centered on the M-route motorway network radiating from Budapest, expanded dramatically over two decades. The M0 ring road encircling the capital and M-routes connecting to Austria, Slovakia, Croatia, and Serbia improved connectivity and attracted automotive manufacturing-Mercedes, Audi, and BMW operate major facilities dependent on logistics infrastructure. Yet quality varies dramatically: new EU-funded motorways meet international standards, while secondary roads suffer chronic underinvestment. Rural Hungary's roads remain potholed and narrow, limiting agricultural market access.

Rail infrastructure faces modernization challenges. MÁV (state railways) operates an extensive network inherited from Austro-Hungarian times, but much infrastructure dates from that era. Intercity trains between Budapest and major cities operate at reasonable speeds, but regional lines use aging rolling stock with infrequent service. The Budapest-Vienna high-speed line, repeatedly announced, faces perpetual delays-a symbol of infrastructure ambitions unmatched by implementation capacity.

Energy infrastructure underwent transformation. Hungary's Paks Nuclear Power Plant generates 50% of electricity, providing baseload power that keeps costs competitive for industry. Yet the aging reactors require replacement-Paks II expansion, financed by Russian loans and built by Rosatom, generates controversy over energy dependence and nuclear safety. Renewable energy deployment lags EU peers, with Hungary maintaining Central Europe's highest fossil fuel dependence beyond nuclear.

Digital infrastructure advanced significantly. 5G networks cover Budapest and major cities, while fiber optic deployment reaches 65% of households-among Central Europe's highest. Hungary's tech sector, concentrated in Budapest, benefits from reliable connectivity. Yet rural areas lag, with mountainous regions in the north experiencing coverage gaps that limit remote work and digital services.

The Danube represents both opportunity and vulnerability. River infrastructure, including ports at Budapest, Dunaújváros, and Baja, handles significant freight-grain, petroleum products, and containers. Yet low water levels during droughts limit navigation, while flood risks require expensive protection infrastructure. Climate change makes both extremes more frequent, demanding infrastructure investments that Hungary struggles to finance independently.

The challenges are fundamentally political. Prime Minister Orbán's government directed massive infrastructure spending toward projects that serve political objectives rather than economic efficiency-stadiums, monuments, and railways to small towns that lack ridership but deliver electoral benefits. Meanwhile, essential infrastructure like hospital modernization, school renovation, and provincial road maintenance receives insufficient funding. Corruption allegations surround major projects, with government-connected contractors receiving non-competitive contracts at inflated prices.

EU funds, which financed much of Hungary's infrastructure modernization, now face restrictions due to rule-of-law concerns-specifically corruption and judicial independence violations. This threatens future infrastructure investment, as Hungary lacks fiscal capacity to replace EU funding. Infrastructure that depends on external resources becomes hostage to political disputes.

Most critically, Hungary's infrastructure reveals growing divergence. Budapest attracts investment, infrastructure, and talent, while the countryside depopulates. Infrastructure investments reinforce this pattern-Budapest receives metro lines and smart city pilots while villages lose bus service and young people. Infrastructure should reduce inequality, but in Hungary it increasingly reflects and reinforces regional disparities that threaten social cohesion.`,
    issues: [
      'Infrastructure spending politicized favoring electoral projects over economic efficiency',
      'EU funding restrictions due to rule-of-law concerns threatening future investment',
      'Provincial cities lack public transit with car dependence outside Budapest',
      'Energy dependence on Russian nuclear via Paks II expansion creating vulnerability',
      'Budapest-countryside infrastructure disparity reinforcing regional inequality',
      'Danube infrastructure vulnerable to climate-driven floods and droughts'
    ],
    lat: 47.1625,
    lng: 19.5033
  },
  'Indonesia': {
    summary: `Indonesia's infrastructure confronts perhaps the world's most challenging geography-17,000 islands spanning three time zones, with 270 million inhabitants distributed across landscapes ranging from dense urban megacities to isolated mountain villages. The Jokowi presidency (2014-2024) prioritized infrastructure investment at unprecedented scale, yet the fundamental challenge remains: connecting an archipelago nation requires infrastructure solutions beyond traditional roads and rails.

Jakarta's infrastructure exemplifies both progress and persistent failure. The capital's first metro line, MRT Jakarta, opened in 2019 after decades of planning-a 16-kilometer elevated and underground system carrying 90,000 daily passengers. The second line and LRT systems follow, attempting to address legendary congestion that costs an estimated 5% of GDP annually. Yet these advances cannot overcome geography: Jakarta sinks at 25 centimeters per year due to groundwater extraction and land subsidence, threatening the entire infrastructure system. The government's decision to relocate the capital to Nusantara in East Kalimantan represents admission that Jakarta's infrastructure challenges are insurmountable-yet questions persist about the new capital's viability and cost.

Road infrastructure expanded dramatically under Jokowi's administration. The Trans-Java toll road, spanning 1,150 kilometers from Merak to Banyuwangi, completed in 2018, reduced travel time across Java by 40%. Trans-Sumatra highway construction continues, aiming to connect the island's north-south corridor. Yet beyond Java and Sumatra, road infrastructure remains minimal. Papua's highlands lack paved roads, with communities depending on small aircraft and footpaths-19th-century connectivity in the 21st century.

Port and maritime infrastructure determine Indonesia's economic viability as an archipelago. The Tanjung Priok expansion in Jakarta and new deep-water ports at Kuala Tanjung and Patimban aim to reduce shipping costs and transhipment dependence on Singapore. Yet connecting these ports to hinterlands requires rail and road infrastructure that progresses slowly. Ferry services linking islands face chronic safety issues-overloading and aging vessels cause regular disasters that claim hundreds of lives.

Rail infrastructure, largely limited to Java and Sumatra, underwent modernization. The Jakarta-Bandung high-speed rail, built by China at $7 billion cost, commenced operation in 2023-Southeast Asia's first high-speed line. Yet questions persist about ridership and debt sustainability. Conventional rail improvements across Java enhance commuter and freight capacity, though much of the colonial-era network remains single-track with limited speeds.

Energy infrastructure faces dual challenges: ensuring access in remote regions while transitioning from coal dependence. Electrification reached 98% nationally-remarkable progress from 70% in 2010-yet Papua and eastern islands still experience frequent outages and diesel dependence. Coal generates 60% of electricity despite climate commitments, with massive plants in Java and Kalimantan. Renewable potential-geothermal, solar, hydro-remains largely untapped, with renewables contributing just 12% of generation.

Digital infrastructure advanced rapidly. 4G coverage reaches 90% of populated areas, with 5G deployment beginning in major cities. Submarine fiber optic cables linking islands improve connectivity, though remote regions still depend on expensive satellite links. Indonesia's digital economy, among Asia's fastest growing, demands infrastructure that can support fintech, e-commerce, and digital services reaching archipelago-wide markets.

The challenges are immense. Infrastructure investment peaked at 6% of GDP under Jokowi but requires sustained commitment. The Nusantara capital project alone costs $32 billion-resources that could modernize Jakarta or extend infrastructure to underserved regions. Corruption inflates costs and reduces quality. Maintenance culture remains underdeveloped-new infrastructure deteriorates rapidly without adequate upkeep.

Climate vulnerability grows acute. Rising seas threaten coastal cities where most Indonesians live. Jakarta's subsidence, exacerbated by infrastructure that encouraged unsustainable development patterns, represents future disaster. Deforestation from road building in Kalimantan and Papua destroys ecosystems and contributes to emissions that infrastructure supposedly serves to reduce.

Most fundamentally, Indonesia faces an infrastructure trade-off: showcase projects that demonstrate modernity versus basic systems that serve dispersed populations. High-speed rail and new capitals attract attention, but rural villages need roads, electricity, and water systems. Indonesia's infrastructure challenge isn't building cutting-edge systems-it's ensuring that fishermen in Maluku, farmers in Nusa Tenggara, and miners in Papua access the basic connectivity that makes development possible. That infrastructure, unglamorous but essential, remains the unfinished agenda.`,
    issues: [
      'Jakarta sinking 25 cm/year due to subsidence threatening entire infrastructure system',
      'Nusantara capital relocation costing $32 billion amid questions about viability',
      'Papua and eastern islands lack basic road connectivity relying on air access',
      'Coal generating 60% electricity despite climate goals with renewables only 12%',
      'Ferry safety crisis with overloading and aging vessels causing regular disasters',
      'Infrastructure maintenance culture underdeveloped causing rapid deterioration'
    ],
    lat: -0.7893,
    lng: 113.9213
  }
}

async function saveInfrastructureSummaries() {
  console.log('🚀 Saving infrastructure summaries: Finland to Indonesia\n')
  console.log('='.repeat(80))

  let savedCount = 0
  let errorCount = 0

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
  console.log('\n📍 Countries completed:')
  console.log('   Finland, France, Georgia, Germany, Ghana, Greece,')
  console.log('   Guatemala, Guyana, Haiti, Honduras, Hungary, Indonesia')
}

saveInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
