import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { SPORTS_SUMMARIES } from './sports-summaries-belarus-cambodia-data'

const prisma = new PrismaClient()

async function main() {
  console.log('⚽ INSERTING SPORTS SUMMARIES INTO DATABASE')
  console.log('='.repeat(80))
  console.log(`Countries: ${SPORTS_SUMMARIES.length}`)
  console.log('='.repeat(80))
  console.log('')

  const results: { country: string; charCount: number; success: boolean; issues: number }[] = []

  for (const country of SPORTS_SUMMARIES) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`📍 ${country.name} (${country.code})`)
    console.log('='.repeat(80))

    try {
      const charCount = country.summary.length
      console.log(`  📝 Summary: ${charCount} characters`)
      console.log(`  📋 Issues: ${country.issues.length}`)

      // Check character count
      if (charCount < 2000) {
        console.log(`  ⚠️  WARNING: Under 2,000 characters`)
      } else if (charCount > 3000) {
        console.log(`  ⚠️  WARNING: Over 3,000 characters`)
      } else {
        console.log(`  ✅ Character count within range (2,000-3,000)`)
      }

      // Save to database
      await prisma.locationSummary.create({
        data: {
          id: `${country.code}-sports`,
          name: country.name,
          type: 'country',
          country: country.code,
          category: 'sports',
          lat: country.lat,
          lng: country.lng,
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: '[]',
          storyCount: 0,
        },
      })

      console.log(`  💾 Successfully saved to database`)

      results.push({
        country: country.name,
        charCount,
        issues: country.issues.length,
        success: true
      })

    } catch (error: any) {
      console.error(`  ❌ Error: ${error.message}`)
      results.push({
        country: country.name,
        charCount: 0,
        issues: 0,
        success: false
      })
    }
  }

  // Final report
  console.log('\n\n' + '='.repeat(80))
  console.log('📊 FINAL REPORT - SPORTS SUMMARIES INSERTION')
  console.log('='.repeat(80))
  console.log('')

  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`✅ Successful: ${successful.length}/${SPORTS_SUMMARIES.length}`)
  console.log(`❌ Failed: ${failed.length}/${SPORTS_SUMMARIES.length}`)
  console.log('')

  if (successful.length > 0) {
    console.log('SUMMARIES INSERTED:')
    console.log('-'.repeat(80))
    successful.forEach(r => {
      const status = r.charCount >= 2000 && r.charCount <= 3000 ? '✓' : '⚠'
      const countryPadded = r.country.padEnd(25)
      const charsPadded = `${r.charCount} chars`.padEnd(12)
      const issuesPadded = `${r.issues} issues`.padEnd(10)
      console.log(`  ${status} ${countryPadded} ${charsPadded} ${issuesPadded}`)
    })
    console.log('')
  }

  if (failed.length > 0) {
    console.log('FAILED:')
    failed.forEach(r => {
      console.log(`  ❌ ${r.country}`)
    })
    console.log('')
  }

  const withinRange = successful.filter(r => r.charCount >= 2000 && r.charCount <= 3000).length
  const avgChars = Math.round(successful.reduce((sum, r) => sum + r.charCount, 0) / successful.length)

  console.log(`Character count compliance: ${withinRange}/${successful.length} within 2,000-3,000 range`)
  console.log(`Average character count: ${avgChars}`)

  console.log('\n' + '='.repeat(80))
  console.log('✅ INSERTION COMPLETE')
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
