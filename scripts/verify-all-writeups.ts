import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function verifyAllWriteups() {
  console.log('🔍 Verifying all country writeups...\n')

  // Read the countries list
  const countriesText = fs.readFileSync('/home/user/NewsMap/scripts/ALL_COUNTRIES.txt', 'utf-8')
  const countries = countriesText.trim().split('\n').filter(c => c.trim())

  console.log(`📋 Total countries to check: ${countries.length}\n`)

  // Check travel category
  console.log('='.repeat(80))
  console.log('TRAVEL & TOURISM CATEGORY')
  console.log('='.repeat(80))

  const travelResults = []
  for (const country of countries) {
    const result = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'travel'
        }
      }
    })

    const status = result ? '✅' : '❌'
    const chars = result ? result.summary.length : 0
    travelResults.push({ country, found: !!result, chars })

    if (!result) {
      console.log(`${status} ${country}: NOT FOUND`)
    }
  }

  const travelFound = travelResults.filter(r => r.found).length
  console.log(`\n📊 Travel writeups: ${travelFound}/${countries.length}`)

  if (travelFound === countries.length) {
    console.log('✅ All travel writeups present!')
    const avgChars = Math.round(travelResults.reduce((sum, r) => sum + r.chars, 0) / travelFound)
    console.log(`📝 Average length: ${avgChars} characters`)
  }

  // Check food category
  console.log('\n' + '='.repeat(80))
  console.log('FOOD & CUISINE CATEGORY')
  console.log('='.repeat(80))

  const foodResults = []
  for (const country of countries) {
    const result = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'food'
        }
      }
    })

    const status = result ? '✅' : '❌'
    const chars = result ? result.summary.length : 0
    foodResults.push({ country, found: !!result, chars })

    if (!result) {
      console.log(`${status} ${country}: NOT FOUND`)
    }
  }

  const foodFound = foodResults.filter(r => r.found).length
  console.log(`\n📊 Food writeups: ${foodFound}/${countries.length}`)

  if (foodFound === countries.length) {
    console.log('✅ All food writeups present!')
    const avgChars = Math.round(foodResults.reduce((sum, r) => sum + r.chars, 0) / foodFound)
    console.log(`📝 Average length: ${avgChars} characters`)
  }

  // Overall summary
  console.log('\n' + '='.repeat(80))
  console.log('OVERALL SUMMARY')
  console.log('='.repeat(80))
  console.log(`Total writeups expected: ${countries.length * 2}`)
  console.log(`Total writeups found: ${travelFound + foodFound}`)
  console.log(`Travel: ${travelFound}/${countries.length}`)
  console.log(`Food: ${foodFound}/${countries.length}`)

  if (travelFound === countries.length && foodFound === countries.length) {
    console.log('\n🎉 SUCCESS! All 256 writeups generated successfully!')
  } else {
    console.log('\n⚠️ WARNING: Some writeups are missing!')
    console.log('\nMissing travel writeups:')
    travelResults.filter(r => !r.found).forEach(r => console.log(`  - ${r.country}`))
    console.log('\nMissing food writeups:')
    foodResults.filter(r => !r.found).forEach(r => console.log(`  - ${r.country}`))
  }

  await prisma.$disconnect()
}

verifyAllWriteups()
  .catch(console.error)
  .finally(() => process.exit(0))
