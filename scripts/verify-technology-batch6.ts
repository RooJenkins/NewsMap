import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BATCH6_COUNTRIES = [
  'Luxembourg', 'Malaysia', 'Mexico', 'Moldova', 'Montenegro',
  'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua'
]

async function main() {
  const result = await prisma.locationSummary.findMany({
    where: {
      category: 'technology',
      name: { in: BATCH6_COUNTRIES }
    },
    select: {
      name: true,
      category: true,
      updatedAt: true
    },
    orderBy: { name: 'asc' }
  })

  console.log('✓ Verified Technology Batch 6 entries:\n')
  result.forEach(r => {
    console.log(`  - ${r.name}: ${r.category} (updated: ${r.updatedAt.toISOString().split('T')[0]})`)
  })

  console.log(`\n✓ Total verified: ${result.length}/13`)

  if (result.length === 13) {
    console.log('\n✓ ALL TECHNOLOGY BATCH 6 WRITEUPS SUCCESSFULLY INSERTED!')
  } else {
    const missing = BATCH6_COUNTRIES.filter(c => !result.find(r => r.name === c))
    console.log(`\n✗ Missing countries: ${missing.join(', ')}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
