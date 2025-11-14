import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function compareCountryNames() {
  console.log('🔍 Comparing country names in ALL_COUNTRIES.txt vs database...\n')

  // Read the countries list from file
  const countriesText = fs.readFileSync('/home/user/NewsMap/scripts/ALL_COUNTRIES.txt', 'utf-8')
  const countriesFromFile = countriesText.trim().split('\n').filter(c => c.trim()).map(c => c.trim())

  console.log(`📋 Countries in ALL_COUNTRIES.txt: ${countriesFromFile.length}`)

  // Get healthcare countries from database
  const healthcareInDb = await prisma.locationSummary.findMany({
    where: { category: 'healthcare' },
    select: { name: true },
    orderBy: { name: 'asc' }
  })

  const dbCountries = healthcareInDb.map(c => c.name).sort()
  console.log(`📋 Countries in database (healthcare): ${dbCountries.length}\n`)

  // Find countries in file but not in database
  const missingInDb = countriesFromFile.filter(c => !dbCountries.includes(c))
  console.log(`❌ In file but NOT in database (${missingInDb.length}):`)
  missingInDb.forEach(c => console.log(`  - ${c}`))

  // Find countries in database but not in file
  const missingInFile = dbCountries.filter(c => !countriesFromFile.includes(c))
  console.log(`\n❌ In database but NOT in file (${missingInFile.length}):`)
  missingInFile.forEach(c => console.log(`  - ${c}`))

  // Find exact matches
  const matches = countriesFromFile.filter(c => dbCountries.includes(c))
  console.log(`\n✅ Exact matches: ${matches.length}/${countriesFromFile.length}`)

  await prisma.$disconnect()
}

compareCountryNames()
  .catch(console.error)
  .finally(() => process.exit(0))
