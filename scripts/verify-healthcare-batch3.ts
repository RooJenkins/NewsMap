import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const summaries = await prisma.locationSummary.findMany({
    where: { category: 'healthcare' },
    orderBy: { name: 'asc' },
    select: { name: true, category: true, summary: true, createdAt: true }
  })

  console.log(`\n✅ Healthcare summaries in database: ${summaries.length}\n`)
  console.log('Countries with healthcare summaries:\n')
  summaries.forEach(s => {
    console.log(`  ✅ ${s.name.padEnd(20)} - ${s.summary.length.toLocaleString().padStart(5)} characters`)
  })

  const totalChars = summaries.reduce((sum, s) => sum + s.summary.length, 0)
  const avgChars = Math.round(totalChars / summaries.length)
  console.log(`\n📈 Average length: ${avgChars.toLocaleString()} characters`)
  console.log(`📈 Total characters: ${totalChars.toLocaleString()}`)
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
