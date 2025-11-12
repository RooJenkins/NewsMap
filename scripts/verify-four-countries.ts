import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyCountries() {
  const countries = ['Finland', 'Ghana', 'Greece', 'Guatemala']

  console.log('Verifying four countries in database...\n')

  for (const countryName of countries) {
    const location = await prisma.locationSummary.findUnique({
      where: {
        name_type: {
          name: countryName,
          type: 'country'
        }
      }
    })

    if (location) {
      const issues = JSON.parse(location.issues)
      console.log(`✅ ${countryName}`)
      console.log(`   Coordinates: ${location.lat}, ${location.lng}`)
      console.log(`   Story Count: ${location.storyCount}`)
      console.log(`   Issues: ${issues.length}`)
      console.log(`   Updated: ${location.updatedAt.toISOString()}`)
      console.log()
    } else {
      console.log(`❌ ${countryName} NOT FOUND`)
      console.log()
    }
  }
}

verifyCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
