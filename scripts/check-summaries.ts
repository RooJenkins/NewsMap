import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const summaries = await prisma.locationSummary.findMany({
    select: {
      name: true,
      category: true,
      updatedAt: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
    take: 20,
  })

  console.log(`Total summaries found: ${summaries.length}`)
  summaries.forEach((s) => {
    console.log(`- ${s.name} (${s.category}) - Updated: ${s.updatedAt}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
