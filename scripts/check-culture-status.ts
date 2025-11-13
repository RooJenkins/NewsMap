import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function checkCultureStatus() {
  // Get all countries from ALL_COUNTRIES.txt
  const allCountriesText = fs.readFileSync('/home/user/NewsMap/scripts/ALL_COUNTRIES.txt', 'utf-8')
  const allCountries = allCountriesText.trim().split('\n').map(c => c.trim()).filter(c => c)

  console.log(`Total countries in ALL_COUNTRIES.txt: ${allCountries.length}\n`)

  // Get all countries with culture writeups
  const cultureWriteups = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'culture'
    },
    select: {
      name: true
    }
  })

  const countriesWithCulture = new Set(cultureWriteups.map(c => c.name))

  console.log(`Countries with CULTURE writeups: ${countriesWithCulture.size}\n`)

  // Find missing countries
  const missingCulture = allCountries.filter(c => !countriesWithCulture.has(c))

  console.log(`\nMISSING CULTURE (${missingCulture.length} countries):`)
  console.log(missingCulture.join('\n'))

  console.log(`\n\nALREADY HAVE CULTURE (${countriesWithCulture.size} countries):`)
  console.log(Array.from(countriesWithCulture).sort().join('\n'))
}

checkCultureStatus()
  .then(() => process.exit(0))
  .catch(console.error)
