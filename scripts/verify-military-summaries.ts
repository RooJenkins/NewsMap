import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const total = await prisma.locationSummary.count()
  const military = await prisma.locationSummary.count({
    where: { category: 'military' }
  })
  
  const military_data = await prisma.locationSummary.findMany({
    where: { category: 'military' },
    select: { name: true, summary: true },
    take: 10
  })
  
  console.log(`\n📊 Database Verification:`)
  console.log(`=`.repeat(80))
  console.log(`Total LocationSummary records: ${total}`)
  console.log(`Military & Defense summaries saved: ${military}`)
  console.log(`=`.repeat(80))
  console.log(`\n✅ Sample Military & Defense summaries saved:`)
  military_data.forEach((m, i) => {
    const preview = m.summary.substring(0, 80).replace(/\n/g, ' ') + '...'
    console.log(`  ${i+1}. ${m.name}: ${m.summary.length} characters`)
  })
  console.log(`=`.repeat(80))
}

verify().then(() => prisma.$disconnect()).catch(console.error)
