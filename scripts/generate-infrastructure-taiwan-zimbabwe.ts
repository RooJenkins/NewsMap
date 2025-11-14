import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = {
  TAIWAN: {
    name: 'Taiwan',
    type: 'country',
    lat: 23.6978,
    lng: 120.9605,
    country: 'Taiwan'
  },
  TANZANIA: {
    name: 'Tanzania',
    type: 'country',
    lat: -6.3690,
    lng: 34.8888,
    country: 'Tanzania'
  },
  THAILAND: {
    name: 'Thailand',
    type: 'country',
    lat: 15.8700,
    lng: 100.9925,
    country: 'Thailand'
  },
  TRINIDAD_AND_TOBAGO: {
    name: 'Trinidad and Tobago',
    type: 'country',
    lat: 10.6918,
    lng: -61.2225,
    country: 'Trinidad and Tobago'
  },
  TUNISIA: {
    name: 'Tunisia',
    type: 'country',
    lat: 33.8869,
    lng: 9.5375,
    country: 'Tunisia'
  },
  TURKEY: {
    name: 'Turkey',
    type: 'country',
    lat: 38.9637,
    lng: 35.2433,
    country: 'Turkey'
  },
  TURKMENISTAN: {
    name: 'Turkmenistan',
    type: 'country',
    lat: 38.9697,
    lng: 59.5563,
    country: 'Turkmenistan'
  },
  UGANDA: {
    name: 'Uganda',
    type: 'country',
    lat: 1.3733,
    lng: 32.2903,
    country: 'Uganda'
  },
  UKRAINE: {
    name: 'Ukraine',
    type: 'country',
    lat: 48.3794,
    lng: 31.1656,
    country: 'Ukraine'
  },
  UNITED_ARAB_EMIRATES: {
    name: 'United Arab Emirates',
    type: 'country',
    lat: 23.4241,
    lng: 53.8478,
    country: 'United Arab Emirates'
  },
  UNITED_KINGDOM: {
    name: 'United Kingdom',
    type: 'country',
    lat: 55.3781,
    lng: -3.4360,
    country: 'United Kingdom'
  },
  UNITED_STATES: {
    name: 'United States',
    type: 'country',
    lat: 37.0902,
    lng: -95.7129,
    country: 'United States'
  },
  URUGUAY: {
    name: 'Uruguay',
    type: 'country',
    lat: -32.5228,
    lng: -55.7658,
    country: 'Uruguay'
  },
  UZBEKISTAN: {
    name: 'Uzbekistan',
    type: 'country',
    lat: 41.3775,
    lng: 64.5853,
    country: 'Uzbekistan'
  },
  VENEZUELA: {
    name: 'Venezuela',
    type: 'country',
    lat: 6.4238,
    lng: -66.5897,
    country: 'Venezuela'
  },
  VIETNAM: {
    name: 'Vietnam',
    type: 'country',
    lat: 14.0583,
    lng: 108.2772,
    country: 'Vietnam'
  },
  YEMEN: {
    name: 'Yemen',
    type: 'country',
    lat: 15.5527,
    lng: 48.5164,
    country: 'Yemen'
  },
  ZAMBIA: {
    name: 'Zambia',
    type: 'country',
    lat: -13.1339,
    lng: 27.8493,
    country: 'Zambia'
  },
  ZIMBABWE: {
    name: 'Zimbabwe',
    type: 'country',
    lat: -19.0154,
    lng: 29.1549,
    country: 'Zimbabwe'
  }
}

