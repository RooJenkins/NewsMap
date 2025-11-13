import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyPoliticsSummaries() {
  console.log('Verifying POLITICS summaries for Batch 9...\n')

  const countries = [
    'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tanzania', 'Thailand', 'Tunisia', 'Turkey', 'Uganda', 'Ukraine'
  ]

  for (const name of countries) {
    const entry = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name,
          type: 'country',
          category: 'politics'
        }
      }
    })

    if (entry) {
      console.log(`✓ ${name.padEnd(15)} - ${entry.summary.length} chars - ${JSON.parse(entry.issues).length} issues`)
    } else {
      console.log(`✗ ${name.padEnd(15)} - NOT FOUND`)
    }
  }

  console.log('\nVerification complete!')
}

verifyPoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
