import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function showSamples() {
  const samples = ['United States', 'Brazil', 'Philippines', 'South Africa', 'United Kingdom']

  console.log('========================================')
  console.log('SAMPLE CRIME WRITEUPS - Michelle Alexander')
  console.log('========================================\n')

  for (const country of samples) {
    const writeup = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'crime'
        }
      },
      select: { name: true, summary: true, issues: true }
    })

    if (writeup) {
      console.log('\n' + '='.repeat(60))
      console.log(writeup.name)
      console.log('='.repeat(60))
      const issues = JSON.parse(writeup.issues) as string[]
      console.log('ISSUES:')
      issues.forEach(i => console.log(`  • ${i}`))
      console.log(`\nCHARACTERS: ${writeup.summary.length}`)
      console.log(`\nFIRST 500 CHARACTERS:`)
      console.log(writeup.summary.substring(0, 500))
      console.log('...\n')
    }
  }

  await prisma.$disconnect()
}

showSamples()
