import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const results = await prisma.locationSummary.findMany({
    where: {
      category: 'politics',
      name: { in: ['Argentina', 'Bolivia', 'Brazil', 'Canada', 'Chile'] }
    },
    select: {
      name: true,
      category: true,
      issues: true,
      updatedAt: true,
      summary: true
    },
    orderBy: { name: 'asc' }
  })

  console.log('\n=== VERIFICATION RESULTS ===\n')
  results.forEach(r => {
    const issues = JSON.parse(r.issues)
    console.log(`${r.name} (Politics)`)
    console.log(`  Character count: ${r.summary.length}`)
    console.log(`  Issues: ${issues.join(' | ')}`)
    console.log(`  Updated: ${r.updatedAt.toISOString()}`)
    console.log()
  })

  console.log(`Total records found: ${results.length}`)

  await prisma.$disconnect()
}

verify().catch(console.error)
