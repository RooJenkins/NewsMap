import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

interface CountryData {
  name: string
  lat: number
  lng: number
}

interface SummaryData {
  summary: string
  issues: string[]
}

interface DataFile {
  countries: CountryData[]
  summaries: { [key: string]: SummaryData }
}

async function saveSummaries() {
  console.log('🚀 Saving infrastructure summaries for Senegal to Syria (16 countries)\n')

  // Read the data file
  const dataPath = path.join(__dirname, 'infrastructure-senegal-syria-data.json')
  const rawData = fs.readFileSync(dataPath, 'utf-8')
  const data: DataFile = JSON.parse(rawData)

  let successCount = 0
  let errorCount = 0
  const errors: string[] = []

  for (const location of data.countries) {
    const summaryData = data.summaries[location.name]

    if (!summaryData) {
      console.log(`⚠️  No summary data found for ${location.name} - skipping`)
      errorCount++
      errors.push(`${location.name}: No summary data`)
      continue
    }

    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      // Fetch stories to create topStories array
      const stories = await prisma.story.findMany({
        where: { country: location.name },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 100,
      })

      console.log(`   Found ${stories.length} stories for ${location.name}`)

      // Create topStories array from available stories
      let topStories = []

      if (stories.length > 0) {
        const storyCount = Math.min(5, stories.length)
        topStories = stories.slice(0, storyCount).map(story => ({
          title: story.title,
          source: story.source,
          link: story.link,
          pubDate: story.pubDate.toISOString(),
        }))
      } else {
        console.log(`   ⚠️  No stories found for ${location.name} - creating summary without topStories`)
      }

      // Verify summary length
      const summaryLength = summaryData.summary.length
      console.log(`   Summary length: ${summaryLength} characters`)
      if (summaryLength < 2500 || summaryLength > 3500) {
        console.log(`   ⚠️  Warning: Summary length ${summaryLength} is outside target range (2500-3500)`)
      }

      // Verify issues count
      if (summaryData.issues.length !== 5) {
        console.log(`   ⚠️  Warning: Expected 5 issues, got ${summaryData.issues.length}`)
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: 'country',
            category: 'infrastructure',
          },
        },
        update: {
          summary: summaryData.summary,
          issues: JSON.stringify(summaryData.issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: location.name,
          type: 'country',
          country: location.name,
          lat: location.lat,
          lng: location.lng,
          category: 'infrastructure',
          summary: summaryData.summary,
          issues: JSON.stringify(summaryData.issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`✅ Successfully saved infrastructure summary for ${location.name}`)
      console.log(`   - Summary: ${summaryLength} characters`)
      console.log(`   - Issues: ${summaryData.issues.length}`)
      console.log(`   - Top stories: ${topStories.length}`)

      successCount++
    } catch (error) {
      console.error(`❌ Error saving summary for ${location.name}:`, error)
      errorCount++
      errors.push(`${location.name}: ${error}`)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Infrastructure summary generation complete!')
  console.log('='.repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successfully saved: ${successCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log(`   - Total countries: ${data.countries.length}`)

  if (errors.length > 0) {
    console.log(`\n❌ Errors encountered:`)
    errors.forEach(err => console.log(`   - ${err}`))
  }

  console.log('\n📋 Summary Statistics:')
  data.countries.forEach(country => {
    const summary = data.summaries[country.name]
    if (summary) {
      console.log(`   ${country.name}: ${summary.summary.length} chars, ${summary.issues.length} issues`)
    }
  })
}

saveSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
