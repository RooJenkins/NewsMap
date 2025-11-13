import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getAllCountries() {
  const countries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'all'
    },
    select: {
      name: true,
      lat: true,
      lng: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`Found ${countries.length} countries:`)
  console.log(JSON.stringify(countries.map(c => c.name), null, 2))

  return countries
}

getAllCountries()
  .then(() => process.exit(0))
  .catch(console.error)
