import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Get all countries
  const allCountries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'all'
    },
    select: {
      name: true,
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`Total countries: ${allCountries.length}`)

  // Get Politics summaries
  const politicsSummaries = await prisma.locationSummary.findMany({
    where: {
      category: 'politics',
      type: 'country'
    },
    select: {
      name: true,
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`\nPolitics summaries: ${politicsSummaries.length}/${allCountries.length}`)

  // Get Economy summaries
  const economySummaries = await prisma.locationSummary.findMany({
    where: {
      category: 'economy',
      type: 'country'
    },
    select: {
      name: true,
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`Economy summaries: ${economySummaries.length}/${allCountries.length}`)

  // Find missing Politics summaries
  const politicsCountries = new Set(politicsSummaries.map(s => s.name))
  const missingPolitics = allCountries.filter(c => !politicsCountries.has(c.name))

  console.log(`\nMissing Politics summaries (${missingPolitics.length}):`)
  missingPolitics.forEach(c => console.log(`  - ${c.name}`))

  // Find missing Economy summaries
  const economyCountries = new Set(economySummaries.map(s => s.name))
  const missingEconomy = allCountries.filter(c => !economyCountries.has(c.name))

  console.log(`\nMissing Economy summaries (${missingEconomy.length}):`)
  missingEconomy.forEach(c => console.log(`  - ${c.name}`))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
