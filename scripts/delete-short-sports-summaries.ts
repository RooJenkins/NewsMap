import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🗑️  Deleting short sports summaries...\n')

  const countries = ['PG', 'PY', 'PE', 'PH', 'PL', 'PT', 'QA', 'RO', 'RU', 'RW', 'SA', 'SN', 'RS']

  const result = await prisma.locationSummary.deleteMany({
    where: {
      category: 'sports',
      country: {
        in: countries
      }
    }
  })

  console.log(`✅ Deleted ${result.count} sports summaries`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
