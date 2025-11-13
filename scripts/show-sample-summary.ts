import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const summary = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: 'Japan',
        type: 'country',
        category: 'infrastructure',
      },
    },
  })

  if (summary) {
    console.log('='.repeat(80))
    console.log('SAMPLE INFRASTRUCTURE SUMMARY - JAPAN')
    console.log('='.repeat(80))
    console.log('\nCOUNTRY:', summary.name)
    console.log('CATEGORY:', summary.category)
    console.log('UPDATED:', summary.updatedAt.toISOString())
    console.log('\nSUMMARY LENGTH:', summary.summary.length, 'characters')
    console.log('\nFULL SUMMARY:')
    console.log(summary.summary)
    console.log('\n' + '-'.repeat(80))
    console.log('KEY INFRASTRUCTURE ISSUES:')
    const issues = JSON.parse(summary.issues)
    issues.forEach((issue: string, i: number) => {
      console.log(`${i + 1}. ${issue}`)
    })
    console.log('\n' + '-'.repeat(80))
    console.log('TOP STORIES:', summary.storyCount)
    const stories = JSON.parse(summary.topStories)
    stories.forEach((story: any, i: number) => {
      console.log(`\n${i + 1}. ${story.title}`)
      console.log(`   Source: ${story.source}`)
      console.log(`   Date: ${story.pubDate}`)
    })
    console.log('\n' + '='.repeat(80))
  } else {
    console.log('Summary not found')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
