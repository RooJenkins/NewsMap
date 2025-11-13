import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function listCountries() {
  const countries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'all'
    },
    select: {
      name: true,
      lat: true,
      lng: true,
      country: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`\nTotal countries with 'all' summaries: ${countries.length}\n`)
  countries.forEach((c, i) => {
    console.log(`${i + 1}. ${c.name}`)
  })

  // Export as JSON
  const fs = require('fs')
  fs.writeFileSync(
    '/home/user/NewsMap/ALL_COUNTRIES.json',
    JSON.stringify(countries, null, 2)
  )
  console.log(`\n✅ Exported to ALL_COUNTRIES.json`)
}

listCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
