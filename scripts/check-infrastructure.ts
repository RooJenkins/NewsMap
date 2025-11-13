import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkInfrastructure() {
  const existing = await prisma.locationSummary.findMany({
    where: {
      category: 'infrastructure',
      type: 'country'
    },
    select: {
      name: true,
      summary: true,
      issues: true
    },
    take: 2
  })

  console.log('Existing infrastructure summaries:')
  existing.forEach(loc => {
    console.log(`\n=== ${loc.name} ===`)
    console.log(loc.summary.substring(0, 1000))
    console.log('\n--- Issues ---')
    console.log(loc.issues)
  })
}

checkInfrastructure()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
