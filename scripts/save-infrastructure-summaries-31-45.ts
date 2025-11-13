import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const infrastructureSummaries = {
  'China': {
    summary: `China's infrastructure development represents perhaps the most ambitious built environment transformation in human history. The nation has constructed over 45,000 kilometers of high-speed rail since 2008—more than the rest of the world combined—creating a network that moves 3.5 billion passengers annually at speeds up to 350 km/h. This is not merely transportation infrastructure; it's a reimagining of spatial relationships across a continental nation.

The urban metro systems exemplify this scale: Beijing, Shanghai, and Guangzhou each operate networks exceeding 500 kilometers, with automated, high-frequency service that puts Western counterparts to shame. Shanghai's Metro alone carries 4 billion passengers yearly—more than the entire US transit system. New cities like Shenzhen have built from scratch transit networks that rival century-old European capitals.

Yet scale brings complexity. China's highway network now exceeds 177,000 kilometers, making it the world's largest, but congestion in megacities remains severe. The ambitious Belt and Road Initiative extends Chinese infrastructure expertise globally, with high-speed rail projects in Indonesia, Laos, and Kenya, though questions persist about debt sustainability and environmental impact.

Digital infrastructure represents another frontier. China leads in 5G deployment with over 3.6 million base stations covering 95% of counties. The integration of digital payment systems, IoT sensors, and smart city platforms in cities like Hangzhou and Suzhou demonstrates infrastructure thinking beyond concrete and steel—toward networked, responsive urban systems.

The challenges are equally monumental. Aging infrastructure in secondary cities requires massive maintenance investment. The carbon intensity of rapid development—particularly cement and steel production—conflicts with climate commitments. Housing infrastructure remains precarious, with the property sector's instability threatening broader economic stability. Ghost cities and underutilized infrastructure in western regions reveal planning disconnected from demographic and economic realities.

Most critically, resilience remains untested. Can these vast systems withstand climate stresses, economic downturns, and geopolitical tensions? The infrastructure that enabled China's rise may define its capacity to sustain prosperity through the turbulent decades ahead.`,
    issues: [
      'Aging infrastructure in secondary cities requiring massive maintenance',
      'Carbon intensity of infrastructure development conflicting with climate goals',
      'Property sector instability affecting housing infrastructure',
      'Underutilized infrastructure in western regions (ghost cities)',
      'Urban congestion despite extensive highway networks',
      'Climate resilience of rapid-build infrastructure systems'
    ],
    lat: 35.0,
    lng: 105.0
  },
  'Colombia': {
    summary: `Colombia's infrastructure landscape reflects a nation emerging from decades of conflict, now racing to connect its fractured geography. The 4G toll road program—the largest infrastructure initiative in Latin America—aims to double the country's paved road network by 2030, with 8,000 kilometers of new highways linking Pacific ports to Caribbean coasts and Bogotá to isolated interior regions.

Yet topography imposes brutal constraints. The Andes cordillera divides the country into parallel valleys, making east-west connectivity extraordinarily expensive. The Bogotá-Villavicencio road, crossing just 100 kilometers of mountains, requires constant maintenance against landslides and costs more per kilometer than Swiss Alpine highways. This geography long isolated regions, enabling insurgent control—infrastructure here is inseparable from state-building.

Urban transit tells a more optimistic story. Bogotá's TransMilenio BRT system moves 2.5 million daily passengers, pioneering rapid bus transit that influenced cities globally. Now the capital plans its first metro line—a 24-kilometer elevated system breaking ground in 2025. Medellín's metro and cable car integration, connecting informal hillside settlements to the city center, demonstrates infrastructure as social policy: reducing travel time from two hours to fifteen minutes for marginalized communities.

Digital infrastructure advances rapidly. Fiber optic backbone reaches 90% of municipalities, with 5G deployment beginning in major cities. Colombia's tech sector, concentrated in Bogotá and Medellín, benefits from improving connectivity, though rural-urban digital divides persist—40% of rural areas lack reliable broadband.

The challenges remain formidable. Infrastructure investment as GDP percentage lags regional peers. Corruption and cost overruns plague major projects. The Pacific port of Buenaventura, handling 60% of national trade, suffers chronic congestion and inadequate road connections. Climate vulnerability grows acute: intense rainfall triggers landslides that routinely close critical highways, while Caribbean coastal infrastructure faces rising seas.

Most pressing is the maintenance deficit. New highways deteriorate within years due to inadequate upkeep and heavy truck traffic. The focus on ribbon-cutting over lifecycle management threatens to create expensive white elephants rather than durable connectivity infrastructure Colombia desperately needs.`,
    issues: [
      'Challenging Andean topography increasing infrastructure costs dramatically',
      'Maintenance deficit causing rapid deterioration of new highways',
      'Corruption and cost overruns in major infrastructure projects',
      'Port congestion and inadequate road connections to Buenaventura',
      'Climate vulnerability: landslides and coastal infrastructure threats',
      'Rural-urban digital divide with 40% of rural areas lacking broadband'
    ],
    lat: 4.5709,
    lng: -74.2973
  },
  'Egypt': {
    summary: `Egypt's infrastructure narrative centers on the New Administrative Capital—a $60 billion city rising from desert 45 kilometers east of Cairo, perhaps the most audacious urban project of the 21st century. This new capital, planned for 6.5 million residents, features Africa's tallest building, a vast government district, and infrastructure designed from ground zero for 21st-century urban systems. It represents President Sisi's vision of Egyptian modernity, though critics question whether it addresses the nation's most pressing infrastructure needs.

Cairo's existing infrastructure strains under overwhelming pressure. The metro system, Africa's oldest and most extensive, carries 4 million daily passengers across three lines totaling 90 kilometers—chronically overcrowded yet essential for urban mobility. Line 3's extension and the planned Line 4 offer relief, but implementation lags. Road infrastructure paradoxically combines massive new elevated highways with neighborhoods where medieval street patterns persist.

The Suez Canal expansion—completed in 2015—doubled capacity for one of the world's most strategic waterways, generating $9.4 billion annually in revenues. This success contrasts with underperforming projects: the canal parallel cities envisioned to attract industry remain largely undeveloped, revealing disconnects between infrastructure supply and economic demand.

Transportation megaprojects proliferate. The 2,000-kilometer electric high-speed rail network—connecting Mediterranean coast to Red Sea resorts and Upper Egypt—represents Chinese engineering's largest African engagement. If completed as planned by 2027, it would transform intercity connectivity, though financing and ridership projections face skepticism.

Digital infrastructure improves steadily. 4G coverage reaches 95% of populated areas, with 5G trials in new cities. Fiber optic backbone expands, though internet speeds lag regional peers. Smart infrastructure integration in the New Capital pilots technologies rarely deployed at national scale.

Yet fundamental challenges persist. Water infrastructure faces existential stress: population growth, agricultural demands, and Ethiopian dam politics threaten supply. Electricity infrastructure, despite massive generation investments, suffers reliability issues in older neighborhoods. Housing remains critical—informal settlements house 60% of Greater Cairo's population with minimal infrastructure.

The elephant in the room is financial sustainability. Mega-infrastructure fueled by debt has pushed public debt above 90% of GDP. If these projects fail to generate projected revenues, Egypt risks infrastructure-driven fiscal crisis—monuments to ambition rather than engines of broadly shared prosperity.`,
    issues: [
      'Water infrastructure under existential stress from growth and Nile politics',
      'Public debt above 90% GDP driven by mega-infrastructure projects',
      'New Administrative Capital drawing resources from existing city needs',
      'Informal settlements housing 60% of Cairo with minimal infrastructure',
      'Underutilized Suez Canal parallel cities failing to attract industry',
      'Electric high-speed rail financing and ridership sustainability questions'
    ],
    lat: 26.8206,
    lng: 30.8025
  }
}

async function saveInfrastructureSummaries() {
  console.log('🚀 Saving pre-generated infrastructure summaries\n')
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
  console.log('\n⚠️  Note: 11 countries skipped (no stories in database):')
  console.log('   Croatia, Cuba, Cyprus, Czech Republic, DR Congo, Denmark,')
  console.log('   Dominican Republic, Ecuador, El Salvador, Estonia, Ethiopia')
}

saveInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
