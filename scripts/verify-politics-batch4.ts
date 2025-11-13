import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countries = [
  'France', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Guatemala',
  'Haiti', 'Honduras', 'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq'
]

async function main() {
  console.log('🔍 Verifying Politics summaries in database\n')
  console.log('=' .repeat(80))

  for (const countryName of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: countryName,
          type: 'country',
          category: 'politics',
        },
      },
    })

    if (summary) {
      const issues = JSON.parse(summary.issues)
      const topStories = JSON.parse(summary.topStories)
      console.log(`✅ ${countryName}:`)
      console.log(`   - Summary: ${summary.summary.length} characters`)
      console.log(`   - Issues: ${issues.length}`)
      console.log(`   - Stories: ${topStories.length}`)
      console.log(`   - Updated: ${summary.updatedAt.toISOString()}`)
    } else {
      console.log(`❌ ${countryName}: NOT FOUND`)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Verification complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
