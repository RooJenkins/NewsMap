import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 31-45 with coordinates
const countries = [
  { name: 'China', type: 'country', lat: 35.0, lng: 105.0 },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973 },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2 },
  { name: 'Cuba', type: 'country', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', type: 'country', lat: 35.1264, lng: 33.4299 },
  { name: 'Czech Republic', type: 'country', lat: 49.8175, lng: 15.473 },
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587 },
  { name: 'Denmark', type: 'country', lat: 56.2639, lng: 9.5018 },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025 },
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965 },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136 },
  { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897 },
]

async function getStoriesForCountry(countryName: string) {
  const stories = await prisma.story.findMany({
    where: { country: countryName },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 50,
  })
  return stories
}

async function main() {
  console.log('🚀 Fetching stories for infrastructure summary generation\n')
  console.log('Countries:', countries.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80))

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Fetching stories for: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const stories = await prisma.story.findMany({
        where: { country: location.name },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 50,
      })

      console.log(`📰 Found ${stories.length} stories for ${location.name}`)

      if (stories.length > 0) {
        console.log('\nTop stories:')
        stories.slice(0, 10).forEach((story, i) => {
          console.log(`${i + 1}. [${story.source}] ${story.title}`)
          console.log(`   Published: ${story.pubDate.toISOString()}`)
          if (story.description) {
            console.log(`   ${story.description.substring(0, 150)}...`)
          }
          console.log()
        })
      }
    } catch (error) {
      console.error(`❌ Error fetching stories for ${location.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Story fetching complete!')
  console.log('\n📝 Please provide the stories to Claude for infrastructure summary generation.')
  console.log('Claude can then generate summaries in Norman Foster style covering:')
  console.log('  - Transportation networks (roads, rail, metro, airports)')
  console.log('  - Public transit quality')
  console.log('  - Urban planning')
  console.log('  - Major infrastructure projects')
  console.log('  - Infrastructure maintenance')
  console.log('  - Digital infrastructure (broadband, 5G)')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
