import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifySweden() {
  console.log('Verifying Sweden in database...\n')

  try {
    const sweden = await prisma.locationSummary.findFirst({
      where: {
        name: 'Sweden',
        type: 'country'
      }
    })

    if (sweden) {
      console.log('✅ Sweden found in database!')
      console.log('   ID:', sweden.id)
      console.log('   Name:', sweden.name)
      console.log('   Type:', sweden.type)
      console.log('   Country:', sweden.country)
      console.log('   Location:', `${sweden.lat}, ${sweden.lng}`)
      console.log('   Category:', sweden.category)
      console.log('   Story Count:', sweden.storyCount)
      console.log('   Issues:', JSON.parse(sweden.issues))
      console.log('   Number of Top Stories:', JSON.parse(sweden.topStories).length)
      console.log('   Updated:', sweden.updatedAt)
      console.log('\n📝 Summary Preview:')
      console.log(sweden.summary.substring(0, 300) + '...\n')
    } else {
      console.log('❌ Sweden not found in database')
    }
  } catch (error) {
    console.error('❌ Error verifying Sweden:', error)
    throw error
  }
}

verifySweden()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
