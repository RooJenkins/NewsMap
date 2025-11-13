import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyCountries() {
  const countries = ['Brunei', 'Maldives', 'Turkmenistan', 'Bahamas']

  console.log('Checking database for country summaries...\n')

  for (const country of countries) {
    const summary = await prisma.locationSummary.findFirst({
      where: { name: country, type: 'country' },
      select: {
        name: true,
        type: true,
        updatedAt: true,
        storyCount: true,
        issues: true
      }
    })

    if (summary) {
      console.log(`✅ ${country}:`)
      console.log(`   Updated: ${summary.updatedAt}`)
      console.log(`   Issues: ${summary.issues}`)
      console.log()
    } else {
      console.log(`❌ ${country}: NOT FOUND`)
      console.log()
    }
  }
}

verifyCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
