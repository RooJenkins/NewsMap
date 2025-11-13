import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const existing = await prisma.locationSummary.findMany({
    where: { category: 'technology' }
  })

  console.log(`\nExisting technology entries: ${existing.length}`)
  existing.forEach(e => console.log(`- ${e.name}`))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
