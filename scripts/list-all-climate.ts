import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:/home/user/NewsMap/prisma/dev.db'
    }
  }
})

async function list() {
  const all = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'climate'
    },
    select: {
      name: true
    },
    orderBy: {
      name: 'asc'
    }
  })
  
  console.log('Total:', all.length)
  all.forEach((entry, i) => {
    const num = i + 1
    console.log(num + '. ' + entry.name)
  })
  
  await prisma.$disconnect()
}

list()
