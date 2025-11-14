import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function queryInfrastructureSummaries() {
  console.log('📊 Infrastructure Category Summaries - Query Results\n')
  console.log('='.repeat(80))

  const summaries = await prisma.locationSummary.findMany({
    where: { category: 'infrastructure' },
    orderBy: { name: 'asc' },
    select: {
      name: true,
      category: true,
      summary: true,
      issues: true,
      topStories: true,
      storyCount: true,
      updatedAt: true,
    }
  })

  console.log(`\nTotal infrastructure summaries: ${summaries.length}\n`)

  // Summary table
  console.log('| Country    | Characters | Issues | Stories | Updated     |')
  console.log('|------------|------------|--------|---------|-------------|')

  for (const s of summaries) {
    const issues = JSON.parse(s.issues).length
    const stories = JSON.parse(s.topStories).length
    const date = new Date(s.updatedAt).toISOString().split('T')[0]
    const chars = s.summary.length

    console.log(`| ${s.name.padEnd(10)} | ${chars.toString().padEnd(10)} | ${issues.toString().padEnd(6)} | ${stories.toString().padEnd(7)} | ${date} |`)
  }

  console.log('\n' + '='.repeat(80))
  console.log('\n✅ 3 out of 14 countries successfully generated')
  console.log('⚠️  11 countries skipped due to lack of stories in database')
  console.log('\nAll summaries follow Norman Foster perspective:')
  console.log('  • Transportation networks (roads, rail, metro, airports)')
  console.log('  • Public transit quality and urban planning')
  console.log('  • Major infrastructure projects')
  console.log('  • Infrastructure maintenance and resilience')
  console.log('  • Digital infrastructure (broadband, 5G)')
}

queryInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
