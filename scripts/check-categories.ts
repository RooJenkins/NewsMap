import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Check existing categories
  const summaries = await prisma.locationSummary.findMany({
    select: {
      category: true,
      name: true,
    },
    distinct: ['category'],
  })

  console.log('Existing categories:')
  summaries.forEach(s => console.log(`  - ${s.category}`))

  // Check if science category exists
  const scienceSummaries = await prisma.locationSummary.findMany({
    where: {
      category: 'science',
    },
    select: {
      name: true,
    },
  })

  console.log(`\nScience summaries count: ${scienceSummaries.length}`)
  if (scienceSummaries.length > 0) {
    console.log('Countries with science summaries:')
    scienceSummaries.forEach(s => console.log(`  - ${s.name}`))
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
