import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function saveSummary() {
  const args = process.argv.slice(2)

  if (args.length < 3) {
    console.error('Usage: tsx scripts/save-summary.ts <name> <type> <summary>')
    process.exit(1)
  }

  const name = args[0]
  const type = args[1]
  const summary = args.slice(2).join(' ')

  try {
    // Get the location
    const location = await prisma.locationSummary.findFirst({
      where: {
        name,
        type
      }
    })

    if (!location) {
      console.error(`❌ Location not found: ${name} (${type})`)
      process.exit(1)
    }

    // Update the summary
    await prisma.locationSummary.update({
      where: {
        id: location.id
      },
      data: {
        summary,
        updatedAt: new Date()
      }
    })

    console.log(`✅ Saved summary for ${name} (${type})`)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

saveSummary()