const SUMMARIES = {
  TAIWAN: {
    summary: `Taiwan's infrastructure represents one of Asia's great success stories - a systematic transformation from agricultural backwater to technological powerhouse, built on meticulous planning and sustained public investment. The High Speed Rail network, connecting Taipei to Kaohsiung in 90 minutes, exemplifies the island's infrastructure philosophy: world-class engineering, operational excellence, and seamless integration with urban transit systems. Taipei's MRT, consistently ranked among the world's best metro systems, achieves punctuality rates exceeding 99.9% while maintaining immaculate stations that feel more like airport terminals than underground platforms.

Yet Taiwan's infrastructure faces extraordinary geopolitical constraints. Every major project must consider vulnerability to potential Chinese military action. The island depends almost entirely on maritime imports for energy and materials, with no physical connections to neighboring countries. This isolation drives infrastructure decisions in ways unique globally. The push for renewable energy - offshore wind farms now dot the Taiwan Strait - stems as much from energy security concerns as climate commitments. Similarly, the expansion of Taoyuan International Airport balances capacity needs against the reality that cross-strait tensions could disrupt air routes at any moment.

Urban planning in Taipei and other cities demonstrates remarkable density achieved through excellent public transit. Mixed-use development around MRT stations, pedestrian-friendly streets despite limited space, and extensive bike-sharing networks create livable urban environments despite population pressures. However, aging buildings pose significant seismic risks. Taiwan sits on the Pacific Ring of Fire, and while building codes have improved dramatically since the 1999 Chi-Chi earthquake, thousands of older structures require retrofitting.

Digital infrastructure excellence has made Taiwan indispensable to global technology supply chains. Fiber optic networks blanket the island, 5G deployment proceeds rapidly, and internet speeds rival anywhere globally. This digital infrastructure advantage enabled Taiwan's COVID-19 response - contact tracing, mask rationing systems, and digital health certificates deployed with efficiency that amazed international observers. Yet this same digital sophistication makes Taiwan a prime target for Chinese cyberattacks. Critical infrastructure protection remains a continuous battle.

Transportation infrastructure beyond the high-speed rail and Taipei MRT varies considerably. Regional rail networks need modernization, particularly in the east. Road infrastructure, while generally good, faces congestion in major urban corridors. Port infrastructure at Kaohsiung and Taichung handles massive container volumes crucial to Taiwan's export economy, but expansion options are geographically constrained. The island's mountainous terrain and earthquake risk make major infrastructure projects extraordinarily expensive and complex.

The infrastructure imperative for Taiwan is maintaining excellence while preparing for scenarios ranging from natural disasters to potential military conflict. How Taiwan balances growth needs, resilience requirements, and geopolitical realities shapes not just the island's future but global economic security.`,
    issues: [
      "Seismic retrofitting of aging building stock in major cities",
      "Energy infrastructure vulnerability due to maritime import dependence",
      "Critical infrastructure protection against cyberattacks",
      "Port and airport capacity constraints amid geopolitical tensions",
      "Regional transportation disparities between western and eastern Taiwan"
    ]
  },
  TANZANIA: {
    summary: `Tanzania's infrastructure tells a story of ambition constrained by resources and geography. The nation faces the fundamental challenge confronting much of Sub-Saharan Africa: how to build 21st-century infrastructure systems in a country where millions still lack basic services, across vast distances with limited fiscal capacity. The Dar es Salaam Bus Rapid Transit system, East Africa's first BRT, demonstrates what's possible - dedicated bus lanes moving hundreds of thousands daily with operational efficiency that rivals systems in wealthier nations. Yet this single success highlights how much remains undone.

The Standard Gauge Railway project represents Tanzania's largest infrastructure gamble. Chinese-financed construction connecting Dar es Salaam to Mwanza via Dodoma aims to replace the century-old Central Railway, reducing journey times from days to hours. The first phase to Makutupora opened in 2023, but the project faces familiar challenges of Chinese Belt and Road infrastructure: massive debt burdens, unclear economic viability, and questions about long-term operational sustainability. Tanzania committed billions to a railway that may take decades to justify its cost, if ever. The gamble is that regional integration and mineral exports will eventually validate the investment, but early passenger numbers disappoint.

Dar es Salaam's port infrastructure shapes the entire region's economy. As the main maritime gateway for Tanzania, Rwanda, Burundi, eastern Democratic Republic of Congo, Uganda, and Zambia, port efficiency directly impacts landlocked neighbors' economic prospects. Berths chronically exceed capacity, container dwell times remain excessive, and corruption plagues customs processes. Port expansion plans proceed slowly despite clear economic rationale. The Bagamoyo port project, once promised as a transformational mega-port, stalled amid financing disputes and environmental concerns. Tanzania's port bottleneck constrains regional growth.

Rural infrastructure deficits remain staggering. Millions of Tanzanians lack all-season road access, with entire communities isolated during rainy seasons. Electrification rates, while improving, still leave majority rural populations without reliable power. Water infrastructure in rural areas often means women walking kilometers daily. The infrastructure gap between Dar es Salaam and rural Tanzania resembles gaps between countries, not regions of one nation. Development plans promise improvement, but funding constraints and challenging terrain slow progress to incremental gains rather than transformational change.

Digital infrastructure shows more promising trajectories. Mobile network coverage expands rapidly, with 4G reaching smaller towns. Mobile money systems enable financial inclusion without physical banking infrastructure. Yet internet costs remain prohibitive for many, and digital infrastructure concentrates in urban areas. The government's push for digital services struggles against limited connectivity and low computer literacy rates.

Tanzania's infrastructure imperative is managing the tension between mega-projects promising transformation and basic infrastructure serving millions without adequate roads, power, or water. Resource allocation choices define whether Tanzania builds foundation for future growth or creates impressive monuments alongside persistent underdevelopment.`,
    issues: [
      "Standard Gauge Railway financial viability and debt sustainability",
      "Port congestion constraining regional trade and economic growth",
      "Rural electrification and all-season road access gaps",
      "Urban water infrastructure inadequacy in rapidly growing cities",
      "Digital infrastructure disparities between urban and rural areas"
    ]
  },
  THAILAND: {
    summary: `Thailand's infrastructure paradox is immediately apparent to any visitor: world-class airports and elevated expressways coexist with chronic flooding, traffic gridlock, and aging systems straining under growth pressures. Bangkok's Suvarnabhumi Airport ranks among Asia's busiest, a gleaming hub processing over 60 million passengers annually, yet the city below suffers some of Asia's worst traffic congestion. This duality defines Thai infrastructure - impressive achievements undermined by incomplete planning, deferred maintenance, and political instability disrupting long-term investment.

The Bangkok Mass Transit system shows both promise and limitation. The BTS Skytrain and MRT subway move millions daily with air-conditioned comfort, but network coverage remains inadequate for a metropolitan area of 15 million. Expansion proceeds slowly, hampered by jurisdictional disputes between agencies, land acquisition challenges, and funding constraints. Meanwhile, surface transport chokes on congestion costing billions annually in lost productivity. The gap between Bangkok's elevated rail networks and gridlocked streets below visualizes Thailand's infrastructure planning disconnect - building premium systems while basic needs go unmet.

High-speed rail ambitions demonstrate Thailand's infrastructure challenges writ large. Plans for Bangkok-Chiang Mai and Bangkok-Rayong high-speed lines have been announced, revised, and delayed repeatedly over two decades. The Bangkok-Nakhon Ratchasima line, under Chinese construction, proceeds far behind schedule amid technical disputes and cost overruns. Thailand wants modern rail infrastructure but struggles with financing, technology transfer, and political will to see massive projects through multiple government cycles. Each coup or election risks project cancellation or fundamental redesign.

Flood management infrastructure, or its absence, poses existential urban risk. Bangkok sits barely above sea level on subsiding land, threaded by canals that once earned it "Venice of the East" comparisons but now struggle as flood defenses. The 2011 floods devastated manufacturing zones and exposed how economic growth proceeded without adequate water management infrastructure. Flood barriers, retention basins, and drainage improvements advance incrementally, but climate change and continued land subsidence race ahead of infrastructure responses. Bangkok faces potential uninhabitability without massive flood defense investments.

Digital infrastructure and smart city initiatives progress more successfully. Mobile networks blanket the country with 4G and expanding 5G. Digital payments penetrate deeply, and e-government services improve accessibility. The Eastern Economic Corridor promises high-tech industrial development with supporting infrastructure, though execution lags ambitions. Thailand's digital infrastructure advantage positions it well for future economic development, assuming political stability allows sustained implementation.

The infrastructure imperative for Thailand is overcoming political discontinuity to build integrated, resilient systems. Individual projects may impress, but Thailand needs infrastructure planning that survives government changes and addresses systemic challenges like flooding, congestion, and regional disparities rather than delivering isolated showcase projects.`,
    issues: [
      "Bangkok flood defense infrastructure inadequate for climate risks and subsidence",
      "High-speed rail project delays and cost overruns under Chinese construction",
      "Mass transit coverage insufficient for Bangkok metropolitan area",
      "Surface road congestion costing billions in lost economic productivity",
      "Infrastructure planning disrupted by political instability and government changes"
    ]
  },
  TRINIDAD_AND_TOBAGO: {
    summary: `Trinidad and Tobago's infrastructure reflects oil wealth unevenly applied. The twin-island nation used petrochemical revenues to build infrastructure systems superior to most Caribbean neighbors, yet chronic underinvestment, deferred maintenance, and planning failures now leave the country with aging, inadequate systems struggling to serve modern needs. Port of Spain's harbor facilities handle substantial cargo but operate below potential. The airport functions but lacks capacity for tourism expansion. Roads carry traffic but flood regularly and deteriorate faster than maintenance can address. Oil money created infrastructure, but oil dependency prevented developing the governance systems needed to maintain and improve it.

Water infrastructure dysfunction impacts daily life across both islands. The Water and Sewerage Authority struggles with aging pipes, massive system losses, and inadequate treatment capacity. Scheduled water supply interruptions affect entire neighborhoods. Leakage rates approach 50% - roughly half the water entering the system disappears before reaching consumers. This in a tropical country with abundant rainfall. The disconnect between water resources and reliable supply stems from infrastructure neglect and institutional dysfunction rather than natural scarcity. Fixing water infrastructure requires sustained investment Trinidad can afford but hasn't prioritized.

Road infrastructure and traffic management fail the test of any morning commute. Port of Spain traffic congestion rivals cities many times larger. The nation attempted Bus Rapid Transit, but implementation faltered. Water taxis connecting Port of Spain to San Fernando provide alternative transit, but service remains limited. The Diego Martin Highway and other major corridors carry far more vehicles than designed capacity. Massive potholes appear and persist. Traffic signals malfunction. The infrastructure exists but deteriorates faster than maintenance addresses. The result is hours lost to congestion daily, fuel wasted, and economic productivity drained.

Energy infrastructure shows the paradox of oil wealth. Trinidad and Tobago possesses abundant natural gas, making it a major exporter and industrial producer. Petrochemical plants and LNG facilities represent world-class industrial infrastructure. Yet electricity distribution suffers frequent outages. The national grid struggles with reliability despite abundant energy resources. Industrial energy infrastructure contrasts sharply with residential electricity systems failing to meet basic reliability standards. The nation exports energy while citizens experience blackouts.

Digital infrastructure modernizes more successfully than physical systems. Mobile networks provide good coverage, internet access expands, and digital payment systems grow. Government digitization initiatives improve service delivery. Technology offers paths to leapfrog infrastructure deficits in some domains, but cannot substitute for functioning water systems, maintained roads, and reliable electricity. Trinidad needs both digital advancement and physical infrastructure rehabilitation.

The infrastructure imperative for Trinidad and Tobago is confronting deferred maintenance and planning failures before systems collapse entirely. Oil wealth provided initial infrastructure but hasn't maintained it. As oil revenues decline, the imperative becomes more urgent and solutions more difficult. Trinidad faces infrastructure crisis unless governance improves alongside investment.`,
    issues: [
      "Water infrastructure losses approaching 50% due to aging pipe systems",
      "Port of Spain traffic congestion and inadequate public transit alternatives",
      "Electricity grid reliability problems despite abundant natural gas resources",
      "Deferred road maintenance creating pothole crisis and surface deterioration",
      "Declining oil revenues threatening future infrastructure investment capacity"
    ]
  },
  TUNISIA: {
    summary: `Tunisia's infrastructure embodies the contradictions of North African development - a relatively advanced system by regional standards that nonetheless struggles with chronic underinvestment, regional disparities, and the aftermath of political upheaval. The coastal cities of Tunis, Sousse, and Sfax enjoy infrastructure that served the Ben Ali regime's tourism and export economy: modern ports, international airports, highway networks connecting economic centers. Yet the interior regions that sparked the 2011 revolution remain infrastructure-neglected, a geographic inequality that feeds ongoing political instability.

The Tunis Metro and light rail network represents one of Africa's better urban transit systems, moving hundreds of thousands daily through the capital with reasonable efficiency. French-built in the 1980s, the system shows its age but continues functioning. Expansion plans proceed slowly amid funding constraints. The broader challenge is that Tunis has decent public transit while smaller cities rely on inadequate road transport and rural areas often lack all-season access. Infrastructure investment concentrates where economic activity exists, perpetuating the coastal-interior divide that defines Tunisian development challenges.

Port infrastructure at Tunis-La Goulette, Radès, and Sousse handles Tunisia's vital Mediterranean trade connections to Europe. These ports represent crucial economic lifelines for an export-dependent economy, but capacity constraints and operational inefficiencies limit growth potential. The government recognizes port modernization as critical for economic competitiveness, but financing and implementation proceed incrementally. Tunisia competes with Moroccan and Egyptian ports for Mediterranean trade, making port efficiency an economic competitiveness issue beyond just domestic needs.

Railway infrastructure, inherited from French colonial era and modestly expanded since independence, provides passenger and freight service but suffers chronic underinvestment. The network connects major cities reasonably well, though journey times and service frequency disappoint. Plans for modernization include electrification and speed improvements, but funding remains uncertain. Tunisia's railways function but represent missed economic opportunity - neither competitive enough for significant freight nor comfortable enough to shift substantial passenger traffic from roads.

Digital infrastructure emerges as a bright spot. Tunisia's relatively educated population, French language skills, and proximity to Europe attracted IT outsourcing and tech sector investment. Internet penetration grows, mobile networks provide good coverage, and digital startups proliferate. The government promotes digital economy development as a path beyond tourism and textile exports. Digital infrastructure offers Tunisia potential competitive advantages if political stability allows sustained implementation.

The infrastructure imperative for Tunisia is addressing regional disparities that fuel political instability while maintaining and modernizing existing systems serving the coast. The country needs simultaneous infrastructure catch-up in neglected interior and infrastructure upgrading in economic centers. Limited fiscal capacity makes these dual imperatives nearly impossible to address adequately. Tunisia's political and economic stability depends partly on solving infrastructure challenges that predate the 2011 revolution and persist despite it.`,
    issues: [
      "Regional infrastructure disparities between coastal cities and neglected interior",
      "Railway modernization needs amid chronic underinvestment and funding constraints",
      "Port capacity limitations threatening economic competitiveness in Mediterranean trade",
      "Urban water infrastructure inadequacy and service interruptions",
      "Road maintenance backlog particularly severe in rural and interior regions"
    ]
  },
  TURKEY: {
    summary: `Turkey's infrastructure transformation over the past two decades ranks among the world's most dramatic. The nation has built highways, bridges, airports, high-speed rail, and urban transit systems at a pace few countries match. Istanbul's new airport, opened in 2019, aims to become the world's busiest. The Marmaray Tunnel connects Europe and Asia beneath the Bosphorus - an engineering achievement centuries in conception. High-speed rail now connects major cities. Yet this infrastructure boom proceeds on foundations of massive debt, political centralization, and projects selected for symbolic value as much as economic rationale.

The Third Bosphorus Bridge, Çanakkale 1915 Bridge, and Istanbul's successive mega-bridges exemplify Turkey's infrastructure philosophy under Erdoğan: build spectacular projects demonstrating national capability and leadership vision. These bridges are indeed impressive - world-record spans connecting continents. But critics question economic justification for multiple massive bridges when existing capacity could be better utilized with improved traffic management and public transit. Turkey builds to impress as much as to serve transportation needs, with debt burdens accumulating accordingly.

Istanbul's infrastructure challenges crystallize Turkey's broader struggles. The city has added metro lines at remarkable pace - more than 150 kilometers of new rail in a decade. Yet Istanbul's 16 million people still face chronic congestion, earthquake vulnerability, and inadequate infrastructure for its size. The city sprawls across seismic fault lines, with hundreds of thousands of buildings vulnerable to major earthquake. Urban transformation projects promise to replace dangerous housing, but implementation has been slow and politically contentious. Istanbul needs infrastructure that makes the city safer and more livable, not just more spectacular.

High-speed rail development demonstrates both capability and limitations. The Ankara-Konya line achieves 300 km/h, matching European standards. However, some high-speed lines serve relatively low-traffic corridors, built more for national prestige than transportation economics. The question facing Turkish infrastructure isn't technical capacity - Turkey can build world-class systems - but resource allocation and project prioritization. Building everything everywhere simultaneously may create impressive statistics but strains public finances and produces infrastructure that exceeds demand in some locations while leaving gaps in others.

Energy and digital infrastructure proceed more pragmatically. Turkey invested heavily in renewable energy, particularly wind power, achieving significant generation capacity. Natural gas infrastructure connects Turkey to Central Asian and Russian supplies, though this creates geopolitical vulnerabilities alongside energy security. Digital infrastructure modernizes rapidly, with fiber optic networks expanding and 5G deployment underway. These infrastructure domains show Turkey's capabilities when projects prioritize function over symbolism.

The infrastructure imperative for Turkey is consolidating and maintaining what has been built rather than pursuing endless expansion. Debt sustainability, earthquake preparedness, and addressing infrastructure deficits in secondary cities deserve priority over additional mega-projects. Turkey built impressive infrastructure; now it must operate, maintain, and strategically complete what it started.`,
    issues: [
      "Massive infrastructure debt accumulation from mega-project emphasis",
      "Istanbul seismic vulnerability with hundreds of thousands of at-risk buildings",
      "High-speed rail lines serving low-traffic corridors with questionable economics",
      "Infrastructure project selection prioritizing political symbolism over economic rationale",
      "Deferred maintenance needs as focus remains on new spectacular projects"
    ]
  },
  TURKMENISTAN: {
    summary: `Turkmenistan's infrastructure represents authoritarian mega-project planning untethered from economic rationality. The capital Ashgabat gleams with white marble palaces, gold-domed towers, and boulevards wider than necessary, built to glorify the regime rather than serve citizens. The government demolishes neighborhoods to construct monuments, builds airports for minimal traffic, and creates infrastructure for a symbolic Turkmenistan rather than the actual country. Vast natural gas wealth funds this infrastructure surrealism, producing some of the world's most expensive per-capita infrastructure investment with questionable returns.

Ashgabat International Airport exemplifies the disconnect. Opened in 2016 at massive cost, designed to handle nine million passengers annually, it serves fewer than two million. The building is spectacular - a soaring falcon-shaped terminal visible from orbit. But most gates sit empty. Most check-in counters are unused. The disconnect between infrastructure capacity and actual demand pervades Turkmen infrastructure planning. The government builds for prestige and propaganda, not transportation or economic need. The result is infrastructure simultaneously impressive and wasteful.

Road infrastructure includes some of Central Asia's best highways connecting major cities, built with natural gas revenues. However, these highways serve limited traffic in a country of six million people. Rural road infrastructure remains inadequate in many areas despite showcase urban highways. The pattern repeats: impressive infrastructure where visible, neglected infrastructure where not. The government prioritizes projects that can be photographed and broadcast, leaving everyday infrastructure needs inadequately addressed.

Railway infrastructure receives substantial investment, with connections to neighboring Iran, Afghanistan, and plans for expanded networks. The Turkmenistan-Afghanistan-Tajikistan railway represents genuine regional infrastructure development, potentially enabling trade and connectivity. However, operational efficiency suffers from corruption, bureaucracy, and economic isolation. Infrastructure exists on paper and in physical form, but doesn't always function effectively. Turkmenistan's authoritarian governance and economic controls limit infrastructure utilization even when physical systems are impressive.

Digital infrastructure remains the most obviously constrained. Internet access is heavily filtered, social media largely blocked, and digital freedom essentially nonexistent. The government controls telecommunications entirely, prioritizing surveillance over connectivity. While mobile networks provide coverage, internet speeds and access lag regional peers. Digital infrastructure serves state control rather than economic development or citizen services. Turkmenistan has the financial capacity to build world-class digital infrastructure but chooses restriction over openness.

Energy infrastructure, unsurprisingly for one of the world's largest natural gas reserves, includes substantial pipeline capacity to China, Russia, and Iran. These pipelines represent Turkmenistan's most economically rational infrastructure - enabling the natural gas exports that fund everything else. Gas infrastructure works because it must; other infrastructure exists because it can.

The infrastructure imperative for Turkmenistan is reorienting from symbolic mega-projects toward systems serving actual economic and social needs. This would require governance transformation, making it unlikely while current political system persists.`,
    issues: [
      "Infrastructure capacity vastly exceeding demand due to prestige-driven planning",
      "Digital infrastructure severely restricted to enable authoritarian control",
      "Rural infrastructure neglected while urban showcase projects receive massive investment",
      "Airport and public building projects designed for symbolism rather than utility",
      "Economic isolation limiting infrastructure utilization despite physical capacity"
    ]
  },
  UGANDA: {
    summary: `Uganda's infrastructure tells a story of gradual progress constrained by limited resources, challenging terrain, and governance challenges. Kampala, the capital, grows explosively without adequate infrastructure to support urbanization. Roads choke with traffic, power outages disrupt daily life, and water infrastructure struggles to serve expanding populations. Yet progress occurs: the Entebbe Expressway connects the capital to its international airport with modern highway standards, demonstrating what's possible with adequate funding and planning. The challenge is scaling such successes across a country where most infrastructure remains inadequate.

The Standard Gauge Railway project represents Uganda's infrastructure future wagered on Chinese financing. The planned line connecting Kampala to Kenya's SGR network would transform Uganda's freight costs and regional connectivity. Currently, goods moving between Mombasa port and Kampala spend days on congested roads and at border crossings. Rail could reduce journey times to hours and costs substantially. However, the project proceeds slowly, costs escalate, and debt concerns mount. Uganda must balance infrastructure needs against debt sustainability, a calculation complicated by opacity surrounding Chinese lending terms.

Electricity infrastructure shows both progress and persistent deficits. Hydropower investments, including the controversial Bujagali and Karuma dams, increased generation capacity substantially. However, transmission and distribution infrastructure lags behind generation. Rural electrification rates remain low despite government targets. Connection costs exceed most citizens' means even where lines exist. Uganda produces more power than a decade ago but hasn't solved the distribution challenge of reaching dispersed rural populations affordably. The infrastructure gap between generation and distribution exemplifies planning disconnects.

Road infrastructure receives substantial investment but struggles against Kampala's explosive growth. The Northern Bypass reduced central city traffic somewhat, but population growth and vehicle increases quickly absorbed capacity gains. Road maintenance suffers from limited budgets and corruption. Roads deteriorate faster than repairs occur, creating potholes that damage vehicles and slow travel. The government announces ambitious road programs, but implementation capacity and funding fall short of needs. Uganda builds roads but not fast enough or maintained well enough to serve growth demands.

Water and sanitation infrastructure inadequacy affects millions. Kampala's water supply reaches only about 70% of residents, lower in other cities. Rural water access depends on boreholes and wells that often fail. Sanitation infrastructure remains severely inadequate, particularly in informal settlements housing much of urban populations. Water and sanitation infrastructure receives less attention than roads and power but arguably impacts more Ugandans more directly. The infrastructure basics that enable public health and quality of life receive insufficient priority.

The infrastructure imperative for Uganda is balancing transformational mega-projects like SGR against basic infrastructure serving millions without adequate water, sanitation, and electricity. Resource constraints force difficult choices between competing infrastructure needs. Uganda's development trajectory depends partly on whether infrastructure investment focuses on fundamentals or bets on mega-projects promising future transformation.`,
    issues: [
      "Standard Gauge Railway debt sustainability and construction delays",
      "Kampala traffic congestion outpacing road infrastructure expansion",
      "Electricity distribution infrastructure lagging behind generation capacity growth",
      "Water and sanitation infrastructure severely inadequate in urban and rural areas",
      "Road maintenance backlog with deterioration exceeding repair capacity"
    ]
  },
  UKRAINE: {
    summary: `Ukraine's infrastructure narrative changed completely on February 24, 2022. Before Russia's full-scale invasion, the story was of gradual modernization, European integration, and addressing Soviet legacy systems. Since then, infrastructure has become a war target and resistance symbol. Russian missile and drone strikes deliberately target power plants, substations, water facilities, bridges, and railways. Ukraine's infrastructure challenge is not just development but survival, repair, and resilience under sustained attack. The country simultaneously fights a war and attempts to maintain basic infrastructure services for tens of millions of citizens.

Energy infrastructure faces systematic destruction. Russia targets electrical generation and transmission infrastructure with cruise missiles, attempting to break Ukrainian civilian morale through winter blackouts. Power plants damaged in 2022 attacks are repaired, then struck again. Electrical workers become frontline infrastructure defenders, repairing damage under fire. Ukraine's ability to maintain electricity supply despite hundreds of strikes demonstrates both infrastructure resilience and Russian failure to achieve strategic objectives through infrastructure warfare. Yet the cumulative damage is severe, and the power system operates under constant threat.

Railway infrastructure proved unexpectedly crucial to Ukraine's war effort. Ukrainian Railways, often dismissed as a Soviet relic needing modernization, became the logistics backbone enabling military resistance and civilian survival. Evacuation trains moved millions from war zones. Supply trains keep forces equipped. Hospital trains transport wounded. Repair crews fix damaged tracks within hours of strikes. Ukraine's railways achieved operational performance under wartime conditions that peacetime-optimized systems could never match. The infrastructure that critics wanted to reform instead saved the nation.

Road and bridge infrastructure suffers direct combat damage across eastern and southern regions. Major bridges over the Dnipro River became strategic flashpoints. The Antonivskyi Bridge, Kakhovka dam road crossing, and others faced repeated strikes from both sides. Bypasses, pontoon bridges, and temporary repairs maintain connectivity despite destruction. In liberated territories, road repairs and mine clearance become urgent infrastructure priorities. Ukraine must rebuild while fighting, an infrastructure challenge unprecedented in modern Europe.

Urban infrastructure in cities like Mariupol, Bakhmut, and Avdiivka has been obliterated - not just damaged but destroyed to rubble. Reconstruction will require not just rebuilding but reimagining entire cities. The scale exceeds anything Europe has faced since World War II. International commitments to fund reconstruction reach hundreds of billions, but actual rebuilding awaits war's end. Meanwhile, infrastructure in safer regions must absorb millions of internally displaced people, straining water, power, housing, and transport systems never designed for such influxes.

Digital infrastructure becomes wartime critical infrastructure. Starlink satellite terminals provided by SpaceX enabled communications when terrestrial infrastructure was destroyed. Ukraine's digital government systems, developed before the war, allowed continued state functions despite occupation and destruction. The infrastructure advantage of digital systems is resilience - harder to destroy and faster to restore than physical infrastructure. Ukraine's embrace of digital infrastructure proved strategically valuable when physical infrastructure came under attack.

The infrastructure imperative for Ukraine is maintaining services under wartime conditions while planning reconstruction that incorporates resilience against future attacks. Infrastructure must be defensible, repairable, and decentralized. Ukraine rebuilds not to pre-war standards but to new paradigms shaped by wartime experience.`,
    issues: [
      "Energy infrastructure systematic targeting requiring constant repair and defense",
      "Urban infrastructure total destruction in combat zones requiring full reconstruction",
      "Bridge and transportation infrastructure damage disrupting logistics and civilian movement",
      "Electrical grid resilience against sustained missile and drone attacks",
      "Infrastructure reconstruction planning while war continues with uncertain timeline"
    ]
  },
  UNITED_ARAB_EMIRATES: {
    summary: `The United Arab Emirates' infrastructure represents petrodollar-funded ambition realized at extraordinary scale and speed. Dubai and Abu Dhabi have built in decades what other cities develop over centuries: airports handling over 100 million passengers annually, metro systems with driverless trains, artificial islands, the world's tallest building, and urban infrastructure that functions in one of Earth's harshest climates. The UAE transformed desert into gleaming metropolis through massive investment, imported labor, and infrastructure planning unconstrained by democratic debate or fiscal discipline. The results are undeniably impressive, raising questions about sustainability, purpose, and replicability.

Dubai Metro exemplifies UAE infrastructure philosophy: automated, air-conditioned, spotlessly clean, and operating with Swiss precision. The system moves hundreds of thousands daily in comfort that defies the desert heat outside. Yet the metro also reveals limitations - coverage remains inadequate for Dubai's sprawl, and the system primarily serves expatriate workers while Emiratis continue preferring private vehicles. Infrastructure exists to showcase capability and serve economic zones rather than providing comprehensive public transit. Dubai built a showcase metro, not a transportation revolution.

Aviation infrastructure makes UAE infrastructure global rather than merely regional. Dubai International and Abu Dhabi International airports, combined with Emirates and Etihad airlines, position the UAE as global aviation hub. These airports operate as 24-hour cities themselves, with infrastructure supporting millions of connecting passengers. The aviation infrastructure represents genuine strategic success - the UAE leveraged geography, capital, and planning to become indispensable in global air transport. Unlike many UAE infrastructure projects, the aviation bet clearly pays off economically.

Urban planning in Dubai and Abu Dhabi creates infrastructure supporting radically artificial environments. Massive desalination plants supply water where none exists naturally. Air conditioning infrastructure enables human habitation and comfort in summer temperatures exceeding 50°C. Flood drainage systems protect against occasional but devastating rainfall. The UAE has built infrastructure to make the uninhabitable habitable, a feat of engineering that also represents environmental unsustainability at scale. Climate-controlled cities in the desert exemplify humanity's infrastructure capabilities and hubris simultaneously.

Renewable energy infrastructure development seems incongruous in a petrostate, yet the UAE invests substantially in solar power. The Mohammed bin Rashid Al Maktoum Solar Park aims to become one of the world's largest solar facilities. Nuclear power at Barakah adds low-carbon generation capacity. These investments suggest recognition that oil wealth is finite and that energy diversification makes economic and strategic sense. The UAE's renewable infrastructure investments proceed from calculation rather than climate commitment, but the infrastructure gets built regardless of motivation.

Port and logistics infrastructure positions the UAE as regional trade hub. Jebel Ali Port ranks among the world's busiest container ports. Logistics facilities, free zones, and streamlined customs create infrastructure supporting Dubai's entrepôt economy. Like aviation, the ports and logistics infrastructure serves clear economic purpose beyond prestige. The UAE recognized infrastructure opportunities from geographic position and seized them with investment and planning.

The infrastructure imperative for UAE is maintaining and justifying what has been built. Can infrastructure designed for perpetual growth adapt to potential stagnation? How long can desert cities dependent on massive energy and water infrastructure remain sustainable? The UAE built extraordinary infrastructure; now it must demonstrate long-term viability beyond oil wealth and migrant labor.`,
    issues: [
      "Urban infrastructure environmental sustainability in extreme desert climate",
      "Public transit coverage inadequate despite showcase metro systems",
      "Infrastructure maintenance and renewal as early mega-projects age",
      "Water infrastructure complete dependence on energy-intensive desalination",
      "Economic diversification pressure as oil wealth eventually declines"
    ]
  },
  UNITED_KINGDOM: {
    summary: `British infrastructure embodies the paradox of early industrial leadership become contemporary constraint. The nation that pioneered railways, built the world's first underground metro, and created infrastructure systems emulated globally now struggles with infrastructure that lags peer nations. London's Tube, while iconic, operates with Victorian tunnels and aging rolling stock requiring constant maintenance. Roads designed for pre-automotive era carry 21st-century traffic. Housing stock includes millions of poorly insulated homes consuming excessive energy. Britain's infrastructure legacy is simultaneously an asset and an anchor.

The High Speed 2 railway project exemplifies contemporary British infrastructure dysfunction. Planned to connect London to Birmingham, Manchester, and Leeds with European-standard high-speed rail, HS2 has become a cautionary tale of cost overruns, scope reductions, and political indecision. Originally budgeted around £30 billion, costs escalated past £100 billion. The northern sections to Manchester and Leeds were cancelled. What remains is an extraordinarily expensive railway connecting London to Birmingham - necessary infrastructure, but hardly the transformational network originally promised. HS2 reveals British infrastructure planning's inability to deliver major projects on time and on budget.

London's transportation infrastructure functions through constant heroic effort rather than modern efficiency. The Elizabeth Line, finally opened in 2022 after years of delays and cost overruns, provides genuine capacity increase and demonstrates what British infrastructure can achieve. However, the fact that completing one railway line becomes national achievement rather than routine project indicates how far British infrastructure capacity has declined. The Tube requires massive ongoing investment just to maintain service, let alone expand. Bus networks face cuts. Road congestion costs billions in lost productivity.

Water infrastructure scandal erupted with revelations of massive sewage releases into rivers and coastal waters. Thames Water and other privatized water companies invested minimally in infrastructure while extracting dividends, leaving Victorian-era systems inadequate for current populations. Sewage treatment capacity proves insufficient, resulting in regular releases of untreated waste during heavy rainfall. The water infrastructure crisis demonstrates how privatization without adequate regulation and investment requirements creates infrastructure degradation despite company profitability. Britain's water infrastructure needs billions in investment that privatized companies failed to provide.

Digital infrastructure shows more success. Fiber optic broadband expands, 5G networks deploy, and Britain maintains strong digital connectivity. However, rural areas often lack adequate broadband, creating digital divides. Government targets for universal broadband access repeatedly slip. Digital infrastructure proceeds better than physical infrastructure but still reveals planning and implementation weaknesses.

Energy infrastructure transitions chaotically from fossil fuels toward renewables. Offshore wind capacity grows substantially, making Britain a world leader. However, nuclear delays at Hinkley Point and elsewhere leave capacity gaps. Grid infrastructure requires massive upgrading to handle renewable generation. Energy infrastructure planning seems perpetually behind needs, reactive rather than anticipatory. Britain talks ambitious climate targets but infrastructure development lags policy rhetoric.

Housing infrastructure crisis affects millions. Decades of insufficient construction left Britain with severe housing shortages driving unaffordable costs. Infrastructure to support housing - utilities, transport, schools - often proves inadequate even when housing gets built. Britain builds slowly and plans poorly, creating housing and infrastructure crises that compound each other.

The infrastructure imperative for Britain is confronting decades of underinvestment and developing governance systems capable of delivering major projects. Infrastructure should not be political battlefield but national priority transcending election cycles. Britain needs infrastructure revolution, not incremental tinkering.`,
    issues: [
      "HS2 railway massive cost overruns and northern route cancellations",
      "Water infrastructure sewage crisis from decades of privatized underinvestment",
      "London Tube aging systems requiring massive maintenance and upgrade investment",
      "Housing shortage compounded by inadequate infrastructure to support new development",
      "Energy grid infrastructure lagging behind renewable generation expansion needs"
    ]
  },
  UNITED_STATES: {
    summary: `American infrastructure confronts the consequences of deferred maintenance and political dysfunction. The nation that built the Interstate Highway System, created global aviation infrastructure, and pioneered modern urban water systems now watches infrastructure crumble while debating whether to fix it. Bridges reach or exceed design lifespans. Water mains burst regularly in cities nationwide. Electrical grids fail during extreme weather. Public transit systems in most cities remain inadequate. The infrastructure that enabled 20th-century American prosperity now constrains 21st-century potential. The 2021 Infrastructure Investment and Jobs Act provides $1.2 trillion, a substantial sum but likely insufficient to address accumulated deficits estimated in trillions.

Transportation infrastructure reveals deepest challenges. The Interstate Highway System, revolutionary when built in the 1950s-1970s, desperately needs repair and modernization. Bridges classified as structurally deficient number in tens of thousands. Urban highways designed for 1960s traffic volumes carry far more vehicles, creating chronic congestion. Unlike peer nations, America lacks high-speed rail connecting major cities. Amtrak limps along on freight company tracks, delivering third-world service in the world's largest economy. The national passenger rail infrastructure is an embarrassment compared to European and Asian systems.

Public transit infrastructure in most American cities remains inadequate to nonexistent. New York's subway, while extensive, operates with 1930s infrastructure showing its age. Boston's MBTA suffers reliability crisis from deferred maintenance. Los Angeles builds rail slowly while remaining car-dependent. Outside major coastal cities, public transit barely exists as meaningful option. American urban planning prioritized automobiles for decades, leaving car-dependent sprawl requiring massive highway infrastructure while transit infrastructure atrophies. Reversing this pattern requires sustained investment most cities lack political will and funding to pursue.

Water infrastructure crisis looms larger than most Americans recognize. Flint, Michigan's lead contamination scandal revealed how widespread water infrastructure failures have become. Water mains across the country exceed design lifespans, breaking regularly and wasting billions of gallons. Sewage systems combine stormwater and waste, releasing untreated sewage during heavy rainfall. Water treatment plants require upgrades. The EPA estimates water infrastructure needs exceed $600 billion, but funding remains grossly inadequate. Water infrastructure fails silently until crisis forces attention, then underfunding allows crisis to persist.

Electrical grid infrastructure faces increasing strain from extreme weather and renewable integration. Texas blackouts in 2021 revealed how fragile grid infrastructure has become. California manages fire risks by preemptive blackouts affecting millions. The grid was designed for centralized fossil fuel generation and struggles adapting to distributed renewable generation. Modernization requires massive investment in transmission, storage, and smart grid technology. The infrastructure exists but increasingly fails to deliver reliability modern economy requires.

Airport infrastructure, while generally functional, shows age and capacity constraints. LaGuardia's renovation attempted addressing decades of neglect. JFK, LAX, and other major airports lag international peers in passenger experience. Air traffic control systems operate on decades-old technology. America pioneered aviation but allowed infrastructure to stagnate while other nations built modern systems.

Digital infrastructure creates new divides. Rural broadband gaps leave millions without adequate internet access. Urban areas enjoy fiber and 5G while rural Americans struggle with dial-up speeds or no service. The infrastructure disparity reflects and reinforces economic inequality between regions. Unlike physical infrastructure where America built comprehensively, digital infrastructure develops unevenly, leaving some behind.

The infrastructure imperative for America is mobilizing political will and sustained funding to rebuild crumbling systems before collapse. Infrastructure should not be partisan issue but national survival imperative. America built world-class infrastructure once; it must do so again or accept managed decline.`,
    issues: [
      "Bridge infrastructure with tens of thousands classified as structurally deficient",
      "Water infrastructure lead contamination risks and aging water mains breaking",
      "Electrical grid vulnerable to extreme weather and inadequate for renewable integration",
      "Public transit infrastructure inadequate in most cities outside major coastal metros",
      "High-speed rail nonexistent while peer nations operate extensive networks"
    ]
  },
  URUGUAY: {
    summary: `Uruguay's infrastructure reflects the country's broader character - modest, functional, surprisingly effective given resource constraints, but increasingly strained by growth and deferred investment. Montevideo's infrastructure serves the capital's 1.3 million people reasonably well, but much of it dates from mid-century and shows its age. The highway network connecting major cities functions adequately, but secondary roads often disappoint. Water and sanitation infrastructure works better than in many Latin American neighbors, but requires upgrading. Uruguay has maintained infrastructure others allowed to collapse, but maintenance isn't improvement, and the country needs both.

Port infrastructure at Montevideo represents strategic national asset and infrastructure challenge simultaneously. The port serves as important regional facility, handling cargo for Paraguay and parts of Argentina and Brazil. However, capacity constraints and operational inefficiencies limit growth potential. The deepwater port at Rocha, under development, promises to enhance capacity but faces delays and cost concerns. Uruguay's port infrastructure shapes whether the country can leverage geographic position for economic advantage or remains constrained by logistical limitations.

Public transit in Montevideo relies predominantly on buses, with no metro or light rail system. The bus network covers the city reasonably, but service quality varies and the system struggles with congestion. Plans for Bus Rapid Transit or light rail surface periodically but haven't materialized. Montevideo's relatively small size and population density make rail transit economically challenging to justify, but the car-dependent alternative creates congestion and pollution. Uruguay's capital needs transit solutions appropriate to its scale rather than copying mega-city systems.

Energy infrastructure transitioning remarkably toward renewables places Uruguay as Latin American leader. Wind power now generates substantial portion of electricity. Hydroelectric dams on the Uruguay and Negro rivers provide base load. Uruguay achieved over 95% renewable electricity generation - a genuine infrastructure success story demonstrating political will and sustained investment. The energy infrastructure transformation shows what Uruguay can accomplish with clear strategy and execution. Other infrastructure domains might learn from energy sector's renewable transition success.

Digital infrastructure expands impressively for a small country. Fiber optic networks reach most population centers. Mobile coverage extends broadly. Government services increasingly operate digitally. Plan Ceibal, providing laptops to schoolchildren nationwide, pioneered digital education access. Uruguay's digital infrastructure advantages create potential for tech-enabled economic development and service delivery. The country leverages technology to overcome geographic and population constraints, using digital infrastructure to provide services physical infrastructure might deliver less efficiently.

Rural infrastructure remains a challenge. While Uruguay's rural population is small, agricultural production depends on infrastructure supporting farming operations. Rural roads, electrification, and telecommunications need continued investment. The tension between serving dispersed rural populations cost-effectively and ensuring agricultural sector has infrastructure required for competitiveness defines rural infrastructure challenges. Uruguay must balance infrastructure efficiency with ensuring agricultural heartland remains viable.

The infrastructure imperative for Uruguay is strategic upgrading of existing systems while avoiding mega-project temptations inappropriate to the country's scale and resources. Uruguay needs right-sized infrastructure solutions, learning from energy sector success to modernize transportation, water, and urban systems with similar pragmatism and long-term planning.`,
    issues: [
      "Montevideo port capacity constraints limiting regional trade hub potential",
      "Public transit reliance on buses without rapid transit alternatives",
      "Aging urban water and sanitation infrastructure requiring systematic upgrade",
      "Rural road infrastructure maintenance challenges serving dispersed populations",
      "Infrastructure investment balancing between capital city and interior regions"
    ]
  },
  UZBEKISTAN: {
    summary: `Uzbekistan's infrastructure reflects the country's transition from Soviet satellite to independent, cautiously reforming Central Asian state. The nation inherited Soviet-era infrastructure - railways, roads, water systems - built to serve Soviet planning rather than Uzbek needs. Since independence in 1991, infrastructure development proceeded slowly under authoritarian rule prioritizing control over growth. Recent reforms under President Mirziyoyev beginning in 2016 opened the economy somewhat, enabling infrastructure investments that were impossible under his predecessor's autarky. Uzbekistan now modernizes infrastructure while confronting Soviet legacy systems' obsolescence and the challenge of serving 35 million people with limited fiscal capacity.

Tashkent Metro, built in 1977 as Soviet showcase, remains one of the most beautiful metro systems globally - palatial stations adorned with chandeliers, marble, and mosaics. It functions well, moving half a million passengers daily, demonstrating Soviet infrastructure's durability. However, this single metro line in one city contrasts with infrastructure deficits elsewhere. The Tashkent Metro represents what Soviet planning could achieve when prioritizing projects, but also how infrastructure investment concentrated in showcases while neglecting broader needs. Modern Uzbekistan must balance maintaining Soviet heritage infrastructure with building new systems.

Railway infrastructure spans the country, connecting major cities and extending to neighbors. The Afrosiyob high-speed train between Tashkent and Samarkand achieves 250 km/h, demonstrating Uzbekistan's infrastructure ambitions. However, most of the rail network operates at modest speeds on aging infrastructure. The government prioritizes rail modernization, recognizing Uzbekistan's potential as transit corridor between China, Central Asia, and beyond. Chinese Belt and Road financing enables railway expansion that domestic resources couldn't support. The question, as elsewhere with BRI projects, is whether infrastructure improvements justify accumulated debt.

Road infrastructure modernizes gradually, with highway improvements connecting economic centers. However, the road network in secondary cities and rural areas often remains poor. Road maintenance suffers from limited budgets and sometimes harsh weather. The government announces ambitious road-building programs, but implementation lags plans. Uzbekistan's geographic position and large population create substantial road infrastructure needs that current investment rates struggle to meet.

Water infrastructure faces severe challenges in this doubly landlocked nation. The Aral Sea ecological disaster, one of history's worst environmental catastrophes, resulted partly from Soviet water infrastructure prioritizing cotton irrigation over ecosystem sustainability. The consequences persist: water scarcity, degraded irrigation systems, pollution. Uzbekistan must rehabilitate water infrastructure while managing scarce resources more sustainably than Soviet planners did. Urban water infrastructure in Tashkent and other cities requires upgrades. Rural water access remains inadequate in many areas.

Energy infrastructure depends heavily on natural gas and Soviet-era power plants. The country possesses substantial gas reserves, ensuring energy availability but creating carbon intensity. Renewable energy development proceeds slowly, though the government announces solar and wind projects. Energy infrastructure must transition toward cleaner sources while maintaining reliability. Grid infrastructure requires modernization to handle distributed generation and reduce transmission losses.

Digital infrastructure improves under reforms that ended the previous regime's internet restrictions. Mobile networks expand, fiber optic deployment increases, and e-government services develop. However, digital infrastructure still lags regional peers. Uzbekistan's large, young population needs digital infrastructure enabling economic opportunity and global connectivity. Investments in digital systems could enable leapfrogging traditional infrastructure limitations if pursued strategically.

The infrastructure imperative for Uzbekistan is accelerating modernization while managing debt and maintaining what exists. The country can leverage Chinese financing for major projects but must ensure infrastructure serves economic development, not just debt accumulation. Uzbekistan's infrastructure transformation will shape whether reforms enable sustained growth or stall amid fiscal constraints and political uncertainties.`,
    issues: [
      "Water infrastructure crisis from Aral Sea disaster legacy and irrigation system degradation",
      "Railway infrastructure financing via Chinese debt raising sustainability concerns",
      "Rural road and water infrastructure severe inadequacy serving dispersed populations",
      "Energy infrastructure dependence on natural gas without renewable transition strategy",
      "Soviet-era urban infrastructure requiring massive upgrades in secondary cities"
    ]
  },
  VENEZUELA: {
    summary: `Venezuelan infrastructure tells the tragedy of resource curse and governance collapse. The nation with world's largest proven oil reserves has infrastructure that fails basic functions - electrical blackouts lasting days, water systems delivering intermittently, roads cratered with potholes, airports closed for lack of fuel, ports operating far below capacity. The Caracas Metro, once Latin America's pride, operates sporadically with broken escalators, non-functional air conditioning, and trains missing. Venezuela's infrastructure collapse mirrors and enables the country's broader economic and humanitarian catastrophe. What oil wealth built, corruption and mismanagement destroyed.

Electrical infrastructure failure represents Venezuela's infrastructure crisis in microcosm. Blackouts affecting entire regions, including Caracas, occur regularly. The Guri Dam, one of the world's largest hydroelectric facilities, should provide abundant power but suffers chronic maintenance failures. Thermal power plants operate intermittently due to fuel shortages despite vast oil reserves. Transmission infrastructure deteriorates from lack of maintenance. The national electrical grid, once reliable, now delivers power intermittently even in the capital. Businesses and hospitals rely on generators when able to afford them. An oil nation cannot keep the lights on - infrastructure failure as governance failure.

Urban water infrastructure dysfunction affects millions. Caracas and other cities experience water rationing, with many neighborhoods receiving water only days per week or less. Pumping stations lack power or maintenance. Pipes leak extensively. Water treatment proves inadequate, creating health risks. Residents store water in tanks and containers, adapting to infrastructure that no longer functions as designed. The crisis is not water scarcity - Venezuela has abundant water resources - but infrastructure abandonment. Water systems require sustained maintenance and operation that the Venezuelan state no longer provides.

Transportation infrastructure deteriorates across modes. Roads disintegrate with potholes so severe they damage vehicles. Highway maintenance essentially ceased. Bridges require repairs that don't occur. The Caracas Metro operates at a fraction of pre-crisis service levels. Buses face fuel shortages. Simón Bolívar International Airport, Caracas's main airport, operates with minimal international service as airlines abandoned routes. Port infrastructure at Puerto Cabello and La Guaira operates below capacity due to economic collapse. The transportation infrastructure exists but functions marginally, constraining what economic activity persists.

Oil infrastructure, the foundation of Venezuelan economy, suffers production collapse from underinvestment and mismanagement. PDVSA, once a professionally-run state oil company, became patronage vehicle under Chávez and Maduro. Corruption, political loyalty replacing technical expertise, and sanctions combined to devastate production. Oil facilities need massive investment that Venezuela cannot provide and sanctions prevent. The infrastructure producing national wealth deteriorated to the point where oil production, once over 3 million barrels daily, fell below 1 million. An infrastructure collapse that creates economic collapse that prevents infrastructure repair - a downward spiral.

Telecommunications infrastructure fares somewhat better than physical infrastructure, though service quality declined substantially. Mobile networks provide coverage but capacity and reliability disappoint. Internet access exists but speeds lag regional standards. Digital infrastructure decay proceeds slower than physical infrastructure collapse, perhaps because telecommunications requires less maintenance than roads or electrical systems, but deterioration continues.

The infrastructure imperative for Venezuela is halting collapse and beginning reconstruction, which requires governance transformation that appears unlikely. Infrastructure cannot be rebuilt while corruption and mismanagement continue. Venezuela needs political change before infrastructure change becomes possible. The country demonstrates how completely infrastructure can fail when governance fails, and how infrastructure failure amplifies humanitarian crisis.`,
    issues: [
      "Electrical grid regular blackouts from hydroelectric and thermal plant maintenance failures",
      "Urban water infrastructure rationing affecting millions in Caracas and major cities",
      "Oil production infrastructure collapse from underinvestment and mismanagement",
      "Road and highway infrastructure severe deterioration with maintenance ceased",
      "Metro and public transit systems operating at fraction of design capacity"
    ]
  },
  VIETNAM: {
    summary: `Vietnam's infrastructure embodies rapid economic growth straining against inadequate systems. The country transformed from war devastation to dynamic manufacturing economy in remarkably short time, but infrastructure development hasn't kept pace with economic expansion. Hanoi and Ho Chi Minh City choke with traffic despite rapid road building. Ports reach capacity despite expansion. Electrical generation struggles to keep ahead of demand. Industrial zones need better connections. Vietnam attracted global manufacturing seeking China alternatives, but infrastructure constraints risk limiting growth. The country needs infrastructure transformation to match economic ambitions.

Urban transportation infrastructure in major cities faces crisis conditions. Ho Chi Minh City's streets swarm with motorbikes - millions of them - creating organized chaos that functions but barely. The Metro, finally under construction after years of delays, promises relief but proceeds slowly. Hanoi's Metro opened recently but covers limited area. Roads cannot accommodate vehicle growth, and public transit alternatives develop too slowly. The result is congestion costing billions in lost productivity and threatening quality of life that enables attracting talent. Vietnam's economic success paradoxically creates infrastructure challenges that could constrain further success.

Port infrastructure at Hai Phong, Da Nang, Ho Chi Minh City, and elsewhere handles massive export volumes but operates near capacity. Container traffic grows with manufacturing exports, and ports require continuous expansion to keep pace. Deep water port development proceeds, but planning and implementation struggle against demand growth. Vietnam's export economy depends on port efficiency, making port infrastructure not just local but national economic priority. Competition from other Southeast Asian ports adds urgency - manufacturing relocates easily, and port infrastructure inadequacy could redirect investment elsewhere.

Electrical infrastructure races to keep ahead of demand, not always successfully. Coal, hydroelectric, and increasingly renewable generation capacity expands, but industrial growth and rising consumer demand create continuous pressure. Power shortages occurred in recent years during peak demand. The government prioritizes power plant construction and grid expansion, but the trajectory is concerning - Vietnam approaches infrastructure adequacy asymptotically, never quite achieving margin above demand. Energy infrastructure constraints could throttle economic growth if not addressed preemptively.

Railway infrastructure receives substantial investment but requires far more. The North-South Railway, built during French colonial era, operates slowly on aging track. High-speed rail plans surface repeatedly but face cost and financing challenges. The question is whether Vietnam can afford high-speed rail or whether it can afford not to build it. Enhanced rail infrastructure would enable faster, cheaper freight movement and better passenger connectivity. China's Belt and Road offers financing but with debt and political strings. Vietnam weighs infrastructure needs against geopolitical and fiscal constraints.

Digital infrastructure develops more successfully. Mobile networks provide good coverage, fiber optic deployment expands, and digital payment systems proliferate. Vietnam's young, tech-savvy population adopts digital services rapidly. The government promotes digital economy and smart city initiatives. Digital infrastructure offers Vietnam opportunities to leapfrog traditional infrastructure constraints in some domains. Mobile banking reaches those without bank branches, e-commerce bypasses inadequate retail infrastructure, and digital government services improve efficiency despite physical infrastructure limitations.

Water and sanitation infrastructure in urban areas generally functions, though rapid urbanization strains capacity. Rural infrastructure lags considerably. Climate change vulnerability - rising seas threatening the Mekong Delta, increased flooding, typhoon damage - makes infrastructure resilience crucial. Vietnam needs infrastructure that accommodates growth while adapting to climate change, a dual challenge requiring sustained investment.

The infrastructure imperative for Vietnam is accelerating development to match economic growth while avoiding debt traps and maintaining sovereignty. Vietnam achieved remarkable economic transformation; infrastructure must now enable the next phase rather than constraining it.`,
    issues: [
      "Urban traffic congestion in major cities with metro development lagging demand",
      "Port infrastructure operating near capacity straining export economy logistics",
      "Electrical generation struggling to maintain adequate margins above demand",
      "North-South Railway aging infrastructure limiting freight and passenger efficiency",
      "Climate change infrastructure resilience needs for Mekong Delta and coastal cities"
    ]
  },
  YEMEN: {
    summary: `Yemen's infrastructure exists in states ranging from damaged to destroyed after years of brutal civil war. What was already one of the Arab world's poorest countries with inadequate infrastructure before 2015 has seen systematic destruction of what little existed. Saudi-led coalition airstrikes, Houthi artillery, and general warfare devastated ports, airports, roads, bridges, water systems, electrical generation, hospitals, and schools. Infrastructure became war target and collateral damage simultaneously. Rebuilding will require not just reconstruction but building what never adequately existed, all while conflict continues and governance remains fractured.

Port infrastructure destruction crippled the economy and created humanitarian disaster. The Port of Hodeidah, Yemen's main entry point for food and humanitarian aid, suffered damage from fighting and airstrikes. While it continues operating at reduced capacity, the damage contributes to logistics challenges worsening food insecurity affecting millions. Aden's port infrastructure also suffered damage and operates below pre-war capacity. Yemen depends on imported food for survival, making port infrastructure not just economic but humanitarian imperative. Port destruction as war strategy creates civilian suffering on massive scale.

Water infrastructure, already inadequate before the war, now fails across the country. Sanaa, the capital, faces water crisis as wells deplete and pumping stations lack power. The Water and Sewerage Authority struggles to maintain any service. Most Yemenis lack access to safe water and sanitation. Water-borne diseases kill children. Water trucking becomes expensive necessity, consuming large portions of family incomes. Yemen faces water scarcity from geography, population growth, and mismanagement. War destroyed infrastructure that was already failing. Water infrastructure reconstruction is survival imperative.

Electrical infrastructure operates marginally where it functions at all. Power plants suffered direct damage and lack fuel to operate even when intact. Transmission infrastructure deteriorated from damage and lack of maintenance. Most Yemenis lack reliable electricity, surviving on intermittent supply or none. The absence of electricity cascades through society - no water pumping, no refrigeration for food and medicine, no industrial production, no internet connectivity. Electrical infrastructure collapse makes modern life impossible. Yemen needs power generation and grid reconstruction as foundation for any broader reconstruction.

Road and bridge infrastructure suffered extensive damage from airstrikes, fighting, and neglect. Key roads are impassable or highly dangerous. Bridges destroyed by airstrikes disconnect regions. The main road connecting Hodeidah to Sanaa sustained extensive damage. Transportation infrastructure destruction fragments the country physically as political division fragments it governmentally. Reconstruction requires not just repairing roads but ensuring they can be maintained despite ongoing insecurity.

Telecommunications infrastructure proves remarkably resilient compared to physical infrastructure. Mobile networks continue operating in much of the country despite damage to cell towers and power shortages. Internet access continues, though unreliably. Digital infrastructure's advantage is lower maintenance requirement and ability to function on generators and backup systems. However, service quality declined substantially, and large areas lack coverage.

Healthcare and education infrastructure suffered catastrophic damage. Hospitals hit by airstrikes, schools destroyed, medical equipment nonfunctional from lack of power and supplies. The infrastructure enabling human capital development - health and education - was destroyed, ensuring Yemen's suffering extends well beyond war's end. Rebuilding social infrastructure requires security, funding, and governance that currently don't exist.

The infrastructure imperative for Yemen is ending the war, as reconstruction becomes possible only with sustained peace. Infrastructure damage is symptom of conflict that makes infrastructure repair impossible. Yemen needs political settlement before infrastructure settlement. When peace comes, if it comes, Yemen faces reconstruction challenges among the most severe globally - building not just what was destroyed but what never existed, for a population traumatized and impoverished by years of conflict.`,
    issues: [
      "Port infrastructure damage creating humanitarian crisis blocking food and aid imports",
      "Water infrastructure collapse leaving millions without safe water access",
      "Electrical generation and grid infrastructure destroyed or non-functional",
      "Road and bridge destruction fragmenting country and blocking aid distribution",
      "Healthcare and education infrastructure systematic destruction from airstrikes"
    ]
  },
  ZAMBIA: {
    summary: `Zambia's infrastructure reflects the challenges of landlocked African development - distance from ports, resource constraints, vast territory, and infrastructure inherited from colonial era. The nation depends on transport corridors through Tanzania, Mozambique, Zimbabwe, and Namibia to reach seaports, making infrastructure in neighboring countries as important as domestic systems. Copper exports, the economic mainstay, require efficient logistics that current infrastructure struggles to provide. Lusaka grows explosively without adequate infrastructure to support urbanization. Roads deteriorate faster than repairs occur. Power generation expanded but distribution lags. Zambia has infrastructure plans more impressive than infrastructure reality.

The TAZARA Railway, built with Chinese assistance in the 1970s to provide Zambia with access to Dar es Salaam, exemplifies infrastructure as development strategy and infrastructure as chronic disappointment. The railway promised to free landlocked Zambia from dependence on routes through white-minority-ruled Rhodesia and apartheid South Africa. It succeeded politically but failed economically - operations proved unsustainable, maintenance inadequate, and service unreliable. The railway limps along, carrying far less freight than designed capacity. TAZARA symbolizes infrastructure that solves political problems without creating economic solutions. Now, Chinese financing once again offers railway infrastructure promises, raising questions about whether new projects will function better than the last.

Road infrastructure receives substantial investment but struggles against Zambia's size, seasonal weather, and maintenance deficits. Main highways connecting major cities improve gradually. However, rural road access remains severely inadequate, with many areas isolated during rainy season. Road maintenance cannot keep pace with deterioration, creating potholes and surface breakdown that damage vehicles and slow transport. The government announces road programs with impressive statistics, but implementation lags plans. Zambia needs sustained maintenance as much as new construction, but maintenance generates less political capital than ribbon-cutting ceremonies for new highways.

Electrical infrastructure based largely on hydroelectric power faces climate vulnerability. The Kariba Dam on the Zambezi River, shared with Zimbabwe, provides major generation capacity. However, droughts increasingly affect reservoir levels, reducing generation during precisely the periods when power is most needed. Load-shedding affects cities and mines alike. Zambia needs generation diversification - solar, perhaps gas if economically viable - to reduce vulnerability to hydrological variability. Renewable energy advantage becomes climate liability when renewables mean only hydropower.

Urban infrastructure in Lusaka and other cities struggles under rapid urbanization. Water supply systems reach only portions of urban populations, and service is often intermittent even where connections exist. Sanitation infrastructure remains severely inadequate, particularly in informal settlements housing growing portions of urban populations. Solid waste collection cannot keep pace with generation. The infrastructure deficit affects daily life for millions, creating health risks and quality of life challenges that drain human capital. Zambia's cities need basic infrastructure serving entire populations, not just connected neighborhoods.

Copper mining infrastructure, central to the economy, operates but requires continuous investment. The Copperbelt region's roads, power, water, and telecommunications need reliability that general infrastructure doesn't always provide. Mining companies invest in dedicated infrastructure, creating enclaves with better infrastructure than surrounding communities. This dual infrastructure - one for mines, one for everyone else - reflects and reinforces inequality.

The infrastructure imperative for Zambia is balancing basic infrastructure serving current populations against transformational infrastructure promising future development. Limited resources force difficult choices. Zambia needs both better roads in rural areas and improved international trade corridors, both urban water systems and mining infrastructure, both maintenance and new construction. The country must prioritize strategically rather than attempting everything inadequately.`,
    issues: [
      "TAZARA Railway chronic operational and maintenance failures limiting freight capacity",
      "Hydroelectric generation climate vulnerability from drought affecting Kariba Dam",
      "Rural road infrastructure inadequacy isolating communities during rainy seasons",
      "Urban water and sanitation infrastructure severely inadequate in informal settlements",
      "Landlocked position creating dependence on neighbors' transport corridor infrastructure"
    ]
  },
  ZIMBABWE: {
    summary: `Zimbabwe's infrastructure embodies the tragedy of political and economic collapse destroying what existed and preventing what's needed. The country inherited substantial infrastructure at independence - roads, railways, power generation, water systems - that functioned reasonably well into the 1990s. Then decades of misgovernance, economic collapse, hyperinflation, and international isolation devastated infrastructure through underinvestment and decay. Roads disintegrated, the railway system barely operates, power generation fails to meet demand, urban water systems deliver intermittently. Zimbabwe's infrastructure crisis reflects and perpetuates economic crisis - infrastructure inadequacy constrains growth while economic stagnation prevents infrastructure investment.

The Kariba Dam, shared with Zambia on the Zambezi River, represents both infrastructure achievement and current failure. Built in the 1950s, it was an engineering marvel providing abundant hydroelectric power. Now, aging equipment, drought reducing reservoir levels, and inadequate maintenance mean Kariba cannot meet Zimbabwe's electricity demand. Load-shedding affects businesses and households. The country cannot keep reliable power, discouraging investment and constraining existing economic activity. Zimbabwe needs massive investment in generation capacity - additional hydroelectric if viable, but likely coal or gas thermal, or increasingly, solar. The infrastructure exists but fails, and rebuilding capacity faces financing challenges given Zimbabwe's economic situation and international isolation.

Railway infrastructure, once extensive and functional, now operates sporadically with ancient rolling stock on deteriorating track. National Railways of Zimbabwe struggles financially and operationally. Freight service proves unreliable, forcing shippers to use more expensive road transport. Passenger service operates on few lines. The railway system needs comprehensive rehabilitation that Zimbabwe cannot afford and international lenders won't finance without governance reforms. Rail infrastructure decay constrains economic activity and forces costly alternatives, perpetuating economic underperformance that prevents rail infrastructure investment - a vicious cycle.

Road infrastructure deteriorates across the country. Main highways show severe pothole damage. Urban roads in Harare and Bulawayo need resurfacing. Rural roads often become impassable in rainy season. Road maintenance essentially ceased during the hyperinflation crisis and never fully resumed. The government lacks resources for maintenance programs matching deterioration rates. Potholes damage vehicles, slow transport, and increase costs. Road infrastructure decay is immediately visible and economically costly, yet persists year after year because fixing it requires sustained funding Zimbabwe doesn't have.

Urban water infrastructure in Harare and other cities fails basic service standards. Harare experiences chronic water shortages, with many areas receiving water intermittently or not at all. Aging pipes leak extensively, wasting scarce water. Sewage treatment proves inadequate, creating health risks. Water infrastructure in Zimbabwe's capital fails at levels usually associated with rural areas in poorer countries. This in a nation with substantial water resources. The failure is infrastructure and governance, not hydrology.

Telecommunications infrastructure proves more resilient than physical infrastructure. Mobile networks provide reasonable coverage, and mobile money systems enable economic transactions despite banking sector dysfunction. Digital infrastructure benefits from lower maintenance requirements and private sector investment. However, internet speeds lag regional peers and costs remain high. Digital infrastructure offers some bright spots amid general infrastructure decay.

Border infrastructure at Beitbridge and other crossings faces chronic congestion. Long queues of trucks wait days to clear customs and immigration, costing time and money while goods deteriorate. The border bottlenecks affect not just Zimbabwe but regional trade. Infrastructure inadequacy at borders cascades through the economy, raising costs and reducing competitiveness.

The infrastructure imperative for Zimbabwe is securing the political stability and governance reforms that enable sustained infrastructure investment. Infrastructure cannot be fixed without economic recovery that requires political change. Zimbabwe's infrastructure crisis has political origins and requires political solutions. Technical infrastructure challenges are secondary to governance failures creating them.`,
    issues: [
      "Electrical generation inadequacy from Kariba Dam drought and aging equipment",
      "Railway infrastructure operational collapse with deteriorating track and rolling stock",
      "Urban water infrastructure chronic shortages and intermittent service in Harare",
      "Road maintenance deficit creating severe pothole damage on main highways",
      "Border crossing infrastructure congestion creating trade and logistics bottlenecks"
    ]
  }
}

