import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyNetherlands() {
  const result = await prisma.locationSummary.findFirst({
    where: {
      name: 'Netherlands',
      type: 'country',
      category: 'all'
    }
  })

  if (result) {
    console.log('✅ Netherlands found in database')
    console.log('   ID:', result.id)
    console.log('   Name:', result.name)
    console.log('   Location:', `${result.lat}, ${result.lng}`)
    console.log('   Issues:', JSON.parse(result.issues).length)
    console.log('   Stories:', JSON.parse(result.topStories).length)
    console.log('   Summary length:', result.summary.length, 'characters')
  } else {
    console.log('❌ Netherlands not found in database')
  }
}

verifyNetherlands()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
