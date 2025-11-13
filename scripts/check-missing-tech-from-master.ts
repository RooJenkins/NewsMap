// Check which countries from ALL_COUNTRIES.txt are missing technology writeups
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function main() {
  // Read master country list
  const masterList = fs.readFileSync('/home/user/NewsMap/scripts/ALL_COUNTRIES.txt', 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)

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

  console.log(`Total in master list: ${masterList.length}`)
  console.log(`Countries with Technology: ${techCountryNames.size}`)
  console.log(`Countries missing: ${masterList.length - techCountryNames.size}\n`)

  const missing = masterList.filter(name => !techCountryNames.has(name))

  console.log('Missing Technology writeups:\n')
  missing.forEach((name, idx) => {
    console.log(`${(idx + 1).toString().padStart(3)}. ${name}`)
  })

  console.log('\n\nCountries with Technology writeups:\n')
  const existing = masterList.filter(name => techCountryNames.has(name))
  existing.forEach((name, idx) => {
    console.log(`${(idx + 1).toString().padStart(3)}. ${name}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
