import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function verify() {
  const count = await prisma.locationSummary.count({
    where: { category: 'politics' }
  })

  console.log('\n='.repeat(60))
  console.log(`POLITICS Writeups: ${count}/128`)
  console.log('='.repeat(60))

  if (count < 128) {
    console.log(`\n⚠️  Missing ${128 - count} countries\n`)
  } else {
    console.log('\n🎉 ALL 128 COUNTRIES COMPLETE!\n')
  }
}

verify().then(() => prisma.$disconnect()).catch(console.error)
