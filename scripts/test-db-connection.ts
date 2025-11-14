import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log('Testing database connection...')
    const count = await prisma.locationSummary.count()
    console.log(`✅ Database connection successful! Found ${count} location summaries.`)

    const cultureSummaries = await prisma.locationSummary.findMany({
      where: { category: 'culture' }
    })
    console.log(`Found ${cultureSummaries.length} existing culture summaries:`)
    cultureSummaries.forEach(s => console.log(`  - ${s.name}`))

  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
