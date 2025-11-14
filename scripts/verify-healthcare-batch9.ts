import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const countries = [
    'Somalia', 'Sudan', 'Algeria', 'Angola', 'Ghana', 'Mozambique',
    'Senegal', 'Democratic Republic of Congo', 'Nigeria', 'South Africa',
    'Morocco', 'Tunisia', 'Libya'
  ]

  console.log('🔍 Verifying healthcare summaries in database...\n')

  for (const country of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'healthcare',
        },
      },
    })

    if (summary) {
      console.log(`✅ ${country}: ${summary.summary.length} characters`)
    } else {
      console.log(`❌ ${country}: NOT FOUND`)
    }
  }
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
