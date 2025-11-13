import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const infrastructureSummaries = {
  'Iran': {
    summary: `Iran's infrastructure presents a study in contradictions: sophisticated urban systems coexisting with aging networks strangled by sanctions and deferred maintenance. Tehran's metro system, the Middle East's second-largest after Dubai, spans 250 kilometers across seven lines, moving 3 million daily passengers through a city of 9 million. The system's expansion continues despite economic pressures—Line 7's completion connects the capital to satellite cities, demonstrating Iran's engineering capacity when domestic expertise substitutes for restricted foreign technology.

Yet this same capital chokes under vehicular pollution. With 4.5 million registered vehicles and inadequate emissions controls, Tehran regularly ranks among the world's most polluted cities. The highway network, while extensive at 200,000 kilometers nationwide, suffers chronic maintenance deficits. Road safety statistics are devastating: over 17,000 annual traffic deaths, among the world's highest per capita, reflecting infrastructure quality as much as driver behavior.

Rail infrastructure reveals strategic ambition constrained by execution. The Tehran-Qom-Isfahan high-speed rail project, planned since 2015, progresses slowly. More successful are freight corridors: the Silk Road rail link connecting China to Turkey via Iran represents geopolitical infrastructure, positioning Iran as a Eurasian land bridge despite maritime sanction pressures. The Chabahar port expansion, backed by India, aims to provide Afghanistan and Central Asia access to Arabian Sea shipping—infrastructure as statecraft.

Digital infrastructure faces acute challenges. While 4G coverage reaches 85% of the population, international bandwidth restrictions and filtering infrastructure create what amounts to a national intranet. Internet speeds lag regional peers by factors, constraining digital economy development. The National Information Network aims for sovereign internet infrastructure, raising concerns about digital isolation even as domestic startups demonstrate impressive resilience within these constraints.

Water infrastructure confronts existential stress. The ancient qanat system, once UNESCO-celebrated, now deteriorates as aquifers deplete. Cities like Isfahan and Shiraz face water rationing. Dam construction—Iran operates 1,300 dams—disrupts river ecosystems, particularly devastating Lake Urmia, which has lost 90% of its surface area. Climate change and mismanagement converge to threaten the infrastructure supporting 85 million people in an arid landscape.

The fundamental challenge is sanctions-induced technological stagnation. Unable to access latest construction technologies, materials, and engineering partnerships, Iranian infrastructure ages in place. Remarkable domestic innovation—from metro rolling stock manufacturing to highway management systems—cannot fully compensate. Infrastructure that should position Iran as a regional power instead becomes a strategic vulnerability, limiting the country's capacity to leverage its geographic, demographic, and cultural advantages.`,
    issues: [
      'Traffic deaths exceeding 17,000 annually due to poor road safety infrastructure',
      'Chronic maintenance deficits across 200,000-kilometer highway network',
      'International bandwidth restrictions creating digital isolation',
      'Water infrastructure crisis with aquifer depletion and ecosystem collapse',
      'Sanctions-induced technological stagnation limiting access to modern construction tech',
      'High-speed rail projects progressing slowly despite strategic importance'
    ],
    lat: 32.4279,
    lng: 53.6880
  },
  'Iraq': {
    summary: `Iraq's infrastructure bears the scars of four decades of war, sanctions, and instability—a nation struggling to rebuild systems destroyed and decayed since the 1980s. Baghdad's electricity network exemplifies this crisis: despite spending over $40 billion on power sector reconstruction since 2003, the capital receives only 12-16 hours of daily electricity in summer when demand peaks. Every neighborhood relies on diesel generators, creating a parallel, polluting, expensive infrastructure that undermines grid reconstruction economics.

The highway system reveals similar decay. The Damascus-Baghdad highway, once a vital trade artery, remains partially unusable due to conflict damage. The Basra-Umm Qasr port road, carrying Iraq's oil export infrastructure, suffers chronic congestion and deterioration. While the Kurdistan Regional Government has upgraded roads substantially—Erbil's ring road system impresses—federal Iraq's 60,000-kilometer network needs comprehensive rehabilitation. War damage layers atop Saddam-era overbuilding: highways to nowhere, reflecting vanity over utility.

Baghdad's public transit infrastructure barely exists. A metro system, planned since the 1980s, remains unbuilt—proposals resurface periodically, most recently a Chinese-backed four-line network, but financing and security concerns stall progress. The city of 7 million relies almost entirely on private minibuses and taxis, creating traffic chaos that costs billions in lost productivity. Contrast this with Isfahan's or Riyadh's advancing transit systems, and Iraq's infrastructure gap becomes stark.

Airport infrastructure shows more success. Baghdad International Airport handles growing passenger volumes, while Erbil and Basra airports attract international carriers. These islands of functionality highlight what's possible when security and investment align. Similarly, mobile telecommunications flourished post-2003: 4G coverage reaches major cities, with three competing operators driving digital infrastructure ahead of physical.

Water and sanitation infrastructure remains critical. Despite sitting atop the Tigris and Euphrates, water treatment capacity serves only 70% of the population adequately. Basra's 2018 water crisis—40,000 hospitalized from contaminated supplies—exposed infrastructure failure in the nation's second city. Climate change intensifies pressure: reduced river flows, higher temperatures, and drought strain systems designed for different conditions.

The fundamental challenge transcends physical infrastructure: governance collapse undermines reconstruction. Corruption siphons funds, sectarian quotas prioritize political patronage over technical competence, and security instability makes long-term planning nearly impossible. Until governance infrastructure improves, physical infrastructure will continue to disappoint, trapping Iraq in underdevelopment despite vast oil wealth.`,
    issues: [
      'Electricity supply limited to 12-16 hours daily despite $40B reconstruction spending',
      'Baghdad metro planned since 1980s remains unbuilt amid financing obstacles',
      'Water treatment crisis with only 70% population served adequately',
      'Highway network requiring comprehensive rehabilitation after decades of decay',
      'Governance collapse and corruption undermining reconstruction efforts',
      'Climate change reducing river flows and straining water infrastructure'
    ],
    lat: 33.3152,
    lng: 44.3661
  },
  'Ireland': {
    summary: `Ireland's infrastructure development reflects a nation transformed by prosperity yet struggling to match European peers. Dublin's population approaches 2 million, yet the city operates only two light rail lines totaling 67 kilometers. The LUAS trams, while effective within their corridors, leave vast swathes of the metropolitan area dependent on buses and cars. MetroLink, the proposed €10 billion metro connecting airport to city center, has been planned, canceled, revised, and replanned since the 1990s—current projections target 2035 completion, if bureaucratic and cost obstacles can be overcome.

The broader rail network tells a similar story. Irish Rail's radial network focuses on Dublin, leaving regional connectivity weak. Cork to Limerick—Ireland's second and third cities—lacks direct rail service. The €2.5 billion Cork-Limerick motorway exemplifies road investment outpacing rail. While motorways now connect major cities, this car-centric development contradicts climate commitments. Vehicle ownership rates approach 1 per 2 people, among Europe's highest, reflecting infrastructure that encourages driving.

Housing infrastructure constitutes Ireland's most acute crisis. Dublin's chronic undersupply drives prices beyond median incomes, yet planning restrictions and infrastructure capacity constraints limit expansion. Water infrastructure particularly bottlenecks development: Irish Water, created in 2014 to consolidate fragmented municipal systems, inherited networks losing 50% of treated water to leaks. Dublin imports water from counties away, yet infrastructure to support housing development remains inadequate.

Digital infrastructure presents brighter prospects. Ireland's position as European tech hub—hosting European headquarters for Google, Apple, Facebook, Microsoft—drives fiber deployment. The National Broadband Plan aims for universal coverage by 2026, connecting 1.1 million rural premises. While expensive at €3 billion of state investment, this infrastructure recognizes connectivity as essential utility, not luxury.

Renewable energy infrastructure advances impressively. Wind power generates 40% of electricity, with offshore wind farms under development. The Celtic Interconnector to France, scheduled for 2027, will strengthen grid resilience. Yet electricity networks need upgrading to handle increased renewables and future electric vehicle charging—another infrastructure investment racing against accelerating demand.

The fundamental tension is developmental: Ireland's 30-year economic boom outpaced infrastructure investment, creating deficit now expensive to remedy. Projects like MetroLink or national broadband, which would have cost less decades ago, now carry premium price tags. Meanwhile, housing crisis, traffic congestion, and climate commitments demand infrastructure solutions urgently. Can Ireland's political system deliver transformative infrastructure at the scale and speed prosperity demands?`,
    issues: [
      'Dublin metro planned since 1990s with completion now targeting 2035',
      'Housing crisis bottlenecked by inadequate water and development infrastructure',
      'Water networks losing 50% of treated water to leaks requiring €billions in upgrades',
      'Regional rail connectivity weak with no direct Cork-Limerick service',
      'Car-centric development with ownership nearing 1 per 2 people conflicting with climate goals',
      'Electricity grid upgrades needed for renewable energy and EV charging demands'
    ],
    lat: 53.1424,
    lng: -7.6921
  },
  'Ivory Coast': {
    summary: `Ivory Coast's infrastructure renaissance reflects West Africa's most dramatic economic recovery. Abidjan's third bridge, the Henri Konan Bédié Bridge, opened in 2014 as visual symbol of revival: a stunning cable-stayed structure spanning the Ébrié Lagoon, cutting crossing times from hours to minutes. The subsequent fourth and fifth bridges—including the 1.5-kilometer Alassane Ouattara Bridge—transform urban mobility in a city of 5 million, though traffic congestion persists as vehicle numbers outpace infrastructure expansion.

The political capital Yamoussoukro exemplifies infrastructure as statement. The basilica—one of the world's largest churches—rises from planned city of 300,000, yet this infrastructure vision never attracted projected population. Highways connect the ceremonial capital efficiently to Abidjan, but Yamoussoukro remains primarily symbolic infrastructure rather than functioning urban system. Meanwhile, secondary cities like Bouaké, Korhogo, and San-Pédro struggle with basic road, water, and electricity services.

Port infrastructure drives economic performance. Abidjan's autonomous port, handling 90% of Ivorian trade and serving landlocked Burkina Faso, Mali, and Niger, ranks among Africa's most efficient. Recent expansions—including second container terminal and modernized grain terminal—demonstrate continued investment. Yet this success creates vulnerability: the economy's dependence on single-port infrastructure means any disruption cascades nationally and regionally.

Road infrastructure improves steadily. The Highway Abidjan-Lagos corridor, part of ECOWAS regional integration, advances Ivorian segments while neighbors lag. The Abidjan-Ouagadougou highway facilitates Burkina Faso's trade, positioning Ivory Coast as regional infrastructure hub. Still, only 9% of roads are paved—a typical African constraint where rural connectivity remains poor, isolating agricultural regions from markets.

Electricity infrastructure shows mixed progress. Côte d'Ivoire generates surplus power, exporting to neighbors, with the 426-MW Atinkou and 222-MW Soubré dams adding renewable capacity. Yet distribution infrastructure lags: electrification reaches only 70% nationally and 40% rurally. Urban areas suffer frequent outages. The grand Inga Dam scheme—if realized—could transform West African power infrastructure, but this remains decades-distant megaproject.

Digital infrastructure advances rapidly. 4G coverage in Abidjan and major cities supports vibrant tech scene. Mobile money infrastructure, particularly Orange Money and MTN Mobile Money, provides financial services to millions lacking bank access. Yet rural areas remain disconnected, and fixed broadband penetration stays below 1%—infrastructure divides reinforcing urban-rural inequality.

The post-conflict challenge is sustaining infrastructure investment. The 2011 civil war's damage is largely repaired, but maintaining momentum requires continued stability and public investment. Ivory Coast's growth depends on translating today's infrastructure surge into durable systems that serve all citizens, not just Abidjan's elite.`,
    issues: [
      'Only 9% of roads paved, isolating rural agricultural regions from markets',
      'Electricity distribution gaps with only 40% rural electrification despite generation surplus',
      'Economic dependence on single-port infrastructure creating vulnerability',
      'Yamoussoukro political capital infrastructure underutilized with fraction of planned population',
      'Fixed broadband penetration below 1% reinforcing urban-rural digital divide',
      'Abidjan traffic congestion as vehicle growth outpaces bridge and road expansion'
    ],
    lat: 7.5400,
    lng: -5.5471
  },
  'Jamaica': {
    summary: `Jamaica's infrastructure reflects an island nation constrained by geography, limited resources, and natural disaster vulnerability. Kingston's road network struggles under traffic loads it was never designed to bear. The city of 580,000—swelling to 1.2 million in the metropolitan area—lacks any mass rapid transit. Proposals for Bus Rapid Transit or light rail resurface periodically but founder on financing obstacles. Instead, route taxis and minibuses provide informal transit infrastructure, flexible but chaotic, contributing to congestion that costs Jamaica an estimated 3% of GDP annually.

The highway system centers on Highway 2000, a tolled route connecting Kingston to Ocho Rios and Montego Bay's tourism zones. This infrastructure represents Jamaica's largest PPP, built through successive phases over two decades. While successful in providing modern road infrastructure along the north coast, it leaves southern and central parishes dependent on deteriorating roads dating to colonial era. During rainy seasons, landslides routinely close routes, isolating communities.

Port infrastructure concentrates in Kingston's natural harbor, one of the Caribbean's largest. The port's expansion, positioning Jamaica as transshipment hub for post-Panamax vessels, represents strategic infrastructure leveraging geographic advantage. Kingston Logistics Center aims to create "fourth coast" for Americas supply chains. Yet translating port capacity into broader economic infrastructure—industrial zones, logistics facilities, connections to rural production—remains incomplete.

Electricity infrastructure faces reliability and cost challenges. The grid, 90% fossil fuel dependent, produces some of the Western Hemisphere's most expensive power. Renewable energy infrastructure—particularly wind and solar—advances slowly despite ideal conditions. The grid itself, aging and storm-vulnerable, requires substantial hardening. Hurricane preparedness dominates infrastructure thinking: building codes mandate storm resistance, yet lower-income housing often lacks compliant infrastructure.

Water infrastructure confronts climate paradoxes. Jamaica receives abundant rainfall, yet distribution infrastructure loses up to 60% of treated water to leaks and illegal connections. Kingston's water supply frequently fails despite proximity to reservoirs. Climate change brings both intensified hurricanes and extended droughts—the existing infrastructure designed for neither extreme.

Digital infrastructure progresses more successfully. Mobile 4G coverage reaches 95% of the population, with 5G deployment beginning. Submarine fiber optic cables position Jamaica as regional telecommunications hub. Digital infrastructure enables business process outsourcing sector—now major employer—though rural areas still lack reliable broadband.

The fundamental constraint is fiscal: as small island developing state with high debt burden (94% of GDP), Jamaica struggles to finance infrastructure at scale required. Climate adaptation infrastructure—sea walls, storm-hardened buildings, flood management—competes with development infrastructure. Every hurricane sets development back years. Breaking this cycle requires infrastructure investment that seems perpetually just beyond reach.`,
    issues: [
      'Water distribution losing 60% to leaks despite abundant rainfall resources',
      'Electricity costs among Western Hemisphere highest with 90% fossil fuel dependence',
      'Traffic congestion costing 3% of GDP with no mass transit system',
      'Road network vulnerable to landslides isolating communities in rainy season',
      'Climate infrastructure needs competing with development amid 94% GDP debt burden',
      'Hurricane damage repeatedly setting infrastructure development back years'
    ],
    lat: 18.1096,
    lng: -77.2975
  },
  'Jordan': {
    summary: `Jordan's infrastructure navigates constraints few nations face: water scarcity, refugee pressures, and geopolitical location that makes every highway strategic. The kingdom's 8,000-kilometer road network serves 11 million people—4 million more than a decade ago due to Syrian and Iraqi refugee influxes. This population shock stresses infrastructure designed for different scale. Amman, once a city of 2 million, now hosts 4 million, overwhelming water, electricity, and transportation networks.

Water infrastructure confronts absolute scarcity. Jordan ranks second globally in water poverty—annual renewable supply of just 100 cubic meters per capita, far below 500-cubic-meter scarcity threshold. The kingdom depends on deep aquifer extraction faster than recharge, purchasing from Israel, and planning the Red Sea-Dead Sea canal—a $10 billion desalination megaproject that could transform infrastructure but remains in planning purgatory. Meanwhile, Amman's households receive water once weekly, requiring rooftop storage—household infrastructure compensating for system inadequacy.

Transportation infrastructure focuses on maintaining position as regional logistics hub. The Amman-Zarqa highway serves as economic spine. The recently modernized Queen Alia International Airport, 30 kilometers south of Amman, handles 9 million passengers annually, designed as regional hub. Yet urban transit infrastructure lags dramatically: Amman has no metro, no light rail, no BRT—only buses and shared taxis serving a sprawling, hilly city. Traffic congestion costs billions in lost productivity.

The nascent Bus Rapid Transit system for Amman, funded by World Bank, represents modest ambition toward mass transit. Meanwhile, Jordan's railway infrastructure, once connecting Damascus to Hejaz and Haifa, lies largely defunct—freight service to Aqaba port continues, but passenger rail remains aspiration. Regional infrastructure integration, once natural given Jordan's geographic position, remains hostage to political realities.

Digital infrastructure advances impressively. 5G deployment leads the Arab world, with coverage in Amman and major cities. Fiber optic backbone reaches 85% of population. This infrastructure supports growing tech sector and positions Jordan as regional IT hub. Yet the digital infrastructure highlights contrasts: 21st-century connectivity coexisting with 20th-century physical infrastructure.

Refugee camp infrastructure presents unique challenges. Zaatari camp, housing 80,000 Syrian refugees, evolved from emergency tents to semi-permanent infrastructure—water networks, electricity grid, roads—creating city-scale systems for "temporary" population now in its twelfth year. This represents infrastructure spending with no long-term planning framework, yet humanitarian necessity.

The kingdom's infrastructure resilience depends on continued external support. As resource-poor nation facing unprecedented demographic stress, Jordan's infrastructure needs exceed domestic capacity to finance. The infrastructure that sustains stability—water, electricity, transit—requires international backing, making infrastructure geopolitical as much as technical.`,
    issues: [
      'Water scarcity crisis with only 100 cubic meters annual per capita renewable supply',
      'Population shock from 4 million refugees overwhelming infrastructure designed for smaller scale',
      'Amman households receiving water once weekly requiring rooftop storage systems',
      'Capital city of 4 million lacking any mass rapid transit infrastructure',
      'Refugee camp infrastructure creating semi-permanent city-scale systems without long-term planning',
      'Red Sea-Dead Sea canal desalination megaproject stuck in planning despite critical need'
    ],
    lat: 30.5852,
    lng: 36.2384
  },
  'Kazakhstan': {
    summary: `Kazakhstan's infrastructure spans continental distances—2.7 million square kilometers, the world's ninth-largest country, but only 19 million people. This geography defines infrastructure challenge: connecting scattered cities across vast steppes and deserts. The capital Astana—renamed Nur-Sultan, then reverted to Astana—represents infrastructure as national identity. Rising from steppe since 1997, this planned city of 1.2 million showcases futuristic architecture and modern systems, but questions persist whether resources concentrated here might better serve the broader nation.

Rail infrastructure forms the economy's backbone. Kazakhstan's 16,000-kilometer network, inherited from Soviet planning, carries freight east-west along the historic Silk Road and north-south to Russia. The Khorgos Gateway on the Chinese border positions Kazakhstan as central link in Belt and Road infrastructure—freight from Chinese factories reaches European markets via Kazakh rails faster than maritime routes. Yet passenger rail, while extensive, operates aging equipment on infrastructure requiring comprehensive modernization.

Road infrastructure advances unevenly. The Western Europe-Western China highway corridor through Kazakhstan received major investment—modern, tolled highways connecting Almaty to Russian border. Yet secondary roads remain poor. Rural areas, particularly in the north and west, depend on roads that are dusty tracks in summer, impassable mud in spring. The tyranny of distance means even well-maintained roads create isolation: driving Almaty to Astana covers 1,200 kilometers, requiring overnight stops.

Urban infrastructure divides dramatically between showcase cities and neglected regions. Almaty's metro system, opened 2011, spans 20 kilometers serving 1.4 million residents. Astana plans metro but relies on buses and harsh winter realities where -30°C temperatures stress every system. Meanwhile, industrial cities like Shymkent, Pavlodar, and Karaganda feature Soviet-era infrastructure in various states of decay—heating systems, water networks, and housing blocks requiring wholesale renewal.

Digital infrastructure leapfrogs physical. 4G coverage reaches 88% of population, despite vast empty spaces. Kazakhstan's tech sector, concentrated in Almaty, benefits from fiber networks and Astana Hub—a special economic zone offering tax incentives for startups. Yet rural digital divide persists: nomadic herders and remote settlements lack reliable connectivity.

Oil and gas infrastructure dominates the economy. The Tengiz, Kashagan, and Karachaganak fields require world-class extraction infrastructure. Pipelines to Russia, China, and the Caspian Pipeline Consortium to Black Sea make energy infrastructure geopolitically significant. Yet this fossil fuel focus leaves renewable infrastructure underdeveloped despite abundant wind and solar potential.

The fundamental question is whether infrastructure serves the nation or displays it. Astana's gleaming infrastructure impresses but concentrates resources. The challenge is distributing infrastructure investment to connect and develop the vast territories where most Kazakhs actually live—transforming showcase infrastructure into national infrastructure.`,
    issues: [
      'Rural roads remain poor with seasonal impassability despite showcase highway corridors',
      'Passenger rail operating aging Soviet equipment requiring comprehensive modernization',
      'Infrastructure investment concentrated in Astana while industrial cities feature decaying systems',
      'Tyranny of distance creating isolation even with well-maintained highways',
      'Renewable energy infrastructure underdeveloped despite abundant wind and solar potential',
      'Soviet-era heating and water networks in industrial cities requiring wholesale renewal'
    ],
    lat: 48.0196,
    lng: 66.9237
  },
  'Kuwait': {
    summary: `Kuwait's infrastructure reflects oil wealth's capacity to build extensive systems—and the challenges of sustaining them. The city-state's road network is comprehensive, with multi-lane highways connecting Kuwait City to suburbs and beaches. Yet car dependency reaches extreme levels: 2.7 million registered vehicles for 4.3 million residents creates per-capita vehicle ownership among the world's highest. Traffic congestion, despite expansive highways, costs billions annually. Cheap fuel prices—under $0.30 per liter—incentivize driving and remove economic motivation for mass transit.

Public transportation infrastructure barely exists. Kuwait lacks metro, light rail, or BRT systems. Bus service, launched in 2019 after decades without, remains limited. The proposed Kuwait Metro—a four-line, 160-kilometer network serving 500,000 daily passengers—has been planned, postponed, and replanned since 2009. Current projections suggest 2030 completion, but skepticism persists. For now, Kuwait's 4.3 million residents rely almost entirely on private vehicles or taxis—an unsustainable model both economically and environmentally.

Port and airport infrastructure shows more ambition. Kuwait International Airport's new terminal, designed for 25 million annual passengers, positions the country as Gulf aviation hub, though competing with Dubai, Doha, and Abu Dhabi's more established facilities. Shuwaikh Port handles commercial cargo, while Shuaiba Port specializes in petroleum exports—infrastructure critical to the economy's lifeblood.

Electricity and water infrastructure faces sustainability questions. Kuwait's power generation depends almost entirely on fossil fuels, burning oil and gas domestically that could be exported. Summer temperatures exceeding 50°C drive air conditioning loads that strain the grid despite massive generation capacity. The country has no renewable water—all freshwater comes from desalination plants consuming enormous energy. This energy-water-climate nexus represents infrastructure vulnerability as climate change intensifies.

Digital infrastructure develops rapidly. 5G coverage reaches 95% of the population, with fiber optic deployment in residential areas. Smart city initiatives in new developments integrate IoT infrastructure, though implementation quality varies. The country's compact geography facilitates universal coverage more easily than regional neighbors.

Housing infrastructure reflects social contract: the government provides Kuwaiti citizens with subsidized housing and utilities, creating public housing infrastructure unique in the Gulf. Yet allocation systems struggle with demand, and infrastructure quality varies dramatically. Meanwhile, expatriate workers—60% of population—live in private housing ranging from luxury apartments to overcrowded labor camps, revealing infrastructure inequality beneath oil wealth's surface.

The fundamental challenge is transitioning from oil-dependent infrastructure—cheap fuel enabling wasteful systems—toward sustainability. Climate change, eventual oil transition, and demographic pressures demand infrastructure transformation. Yet political gridlock and comfortable status quo make reform difficult. Can Kuwait's infrastructure evolve before external forces demand it?`,
    issues: [
      'Kuwait Metro planned since 2009 repeatedly postponed with 2030 completion uncertain',
      'Extreme car dependency with 2.7M vehicles for 4.3M residents creating unsustainable congestion',
      'All freshwater from energy-intensive desalination creating energy-water vulnerability',
      'Power generation 100% fossil fuel dependent with summer grid strain from 50°C+ temperatures',
      'Public transportation virtually non-existent despite extreme traffic congestion',
      'Infrastructure inequality between citizen housing and expatriate labor conditions'
    ],
    lat: 29.3117,
    lng: 47.4818
  },
  'Laos': {
    summary: `Laos's infrastructure narrative centers on transformation from Southeast Asia's most isolated nation to regional crossroads—driven overwhelmingly by Chinese investment. The $6 billion China-Laos Railway, opened in December 2021, represents infrastructure that would have been inconceivable for this landlocked nation of 7 million to finance domestically. The 414-kilometer high-speed line connects Vientiane to China's Yunnan province through mountainous terrain requiring 75 tunnels and 167 bridges—engineering triumph and debt concern simultaneously.

This railway transforms Laos from buffer state to potential transit hub. The broader vision connects Kunming to Singapore via Laos and Thailand—if Thailand's segment ever materializes. Meanwhile, the railway carries 2 million passengers annually and growing freight volumes, particularly agricultural exports to China. Chinese tourists flood across, transforming local economies but raising questions about who benefits. Infrastructure that could enable development might instead extract resources more efficiently.

Road infrastructure improves dramatically yet unevenly. The Asian Highway Network routes through Laos now feature paved, modern highways—again, often Chinese-financed and built. The Vientiane-Boten expressway parallels the railway, creating redundant high-capacity infrastructure while rural roads remain poor. This pattern repeats: showcase corridors coexisting with neglected hinterlands. The capital Vientiane's ring roads ease urban traffic, but provincial centers like Pakse and Savannakhet rely on aging infrastructure.

Dam infrastructure dominates development policy—Laos as "battery of Southeast Asia" exports hydropower to Thailand and Vietnam. Over 60 dams operate or are under construction on the Mekong and tributaries, generating revenues but devastating river ecosystems. The 2018 Xe-Pian Xe-Namnoy dam collapse, killing dozens and displacing thousands, exposed infrastructure governance failures: inadequate engineering oversight, poor construction quality, and absent accountability.

Electricity infrastructure reflects these contradictions: Laos exports power yet rural electrification reaches only 95% officially—likely lower in remote mountainous regions. Grid infrastructure concentrates along valleys and development corridors while highlands remain partially connected. Solar potential exists but remains largely unexploited, as hydropower dominates policy thinking.

Digital infrastructure advances through Chinese equipment and expertise. 4G coverage reaches urban areas and main highways, though rural connectivity lags. Laos authorized Chinese firms to build telecommunications backbone, raising security concerns among regional observers. The country lacks domestic tech capacity, depending entirely on foreign infrastructure providers.

The fundamental question is sovereignty: infrastructure development driven by external financing creates dependencies that constrain policy autonomy. The railway debt equals 40% of GDP—if traffic doesn't meet projections, fiscal crisis looms. Laos risks becoming infrastructurally connected but economically captured, modern highways carrying wealth extracted to richer neighbors.`,
    issues: [
      'China-Laos Railway debt equaling 40% of GDP creating fiscal vulnerability',
      'Dam infrastructure devastating Mekong ecosystem with inadequate safety oversight',
      'Infrastructure development creating external dependencies constraining sovereignty',
      'Showcase corridors receiving investment while rural roads and villages remain neglected',
      '2018 dam collapse exposing governance failures in construction oversight',
      'Hydropower export focus leaving rural electrification incomplete despite generation capacity'
    ],
    lat: 19.8563,
    lng: 102.4955
  }
}

