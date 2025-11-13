import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyTunisia() {
  const tunisia = await prisma.locationSummary.findFirst({
    where: {
      name: 'Tunisia',
      type: 'country',
      category: 'all'
    }
  })

  if (tunisia) {
    console.log('✅ Tunisia found in database!')
    console.log('\n📍 Location Details:')
    console.log(`   Name: ${tunisia.name}`)
    console.log(`   Type: ${tunisia.type}`)
    console.log(`   Category: ${tunisia.category}`)
    console.log(`   Coordinates: ${tunisia.lat}, ${tunisia.lng}`)
    console.log(`   Story Count: ${tunisia.storyCount}`)
    console.log('\n📝 Summary (first 200 chars):')
    console.log(`   ${tunisia.summary.substring(0, 200)}...`)
    console.log('\n🔥 Issues:')
    const issues = JSON.parse(tunisia.issues)
    issues.forEach((issue: string, i: number) => console.log(`   ${i + 1}. ${issue}`))
    console.log('\n📰 Top Stories Count:', JSON.parse(tunisia.topStories).length)
  } else {
    console.log('❌ Tunisia not found in database')
  }
}

verifyTunisia()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
