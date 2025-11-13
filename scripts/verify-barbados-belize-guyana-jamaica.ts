import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyCountries() {
  console.log('\n=== Verifying Caribbean Country Summaries ===\n')

  const countries = ['Barbados', 'Belize', 'Guyana', 'Jamaica']

  for (const countryName of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: countryName,
          type: 'country',
          category: 'all'
        }
      }
    })

    if (summary) {
      console.log(`✅ ${countryName}:`)
      console.log(`   - Summary length: ${summary.summary.length} characters`)
      console.log(`   - Issues: ${JSON.parse(summary.issues).length}`)
      console.log(`   - Issues list: ${JSON.parse(summary.issues).join(', ')}`)
      console.log(`   - Updated: ${summary.updatedAt}`)
      console.log(`   - Location: ${summary.lat}, ${summary.lng}`)
      console.log()
    } else {
      console.log(`❌ ${countryName}: NOT FOUND`)
      console.log()
    }
  }

  console.log('=== Verification Complete ===\n')
}

verifyCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
