import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BATCH5_COUNTRIES = ['Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Laos', 'Latvia', 'Lebanon', 'Libya', 'Lithuania']

async function main() {
  const existing = await prisma.locationSummary.findMany({
    where: {
      category: 'technology',
      name: { in: BATCH5_COUNTRIES }
    },
    select: { name: true }
  })

  console.log('Existing tech writeups:', existing.map(x => x.name).join(', ') || 'none')
  console.log(`\nMissing: ${BATCH5_COUNTRIES.filter(c => !existing.find(e => e.name === c)).join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
