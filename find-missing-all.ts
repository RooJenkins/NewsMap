import { PrismaClient } from '@prisma/client'
import { countryData } from './lib/countryData'

const prisma = new PrismaClient()

async function findMissing() {
  const allCountries = Object.keys(countryData)
  console.log(`Total countries in countryData: ${allCountries.length}\n`)

  for (const category of ['humanrights', 'realestate']) {
    const existing = await prisma.locationSummary.findMany({
      where: { category },
      select: { name: true }
    })

    const existingNames = new Set(existing.map(e => e.name))
    const missing = allCountries.filter(c => !existingNames.has(c))

    console.log(`\n=== ${category.toUpperCase()} ===`)
    console.log(`Existing: ${existing.length}`)
    console.log(`Missing: ${missing.length}`)
    if (missing.length > 0) {
      console.log(`\nMissing countries:`)
      missing.forEach((c, i) => console.log(`${i + 1}. ${c}`))
    }
  }

  await prisma.$disconnect()
}

findMissing()
