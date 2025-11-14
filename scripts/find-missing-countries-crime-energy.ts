import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

const ALL_COUNTRIES = fs.readFileSync('/home/user/NewsMap/scripts/ALL_COUNTRIES.txt', 'utf-8')
  .split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0)

async function findMissing() {
  const crimeCountries = await prisma.locationSummary.findMany({
    where: { category: 'crime', type: 'country' },
    select: { name: true }
  })
  const energyCountries = await prisma.locationSummary.findMany({
    where: { category: 'energy', type: 'country' },
    select: { name: true }
  })

  const crimeNames = new Set(crimeCountries.map(c => c.name))
  const energyNames = new Set(energyCountries.map(c => c.name))

  const missingCrime = ALL_COUNTRIES.filter(c => !crimeNames.has(c))
  const missingEnergy = ALL_COUNTRIES.filter(c => !energyNames.has(c))

  console.log('=== MISSING CRIME ===')
  console.log(`Total missing: ${missingCrime.length}`)
  missingCrime.forEach(name => console.log(name))

  console.log('\n=== MISSING ENERGY ===')
  console.log(`Total missing: ${missingEnergy.length}`)
  missingEnergy.forEach(name => console.log(name))
}

findMissing().finally(() => prisma.$disconnect())
