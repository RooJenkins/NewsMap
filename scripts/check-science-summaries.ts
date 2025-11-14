import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 Checking database for science summaries...\n')

  // Check all categories
  const allSummaries = await prisma.locationSummary.findMany({
    select: {
      name: true,
      category: true,
      updatedAt: true,
    },
    orderBy: [
      { name: 'asc' },
      { category: 'asc' }
    ]
  })

  console.log(`Total summaries in database: ${allSummaries.length}\n`)

  // Group by category
  const byCategory = allSummaries.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s.name)
    return acc
  }, {} as Record<string, string[]>)

  console.log('Summaries by category:')
  Object.entries(byCategory).forEach(([category, countries]) => {
    console.log(`  ${category}: ${countries.length} countries`)
    console.log(`    ${countries.join(', ')}`)
  })

  // Check for countries 46-60 specifically
  const countries46to60 = [
    'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana',
    'Greece', 'Guatemala', 'Guyana', 'Haiti', 'Honduras', 'Hungary'
  ]

  console.log('\n\nCountries 46-60 status:')
  for (const country of countries46to60) {
    const summaries = await prisma.locationSummary.findMany({
      where: { name: country },
      select: { category: true }
    })

    const categories = summaries.map(s => s.category).join(', ')
    console.log(`  ${country}: ${categories || 'No summaries'}`)
  }

  // Check for science category specifically
  console.log('\n\nScience summaries:')
  const scienceSummaries = await prisma.locationSummary.findMany({
    where: { category: 'science' },
    select: { name: true, updatedAt: true }
  })

  if (scienceSummaries.length === 0) {
    console.log('  No science summaries found yet.')
  } else {
    scienceSummaries.forEach(s => {
      console.log(`  ${s.name} (updated: ${s.updatedAt.toISOString()})`)
    })
  }

  // Check stories available
  console.log('\n\nStories available for countries 46-60:')
  for (const country of countries46to60) {
    const count = await prisma.story.count({
      where: { country }
    })
    if (count > 0) {
      console.log(`  ${country}: ${count} stories`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
