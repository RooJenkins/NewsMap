import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Australia', 'Austria', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Benin', 'Bolivia']

async function main() {
  const results = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'technology',
      name: { in: countries }
    }
  })

  console.log('Existing technology writeups:')
  results.forEach(r => console.log(r.name))

  const existing = new Set(results.map(r => r.name))
  const missing = countries.filter(c => !existing.has(c))

  console.log('\nMissing technology writeups:')
  missing.forEach(c => console.log(c))
}

main().finally(() => prisma.$disconnect())
