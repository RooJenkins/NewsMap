import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const countries = [
    'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palestine',
    'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'
  ]

  console.log('🔍 Verifying Politics write-ups for Batch 7...\n')

  for (const name of countries) {
    const record = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name,
          type: 'country',
          category: 'politics',
        },
      },
    })

    if (record) {
      const issues = JSON.parse(record.issues)
      console.log(`✅ ${name}`)
      console.log(`   - Summary: ${record.summary.length} characters`)
      console.log(`   - Issues: ${issues.length}`)
      console.log(`   - Preview: ${record.summary.substring(0, 100)}...`)
      console.log('')
    } else {
      console.log(`❌ ${name} - NOT FOUND\n`)
    }
  }

  console.log('✅ Verification complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
