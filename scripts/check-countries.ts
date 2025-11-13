import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const countries = await prisma.story.groupBy({
    by: ['country'],
    _count: true,
    orderBy: {
      _count: {
        country: 'desc'
      }
    },
    take: 50
  })
  
  console.log('Countries in database:')
  countries.forEach(c => console.log(`  ${c.country}: ${c._count} stories`))
}

main().finally(() => prisma.$disconnect())
