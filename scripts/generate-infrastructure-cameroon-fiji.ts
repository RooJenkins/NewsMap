import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const infrastructureSummaries = {
  'Cameroon': {
    summary: `Cameroon's infrastructure tells the story of a nation at the crossroads of Central Africa, struggling to translate geographic potential into connectivity reality. The country's position as a bridge between Francophone and Anglophone Africa, with access to both the Gulf of Guinea and landlocked neighbors, should confer natural advantages. Yet infrastructure deficits constrain what could be regional hub status.

The road network spans 77,000 kilometers on paper, but only 5,000 kilometers are paved—a shocking ratio that leaves most of the country accessible only during dry seasons. The Trans-African Highway from Lagos to Mombasa traverses Cameroon, yet sections remain unpaved, turning what should be continental arteries into seasonal tracks. In Yaoundé and Douala, traffic congestion rivals any megacity, yet the cities lack even basic bus rapid transit systems.

Douala Port handles 95% of Cameroon's maritime trade and serves as a vital gateway for Chad and Central African Republic. Yet chronic congestion—ships waiting weeks for berths, containers languishing in yards—drives costs that undermine regional competitiveness. The port's modernization proceeds in fits and starts, hampered by institutional inefficiency and corruption that plagues major infrastructure projects.

Rail infrastructure exists largely as colonial remnants. The 1,000-kilometer network connects Douala to Yaoundé and extends north to Ngaoundéré, moving primarily freight. Passenger service is infrequent and slow—a journey that should take four hours consumes an entire day. Plans for rail expansion to link with Nigerian and Chadian networks remain on drawing boards, victims of financing gaps and political will.

Digital infrastructure shows more promise. Mobile penetration exceeds 80%, with 4G coverage expanding in urban areas. Three submarine fiber cables landing in Douala provide international connectivity, though costs remain high and rural areas severely underserved. The government's digital economy strategy envisions smart infrastructure, but implementation lags ambition.

Energy infrastructure represents perhaps the gravest constraint. Despite abundant hydroelectric potential—the Sanaga River alone could generate 6,000 MW—frequent power cuts plague even major cities. The long-delayed Nachtigal Dam, finally under construction, will add 420 MW by 2025, but chronic underinvestment means supply trails demand by decades.

The Anglophone crisis compounds infrastructure challenges. Roads and bridges in the Northwest and Southwest regions face deliberate destruction, isolating communities. Rebuilding will require not just resources but political reconciliation—infrastructure as peacebuilding.`,
    issues: [
      'Only 5,000 km of 77,000 km road network paved, leaving most areas seasonally inaccessible',
      'Douala Port chronic congestion undermining regional trade gateway potential',
      'Frequent power cuts despite abundant hydroelectric potential',
      'Colonial-era rail network inadequate for modern freight and passenger needs',
      'Anglophone regions infrastructure deliberately damaged by ongoing crisis'
    ],
    lat: 3.848,
    lng: 11.5021
  },
  'Chad': {
    summary: `Chad's infrastructure landscape reflects one of the world's harshest development challenges: a landlocked Sahel nation twice the size of France, with population centers separated by vast desert expanses and chronic instability that deters investment. Infrastructure here is not mere convenience—it is existential for state coherence and economic survival.

The road network, totaling 40,000 kilometers, includes only 2,500 kilometers of paved roads. N'Djamena, the capital, connects via paved highway to Cameroon's Douala port—Chad's lifeline for trade—but this single corridor's vulnerability to disruption exposes profound strategic fragility. Internal connectivity barely exists: the road from N'Djamena to Abéché, Chad's second city 900 kilometers east, remains largely unpaved, requiring days of desert travel.

Chad's landlocked status makes it hostage to coastal neighbors' infrastructure. All imports and exports transit either through Cameroon's Douala port or Nigeria's Lagos, with transport costs consuming 20% of import values. The Trans-Saharan Highway, meant to link Algeria to Nigeria via Chad, exists mostly as aspiration—vast stretches are desert tracks marked by GPS coordinates rather than physical roads.

N'Djamena International Airport serves as the country's primary connection to the world, yet facilities remain basic and capacity limited. Internal air transport, crucial for desert geography, suffers from aging aircraft and minimal infrastructure at regional airports. For remote areas, helicopters represent the only reliable transport—a model sustainable only for military or humanitarian operations, not economic development.

Digital infrastructure advances from a minimal base. Mobile penetration reaches 50%, concentrated in N'Djamena and provincial capitals. Internet access, enabled by fiber connections through Cameroon, remains expensive and unreliable—among the least developed in Africa. The government's modest smart city ambitions for N'Djamena confront the reality that most citizens lack electricity, let alone connectivity.

Energy infrastructure is primitive even by Sahel standards. National electricity access barely reaches 11% of the population—one of the world's lowest rates. N'Djamena and major towns rely on diesel generators, making power among the continent's most expensive. Oil revenues, which should fund infrastructure development, disappear into military spending and corruption rather than nation-building.

Water infrastructure determines survival in this Sahel nation. Lake Chad's catastrophic shrinkage—from 25,000 to 2,000 square kilometers since the 1960s—eliminates livelihoods and triggers conflicts that destroy what minimal infrastructure exists. Climate adaptation infrastructure is nonexistent while vulnerability accelerates.`,
    issues: [
      'Only 2,500 km of 40,000 km roads paved, with minimal internal connectivity',
      'Landlocked status creating 20% transport costs on all trade through foreign ports',
      'National electricity access at 11%—one of world\'s lowest rates',
      'Lake Chad shrinkage destroying livelihoods and infrastructure without adaptation response',
      'Oil revenues diverted from infrastructure to military spending and corruption'
    ],
    lat: 15.4542,
    lng: 18.7322
  },
  'Chile': {
    summary: `Chile's infrastructure confronts one of Earth's most challenging geographies: a 4,300-kilometer ribbon of land averaging just 180 kilometers wide, pressed between the Pacific and the Andes. This extreme elongation defines infrastructure imperatives—longitudinal connectivity is national survival, while the country's seismic reality demands resilience as fundamental design principle.

Route 5, the Pan-American Highway, serves as Chile's spinal cord: a 3,400-kilometer mostly-tolled highway from Arica to Puerto Montt, with extensions to Patagonia. This artery moves 70% of freight and passengers, but its single-corridor dominance creates vulnerability—any major disruption cascades nationally. The 2010 earthquake's infrastructure destruction revealed these fragilities, yet reconstruction demonstrated impressive seismic engineering and rapid recovery capacity.

Santiago's metro system represents Latin America's infrastructure excellence. Seven lines totaling 140 kilometers move 2.6 million daily passengers with Swiss-level punctuality and cleanliness. Automatic train operation, platform screen doors, and integrated fare systems would impress any European capital. Yet October 2019 protests—triggered by metro fare increases—revealed how infrastructure pricing intersects with inequality: world-class transit serves an unequal city where many live in peripheral areas with inadequate connectivity.

Port infrastructure positions Chile as South America's logistics hub. Valparaíso, San Antonio, and the northern mining ports of Antofagasta and Iquique handle massive copper exports and serve as trans-Pacific gateways. Container port automation and deep-water capacity rival Asian competitors, making Chile the continent's most efficient maritime nation. Integration with Peru and Argentina via bioceanic corridors could amplify this advantage.

Digital infrastructure leads Latin America. Fiber optic networks reach 90% of the population, with Santiago offering competitive broadband speeds. 5G deployment proceeds rapidly in major cities. Data center growth positions Chile as the region's cloud infrastructure hub, capitalizing on seismic-resilient design, renewable energy, and submarine cable connectivity linking South America to Asia-Pacific and North America.

Yet infrastructure challenges mount. The Atacama Desert's extreme water scarcity—exacerbated by climate change and mining demands—threatens northern infrastructure sustainability. Santiago suffers chronic air pollution despite metro expansion, as urban sprawl outpaces transit development. Patagonian regions remain dramatically underserved, limiting tourism and development potential.

Most critically, infrastructure maintenance deficits accumulate. Concession-built highways and bridges age without adequate upkeep. Municipal infrastructure in secondary cities deteriorates as revenue concentrates in Santiago. The 2010 earthquake's lessons about resilience fade as memory dims and political will wavers—until the next major seismic event tests whether Chile's infrastructure can again prove its adaptability.`,
    issues: [
      'Overdependence on Route 5 single corridor creating national vulnerability',
      'Water scarcity in Atacama threatening northern infrastructure sustainability',
      'Santiago sprawl outpacing transit expansion despite world-class metro',
      'Infrastructure maintenance deficits in aging concession-built highways',
      'Regional inequality with Patagonia and secondary cities underserved'
    ],
    lat: -35.6751,
    lng: -71.543
  },
  'Costa Rica': {
    summary: `Costa Rica's infrastructure paradox defines its development challenge: a prosperous, educated nation with first-world social indicators and third-world roads. This Central American success story—famous for abolishing its military and investing in education and environment—chronically underinvests in physical infrastructure, creating bottlenecks that constrain its own success.

The road network spans 40,000 kilometers, yet only half are paved, and even major highways suffer perpetual disrepair. The drive from San José to Caribbean port Limón—just 160 kilometers—can consume four hours navigating potholes that swallow vehicles. Annual rainfall exceeding three meters accelerates road deterioration faster than maintenance budgets can address. Every rainy season brings landslides that sever critical corridors for days or weeks, isolating communities and disrupting commerce.

San José's traffic congestion ranks among the world's worst relative to city size. The metropolitan area of two million lacks any mass transit beyond diesel buses stuck in the same gridlock as cars. Plans for an electric train circulate for decades—the Chinese-funded San José to Limón railway project stalled in corruption scandals and engineering disputes. A city that should exemplify sustainable mobility instead chokes on automotive congestion.

Port infrastructure creates competitive disadvantages. Limón and Caldera handle trade inefficiently, with costly delays and limited capacity. For a country economically dependent on exports—coffee, pineapples, medical devices, tourism—port dysfunction directly taxes prosperity. Modern terminal facilities exist, yet hinterland connectivity deficits and institutional inefficiencies negate these investments.

Juan Santamaría International Airport near San José serves as Central America's hub, handling 5 million passengers annually. Terminal modernization improves capacity, though regional airport infrastructure remains minimal. For a nation promoting ecotourism in remote areas, aviation infrastructure that could disperse tourist pressure and economic benefits sits underdeveloped.

Digital infrastructure tells a better story. ICE, the state electricity and telecom provider, delivers reliable service with 99% electricity coverage and expanding fiber networks. 4G coverage reaches most populated areas, with 5G pilots beginning. Costa Rica's tech sector and remote work attractiveness owe much to this connectivity foundation—one infrastructure category where public investment succeeded.

Energy infrastructure impresses genuinely. Over 98% of electricity comes from renewables—primarily hydroelectric, then geothermal, wind, and solar. Multiple years of 100% renewable electricity demonstrate what's possible when geography (abundant water, volcanic activity) meets political commitment. Yet this success masks vulnerability: El Niño droughts strain hydroelectric capacity, and transmission infrastructure requires modernization to integrate distributed renewable sources.`,
    issues: [
      'Chronic road maintenance deficit with even major highways in disrepair',
      'San José lacks mass transit despite severe congestion in a small metro area',
      'Port inefficiencies directly taxing export-dependent economy',
      'Electric train project stalled in corruption and engineering disputes',
      'Annual landslides severing critical corridors during rainy seasons'
    ],
    lat: 9.7489,
    lng: -83.7534
  },
  'Croatia': {
    summary: `Croatia's infrastructure evolution tells the story of a nation rebuilding from war's devastation to become the European Union's newest success story, leveraging tourism and strategic position to drive ambitious modernization. Yet challenges persist as EU integration demands standards that strain budgets and expose regional disparities.

The highway network represents post-war Croatia's flagship achievement. The A1 motorway, stretching 476 kilometers from Zagreb to Dubrovnik along the Adriatic coast, and complementary corridors now total 1,300 kilometers of modern tolled highways. These routes transformed travel times—Zagreb to Split now takes four hours instead of eight—enabling tourism's explosive growth. Yet high toll costs and debt burden question the model's sustainability.

Zagreb's urban transport relies primarily on an extensive tram network dating from 1891, modernized with low-floor vehicles and integrated ticketing. The system moves efficiently, yet the city lacks metro infrastructure common to European capitals of comparable size. Plans for light metro or suburban rail integration circle perpetually, hampered by costs and institutional inertia. Meanwhile, private car use grows, bringing congestion to a historically walkable city.

Croatia's Adriatic ports handle increasing cruise tourism and ferry traffic to islands, but freight capacity lags regional competitors. Rijeka, the largest cargo port, struggles with hinterland rail connectivity—the Zagreb-Rijeka line remains single-track and slow. Plans to modernize this corridor and integrate with EU trans-European networks proceed slowly, limiting Croatia's potential as a logistics gateway between Central Europe and the Mediterranean.

Adriatic islands present unique infrastructure challenges. Ferry networks are lifelines for 47 inhabited islands, yet service quality varies dramatically. Summer tourist pressure overwhelms island infrastructure—roads, water systems, waste management—while winter isolation deepens. The Pelješac Bridge, opened in 2022, finally connects southern Dalmatia without transiting Bosnia-Herzegovina, but represents just one solution to complex geographic fragmentation.

Digital infrastructure advances steadily post-EU accession. Fiber coverage expands in urban areas with 4G reaching most regions, though rural and island connectivity lags. The tourism sector's digitalization demands reliable connectivity that infrastructure doesn't universally provide—island hotels struggle with bandwidth that cities take for granted.

Zagreb Airport expansion positions Croatia as a regional hub, with capacity doubling to 5 million passengers. Split, Dubrovnik, and Pula airports handle seasonal tourist surges but suffer overcrowding in summer months. Rail infrastructure to airports remains inadequate, forcing car and bus dependence that exacerbates congestion.

The fundamental challenge is maintenance and climate adaptation. Coastal infrastructure faces salt corrosion and rising seas. Highways require costly upkeep that toll revenues don't fully cover. EU funds enable major projects but can't sustain operations indefinitely. As climate pressures intensify—forest fires, floods, droughts—infrastructure resilience becomes imperative Croatia's budget struggles to address.`,
    issues: [
      'High highway toll costs and debt burden questioning infrastructure financing model',
      'Zagreb lacks metro infrastructure common to comparable European capitals',
      'Rijeka port hampered by inadequate single-track rail connectivity',
      'Island infrastructure overwhelmed by summer tourism, isolated in winter',
      'Coastal infrastructure maintenance and climate adaptation costs exceeding budgets'
    ],
    lat: 45.1,
    lng: 15.2
  },
  'Cuba': {
    summary: `Cuba's infrastructure exists in suspended animation—a 1950s snapshot preserved by revolution and embargo, now aging into obsolescence while limited resources and political constraints defer modernization. The island's infrastructure crisis deepens daily as systems installed during Soviet partnership exceed lifespan without replacement, creating cascading failures that increasingly define daily Cuban life.

The highway system, including the Autopista Nacional spanning Havana to Santiago de Cuba, remains largely intact structurally but suffers from maintenance collapse. Potholes proliferate, signage vanishes, road markings fade to invisibility. More critically, vehicle traffic remains minimal—Cuba has one of the world's lowest car ownership rates—yet roads deteriorate from poor drainage, tropical weather, and deferred upkeep. The famous classic American cars are tourists' delight and Cubans' necessity, kept running through improvisation in the absence of new vehicle imports.

Public transport in Havana epitomizes infrastructure crisis. The bus system, once extensive, collapsed when Soviet fuel subsidies ended. Iconic "camels"—semi-trailers converted into buses—hauled hundreds of passengers in stifling heat, emblematic of innovation under constraint. Recent Chinese bus imports provide some relief, but chronic fuel shortages mean unpredictable service. Havana's brief commuter rail network serves limited routes with aging equipment.

Rail infrastructure, once Caribbean's finest, now struggles through terminal decline. The mainline from Havana to Santiago operates irregularly with Soviet-era locomotives and carriages. Journey times stretch beyond 15 hours for trips that should take eight, with frequent breakdowns and cancellations. Urban rail in Havana—a small metro system—functions intermittently, a monument to what was planned but never fully realized.

Ports handle trade constrained by embargo and limited exports. Mariel, developed with Brazilian financing as a special development zone, offers modern container facilities but operates far below capacity, awaiting the trade volumes that embargo lifting might bring. Havana's harbor remains picturesque but functionally limited, its potential unrealized.

Digital infrastructure represents perhaps the most dramatic recent change. Fiber optic submarine cable to Venezuela in 2011 ended satellite dependence, and gradual liberalization brings expanding mobile data and public WiFi hotspots. Yet access remains expensive and controlled—internet penetration lags far behind regional norms, digital infrastructure as political tool rather than pure public good.

Energy infrastructure faces existential crisis. Aging thermoelectric plants, starved of maintenance and fuel, deliver increasingly unreliable power. Rolling blackouts extend from hours to days in some regions. Renewable energy potential—abundant solar, wind—remains largely untapped while the grid deteriorates toward collapse. Infrastructure failure translates directly to food spoilage, water pump failures, and economic paralysis.

Water and sanitation infrastructure, once advanced, now corrodes. Havana's water mains date from pre-revolution era, with leak rates exceeding 50%. Sewage systems fail, contributing to public health risks the vaunted healthcare system struggles to mitigate. Infrastructure decay makes health achievements harder to sustain.`,
    issues: [
      'Energy grid approaching collapse with aging plants and chronic blackouts',
      'Water mains with 50%+ leak rates from pre-revolution era infrastructure',
      'Rail system in terminal decline with Soviet-era equipment beyond lifespan',
      'Public transport collapse from fuel shortages and maintenance deficits',
      'Internet access expensive, controlled, and lagging regional norms despite recent improvements'
    ],
    lat: 21.5218,
    lng: -77.7812
  },
  'Cyprus': {
    summary: `Cyprus infrastructure operates in the unique context of a divided island: the Republic of Cyprus in the south, integrated into the EU, contrasts sharply with the Turkish Republic of Northern Cyprus, recognized only by Turkey and economically isolated. This political geography shapes infrastructure in profound ways, from duplicated systems to severed networks that would logically connect across the divide.

The road network in the Republic is excellent by Mediterranean standards—well-maintained highways connect all major cities, with the A1 from Nicosia to Limón and A6 to Paphos forming the primary corridors. Yet no roads cross the Green Line dividing the island efficiently: crossings exist only at controlled checkpoints, fragmenting what should be an integrated island network. Northern Cyprus maintains separate road infrastructure, adequate but less developed, with limited international investment.

Nicosia holds the unfortunate distinction as Europe's last divided capital. The city's infrastructure—roads, water, electricity—terminates at the buffer zone, creating redundancies and inefficiencies. Unified infrastructure systems existed pre-1974; their division reflects political reality but imposes economic costs on both communities that integration could alleviate.

Public transport remains Cyprus's persistent weakness. Both north and south rely heavily on private cars, with bus networks limited and infrequent. Nicosia, Limón, Larnaca lack any mass transit beyond buses, despite growing congestion. Tourist areas receive better service, but public transport inadequacy forces car dependence, contributing to the highest car ownership rate in the EU—per capita more than Germany.

Port infrastructure splits between south and north. Limassol port in the Republic handles the majority of trade, with modern container facilities serving as a regional maritime hub. Larnaca and Paphos serve primarily cruise tourism. Northern Cyprus's Famagusta port, once the island's premier facility, languishes in the closed Varosha ghost town—one of the world's most surreal infrastructure abandonment. Kyrenia port handles ferries to Turkey and limited trade, constrained by international isolation.

Airports tell a similar divided story. Larnaca and Paphos airports in the south handle millions of tourists annually with modern facilities. Ercan airport in the north technically operates "illegally" under international law—flights must route through Turkey, adding cost and time. Nicosia International Airport sits frozen in the buffer zone since 1974, its terminals and control tower preserved as eerie monuments to conflict.

Energy infrastructure increasingly focuses on renewables and gas. The Republic invests heavily in solar, with photovoltaics proliferating across the sunny island. Recent offshore gas discoveries promise energy independence but remain in development amid regional geopolitical tensions. Northern Cyprus relies on submarine power cable from Turkey and has limited renewable deployment. Neither side can leverage island-wide integration that would optimize resources.

Water infrastructure confronts severe scarcity. Cyprus is one of the world's most water-stressed nations, relying increasingly on desalination plants—energy intensive but necessary. Aging pipe networks lose 30% of water to leaks. Climate change intensifies droughts, making water infrastructure resilience and efficiency existential challenges. The north imports water via submarine pipeline from Turkey, a lifeline that underscores vulnerability.`,
    issues: [
      'Island division creating duplicated, fragmented infrastructure across Green Line',
      'Near-total lack of mass transit despite highest EU car ownership and growing congestion',
      'Severe water stress requiring expensive desalination amid climate change',
      'Northern Cyprus economically isolated, limiting international infrastructure investment',
      'Water network leak rates at 30% requiring urgent modernization'
    ],
    lat: 35.1264,
    lng: 33.4299
  },
  'Czech Republic': {
    summary: `Czech Republic's infrastructure reflects its position at the heart of Europe: a landlocked nation whose geographic centrality should confer natural advantages as a continental crossroads, yet infrastructure deficits—particularly in rail and digital—constrain this potential. Post-communist transition delivered uneven modernization, with some sectors achieving Western standards while others lag persistently.

The highway network expanded dramatically post-1989, yet remains incomplete. The D1 motorway from Prague to Brno and eastward, meant to be the country's primary artery, suffered from poor construction quality in some sections, requiring expensive rebuilding within decades. Total highway length now exceeds 1,200 kilometers, but key corridors—notably the D3 to Austria—remain unfinished, forcing through-traffic onto inadequate local roads. EU funding enables expansion, but implementation proceeds slower than ambition.

Prague's public transport represents a genuine success story. The three-line metro system, built during communist era and gradually modernized, moves 600 million passengers annually with efficiency and reliability. Integrated tram and bus networks create seamless urban mobility that rivals Vienna or Munich. Prague Card's unified ticketing and reasonable pricing make it genuinely accessible. Yet other Czech cities lack such sophistication—Brno, Ostrava, Plzeň rely primarily on trams and buses without metro infrastructure.

Rail infrastructure tells a more troubled story. The national network spans 9,400 kilometers, one of Europe's densest, yet train speeds lag embarrassingly. Prague to Brno, just 200 kilometers, takes 2.5 hours on slow tracks that should be one-hour high-speed corridors. Modernization proceeds in fragments: some routes receive upgrades enabling 160 km/h operation, while others remain vintage 1950s infrastructure with diesel locomotives and bone-jarring journeys.

České dráhy (Czech Railways) struggles with Soviet-era legacy—outdated equipment, inefficient operations, chronic delays. Recent investments in new rolling stock improve passenger experience, but fundamental track infrastructure requires tens of billions in upgrades that budgets defer. For a country promoting itself as Central Europe's logistics hub, rail that can't compete with trucking represents competitive disadvantage.

Digital infrastructure improves but remains uneven. Urban areas enjoy good fiber and 4G/5G coverage, yet rural regions suffer significant digital divide. Internet speeds lag Western European peers, and 5G deployment proceeds cautiously compared to regional neighbors. The tech sector's growth in Prague highlights infrastructure adequacy in priority areas, but national digital infrastructure requires accelerated investment.

Airports serve as regional gateways, with Prague Václav Havel Airport handling 17 million passengers pre-pandemic. Terminal expansion and rail connection to the city center improve accessibility, though the airport lacks the hub status that geography might suggest. Regional airports in Brno and Ostrava handle limited traffic, underlining Prague's dominance.

Energy infrastructure transitions from coal dependence toward diversification. The country's heavy reliance on Dukovany and Temelín nuclear plants provides baseload power and export capacity, but raises questions about waste and safety. Renewables expand slowly from a low base—Czech Republic lags EU peers in wind and solar deployment. Energy infrastructure remains reasonably reliable, but the transition to net-zero requires acceleration.

Infrastructure maintenance culture requires deepening. The tendency toward new construction over maintenance of existing assets creates long-term liabilities. Bridges, tunnels, and roads show premature aging from deferred upkeep. A more mature infrastructure approach would balance expansion with preservation.`,
    issues: [
      'Rail infrastructure modernization lagging with embarrassingly slow speeds for short distances',
      'D1 motorway sections requiring expensive rebuilding from poor initial construction',
      'Rural digital divide with fiber and mobile coverage lagging urban areas',
      'Energy transition from coal proceeding too slowly in renewables deployment',
      'Infrastructure maintenance culture favoring new construction over preservation'
    ],
    lat: 49.8175,
    lng: 15.473
  },
  'Democratic Republic of Congo': {
    summary: `The Democratic Republic of Congo's infrastructure represents one of development's most profound tragedies: a nation the size of Western Europe, blessed with extraordinary resources, yet possessing arguably the world's least developed road, rail, and power networks relative to its size and potential. Decades of kleptocracy, conflict, and institutional collapse have left infrastructure in ruins or simply nonexistent, constraining even basic economic activity and national cohesion.

The road network defies belief: of 153,000 kilometers of roads on paper, fewer than 3,000 kilometers are paved and even nominally maintained. The distance from Kinshasa to Lubumbashi—2,500 kilometers through the nation's heartland—is largely impassable by vehicle, taking weeks when attempted. Most provinces are functionally landlocked during rainy seasons when unpaved roads become impassable mud. Infrastructure here isn't merely inadequate; it's absent. Villages, towns, even provincial capitals exist in isolation, accessible only by expensive air transport or perilous river navigation.

The Congo River system should be the country's highway—a natural waterway network spanning thousands of kilometers. Yet navigability diminishes from lack of maintenance: river channels silt, ports decay, and the barge fleet ages into obsolescence. Kinshasa to Kisangani, once a regular service, now operates sporadically. The colonial-era steamers that remain operational are testament to durability and tragedy: infrastructure from the 1950s still functions because nothing replaced it.

Rail infrastructure exists as isolated fragments. The three separate networks—western, southern, eastern—don't connect to each other, let alone neighboring countries. Track conditions are abysmal: trains derail regularly, journeys scheduled for days extend to weeks, and freight capacity functions far below potential. The Kinshasa-Matadi line to the Atlantic port operates intermittently. The southern network from Lubumbashi to Zambia handles copper exports but suffers chronic unreliability. These aren't railways in any modern sense—they're industrial archaeology still somehow operational.

Kinshasa, a megacity of 15 million, functionally lacks public transport. Minibus "taxis" provide chaotic, informal mobility over potholed streets. No metro, no bus rapid transit, no modern urban systems exist in Central Africa's largest city. Traffic congestion is paradoxical—few people own cars, yet roads are gridlocked from their disrepair and lack of alternatives.

Energy infrastructure is catastrophically underdeveloped. National electricity access reaches only 19% of population—one of the world's lowest despite possessing the Grand Inga Dam site with potential for 40,000 MW generation, enough to power half of Africa. Existing generation barely functions: Inga I and II dams operate far below capacity from lack of maintenance. Kinshasa suffers daily blackouts. Provinces have effectively no grid electricity—diesel generators for the wealthy, darkness for everyone else.

Digital infrastructure emerges as paradoxical bright spot. Mobile penetration exceeds 50%, with Chinese investment delivering 4G to major cities. Yet internet access remains expensive and unreliable, limited to urban elites. The absence of physical infrastructure makes digital connectivity's expansion particularly striking—it's far easier to deploy cell towers than build roads.

The tragedy is that infrastructure deficit is not destiny. The Congo possesses resources to fund world-class systems: copper, cobalt, diamonds, and hydroelectric potential exceeding any nation's. What it lacks is governance capable of translating resources into shared prosperity. Until that changes, infrastructure will remain not merely underdeveloped but a symbol of state failure and opportunity squandered.`,
    issues: [
      'Under 3,000 km of 153,000 km roads paved, with provinces functionally landlocked',
      'National electricity access at 19% despite Grand Inga 40,000 MW potential',
      'Rail networks isolated fragments operating far below capacity with chronic derailments',
      'Kinshasa megacity of 15 million lacking any modern public transport systems',
      'Kleptocracy and conflict preventing resource wealth from funding infrastructure'
    ],
    lat: -4.0383,
    lng: 21.7587
  },
  'Denmark': {
    summary: `Denmark's infrastructure exemplifies Scandinavian social democratic values translated into built environment: comprehensive, sustainable, inclusive, and remarkably efficient for a small nation of 5.9 million. Yet even this Nordic model faces pressures from aging systems, climate adaptation needs, and the challenge of maintaining excellence as costs escalate.

The road network is impeccable—well-maintained highways and local roads that consistently rank among the world's highest quality. The Great Belt Bridge connecting Zealand to Funen, and the Øresund Bridge linking Copenhagen to Sweden, represent engineering achievements that transformed internal and regional connectivity. These mega-projects demonstrate Denmark's capacity for ambitious infrastructure, though their toll costs raise equity questions about access to mobility.

Copenhagen's urban transport defines sustainable mobility excellence. Over 62% of residents commute by bicycle—the world's highest rate—enabled by 390 kilometers of dedicated cycle superhighways with innovative designs: green waves timed for cycling speeds, separated lanes, winter maintenance that prioritizes bikes before cars. The Metro, a driverless system with 24/7 operation, moves 130 million passengers annually across four lines totaling 43 kilometers. The integrated S-train network extends throughout Zealand, creating seamless regional mobility.

Yet success brings challenges. Copenhagen's popularity strains infrastructure designed for smaller populations. Housing prices push residents farther out, lengthening commutes and overwhelming outer-ring transit capacity. The Metro expansion to Nordhavn and planned lines to suburbs arrive years behind demand. Bicycle infrastructure, though world-leading, faces congestion at peak hours—a quality problem most cities would envy, but a problem nonetheless.

Rail infrastructure connects the small nation efficiently. Intercity trains link all major cities with frequent, punctual service. Ongoing electrification replaces diesel locomotives, advancing climate goals. Yet the rail network operates near capacity—adding frequency requires expensive infrastructure upgrades that budgets constrain. The Copenhagen-Ringsted line upgrade, essential for Greater Copenhagen growth, consumed over a decade and billions more than projected.

Copenhagen Airport ranks among Europe's most connected, handling 30 million passengers annually with Metro rail access from the terminal. Yet expansion plans conflict with noise concerns and climate commitments—Denmark promises 70% emissions reduction by 2030, making airport growth politically fraught even as connectivity demands grow.

Digital infrastructure is world-class. Near-universal fiber coverage, 5G deployment across urban areas, and a highly digitalized public sector that delivers services online with efficiency that frustrates visitors from less-developed nations. Healthcare, taxation, civic services integrate seamlessly through digital identity systems—infrastructure as enabler of state effectiveness.

Energy infrastructure leads the renewable transition. Wind power, pioneered in Denmark, provides over 50% of electricity, with ambitious targets for offshore wind farms. District heating networks serve 64% of households—a model of energy efficiency that most nations lack. Yet renewable intermittency challenges grid stability, requiring expensive infrastructure for energy storage and regional integration that remain works in progress.

Climate adaptation emerges as critical infrastructure priority. Copenhagen's cloudburst management plan—a $1 billion program to handle extreme rainfall through green infrastructure, retention basins, and redesigned streets—exemplifies proactive adaptation. Rising seas threaten Copenhagen's harbor districts and rural coasts, requiring sophisticated flood defenses that Nordic state capacity can deliver but at enormous cost.

The core challenge is maintaining Nordic infrastructure quality as fiscal pressures intensify. Denmark's comprehensive welfare state and infrastructure excellence depend on economic growth and tax revenues that aging populations and global economic shifts threaten. Can Denmark sustain first-world infrastructure as these pressures mount, or will even this model face the maintenance deficits and capacity constraints that plague less-disciplined nations?`,
    issues: [
      'Copenhagen Metro expansion years behind demand from population growth pressures',
      'Rail network operating near capacity requiring expensive upgrades',
      'Climate adaptation costs escalating from sea level rise and extreme rainfall',
      'Airport expansion conflicting with ambitious 70% emissions reduction targets',
      'Fiscal pressures threatening ability to maintain Nordic infrastructure quality standards'
    ],
    lat: 56.2639,
    lng: 9.5018
  },
  'Dominican Republic': {
    summary: `The Dominican Republic's infrastructure reflects the Caribbean's most dynamic economy, growing rapidly from tourism and trade yet still marked by sharp disparities between tourist zones, Santo Domingo, and rural areas where infrastructure deficits constrain broader prosperity. Recent investments deliver visible improvements, yet sustainability questions and maintenance cultures require deepening.

The highway network expanded dramatically in the past two decades. The Santo Domingo-Santiago autopista, complemented by corridors to tourist zones in Punta Cana and Puerto Plata, creates a reasonable primary network. Yet beyond these arteries, road quality deteriorates sharply—rural areas suffer poorly maintained unpaved roads that isolate communities and hinder agricultural market access. Road maintenance culture lags construction enthusiasm, with new highways showing premature deterioration.

Santo Domingo Metro represents a genuine source of national pride: the Caribbean's first metro system, opened in 2009, now operates two lines totaling 35 kilometers. Clean, air-conditioned, and efficient, it moves 200,000+ daily passengers, reducing congestion in a chronically traffic-choked capital. Plans for extensions and new lines demonstrate ambition, though financing and implementation timelines remain uncertain. The Metro Cable—a gondola system connecting hillside barrios to metro stations—innovatively addresses informal settlement accessibility.

Public transport beyond the metro remains chaotic. "Carros públicos" (shared taxis) and "guaguas" (minibuses) provide unregulated, informal mobility that's flexible but overcrowded, unsafe, and polluting. Attempts to formalize and modernize bus systems proceed slowly against entrenched informal operators' resistance. Tourist zones enjoy far better organized transport, highlighting infrastructure's two-tier nature.

Port infrastructure serves as Caribbean logistics hub. Caucedo near Santo Domingo and Haina handle container traffic efficiently, with modern facilities that position the DR competitively. Integration with duty-free zones enables manufacturing exports. Yet port-city connectivity suffers from truck congestion on inadequate roads—the last-mile problem undermining port efficiency.

Tourism infrastructure in Punta Cana, Puerto Plata, and other zones is world-class within resort enclaves: international airports with modern terminals, well-maintained roads, reliable electricity and water. This creates jarring contrasts with general infrastructure conditions, raising questions about whether tourism success generates broadly shared development or enclaves of prosperity amid persistent underdevelopment.

Digital infrastructure advances unevenly. Urban areas have expanding 4G coverage and improving fiber availability. Yet rural digital divide remains severe—many remote areas lack reliable connectivity. Internet costs relative to incomes keep access limited for poorer Dominicans even where infrastructure exists. The country's call center and tech sector growth depends on continued digital infrastructure investment.

Energy infrastructure improvements are visible but fragile. Chronic blackouts that plagued previous decades have reduced in frequency in Santo Domingo and major cities, thanks to generation investments and transmission upgrades. Yet electricity remains expensive and unreliable in rural areas and smaller cities. Renewable energy deployment—particularly solar—expands but from a small base; the grid remains heavily dependent on imported fossil fuels, creating economic vulnerability.

Water infrastructure presents growing challenges. Santo Domingo and tourist zones generally have adequate supply, but rural areas face scarcity and quality issues. Aging pipe networks lose substantial volumes to leaks. Climate change brings more intense droughts and floods, yet water infrastructure adaptation lags these accelerating pressures. Coastal water systems face saltwater intrusion from sea level rise without adequate planning or investment.

The fundamental question is whether infrastructure development can become more inclusive. Current patterns deliver quality infrastructure where tourism or elite demand exists, while vast populations access minimal services. Bridging this gap requires not just resources—the growing economy generates revenue—but political will to prioritize broad-based infrastructure over enclave development. Until that happens, the DR's infrastructure will continue reflecting inequality rather than addressing it.`,
    issues: [
      'Sharp infrastructure disparities between tourist zones and rural areas',
      'Road maintenance culture lagging construction enthusiasm with premature deterioration',
      'Energy remains expensive and unreliable outside Santo Domingo despite improvements',
      'Rural digital divide severe with many remote areas lacking connectivity',
      'Water infrastructure adaptation lagging climate change pressures'
    ],
    lat: 18.7357,
    lng: -70.1627
  },
  'Ecuador': {
    summary: `Ecuador's infrastructure confronts one of the world's most challenging topographies: the Andes bisect the small country, separating Pacific coast, highland valleys, and Amazonian lowlands into distinct regions with minimal integration. Infrastructure here determines not just economic efficiency but fundamental national cohesion—can roads and communications unite what geography fragments?

The road network has improved dramatically through aggressive investment, yet geography imposes harsh constraints. The Pan-American Highway traverses the Andean spine, connecting Quito and other highland cities, but east-west routes crossing between coast, highlands, and Amazon remain limited and perilous. The Quito-Guayaquil corridor, Ecuador's most critical, now features an improved highway, yet landslides triggered by intense rainfall routinely close sections for days. Infrastructure here requires not just construction but perpetual reconstruction against geologic and climatic forces.

Quito's public transport transformed with the 2016 opening of the Metro—South America's highest elevated metro at 2,850 meters altitude. This first line runs 22 kilometers with modern, efficient service that reduces congestion in the narrow valley capital. Yet the single line serves only a fraction of mobility needs, and expansion plans face the political reality of limited budgets and competing demands. Trolleybus and BRT systems complement the metro, creating respectable integrated transit for a developing nation.

Guayaquil, the commercial capital and Ecuador's largest city, relies on a Metrovía BRT system that's functional but overcrowded. Plans for metro infrastructure remain aspirational—financing and prioritization questions delay implementation. The contrast between Quito's metro and Guayaquil's lack thereof highlights infrastructure's political dimensions: where capital prestige meets resource constraints.

Port infrastructure centers on Guayaquil and Manta. Guayaquil's port handles the bulk of trade, with container terminals enabling banana, cacao, and shrimp exports that drive the economy. Yet port efficiency lags regional competitors—congestion, bureaucracy, and hinterland connectivity deficits add costs that undermine competitiveness. Manta's potential as a Pacific trade hub remains underdeveloped, a strategic asset not fully leveraged.

Mariscal Sucre Airport in Quito, relocated from the cramped city center to a new site in 2013, offers modern facilities and improved capacity. Guayaquil's José Joaquín de Olmedo airport handles larger passenger volumes but faces capacity constraints. Regional airports in Amazon cities like Coca and Lago Agrio provide essential connectivity to otherwise nearly inaccessible regions—aviation infrastructure as lifeline where road infrastructure barely exists.

Digital infrastructure expands rapidly. 4G coverage reaches most urban areas, with fiber optic backbone linking major cities. Yet the rural digital divide remains vast—Amazonian and remote highland communities often lack even basic connectivity. For indigenous populations, this digital exclusion compounds historical marginalization, making infrastructure access a social justice issue as much as economic challenge.

Energy infrastructure increasingly leverages Ecuador's hydroelectric potential. Major dams like Coca Codo Sinclair—the country's largest project, built with Chinese financing—add generation capacity that moved Ecuador from energy importer to exporter. Yet these mega-dams face sustainability questions: seismic risks in earthquake-prone Andes, environmental impacts, and technical problems that reduced Coca Codo Sinclair's output below projections. The country still depends on fossil fuels for backup, and renewable diversification beyond hydro proceeds slowly.

Oil infrastructure in the Amazon generates revenue but environmental and social costs. Pipelines traverse ecologically sensitive regions, with spills causing repeated damage. Roads built for oil extraction open previously isolated areas to colonization and deforestation. Ecuador faces the infrastructure paradox: the roads and pipelines that fund development also enable ecological destruction that undermines long-term sustainability.

Climate change intensifies infrastructure challenges. More intense rainfall triggers landslides that close highways—climate adaptation requires not just better engineering but rethinking where and how infrastructure is built. Coastal infrastructure faces rising seas and more intense storms. Glacial retreat in the Andes affects water supplies for highland cities and hydroelectric generation. Infrastructure designed for historical climate patterns increasingly fails under new realities.`,
    issues: [
      'Andean topography causing routine landslide closures of critical highways',
      'Guayaquil lacking metro infrastructure despite being largest city',
      'Vast rural and Amazonian digital divide excluding indigenous populations',
      'Coca Codo Sinclair dam technical problems reducing output below projections',
      'Oil infrastructure enabling Amazon deforestation and environmental damage'
    ],
    lat: -1.8312,
    lng: -78.1834
  },
  'El Salvador': {
    summary: `El Salvador's infrastructure reflects Central America's smallest and most densely populated nation—a country of just 6.5 million in an area the size of Wales, where infrastructure pressures concentrate intensely yet fiscal limitations constrain responses. Recent years bring visible improvements, particularly in transportation, yet challenges from violence, climate vulnerability, and maintenance deficits persist.

The road network improved substantially under aggressive infrastructure campaigns. Major highways connecting San Salvador to ports and borders received upgrades, with the Carretera del Litoral along the Pacific coast and the Carretera Longitudinal del Norte traversing the country. Yet total paved road kilometers remain limited, and maintenance culture lags—roads deteriorate rapidly under tropical rainfall and heavy truck traffic without consistent upkeep. Rural areas particularly suffer access deficits that isolate agricultural communities from markets.

San Salvador lacks modern mass transit despite severe congestion. The capital and its sprawling metropolitan area of 2.5 million rely entirely on diesel buses—often aging and overcrowded—navigating chronic gridlock. Plans for BRT or light rail circulate for years without implementation, victims of financing constraints and institutional capacity limitations. For a densely populated capital in an earthquake zone where urban planning should prioritize transit, the absence of modern systems represents a persistent failure.

The seismic reality shapes all infrastructure considerations. El Salvador sits on the Pacific Ring of Fire with frequent earthquakes and active volcanoes. Infrastructure must be designed and maintained for seismic resilience, yet budget pressures encourage shortcuts. Schools, hospitals, roads, and bridges that should incorporate earthquake-resistant design often don't, creating latent vulnerabilities that major seismic events will expose catastrophically.

Port infrastructure centers on Acajutla and La Unión. Acajutla handles most cargo but suffers from limited capacity and efficiency problems. La Unión, developed with Japanese financing as a regional logistics hub, remains dramatically underutilized—a cautionary tale of infrastructure built speculatively without sufficient demand. The country's maritime infrastructure potential remains unrealized, with neither port achieving competitiveness that geography might enable.

Monseñor Óscar Arnulfo Romero International Airport serves San Salvador adequately for current demand, though facilities show age and expansion possibilities are limited by surrounding development. Regional airports barely function, making the capital's airport essentially the only civil aviation infrastructure of significance—a vulnerability for a small country where distributed infrastructure would improve resilience.

Digital infrastructure advances more successfully than physical. Mobile penetration is high, with 4G coverage in most populated areas and 5G beginning deployment. Internet access expands though costs relative to incomes remain barriers for poorer Salvadorans. The government's aggressive Bitcoin adoption as legal tender in 2021 demanded digital infrastructure expansion, delivering some connectivity improvements though the policy's broader economic impacts remain controversial.

Energy infrastructure relies heavily on imports and fossil fuels despite significant geothermal potential. Geothermal plants provide about 25% of electricity—a substantial share that could expand further if investment materialized. Solar and wind deployment remains minimal. The grid generally functions adequately in urban areas but rural electrification gaps persist. Energy costs are among Central America's highest, creating competitive disadvantages for industry.

Water infrastructure faces growing stress. The Lempa River basin provides most of the country's water, but competing demands, pollution, and climate-driven flow changes create supply pressures. Metropolitan San Salvador's distribution system loses significant volumes to aging pipes. Water quality concerns grow in rural areas and poor neighborhoods. Climate change brings more intense droughts and floods—El Salvador's infrastructure must adapt to extremes with limited fiscal capacity.

Gang violence historically damaged infrastructure. MS-13 and rival gangs' territorial control meant some roads and neighborhoods were effectively inaccessible, with bus drivers and utility workers facing extortion or violence. Recent security crackdowns dramatically reduced violence, enabling infrastructure maintenance and access that were previously too dangerous. Infrastructure functionality and citizen security prove inseparable—roads and pipes matter little if violence prevents their use.

Coastal infrastructure faces existential climate threat. Sea level rise, more intense hurricanes, and coastal erosion threaten not just beaches crucial for tourism but also the Carretera del Litoral and coastal communities. Adaptation infrastructure—seawalls, elevated roads, resistant construction—requires investment that competes with countless other priorities. Without it, El Salvador's infrastructure will increasingly be erased by the very ocean that should be economic asset.`,
    issues: [
      'San Salvador lacks modern mass transit despite 2.5 million metro population',
      'Seismic resilience often neglected in infrastructure design due to budget pressures',
      'La Unión port dramatically underutilized after expensive development',
      'Water infrastructure stressed by competing demands and climate-driven changes',
      'Coastal infrastructure facing erosion and sea level rise without adequate adaptation investment'
    ],
    lat: 13.7942,
    lng: -88.8965
  },
  'Estonia': {
    summary: `Estonia's infrastructure transformation from post-Soviet decay to digital-first European nation represents one of the most remarkable infrastructure stories of the past three decades. This small Baltic nation of 1.3 million leveraged EU integration, technological innovation, and political will to achieve infrastructure quality rivaling Nordic neighbors, though challenges from aging systems, rural depopulation, and climate adaptation emerge.

The road network modernized substantially post-independence. The Via Baltica highway connecting Tallinn through Riga to Warsaw provides modern corridor linking Estonia to European networks. Highways radiating from Tallinn reach other major cities with reasonable quality. Yet total highway length remains modest—around 150 kilometers—with most intercity routes on two-lane roads adequate for small population but showing age. Winter maintenance is excellent, essential for a country where snow covers roads for months, yet summer pothole repairs reveal ongoing maintenance needs.

Tallinn's public transport combines traditional trams and buses with a genuinely innovative policy: free public transport for residents since 2013, funded by municipal budgets and designed to reduce car use and improve equity. The system functions well for a compact city of 450,000, though car ownership continues rising. No metro infrastructure exists or is planned—the population doesn't justify it—but the tram network's heritage routes and modern extensions create reasonable urban mobility.

Rail infrastructure represents Estonia's most visible infrastructure challenge. The national rail network radiates from Tallinn but remains fundamentally Soviet-era infrastructure: broad-gauge tracks, limited electrification, slow speeds. The Tallinn-Tartu route, just 185 kilometers, takes 2.5 hours—embarrassingly slow by European standards. The Rail Baltic project—connecting Tallinn to Warsaw via Riga with standard-gauge European rail—represents Estonia's most ambitious infrastructure commitment. If completed by 2030, it would transform regional connectivity, though costs escalate and timelines stretch.

Port infrastructure defines Estonia's economic role as Baltic maritime hub. Tallinn's port handles substantial cargo and ferry traffic to Helsinki, Stockholm, and St. Petersburg. Muuga port specializes in transit cargo, particularly Russian oil and goods—a strategic asset but also vulnerability as geopolitical tensions with Russia threaten these trade flows. The port sector functions efficiently, a remnant of Soviet maritime investment that Estonia successfully commercialized.

Tallinn Airport serves as regional gateway, handling 3 million passengers annually pre-pandemic. Modern terminal facilities and the airport's proximity to downtown—just 4 kilometers—make it remarkably accessible. Yet the airport's location constrains expansion, creating capacity questions as traffic grows. Estonia's size means Tallinn airport dominates, with regional airports handling minimal traffic.

Digital infrastructure is where Estonia truly excels—the nation positions itself as Europe's digital society leader. Nearly universal internet access, extensive fiber networks, 5G deployment, and seamless digital government services that handle everything from taxation to voting online. E-Residency allows global entrepreneurs to incorporate Estonian companies digitally. This digital infrastructure enables economic activity disproportionate to physical size—a small nation punching above its weight through connectivity rather than geography.

Energy infrastructure transitions toward renewables but faces challenges. Oil shale—a polluting but domestically abundant resource—historically provided energy independence but conflicts with EU climate commitments. Renewable deployment focuses on wind, with offshore wind potential in the Baltic. Yet the transition requires replacing baseload power while managing costs—Estonia's electricity prices are among the EU's highest, creating political and economic pressures. Integration with Nordic grid and potential nuclear cooperation with neighboring states offer paths forward.

Rural infrastructure decline follows depopulation. As Estonians concentrate in Tallinn and a few secondary cities, rural areas hollow out. Roads, schools, medical facilities in emptying villages become harder to justify maintaining. This creates an infrastructure paradox: improved mobility and digital connectivity enable concentration in urban areas, which then undermines the case for rural infrastructure investment, accelerating the very concentration that started the cycle.

Climate adaptation needs grow. Baltic Sea level rise threatens coastal infrastructure. More intense storms require infrastructure resilience that older systems lack. Yet Estonia's fiscal capacity and small population mean adaptation investments compete with countless priorities. The digital-first approach offers one solution: digital infrastructure is inherently more adaptable to climate change than physical, suggesting Estonian strategy may prove prescient as climate pressures mount.`,
    issues: [
      'Rail network fundamentally outdated with embarrassingly slow speeds needing Rail Baltic completion',
      'Energy transition from polluting oil shale creating high costs and climate tensions',
      'Rural infrastructure decline from depopulation concentrating in Tallinn and larger cities',
      'Port cargo vulnerability to Russian trade flows amid geopolitical tensions',
      'Climate adaptation competing with limited fiscal capacity in small nation'
    ],
    lat: 58.5953,
    lng: 25.0136
  },
  'Ethiopia': {
    summary: `Ethiopia's infrastructure development represents Africa's most ambitious attempt to overcome geographic and historical disadvantages through state-driven mega-projects. Landlocked since Eritrea's independence, this nation of 120 million pursues infrastructure on a scale that transforms landscapes and ambitions, yet sustainability questions and operational challenges reveal gaps between construction and functionality.

The road network expanded dramatically from a minimal base. The Chinese-financed Road Sector Development Program added thousands of kilometers of asphalt to a country that had barely any paved roads two decades ago. Major corridors—Addis Ababa to Djibouti port, to Mek'ele in the north, to regional capitals—now feature reasonably good roads. Yet maintenance culture lags construction pace: new roads show premature deterioration, and rural areas remain largely inaccessible during rainy seasons. Ethiopia's mountainous topography makes road-building extraordinarily expensive and maintenance perpetually challenging.

Addis Ababa's light rail, opened in 2015, made Ethiopia the first sub-Saharan African country with modern electric rail transit. The two lines, totaling 34 kilometers, demonstrate state capacity to deliver complex projects. Yet operational challenges quickly emerged: frequent breakdowns, power supply issues, overcrowding beyond design capacity, and financial losses requiring subsidies. The system functions, but not at the efficiency projected—a pattern repeated across Ethiopian infrastructure projects.

The Addis Ababa-Djibouti Railway represents Ethiopia's most strategic infrastructure: an electric standard-gauge railway replacing the defunct French colonial-era line, providing landlocked Ethiopia with reliable access to Djibouti port. Chinese-built and financed, the $4 billion railway operates, but well below capacity—freight volumes don't justify the investment, operational costs exceed revenues, and technical challenges require ongoing Chinese management. It's unclear when or if Ethiopia will operate this critical artery independently and profitably.

Highway infrastructure to Djibouti complements the railway, yet the corridor's vulnerability—all Ethiopian trade depends on this single route through a small, easily-disrupted neighbor—represents profound strategic fragility. Efforts to diversify with port access through Somalia and Kenya remain aspirational, hostage to insecurity and infrastructure deficits in those regions.

Addis Ababa's Bole International Airport expanded dramatically, with a new terminal quadrupling capacity. Ethiopian Airlines, Africa's most successful carrier, leverages this hub to make Addis Ababa a continental gateway. This success story demonstrates what effective management and strategic vision can achieve—a contrast to other infrastructure sectors where ambition exceeds execution.

The Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile is Ethiopia's most ambitious and controversial infrastructure project: a $5 billion hydroelectric dam designed to generate 6,450 MW, transforming energy infrastructure from deficit to surplus. After years of construction delays, the dam fills and begins generation, though at reduced capacity. The project triggers existential tensions with Egypt, which depends on Nile flow—infrastructure as geopolitical weapon. Whether GERD delivers promised development or becomes a stranded asset amid regional conflict remains uncertain.

Energy infrastructure beyond GERD remains inadequate. National electrification rates hover around 50%—millions lack access. Urban areas suffer frequent blackouts despite generation investments. The grid's capacity to distribute power lags generation additions. Rural electrification, despite government campaigns, proceeds slowly given the massive rural population and challenging topography.

Digital infrastructure leapfrogs physical deficits in some respects. Mobile penetration expands rapidly, though from a low base. Chinese investment delivers 4G to major cities. Yet state control of telecom through Ethio Telecom's monopoly limited competition and quality. Recent liberalization allowing private operators may improve services, but connectivity remains expensive relative to incomes and largely urban-focused.

Civil conflict in Tigray and other regions devastated infrastructure deliberately destroyed during fighting. Roads, bridges, utilities, telecommunications—all targeted or caught in crossfire. Reconstruction will require years and billions, resources a poor nation struggles to marshal. War demonstrates infrastructure's fragility: decades of development can be undone in months of conflict.

The fundamental question is sustainability. Ethiopia's infrastructure boom relied heavily on Chinese financing, accumulating debt that the economy struggles to service. Many projects operate below projected capacity or at financial losses. Can Ethiopia's economy grow fast enough to justify these investments and generate revenues to maintain them? Or will ambitious infrastructure become expensive monuments to overreach, requiring bailouts and abandonment? The next decade will answer whether Ethiopia's infrastructure gamble pays off or becomes a cautionary tale of development ambition exceeding economic reality.`,
    issues: [
      'Chinese-financed infrastructure accumulating unsustainable debt burden',
      'Addis-Djibouti railway operating well below capacity with persistent financial losses',
      'National electrification only 50% despite GERD with frequent urban blackouts',
      'Civil conflict deliberately destroying infrastructure requiring years and billions to reconstruct',
      'Maintenance culture lagging construction pace with premature road deterioration'
    ],
    lat: 9.145,
    lng: 40.4897
  },
  'Fiji': {
    summary: `Fiji's infrastructure confronts the unique challenges of a 300-island archipelago scattered across 1.3 million square kilometers of Pacific Ocean, where geography dictates that connectivity defines viability. For a nation of 900,000, infrastructure must overcome distances that would challenge countries many times larger and wealthier, while climate change threatens to erase what little exists.

The road network concentrates on Viti Levu and Vanua Levu, the two main islands where 90% of the population lives. Viti Levu's Queens Road and Kings Road circle the island, providing basic connectivity, though both are largely two-lane highways prone to washouts during cyclones and heavy rains. Road quality deteriorates sharply outside main routes—rural areas access markets via unpaved roads that become impassable mud during wet season. Smaller islands have minimal road infrastructure: most villages connect via walking paths, not vehicular roads.

Suva, the capital on Viti Levu, lacks any modern mass transit system. Buses provide basic mobility but suffer from aging fleets, limited routes, and chronic congestion in the compact downtown. Lautoka, Fiji's second city, has similar limited bus networks. For island capitals, this informality suffices for small populations, but it represents missed opportunities for sustainable urban mobility as populations grow.

Maritime infrastructure is Fiji's lifeline. Inter-island ferries connect main islands and many smaller ones, though service quality varies dramatically. Government-operated vessels serve remote islands on subsidized routes—without which communities would face complete isolation. Private operators handle main routes with reasonably reliable service. Yet the fleet ages, and accidents occur periodically. For many Fijians, ferry service represents the only infrastructure connecting them to the wider nation.

Port infrastructure centers on Suva's Kings Wharf and Lautoka Port. Both handle international cargo and cruise ships, with basic modern facilities. Fiji's position as regional hub for South Pacific nations generates transit cargo. Yet port capacity constraints and efficiency issues limit growth potential. Climate vulnerability is acute: cyclones routinely damage port facilities, requiring reconstruction that depletes limited budgets.

Nausori International Airport serves Suva, though its location across the Rewa River delta and short runway limit aircraft size and operations. Nadi International Airport on the western side of Viti Levu serves as Fiji's primary gateway, handling most international tourism traffic with reasonably modern facilities. Inter-island aviation is essential—Fiji Airways and smaller carriers provide lifeline services to islands where maritime transport would consume days. Yet airstrips on smaller islands are basic: grass strips vulnerable to weather, lacking instrument approaches or night operations.

Digital infrastructure leapfrogs physical limitations in some respects. Submarine fiber cables connect Fiji to global networks, with Suva serving as regional hub for South Pacific connectivity. 4G coverage in Suva, Nadi, and other main towns provides reasonable service. Yet rural areas and smaller islands suffer severe digital divides—many communities have minimal mobile coverage and no broadband. For dispersed islands, digital infrastructure could enable services and connectivity that physical infrastructure will never economically provide, yet investment lags this potential.

Energy infrastructure relies predominantly on imported diesel for generation, making electricity expensive and carbon-intensive. Hydroelectric power on Viti Levu provides some generation, with the Monasavu Dam supplying around 20% of national consumption. Renewable potential—solar, wind, biomass—remains largely untapped despite Fiji's climate vulnerability and stated commitment to renewable transition. Recent solar projects begin addressing this, but the grid's archipelago geography makes integration complex and expensive. Many outer islands rely on diesel generators or have no electricity at all—energy poverty compounding geographic isolation.

Climate change represents an existential infrastructure threat. Fiji faces category 5 cyclones with increasing frequency—Winston in 2016 destroyed thousands of homes and massive infrastructure. Sea level rise threatens coastal roads, airports, ports, and entire communities. Adaptation infrastructure—seawalls, elevated structures, resilient design—requires investments far beyond Fiji's fiscal capacity. International climate financing provides some support, but scale mismatches the threat. Infrastructure built today may be underwater within decades without dramatic adaptation investments.

Water infrastructure reflects similar climate pressures. Suva and main towns have piped water systems, though many rely on rainwater catchment—vulnerable to droughts that climate change intensifies. Outer islands depend entirely on rainwater or shallow wells susceptible to saltwater intrusion as seas rise. Water infrastructure on a coral atoll island is exponentially more vulnerable than continental nations—existential stakes for communities that could become uninhabitable.

Fiji's infrastructure paradox is that tourism—the economic mainstay—demands quality infrastructure in resort zones while most of the population accesses minimal services. Five-star resorts have reliable power, water, transport, and connectivity while nearby villages lack these basics. Can infrastructure development become more inclusive, or will it remain dualistic—pockets of first-world infrastructure serving tourists within a nation of third-world systems for citizens? Addressing this requires not just resources but political commitment to equitable development that has been elusive.`,
    issues: [
      'Archipelago geography making comprehensive infrastructure economically prohibitive',
      'Expensive diesel-dependent energy with renewable potential largely untapped',
      'Climate change and cyclones routinely destroying infrastructure faster than reconstruction',
      'Severe rural and outer island digital divide despite regional hub status',
      'Infrastructure dualism with resort zones receiving investment while local communities lack basics'
    ],
    lat: -17.7134,
    lng: 178.065
  }
}

