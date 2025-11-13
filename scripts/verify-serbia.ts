import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifySerbia() {
  console.log('Verifying Serbia entry in database...\n')

  try {
    const result = await prisma.locationSummary.findFirst({
      where: {
        name: 'Serbia',
        type: 'country',
        category: 'all'
      }
    })

    if (result) {
      console.log('✅ Serbia found in database')
      console.log('   ID:', result.id)
      console.log('   Name:', result.name)
      console.log('   Type:', result.type)
      console.log('   Category:', result.category)
      console.log('   Coordinates:', `${result.lat}, ${result.lng}`)
      console.log('   Story Count:', result.storyCount)
      console.log('   Summary length:', result.summary.length, 'characters')
      console.log('   Issues:', JSON.parse(result.issues).length)
      console.log('   Top Stories:', JSON.parse(result.topStories).length)
      console.log('   Updated At:', result.updatedAt.toISOString())
      console.log('\n✅ Serbia tooltip in MapViewLocations.tsx: "Vucic squeezed: protests, Russia rebuke, EU accession frozen"')
    } else {
      console.log('❌ Serbia not found in database')
    }
  } catch (error) {
    console.error('❌ Error verifying Serbia:', error)
    throw error
  }
}

verifySerbia()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
