import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland',
  'Syria', 'Taiwan', 'Tanzania', 'Thailand', 'Tunisia',
  'Turkey', 'Uganda', 'Ukraine'
]

async function main() {
  console.log('\n' + '='.repeat(60))
  console.log('VERIFYING TECHNOLOGY WRITEUPS - BATCH 9/10')
  console.log('='.repeat(60) + '\n')

  for (const country of COUNTRIES) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'technology'
        }
      }
    })

    if (summary) {
      const issuesCount = JSON.parse(summary.issues).length
      const summaryLength = summary.summary.length
      console.log(`✓ ${country.padEnd(15)} | ${summaryLength} chars | ${issuesCount} issues`)
    } else {
      console.log(`✗ ${country.padEnd(15)} | NOT FOUND`)
    }
  }

  console.log('\n' + '='.repeat(60))
  console.log('VERIFICATION COMPLETE')
  console.log('='.repeat(60) + '\n')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
