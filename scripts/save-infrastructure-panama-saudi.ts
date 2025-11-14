import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const infrastructureSummaries = {
  'Panama': {
    summary: `Panama's infrastructure identity is defined by a single transformative asset: the Panama Canal. The $5.25 billion expansion completed in 2016 doubled capacity, allowing Neo-Panamax vessels carrying 14,000 containers—triple the original locks' capacity. This engineering marvel generates $4 billion annually, representing 6% of GDP and funding much of the nation's infrastructure development. The Canal isn't merely infrastructure; it's the geographic and economic organizing principle of the entire nation.

Yet Panama City's explosive growth—from 700,000 to 1.9 million in three decades—has outpaced infrastructure planning. The Metro system, inaugurated in 2014 as Central America's first, now operates three lines covering 34 kilometers, moving 300,000 daily passengers. Line 3's elevated monorail, opening in 2024, extends rapid transit to the western suburbs. This is competent metropolitan infrastructure, though constrained by the narrow isthmus geography that funnels all urban growth along a single corridor.

Road infrastructure reflects Panama's service economy focus. The Corridor Sur and Norte urban expressways ease Panama City congestion, while the Pan-American Highway remains the primary land link to South America. The Tocumen International Airport expansion—a $1.8 billion project adding capacity to 25 million passengers—positions Panama as Latin America's connectivity hub, complementing the maritime Canal with aerial infrastructure.

Digital infrastructure advances rapidly. Fiber optic networks connect 95% of the population, leveraging geography—the narrow isthmus concentrates infrastructure investment. Panama ranks among Latin America's leaders in broadband penetration, supporting a growing tech sector and the Canal's increasingly digitized operations.

The challenges are stark. Outside Panama City, infrastructure deteriorates rapidly. The Colón corridor, despite Free Zone importance, suffers chronic neglect. Indigenous Comarcas in Darién and eastern regions lack basic road access, clean water, and electricity. Income inequality manifests spatially: gleaming high-rises overlook neighborhoods with open sewers.

Climate vulnerability grows acute. Rising seas threaten Canal operations and coastal infrastructure. Urban flooding overwhelms inadequate drainage systems during intensifying rainfall. The very geography that created Panama's infrastructure advantage—narrow, low-lying, hurricane-exposed—may become its greatest vulnerability in coming decades.`,
    issues: [
      'Infrastructure inequality: urban centers vs. neglected rural and indigenous regions',
      'Climate vulnerability: rising seas threatening Canal and coastal infrastructure',
      'Urban flooding from inadequate drainage systems during intense rainfall',
      'Over-concentration of infrastructure investment along narrow isthmus corridor',
      'Colón Free Zone corridor suffering chronic infrastructure neglect',
      'Spatial inequality: modern districts adjacent to areas lacking basic services'
    ],
    lat: 8.5380,
    lng: -80.7821
  },
  'Papua New Guinea': {
    summary: `Papua New Guinea represents perhaps the world's most extreme infrastructure challenge. In a nation of 10 million across 600 islands with terrain among Earth's most rugged—mountains exceeding 4,000 meters, active volcanoes, dense rainforest—only 3% of roads are paved. The Highlands Highway, connecting Lae port to interior highlands, remains the sole reliable land route into vast interior regions, yet sections become impassable during rainy seasons, isolating communities for months.

This is infrastructure development in its most fundamental, almost existential form. Over 800 languages persist partly because topography enabled such profound isolation that distinct cultures evolved valley by valley. Infrastructure here isn't about optimization—it's about basic connectivity establishing national cohesion across one of Earth's most fragmented geographies.

Port Moresby, the capital, houses 400,000 yet lacks a functioning public transit system. Roads deteriorate faster than maintenance capacity, creating perpetual potholes that damage vehicles and slow traffic to crawls. Informal settlements—housing 60% of urban populations—lack sewerage, clean water, and electricity. This isn't infrastructure planning; it's infrastructure absence creating humanitarian crisis.

Air transport becomes essential where roads cannot exist. Papua New Guinea operates over 500 airstrips—many unpaved mountain clearings serving as sole connections for remote communities. Flying becomes cheaper than road transport for many goods. This aviation-dependent infrastructure model, while pragmatic, proves expensive and vulnerable to weather disruptions.

Digital infrastructure paradoxically leapfrogs physical connectivity constraints. Mobile phone coverage reaches 90% of the population through tower deployments, while road coverage reaches barely 15%. The Coral Sea Cable System, completed in 2019, connects PNG to Australia and Solomon Islands, dramatically improving internet speeds. Yet affordability limits access—data costs among world's highest.

The mining and gas sectors maintain parallel infrastructure networks. The PNG LNG project built a 700-kilometer pipeline through extraordinarily difficult terrain, alongside roads and worker camps—infrastructure that bypasses rather than integrates with national systems, creating resource extraction enclaves disconnected from broader development needs.

The fundamental challenge remains financing. GDP per capita under $3,000 and limited state capacity mean infrastructure investment depends overwhelmingly on foreign aid and resource revenues. Without sustained investment, PNG risks perpetual infrastructure deficit that constrains all other development dimensions.`,
    issues: [
      'Extreme terrain creating world\'s highest infrastructure development costs',
      'Only 3% of roads paved; Highlands Highway impassable during rainy seasons',
      'Parallel resource extraction infrastructure bypassing national integration',
      'Urban informal settlements (60% of city population) lacking basic services',
      'Aviation-dependent connectivity model proving expensive and weather-vulnerable',
      'Limited state financing capacity and dependence on foreign aid for infrastructure'
    ],
    lat: -6.3150,
    lng: 143.9555
  },
  'Paraguay': {
    summary: `Paraguay's landlocked geography defines its infrastructure imperative. Distant from oceans, sandwiched between regional giants Brazil and Argentina, the nation's economic viability depends entirely on river and road connections that enable agricultural exports—soybeans, beef, electricity—to reach global markets. The Paraguay-Paraná waterway becomes the economic lifeline, moving 80% of exports despite seasonal depth variations limiting vessel size.

The Itaipú Dam—a Paraguayan-Brazilian binational project on the Paraná River—stands as the nation's most significant infrastructure asset. This hydroelectric marvel generates 90,000 GWh annually, producing 45 times Paraguay's domestic electricity consumption. Surplus power exported to Brazil generates $350 million yearly, funding significant portions of national infrastructure investment. Itaipú represents infrastructure diplomacy: shared sovereignty generating mutual prosperity.

Road infrastructure centers on the Trans-Chaco Highway, connecting Asunción to Argentina and enabling trade corridors. The Route 2 and Route 7 highways link eastern agricultural heartlands to Brazilian markets. Yet road quality deteriorates rapidly outside main corridors. Rural roads become impassable during rainy seasons, isolating agricultural communities from markets and services. The infrastructure challenge here is maintenance, not new construction.

Asunción, the capital of 2.5 million, lacks modern mass transit. The Metrobús BRT system, announced for over a decade, remains unbuilt amid political delays and financing constraints. Traffic congestion worsens annually. The Silvio Pettirossi International Airport—recently modernized to handle 4.5 million passengers—stands as rare infrastructure success, positioning Paraguay as regional logistics hub.

Digital infrastructure advances steadily. Fiber optic networks expand across eastern Paraguay, though western Chaco remains poorly connected. 4G mobile coverage reaches 70% of territory, enabling rural communities to access services impossible via physical infrastructure. This digital leapfrogging partially compensates for road deficits.

The Bioceanic Corridor—a proposed highway linking Brazil's Atlantic coast through Paraguay to Chile's Pacific ports—represents potential transformation. If completed, this route could reposition Paraguay from landlocked disadvantage to continental crossroads. Yet financing remains uncertain, and environmental concerns about Chaco ecosystem impacts persist.

Paraguay's infrastructure reality is perpetual in-betweenness: sufficient to sustain agricultural exports that drive the economy, inadequate to enable diversification beyond commodity production. Without sustained maintenance investment and completion of missing links, infrastructure constraints will continue limiting broader development possibilities.`,
    issues: [
      'Landlocked geography creating total dependence on river and road export corridors',
      'Rural road infrastructure impassable during rainy seasons, isolating communities',
      'Asunción Metrobús BRT delayed over decade amid political and financing obstacles',
      'Road maintenance deficit: existing infrastructure deteriorating faster than repairs',
      'Western Chaco region remaining poorly connected physically and digitally',
      'Bioceanic Corridor financing uncertain despite strategic importance'
    ],
    lat: -23.4425,
    lng: -58.4438
  },
  'Peru': {
    summary: `Peru's infrastructure confronts perhaps Latin America's most unforgiving geography. The Andes mountains bisect the nation into coast, highlands, and Amazon—three worlds requiring three infrastructure strategies. Roads must climb from sea level to 4,800-meter passes, traverse earthquake zones, and penetrate rainforest—each kilometer costing multiples of flat-terrain construction. This geographic brutality shapes every infrastructure decision.

Lima, home to 11 million—one-third of Peru's population—sprawls along an arid coastal desert. The Metro Line 1, opened in 2011, moves 400,000 daily passengers along its 35-kilometer elevated route. Line 2, under construction through city center, will add 27 kilometers by 2025, finally giving Lima modern integrated rapid transit. The Metropolitano BRT system carries 700,000 passengers daily. This represents competent urban mobility infrastructure, though insufficient for the capital's overwhelming scale.

The Pan-American Highway runs Peru's 2,500-kilometer coast, connecting Ecuador to Chile—the nation's economic spine. Yet the real infrastructure drama occurs in the highlands. The Central Highway, linking Lima to Junín and Huancayo, climbs to 4,818 meters—among world's highest-altitude highways—requiring constant maintenance against landslides and extreme weather. These Andean roads aren't merely transport infrastructure; they're feats of engineering audacity enabling highland communities to access coastal markets.

Port infrastructure underwent transformation. The Callao port, Peru's largest, doubled capacity through terminal expansions and dredging, now handling 90% of container traffic. The southern port of Matarani serves mining exports. Maritime infrastructure proves essential for an economy 60% dependent on mineral exports requiring oceanic shipping.

Digital infrastructure advances unevenly. Lima and coastal cities achieve good 4G coverage and fiber optic connectivity. Yet Andean highlands and Amazon regions remain poorly connected—40% of rural areas lack reliable internet. This digital divide mirrors and reinforces geographic isolation that infrastructure theoretically should overcome.

The challenges are immense. Climate change intensifies El Niño rainfall events that devastate coastal infrastructure—the 2017 floods destroyed 250 bridges and damaged 2,500 kilometers of roads, causing $3 billion in losses. Seismic vulnerability threatens all coastal infrastructure. Informal urban settlements housing millions lack sewerage, clean water, and paved roads.

Most critically, infrastructure investment has stagnated at 3.5% of GDP—half the regional average. Major projects suffer construction delays and corruption scandals. The proposed Chavimochic irrigation and hydroelectric project, meant to transform northern agricultural infrastructure, remains decades behind schedule. Without sustained investment and competent execution, Peru's infrastructure will continue constraining its development potential despite abundant resources.`,
    issues: [
      'Extreme Andean geography creating highest infrastructure development costs',
      'Climate vulnerability: El Niño floods destroying hundreds of bridges and roads',
      'Infrastructure investment stagnated at 3.5% GDP—half regional average',
      'Major projects (Chavimochic, metro lines) suffering delays and corruption',
      'Digital divide: 40% of rural Andean/Amazon regions lacking internet',
      'Urban informal settlements lacking basic sewerage and water infrastructure'
    ],
    lat: -9.1900,
    lng: -75.0152
  },
  'Philippines': {
    summary: `The Philippines' archipelago geography—7,641 islands across 1,850 kilometers—creates infrastructure challenges unlike any other Asian nation. Connecting this fragmented territory requires not just roads and rail, but maritime infrastructure on a vast scale. Inter-island shipping moves 80% of domestic cargo, yet port congestion, aging ferries, and minimal dredging create perpetual bottlenecks. Infrastructure here must master three dimensions: land, sea, and increasingly, digital connectivity bridging physical fragmentation.

Metro Manila, housing 14 million, endures legendary traffic congestion. The average commute exceeds 90 minutes—among Asia's worst. The LRT and MRT lines, built in the 1980s-90s, carry 1.2 million daily passengers but suffer chronic breakdowns and overcrowding. The Metro Manila Subway—a 36-kilometer underground line—breaks ground as the nation's first true metro, though completion by 2027 seems optimistic given the Philippines' infrastructure execution record.

The "Build Build Build" program, launched in 2016, represented a shift from infrastructure neglect to aggressive expansion. Some 20,000 projects valued at $180 billion aimed to raise infrastructure spending from 2.5% to 5% of GDP. Major highways expanded, regional airports upgraded, and the North-South Commuter Railway planned to connect Manila to Clark and Calamba. Yet execution lags projections—financing gaps, land acquisition delays, and capacity constraints slow implementation.

Port infrastructure remains critical yet inadequate. The Manila port, handling 60% of national container traffic, suffers chronic congestion. The proposed Sangley Point International Airport—designed to relieve Manila's Ninoy Aquino International Airport overcrowding—faces financing and environmental hurdles. Provincial airports often lack modern navigation equipment, limiting connectivity.

Digital infrastructure represents a success story. Mobile coverage reaches 95% of the population, with archipelago-wide 4G deployment enabling e-commerce and digital services to flourish despite physical infrastructure constraints. Submarine fiber optic cables link major islands, though last-mile connectivity in rural areas remains limited.

The challenges are profound. Typhoon vulnerability means infrastructure requires higher resilience standards—the 2013 Typhoon Haiyan destroyed 90% of Tacloban's infrastructure, demonstrating catastrophic inadequacy. Earthquake and volcanic risks threaten all major urban centers. Informal settlements housing 40% of Manila's population lack basic services.

Corruption remains the defining infrastructure constraint. Projects cost 30-50% more than regional equivalents. The MRT-3 rehabilitation, awarded to inexperienced contractors, resulted in worse service than before "improvement." Without governance reform, infrastructure investment yields diminishing returns—money spent but value not delivered.`,
    issues: [
      'Archipelago geography requiring complex maritime infrastructure integration',
      'Metro Manila traffic congestion: 90-minute average commutes among Asia\'s worst',
      'Infrastructure execution gaps: "Build Build Build" projects lagging targets',
      'Typhoon and seismic vulnerability requiring higher resilience infrastructure',
      'Port congestion in Manila handling 60% of container traffic',
      'Corruption adding 30-50% cost premiums and undermining project quality'
    ],
    lat: 12.8797,
    lng: 121.7740
  },
  'Poland': {
    summary: `Poland's infrastructure transformation since EU accession in 2004 represents one of Europe's most dramatic modernization stories. Over €100 billion in EU structural funds financed highway expansion, rail upgrades, and urban transit systems—converting a nation with fragmented post-Soviet infrastructure into a continental crossroads. The A1, A2, and A4 motorways now connect Baltic to Slovak borders and German frontier to Ukrainian border, positioning Poland as the logistics hub linking Western and Eastern Europe.

Warsaw's infrastructure epitomizes this progress. The Metro, opened in 1995, now operates two lines covering 38 kilometers. The city's WKD commuter rail, integrated tram networks, and expanding bike infrastructure create multimodal urban mobility that rivals Western European capitals. The second metro line, completed in 2023, finally provides east-west connectivity the city lacked for decades.

High-speed rail remains the missing piece. Poland's rail infrastructure, though extensive at 19,000 kilometers, suffers from aging track limiting speeds to 160 km/h on most routes. The Central Mobility Hub—an ambitious project combining new Warsaw airport with high-speed rail junction—promises to transform intercity connectivity, though 2027 completion seems ambitious. The Rail Baltica project, linking Warsaw to Tallinn via Białystok, represents infrastructure regionalism: Polish, Lithuanian, Latvian, and Estonian systems integrated for Baltic-Central European connectivity.

Digital infrastructure advances rapidly. 5G deployment covers major cities, with nationwide rollout progressing. Poland's fiber optic networks reach 60% of households—among EU's highest penetration rates. The strategic location attracts data center investments, positioning Poland as digital infrastructure hub for the region.

Yet challenges persist. Infrastructure quality varies dramatically between western regions and eastern peripheries. Rural areas, particularly in Podlaskie and Warmińsko-Mazurskie voivodeships, lack modern road and broadband access. Municipal infrastructure in smaller cities requires massive modernization—Soviet-era heating plants, aging water systems, inadequate sewerage.

The energy infrastructure transition presents the defining challenge. Poland remains 70% coal-dependent for electricity—Europe's highest rate. Meeting EU climate targets requires replacing this entire generation infrastructure while expanding renewables, grid storage, and possibly nuclear capacity. This energy infrastructure transformation will cost an estimated €200 billion through 2040—straining public finances and requiring sustained political will.

Most critically, infrastructure maintenance becomes paramount. Having built extensive new infrastructure, Poland now faces the less glamorous challenge of sustaining it. Without adequate maintenance budgets, today's gleaming highways will become tomorrow's potholed liability. The transition from infrastructure expansion to lifecycle management defines Poland's next infrastructure phase.`,
    issues: [
      'Energy infrastructure 70% coal-dependent requiring €200B transformation',
      'High-speed rail infrastructure absent; most routes limited to 160 km/h',
      'Regional infrastructure disparity between western regions and eastern peripheries',
      'Municipal infrastructure in smaller cities requiring Soviet-era system replacement',
      'Infrastructure maintenance challenge: sustaining newly built extensive networks',
      'Rural areas lacking modern road and broadband connectivity'
    ],
    lat: 51.9194,
    lng: 19.1451
  },
  'Portugal': {
    summary: `Portugal's infrastructure reflects a nation that invested ambitiously during EU boom years, then confronted austerity following the 2011 debt crisis. The result is a country with surprisingly modern highway networks and urban transit systems, yet struggling with maintenance deficits and incomplete projects. Lisbon and Porto possess world-class metro systems, but secondary cities rely on aging bus networks. This is infrastructure inequality: capitals thriving while peripheries decline.

Lisbon's Metro, opened in 1959, now operates four lines covering 46 kilometers, carrying 500,000 daily passengers. The integration with suburban rail, trams, and funiculars creates charming, functional urban mobility. Porto's Metro, inaugurated in 2002, extends 67 kilometers—more extensive than Lisbon's—serving the metropolitan region efficiently. These systems demonstrate competent urban planning and sustained investment over decades.

The highway network underwent massive expansion with EU structural funds. The A1 connecting Lisbon to Porto, the Algarve's coastal A22, and radial motorways from Lisbon transformed national connectivity. Portugal now possesses 3,000 kilometers of motorways—high per capita for a 10-million population. Yet this expansion came via public-private partnerships creating expensive tolls that many avoid, leaving highways underutilized while old roads remain congested.

Rail infrastructure tells a more troubled story. High-speed rail linking Lisbon to Madrid remains unbuilt after decades of planning—cost estimates ballooned, financing evaporated during crisis. Conventional rail, while extensive at 2,500 kilometers, suffers from aging rolling stock and deferred maintenance. The Alfa Pendular tilting trains on Lisbon-Porto route manage 220 km/h—respectable but outdated by European standards.

Port infrastructure constitutes strategic assets. The Port of Sines, Europe's deepest water port, attracts transatlantic shipping and LNG terminals. Lisbon port serves cruise tourism. Yet Portugal struggles to capitalize on Atlantic positioning—Spanish ports capture more shipping despite Portugal's geographic advantages.

Digital infrastructure advances steadily. Fiber optic coverage reaches 85% of the population—among Europe's highest. 5G deployment proceeds in urban areas. Rural broadband, however, remains patchy, particularly in interior regions experiencing severe depopulation.

The challenges center on sustainability. Infrastructure built during boom years now requires maintenance Portugal struggles to fund. The water infrastructure in many municipalities dates from the 1960s, with high leak rates—25% of water lost in distribution. Energy infrastructure transitions from fossil fuels require grid upgrades Portugal can ill afford.

Climate vulnerability grows acute. Wildfires increasingly threaten transportation infrastructure in interior regions. Rising seas challenge Lisbon's riverside development and Algarve coastal infrastructure. Without climate adaptation investment, existing infrastructure faces accelerating degradation from intensifying environmental stresses.`,
    issues: [
      'Infrastructure maintenance deficit from deferred investment during austerity',
      'PPP highway tolls creating underutilization while free roads remain congested',
      'High-speed rail to Madrid unbuilt after decades of planning',
      'Water infrastructure with 25% distribution losses from aging systems',
      'Climate vulnerability: wildfires and rising seas threatening infrastructure',
      'Regional decline: secondary cities lacking infrastructure investment'
    ],
    lat: 39.3999,
    lng: -8.2245
  },
  'Qatar': {
    summary: `Qatar's infrastructure represents perhaps the world's most concentrated investment in built environment transformation. Preparing for the 2022 World Cup catalyzed $200 billion in infrastructure spending—equivalent to two-thirds of GDP—over a single decade. This produced the Doha Metro, a 76-kilometer driverless system that rivals any global capital. Hamad International Airport, the new Education City, eight world-class stadiums, highways, hotels—an entire modern city infrastructure built essentially from scratch in record time.

The Doha Metro epitomizes this ambition. Opened in 2019, three lines operate with Swiss precision, moving passengers in air-conditioned, automated trains through stations that are architectural statements—cavernous spaces with suspended art installations, not utilitarian boxes. Ridership reached 150,000 daily pre-pandemic. For a city of 2.5 million, this represents overbuilt capacity, yet Qatar planned for 2030 population projections, not present needs. This is infrastructure as national statement.

The highway network underwent similar transformation. The Doha Expressway, orbital highways, coastal routes—billions invested in grade-separated, multi-lane infrastructure that eliminated congestion. Yet in a country measuring 160 kilometers at its longest, with 85% of population concentrated in Doha, this road network serves relatively limited demand. Infrastructure here optimizes for peak, not average.

Port infrastructure demonstrates strategic positioning. Hamad Port, opened in 2017, possesses capacity for 7.5 million containers annually—ten times Qatar's import needs—designed to serve as regional transshipment hub competing with Dubai's Jebel Ali. Yet capacity utilization hovers around 30%. This is anticipatory infrastructure: building capacity hoping demand will follow.

Digital infrastructure naturally leads regionally. 5G blankets the nation. Fiber optic networks reach virtually all buildings. Smart city sensors monitor traffic, utilities, and services citywide. This is infrastructure integration at its most advanced—physical and digital systems communicating to optimize urban operations.

Yet fundamental questions persist. Infrastructure designed for World Cup peak capacity—stadium cooling, metro frequency, hotel rooms—far exceeds ongoing needs. The $200 billion invested generated temporary construction economy but what sustained economic return? Tourism increased, but can it possibly justify this infrastructure scale?

Most critically, all this infrastructure depends on hydrocarbons. Qatar's wealth comes from being among the world's largest LNG exporters. When energy transition inevitably reduces gas demand, can Qatar sustain this vast infrastructure? The metro requires subsidies. Roads need maintenance. Climate-controlled everything demands massive energy consumption. Without sustained hydrocarbon revenues, Qatar's infrastructure supremacy becomes a magnificent burden—infrastructure built for a future that may never arrive.`,
    issues: [
      'Infrastructure overcapacity: World Cup legacy exceeding ongoing demand',
      'Hamad Port at 30% utilization despite massive regional hub ambitions',
      'Total dependence on hydrocarbon revenues to sustain infrastructure costs',
      'Infrastructure operating costs requiring perpetual subsidies',
      'Energy consumption for climate control creating vulnerability to costs',
      'Economic return uncertainty: $200B investment justification unclear'
    ],
    lat: 25.3548,
    lng: 51.1839
  },
  'Republic of Congo': {
    summary: `The Republic of Congo's infrastructure reflects a nation struggling to convert oil wealth into durable connectivity. Despite petroleum generating 80% of government revenues, infrastructure remains fragmentary—road networks inadequate, rail limited to a single colonial-era line, and urban systems overwhelmed by rapid growth. Brazzaville, the capital, sits directly across the Congo River from Kinshasa, yet these capitals remained disconnected until recent bridge proposals—a geographic absurdity revealing infrastructure failure.

The Maya-Maya International Airport modernization, completed in 2019, represents rare infrastructure success. The expanded terminal handles 1.5 million passengers annually, positioning Brazzaville as potential regional hub. Yet connecting this modern airport to city center requires navigating deteriorating roads that become impassable during rainy seasons—emblematic of infrastructure disconnect between showcase projects and systemic deficits.

Road infrastructure totals 17,000 kilometers, of which merely 1,200 are paved. The National Route 1 connecting Brazzaville to Pointe-Noire, the economic capital and primary port, remains the sole reliable land corridor. Yet sections deteriorate constantly, with maintenance neglected. Rainy seasons routinely isolate entire regions as unpaved roads become mud rivers. This isn't infrastructure—it's intermittent connectivity depending on weather.

The Congo-Ocean Railway, built by French colonizers in the 1930s at horrific human cost, still operates the 510-kilometer route from Pointe-Noire to Brazzaville. This aging system moves limited freight and passengers, with journey times exceeding 12 hours for a distance modern rail would traverse in three. Renovation projects announced repeatedly never materialize amid corruption and financing gaps.

Port infrastructure centers on Pointe-Noire, handling 95% of national trade. Container terminal expansions improved capacity to 1 million TEUs annually. Yet corruption, inefficiency, and inadequate road connections to hinterlands limit utilization. The port that should be a regional logistics hub barely serves national needs efficiently.

Digital infrastructure ironically outpaces physical connectivity. Mobile coverage reaches 70% of the population, with 4G available in major cities. The West Africa Cable System landing in Pointe-Noire improved internet speeds dramatically. Yet affordability limits access—data costs among Africa's highest, restricting connectivity to urban elites.

The fundamental challenge is governance. Oil revenues should finance infrastructure transformation, yet corruption and mismanagement mean projects produce minimal value. The Chinese-financed infrastructure loans of the 2000s created stadiums and government buildings but not the roads, power, and water systems the population desperately needs. Without governance reform, infrastructure investment will continue enriching elites while leaving the nation disconnected.`,
    issues: [
      'Oil wealth failing to translate into systematic infrastructure development',
      'Only 7% of roads paved; rainy seasons isolating entire regions',
      'Colonial-era railway requiring 12 hours for journey modern rail does in three',
      'Corruption and mismanagement undermining infrastructure investment value',
      'Basic infrastructure (roads, power, water) neglected for showcase projects',
      'Port inefficiency despite strategic location limiting regional logistics potential'
    ],
    lat: -0.2280,
    lng: 15.8277
  },
  'Romania': {
    summary: `Romania's infrastructure represents Eastern Europe's most acute modernization challenge and most dramatic missed opportunity. Despite decades of EU membership and billions in structural funds, the highway network remains embarrassingly limited—less than 1,000 kilometers in a country of 19 million. Romania possesses fewer motorways than Albania. This infrastructure deficit undermines all other development dimensions—foreign investment, tourism, regional integration—creating a nation perpetually running below its potential.

Bucharest, the capital of 2 million, operates a metro system that is paradoxically excellent. Built during Ceaușescu's communist era, four lines covering 70 kilometers move 600,000 daily passengers efficiently. Recent modernization improved rolling stock and stations. This represents the irony of Romanian infrastructure: the communist regime, despite immense brutality, built functional urban transit, while democratic governments have failed to build highways.

The highway shortage borders on scandalous. The A1 from Bucharest toward Hungary remains incomplete after 15 years of construction. The A3 toward northwest Transylvania advances at glacial pace—sections take a decade to build that elsewhere require two years. Corruption, incompetent contractors, bureaucratic paralysis, and political dysfunction combine to make Romania Europe's infrastructure basket case. Trucks crawling through mountain villages on two-lane roads damage local infrastructure while costing billions in economic inefficiency.

Rail infrastructure, extensive at 11,000 kilometers, suffers from aging track and neglected maintenance. Maximum speeds rarely exceed 160 km/h, with most routes limited to 100 km/h or less. The Bucharest-Constanța coastal route, a prime corridor for Black Sea tourism, takes four hours for 225 kilometers—an embarrassment. High-speed rail remains a distant fantasy when conventional rail barely functions.

Port infrastructure on the Black Sea offers strategic advantage Romania fails to exploit. Constanța port, the largest on the Black Sea, handles 70 million tons annually—significant capacity. Yet inadequate rail and road connections limit hinterland access. The port that could serve Central Europe relies on aging infrastructure that constrains growth.

Digital infrastructure represents the sole success story. Romania boasts Europe's fastest internet speeds at rock-bottom prices—a quirk of early fiber optic deployment creating competitive markets. 5G rolls out rapidly. This digital infrastructure excellence contrasts starkly with physical infrastructure failure, creating cognitive dissonance: a nation with world-class internet but roads barely worthy of the name.

The challenges are primarily political. EU funds exist, technical knowledge exists, yet projects don't get built. Environmental assessments take years, land expropriation drags through courts, contractors abandon projects. Without political will to overcome dysfunction, Romania's infrastructure deficit will persist, constraining prosperity indefinitely.`,
    issues: [
      'Highway network under 1,000km—Eastern Europe\'s most acute deficit',
      'Corruption and dysfunction: motorway sections taking decade to build',
      'Rail infrastructure aging with speeds rarely exceeding 160 km/h',
      'Bucharest-Constanța coastal route taking 4 hours for 225km',
      'Port of Constanța strategic potential limited by inadequate connections',
      'Political dysfunction preventing utilization of available EU infrastructure funds'
    ],
    lat: 45.9432,
    lng: 24.9668
  },
  'Russia': {
    summary: `Russia's infrastructure confronts scale unlike any other nation. Spanning 11 time zones across 17 million square kilometers, connecting this vast territory requires infrastructure thinking at continental dimensions. The Trans-Siberian Railway—9,289 kilometers from Moscow to Vladivostok—remains the organizing infrastructure of the Russian state, moving freight and passengers across distances that defeat other transport modes. This isn't just a railway; it's the physical manifestation of Russian territorial integrity.

Moscow's infrastructure reflects superpower ambitions. The Metro, among the world's most beautiful and extensive, operates 14 lines covering 420 kilometers, moving 9 million daily passengers—more than London or New York. Stations like Komsomolskaya and Mayakovskaya are underground palaces with chandeliers, mosaics, and socialist realist art—infrastructure as ideology. The Moscow Central Circle and recent metro extensions demonstrate continued investment in urban rail infrastructure.

Highway infrastructure undergoes significant expansion. The M11 Moscow-St. Petersburg toll motorway, opened in 2019, reduced travel time from eight hours to four—a transformative improvement for Russia's two primary cities. The expansion of the M4 toward Sochi and plans for highways in Siberia represent infrastructure ambitions matching territorial scale.

Yet outside major corridors, infrastructure deteriorates dramatically. Regional roads remain unpaved or potholed. The permafrost zones of Siberia and the Far East present extraordinary engineering challenges—roads and buildings requiring pilings to prevent melting-induced subsidence. Climate change accelerates this infrastructure crisis as permafrost thaws, destabilizing existing structures.

Energy infrastructure defines Russian geopolitical power. Pipelines—Power of Siberia to China, Nord Stream (now inoperable), southern routes to Turkey—represent infrastructure as foreign policy instruments. The electricity grid, while extensive, suffers from aging Soviet-era infrastructure requiring massive modernization investment.

Digital infrastructure advances unevenly. Moscow and St. Petersburg achieve good connectivity, but vast rural areas remain poorly served. The Runet—Russia's increasingly isolated internet infrastructure following international tech companies' exodus—creates digital fragmentation. Infrastructure here becomes sovereignty: physical and digital systems serving geopolitical isolation.

The fundamental challenge is sustainability. Infrastructure built for a Soviet population of 290 million now serves 145 million. Shrinking populations in Siberia and the Far East mean infrastructure maintenance for territories with minimal economic activity. Sanctions limit access to technology and financing for infrastructure projects. The massive infrastructure linking Russia's territory may become unsustainable burden as population and resources concentrate westward, leaving vast eastern regions with deteriorating connectivity nobody can afford to maintain.`,
    issues: [
      'Permafrost thaw from climate change destabilizing Siberian infrastructure',
      'Infrastructure built for 290M population now serving 145M—maintenance unsustainability',
      'Regional infrastructure deterioration outside major Moscow-centered corridors',
      'Sanctions limiting access to technology and financing for projects',
      'Eastern depopulation creating infrastructure burden with minimal economic return',
      'Digital fragmentation: Runet isolation undermining connectivity'
    ],
    lat: 61.5240,
    lng: 105.3188
  },
  'Rwanda': {
    summary: `Rwanda's infrastructure development represents Africa's most dramatic post-conflict transformation. Emerging from the 1994 genocide with destroyed infrastructure and collapsed state capacity, the nation has achieved remarkable progress through sustained political will and strategic planning. Kigali, the capital, operates as one of Africa's cleanest, most organized cities—not through abundant resources, but through governance prioritizing infrastructure maintenance and public space quality.

Road infrastructure improved dramatically. Rwanda now possesses 4,700 kilometers of paved roads—a 300% increase since 2000. The transformation of rural connectivity through district-level road programs enabled market access for agricultural communities. The quality of road maintenance—through labor-intensive methods that also provide employment—stands out across Africa. This represents infrastructure as development strategy: connecting the rural population to markets and services.

Urban mobility in Kigali relies on an organized bus system—the "tap and go" cashless payment network launched in 2018 provides efficient public transport for a city of 1.4 million. Plans for BRT (Bus Rapid Transit) and eventually light rail demonstrate ambitions matching income levels. The new Bugesera International Airport, under construction 40 kilometers outside Kigali, aims to position Rwanda as an East African aviation hub—bold infrastructure ambitions for a nation with 13 million people.

Digital infrastructure represents the most striking achievement. Fiber optic cables reach all districts. 4G LTE coverage exceeds 90% of the population—higher than many wealthier African nations. The government's early embrace of digital infrastructure, including e-governance platforms and digital ID systems, created enabling infrastructure for service delivery and private sector development. This is infrastructure leapfrogging: bypassing landlines directly to mobile and fiber systems.

Energy infrastructure underwent transformation. Electricity access increased from 15% in 2010 to 65% in 2024 through grid extension and off-grid solar programs. The methane extraction plant on Lake Kivu generates 26 MW—an innovative infrastructure solution converting volcanic gas into electricity. Yet electricity remains expensive, constraining industrial development.

The challenges are scale and sustainability. Rwanda's small size and dense population (500 people per km²) make infrastructure provision more economical than sprawling African nations, yet absolute resources remain limited. External financing—Chinese loans, development bank funding—finances much infrastructure, creating debt sustainability questions. The ambitious Bugesera airport may produce overcapacity given Rwanda's small domestic market.

Most critically, Rwanda's infrastructure success depends on authoritarian governance delivering efficiency at cost of political freedom. If governance quality declines or political stability falters, can infrastructure achievements be sustained? This represents the uncomfortable question: can infrastructure excellence survive without the political conditions—however problematic—that enabled it?`,
    issues: [
      'Infrastructure financing via external debt creating sustainability concerns',
      'Bugesera airport overcapacity risk given small domestic market',
      'Electricity costs remaining high despite improved access',
      'Governance-dependent development: infrastructure tied to political stability',
      'Scale limitations: small economy constraining infrastructure investment capacity',
      'Infrastructure maintenance long-term sustainability as donor interest shifts'
    ],
    lat: -1.9403,
    lng: 29.8739
  },
  'Saudi Arabia': {
    summary: `Saudi Arabia's infrastructure ambitions reach unprecedented scale through Vision 2030, the kingdom's economic diversification strategy. The NEOM mega-city—a $500 billion project envisioning carbon-neutral urban infrastructure housing 9 million residents—represents either visionary infrastructure planning or monumental hubris. The Line, a 170-kilometer linear city 200 meters wide, proposes to eliminate cars through vertical stacking and high-speed underground transit. This is infrastructure imagination unconstrained by precedent or, perhaps, reality.

Riyadh's infrastructure transformation proceeds at breathtaking pace. The Riyadh Metro—176 kilometers across six lines built simultaneously—opens in 2024 as one of the world's most extensive new transit systems. Over 80 stations, mostly automated, driverless trains, and architectural stations designed by international firms demonstrate infrastructure ambition matching hydrocarbon wealth. The Public Transport Authority plans BRT, light rail, and metro integration creating multimodal network for a city of 8 million.

Highway infrastructure sprawls across the kingdom's vast territory. Over 70,000 kilometers of paved roads connect distant regions, with expressways linking major cities. The 1,200-kilometer Haramain high-speed railway connecting Mecca, Medina, and Jeddah moves pilgrims at 300 km/h—among Islam's most significant modern infrastructure, facilitating religious obligation through engineering.

Airport infrastructure positions Saudi Arabia as aviation hub. The King Abdulaziz International Airport in Jeddah handles 41 million passengers annually. Plans for massive expansion aim to reach 100 million. The new King Salman International Airport in Riyadh, designed for 120 million passengers, would become among the world's largest. This aviation infrastructure reflects ambitions to dominate Middle Eastern and Asia-Africa air corridors.

Port infrastructure expands dramatically. The King Abdullah Economic City port, Jeddah Islamic Port, and Dammam port on the Gulf provide multi-ocean connectivity. These facilities aim to position Saudi Arabia as logistics hub connecting Asia, Africa, and Europe—infrastructure diplomacy competing with UAE dominance.

Digital infrastructure advances rapidly. 5G coverage reaches major cities, with nationwide rollout progressing. Fiber optics connect most urban areas. Smart infrastructure pilots in new developments test IoT sensors, AI traffic management, and automated services—infrastructure as technological showcase.

Yet profound challenges loom. Can mega-projects deliver projected economic returns? NEOM requires population migration at unprecedented scale—will people actually live in The Line? Energy infrastructure must transition from fossil fuel dominance while maintaining cheap electricity that enabled industrial development. Climate vulnerability grows acute—temperatures exceeding 50°C stress all infrastructure systems.

Most fundamentally, these infrastructure projects depend on sustained oil revenues. When energy transition reduces demand, can Saudi Arabia maintain this vast infrastructure? Or will today's ambitious projects become tomorrow's desert monuments—infrastructure built for futures that never materialize?`,
    issues: [
      'NEOM and The Line viability: unprecedented scale with uncertain demand',
      'Infrastructure operating costs requiring sustained hydrocarbon revenues',
      'Population migration requirements for new city projects unclear',
      'Climate stress: extreme temperatures exceeding infrastructure design limits',
      'Economic return uncertainty on $500B+ mega-infrastructure investments',
      'Energy transition threatening revenue model funding infrastructure ambitions'
    ],
    lat: 23.8859,
    lng: 45.0792
  }
}

