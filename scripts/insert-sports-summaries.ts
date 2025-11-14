import { PrismaClient } from '@prisma/client'
import { SPORTS_SUMMARIES } from './sports-summaries-data'

const prisma = new PrismaClient()

async function insertSportsSummaries() {
  console.log('⚽ INSERTING SPORTS SUMMARIES TO DATABASE')
  console.log('=' .repeat(80))
  console.log('')

  const countries = Object.keys(SPORTS_SUMMARIES)
  let successful = 0
  let failed = 0

  for (const code of countries) {
    const data = SPORTS_SUMMARIES[code as keyof typeof SPORTS_SUMMARIES]

    try {
      console.log(`📍 ${data.name} (${code})`)
      console.log(`   Characters: ${data.summary.length}`)
      console.log(`   Issues: ${data.issues.length}`)

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

      console.log(`   ✅ Saved to database`)
      successful++

    } catch (error: any) {
      console.error(`   ❌ Error: ${error.message}`)
      failed++
    }
    console.log('')
  }

  console.log('='.repeat(80))
  console.log('📊 FINAL REPORT')
  console.log('='.repeat(80))
  console.log(`✅ Successful: ${successful}/${countries.length}`)
  console.log(`❌ Failed: ${failed}/${countries.length}`)
  console.log('')

  // Display character counts
  console.log('CHARACTER COUNTS:')
  console.log('-'.repeat(80))
  Object.keys(SPORTS_SUMMARIES).forEach(code => {
    const data = SPORTS_SUMMARIES[code as keyof typeof SPORTS_SUMMARIES]
    const charCount = data.summary.length
    const status = charCount >= 2000 && charCount <= 3000 ? '✓' : '⚠'
    console.log(`  ${status} ${data.name.padEnd(15)} ${charCount} chars  ${data.issues.length} issues`)
  })

  console.log('')
  console.log('='.repeat(80))
  console.log('✅ COMPLETE')
  console.log('='.repeat(80))
}

insertSportsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
