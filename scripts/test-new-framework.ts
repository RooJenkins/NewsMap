import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'

const prisma = new PrismaClient()

async function test() {
  // Delete France summary
  await prisma.locationSummary.deleteMany({
    where: {
      name: 'France',
      type: 'country'
    }
  })

  console.log('✅ Deleted France summary')
  console.log('🔄 Running generation script...\n')

  // Run generation (it will stop after France since it has summaries for everything else)
  execSync('npx tsx scripts/generate-location-summaries-comprehensive.ts', {
    stdio: 'inherit'
  })
}

test()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
