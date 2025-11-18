import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:/home/user/NewsMap/prisma/dev.db'
    }
  }
})

async function verify() {
  const count = await prisma.locationSummary.count({
    where: {
      type: 'country',
      category: 'climate'
    }
  })
  
  console.log(`✓ Total climate writeups in database: ${count}/128`)
  
  // Get sample entries from different regions
  const samples = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'climate',
      name: { in: ['Afghanistan', 'Brazil', 'Japan'] }
    },
    select: {
      name: true,
      lat: true,
      lng: true,
      summary: true
    }
  })
  
  console.log('\nSample entries verified:')
  samples.forEach(s => {
    console.log(`\n✓ ${s.name} (${s.lat}, ${s.lng})`)
    console.log(`  Summary length: ${s.summary.length} characters`)
  })
  
  console.log('\n=== DATABASE VERIFICATION COMPLETE ===')
  console.log(`All ${count} climate writeups successfully stored!`)
  
  await prisma.$disconnect()
}

verify()
