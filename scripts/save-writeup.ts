import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface WriteupData {
  country: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function saveWriteup(data: WriteupData) {
  await prisma.locationSummary.create({
    data: {
      name: data.country,
      type: 'country',
      country: data.country,
      lat: data.lat,
      lng: data.lng,
      category: 'healthcare',
      summary: data.summary,
      issues: JSON.stringify(data.issues),
      topStories: JSON.stringify([]),
      storyCount: 0,
      updatedAt: new Date()
    }
  })
  console.log(`✅ Saved: ${data.country}`)
}

// Read writeup data from stdin (JSON format)
const input = process.argv[2]
if (input) {
  const data = JSON.parse(input)
  saveWriteup(data)
    .catch(console.error)
    .finally(() => prisma.$disconnect())
} else {
  console.error('Usage: npx tsx save-writeup.ts \'{"country":"...","lat":...,"lng":...,"summary":"...","issues":[...]}\'')
  process.exit(1)
}
