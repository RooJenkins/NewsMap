import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const infrastructureSummaries = [
  {
    name: 'Afghanistan',
    country: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Afghanistan's infrastructure represents one of the most challenging built environment contexts globally—four decades of conflict have devastated what was already minimal connectivity infrastructure. The Ring Road, a 2,200-kilometer highway connecting Kabul, Kandahar, Herat, and Mazar-i-Sharif, remains the backbone of national connectivity, yet only 60% is paved and maintainable. This Soviet-era arterial, rebuilt with international funding in the 2000s, degrades rapidly under heavy truck traffic and insurgent activity, with sections becoming impassable seasonally.

Urban infrastructure reflects extreme fragility. Kabul, swollen to 6 million inhabitants from rural displacement, operates without comprehensive master planning. The city lacks a functioning public transit system—residents rely on informal minibuses and shared taxis navigating chaotic, unpaved roads. Water and sanitation infrastructure serves barely 40% of the population adequately. Electrical grid coverage remains sporadic, with the capital dependent on imports from Uzbekistan and Tajikistan while domestic generation capacity languishes at 600 MW for a nation of 40 million.

The absence of rail infrastructure is particularly stark. Afghanistan remains one of few nations globally without functioning railways, though ambitious plans exist for regional connections to Uzbekistan and Iran. The mountainous Hindu Kush terrain imposes extraordinary engineering challenges—passes reach 3,500 meters, requiring extensive tunneling and avalanche protection for any trans-mountain routes. Current road infrastructure through the Salang Tunnel, built in 1964, exemplifies the risks: avalanches and poor maintenance make it lethal.

Digital infrastructure shows paradoxical advancement. Mobile phone penetration exceeds 80%, with 4G coverage in major cities, yet terrestrial fiber optic infrastructure remains minimal. Afghanistan depends on satellite links and connections through neighboring countries, making it vulnerable to external disruption. Rural areas remain digitally isolated, with less than 15% internet penetration outside cities.

Airport infrastructure, concentrated in Kabul, represents the most functional connectivity system, though international sanctions and security concerns severely limit operations. The roads connecting provinces to the capital determine economic viability more than any other factor, yet maintenance funding has evaporated with foreign aid withdrawal. The result is infrastructure decay that accelerates isolation, economic stagnation, and humanitarian crisis in a nation where geography already imposes brutal constraints on development.`,
    issues: [
      "Ring Road deterioration with only 60% paved and maintainable",
      "Complete absence of railway infrastructure in mountainous terrain",
      "Kabul's informal settlement growth overwhelming minimal infrastructure",
      "Electrical grid dependent on imports with only 600 MW domestic capacity",
      "Rural digital isolation with less than 15% internet penetration",
      "Salang Tunnel safety crisis and maintenance collapse"
    ]
  },
  {
    name: 'Albania',
    country: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `Albania's infrastructure transformation over the past three decades exemplifies post-communist transition, with dramatic improvements marred by persistent corruption and planning failures. The nation has constructed over 400 kilometers of highways since 2000, connecting Tirana to the Adriatic coast and establishing corridors toward Kosovo and North Macedonia. Yet these projects, often financed through expensive PPP arrangements, burden state finances while failing to address the maintenance deficit on secondary and tertiary roads.

Tirana's explosive growth—now housing 850,000 of Albania's 2.8 million people—outpaces infrastructure provision. The capital operates without metro or tram systems, relying entirely on buses and private vehicles that congest inadequate road networks. Informal construction, a legacy of the chaotic 1990s, continues to shape urban form, with buildings encroaching on public space and blocking planned infrastructure corridors. Recent efforts to pedestrianize central areas and establish dedicated bus lanes show promise, but implementation remains inconsistent.

The port infrastructure at Durrës, handling 90% of national trade, represents both opportunity and bottleneck. Recent Chinese investment has expanded container capacity, yet road and rail connections to the hinterland remain inadequate. The absence of efficient intermodal logistics infrastructure forces nearly all freight onto roads, accelerating highway deterioration and increasing transport costs. The planned Durrës-Kosovo railway, stalled for years, would transform regional connectivity if completed.

Digital infrastructure advances steadily. Fiber optic backbone reaches all major cities, with 4G coverage exceeding 95%. However, the mountainous north remains underserved, and Albania's dependence on hydroelectric power creates vulnerability—droughts trigger both power shortages and internet disruptions when generators fail. The country's data center infrastructure remains nascent, with most digital services hosted abroad.

Water infrastructure demands urgent attention. Tirana suffers frequent supply interruptions despite abundant national water resources. Leakage rates exceed 60% in distribution networks, while wastewater treatment remains minimal. Coastal development for tourism proceeds with inadequate sewage infrastructure, threatening the very Mediterranean water quality that attracts visitors. Climate change intensifies challenges: flash flooding from deforested watersheds overwhelms drainage systems, while summer droughts stress supply. Albania's infrastructure, improving but fragile, will define whether the nation can consolidate EU accession prospects or slide toward middle-income stagnation.`,
    issues: [
      "Highway PPP debt burden with deteriorating secondary road networks",
      "Tirana's rapid growth without metro or comprehensive public transit",
      "Durrës port bottleneck lacking efficient rail connections",
      "Water distribution leakage exceeding 60% in urban networks",
      "Hydroelectric dependency creating power and connectivity vulnerabilities",
      "Coastal sewage infrastructure failing to match tourism development"
    ]
  },
  {
    name: 'Algeria',
    country: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algeria's infrastructure ambitions reflect its oil wealth and authoritarian capacity to marshal resources, yet persistent inefficiencies reveal the limits of centralized planning without competition or transparency. The nation has invested over $100 billion in infrastructure since 2000, constructing the East-West Highway—a 1,200-kilometer motorway linking Tunisia to Morocco along the Mediterranean coast—and expanding port capacity at Algiers, Oran, and Annaba. These megaprojects showcase engineering capability while raising questions about cost overruns and maintenance sustainability.

The urban transit transformation in Algiers stands as North Africa's most ambitious. The capital now operates metro, tramway, and cable car systems that move 800,000 daily passengers through a dense, hilly cityscape. The metro extension to Algiers airport, completed in 2019, demonstrates continued investment in mass transit over car-dependent sprawl. Yet these systems operate below capacity due to unreliable service and maintenance issues endemic to state-run enterprises. Oran and Constantine have followed with their own tramway networks, establishing Algeria as the regional leader in modern public transit.

The rail infrastructure presents contrasts. SNTF, the national railway, operates 4,000 kilometers of mostly single-track lines, many dating to French colonial era. Freight service degrades while road transport dominates, despite government rhetoric about modal shift. The absence of high-speed rail plans seems puzzling for a nation with Algeria's resources and the technical challenges of its mountainous terrain—yet political will remains focused on roads rather than rails for intercity connectivity.

Digital infrastructure advances unevenly. Fiber optic deployment reaches coastal cities, with 4G covering 80% of the population, but the vast Saharan interior remains connected by satellite and aging terrestrial links. Algeria Telecom's monopolistic tendencies stifle innovation and keep costs high relative to service quality. The recent push toward digital government services stumbles against infrastructure reliability issues and limited rural connectivity.

The fundamental challenge is maintenance. Algeria builds impressively but sustains poorly. New infrastructure deteriorates within years due to inadequate upkeep budgets, corruption in maintenance contracts, and lack of lifecycle planning. Water infrastructure, despite massive desalination investments, suffers 50% leakage rates. The East-West Highway already requires extensive repairs less than fifteen years after completion. Until Algeria addresses the maintenance deficit, its infrastructure spending will create expensive monuments rather than durable development foundations.`,
    issues: [
      "Massive maintenance deficit across new highway infrastructure",
      "Water distribution leakage at 50% despite desalination investments",
      "Railway network deterioration with freight shifting to roads",
      "Urban transit systems operating below capacity due to reliability issues",
      "Digital infrastructure monopoly stifling innovation and access",
      "Saharan interior connectivity remaining minimal despite oil revenues"
    ]
  },
  {
    name: 'Angola',
    country: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    summary: `Angola's infrastructure rebuilding after a brutal 27-year civil war represents one of Africa's largest construction programs, financed substantially through oil-backed loans to China. The Benguela Railway restoration, completing in 2014, reopened a 1,300-kilometer corridor from the Atlantic port of Lobito to the Zambian border, enabling copper exports from the DRC and Zambia while reconnecting Angola's isolated interior provinces. This Chinese-built project cost $1.8 billion and exemplifies infrastructure-for-resources deals that define Angolan development.

Luanda's explosive growth—from 2 million to 8 million inhabitants since 2000—overwhelms infrastructure capacity. The capital sprawls chaotically, with informal settlements (musseques) housing 70% of residents lacking basic services. Traffic congestion ranks among Africa's worst, with commutes routinely exceeding three hours despite recently constructed ring roads and flyovers. Public transit remains minimal—plans for a metro system stall repeatedly, leaving residents dependent on informal candongueiro minibuses that congest inadequate road networks.

The Luanda New City megaproject, built by CITIC on reclaimed land, was intended to demonstrate Angola's ambitions: high-rise towers, wide boulevards, and modern infrastructure for 500,000 residents. Instead, it stands largely empty—a monument to poor planning that ignored demand, affordability, and job locations. The infrastructure is excellent but irrelevant, while Luanda's actual population struggles with deteriorating services in older districts.

Port infrastructure at Lobito and Luanda has expanded significantly, yet inefficient customs and poor road connections create bottlenecks. The Lobito Corridor, once completed with upgrades in DRC and Zambia, promises to transform southern African logistics—but only if accompanying road infrastructure and border procedures improve. Currently, trucking costs per ton-kilometer remain among Africa's highest.

Digital infrastructure advances from a low base. 4G coverage reaches major cities, but rural connectivity lags severely. Angola's geography—ranging from Atlantic coast to tropical highlands to semi-arid interior—demands diverse infrastructure solutions, yet planning remains Luanda-centric. Power infrastructure, despite abundant hydroelectric potential, struggles with distribution losses exceeding 40%. The Laúca Dam, one of Africa's largest, generates 2,000 MW yet Luanda still faces frequent blackouts due to transmission and distribution failures. Angola's infrastructure paradox: massive investment producing uneven results where planning failures and corruption undermine engineering achievements.`,
    issues: [
      "Luanda informal settlement infrastructure serving 70% of 8 million residents",
      "New City megaproject standing empty while actual city infrastructure deteriorates",
      "Power distribution losses exceeding 40% despite hydroelectric capacity",
      "Port efficiency bottlenecks undermining Lobito Corridor potential",
      "Severe rural-urban infrastructure divide with minimal rural services",
      "Traffic congestion overwhelming new road infrastructure in Luanda"
    ]
  },
  {
    name: 'Argentina',
    country: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Argentina's infrastructure reflects its past grandeur and present dysfunction—a nation that once rivaled European prosperity now struggles with deteriorating systems and chronic underinvestment. The railway network exemplifies this decline: Argentina operated 47,000 kilometers of track in 1950, the most extensive in Latin America, serving both freight and passengers across the Pampas and Patagonia. Today, barely 2,500 kilometers function adequately, with freight modal share collapsing from 40% to under 10% as privatization failures and policy incoherence destroyed what was once world-class infrastructure.

Buenos Aires operates Latin America's oldest metro system, inaugurated in 1913, moving 1.2 million daily passengers through aging infrastructure that demands constant maintenance. Recent Chinese-financed expansions add new lines, yet the system barely keeps pace with metropolitan growth. The suburban rail network, serving 5 million daily across Greater Buenos Aires, oscillates between crisis and marginal improvement—chronic accidents, delays, and overcrowding reflect decades of deferred maintenance. The 2012 Once Station disaster, killing 51, exemplified infrastructure neglect as political failure.

Road infrastructure fares better but still disappoints. The national route network connects provinces adequately, yet poor maintenance creates hazardous conditions. Toll roads operated under concessions show higher quality, but the concession system itself sparked political controversy leading to decades of frozen toll rates—producing deteriorating highways as operators lacked maintenance incentives. The recent renegotiation of these concessions begins addressing the backlog, but decades of neglect demand enormous capital.

Digital infrastructure shows dynamism. Argentina leads Latin America in fiber optic deployment, with high internet penetration in cities and expanding 5G coverage. Buenos Aires' tech sector thrives on this connectivity, though rural areas remain underserved. The contrast is stark: world-class digital infrastructure alongside collapsing physical systems.

Airport infrastructure at Buenos Aires Ezeiza and Aeroparque handles growing passenger volumes, though capacity constraints loom. Regional airports deteriorate from neglect, isolating Patagonia and the Northwest. The Paraná-Paraguay waterway, moving agricultural exports to the Atlantic, requires constant dredging yet generates political conflict over concession terms rather than infrastructure optimization.

Argentina's fundamental challenge is political instability producing policy incoherence. Governments change direction every few years, abandoning projects mid-stream, renegotiating concessions, and failing to maintain completed infrastructure. Until political consensus emerges around sustained infrastructure investment and maintenance, Argentina will continue squandering its geographical advantages and historical infrastructure inheritance.`,
    issues: [
      "Railway network collapse from 47,000 to 2,500 functional kilometers",
      "Buenos Aires suburban rail chronic overcrowding and safety failures",
      "Road concession system breakdown leaving toll highways deteriorating",
      "Regional airport neglect isolating Patagonia and Northwest provinces",
      "Political instability preventing sustained infrastructure investment",
      "Waterway dredging and concession conflicts undermining agricultural logistics"
    ]
  },
  {
    name: 'Armenia',
    country: 'Armenia',
    lat: 40.0691,
    lng: 45.0382,
    summary: `Armenia's infrastructure must overcome severe geographical constraints—a landlocked, mountainous nation bordering two hostile neighbors (Azerbaijan and Turkey) while dependent on Georgia and Iran for external connectivity. The North-South Road Corridor, Armenia's most ambitious infrastructure project, aims to create a 550-kilometer highway from the Georgian to Iranian borders, passing through Yerevan. Sections complete to modern standards, yet funding gaps delay full realization. This corridor represents Armenia's lifeline: without efficient transit routes through Georgia to Black Sea ports or south to the Persian Gulf, the nation remains economically strangled.

Yerevan concentrates 40% of Armenia's 3 million population, with infrastructure reflecting both Soviet-era planning and post-independence chaos. The metro system, built in Soviet times, operates one line moving 60,000 daily passengers—minimal but functional. Recent Russian loans financed new rolling stock, maintaining service quality. Above ground, traffic congestion intensifies as private car ownership surges without corresponding road capacity expansion. The radial-concentric Soviet layout facilitates central access but creates bottlenecks. Recent pedestrianization of central areas and dedicated bus lanes show promise, yet public transit investment lags private vehicle growth.

The absence of railway connectivity to most of the country hampers development. The Soviet-era network connected Armenia to neighbors, but borders with Azerbaijan and Turkey remain closed following the Nagorno-Karabakh conflicts. The single functioning international rail line to Georgia operates intermittently, making Armenia overwhelmingly dependent on road transport. Plans for railway restoration assume political normalization that remains distant.

Digital infrastructure represents a bright spot. Armenia has invested heavily in fiber optics and data centers, positioning itself as a Caucasus tech hub. Internet penetration exceeds 80%, with affordable, high-speed connections in Yerevan. The government's digitalization agenda has created efficient e-government services, though rural areas lag in connectivity.

Power infrastructure depends substantially on the Metsamor Nuclear Plant, providing 40% of electricity from a Soviet-era design that alarms international observers. The aging reactor requires replacement, yet alternatives remain expensive for a small economy. Hydroelectric potential offers promise, though winter energy security demands diverse sources. Water infrastructure generally functions adequately, though Yerevan's rapid growth strains supply systems. Armenia's infrastructure future hinges on geopolitics: regional peace would enable connectivity investments to transform prospects, while continued isolation condemns the nation to expensive workarounds for its landlocked predicament.`,
    issues: [
      "Landlocked isolation with borders closed to Azerbaijan and Turkey",
      "North-South Corridor funding gaps delaying completion",
      "Railway network isolation with minimal international connections",
      "Aging Metsamor Nuclear Plant requiring replacement",
      "Yerevan traffic congestion overwhelming Soviet-era road layout",
      "Rural-urban digital divide despite strong urban connectivity"
    ]
  },
  {
    name: 'Australia',
    country: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Australia's infrastructure confronts unique challenges: a continental nation with the population of greater Tokyo distributed across distances exceeding Europe, concentrated in five coastal cities separated by thousands of kilometers. The tyranny of distance defines infrastructure economics—long freight hauls across empty interior, intercity passenger transport dominated by aviation, and urban infrastructure investment concentrated in Sydney and Melbourne.

The urban rail systems in Sydney and Melbourne rank among the world's most extensive, with Sydney's network exceeding 800 kilometers and moving 1.4 million daily passengers. Yet both cities struggle with capacity constraints as populations surge toward 6 and 5 million respectively. Sydney's Metro Northwest, opened 2019, represents Australia's first fully automated metro system, with extensions under construction. Melbourne's suburban rail loop project, at $50 billion, will be Australia's largest infrastructure undertaking. These investments reflect belated recognition that road-based sprawl cannot accommodate projected growth.

Freight rail tells a different story. The mining sector's heavy haul railways in Western Australia and Queensland showcase world-leading bulk commodity logistics—Rio Tinto's autonomous trains moving iron ore efficiently. Yet interstate freight remains road-dominated, despite the Melbourne-Brisbane Inland Rail project promising to shift containers to rail. After decades of delays, the $15 billion project nears completion, though whether it achieves modal shift remains uncertain given established trucking logistics.

Digital infrastructure reflects Australia's paradoxes. The National Broadband Network, intended to deliver fiber to every premise, compromised to fiber-to-node in many areas, producing slower speeds than promised while costing $51 billion. Urban centers enjoy world-class connectivity, yet rural and remote Australia remains digitally disadvantaged. The vast distances that justify government intervention in digital infrastructure also make that intervention extraordinarily expensive.

Airport infrastructure excels, with Sydney, Melbourne, and Brisbane operating efficient international gateways. However, Sydney's Kingsford Smith airport operates at capacity, with the second airport at Badgerys Creek under construction for 2026 opening—decades overdue. Water infrastructure in major cities, tested by severe droughts, has adapted through desalination plants and demand management, though climate change threatens further stress.

Australia's fundamental infrastructure challenge is productivity: construction costs rank among the world's highest, with Sydney and Melbourne metro costs per kilometer exceeding even New York. Until Australia addresses why infrastructure costs so much to build, the nation will struggle to deliver the transformative investments its growing cities demand while connecting its vast interior to global markets.`,
    issues: [
      "Infrastructure construction costs among world's highest",
      "Sydney and Melbourne rail capacity constraints despite major investment",
      "National Broadband Network compromises producing suboptimal speeds",
      "Rural and remote digital divide across vast distances",
      "Sydney airport capacity crisis with delayed second airport",
      "Freight rail modal shift challenges despite Inland Rail investment"
    ]
  },
  {
    name: 'Austria',
    country: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austria's infrastructure excellence reflects Alpine engineering mastery, environmental consciousness, and sustained investment in public transit over private automobiles. The railway network, operated by ÖBB, achieves punctuality rates exceeding 95%, moving freight and passengers through the Alps via tunnels and viaducts that represent 150 years of continuous innovation. The Semmering Railway, a UNESCO World Heritage site from 1854, pioneered mountain railway engineering, while the recent Koralm Tunnel—33 kilometers connecting Graz to Klagenfurt—demonstrates continued ambition.

Vienna's integrated public transit system ranks globally as exemplary: metro, tram, and bus networks move 2.6 million daily passengers across a city of 1.9 million, achieving 38% modal share for public transit—among Europe's highest. The annual transit pass costs €365, the price of one euro daily, making unlimited travel affordable while encouraging car-free living. Vienna's infrastructure planning prioritizes density, mixed-use development, and transit-oriented design, producing livability that consistently ranks the city at the top of global quality-of-life indices.

The Alpine highway system, while extensive, increasingly emphasizes freight modal shift to rail. The Brenner Base Tunnel, under construction between Austria and Italy, will become the world's longest railway tunnel at 64 kilometers when completed in 2032, enabling freight trains to cross the Alps efficiently. Austria's policy framework taxes heavy trucks while subsidizing rail freight, producing modal shift that reduces emissions and preserves Alpine environments.

Digital infrastructure benefits from Austria's small scale and wealth: fiber optic coverage exceeds 90%, with 5G deployment advancing rapidly. Vienna has positioned itself as Central European digital hub, with data centers serving the broader region. Rural Alpine valleys present connectivity challenges, yet targeted investment ensures even remote communities access high-speed broadband.

Hydroelectric infrastructure provides 60% of Austrian electricity, with pumped storage facilitating renewable energy integration. The nation exports power to neighbors while importing during peak demand—the Alpine geography that complicates surface transport enables clean energy generation. Water infrastructure maintains exemplary quality, with Vienna's spring water supply flowing by gravity from Alpine sources.

Austria's infrastructure challenges are more subtle than most nations': balancing heritage protection with modernization, managing transit-induced development pressure in cities, and maintaining Alpine infrastructure against climate change impacts. Glacial retreat destabilizes slopes, requiring expensive geotechnical interventions on railways and highways. Yet Austria's commitment to sustainable, human-scaled infrastructure provides a model that larger, less wealthy nations struggle to emulate but would benefit from studying.`,
    issues: [
      "Climate change destabilizing Alpine slopes requiring infrastructure interventions",
      "Transit-induced development pressure in Vienna and major cities",
      "Brenner Base Tunnel construction delays and cost overruns",
      "Heritage protection complicating infrastructure modernization",
      "Rural Alpine valley connectivity despite strong overall broadband",
      "Balancing tourism infrastructure with environmental preservation"
    ]
  },
  {
    name: 'Azerbaijan',
    country: 'Azerbaijan',
    lat: 40.1431,
    lng: 47.5769,
    summary: `Azerbaijan's infrastructure ambitions reflect its oil wealth and geopolitical aspirations as a bridge between Europe and Central Asia. Baku's transformation over two decades exemplifies petro-state megaproject urbanism: the Flame Towers dominate the skyline, a Formula One street circuit showcases the waterfront, and the Heydar Aliyev Center demonstrates architectural ambition. Yet beneath the showcase projects, infrastructure functionality lags: traffic congestion worsens despite new highways, public transit remains minimal beyond basic metro service, and sprawling suburban development lacks adequate services.

The Baku Metro, inherited from Soviet times, operates three lines moving 300,000 daily passengers. Recent extensions expand coverage, yet the system remains small for a city approaching 3 million. Buses operate chaotically, lacking integration with metro service. The result is surging private vehicle use overwhelming road capacity despite continuous highway construction. Baku's topography—built on hills and peninsula—compounds congestion challenges, yet transit investment remains secondary to automobile infrastructure.

The East-West transport corridor represents Azerbaijan's strategic infrastructure vision. The Baku-Tbilisi-Kars railway, completing in 2017, connects Azerbaijan to Turkey via Georgia, bypassing Russia and Armenia. The route moves freight from Central Asia and China toward European markets, though volumes remain below projections. Similarly, the North-South corridor connecting Russia to Iran via Azerbaijan promises transit revenues, yet infrastructure bottlenecks and geopolitical tensions constrain throughput. Azerbaijan positions itself as Silk Road crossroads, but whether trade flows justify infrastructure investments remains uncertain.

Port infrastructure at Baku has expanded substantially, with the Alat International Sea Trade Port designed for Caspian shipping and rail connections. Oil and gas pipelines—including BTC to Turkey and Trans-Adriatic Pipeline to Europe—represent Azerbaijan's most consequential infrastructure, ensuring energy export revenues while creating environmental vulnerabilities.

Digital infrastructure advances unevenly. Baku enjoys good connectivity, with fiber optics and 4G widely available, yet rural regions remain underserved. State control of telecommunications stifles innovation and enables surveillance, while infrastructure development serves political priorities over economic efficiency.

The fundamental question for Azerbaijani infrastructure is sustainability beyond oil: when hydrocarbon revenues decline, will the nation's infrastructure facilitate economic diversification or stand as expensive monuments to petro-state ambitions? The emphasis on prestige projects over functional urban systems suggests the latter, yet the transport corridor investments might enable a post-oil future if regional trade develops as envisioned.`,
    issues: [
      "Baku traffic congestion despite new highways and minimal transit investment",
      "East-West corridor trade volumes below infrastructure investment projections",
      "Prestige megaprojects prioritized over functional urban infrastructure",
      "State telecommunications control stifling digital innovation",
      "Rural-urban infrastructure divide with minimal rural services",
      "Oil dependency threatening infrastructure sustainability post-hydrocarbon era"
    ]
  },
  {
    name: 'Bahamas',
    country: 'Bahamas',
    lat: 25.0343,
    lng: -77.3963,
    summary: `The Bahamas' infrastructure confronts the unique challenges of an archipelagic nation: 700 islands spanning 100,000 square miles of ocean, with population concentrated on New Providence (Nassau) and Grand Bahama (Freeport). Inter-island connectivity depends entirely on maritime and air transport, making infrastructure provision expensive and complex. Nassau's Lynden Pindling International Airport, recently expanded, serves as the primary gateway, handling 4 million passengers annually, yet connecting outer islands requires small aircraft and boats—expensive, weather-dependent, and constraining development.

Nassau's road infrastructure buckles under vehicle congestion that rivals cities ten times its size. The island's 250,000 residents operate over 100,000 vehicles on limited road networks designed for a fraction of current traffic. The absence of public transit—Nassau lacks buses, metro, or commuter rail—forces automobile dependency. Recent proposals for bus rapid transit remain unrealized, while gridlock intensifies. The single major east-west artery, the Prince Charles Drive, experiences severe congestion despite expansions and flyovers.

Port infrastructure dominates the economy: Nassau and Freeport serve as major cruise ship destinations, with purpose-built terminals handling millions of passengers. Container port operations at Freeport position the Bahamas as transshipment hub for Caribbean and Latin American trade. Yet hurricane vulnerability creates acute infrastructure risk—Hurricane Dorian in 2019 devastated Grand Bahama's infrastructure, including Freeport's container terminal, demonstrating the fragility of island infrastructure to Category 5 storms intensifying under climate change.

Digital infrastructure advances steadily but expensively. Submarine fiber optic cables connect the Bahamas to Florida and the broader internet, with 4G coverage across inhabited islands. Yet the small market size keeps costs high—internet and mobile service rank among the Caribbean's most expensive. Efforts to position Nassau as offshore financial services center demand world-class digital infrastructure, driving investment in data centers and redundancy.

Water infrastructure faces acute challenges. Nassau and other islands depend on reverse osmosis desalination for potable water, an energy-intensive process vulnerable to power outages. The lack of natural freshwater sources makes infrastructure reliability critical. Power generation depends on imported fossil fuels, making electricity expensive while the nation's abundant solar potential remains largely untapped.

The Bahamas' infrastructure future demands climate resilience: building codes requiring hurricane resistance, elevating critical infrastructure above projected sea level rise, hardening power and water systems against storms, and diversifying transport to reduce single-point failure risks. The archipelagic geography that makes the Bahamas beautiful also makes infrastructure provision exceptionally challenging and expensive, while climate change threatens to overwhelm adaptation capacity.`,
    issues: [
      "Nassau traffic congestion overwhelming limited road networks without transit",
      "Hurricane vulnerability demonstrated by Dorian's infrastructure devastation",
      "Inter-island connectivity costs constraining outer island development",
      "Water desalination dependency creating energy and reliability vulnerabilities",
      "Expensive digital infrastructure due to small market size",
      "Climate change threatening coastal infrastructure and port facilities"
    ]
  },
  {
    name: 'Bahrain',
    country: 'Bahrain',
    lat: 26.0667,
    lng: 50.5577,
    summary: `Bahrain's infrastructure reflects its position as the Gulf's smallest yet historically most sophisticated state—the first Gulf nation to discover oil and diversify beyond it. The King Fahd Causeway, connecting Bahrain to Saudi Arabia since 1986, defines the nation's infrastructure reality: a 25-kilometer bridge carrying 50,000 vehicles daily, serving as both economic lifeline and pressure valve for Saudi visitors seeking Bahrain's more liberal social environment. This causeway enables Bahrain's role as Saudi commercial and entertainment hub, yet creates dependency that constrains sovereignty.

Manama's infrastructure operates at extraordinary density for the Gulf: the capital island hosts 500,000 residents on barely 30 square kilometers, producing congestion despite extensive road networks and land reclamation projects. The Bahrain World Trade Center and Financial Harbour showcase architectural ambition, yet traffic gridlock persists. The absence of metro or light rail seems increasingly untenable—proposals circulate for decades without realization, while private vehicle use surges. Bus networks operate but remain underutilized, seen as transport for lower-income expat workers rather than citizens.

The Formula One circuit and associated infrastructure exemplify Bahrain's prestige project approach: world-class facilities for international events while everyday urban infrastructure struggles. Recent land reclamation around Manama Bay and the Diyar Al Muharraq development create new urban districts, yet the island's fundamental space constraints persist. Unlike UAE neighbors with desert to expand into, Bahrain must build upward or into the sea—expensive approaches that limit housing affordability despite oil wealth.

Port and airport infrastructure maintain Bahrain's historical role as Gulf entrepôt. Khalifa Bin Salman Port, connected to the Causeway, serves as transshipment hub, while Bahrain International Airport's recent $1.1 billion expansion positions it to handle 14 million passengers annually—ambitious for a nation of 1.5 million, betting on transfer traffic and Saudi visitors.

Digital infrastructure excels: fiber optic coverage reaches virtually all premises, with 5G deployment advancing rapidly. Bahrain positions itself as fintech hub, with regulatory sandbox encouraging innovation. The small scale enables infrastructure excellence impossible in larger nations, yet also creates vulnerability—any infrastructure failure affects the entire nation instantly.

The fundamental challenge is sustainability beyond oil and gas, which still comprise 75% of government revenue despite diversification rhetoric. Infrastructure investments in tourism, finance, and logistics aim to create post-oil economy, yet regional competition intensifies as Saudi Arabia develops its own infrastructure rather than depending on Bahrain. The Causeway that made modern Bahrain possible may increasingly bypass it for destinations beyond.`,
    issues: [
      "Traffic congestion without metro despite high density and limited space",
      "Causeway dependency creating economic vulnerability to Saudi relations",
      "Land reclamation costs as island space constraints limit expansion",
      "Prestige infrastructure prioritized over functional urban systems",
      "Oil revenue dependency threatening infrastructure sustainability",
      "Regional competition as Saudi Arabia develops alternative infrastructure"
    ]
  },
  {
    name: 'Bangladesh',
    country: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    summary: `Bangladesh's infrastructure must serve 170 million people in an area smaller than Nepal, creating population density rivaling city-states across an entire nation. The Padma Bridge, opening in 2022, represents transformational infrastructure: a 6.15-kilometer road-rail bridge across the Padma River connecting southwestern Bangladesh to Dhaka, ending ferry dependence that created hours-long delays. This Chinese-financed megaproject cost $3.6 billion—massive for Bangladesh—yet promises to add 1-2% to GDP by integrating previously isolated regions into the national economy.

Dhaka exemplifies infrastructure crisis. The megacity of 22 million operates without metro (until the recent MRT Line-6 partial opening), comprehensive sewage treatment, or adequate road networks. Traffic congestion ranks globally as catastrophic—average speeds in central areas drop below 5 km/h during peak hours. The rickshaw fleet exceeds 500,000, providing employment yet contributing to gridlock. The recent metro line opening begins addressing transit deficits, with plans for six lines, yet decades will pass before the network adequately serves the metropolis.

The port infrastructure bottleneck at Chittagong handles 90% of Bangladesh's trade, yet chronic congestion creates weeks-long delays for containers. The recently completed Karnaphuli Tunnel, Bangladesh's first underwater tunnel, connects the city center to industrial zones and the new deep-sea port under development. These investments aim to relieve pressure on Chittagong, which will otherwise constrain the ready-made garment sector that generates 85% of export revenues.

Bangladesh's riverine geography dictates infrastructure provision. The Brahmaputra, Ganges, and Meghna create natural barriers requiring hundreds of bridges and ferries. Monsoon flooding annually inundates 20-30% of the country, destroying roads and disrupting connectivity. Climate change intensifies this vulnerability—sea level rise threatens to displace millions from coastal areas while increasing cyclone intensity demands more resilient infrastructure. Yet Bangladesh builds increasingly in flood zones from population pressure and land scarcity.

Digital infrastructure shows impressive advancement. Mobile phone penetration exceeds 100%, with 4G coverage reaching 90% of the population. Bangladesh's digital payment revolution and mobile financial services achieve financial inclusion beyond physical bank infrastructure. Fiber optic deployment expands rapidly, though Dhaka-centric investment leaves rural areas underserved.

The power sector transformation—from regular blackouts a decade ago to 99% electrification today—demonstrates infrastructure achievement at scale. Yet the reliance on imported fossil fuels and limited renewable integration creates cost and environmental vulnerabilities. Bangladesh's infrastructure challenge is existential: can it build resilient, sustainable systems fast enough to accommodate continued growth and climate impacts, or will infrastructure deficits constrain development and worsen climate displacement?`,
    issues: [
      "Dhaka traffic congestion at catastrophic levels despite new metro",
      "Chittagong port bottleneck constraining garment export sector",
      "Annual monsoon flooding destroying road infrastructure",
      "Climate change threatening coastal infrastructure and displacement",
      "Sewage infrastructure minimal across rapidly growing cities",
      "Infrastructure building in flood zones from land scarcity"
    ]
  },
  {
    name: 'Barbados',
    country: 'Barbados',
    lat: 13.1939,
    lng: -59.5432,
    summary: `Barbados' infrastructure operates within Caribbean island constraints: a 430-square-kilometer island with 290,000 residents facing hurricane exposure, import dependence, and limited natural resources. The road network, totaling 1,600 kilometers, serves the island adequately by regional standards, yet congestion intensifies in Bridgetown and along the west coast tourism corridor. The absence of railways—removed decades ago—leaves the nation entirely road-dependent, with bus service providing public transit alongside route taxis and private vehicles.

The Grantley Adams International Airport serves as the primary gateway, handling 2.5 million passengers annually, predominantly tourists who sustain the economy. Recent terminal expansions maintain capacity, yet competition from other Caribbean destinations demands continuous infrastructure investment to remain competitive. The airport's single runway and limited expansion space create constraints that smaller islands cannot overcome—unlike Dubai or Singapore, Barbados cannot build its way to hub status.

Port infrastructure at Bridgetown serves both commercial shipping and cruise tourism. The deep-water harbor, modernized in recent decades, handles container imports that supply the island's consumption needs—Barbados imports virtually all manufactured goods, fuel, and much food. Cruise ship terminals host visitors, though the economic benefits remain disputed as passengers spend minimally ashore.

Digital infrastructure has advanced significantly, positioning Barbados as Caribbean tech hub. Submarine fiber optic cables provide high-speed connectivity, with government initiatives promoting remote work visas and digital nomad programs. The pandemic accelerated this positioning, with infrastructure reliability enabling Barbados to attract remote workers seeking tropical locations with First World connectivity. Yet the small domestic market limits private sector investment—government intervention proves essential for infrastructure provision.

Water infrastructure faces mounting pressure. The island depends on aquifer reserves and desalination, with chronic water shortages during dry seasons prompting rationing. Climate change threatens both freshwater recharge (through reduced rainfall) and infrastructure itself (through sea level rise and hurricane intensity). Coastal erosion accelerates, threatening beachfront tourism infrastructure that drives the economy.

Power generation depends entirely on imported fossil fuels, making electricity among the Caribbean's most expensive. Solar potential remains largely untapped despite abundant sunshine—grid integration challenges and initial capital costs constrain deployment. The recent commitment to 100% renewable energy by 2030 requires infrastructure transformation: solar arrays, battery storage, smart grid systems, and demand management—ambitious for an island economy still recovering from pandemic tourism collapse. Barbados' infrastructure future depends on climate adaptation: building resilience against storms and sea level rise while transitioning energy systems away from fossil fuel dependency.`,
    issues: [
      "Bridgetown congestion without transit alternatives to private vehicles",
      "Water scarcity requiring rationing during dry seasons",
      "Coastal erosion threatening tourism infrastructure",
      "Fossil fuel energy dependency creating expensive electricity",
      "Hurricane vulnerability requiring continuous infrastructure hardening",
      "Airport expansion constraints limiting aviation growth"
    ]
  },
  {
    name: 'Belarus',
    country: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    summary: `Belarus' infrastructure reflects its Soviet inheritance and authoritarian governance under Lukashenko—well-maintained roads and functioning public transit combined with digital infrastructure control and economic stagnation that limits modernization. The railway network, inherited from Soviet times, remains extensive and functional: 5,500 kilometers of track connecting Belarus to Russia, Ukraine, Poland, Lithuania, and Latvia, positioning the nation as transit corridor between EU and Russia. The Belarusian Railway achieves punctuality and maintains rolling stock to standards that shame some Western European operators, demonstrating that authoritarian efficiency can produce infrastructure competence.

Minsk's metro system, built in Soviet era, operates two lines moving 800,000 daily passengers through a city of 2 million. The system functions reliably—trains arrive with Moscow-like frequency, stations maintain cleanliness, and fares remain subsidized to absurdly low levels. Yet no expansion has occurred since Lukashenko consolidated power, reflecting broader economic stagnation. Above ground, Minsk maintains wide Soviet-era boulevards and extensive bus networks, creating mobility without the traffic congestion plaguing most post-Soviet capitals. The controlled economic growth that preserves this functionality also perpetuates poverty.

The M1 highway connecting the Polish border to Moscow through Minsk represents Belarus' strategic infrastructure reality: a transit corridor enabling Russia-EU trade while generating toll revenues. Recent highway modernization with Chinese financing upgrades this route to motorway standards, yet questions persist about debt sustainability and whether transit revenues justify investment.

Digital infrastructure operates under state control. Fiber optics reach urban areas, with 4G covering most of the country, yet the authoritarian regime weaponizes connectivity: internet shutdowns during protests, surveillance of communications, and throttling of VPN access demonstrate that infrastructure serves political control as much as economic development. The IT sector, surprisingly vibrant, navigates these constraints while contributing significantly to exports—Belarusian developers work remotely for international clients, though brain drain accelerates as political repression intensifies.

Industrial infrastructure, largely unchanged since Soviet collapse, faces obsolescence. Factories built in the 1970s operate inefficiently, sustained by Russian energy subsidies rather than modernization. The Belarusian model—authoritarian stability maintaining Soviet-era infrastructure—faces mounting strain: sanctions following the 2020 election crackdown and 2022 complicity in Ukraine invasion cut Belarus from Western technology and capital. The economic model relied on playing Russia against EU; infrastructure investments now depend entirely on Moscow and Beijing, with predictable consequences for sovereignty.

The fundamental question: can Belarus maintain infrastructure without the economic dynamism that elsewhere drives modernization? Soviet systems age, skilled workers emigrate, and import restrictions limit maintenance supplies. Authoritarian control may keep trains running on time, but cannot innovate or adapt as global infrastructure paradigms shift toward sustainability and digitalization that require openness Belarus deliberately rejects.`,
    issues: [
      "Economic stagnation limiting infrastructure modernization despite maintenance",
      "Digital infrastructure weaponized for political control and surveillance",
      "Industrial infrastructure obsolescence with aging Soviet-era factories",
      "Sanctions isolation cutting access to Western technology and capital",
      "Brain drain as skilled workers emigrate from repression",
      "Highway debt sustainability questions from Chinese financing"
    ]
  },
  {
    name: 'Belgium',
    country: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgium's infrastructure paradox epitomizes the nation's broader dysfunction: dense, extensive networks built over centuries yet plagued by deferred maintenance, political fragmentation, and chronic underinvestment. The railway network, managed by SNCB, operates 3,600 kilometers serving Europe's highest passenger density outside city-states. Trains connect every significant Belgian settlement, yet punctuality rates rank among Western Europe's worst. Chronic delays, aging rolling stock, and infrastructure failures reflect decades of prioritizing coverage over quality.

The highway system, remarkably, remains entirely toll-free—a rarity in Western Europe that reflects Belgian compromise between Flemish and Walloon regions. The A10 ring around Brussels and radial motorways create Europe's most illuminated road network (visible from space), yet pavement quality deteriorates from inadequate maintenance budgets. The absence of tolls means funding comes from general taxation, creating perverse incentives: everyone benefits from roads but no constituency advocates for adequate maintenance spending.

Brussels, as both Belgian capital and EU headquarters, operates transit infrastructure worthy of its international status: metro, tram, and bus networks integrated with surrounding Flemish and Walloon systems. Yet political fragmentation—Brussels Region separate from Flemish Brabant despite functional integration—complicates planning. The recent metro extension toward the airport demonstrates what's possible, yet delays and cost overruns illustrate execution challenges.

Port infrastructure at Antwerp ranks among Europe's largest, handling 14 million containers annually and serving as gateway for cargo flowing up the Rhine to Germany. The Deurganckdok container terminal and recent tidal lock expansion maintain competitiveness against Rotterdam, yet political conflicts between Flemish regional government (controlling the port) and federal authorities complicate infrastructure decision-making.

Digital infrastructure operates to high standards—Belgium's small size and density enable efficient fiber optic deployment, with 5G coverage advancing rapidly. Yet here too, fragmentation appears: telecommunications regulation involves federal, regional, and European layers creating complexity that larger, more centralized states avoid.

The fundamental Belgian infrastructure problem is governance: Flemish-Walloon divisions, Brussels' special status, and federal-regional tensions produce a decision-making environment where necessary investments stall for years. The RER suburban rail project around Brussels, obvious decades ago, proceeds glacially through political haggling. Infrastructure here suffers not from Belgian incompetence—engineers are world-class—but from political paralysis that prevents coherent planning and sustained investment. Until Belgium resolves its constitutional crisis, infrastructure will continue reflecting national dysfunction: extensive but deteriorating, well-designed but poorly maintained, connecting Europe's heart yet unable to coordinate its own development.`,
    issues: [
      "Railway punctuality crisis despite extensive network coverage",
      "Road maintenance deficit with deteriorating toll-free highway system",
      "Flemish-Walloon political fragmentation complicating infrastructure planning",
      "RER suburban rail delays from political deadlock",
      "Brussels infrastructure coordination across regional boundaries",
      "Governance paralysis preventing sustained infrastructure investment"
    ]
  },
  {
    name: 'Belize',
    country: 'Belize',
    lat: 17.1899,
    lng: -88.4976,
    summary: `Belize's infrastructure reflects its small population (400,000) spread across challenging terrain: Caribbean coast, rainforest interior, and mountain borderlands with Guatemala. The road network totals barely 3,000 kilometers, with the Northern, Western, and Southern Highways connecting major settlements. The Northern Highway links Belize City to Mexico; the Western reaches to Guatemala; the Southern extends toward Honduras—these corridors define national connectivity, yet large areas remain accessible only by unpaved roads impassable during rainy season.

Belize City, the commercial center housing 60,000, operates without urban transit infrastructure—no buses, metro, or comprehensive road networks. The city sprawls along coastal lowlands vulnerable to hurricanes, as demonstrated by Hurricane Hattie in 1961 that prompted capital relocation inland to Belmopan. Yet Belize City retains economic primacy, with infrastructure investment minimal. Traffic congestion remains manageable only because private vehicle ownership stays low from poverty—as incomes rise, road infrastructure will prove inadequate.

The absence of railways means Belize depends entirely on road transport and coastal shipping. The Port of Belize City handles commercial cargo, yet limited capacity and shallow draft constrain vessel sizes. Most imports arrive through Guatemala or Mexico and truck in—inefficient but unavoidable given Belize's small market and limited port infrastructure.

Philip Goldson International Airport serves as primary gateway, handling tourism traffic that sustains the economy. Recent terminal expansions maintain adequate capacity, yet Belize cannot compete as regional hub—its market is too small, geography too peripheral. Tourist infrastructure along the coast and cayes receives investment—piers, airports, and resorts—yet this creates dual economy where coastal tourism infrastructure contrasts sharply with interior poverty and minimal services.

Digital infrastructure advances unevenly. Fiber optics reach Belize City and tourist areas, with 4G covering populated zones, yet rural areas depend on satellite or nothing. The small market means high costs—internet and mobile service rank among Central America's most expensive relative to service quality.

Power infrastructure depends substantially on imports from Mexico, supplemented by hydroelectric generation and diesel. The small scale precludes the infrastructure diversity that larger nations achieve—Belize depends on external connections for energy security, creating vulnerability to regional disruptions.

The fundamental Belizean infrastructure challenge is scale: too small to justify major investments, too poor to afford alternatives, too dispersed to serve efficiently. Climate change intensifies this: hurricanes threaten coastal infrastructure, while sea level rise threatens to inundate Belize City and low-lying areas where infrastructure concentrates. The nation must choose between expensive climate adaptation or managed retreat—both beyond its fiscal capacity without external assistance.`,
    issues: [
      "Road network minimal with large areas inaccessible in rainy season",
      "Belize City coastal vulnerability to hurricanes and sea level rise",
      "Port capacity constraints limiting commercial shipping",
      "Rural infrastructure deficit creating dual economy with coastal tourism",
      "Expensive digital infrastructure from small market size",
      "Energy dependency on Mexican imports creating vulnerability"
    ]
  },
  {
    name: 'Benin',
    country: 'Benin',
    lat: 9.3077,
    lng: 2.3158,
    summary: `Benin's infrastructure reflects its position as West Africa's narrow coastal corridor—650 kilometers north-south but barely 125 kilometers wide, stretching from the Atlantic to Niger border. The Port of Cotonou defines national infrastructure strategy: serving as landlocked Niger's primary outlet to the sea, the port handles transit trade that generates significant revenues yet creates bottlenecks. Recent Chinese-financed expansion increased container capacity, but road infrastructure connecting port to interior and Niger border remains inadequate, with heavy truck traffic destroying roads faster than maintenance can repair them.

The RNIE2 highway from Cotonou north to Niger represents Benin's primary infrastructure corridor—economic lifeline for both nations yet chronically congested with overloaded trucks. The government's ambition to position Benin as West African logistics hub requires sustained highway investment and maintenance that competes with other development priorities. The recent completion of sections to modern standards demonstrates potential, yet thousands of kilometers require similar treatment.

Cotonou's explosive growth—from 600,000 to over 2 million this century—overwhelms infrastructure capacity. The city sprawls across lagoons and wetlands, creating drainage challenges that monsoons transform into flooding disasters. The absence of metro or BRT leaves residents dependent on informal minibuses and motorcycle taxis (zemidjans) that congest inadequate road networks. Recent efforts to organize zemidjan operations show promise, yet comprehensive urban transit planning remains absent.

The railway network, built in colonial era, has largely collapsed. The line from Cotonou north to Parakou operates intermittently with obsolete rolling stock, moving minimal freight and passengers. Grand plans for regional railway connections to Niger and Nigeria circle endlessly without realization—the capital requirements exceed Benin's capacity while political will focuses on roads over rails.

Digital infrastructure advances from a low base. Mobile phone penetration reaches 80%, with 4G covering major cities, yet rural areas remain disconnected. Fiber optic deployment concentrates in Cotonou, leaving northern regions dependent on satellite links. The government's digital transformation agenda aims for e-government and expanded connectivity, though implementation lags rhetoric.

Power infrastructure represents acute crisis. Benin depends substantially on imports from Nigeria and Ghana, supplemented by minimal domestic generation. Frequent power outages constrain economic activity—businesses operate generators, adding costs and emissions. The planned renewable energy projects promise improvement, yet execution remains uncertain.

Benin's infrastructure future hinges on whether it can capitalize on its geography: a stable, democratic West African nation with Atlantic access serving landlocked neighbors. Success requires port efficiency, reliable logistics corridors, and power infrastructure that current systems cannot deliver. Without sustained investment and maintenance, Benin's geographic advantage will evaporate as Nigeria develops its own northern corridors or Niger shifts trade to Togo.`,
    issues: [
      "Port-to-interior highway deterioration from heavy truck traffic",
      "Cotonou flooding from inadequate drainage in wetland sprawl",
      "Power dependency on imports with frequent outages",
      "Railway network collapse with minimal freight service",
      "Rural digital isolation despite urban 4G coverage",
      "Urban transit relying entirely on informal motorcycle taxis"
    ]
  },
  {
    name: 'Bhutan',
    country: 'Bhutan',
    lat: 27.5142,
    lng: 90.4336,
    summary: `Bhutan's infrastructure confronts perhaps the world's most extreme topography: a landlocked Himalayan kingdom where settlements perch in valleys between 7,000-meter peaks, connected by roads that switchback through landscapes of extraordinary beauty and engineering challenge. The 18,000-kilometer road network, mostly single-lane and unpaved, requires constant maintenance against landslides, glacial floods, and monsoon erosion. The journey from Indian border to Thimphu, the capital, covers barely 170 kilometers yet requires eight hours—this geography defines infrastructure economics and shapes national development.

Thimphu, home to 115,000 of Bhutan's 750,000 population, operates without traffic lights—instead, white-gloved police direct vehicles at major intersections, exemplifying Bhutan's approach to development: modernization within cultural values. The capital's road infrastructure, recently expanded, accommodates growing vehicle ownership, yet the deliberate policy limiting tourist numbers prevents the infrastructure strain seen in Nepal. The absence of railways reflects cost-benefit reality: Bhutan's terrain makes railway construction prohibitively expensive relative to population and freight volumes.

The East-West Highway, Bhutan's primary infrastructure achievement, connects the Indian border with eastern districts through over 600 kilometers of mountain roads. Sections remain dangerously narrow, with sheer drops and minimal barriers, yet the highway enables national integration impossible before its construction. Recent upgrades to two-lane standards on sections demonstrate continued investment, though completing the entire route to modern standards requires decades and enormous capital.

Digital infrastructure shows remarkable advancement. Mobile phone penetration exceeds 95%, with 4G covering most valleys where population concentrates. The government's e-government initiatives and broadband expansion reflect recognition that digital infrastructure can overcome geographic isolation more cost-effectively than physical transport. Yet remote settlements in high valleys remain disconnected, and dependence on Indian telecom providers for international connectivity creates vulnerability.

Hydroelectric infrastructure represents Bhutan's most consequential development: abundant glacial rivers descending thousands of meters generate power that Bhutan exports to India, creating revenue streams that sustain the kingdom. The Punatsangchhu and Mangdechhu projects add gigawatts of capacity, positioning hydropower as economic foundation. Yet climate change threatens this model: glacial melt accelerates, threatening long-term water flows, while glacial lake outburst floods (GLOFs) endanger downstream infrastructure.

Druk Air, the national airline, provides essential connectivity—many areas remain more accessible by air than road, yet the single airport at Paro presents extraordinary challenges. Pilots require special certification to land on the short runway surrounded by mountains, limiting operations and constraining tourism infrastructure. The upcoming second airport in central Bhutan will transform accessibility, yet construction in such terrain demands years.

Bhutan's infrastructure philosophy—gross national happiness over GDP—produces development patterns unlike anywhere else: careful, limited growth prioritizing sustainability and culture over maximizing throughput. Whether this model proves durable as younger generations demand greater connectivity remains uncertain, yet for now, Bhutan demonstrates that infrastructure choices reflect values, not inevitabilities.`,
    issues: [
      "Extreme Himalayan topography making infrastructure extraordinarily expensive",
      "Road network vulnerability to landslides and glacial lake outburst floods",
      "East-West Highway sections remaining dangerously narrow",
      "Paro airport constraints limiting tourism and connectivity",
      "Hydroelectric dependency threatened by climate change and glacial melt",
      "Remote settlement isolation despite digital infrastructure advancement"
    ]
  },
  {
    name: 'Bolivia',
    country: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `Bolivia's infrastructure must serve one of South America's most geographically fragmented nations: Andean highlands where two-thirds of the population concentrates, tropical lowlands in the east with surging agricultural development, and the vast, sparsely populated Chaco. The nation's landlocked status—losing coastal territory to Chile in the 19th century—fundamentally shapes infrastructure strategy: connections to Pacific and Atlantic ports through Peru, Chile, and Brazil define economic viability, yet political tensions and infrastructure gaps constrain efficient logistics.

La Paz and El Alto, forming a metropolitan area of 2 million spanning from 4,000-meter Altiplano to La Paz's valley 400 meters lower, operate the world's highest urban cable car network. The Mi Teleférico system, built since 2014, now operates 10 lines moving 300,000 daily passengers, transforming mobility in a city where topography makes road-based transit extraordinarily difficult. This represents innovative infrastructure thinking: rather than expensive road tunnels or elevated highways, aerial cable cars overcome vertical geography efficiently. The system has inspired similar projects globally, demonstrating that developing nations can pioneer infrastructure solutions rather than merely importing Western models.

The road network remains Bolivia's Achilles heel. The primary corridors connecting La Paz to Cochabamba and Santa Cruz achieve basic standards, yet maintenance proves inadequate—heavy rains trigger landslides that close roads for weeks. The infamous "Death Road" (Yungas Road) was finally bypassed in 2006, yet numerous other dangerous routes persist. The lowland road network in Santa Cruz department, serving booming soybean agriculture, improves steadily, yet connections between highlands and lowlands require navigating precipitous mountain descents that constrain logistics.

The absence of Pacific coast access forces Bolivian exports through Peru or Chile, adding cost and political vulnerability. The recent Peru agreement to develop the port of Ilo for Bolivian use promises improved access, yet infrastructure connecting highland Bolivia to Ilo requires enormous investment through challenging Andean terrain.

Railway infrastructure exists but functions minimally. The Eastern and Western networks remain unconnected—a symptom of Bolivia's fragmentation. Freight rail moves some minerals and agricultural products, yet volume remains limited. The ambitious transcontinental railway connecting Brazil's Atlantic ports to Peru's Pacific terminals through Bolivia circulates as vision without concrete progress.

Digital infrastructure advances unevenly. Urban areas achieve good 4G coverage, with fiber optics in major cities, yet rural highlands and lowlands remain underserved. The government's satellite program aimed to expand coverage, though results disappoint. Power infrastructure depends on hydroelectric and natural gas generation, with the Plurinational State investing heavily in both—the San José and Misicuni projects add capacity, though distribution infrastructure in rural areas lags.

Bolivia's infrastructure challenge is integration: connecting the fragmented nation's disparate regions into functional whole while overcoming landlocked geography. The political instability and ideological swings that characterize Bolivian governance complicate sustained infrastructure planning—projects start enthusiastically and abandon mid-stream, resources flow to political priorities over technical requirements, and maintenance receives minimal attention. Until political consensus emerges around infrastructure as national priority transcending partisan cycles, Bolivia will struggle to overcome the geographic and historical obstacles that constrain development.`,
    issues: [
      "Landlocked status forcing expensive transit through neighbors for trade",
      "Highland-lowland road connections vulnerable to landslides",
      "Railway network fragmented between Eastern and Western systems",
      "Pacific port access constraints despite Peru agreements",
      "Rural infrastructure deficit in highlands and lowlands",
      "Political instability preventing sustained infrastructure planning"
    ]
  },
  {
    name: 'Bosnia and Herzegovina',
    country: 'Bosnia and Herzegovina',
    lat: 43.9159,
    lng: 17.6791,
    summary: `Bosnia and Herzegovina's infrastructure remains scarred by the 1990s war that destroyed much of the built environment and created political fragmentation that prevents coherent planning. The Dayton Agreement's two-entity structure—the Federation of Bosnia and Herzegovina and Republika Srpska—produces infrastructure governance that defies rationality: railways operated by three separate companies, highway networks that don't connect across entity boundaries, and urban planning that serves ethnic separation over functional integration.

The highway network, rebuilt since the war with international financing, now connects Sarajevo to the Croatian coast via the A1, with the Corridor Vc project extending north toward Hungary. These investments demonstrate what's possible with EU pre-accession funding, yet political tensions delay completion. The recent opening of sections through challenging mountain terrain shows engineering competence, but the entity-level contracting and coordination requirements triple costs and timelines relative to normal infrastructure governance.

Sarajevo's infrastructure reflects the capital's constrained valley setting and war legacy. The tram network, destroyed during the siege, has been partially restored but operates with aging rolling stock. The city's airport serves as primary international gateway, recently expanded yet still limited by valley topography that constrains runway extensions. Traffic congestion intensifies as private vehicle use surges—Ottoman-era street patterns in Baščaršija combined with socialist-era sprawl create mobility challenges that neither entity government adequately addresses.

Railway infrastructure epitomizes dysfunction. The network connects Bosnia to neighbors, yet three separate railway companies operate within the country—the Federation company, the Republika Srpska company, and the separate Brčko District operation. Coordination proves nearly impossible, service quality degrades, and freight modal share collapses. Proposals to create unified national railway company founder on political opposition from Serb nationalists fearing centralization.

Digital infrastructure shows surprising functionality. 4G coverage reaches most inhabited areas, with fiber optic deployment in cities. However, the mountainous terrain creates coverage gaps, and the small, fragmented market keeps costs high. Power infrastructure depends substantially on coal-fired plants, with hydroelectric potential underutilized due to environmental concerns and investment deficits.

Water infrastructure in Sarajevo achieves good quality, though frequent droughts in summer require rationing. Newer settlements sprawl up valley slopes without adequate sewage connections, creating pollution that threatens the Bosna River and downstream communities.

The fundamental challenge is political: until Bosnia's entities either integrate infrastructure planning or formally separate, the nation will operate inefficient, duplicative systems. The EU accession process provides some coordination pressure, yet nationalist politics repeatedly trump technical rationality. Infrastructure here reveals that political settlements matter more than engineering or funding—billions in international assistance cannot overcome governance designed for dysfunction rather than development.`,
    issues: [
      "Entity-level fragmentation creating duplicate infrastructure systems",
      "Three separate railway companies preventing network coordination",
      "Highway corridor completion delays from political tensions",
      "Sarajevo valley topography constraining airport and urban expansion",
      "Coal dependency without adequate renewable transition planning",
      "Urban sprawl proceeding without sewage infrastructure"
    ]
  },
  {
    name: 'Botswana',
    country: 'Botswana',
    lat: -22.3285,
    lng: 24.6849,
    summary: `Botswana's infrastructure reflects the nation's unusual trajectory: post-independence diamond wealth invested in roads, water systems, and services that make it sub-Saharan Africa's infrastructure standout. The road network totals 18,000 kilometers, with 7,000 paved—extraordinarily high for a nation of 2.4 million spread across Kalahari semi-desert. The Trans-Kalahari Highway connecting Gaborone to Namibia's Walvis Bay port provides landlocked Botswana with Atlantic access, while roads south to South Africa and east to Zimbabwe create logistics options rare for African landlocked nations.

Gaborone's infrastructure operates to First World standards unusual in the region: paved roads, functioning traffic lights, street lighting, and water supply that rarely fails. The capital's 230,000 residents experience infrastructure reliability that Harare or Lusaka cannot match, reflecting the diamonds-to-development model that characterized Botswana's first four decades. Yet the city sprawls in low-density patterns that automobile dependency encourages—no metro, minimal bus service, and limited walking infrastructure despite manageable climate.

The absence of railways to major settlements represents a puzzling gap. The historic railway from South Africa to Zimbabwe passes through eastern Botswana, serving Francistown, yet Gaborone lacks rail connection despite being the capital. Recent plans to extend rail to Gaborone and develop a trans-Kalahari line to Namibia circulate without execution—Botswana's low population density makes freight volumes insufficient to justify investment, while passenger demand remains minimal.

Water infrastructure represents Botswana's most impressive achievement and greatest vulnerability. The North-South Carrier, a 360-kilometer pipeline from Letsibogo Dam to Gaborone, ensures capital water security despite semi-arid climate. Yet climate change threatens this model: declining rainfall reduces reservoir recharge while demand grows. The planned desalination projects for emergency backup reveal the concern, though costs for landlocked desalination (pumping from Atlantic or Indian Ocean) prove prohibitive.

Digital infrastructure positions Botswana as southern African hub. Fiber optic coverage reaches all major settlements, with government investments ensuring rural connectivity. 4G covers 80% of the population—impressive given dispersed settlement patterns. The stable governance and infrastructure reliability attract data centers and tech companies, creating economic diversification as diamond revenues plateau.

Power infrastructure depends substantially on imports from South Africa and coal plants, with minimal renewable deployment despite abundant solar potential. The Morupule Coal Plant, repeatedly delayed and over budget, exemplifies the infrastructure execution challenges that even well-governed Botswana faces. The nation's electricity demand exceeds domestic generation, creating dependency on South African grid—vulnerable to loadshedding and price volatility.

Botswana's infrastructure future demands the transition from diamond-funded development to sustainable model. As mineral revenues decline, can the nation maintain infrastructure quality while expanding access to underserved rural areas? The dual challenges of climate adaptation (water scarcity, temperature extremes) and economic diversification (moving beyond minerals) will test whether Botswana's infrastructure advantage proves durable or dependent on exhaustible resource wealth.`,
    issues: [
      "Water supply threatened by climate change despite pipeline investments",
      "Gaborone lacking railway connection despite being capital",
      "Automobile dependency from low-density sprawl without transit",
      "Power dependency on South African imports and coal",
      "Rural service costs in dispersed settlement patterns",
      "Infrastructure sustainability as diamond revenues plateau"
    ]
  },
  {
    name: 'Brunei',
    country: 'Brunei',
    lat: 4.5353,
    lng: 114.7277,
    summary: `Brunei's infrastructure reflects oil wealth distributed across a small population: 440,000 people enjoying per capita incomes among Asia's highest, yet creating an infrastructure environment optimized for automobiles rather than sustainable urbanism. The road network, immaculately maintained, connects the capital Bandar Seri Begawan to the enclave of Temburong through Limbang, Malaysian territory—requiring two border crossings for a domestic journey. The recent completion of the Temburong Bridge, a 30-kilometer span crossing Brunei Bay, eliminates Malaysian transit dependency while creating Southeast Asia's longest bridge—an infrastructure achievement motivated more by sovereignty than cost-benefit economics.

Bandar Seri Begawan's infrastructure epitomizes petro-state urbanism: wide highways, ample parking, and negligible public transit. The capital operates without metro, tram, or comprehensive bus networks—private vehicle ownership exceeds 500 per 1,000 residents, among the world's highest. The result is a low-density, car-dependent urban form where walking proves nearly impossible and cycling dangerous. Recent efforts to establish bus service remain minimal, reflecting cultural preferences and policy inertia. For a nation committed to emissions reduction, the transportation infrastructure creates locked-in carbon intensity difficult to reverse.

The absence of railway infrastructure across Brunei seems irrational given the nation's wealth, yet the small population and geographic fragmentation make passenger or freight rail economically unviable. All logistics depend on roads and the ports at Muara and Kuala Belait, handling both commercial shipping and offshore oil industry support.

Digital infrastructure operates to developed-world standards: fiber optic coverage reaches virtually all premises, with 5G deployment advancing. The small territory enables comprehensive infrastructure provision impossible in larger nations, though this also creates vulnerability—any systemwide failure affects everyone simultaneously. Brunei's investments in smart nation initiatives and digital government demonstrate how oil wealth can fund infrastructure that less wealthy nations cannot afford.

Airport infrastructure at Brunei International serves as regional hub aspirations, though traffic remains modest relative to Singapore or Kuala Lumpur. The airport's recent expansion anticipates growth that materialized partially, yet Brunei's geographic position—peripheral to major traffic flows—limits hub potential regardless of infrastructure quality.

Power generation depends entirely on natural gas from offshore fields, producing abundant, cheap electricity while creating fossil fuel dependency. Brunei's minimal renewable energy deployment seems incongruous given climate rhetoric, yet the economic incentives favor gas consumption. Water infrastructure benefits from high rainfall—no scarcity concerns despite tropical climate.

The fundamental Bruneian infrastructure question is post-oil futures: current systems assume continued hydrocarbon revenues funding generous subsidies and maintenance. As reserves deplete or energy transitions reduce demand, can Brunei maintain infrastructure to current standards from alternative revenue sources? The car-dependent urban form particularly creates vulnerability—without public transit infrastructure, the nation depends on cheap fuel forever. Infrastructure choices made during oil abundance may prove costly burdens in coming decades.`,
    issues: [
      "Car-dependent infrastructure with minimal public transit",
      "Locked-in carbon emissions from automobile-centric planning",
      "Domestic transit requiring crossings through Malaysian territory",
      "Complete fossil fuel dependency for power despite wealth",
      "Infrastructure sustainability threatened by eventual oil depletion",
      "Urban sprawl creating expensive-to-serve dispersed settlement"
    ]
  },
  {
    name: 'Bulgaria',
    country: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    summary: `Bulgaria's infrastructure reflects its position as EU's poorest member: access to structural funds enabling modernization, yet endemic corruption and weak governance ensuring slow progress and cost overruns. The highway network, expanding since EU accession in 2007, now includes the A1 Sofia-Burgas corridor and portions of the A2 Sofia-Varna route, yet completion remains years away. These highways, co-financed by EU, often cost double or triple comparable projects elsewhere due to corruption, poor contracting, and political interference—the infrastructure exists, but at what price?

Sofia's infrastructure reflects the capital's growth to 1.3 million residents: a functioning metro system with three lines, extensive bus and tram networks, and generally adequate road capacity. The metro expansion, EU-funded, proceeds with characteristic delays yet demonstrates continued investment. The city's socialist-era infrastructure legacy—wide boulevards, district heating systems, extensive public housing—requires maintenance that municipal budgets struggle to provide.

The railway network, inherited from communist era, deteriorates from chronic underinvestment. Bulgarian State Railways operates 4,000 kilometers of mostly single-track, non-electrified lines with obsolete rolling stock achieving speeds that shame modern rail systems. The journey from Sofia to Burgas, barely 400 kilometers, requires six hours—driving takes five. Proposals for high-speed rail circulate without realization, while basic maintenance receives insufficient funding. The result is collapsing freight modal share and passenger service so poor that buses dominate intercity travel.

Port infrastructure at Varna and Burgas provides Black Sea access, with recent Chinese investment in Varna positioning it as potential Balkan logistics hub. Yet poor road and rail connections to interior Bulgaria and beyond constrain throughput. The EU's Orient/East-Med Corridor envisions freight from Piraeus to Germany via Bulgaria, but current infrastructure cannot handle projected volumes.

Digital infrastructure shows Bulgaria's paradoxical strengths: one of Europe's fastest average internet speeds at affordable prices, with extensive fiber deployment even in smaller cities. The tech sector, concentrated in Sofia and Plovdiv, thrives on this connectivity, providing economic bright spots amid broader stagnation. Yet rural areas remain underserved, and the brain drain of educated young Bulgarians to Western Europe depletes the human capital that might leverage infrastructure investments.

Power infrastructure depends on the Kozloduy Nuclear Plant (providing 35% of electricity), coal-fired generation, and minimal renewables despite abundant solar and wind potential. The nuclear plant's future remains uncertain—international pressure for closure conflicts with energy security concerns. The coal dependency conflicts with EU climate commitments, requiring a transition that Bulgaria's political economy makes extraordinarily difficult.

Bulgaria's fundamental infrastructure problem is corruption: billions in EU funds flow to modernization projects that cost multiples of reasonable estimates while delivering questionable quality. Until governance improves, infrastructure investment will enrich oligarchs more than develop the nation. The EU accession that enabled funding also exposed Bulgaria's institutional weaknesses—infrastructure requires not just capital but competent, honest governance that current systems struggle to provide.`,
    issues: [
      "Highway construction costs 2-3x comparable projects from corruption",
      "Railway deterioration with speeds and service quality declining",
      "Port connections to interior inadequate for logistics hub potential",
      "Coal-to-renewables transition stalling despite EU requirements",
      "Rural digital divide despite urban fiber deployment",
      "Corruption inflating infrastructure costs and reducing quality"
    ]
  },
  {
    name: 'Burkina Faso',
    country: 'Burkina Faso',
    lat: 12.2383,
    lng: -1.5616,
    summary: `Burkina Faso's infrastructure reflects its status as one of the Sahel's poorest nations: landlocked, dependent on coastal neighbors for trade access, and lacking the oil or mineral wealth that elsewhere funds development. The road network totals 15,000 kilometers, yet barely 3,500 are paved—the seasonal rains transform unpaved roads to impassable mud, isolating rural communities for months annually. The primary corridors connecting Ouagadougou to the ports of Tema (Ghana), Abidjan (Côte d'Ivoire), and Lomé (Togo) define economic viability, yet transit costs per container remain among Africa's highest.

Ouagadougou's explosive growth—from 1 million to 3 million this century—overwhelms minimal infrastructure. The capital sprawls in unplanned patterns across the semi-arid plateau, with informal settlements lacking water, sewage, or paved roads. The absence of public transit leaves residents dependent on motorcycle taxis (kabu-kabu) and informal minibuses operating chaotically on deteriorating roads. Recent efforts to establish bus rapid transit remain unrealized, while traffic congestion intensifies as middle-class vehicle ownership grows.

The complete absence of railways isolates Burkina Faso from regional networks and efficient freight movement. Colonial-era plans to connect Ouagadougou to Abidjan railway existed but never materialized—instead, all freight moves by road, destroying highways and increasing costs. The recent agreements with Côte d'Ivoire to extend the Abidjan rail line to Ouagadougou promise transformation if realized, yet execution requires capital that both nations lack without external financing.

Digital infrastructure advances from minimal base. Mobile phone penetration approaches 80%, with 3G covering major cities, yet rural areas remain disconnected. The landlocked geography requires all internet traffic to transit coastal nations, adding cost and creating dependency. Fiber optic deployment concentrates in Ouagadougou, leaving secondary cities dependent on microwave links.

Power infrastructure represents acute crisis. Electrical access reaches barely 20% of the population—among the world's lowest—with Ouagadougou experiencing frequent outages despite being the capital. The nation depends on imports from Ghana and Côte d'Ivoire for over half its electricity, supplemented by limited domestic thermal generation. The abundant solar potential remains largely untapped despite falling costs—initial capital requirements and weak governance prevent deployment.

Water infrastructure demands urgent attention: only 45% of Burkinabè access improved water sources, with urban areas faring better than rural. Ouagadougou's reservoirs supply the capital intermittently, with residents storing water for inevitable outages. The Sahel's increasing aridity under climate change threatens even this minimal infrastructure—rainfall declines while demand surges.

The ongoing insurgency in northern and eastern regions has devastated infrastructure and displaced over 2 million people, creating humanitarian crisis. Roads close, health clinics and schools abandon, and what minimal infrastructure existed deteriorates. Burkina Faso faces catastrophic infrastructure deficits compounded by security collapse—without stability, no infrastructure investment proves durable, while infrastructure absence perpetuates poverty and instability. The nation exemplifies the development trap: too poor to build infrastructure, yet unable to develop without it.`,
    issues: [
      "Only 23% of roads paved, becoming impassable in rainy season",
      "Complete railway absence forcing expensive road freight",
      "Electrical access at 20% with capital experiencing frequent outages",
      "Water infrastructure serving less than half the population",
      "Insurgency devastating northern infrastructure and displacing millions",
      "Landlocked transit costs among Africa's highest"
    ]
  },
  {
    name: 'Cambodia',
    country: 'Cambodia',
    lat: 12.5657,
    lng: 104.9910,
    summary: `Cambodia's infrastructure rebuilding after the Khmer Rouge devastation represents one of Southeast Asia's most dramatic transformations, yet progress remains uneven and compromised by corruption. The road network has expanded from minimal functionality in the 1990s to over 12,000 kilometers of paved roads, with National Highway 1 connecting Phnom Penh to Vietnam and National Highway 4 to the coast exemplifying Chinese-financed modernization. These corridors enable the garment sector that generates 70% of exports, yet secondary roads remain poor and rural areas isolated during monsoon season.

Phnom Penh's explosive growth—from 1 million to 2.3 million since 2000—overwhelms infrastructure capacity. The capital operates without metro or comprehensive public transit, relying on tuk-tuks, motorcycles, and private vehicles that create worsening congestion. Recent Chinese financing for an elevated light rail line promises relief, yet concerns about debt sustainability and actual ridership demand remain unaddressed. The city sprawls chaotically, with lakefront and riverfront developments displacing the poor while failing to provide adequate infrastructure for new construction.

The railway network, destroyed under the Khmer Rouge and neglected for decades, has been partially restored. The line from Phnom Penh to Sihanoukville reopened in 2017, with Thai border connections enabling regional freight. Yet service quality remains poor, speeds low, and freight volumes minimal—the investments showcase Chinese infrastructure financing but generate limited economic return. The passenger service between Phnom Penh and Sihanoukville attracts tourists but few Cambodians, who overwhelmingly prefer buses.

Sihanoukville's transformation into Chinese-dominated casino city demonstrates infrastructure's dark potential: rapid construction of high-rises, roads, and casinos on what was a sleepy beach town, often without adequate environmental assessment or sewage systems. The port expansion positions Sihanoukville as Cambodia's primary gateway, yet the city's chaotic development creates sustainability questions—infrastructure built quickly often fails equally fast without proper maintenance.

Digital infrastructure advances rapidly in cities. 4G coverage reaches 95% of the population, with Phnom Penh enjoying fiber optic deployment. Yet rural areas lag severely, and Cambodia's dependence on neighboring countries for internet transit creates vulnerability. The tech sector remains nascent compared to Vietnam or Thailand, partly from infrastructure deficits in power and connectivity reliability.

Power infrastructure struggles to keep pace with demand. Cambodia depends substantially on imports from Thailand, Laos, and Vietnam, supplemented by domestic hydroelectric and coal plants. Frequent power outages constrain economic activity, while the shift toward coal-fired generation creates environmental concerns. The Mekong dams, both in Cambodia and upstream in China and Laos, threaten fisheries that sustain millions, demonstrating infrastructure's potential to destroy as much as develop.

Cambodia's infrastructure future remains uncertain: Chinese financing enables rapid construction, but at what cost? Debt sustainability questions mount, corruption ensures projects cost multiples of reasonable estimates, and maintenance receives minimal attention. Until Cambodia addresses governance weaknesses, infrastructure will continue enriching elites more than developing the nation.`,
    issues: [
      "Phnom Penh congestion without metro despite rapid growth",
      "Chinese-financed rail generating minimal ridership or freight volumes",
      "Sihanoukville chaotic development without environmental safeguards",
      "Power outages from insufficient domestic generation capacity",
      "Mekong dam threats to fisheries sustaining millions",
      "Corruption inflating infrastructure costs and ensuring poor maintenance"
    ]
  }
];

