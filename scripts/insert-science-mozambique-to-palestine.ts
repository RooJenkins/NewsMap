import { PrismaClient } from '@prisma/client'
import { scienceSummaries } from './science-mozambique-to-palestine-data'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Inserting SCIENCE & RESEARCH summaries for Mozambique through Palestine\n')
  console.log('Countries: Mozambique, Myanmar, Namibia, Nepal, Netherlands, New Zealand, Nicaragua, Niger, Nigeria, North Korea, Norway, Oman, Pakistan, Palestine (14 total)\n')

  let successCount = 0
  let errorCount = 0

  for (const location of scienceSummaries) {
    const separator = '='.repeat(80)
    console.log(`\n${separator}`)
    console.log(`Processing: ${location.name}`)
    console.log(separator)

    try {
      console.log(`Summary length: ${location.summary.length} characters`)
      console.log(`Issues count: ${location.issues.length}`)

      // Verify summary length is in range
      if (location.summary.length < 2500 || location.summary.length > 3500) {
        console.warn(`⚠️  Summary length ${location.summary.length} is outside target range (2,500-3,500)`)
      }

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: 'country',
            category: 'science',
          },
        },
        update: {
          summary: location.summary,
          issues: JSON.stringify(location.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          lat: location.lat,
          lng: location.lng,
          updatedAt: new Date(),
        },
        create: {
          name: location.name,
          type: 'country',
          country: location.name,
          lat: location.lat,
          lng: location.lng,
          category: 'science',
          summary: location.summary,
          issues: JSON.stringify(location.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved SCIENCE summary for ${location.name}`)
      successCount++
    } catch (error) {
      console.error(`❌ Error saving SCIENCE summary for ${location.name}:`, error)
      errorCount++
    }
  }

  const finalSeparator = '='.repeat(80)
  console.log(`\n${finalSeparator}`)
  console.log('✅ SCIENCE & RESEARCH summary insertion complete!')
  console.log(`Successfully inserted: ${successCount}/${scienceSummaries.length} summaries`)
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`)
  }
  console.log(finalSeparator)

  console.log('\n📊 Verification:')
  const scienceRecords = await prisma.locationSummary.findMany({
    where: { category: 'science' },
    select: { name: true, category: true },
    orderBy: { name: 'asc' },
  })
  console.log(`Total SCIENCE summaries in database: ${scienceRecords.length}`)

  console.log('\n📋 All countries with SCIENCE summaries:')
  scienceRecords.forEach((r, index) => {
    console.log(`  ${index + 1}. ${r.name}`)
  })

  console.log('\n✨ Recently added countries (Mozambique through Palestine):')
  const recentlyAdded = scienceRecords.filter(r =>
    ['Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand',
     'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palestine']
    .includes(r.name)
  )
  recentlyAdded.forEach((r) => {
    console.log(`  ✅ ${r.name}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
