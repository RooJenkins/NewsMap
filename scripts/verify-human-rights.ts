import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  // Check the Human Rights summaries
  const humanRights = await prisma.locationSummary.findMany({
    where: { category: 'humanrights' },
    select: { name: true, category: true, storyCount: true, createdAt: true },
    orderBy: { name: 'asc' },
  })

  console.log('\n✅ Human Rights Summaries Saved:\n')
  console.log('Country                  | Category     | Issues | Created')
  console.log('-'.repeat(70))

  for (const item of humanRights) {
    const created = new Date(item.createdAt).toLocaleDateString()
    const name = item.name.padEnd(24)
    const category = item.category.padEnd(12)
    console.log(`${name} | ${category} | ${item.storyCount}      | ${created}`)
  }

  // Get a sample entry to show content
  const sample = await prisma.locationSummary.findFirst({
    where: {
      category: 'humanrights',
      name: 'Bahrain',
    },
  })

  if (sample) {
    console.log('\n' + '='.repeat(80))
    console.log('📄 Sample Entry: Bahrain')
    console.log('='.repeat(80))
    console.log('\nSummary (first 600 chars):')
    console.log(sample.summary.substring(0, 600) + '...\n')

    const issues = JSON.parse(sample.issues)
    console.log('Key Issues:')
    issues.forEach((issue: string, idx: number) => {
      console.log(`  ${idx + 1}. ${issue}`)
    })

    const topStories = JSON.parse(sample.topStories)
    console.log('\nTop Stories:')
    topStories.slice(0, 3).forEach((story: any, idx: number) => {
      console.log(`  ${idx + 1}. ${story.title}`)
      console.log(`     Source: ${story.source}`)
    })
  }

  console.log('\n' + '='.repeat(80))
  console.log(`\n📊 Database Statistics:`)
  const total = await prisma.locationSummary.count()
  const categories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: true,
  })

  console.log(`   Total LocationSummary records: ${total}`)
  console.log(`\n   Breakdown by category:`)
  for (const cat of categories) {
    console.log(`   - ${cat.category}: ${cat._count} summaries`)
  }

  await prisma.$disconnect()
}

verify().catch(console.error)
