import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkCultureCountries() {
  const cultureCountries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'culture'
    },
    select: { name: true },
    orderBy: { name: 'asc' }
  })

  console.log('\n✅ Culture writeups completed (20):\n')
  cultureCountries.forEach(c => console.log(`  - ${c.name}`))
}

checkCultureCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
