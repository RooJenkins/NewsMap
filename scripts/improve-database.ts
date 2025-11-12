import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Major cities and countries for location extraction
const locations = [
  // Cities
  { name: 'New York', lat: 40.7128, lng: -74.0060, country: 'US' },
  { name: 'Los Angeles', lat: 34.0522, lng: -118.2437, country: 'US' },
  { name: 'Chicago', lat: 41.8781, lng: -87.6298, country: 'US' },
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, country: 'US' },
  { name: 'Washington', lat: 38.9072, lng: -77.0369, country: 'US' },
  { name: 'London', lat: 51.5074, lng: -0.1278, country: 'UK' },
  { name: 'Paris', lat: 48.8566, lng: 2.3522, country: 'France' },
  { name: 'Berlin', lat: 52.5200, lng: 13.4050, country: 'Germany' },
  { name: 'Madrid', lat: 40.4168, lng: -3.7038, country: 'Spain' },
  { name: 'Rome', lat: 41.9028, lng: 12.4964, country: 'Italy' },
  { name: 'Moscow', lat: 55.7558, lng: 37.6173, country: 'Russia' },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, country: 'Japan' },
  { name: 'Beijing', lat: 39.9042, lng: 116.4074, country: 'China' },
  { name: 'Shanghai', lat: 31.2304, lng: 121.4737, country: 'China' },
  { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, country: 'China' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, country: 'Singapore' },
  { name: 'Seoul', lat: 37.5665, lng: 126.9780, country: 'South Korea' },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777, country: 'India' },
  { name: 'Delhi', lat: 28.7041, lng: 77.1025, country: 'India' },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, country: 'UAE' },
  { name: 'Tel Aviv', lat: 32.0853, lng: 34.7818, country: 'Israel' },
  { name: 'Istanbul', lat: 41.0082, lng: 28.9784, country: 'Turkey' },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357, country: 'Egypt' },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, country: 'Australia' },

  // Countries
  { name: 'United States', lat: 37.0902, lng: -95.7129, country: 'US' },
  { name: 'America', lat: 37.0902, lng: -95.7129, country: 'US' },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656, country: 'Ukraine' },
  { name: 'Russia', lat: 61.5240, lng: 105.3188, country: 'Russia' },
  { name: 'China', lat: 35.8617, lng: 104.1954, country: 'China' },
  { name: 'India', lat: 20.5937, lng: 78.9629, country: 'India' },
  { name: 'Israel', lat: 31.0461, lng: 34.8516, country: 'Israel' },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332, country: 'Palestine' },
  { name: 'Gaza', lat: 31.3547, lng: 34.3088, country: 'Palestine' },
  { name: 'Iran', lat: 32.4279, lng: 53.6880, country: 'Iran' },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793, country: 'Iraq' },
  { name: 'Syria', lat: 34.8021, lng: 38.9968, country: 'Syria' },
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100, country: 'Afghanistan' },
]

// Extract location from story title and description
function extractLocation(title: string, description?: string): typeof locations[0] | null {
  const text = `${title} ${description || ''}`.toLowerCase()

  // Find location mentions in order of specificity (cities first, then countries)
  for (const location of locations) {
    const regex = new RegExp(`\\b${location.name.toLowerCase()}\\b`, 'i')
    if (regex.test(text)) {
      return location
    }
  }

  return null
}

// Calculate similarity between two strings (0-1)
function similarity(s1: string, s2: string): number {
  const longer = s1.length > s2.length ? s1 : s2
  const shorter = s1.length > s2.length ? s2 : s1

  if (longer.length === 0) return 1.0

  const editDistance = levenshteinDistance(longer, shorter)
  return (longer.length - editDistance) / longer.length
}

function levenshteinDistance(s1: string, s2: string): number {
  const costs: number[] = []
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j
      } else if (j > 0) {
        let newValue = costs[j - 1]
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
        }
        costs[j - 1] = lastValue
        lastValue = newValue
      }
    }
    if (i > 0) costs[s2.length] = lastValue
  }
  return costs[s2.length]
}

// Check if story is quality
function isQualityStory(story: any): boolean {
  // Filter out stories with no description or very short titles
  if (!story.description || story.description.length < 50) return false
  if (story.title.length < 20) return false

  // Filter out stories with generic titles
  const genericPhrases = ['live updates', 'breaking news', 'news updates', 'latest news']
  if (genericPhrases.some(phrase => story.title.toLowerCase().includes(phrase))) {
    return false
  }

  return true
}

