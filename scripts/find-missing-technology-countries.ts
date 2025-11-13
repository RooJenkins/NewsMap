// Find all countries missing TECHNOLOGY writeups
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Get all unique countries from any category
  const allCountries = await prisma.locationSummary.findMany({
    where: {
      type: 'country'
    },
    select: {
      name: true,
      category: true
    },
    distinct: ['name']
  })

  // Get countries with technology writeups
  const techCountries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'technology'
    },
    select: {
      name: true
    }
  })

  const techCountryNames = new Set(techCountries.map(c => c.name))
  const uniqueNames = new Set(allCountries.map(c => c.name))
  const allCountryNames = Array.from(uniqueNames).sort()

  console.log(`Total unique countries: ${allCountryNames.length}`)
  console.log(`Countries with Technology: ${techCountryNames.size}`)
  console.log(`Countries missing Technology: ${allCountryNames.length - techCountryNames.size}\n`)

  const missingCountries = allCountryNames.filter(name => !techCountryNames.has(name))

  console.log('Missing Technology writeups:\n')
  missingCountries.forEach((name, idx) => {
    console.log(`${(idx + 1).toString().padStart(3)}. ${name}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
