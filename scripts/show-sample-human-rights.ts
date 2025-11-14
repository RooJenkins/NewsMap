import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function showSample() {
  // Get a few different examples
  const samples = await prisma.locationSummary.findMany({
    where: {
      category: 'humanrights',
      name: { in: ['Vietnam', 'Uganda', 'South Africa'] },
    },
  })

  for (const sample of samples) {
    console.log('\n' + '='.repeat(80))
    console.log(`HUMAN RIGHTS ANALYSIS: ${sample.name}`)
    console.log('='.repeat(80))
    console.log('\nFULL SUMMARY:\n')
    console.log(sample.summary)

    const issues = JSON.parse(sample.issues)
    console.log('\n\nKEY ISSUES IDENTIFIED:\n')
    issues.forEach((issue: string, idx: number) => {
      console.log(`${idx + 1}. ${issue}`)
    })

    const topStories = JSON.parse(sample.topStories)
    console.log('\n\nREFERENCED SOURCES:\n')
    topStories.forEach((story: any, idx: number) => {
      console.log(`${idx + 1}. ${story.title}`)
      console.log(`   Source: ${story.source}`)
    })
  }

  await prisma.$disconnect()
}

showSample().catch(console.error)