async function improveDatabase() {
  console.log('🔧 Starting database improvement...\n')

  // 1. Extract and fix locations
  console.log('📍 Step 1: Extracting real locations from story content...')
  const allStories = await prisma.story.findMany()
  let locationFixed = 0

  for (const story of allStories) {
    const extractedLocation = extractLocation(story.title, story.description || undefined)

    if (extractedLocation) {
      // Update story location to where it's ABOUT, not where it's FROM
      await prisma.story.update({
        where: { id: story.id },
        data: {
          lat: extractedLocation.lat + (Math.random() - 0.5) * 0.1, // Add slight variation
          lng: extractedLocation.lng + (Math.random() - 0.5) * 0.1,
          city: extractedLocation.name,
          country: extractedLocation.country,
        }
      })
      locationFixed++

      if (locationFixed % 50 === 0) {
        console.log(`  ✓ Fixed ${locationFixed} locations...`)
      }
    }
  }
  console.log(`✅ Fixed ${locationFixed} story locations\n`)

  // 2. Find and merge duplicate stories
  console.log('🔍 Step 2: Detecting duplicate stories...')
  const updatedStories = await prisma.story.findMany({
    orderBy: [
      { importance: 'desc' },
      { pubDate: 'desc' }
    ]
  })

  const duplicates: Set<string> = new Set()
  const groups: Array<typeof updatedStories> = []

  for (let i = 0; i < updatedStories.length; i++) {
    if (duplicates.has(updatedStories[i].id)) continue

    const group = [updatedStories[i]]

    for (let j = i + 1; j < updatedStories.length; j++) {
      if (duplicates.has(updatedStories[j].id)) continue

      const sim = similarity(
        updatedStories[i].title.toLowerCase(),
        updatedStories[j].title.toLowerCase()
      )

      // If titles are 80% similar, they're duplicates
      if (sim > 0.8) {
        group.push(updatedStories[j])
        duplicates.add(updatedStories[j].id)
      }
    }

    if (group.length > 1) {
      groups.push(group)
    }
  }

  console.log(`  Found ${groups.length} groups of duplicates`)

  // Keep the best version of each duplicate group
  let merged = 0
  for (const group of groups) {
    // Keep the one with highest importance and best description
    const best = group.reduce((prev, curr) => {
      if (curr.importance > prev.importance) return curr
      if (curr.importance === prev.importance && (curr.description?.length || 0) > (prev.description?.length || 0)) {
        return curr
      }
      return prev
    })

    // Delete the others
    const toDelete = group.filter(s => s.id !== best.id)
    for (const story of toDelete) {
      await prisma.story.delete({ where: { id: story.id } })
      merged++
    }

    if (merged % 10 === 0 && merged > 0) {
      console.log(`  ✓ Merged ${merged} duplicates...`)
    }
  }
  console.log(`✅ Merged ${merged} duplicate stories\n`)

  // 3. Filter out low-quality stories
  console.log('🎯 Step 3: Filtering low-quality stories...')
  const finalStories = await prisma.story.findMany()
  let removed = 0

  for (const story of finalStories) {
    if (!isQualityStory(story)) {
      await prisma.story.delete({ where: { id: story.id } })
      removed++

      if (removed % 50 === 0) {
        console.log(`  ✓ Removed ${removed} low-quality stories...`)
      }
    }
  }
  console.log(`✅ Removed ${removed} low-quality stories\n`)

  // 4. Final stats
  const finalCount = await prisma.story.count()
  const breakingCount = await prisma.story.count({ where: { isBreaking: true } })
  const avgImportance = await prisma.story.aggregate({
    _avg: { importance: true }
  })

  console.log('📊 Database Improvement Complete!')
  console.log(`   Final story count: ${finalCount}`)
  console.log(`   Breaking news: ${breakingCount}`)
  console.log(`   Average importance: ${(avgImportance._avg.importance || 0).toFixed(3)}`)
  console.log(`   Locations fixed: ${locationFixed}`)
  console.log(`   Duplicates merged: ${merged}`)
  console.log(`   Low-quality removed: ${removed}`)
}

improveDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
