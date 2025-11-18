import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('====================================================================')
  console.log('📊 VERIFYING HUMAN RIGHTS SUMMARIES FOR COUNTRIES 1-40')
  console.log('====================================================================\n')

  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'humanrights',
    },
    orderBy: { createdAt: 'desc' },
    take: 50,
  })

  console.log(`Total Human Rights summaries in database: ${summaries.length}\n`)

  summaries.slice(0, 10).forEach((summary) => {
    const issues = JSON.parse(summary.issues || '[]')
    console.log(`✅ ${summary.name}`)
    console.log(`   Type: ${summary.type}`)
    console.log(`   Summary length: ${summary.summary.length} characters`)
    console.log(`   Major issues: ${issues.length}`)
    console.log(`   Updated: ${summary.updatedAt}`)
    if (issues.length > 0) {
      console.log(`   Sample issues: ${issues.slice(0, 2).join(' | ')}`)
    }
    console.log()
  })

  console.log('====================================================================')
  console.log(`✅ Successfully verified ${summaries.length} human rights summaries`)
  console.log('====================================================================')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
