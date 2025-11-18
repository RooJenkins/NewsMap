import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'culture',
      country: {
        in: ['PG', 'PY', 'PE', 'PH', 'PL', 'PT', 'QA', 'RO', 'RU', 'RW', 'SA', 'SN', 'RS']
      }
    },
    select: {
      name: true,
      country: true,
      category: true,
      summary: true,
      issues: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`\nFound ${summaries.length} culture summaries:\n`)

  summaries.forEach(s => {
    const issues = JSON.parse(s.issues)
    console.log(`✓ ${s.name} (${s.country})`)
    console.log(`  Characters: ${s.summary.length}`)
    console.log(`  Issues: ${issues.length}`)
    console.log()
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
