import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BATCH_7_COUNTRIES = [
  'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palestine',
  'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'
]

async function main() {
  console.log('Verifying Technology Batch 7...\n')

  for (const country of BATCH_7_COUNTRIES) {
    const entry = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'technology'
        }
      }
    })

    if (entry) {
      const issues = JSON.parse(entry.issues)
      console.log(`✓ ${country}: ${entry.summary.length} chars, ${issues.length} issues`)
    } else {
      console.log(`✗ ${country}: NOT FOUND`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
