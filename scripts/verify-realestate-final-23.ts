import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'realestate',
      type: 'country',
    },
    select: {
      name: true,
      category: true,
      issues: true,
      summary: true,
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`\n✅ Found ${summaries.length} Real Estate summaries in database\n`)
  console.log('='.repeat(80))

  summaries.forEach((s, idx) => {
    const issues = JSON.parse(s.issues || '[]')
    console.log(`${idx + 1}. ${s.name}:`)
    console.log(`   Summary length: ${s.summary?.length || 0} characters`)
    console.log(`   Issues (${issues.length}): ${issues.join(' | ')}`)
    console.log()
  })

  console.log('='.repeat(80))
  console.log(`Summary Statistics:`)
  console.log(`- Total countries: ${summaries.length}`)
  console.log(`- Average summary length: ${Math.round(summaries.reduce((sum, s) => sum + (s.summary?.length || 0), 0) / summaries.length)} characters`)
  console.log(`- Min summary length: ${Math.min(...summaries.map(s => s.summary?.length || 0))} characters`)
  console.log(`- Max summary length: ${Math.max(...summaries.map(s => s.summary?.length || 0))} characters`)
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
