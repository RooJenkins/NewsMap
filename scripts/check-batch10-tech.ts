import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const countries = [
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

  for (const country of countries) {
    const existing = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'technology'
        }
      }
    })
    console.log(`${country}: ${existing ? 'EXISTS' : 'NOT FOUND'}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
