import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyHealthcareSummaries() {
  const countries = [
    'Pakistan', 'Bangladesh', 'Afghanistan', 'Iran', 'Israel',
    'Palestine', 'Iraq', 'Jordan', 'Cambodia', 'Laos',
    'Myanmar', 'Nepal', 'Mongolia'
  ]

  console.log('🔍 Verifying Healthcare Summaries (Batch 6)\n')
  console.log('='.repeat(80))

  for (const countryName of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: countryName,
          type: 'country',
          category: 'healthcare'
        }
      }
    })

    if (summary) {
      const issues = JSON.parse(summary.issues)
      console.log(`\n✅ ${countryName}`)
      console.log(`   Length: ${summary.summary.length.toLocaleString()} characters`)
      console.log(`   Issues: ${issues.length}`)
      console.log(`   First 120 chars: ${summary.summary.substring(0, 120)}...`)
    } else {
      console.log(`\n❌ ${countryName} - NOT FOUND`)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Verification complete!')
}

verifyHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
