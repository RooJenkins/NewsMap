import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 61-75 with coordinates
const locations = [
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.688 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Ivory Coast', lat: 7.54, lng: -5.5471 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
]

interface CountrySummary {
  name: string
  summary: string
  issues: string[]
  topStoryIndices: number[]
}

// Infrastructure summaries in Norman Foster style - 2,500-3,500 characters each
const summaries: CountrySummary[] = [
  {
    name: 'India',
    summary: `India's infrastructure landscape presents one of the most ambitious transformation narratives in contemporary urban development. The nation's commitment to modernizing its physical and digital infrastructure represents a fundamental reimagining of connectivity across a subcontinent of 1.4 billion people. Mumbai's coastal road project and the ongoing expansion of its metro network exemplify the scale of ambition - a city racing to build the transit systems that should have preceded its explosive growth. The reality, however, is that Mumbai's infrastructure development occurs under extraordinary constraints: dense urban fabric, challenging geology, and the constant pressure of serving millions who depend on overburdened systems.

Delhi's metro system stands as perhaps India's greatest infrastructure success story - a world-class rapid transit network that has fundamentally altered urban mobility patterns. Yet the capital continues to grapple with air quality crises that reveal the limitations of infrastructure solutions divorced from broader environmental planning. The ongoing construction of expressways connecting major cities - the Mumbai-Pune Expressway expansions, the Delhi-Mumbai Expressway - represents a highway-centric development model that must be balanced against public transit investment.

The government's Smart Cities Mission and Digital India initiatives signal awareness that 21st-century infrastructure extends far beyond concrete and steel. Broadband penetration remains uneven, with rural areas lagging significantly behind urban centers. However, mobile connectivity has achieved remarkable saturation, enabling leapfrog development in digital services. The Unified Payments Interface has created a digital infrastructure for financial transactions that many developed nations might envy.

Indian Railways, one of the world's largest rail networks, faces the monumental challenge of modernizing aging infrastructure while maintaining operations at unprecedented scale. High-speed rail projects, particularly the Mumbai-Ahmedabad corridor utilizing Japanese technology, represent aspirations for transformation. Yet the fundamental challenge remains: upgrading existing track, signaling, and station infrastructure that serves as the circulatory system for hundreds of millions of daily travelers.

Airport infrastructure has seen dramatic improvement, with new terminals in Delhi, Mumbai, and Bangalore achieving international standards. However, regional connectivity remains inadequate, with many tier-two and tier-three cities lacking the aviation infrastructure to fully participate in the national economy.

The infrastructure story is ultimately one of ambition confronting enormous scale and complexity. Corruption, land acquisition challenges, and funding constraints slow progress, yet the trajectory is unmistakably upward.`,
    issues: [
      'Urban congestion and inadequate public transit in major cities',
      'Aging railway infrastructure requiring massive modernization investment',
      'Rural-urban digital divide in broadband connectivity',
      'Airport capacity constraints in major metropolitan areas',
      'Corruption and delays in infrastructure project delivery'
    ],
    topStoryIndices: [1, 2, 3, 17, 25]
  },
  {
    name: 'Israel',
    summary: `Israel's infrastructure development reflects a nation that has transformed engineering necessity into innovation. In a country where water scarcity once posed existential threats, desalination plants and advanced water management systems now provide over 80% of domestic water supply - a remarkable feat of infrastructure foresight. This same innovative spirit permeates the country's approach to transportation and digital connectivity.

Tel Aviv's light rail system, after years of construction challenges, is gradually taking shape as the backbone of a city that long relied almost exclusively on private vehicles. The project's delays highlight familiar urban infrastructure dilemmas: excavation revealing archaeological discoveries that pause construction, the complexity of building transit systems in dense urban environments without disrupting existing life. Yet the vision remains sound - creating a public transit network capable of reducing the automobile dependency that has made Tel Aviv one of the world's most congested cities.

The national railway network has seen significant investment, with the Tel Aviv-Jerusalem high-speed line representing a genuine engineering achievement. Tunneling through challenging topography, the line connects Israel's two largest cities in under 30 minutes, fundamentally altering commuter patterns. Yet the rail network remains incomplete, with northern and southern regions still underserved.

Road infrastructure faces perpetual strain from a small country with high vehicle ownership rates. The Trans-Israel Highway and ongoing highway expansions represent attempts to manage congestion, but they also reflect a car-centric planning philosophy that may not serve long-term urban sustainability. Ben Gurion Airport continues to expand, serving as both a critical international gateway and a symbol of the country's connectivity to global networks.

Digital infrastructure represents perhaps Israel's greatest infrastructure strength. As a technology hub, the country has prioritized fiber optic networks and 5G deployment, creating digital connectivity that enables its thriving tech sector. Smart city initiatives in Tel Aviv and elsewhere integrate digital systems with physical infrastructure in ways that point toward more responsive, efficient urban environments.

Water infrastructure extends beyond desalination to sophisticated agricultural systems enabling farming in desert regions. Drip irrigation, water recycling, and precision agriculture represent infrastructure innovation that many water-stressed regions might emulate. Yet challenges persist: aging water pipes in older urban areas, the need for continuous investment in desalination capacity, and the imperative of managing this precious resource sustainably.`,
    issues: [
      'Urban congestion and delayed light rail development in major cities',
      'Car-dependency and insufficient public transit alternatives',
      'Regional inequality in rail network coverage',
      'Aging water pipe infrastructure in older neighborhoods',
      'Balancing development with archaeological preservation in construction'
    ],
    topStoryIndices: [3, 5, 8, 12, 19]
  },
  {
    name: 'Italy',
    summary: `Italy's infrastructure tells a story of Renaissance engineering excellence confronting modern demands and chronic underinvestment. The nation that gave the world the Roman road system now grapples with aging infrastructure that requires modernization while preserving extraordinary cultural heritage. Rome's metro system, perpetually under construction, exemplifies this challenge - every excavation unearths archaeological treasures that transform transit projects into multi-year negotiations between past and present.

The high-speed rail network, particularly the Milan-Rome corridor, represents Italy's greatest modern infrastructure achievement. Trenitalia's Frecciarossa trains rival any in Europe for speed and comfort, connecting major cities with efficiency that obviates domestic air travel on many routes. Yet this success highlights regional disparities - the prosperous north enjoys excellent rail connectivity while the south remains inadequately served. The Messina Strait Bridge, debated for decades, symbolizes the challenge of connecting Sicily to the mainland with infrastructure commensurate with its population and economic potential.

Road infrastructure faces dual pressures of topography and maintenance. The Autostrada network, privately operated, provides generally good connectivity but requires continuous investment. Mountain tunnels and coastal viaducts demand constant maintenance, costs that are increasingly difficult to justify given traffic volumes. The tragic Morandi Bridge collapse in Genoa exposed systemic infrastructure neglect, triggering national soul-searching about investment priorities and safety standards.

Urban public transit varies dramatically by city. Milan's metro and tram systems function effectively, while Rome's network remains incomplete and overcrowded. Florence and Venice face unique challenges - preserving medieval city centers while accommodating modern mobility needs. The proliferation of low-traffic zones (ZTL) in historic centers represents an attempt to balance preservation with accessibility, though implementation remains contentious.

Airport infrastructure is adequate rather than exceptional. Rome Fiumicino and Milan Malpensa serve as international gateways, but neither ranks among Europe's most efficient or passenger-friendly airports. Regional airports in Venice, Naples, and other cities struggle with capacity and modernization needs.

Digital infrastructure lags behind northern European standards. Fiber optic deployment proceeds slowly, particularly in rural areas and the south. 5G rollout faces regulatory hurdles and public skepticism. For a G7 nation, Italy's digital connectivity ranks disappointingly low, creating competitive disadvantages for businesses and quality-of-life issues for residents. The challenge ahead is formidable: modernize aging physical infrastructure while accelerating digital development, all within budgetary constraints that have characterized Italian public finance for decades.`,
    issues: [
      'Aging road infrastructure and bridge safety concerns',
      'North-South disparity in rail and digital infrastructure',
      'Archaeological preservation complicating urban transit construction',
      'Slow fiber optic and 5G deployment compared to EU peers',
      'Insufficient investment in infrastructure maintenance and modernization'
    ],
    topStoryIndices: [5, 8, 15, 22, 28]
  },
  {
    name: 'Japan',
    summary: `Japan's infrastructure systems represent the apotheosis of precision engineering and operational excellence. The Shinkansen, continuously refined since 1964, remains the global standard for high-speed rail - punctuality measured in seconds, safety records unmatched worldwide, and integration with urban systems that creates seamless multimodal connectivity. Tokyo's metro and rail networks move tens of millions of passengers daily with a reliability that seems almost metaphysical to observers from other megacities. This is infrastructure as national ethos, where system performance reflects cultural values of precision and collective responsibility.

Yet even this infrastructure paragon faces formidable challenges. Japan's population decline and aging demographics create unprecedented questions: how do you maintain world-class infrastructure systems when user bases shrink and the working-age population that funds and operates these systems diminishes? Rural rail lines face closure as ridership evaporates. The Shinkansen network, while profitable on major corridors, includes extensions to smaller cities that may never justify their construction costs in purely economic terms.

Earthquake resilience defines Japanese infrastructure in ways unique globally. Building codes incorporate seismic design that saved countless lives during the 2011 Tohoku earthquake, even as the tsunami exposed vulnerabilities in other systems. Ongoing investment in seismic retrofitting, particularly of older structures, represents a continuous commitment to resilience. The infrastructure challenge is less about building new systems than maintaining and upgrading existing ones to meet evolving seismic understanding and climate challenges.

Urban planning in Tokyo and other major cities has achieved remarkable density without sacrificing livability - a lesson many cities might study. Mixed-use development around transit stations, pedestrian-friendly street design despite limited space, and the integration of green spaces into dense urban fabric demonstrate that high-quality urban infrastructure isn't just about movement systems but creating humane environments.

Digital infrastructure has seen massive investment, with nationwide fiber optic networks and aggressive 5G deployment. However, Japan's corporate culture and regulatory environment have sometimes slowed adoption of new technologies compared to Korea or China. The country that pioneered consumer robotics and electronics now finds itself playing catch-up in some digital infrastructure domains.

Airport infrastructure, led by Tokyo Haneda and Narita, functions efficiently but faces capacity constraints. Osaka Kansai and other regional airports serve well, but the system lacks the growth capacity to accommodate major tourism expansion without significant investment. Port infrastructure remains world-class, crucial for an island nation dependent on maritime trade.

The infrastructure imperative for Japan is unprecedented: maintain excellence while adapting to demographic contraction, increasing climate risks, and the need for digital transformation. How Japan navigates this challenge will influence infrastructure thinking globally.`,
    issues: [
      'Rural infrastructure sustainability amid population decline',
      'Aging population requiring infrastructure accessibility modifications',
      'Seismic retrofitting of older buildings and infrastructure',
      'Airport capacity constraints limiting tourism growth',
      'Adapting infrastructure systems to shrinking user bases while maintaining quality'
    ],
    topStoryIndices: [3, 4, 7, 18, 31]
  },
  {
    name: 'Kenya',
    summary: `Kenya's infrastructure development represents East Africa's most ambitious attempt to build systems that can support economic transformation. The Standard Gauge Railway, connecting Mombasa to Nairobi and extending toward Uganda, embodies both the promise and challenges of large-scale infrastructure investment in developing nations. Built with Chinese financing and engineering, the railway offers dramatically faster freight transport than the antiquated colonial-era line it supplements. Yet questions about financing sustainability, actual usage levels versus projections, and whether such projects truly catalyze broader economic development remain contentious.

Nairobi's urban infrastructure struggles under the weight of rapid population growth that has far outpaced planning and investment. Traffic congestion ranks among the world's worst, reflecting decades of automobile-centric planning without corresponding investment in public transit. The ongoing construction of commuter rail lines and BRT (Bus Rapid Transit) corridors represents belated recognition that sustainable urban mobility requires dedicated public transit infrastructure. However, implementation has been slow, and the challenge of retrofitting transit systems into a city that developed without them remains formidable.

Road infrastructure outside major urban areas varies dramatically. The Northern Corridor connecting Mombasa to the interior has seen significant upgrades, crucial for trade flows not just for Kenya but for the entire East African Community. Yet rural road networks remain inadequate, with many communities cut off during rainy seasons. The infrastructure divide between urban/corridor regions and rural peripheries perpetuates economic inequalities.

Jomo Kenyatta International Airport serves as East Africa's major hub, but aging infrastructure and capacity constraints limit its potential. Ongoing expansion projects proceed slowly, hampered by funding challenges and bureaucratic complexity. Regional airports in Mombasa, Kisumu, and other cities require modernization to support domestic connectivity and tourism development.

Digital infrastructure has emerged as perhaps Kenya's greatest infrastructure success story. M-Pesa, the mobile money system, created financial infrastructure where traditional banking never reached, enabling millions to participate in the formal economy. Mobile connectivity has achieved near-universal coverage, with 4G networks extending to many rural areas. However, fiber optic infrastructure remains concentrated in urban areas, and internet costs remain high by international standards. The government's ambitions for technology hubs and digital economy development require continued investment in connectivity infrastructure.

Port infrastructure at Mombasa faces perpetual congestion challenges. As the primary gateway for imports/exports for much of East Africa, the port's capacity constraints create cascading economic effects. Expansion projects proceed, but competing ports in Tanzania and elsewhere threaten Mombasa's regional dominance.`,
    issues: [
      'Urban traffic congestion and insufficient public transit systems',
      'Debt sustainability concerns from large infrastructure projects',
      'Rural road network inadequacy affecting agricultural market access',
      'Port congestion at Mombasa limiting trade efficiency',
      'Urban-rural divide in digital infrastructure access and quality'
    ],
    topStoryIndices: [2, 7, 14, 21, 26]
  }
]

