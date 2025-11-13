import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyRwanda() {
  console.log('Verifying Rwanda in database...\n')

  const rwanda = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: 'Rwanda',
        type: 'country',
        category: 'all'
      }
    }
  })

  if (rwanda) {
    console.log('✅ Rwanda found in database')
    console.log(`   Name: ${rwanda.name}`)
    console.log(`   Type: ${rwanda.type}`)
    console.log(`   Coordinates: ${rwanda.lat}, ${rwanda.lng}`)
    console.log(`   Summary length: ${rwanda.summary.length} characters`)
    console.log(`   Issues: ${JSON.parse(rwanda.issues).length}`)
    console.log(`   Top stories: ${JSON.parse(rwanda.topStories).length}`)
    console.log(`   Updated: ${rwanda.updatedAt}`)
  } else {
    console.log('❌ Rwanda not found in database')
  }
}

verifyRwanda()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