async function saveInfrastructureSummaries() {
  console.log('🏗️  Saving infrastructure summaries: Panama to Saudi Arabia\n')
  console.log('='.repeat(80))

  let savedCount = 0
  let errorCount = 0
  const results: string[] = []

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

      // Validate character count
      const charCount = data.summary.length
      if (charCount < 2500 || charCount > 3500) {
        console.log(`   ⚠️  Warning: Character count ${charCount} outside target range`)
      }

      // Validate issues count
      if (data.issues.length < 5) {
        console.log(`   ⚠️  Warning: Only ${data.issues.length} issues (target: 5-6)`)
      }

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
      console.log(`   Character count: ${charCount}`)
      console.log(`   Issues: ${data.issues.length}`)
      console.log(`   Top stories: ${topStories.length}`)

      results.push(`✅ ${countryName}: ${charCount} chars, ${data.issues.length} issues`)
      savedCount++

    } catch (error) {
      console.error(`❌ Error saving ${countryName}:`, error)
      results.push(`❌ ${countryName}: ERROR`)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('📊 INFRASTRUCTURE SUMMARIES GENERATION COMPLETE')
  console.log('='.repeat(80))
  console.log(`\n✅ Successfully saved: ${savedCount} countries`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log('\n📋 Results Summary:')
  results.forEach(r => console.log(`   ${r}`))

  console.log('\n🏗️  Category: infrastructure')
  console.log('👤 Voice: Norman Foster / urban planning expert')
  console.log('📏 Target length: 2,500-3,500 characters')
  console.log('🎯 Focus: Transportation, transit, urban planning, projects, maintenance, digital')
  console.log('\n🌍 Countries completed:')
  console.log('   Panama, Papua New Guinea, Paraguay, Peru, Philippines,')
  console.log('   Poland, Portugal, Qatar, Republic of Congo, Romania,')
  console.log('   Russia, Rwanda, Saudi Arabia')
}

saveInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
