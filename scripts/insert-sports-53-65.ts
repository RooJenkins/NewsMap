import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { SPORTS_DATA_53_65 } from './sports-data-53-65'

const prisma = new PrismaClient()

async function main() {
  console.log('⚽ INSERTING SPORTS SUMMARIES - COUNTRIES 53-65')
  console.log('='.repeat(80))
  console.log(`Countries: ${Object.keys(SPORTS_DATA_53_65).length}`)
  console.log('Category: sports')
  console.log('='.repeat(80))
  console.log('')

  const results: { country: string; charCount: number; success: boolean; issues: number }[] = []

  for (const [code, data] of Object.entries(SPORTS_DATA_53_65)) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`📍 ${data.name} (${code})`)
    console.log('='.repeat(80))

    const charCount = data.summary.length
    console.log(`  📊 Character count: ${charCount}`)

    if (charCount < 2000) {
      console.log(`  ⚠️  WARNING: Under 2,000 characters (${charCount})`)
    } else if (charCount > 3000) {
      console.log(`  ⚠️  WARNING: Over 3,000 characters (${charCount})`)
    } else {
      console.log(`  ✓ Within target range (2,000-3,000)`)
    }

    console.log(`  📝 Issues: ${data.issues.length}`)

    try {
      await prisma.locationSummary.create({
        data: {
          id: `${code}-sports`,
          name: data.name,
          type: 'country',
          country: code,
          category: 'sports',
          lat: data.lat,
          lng: data.lng,
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: '[]',
          storyCount: 0,
        },
      })

      console.log(`  💾 Saved to database: ${code}-sports`)

      results.push({
        country: data.name,
        charCount,
        issues: data.issues.length,
        success: true
      })

    } catch (error: any) {
      console.error(`  ❌ Error: ${error.message}`)
      results.push({
        country: data.name,
        charCount,
        issues: data.issues.length,
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

  console.log(`✅ Successful: ${successful.length}/${results.length}`)
  console.log(`❌ Failed: ${failed.length}/${results.length}`)
  console.log('')

  if (successful.length > 0) {
    console.log('SUMMARIES INSERTED:')
    console.log('-'.repeat(80))
    successful.forEach(r => {
      const status = r.charCount >= 2000 && r.charCount <= 3000 ? '✓' : '⚠'
      const countryPadded = r.country.padEnd(15)
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
  console.log(`Character count compliance: ${withinRange}/${successful.length} within 2,000-3,000 range`)

  console.log('\n' + '='.repeat(80))
  console.log('✅ INSERTION COMPLETE')
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
