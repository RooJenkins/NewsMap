import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifySummaries() {
  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'humanrights'
    },
    select: {
      name: true,
      category: true,
      summary: true,
      issues: true
    }
  })

  console.log(`\n✅ Found ${summaries.length} human rights summaries in database\n`)

  for (const summary of summaries) {
    const charCount = summary.summary.length
    const issues = JSON.parse(summary.issues)
    console.log(`${summary.name}:`)
    console.log(`  - Characters: ${charCount}`)
    console.log(`  - Issues: ${issues.length}`)
    console.log(`  - Sample issue: "${issues[0]}"`)
    console.log()
  }
}

verifySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
