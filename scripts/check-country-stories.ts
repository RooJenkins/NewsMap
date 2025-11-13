import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const targetCountries = [
  'Latvia', 'Lebanon', 'Libya', 'Lithuania', 'Luxembourg', 'Malaysia',
  'Maldives', 'Mali', 'Mauritania', 'Mexico', 'Moldova', 'Mongolia',
  'Montenegro', 'Morocco'
]

async function main() {
  for (const country of targetCountries) {
    const count = await prisma.story.count({
      where: { country }
    })
    console.log(`${country}: ${count} stories`)
  }

  console.log('\n---')
  const totalCountries = await prisma.story.groupBy({
    by: ['country'],
    _count: true,
    orderBy: { _count: { country: 'desc' } },
    take: 20
  })

  console.log('\nTop 20 countries with most stories:')
  totalCountries.forEach(c => {
    console.log(`  ${c.country}: ${c._count} stories`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
