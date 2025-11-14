import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkCategories() {
  const results = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: { in: ['humanrights', 'military', 'realestate'] }
    },
    select: { name: true, category: true }
  })

  const grouped: Record<string, string[]> = {}
  for (const r of results) {
    if (!grouped[r.category]) grouped[r.category] = []
    grouped[r.category].push(r.name)
  }

  console.log('Category summaries found:')
  console.log(JSON.stringify(grouped, null, 2))
  console.log('\nTotal counts:')
  for (const cat in grouped) {
    console.log(`  ${cat}: ${grouped[cat].length} countries`)
  }

  // Also get total countries to see what's expected
  const totalCountries = await prisma.locationSummary.findMany({
    where: { type: 'country', category: 'all' },
    select: { name: true }
  })
  console.log(`\nTotal countries with 'all' category: ${totalCountries.length}`)

  await prisma.$disconnect()
}

checkCategories()
