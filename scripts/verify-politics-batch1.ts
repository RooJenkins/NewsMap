import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
  const politics = await prisma.locationSummary.findMany({
    where: { category: 'politics', type: 'country' },
    orderBy: { name: 'asc' }
  })

  console.log(`Found ${politics.length} Politics category entries:\n`)
  politics.forEach(p => {
    const issues = JSON.parse(p.issues)
    console.log(`✓ ${p.name}`)
    console.log(`  ID: ${p.id}`)
    console.log(`  Characters: ${p.summary.length}`)
    console.log(`  Issues: ${issues.length}`)
    console.log(`  Coordinates: (${p.lat}, ${p.lng})`)
    console.log()
  })

  console.log('=== VERIFICATION COMPLETE ===')
  console.log(`Total Politics entries: ${politics.length}`)
}

verify().finally(() => prisma.$disconnect())
