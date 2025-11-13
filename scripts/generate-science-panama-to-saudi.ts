import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries Panama to Saudi Arabia for SCIENCE & RESEARCH category
const COUNTRIES = [
  { name: 'Panama', type: 'country', lat: 8.538, lng: -80.7821 },
  { name: 'Papua New Guinea', type: 'country', lat: -6.314993, lng: 143.95555 },
  { name: 'Paraguay', type: 'country', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', type: 'country', lat: -9.19, lng: -75.0152 },
  { name: 'Philippines', type: 'country', lat: 12.8797, lng: 121.774 },
  { name: 'Poland', type: 'country', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', type: 'country', lat: 39.3999, lng: -8.2245 },
  { name: 'Qatar', type: 'country', lat: 25.3548, lng: 51.1839 },
  { name: 'Republic of Congo', type: 'country', lat: -0.228, lng: 15.8277 },
  { name: 'Romania', type: 'country', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', type: 'country', lat: 61.524, lng: 105.3188 },
  { name: 'Rwanda', type: 'country', lat: -1.9403, lng: 29.8739 },
  { name: 'Saudi Arabia', type: 'country', lat: 23.8859, lng: 45.0792 },
]

// Science & Research summaries for each country (Ed Yong / Carl Zimmer style)
// 2,500-3,500 characters, focusing on research institutions, R&D spending, breakthroughs, STEM education
const SCIENCE_SUMMARIES: { [key: string]: { summary: string; issues: string[] } } = {
  'Panama': {
    summary: `Panama occupies a unique position in global science-literally. This narrow isthmus connecting two continents and two oceans is a living laboratory for studying biogeography, tropical ecology, and the movement of species between worlds. Yet Panama's scientific capacity remains modest, investing just 0.2% of GDP in research and development, among the lowest in Latin America. The potential vastly exceeds the resources.

The crown jewel is the Smithsonian Tropical Research Institute (STRI), established in 1923 and operating with US government support. STRI maintains research stations across Panama-Barro Colorado Island in Gatun Lake, marine labs on both coasts-attracting international scientists to study rainforest ecology, coral reefs, and species evolution. Groundbreaking research on everything from leaf-cutter ant colonies to bird migration patterns emanates from STRI. Yet this is fundamentally a foreign institution serving global science, only tangentially connected to Panama's domestic research capacity.

The University of Panama and the Technological University of Panama conduct most national research, focusing on tropical agriculture, fisheries science, and civil engineering (the Canal requires constant study). Panamanian scientists study diseases like dengue and malaria, agricultural pests affecting bananas and coffee, and the ecological impacts of deforestation. The Ciudad del Saber (City of Knowledge), built on former US Canal Zone territory, aspires to be a regional innovation hub, but remains more aspiration than reality.

Brain drain is severe. Panama trains capable scientists and engineers who often pursue careers in the United States, Costa Rica, or Chile. Academic salaries are low, research funding scarce, and equipment outdated. The STEM education system is weak-elite private schools produce strong students, but the broader public system emphasizes rote memorization and struggles with teacher quality. Panama's service-oriented economy, dominated by banking, logistics, and tourism, creates little demand for domestic R&D.

Recent governments have recognized science as important for economic diversification beyond the Canal. Panama has niche opportunities in marine biology, tropical medicine, and logistics technology. But translating geographic fortune and biodiversity wealth into genuine scientific capacity requires sustained investment, institutional reform, and reversing brain drain-none of which appear imminent. Panama remains a place where science happens, but not yet a scientific nation.`,
    issues: [
      "Very low R&D investment at 0.2% of GDP",
      "Brain drain - scientists leaving for US, Costa Rica, Chile",
      "Research dominated by foreign institutions like STRI, not domestic",
      "Weak STEM education outside elite private schools",
      "Service economy creating minimal demand for domestic R&D",
    ],
  },
}

async function main() {
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation: Panama to Saudi Arabia\n')
  console.log('Countries to process:', COUNTRIES.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80) + '\n')

  let successCount = 0
  let errorCount = 0
  const completedCountries: string[] = []

  for (const location of COUNTRIES) {
    console.log('\n' + '='.repeat(80))
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const scienceData = SCIENCE_SUMMARIES[location.name]

      if (!scienceData) {
        console.log(`⚠️  No science summary data for ${location.name} - skipping`)
        errorCount++
        continue
      }

      const { summary, issues } = scienceData

      // Fetch recent stories for this country to include as top stories
      const stories = await prisma.story.findMany({
        where: {
          country: location.name,
        },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 10,
      })

      const topStories = stories.slice(0, 7).map((story) => ({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      }))

      console.log(`📝 Summary: ${summary.length} characters`)
      console.log(`📋 Issues: ${issues.length}`)
      console.log(`📰 Top stories: ${topStories.length}`)

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'science',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.name,
          lat: location.lat,
          lng: location.lng,
          category: 'science',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`✅ Successfully saved science summary for ${location.name}`)
      successCount++
      completedCountries.push(location.name)

      // Small delay to avoid overwhelming the database
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      console.error(`❌ Error saving science summary for ${location.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ SCIENCE & RESEARCH summary generation complete!')
  console.log('='.repeat(80))
  console.log('\n📊 Results:')
  console.log(`   ✅ Successfully generated: ${successCount}`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`   📝 Total countries: ${COUNTRIES.length}`)
  console.log('\n📍 Completed countries:')
  completedCountries.forEach(country => console.log(`   ✓ ${country}`))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
