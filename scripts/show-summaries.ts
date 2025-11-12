import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function showSummaries() {
  const summaries = await prisma.locationSummary.findMany({
    where: {
      type: 'country'
    },
    orderBy: {
      updatedAt: 'desc'
    },
    take: 3
  })

  console.log(`\n📊 Found ${summaries.length} country summaries\n`)
  console.log('=' .repeat(80))

  for (const summary of summaries) {
    console.log(`\n🌍 ${summary.name} (${summary.storyCount} stories analyzed)`)
    console.log('-'.repeat(80))
    console.log(summary.summary)
    console.log('\n' + '='.repeat(80))
  }
}

showSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
