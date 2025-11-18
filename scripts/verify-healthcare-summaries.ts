import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyHealthcareSummaries() {
  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'healthcare'
    },
    orderBy: {
      name: 'asc'
    },
    select: {
      name: true,
      category: true,
      summary: true
    }
  })

  console.log(`Found ${summaries.length} healthcare summaries:\n`)

  summaries.forEach(s => {
    console.log(`✅ ${s.name}: ${s.summary.length} characters`)
  })

  console.log(`\nTotal: ${summaries.length} healthcare summaries`)
}

verifyHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
