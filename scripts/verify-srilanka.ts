import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const summary = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: 'Sri Lanka',
        type: 'country',
        category: 'all'
      }
    }
  })

  if (summary) {
    console.log('✅ Sri Lanka found in database')
    console.log('\nName:', summary.name)
    console.log('Type:', summary.type)
    console.log('Coordinates:', summary.lat, summary.lng)
    console.log('Issues:', JSON.parse(summary.issues).length)
    console.log('Top Stories:', JSON.parse(summary.topStories).length)
    console.log('Story Count:', summary.storyCount)
    console.log('Summary length:', summary.summary.length, 'characters')
    console.log('\nFirst 500 chars of summary:')
    console.log(summary.summary.substring(0, 500) + '...')
  } else {
    console.log('❌ Sri Lanka not found in database')
  }
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
