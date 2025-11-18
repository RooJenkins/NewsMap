import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const count = await prisma.locationSummary.count({
    where: { category: 'entertainment' }
  })

  console.log(`Total entertainment summaries: ${count}`)

  const summaries = await prisma.locationSummary.findMany({
    where: { category: 'entertainment' },
    select: { name: true },
    orderBy: { name: 'asc' }
  })

  console.log('\nCountries with entertainment summaries:')
  summaries.forEach(s => console.log(`- ${s.name}`))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
