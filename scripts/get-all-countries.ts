import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function getAllCountries() {
  console.log('🌍 Fetching all unique countries from database...\n')

  // Get all unique countries from LocationSummary table
  const summaries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
    },
    select: {
      name: true,
      country: true,
      lat: true,
      lng: true,
      category: true,
    },
  })

  // Group by country name and collect categories
  const countryMap = new Map<string, {
    name: string
    lat: number
    lng: number
    categories: string[]
    categoryCount: number
  }>()

  for (const summary of summaries) {
    const countryName = summary.name

    if (!countryMap.has(countryName)) {
      countryMap.set(countryName, {
        name: countryName,
        lat: summary.lat,
        lng: summary.lng,
        categories: [],
        categoryCount: 0,
      })
    }

    const country = countryMap.get(countryName)!
    country.categories.push(summary.category)
    country.categoryCount = country.categories.length
  }

  // Convert to array and sort by name
  const countries = Array.from(countryMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  console.log(`✅ Found ${countries.length} unique countries`)
  console.log(`📊 Average categories per country: ${(summaries.length / countries.length).toFixed(1)}`)

  // Create data directory if it doesn't exist
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
    console.log('📁 Created data/ directory')
  }

  // Save to JSON file
  const outputPath = path.join(dataDir, 'countries.json')
  fs.writeFileSync(outputPath, JSON.stringify(countries, null, 2))
  console.log(`💾 Saved to ${outputPath}`)

  // Display sample
  console.log('\n📋 Sample countries:')
  countries.slice(0, 5).forEach((country) => {
    console.log(`  - ${country.name} (${country.categoryCount} categories)`)
  })

  // Display countries with fewest categories
  const sorted = [...countries].sort((a, b) => a.categoryCount - b.categoryCount)
  console.log('\n⚠️  Countries with fewest categories:')
  sorted.slice(0, 10).forEach((country) => {
    console.log(`  - ${country.name}: ${country.categoryCount} categories`)
  })

  return countries
}

getAllCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
