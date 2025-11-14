import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countries = [
  'Serbia', 'Switzerland', 'Slovakia', 'Lithuania', 'Latvia',
  'China', 'India', 'Japan', 'South Korea', 'North Korea',
  'Indonesia', 'Australia', 'New Zealand'
]

async function verifyHealthcareSummaries() {
  console.log('🔍 Verifying healthcare category summaries (Batch 5)...\n')
  console.log('=' .repeat(80))

  let totalCharacters = 0
  const results = []

  for (const country of countries) {
    try {
      const summary = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country,
            type: 'country',
            category: 'healthcare'
          }
        }
      })

      if (summary) {
        const charCount = summary.summary.length
        totalCharacters += charCount
        const issues = JSON.parse(summary.issues)

        results.push({
          country,
          characters: charCount,
          issues: issues.length,
          status: '✅'
        })

        console.log(`✅ ${country.padEnd(15)} | ${charCount.toString().padStart(5)} characters | ${issues.length} issues`)
      } else {
        results.push({
          country,
          characters: 0,
          issues: 0,
          status: '❌'
        })
        console.log(`❌ ${country.padEnd(15)} | NOT FOUND`)
      }
    } catch (error) {
      console.error(`❌ Error verifying ${country}:`, error)
      results.push({
        country,
        characters: 0,
        issues: 0,
        status: '❌'
      })
    }
  }

  console.log('=' .repeat(80))
  console.log(`\n📊 SUMMARY:`)
  console.log(`   Total countries: ${countries.length}`)
  console.log(`   Successfully added: ${results.filter(r => r.status === '✅').length}`)
  console.log(`   Failed: ${results.filter(r => r.status === '❌').length}`)
  console.log(`   Total characters: ${totalCharacters.toLocaleString()}`)
  console.log(`   Average per country: ${Math.round(totalCharacters / results.filter(r => r.status === '✅').length).toLocaleString()} characters`)

  const charactersInRange = results.filter(r => r.characters >= 2500 && r.characters <= 3500)
  const charactersAboveRange = results.filter(r => r.characters > 3500)

  console.log(`\n📏 CHARACTER COUNT ANALYSIS:`)
  console.log(`   Target range: 2,500-3,500 characters`)
  console.log(`   In range (2,500-3,500): ${charactersInRange.length} countries`)
  console.log(`   Above range (>3,500): ${charactersAboveRange.length} countries`)

  if (charactersAboveRange.length > 0) {
    console.log(`\n   Countries above range:`)
    charactersAboveRange.forEach(r => {
      console.log(`     - ${r.country}: ${r.characters} characters`)
    })
  }

  console.log(`\n✅ Verification complete!`)
}

verifyHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
