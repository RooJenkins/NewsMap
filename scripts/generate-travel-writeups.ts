import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers'

const prisma = new PrismaClient()

// Pico Iyer voice characteristics for Travel & Tourism
const VOICE_GUIDE = `
Write in the distinctive voice and style of Pico Iyer:
- Philosophical and poetic
- Deeply immersive sensory details
- Cultural observer, not tourist
- Stillness and motion themes
- East-West cultural bridges
- Finds universal in particular
- Literary, contemplative, rich imagery
- Avoid listicles, "top 10" thinking, superficial exoticism
`

async function main() {
  console.log('🌍 Travel & Tourism Writeup Generation (Pico Iyer Voice)')
  console.log(`📊 Total: ${ALL_COUNTRIES.length} countries\n`)

  // This script will be called multiple times with country data passed as JSON via stdin
  const stdinData = await readStdin()

  if (!stdinData) {
    console.log('Usage: echo \'{"country": "Japan", "summary": "...", "issues": [...]}\' | npm run save-travel-writeup')
    process.exit(1)
  }

  const data = JSON.parse(stdinData)
  const country = ALL_COUNTRIES.find(c => c.name === data.country)

  if (!country) {
    console.error(`Country ${data.country} not found`)
    process.exit(1)
  }

  // Save to database
  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: country.name,
        type: 'country',
        category: 'travel'
      }
    },
    create: {
      name: country.name,
      type: 'country',
      country: country.name,
      lat: country.lat,
      lng: country.lng,
      category: 'travel',
      summary: data.summary,
      issues: JSON.stringify(data.issues),
      topStories: JSON.stringify([]),
      storyCount: 0,
      updatedAt: new Date()
    },
    update: {
      summary: data.summary,
      issues: JSON.stringify(data.issues),
      updatedAt: new Date()
    }
  })

  console.log(`✅ Saved: ${country.name} (${data.summary.length} chars, ${data.issues.length} issues)`)
}

async function readStdin(): Promise<string> {
  return new Promise((resolve) => {
    let data = ''
    process.stdin.on('data', chunk => data += chunk)
    process.stdin.on('end', () => resolve(data))
    setTimeout(() => resolve(''), 100) // timeout if no stdin
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
