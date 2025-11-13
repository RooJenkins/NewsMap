import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const count = await prisma.locationSummary.count({
    where: {
      category: 'technology',
      type: 'country'
    }
  })

  console.log(`Total technology writeups: ${count}`)

  const countries = await prisma.locationSummary.findMany({
    where: {
      category: 'technology',
      type: 'country'
    },
    select: {
      name: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log('\nCountries with technology writeups:')
  countries.forEach(c => console.log(`  ${c.name}`))

  // Check for batch 10 countries
  const batch10 = [
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

  console.log('\n\nBatch 10 Status:')
  for (const country of batch10) {
    const exists = countries.find(c => c.name === country)
    console.log(`  ${country}: ${exists ? '✓ EXISTS' : '✗ MISSING'}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
