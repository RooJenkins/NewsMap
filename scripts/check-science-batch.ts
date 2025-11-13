import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countries = [
  'Taiwan', 'Tanzania', 'Thailand', 'Trinidad and Tobago', 'Tunisia',
  'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela',
  'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
]

async function main() {
  console.log('Checking science summaries for countries 136-148:\n')

  for (const country of countries) {
    const summary = await prisma.locationSummary.findFirst({
      where: {
        name: country,
        category: 'science',
      },
      select: {
        name: true,
        updatedAt: true,
      },
    })

    if (summary) {
      console.log(`✅ ${country}: EXISTS (updated: ${summary.updatedAt.toISOString()})`)
    } else {
      console.log(`❌ ${country}: NOT FOUND`)
    }
  }

  // Also check infrastructure summaries
  console.log('\n\nChecking infrastructure summaries for comparison:\n')

  for (const country of countries) {
    const summary = await prisma.locationSummary.findFirst({
      where: {
        name: country,
        category: 'infrastructure',
      },
      select: {
        name: true,
        updatedAt: true,
      },
    })

    if (summary) {
      console.log(`✅ ${country}: EXISTS (updated: ${summary.updatedAt.toISOString()})`)
    } else {
      console.log(`❌ ${country}: NOT FOUND`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
