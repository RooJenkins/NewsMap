import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const infrastructureSummaries = await prisma.locationSummary.findMany({
    where: {
      category: 'infrastructure'
    },
    select: {
      name: true,
      category: true,
      summary: true,
      issues: true,
      storyCount: true,
      updatedAt: true,
    },
    orderBy: {
      name: 'asc',
    },
  })

  console.log(`\n📊 Total infrastructure summaries found: ${infrastructureSummaries.length}\n`)

  infrastructureSummaries.forEach((s) => {
    console.log(`${'='.repeat(80)}`)
    console.log(`Country: ${s.name}`)
    console.log(`Category: ${s.category}`)
    console.log(`Summary length: ${s.summary.length} characters`)
    console.log(`Story count: ${s.storyCount}`)
    console.log(`Issues: ${s.issues}`)
    console.log(`Updated: ${s.updatedAt.toISOString()}`)
    console.log(`Summary preview: ${s.summary.substring(0, 200)}...`)
    console.log()
  })

  console.log('='.repeat(80))
  console.log(`✅ Found ${infrastructureSummaries.length} infrastructure summaries`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
