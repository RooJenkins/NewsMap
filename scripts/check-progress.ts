import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkProgress() {
  const summaries = await prisma.locationSummary.findMany({
    where: { type: 'country' },
    select: { category: true, name: true }
  })

  const byCategory = summaries.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s.name)
    return acc
  }, {} as Record<string, string[]>)

  console.log('\n📊 Generation Progress:\n')

  const categories = ['politics', 'economy', 'technology', 'climate', 'culture', 'sports', 'travel', 'food', 'healthcare', 'education', 'crime', 'energy', 'entertainment', 'lifestyle', 'infrastructure', 'science', 'humanrights', 'military', 'realestate']

  let totalGenerated = 0

  for (const cat of categories) {
    const count = byCategory[cat]?.length || 0
    totalGenerated += count
    const percent = Math.round((count / 114) * 100)
    const filled = Math.max(0, Math.min(20, Math.floor(percent / 5)))
    const empty = Math.max(0, 20 - filled)
    const bar = '█'.repeat(filled) + '░'.repeat(empty)
    console.log(`${cat.padEnd(15)} ${bar} ${count}/114 (${percent}%)`)
  }

  const overallPercent = Math.round((totalGenerated / (114 * 19)) * 100)
  console.log(`\n📈 OVERALL: ${totalGenerated}/2,166 (${overallPercent}%)`)
  console.log(`\n✅ Completed categories:`)

  for (const cat of categories) {
    const count = byCategory[cat]?.length || 0
    if (count === 114) {
      console.log(`   ✓ ${cat}`)
    } else if (count > 0) {
      console.log(`   ⏳ ${cat}: ${count}/114 countries`)
    }
  }
}

checkProgress()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