async function main() {
  console.log('Starting infrastructure summary generation for Afghanistan to Cambodia...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const data of infrastructureSummaries) {
    try {
      console.log(`Processing ${data.name}...`);

      // Check if summary already exists
      const existing = await prisma.locationSummary.findFirst({
        where: {
          name: data.name,
          type: 'country',
          category: 'infrastructure'
        }
      });

      if (existing) {
        console.log(`  ⚠️  ${data.name} already has infrastructure summary, skipping`);
        continue;
      }

      // Create the summary
      await prisma.locationSummary.create({
        data: {
          name: data.name,
          type: 'country',
          country: data.country,
          lat: data.lat,
          lng: data.lng,
          category: 'infrastructure',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]), // Empty stories array
          storyCount: 0,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      });

      console.log(`  ✓ ${data.name} infrastructure summary created (${data.summary.length} chars, ${data.issues.length} issues)`);
      successCount++;

    } catch (error) {
      console.error(`  ✗ Error processing ${data.name}:`, error);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Infrastructure Summary Generation Complete');
  console.log('='.repeat(60));
  console.log(`✓ Successfully created: ${successCount} summaries`);
  console.log(`✗ Errors: ${errorCount}`);
  console.log(`Total processed: ${infrastructureSummaries.length} countries`);
  console.log('='.repeat(60));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
