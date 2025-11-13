import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function listCountries() {
  const countries = await prisma.locationSummary.findMany({
    where: {
      type: 'country'
    },
    select: {
      name: true,
      category: true,
      lat: true,
      lng: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  // Group by country name
  const countryMap = new Map<string, { lat: number, lng: number, categories: string[] }>()

  for (const c of countries) {
    if (!countryMap.has(c.name)) {
      countryMap.set(c.name, { lat: c.lat, lng: c.lng, categories: [] })
    }
    countryMap.get(c.name)!.categories.push(c.category)
  }

  console.log(`\nFound ${countryMap.size} unique countries:\n`)

  const sortedCountries = Array.from(countryMap.entries()).sort((a, b) => a[0].localeCompare(b[0]))

  for (const [name, data] of sortedCountries) {
    console.log(`${name}: ${data.categories.join(', ')}`)
  }

  console.log(`\n\nTotal: ${countryMap.size} countries`)

  // Output just the country list with coordinates for use in generating script
  console.log(`\n\nCountry list for script:\n`)
  console.log(JSON.stringify(
    sortedCountries.map(([name, data]) => ({ name, lat: data.lat, lng: data.lng })),
    null,
    2
  ))
}

listCountries()
  .then(() => process.exit(0))
  .catch(console.error)
