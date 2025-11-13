import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zimbabwe'
]

async function verifyEconomySummaries() {
  console.log('\n' + '='.repeat(70))
  console.log('🔍 VERIFYING ECONOMY SUMMARIES - BATCH 10')
  console.log('='.repeat(70) + '\n')

  for (const country of COUNTRIES) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'economy'
        }
      }
    })

    if (summary) {
      console.log(`✅ ${country}`)
      console.log(`   Summary length: ${summary.summary.length} characters`)
      console.log(`   Issues: ${JSON.parse(summary.issues).length}`)
      console.log(`   Updated: ${summary.updatedAt.toISOString()}\n`)
    } else {
      console.log(`❌ ${country} - NOT FOUND\n`)
    }
  }

  console.log('='.repeat(70))
  console.log('Verification complete')
  console.log('='.repeat(70) + '\n')
}

verifyEconomySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
