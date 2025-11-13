import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const summaries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'all'
    },
    select: {
      name: true,
      lat: true,
      lng: true
    },
    orderBy: {
      name: 'asc'
    }
  })
  
  console.log(JSON.stringify(summaries, null, 2))
  console.log(`\nTotal countries: ${summaries.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
