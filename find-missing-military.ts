import { PrismaClient } from '@prisma/client'
import { countryData } from './lib/countryData'

const prisma = new PrismaClient()

async function findMissing() {
  const allCountries = Object.keys(countryData)
  const existing = await prisma.locationSummary.findMany({
    where: { category: 'military' },
    select: { name: true }
  })

  const existingNames = new Set(existing.map(e => e.name))
  const missing = allCountries.filter(c => !existingNames.has(c))

  console.log(`Missing ${missing.length} military summaries:`)
  missing.forEach(c => console.log(`  - ${c}`))

  await prisma.$disconnect()
}

findMissing()
