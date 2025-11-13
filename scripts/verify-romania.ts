import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyRomania() {
  console.log('Verifying Romania entry in database...\n')

  try {
    const romania = await prisma.locationSummary.findFirst({
      where: {
        name: 'Romania',
        type: 'country',
        category: 'all'
      }
    })

    if (romania) {
      console.log('✅ Romania found in database!')
      console.log('   ID:', romania.id)
      console.log('   Name:', romania.name)
      console.log('   Type:', romania.type)
      console.log('   Location:', `${romania.lat}, ${romania.lng}`)
      console.log('   Category:', romania.category)
      console.log('   Issues:', JSON.parse(romania.issues).length)
      console.log('   Top Stories:', JSON.parse(romania.topStories).length)
      console.log('   Story Count:', romania.storyCount)
      console.log('   Summary length:', romania.summary.length, 'characters')
      console.log('   Updated at:', romania.updatedAt)
      console.log()
      console.log('First 200 characters of summary:')
      console.log(romania.summary.substring(0, 200) + '...')
    } else {
      console.log('❌ Romania not found in database!')
    }
  } catch (error) {
    console.error('Error verifying Romania:', error)
    throw error
  }
}

verifyRomania()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
