import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyEconomySummaries() {
  console.log('Verifying ECONOMY & BUSINESS summaries for Batch 2...\n')

  const countries = [
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Bulgaria',
    'Burkina Faso',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Chile',
    'China',
    'Colombia',
    'Costa Rica',
    'Croatia'
  ]

  for (const country of countries) {
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
      console.log(`✓ ${country}`)
      console.log(`  Category: ${summary.category}`)
      console.log(`  Character count: ${summary.summary.length}`)
      console.log(`  Issues: ${summary.issues}`)
      console.log(`  Preview: ${summary.summary.substring(0, 150)}...`)
      console.log()
    } else {
      console.log(`✗ ${country} - NOT FOUND`)
      console.log()
    }
  }

  console.log('\n='.repeat(60))
  console.log('Verification complete!')
  console.log('='.repeat(60))
}

verifyEconomySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