async function saveInfrastructureSummaries() {
  console.log('🏗️  Generating and saving infrastructure summaries')
  console.log('📝 Countries: Cameroon through Fiji (16 countries)')
  console.log('👤 Perspective: Norman Foster / urban planning expert')
  console.log('📏 Length: 2,500-3,500 characters each')
  console.log('🔍 Focus: Transportation, transit, urban planning, digital infrastructure')
  console.log('\n' + '='.repeat(80))

  let savedCount = 0
  let errorCount = 0

  for (const [countryName, data] of Object.entries(infrastructureSummaries)) {
    console.log(`\n📍 Processing: ${countryName}`)

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

      console.log(`✅ Saved: ${countryName}`)
      console.log(`   📊 Summary: ${data.summary.length} characters`)
      console.log(`   🔴 Issues: ${data.issues.length}`)
      console.log(`   📰 Stories: ${topStories.length}`)
      savedCount++

    } catch (error) {
      console.error(`❌ Error saving ${countryName}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary generation complete!')
  console.log('='.repeat(80))
  console.log(`\n📊 Final Results:`)
  console.log(`   ✅ Successfully saved: ${savedCount}`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`\n🌍 Countries completed:`)
  Object.keys(infrastructureSummaries).forEach(country => {
    console.log(`   • ${country}`)
  })
}

saveInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
