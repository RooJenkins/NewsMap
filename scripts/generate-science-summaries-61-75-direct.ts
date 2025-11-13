import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 61-75: India through Laos
const locations = [
  { name: 'India', type: 'country', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', type: 'country', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.688 },
  { name: 'Iraq', type: 'country', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', type: 'country', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', type: 'country', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', type: 'country', lat: 41.8719, lng: 12.5674 },
  { name: 'Ivory Coast', type: 'country', lat: 7.54, lng: -5.5471 },
  { name: 'Jamaica', type: 'country', lat: 18.1096, lng: -77.2975 },
  { name: 'Japan', type: 'country', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', type: 'country', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', type: 'country', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', type: 'country', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', type: 'country', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', type: 'country', lat: 19.8563, lng: 102.4955 },
]

async function fetchStoriesForCountry(locationName: string) {
  const stories = await prisma.story.findMany({
    where: {
      country: locationName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100,
  })

  return stories
}

async function main() {
  console.log('🚀 Fetching stories for science summary generation (countries 61-75)\n')
  console.log('Countries: India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Ivory Coast, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kuwait, Laos\n')

  const results = []

  for (const location of locations) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const stories = await fetchStoriesForCountry(location.name)

      console.log(`📰 Found ${stories.length} stories for ${location.name}`)

      if (stories.length > 0) {
        results.push({
          name: location.name,
          location,
          storyCount: stories.length,
          stories: stories.slice(0, 100),
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
  console.log(`Countries with stories: ${results.length}/${locations.length}`)

  console.log('\n📝 Countries ready for science summary generation:')
  results.forEach(r => {
    console.log(`  ✅ ${r.name}: ${r.storyCount} stories`)
  })

  if (results.length === 0) {
    console.log('\n⚠️  No countries have stories available.')
  } else {
    console.log('\n📝 Ready to generate science summaries for these countries.')
    console.log('Please use Claude Code to generate Ed Yong / Carl Zimmer style summaries.')
  }

  // Save the results to a JSON file for review
  const fs = require('fs')
  fs.writeFileSync(
    '/home/user/NewsMap/scripts/science-summaries-61-75-data.json',
    JSON.stringify(results, null, 2)
  )
  console.log('\n💾 Saved story data to scripts/science-summaries-61-75-data.json')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
