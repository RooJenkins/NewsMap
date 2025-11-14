import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const count = await prisma.locationSummary.count({
    where: { category: 'infrastructure' }
  })
  console.log(`Infrastructure summaries in database: ${count}`)

  const samples = await prisma.locationSummary.findMany({
    where: { category: 'infrastructure' },
    select: { name: true },
    take: 10
  })
  console.log('Sample countries:', samples.map(s => s.name).join(', '))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
