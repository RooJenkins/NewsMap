import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkProgress() {
  const entertainment = await prisma.locationSummary.findMany({
    where: { category: 'entertainment', type: 'country' },
    select: { name: true },
    orderBy: { name: 'asc' }
  })

  const total = 114
  const completed = entertainment.length
  const remaining = total - completed

  console.log('\n🎬 ENTERTAINMENT WRITEUPS STATUS')
  console.log('='.repeat(70))
  console.log(`✅ Completed: ${completed}/${total} countries`)
  console.log(`📝 Remaining: ${remaining} countries`)
  console.log('='.repeat(70))
  console.log('\nCountries with entertainment writeups:')
  entertainment.forEach((c, i) => console.log(`  ${String(i+1).padStart(3)}. ${c.name}`))
  console.log('\n')
}

checkProgress().finally(() => prisma.$disconnect())
