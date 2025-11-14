import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkCategories() {
  console.log('🔍 Checking what categories actually exist in the database...\n')

  // Get all unique categories
  const categories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: {
      category: true
    },
    orderBy: {
      category: 'asc'
    }
  })

  console.log('📊 Categories in database:')
  console.log('='.repeat(60))

  let total = 0
  for (const cat of categories) {
    console.log(`${cat.category.padEnd(20)} ${cat._count.category} summaries`)
    total += cat._count.category
  }

  console.log('='.repeat(60))
  console.log(`Total summaries: ${total}\n`)

  // Sample one summary from each category
  console.log('📝 Sample entries per category:')
  console.log('='.repeat(60))

  for (const cat of categories) {
    const sample = await prisma.locationSummary.findFirst({
      where: { category: cat.category },
      select: { name: true, type: true, category: true }
    })

    if (sample) {
      console.log(`${cat.category}: ${sample.name} (${sample.type})`)
    }
  }

  await prisma.$disconnect()
}

checkCategories()
  .catch(console.error)
  .finally(() => process.exit(0))
