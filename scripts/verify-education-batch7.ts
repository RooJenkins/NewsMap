import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const countries = [
    'Papua New Guinea',
    'Fiji',
    'Bahrain',
    'Kuwait',
    'Oman',
    'Qatar',
    'Kazakhstan',
    'Thailand',
    'Vietnam',
    'Philippines',
    'Malaysia',
    'Singapore',
    'Taiwan'
  ]

  console.log('=== Education Batch 7 Verification ===\n')

  for (const name of countries) {
    const location = await prisma.locationSummary.findFirst({
      where: {
        name,
        category: 'education'
      }
    })

    if (location) {
      const issues = JSON.parse(location.issues)
      console.log(`✅ ${name}`)
      console.log(`   - Characters: ${location.summary.length}`)
      console.log(`   - Issues: ${issues.length}`)
      console.log(`   - Created: ${location.createdAt}`)
      console.log()
    } else {
      console.log(`❌ ${name} - NOT FOUND`)
      console.log()
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
