import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.locationSummary.deleteMany({
    where: {
      id: {
        in: ['SG-sports', 'SK-sports', 'SI-sports']
      }
    }
  })
  console.log(`Deleted ${result.count} records`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
