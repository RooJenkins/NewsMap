import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const count = await prisma.locationSummary.count({
    where: { category: 'energy', type: 'country' }
  })
  console.log(`✅ Total Energy writeups in database: ${count} / 114`)

  if (count === 114) {
    console.log('\n🎉 SUCCESS! All 114 countries have energy writeups!')
  } else {
    console.log(`\n⚠️  Missing ${114 - count} countries`)
  }

  const regions = await prisma.locationSummary.groupBy({
    by: ['name'],
    where: { category: 'energy', type: 'country' },
    _count: true
  })

  console.log(`\n📊 Writeup Stats:`)
  console.log(`   - Countries with writeups: ${regions.length}`)

  const samples = await prisma.locationSummary.findMany({
    where: { category: 'energy', type: 'country' },
    select: { name: true, summary: true },
    orderBy: { name: 'asc' },
    take: 5
  })

  console.log('\n📝 Sample writeups (first 5 countries):')
  samples.forEach(s => {
    const preview = s.summary.substring(0, 150).replace(/\n/g, ' ')
    console.log(`   - ${s.name}: ${preview}...`)
  })

  await prisma.$disconnect()
}

verify().catch(console.error)