async function saveSummaries() {
  console.log('🚀 Saving infrastructure summaries for countries 61-75\n')

  let successCount = 0
  let errorCount = 0

  for (const summaryData of summaries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${summaryData.name}`)
    console.log('='.repeat(80))

    try {
      const location = locations.find(l => l.name === summaryData.name)
      if (!location) {
        console.log(`⚠️  Location ${summaryData.name} not found in coordinates list - skipping`)
        continue
      }

      // Fetch stories to create topStories array
      const stories = await prisma.story.findMany({
        where: { country: summaryData.name },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 100,
      })

      if (stories.length === 0) {
        console.log(`⚠️  No stories found for ${summaryData.name} - skipping`)
        continue
      }

      // Map top story indices to actual stories
      const topStories = summaryData.topStoryIndices
        .filter(idx => idx <= stories.length)
        .map(idx => {
          const story = stories[idx - 1]
          return {
            title: story.title,
            source: story.source,
            link: story.link,
            pubDate: story.pubDate.toISOString(),
          }
        })

      // If we don't have enough top stories, add more from recent stories
      if (topStories.length < 5) {
        const additionalStories = stories.slice(0, 5 - topStories.length)
        topStories.push(...additionalStories.map(story => ({
          title: story.title,
          source: story.source,
          link: story.link,
          pubDate: story.pubDate.toISOString(),
        })))
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summaryData.name,
            type: 'country',
            category: 'infrastructure',
          },
        },
        update: {
          summary: summaryData.summary,
          issues: JSON.stringify(summaryData.issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: summaryData.name,
          type: 'country',
          country: summaryData.name,
          lat: location.lat,
          lng: location.lng,
          category: 'infrastructure',
          summary: summaryData.summary,
          issues: JSON.stringify(summaryData.issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`✅ Saved infrastructure summary for ${summaryData.name}`)
      console.log(`   - Summary length: ${summaryData.summary.length} characters`)
      console.log(`   - Issues: ${summaryData.issues.length}`)
      console.log(`   - Top stories: ${topStories.length}`)

      successCount++
    } catch (error) {
      console.error(`❌ Error saving summary for ${summaryData.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary generation complete!')
  console.log('='.repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successfully saved: ${successCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log(`   - Total summaries: ${summaries.length}`)
}

saveSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