async function insertInfrastructureSummary(
  countryData: typeof COUNTRIES.TAIWAN,
  summaryData: typeof SUMMARIES.TAIWAN
) {
  console.log(`\n=== Inserting infrastructure summary for ${countryData.name} ===\n`)

  try {
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: countryData.name,
          type: countryData.type,
          category: 'infrastructure'
        }
      },
      create: {
        name: countryData.name,
        type: countryData.type,
        country: countryData.country,
        lat: countryData.lat,
        lng: countryData.lng,
        category: 'infrastructure',
        summary: summaryData.summary,
        issues: JSON.stringify(summaryData.issues),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: summaryData.summary,
        issues: JSON.stringify(summaryData.issues),
        updatedAt: new Date()
      }
    })

    console.log(`✅ ${countryData.name} infrastructure summary saved!`)
    console.log(`   Summary length: ${summaryData.summary.length} characters`)
    console.log(`   Issues: ${summaryData.issues.length}`)

  } catch (error) {
    console.error(`❌ Error inserting ${countryData.name} summary:`, error)
    throw error
  }
}

async function insertAllSummaries() {
  const countries = Object.keys(COUNTRIES) as Array<keyof typeof COUNTRIES>

  console.log(`\n🚀 Starting infrastructure summary insertion for ${countries.length} countries\n`)
  console.log('Countries:', countries.map(k => COUNTRIES[k].name).join(', '))
  console.log('\n' + '='.repeat(80) + '\n')

  for (const countryKey of countries) {
    await insertInfrastructureSummary(
      COUNTRIES[countryKey],
      SUMMARIES[countryKey]
    )
  }

  console.log('\n' + '='.repeat(80))
  console.log(`\n✅ Successfully inserted all ${countries.length} infrastructure summaries!`)
  console.log('\nCountries completed:')
  countries.forEach((k, i) => {
    console.log(`${i + 1}. ${COUNTRIES[k].name}`)
  })
}

insertAllSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
