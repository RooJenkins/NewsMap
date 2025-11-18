import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function verifyAllCategories() {
  console.log('🔍 Verifying ALL country writeups across all categories...\n')

  // Read the countries list
  const countriesText = fs.readFileSync('/home/user/NewsMap/scripts/ALL_COUNTRIES.txt', 'utf-8')
  const countries = countriesText.trim().split('\n').filter(c => c.trim())

  console.log(`📋 Total countries to check: ${countries.length}\n`)

  // First, get all unique categories from the database
  const allSummaries = await prisma.locationSummary.findMany({
    where: {
      type: 'country'
    },
    select: {
      category: true
    },
    distinct: ['category']
  })

  const categoriesInDb = allSummaries.map(s => s.category).sort()
  console.log(`📚 Categories found in database: ${categoriesInDb.join(', ')}\n`)

  // Expected categories from the 5 sessions
  const expectedCategories = [
    'travel',
    'food',
    'healthcare',
    'education',
    'entertainment',
    'lifestyle',
    'crime',
    'energy',
    'infrastructure',
    'science'
  ]

  const results: Record<string, { found: number; missing: string[]; percentage: number }> = {}

  // Check each category
  for (const category of expectedCategories) {
    console.log('='.repeat(80))
    console.log(`${category.toUpperCase()} CATEGORY`)
    console.log('='.repeat(80))

    const missingCountries = []
    for (const country of countries) {
      const result = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country,
            type: 'country',
            category: category
          }
        }
      })

      if (!result) {
        console.log(`❌ ${country}: NOT FOUND`)
        missingCountries.push(country)
      }
    }

    const found = countries.length - missingCountries.length
    const percentage = Math.round((found / countries.length) * 100)

    results[category] = {
      found,
      missing: missingCountries,
      percentage
    }

    console.log(`\n📊 ${category} writeups: ${found}/${countries.length} (${percentage}%)`)
    if (found === countries.length) {
      console.log(`✅ All ${category} writeups present!`)
    } else {
      console.log(`⚠️ Missing ${missingCountries.length} ${category} writeups`)
    }
    console.log()
  }

  // Overall summary
  console.log('='.repeat(80))
  console.log('OVERALL SUMMARY')
  console.log('='.repeat(80))
  console.log(`Total countries: ${countries.length}`)
  console.log(`Expected categories: ${expectedCategories.length}`)
  console.log(`Total writeups expected: ${countries.length * expectedCategories.length}\n`)

  let totalFound = 0
  let completedCategories = 0

  console.log('Category Breakdown:')
  console.log('-'.repeat(80))
  for (const category of expectedCategories) {
    const { found, percentage } = results[category]
    totalFound += found
    const status = found === countries.length ? '✅' : '❌'
    const bar = '█'.repeat(Math.floor(percentage / 5))
    console.log(`${status} ${category.padEnd(15)} ${found.toString().padStart(3)}/${countries.length} (${percentage.toString().padStart(3)}%) ${bar}`)
    if (found === countries.length) completedCategories++
  }

  console.log('-'.repeat(80))
  console.log(`\nTotal writeups found: ${totalFound}/${countries.length * expectedCategories.length}`)
  console.log(`Categories completed: ${completedCategories}/${expectedCategories.length}`)
  console.log(`Overall completion: ${Math.round((totalFound / (countries.length * expectedCategories.length)) * 100)}%`)

  if (completedCategories === expectedCategories.length) {
    console.log('\n🎉 SUCCESS! All writeups for all categories generated successfully!')
    console.log(`Total: ${totalFound} writeups across ${expectedCategories.length} categories for ${countries.length} countries`)
  } else {
    console.log('\n⚠️ WARNING: Some writeups are missing!')
    console.log('\nIncomplete categories:')
    for (const category of expectedCategories) {
      const { found, missing } = results[category]
      if (missing.length > 0) {
        console.log(`\n${category.toUpperCase()} (${found}/${countries.length}) - Missing ${missing.length}:`)
        missing.slice(0, 10).forEach(c => console.log(`  - ${c}`))
        if (missing.length > 10) {
          console.log(`  ... and ${missing.length - 10} more`)
        }
      }
    }
  }

  await prisma.$disconnect()
}

verifyAllCategories()
  .catch(console.error)
  .finally(() => process.exit(0))
