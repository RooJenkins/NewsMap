#!/usr/bin/env npx tsx
/**
 * Save pre-generated Real Estate & Housing summaries for countries 81-120 to database
 * Countries: Kuwait through Zimbabwe
 */

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { realEstate81to120Summaries } from './generate-realestate-81-120-data'
import { countryCoordinates } from '../lib/countryCoordinates'

const prisma = new PrismaClient()

async function saveRealEstateSummaries() {
  console.log('🏗️  Real Estate & Housing Summary Saver')
  console.log('=' .repeat(80))
  console.log(`📍 Countries 81-120: Real Estate & Housing Analyses`)
  console.log('=' .repeat(80))
  console.log()

  let savedCount = 0
  let errorCount = 0
  const errors: { country: string; error: string }[] = []
  const skipped: string[] = []

  for (const [countryName, data] of Object.entries(realEstate81to120Summaries)) {
    try {
      const coords = countryCoordinates[countryName]

      if (!coords) {
        console.log(`  ⏭️  ${countryName} (coordinates not found)`)
        skipped.push(countryName)
        continue
      }

      const { summary, issues } = data

      // Get stories for top stories list
      const stories = await prisma.story.findMany({
        where: { country: countryName },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 7,
      })

      const topStories = stories.map(s => ({
        title: s.title,
        source: s.source,
        link: s.link,
        pubDate: s.pubDate.toISOString(),
      }))

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'realestate',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: stories.length,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: coords.lat,
          lng: coords.lng,
          category: 'realestate',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: stories.length,
        },
      })

      console.log(`  ✅ ${countryName}`)
      console.log(`     Characters: ${summary.length} | Issues: ${issues.length} | Stories: ${topStories.length}`)
      savedCount++

    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error)
      console.error(`  ❌ ${countryName}: ${errorMsg}`)
      errorCount++
      errors.push({ country: countryName, error: errorMsg })
    }
  }

  console.log()
  console.log('=' .repeat(80))
  console.log('✅ Real Estate & Housing Summary Save Complete!')
  console.log('=' .repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successfully saved: ${savedCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log(`   - Skipped (no coordinates): ${skipped.length}`)
  console.log(`   - Total in data: ${Object.keys(realEstate81to120Summaries).length}`)

  if (errors.length > 0) {
    console.log('\n⚠️  Failed Countries:')
    errors.forEach(({ country, error }) => {
      console.log(`   - ${country}: ${error}`)
    })
  }

  if (skipped.length > 0) {
    console.log('\n⏭️  Skipped Countries (no coordinates):')
    skipped.forEach(country => {
      console.log(`   - ${country}`)
    })
  }

  console.log()
  console.log('📋 Summary Details:')
  console.log(`   Category: realestate`)
  console.log(`   Perspective: YIMBY-focused housing market expert (Matt Yglesias style)`)
  console.log(`   Summary Range: 2,000-3,000 characters`)
  console.log(`   Issues per Country: 3-5`)
  console.log(`   Geographic Coverage: Kuwait → Zimbabwe (40 countries)`)
}

saveRealEstateSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