async function saveInfrastructureSummaries() {
  console.log('🚀 Saving infrastructure summaries for Iran to Laos\n')
  console.log('='.repeat(80))

  let savedCount = 0
  let errorCount = 0
  const results: { country: string; success: boolean; charCount?: number; issues?: number; stories?: number }[] = []

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

      results.push({
        country: countryName,
        success: true,
        charCount: data.summary.length,
        issues: data.issues.length,
        stories: topStories.length
      })
      savedCount++

    } catch (error) {
      console.error(`❌ Error saving ${countryName}:`, error)
      results.push({
        country: countryName,
        success: false
      })
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary generation complete!')
  console.log('='.repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successfully saved: ${savedCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log('\n🏗️  Category: infrastructure')
  console.log('👤 Perspective: Norman Foster / urban planning expert')
  console.log('📏 Summary lengths: 2,500-3,500 characters')
  console.log('\n✅ Countries completed:')
  results.forEach(r => {
    if (r.success) {
      console.log(`   - ${r.country}: ${r.charCount} chars, ${r.issues} issues, ${r.stories} stories`)
    }
  })

  if (errorCount > 0) {
    console.log('\n❌ Countries with errors:')
    results.forEach(r => {
      if (!r.success) {
        console.log(`   - ${r.country}`)
      }
    })
  }
}

saveInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
