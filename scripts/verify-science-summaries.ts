import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'science',
      name: {
        in: [
          'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina',
          'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
          'Cambodia', 'Cameroon', 'Canada', 'Chad', 'Chile', 'Costa Rica'
        ]
      }
    },
    orderBy: {
      name: 'asc'
    },
    select: {
      name: true,
      category: true,
      summary: true,
      updatedAt: true
    }
  })

  console.log('\n🔬 SCIENCE & RESEARCH SUMMARIES - Countries 16-31')
  console.log('='.repeat(80))
  console.log(`Total found: ${summaries.length} / 16 expected\n`)

  for (const summary of summaries) {
    console.log(`✅ ${summary.name}`)
    console.log(`   Category: ${summary.category}`)
    console.log(`   Length: ${summary.summary.length} characters`)
    console.log(`   Updated: ${summary.updatedAt.toISOString()}`)
    console.log(`   Preview: ${summary.summary.substring(0, 150)}...`)
    console.log('')
  }

  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
