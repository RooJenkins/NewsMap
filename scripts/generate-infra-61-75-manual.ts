import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 61-75
const countries = [
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

export async function saveSummary(
  countryName: string,
  summary: string,
  issues: string[],
  topStories: any[]
) {
  const country = countries.find(c => c.name === countryName)
  if (!country) {
    throw new Error(`Country ${countryName} not found`)
  }

  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: countryName,
        type: 'country',
        category: 'infrastructure',
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
      name: countryName,
      type: 'country',
      country: countryName,
      lat: country.lat,
      lng: country.lng,
      category: 'infrastructure',
      summary,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories),
      storyCount: topStories.length,
    },
  })

  console.log(`✅ Saved infrastructure summary for ${countryName}`)
}

async function main() {
  console.log('🚀 Fetching stories for countries 61-75\n')
  console.log('Countries:', countries.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80))

  const countriesWithStories: { name: string, stories: any[], count: number }[] = []

  for (const location of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Fetching stories for: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const stories = await prisma.story.findMany({
        where: { country: location.name },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 100,
      })

      console.log(`📰 Found ${stories.length} stories for ${location.name}`)

      if (stories.length > 0) {
        countriesWithStories.push({
          name: location.name,
          stories,
          count: stories.length
        })

        console.log('\nTop 5 stories:')
        stories.slice(0, 5).forEach((story, i) => {
          console.log(`${i + 1}. [${story.source}] ${story.title}`)
          console.log(`   Published: ${story.pubDate.toISOString()}`)
        })
      }
    } catch (error) {
      console.error(`❌ Error fetching stories for ${location.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('📊 Summary:')
  console.log('='.repeat(80))
  console.log(`Countries with stories: ${countriesWithStories.length}/${countries.length}`)
  console.log('\nCountries ready for summary generation:')
  countriesWithStories.forEach(c => {
    console.log(`  - ${c.name}: ${c.count} stories`)
  })

  console.log('\n✅ Story fetching complete!')
  console.log('\n📝 Ready for Claude to generate infrastructure summaries.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
