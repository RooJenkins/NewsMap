import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const economies = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'economy'
    },
    select: {
      name: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`\nTotal Economy Writeups: ${economies.length}/114\n`)
  console.log('Completed countries:')
  economies.forEach((e, i) => {
    console.log(`${i + 1}. ${e.name}`)
  })

  await prisma.$disconnect()
}

main().catch(console.error)
