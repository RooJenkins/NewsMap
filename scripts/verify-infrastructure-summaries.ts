import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyInfrastructureSummaries() {
  console.log('🔍 Verifying infrastructure summaries\n')
  console.log('='.repeat(80))

  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'infrastructure',
      name: {
        in: ['China', 'Colombia', 'Egypt']
      }
    },
    orderBy: { name: 'asc' }
  })

  console.log(`\nFound ${summaries.length} infrastructure summaries\n`)

  for (const summary of summaries) {
    console.log('='.repeat(80))
    console.log(`📍 ${summary.name}`)
    console.log('='.repeat(80))
    console.log(`Type: ${summary.type}`)
    console.log(`Category: ${summary.category}`)
    console.log(`Coordinates: ${summary.lat}, ${summary.lng}`)
    console.log(`Story count: ${summary.storyCount}`)
    console.log(`Summary length: ${summary.summary.length} characters`)
    console.log(`Updated: ${summary.updatedAt}`)

    const issues = JSON.parse(summary.issues)
    console.log(`\nIssues (${issues.length}):`)
    issues.forEach((issue: string, i: number) => {
      console.log(`  ${i + 1}. ${issue}`)
    })

    const topStories = JSON.parse(summary.topStories)
    console.log(`\nTop Stories (${topStories.length}):`)
    topStories.slice(0, 3).forEach((story: any, i: number) => {
      console.log(`  ${i + 1}. [${story.source}] ${story.title}`)
    })

    console.log(`\nSummary preview:`)
    console.log(summary.summary.substring(0, 300) + '...')
    console.log()
  }

  console.log('='.repeat(80))
  console.log('✅ Verification complete!')
}

verifyInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
