import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Comprehensive location database with countries and major cities
const LOCATIONS = [
  // === COUNTRIES (prioritize these!) ===
  // North America
  { name: 'United States', aliases: ['USA', 'US', 'America', 'American'], lat: 39.8283, lng: -98.5795, country: 'US', type: 'country' },
  { name: 'Canada', aliases: ['Canadian'], lat: 56.1304, lng: -106.3468, country: 'Canada', type: 'country' },
  { name: 'Mexico', aliases: ['Mexican'], lat: 23.6345, lng: -102.5528, country: 'Mexico', type: 'country' },

  // Europe
  { name: 'United Kingdom', aliases: ['UK', 'Britain', 'British', 'England'], lat: 55.3781, lng: -3.4360, country: 'UK', type: 'country' },
  { name: 'France', aliases: ['French'], lat: 46.2276, lng: 2.2137, country: 'France', type: 'country' },
  { name: 'Germany', aliases: ['German'], lat: 51.1657, lng: 10.4515, country: 'Germany', type: 'country' },
  { name: 'Italy', aliases: ['Italian'], lat: 41.8719, lng: 12.5674, country: 'Italy', type: 'country' },
  { name: 'Spain', aliases: ['Spanish'], lat: 40.4637, lng: -3.7492, country: 'Spain', type: 'country' },
  { name: 'Russia', aliases: ['Russian', 'Moscow', 'Kremlin'], lat: 61.5240, lng: 105.3188, country: 'Russia', type: 'country' },
  { name: 'Ukraine', aliases: ['Ukrainian', 'Kyiv', 'Kiev'], lat: 48.3794, lng: 31.1656, country: 'Ukraine', type: 'country' },
  { name: 'Poland', aliases: ['Polish'], lat: 51.9194, lng: 19.1451, country: 'Poland', type: 'country' },
  { name: 'Netherlands', aliases: ['Dutch'], lat: 52.1326, lng: 5.2913, country: 'Netherlands', type: 'country' },
  { name: 'Belgium', aliases: ['Belgian'], lat: 50.5039, lng: 4.4699, country: 'Belgium', type: 'country' },
  { name: 'Switzerland', aliases: ['Swiss'], lat: 46.8182, lng: 8.2275, country: 'Switzerland', type: 'country' },
  { name: 'Austria', aliases: ['Austrian'], lat: 47.5162, lng: 14.5501, country: 'Austria', type: 'country' },
  { name: 'Sweden', aliases: ['Swedish'], lat: 60.1282, lng: 18.6435, country: 'Sweden', type: 'country' },
  { name: 'Norway', aliases: ['Norwegian'], lat: 60.4720, lng: 8.4689, country: 'Norway', type: 'country' },
  { name: 'Finland', aliases: ['Finnish'], lat: 61.9241, lng: 25.7482, country: 'Finland', type: 'country' },
  { name: 'Denmark', aliases: ['Danish'], lat: 56.2639, lng: 9.5018, country: 'Denmark', type: 'country' },
  { name: 'Greece', aliases: ['Greek'], lat: 39.0742, lng: 21.8243, country: 'Greece', type: 'country' },
  { name: 'Turkey', aliases: ['Turkish', 'Ankara'], lat: 38.9637, lng: 35.2433, country: 'Turkey', type: 'country' },

  // Middle East
  { name: 'Israel', aliases: ['Israeli'], lat: 31.0461, lng: 34.8516, country: 'Israel', type: 'country' },
  { name: 'Palestine', aliases: ['Palestinian', 'Gaza', 'West Bank'], lat: 31.9522, lng: 35.2332, country: 'Palestine', type: 'country' },
  { name: 'Iran', aliases: ['Iranian', 'Tehran'], lat: 32.4279, lng: 53.6880, country: 'Iran', type: 'country' },
  { name: 'Iraq', aliases: ['Iraqi', 'Baghdad'], lat: 33.2232, lng: 43.6793, country: 'Iraq', type: 'country' },
  { name: 'Syria', aliases: ['Syrian', 'Damascus'], lat: 34.8021, lng: 38.9968, country: 'Syria', type: 'country' },
  { name: 'Saudi Arabia', aliases: ['Saudi', 'Riyadh'], lat: 23.8859, lng: 45.0792, country: 'Saudi Arabia', type: 'country' },
  { name: 'UAE', aliases: ['Emirates', 'Dubai'], lat: 23.4241, lng: 53.8478, country: 'UAE', type: 'country' },
  { name: 'Lebanon', aliases: ['Lebanese', 'Beirut'], lat: 33.8547, lng: 35.8623, country: 'Lebanon', type: 'country' },
  { name: 'Jordan', aliases: ['Jordanian', 'Amman'], lat: 30.5852, lng: 36.2384, country: 'Jordan', type: 'country' },

  // Asia
  { name: 'China', aliases: ['Chinese', 'Beijing', 'PRC'], lat: 35.8617, lng: 104.1954, country: 'China', type: 'country' },
  { name: 'Japan', aliases: ['Japanese', 'Tokyo'], lat: 36.2048, lng: 138.2529, country: 'Japan', type: 'country' },
  { name: 'India', aliases: ['Indian', 'Delhi'], lat: 20.5937, lng: 78.9629, country: 'India', type: 'country' },
  { name: 'South Korea', aliases: ['Korean', 'Seoul'], lat: 35.9078, lng: 127.7669, country: 'South Korea', type: 'country' },
  { name: 'North Korea', aliases: ['Pyongyang', 'DPRK'], lat: 40.3399, lng: 127.5101, country: 'North Korea', type: 'country' },
  { name: 'Pakistan', aliases: ['Pakistani', 'Islamabad'], lat: 30.3753, lng: 69.3451, country: 'Pakistan', type: 'country' },
  { name: 'Bangladesh', aliases: ['Bangladeshi', 'Dhaka'], lat: 23.6850, lng: 90.3563, country: 'Bangladesh', type: 'country' },
  { name: 'Afghanistan', aliases: ['Afghan', 'Kabul'], lat: 33.9391, lng: 67.7100, country: 'Afghanistan', type: 'country' },
  { name: 'Vietnam', aliases: ['Vietnamese', 'Hanoi'], lat: 14.0583, lng: 108.2772, country: 'Vietnam', type: 'country' },
  { name: 'Thailand', aliases: ['Thai', 'Bangkok'], lat: 15.8700, lng: 100.9925, country: 'Thailand', type: 'country' },
  { name: 'Indonesia', aliases: ['Indonesian', 'Jakarta'], lat: -0.7893, lng: 113.9213, country: 'Indonesia', type: 'country' },
  { name: 'Philippines', aliases: ['Filipino', 'Manila'], lat: 12.8797, lng: 121.7740, country: 'Philippines', type: 'country' },
  { name: 'Malaysia', aliases: ['Malaysian', 'Kuala Lumpur'], lat: 4.2105, lng: 101.9758, country: 'Malaysia', type: 'country' },
  { name: 'Singapore', aliases: ['Singaporean'], lat: 1.3521, lng: 103.8198, country: 'Singapore', type: 'country' },
  { name: 'Myanmar', aliases: ['Burma', 'Burmese'], lat: 21.9162, lng: 95.9560, country: 'Myanmar', type: 'country' },

  // Africa
  { name: 'Egypt', aliases: ['Egyptian', 'Cairo'], lat: 26.8206, lng: 30.8025, country: 'Egypt', type: 'country' },
  { name: 'South Africa', aliases: ['Johannesburg', 'Cape Town'], lat: -30.5595, lng: 22.9375, country: 'South Africa', type: 'country' },
  { name: 'Nigeria', aliases: ['Nigerian', 'Lagos'], lat: 9.0820, lng: 8.6753, country: 'Nigeria', type: 'country' },
  { name: 'Kenya', aliases: ['Kenyan', 'Nairobi'], lat: -0.0236, lng: 37.9062, country: 'Kenya', type: 'country' },
  { name: 'Ethiopia', aliases: ['Ethiopian', 'Addis Ababa'], lat: 9.1450, lng: 40.4897, country: 'Ethiopia', type: 'country' },
  { name: 'Morocco', aliases: ['Moroccan'], lat: 31.7917, lng: -7.0926, country: 'Morocco', type: 'country' },
  { name: 'Algeria', aliases: ['Algerian', 'Algiers'], lat: 28.0339, lng: 1.6596, country: 'Algeria', type: 'country' },

  // South America
  { name: 'Brazil', aliases: ['Brazilian', 'Brasilia'], lat: -14.2350, lng: -51.9253, country: 'Brazil', type: 'country' },
  { name: 'Argentina', aliases: ['Argentinian', 'Buenos Aires'], lat: -38.4161, lng: -63.6167, country: 'Argentina', type: 'country' },
  { name: 'Chile', aliases: ['Chilean', 'Santiago'], lat: -35.6751, lng: -71.5430, country: 'Chile', type: 'country' },
  { name: 'Colombia', aliases: ['Colombian', 'Bogota'], lat: 4.5709, lng: -74.2973, country: 'Colombia', type: 'country' },
  { name: 'Peru', aliases: ['Peruvian', 'Lima'], lat: -9.1900, lng: -75.0152, country: 'Peru', type: 'country' },
  { name: 'Venezuela', aliases: ['Venezuelan', 'Caracas'], lat: 6.4238, lng: -66.5897, country: 'Venezuela', type: 'country' },

  // Oceania
  { name: 'Australia', aliases: ['Australian', 'Canberra'], lat: -25.2744, lng: 133.7751, country: 'Australia', type: 'country' },
  { name: 'New Zealand', aliases: ['Wellington', 'Auckland'], lat: -40.9006, lng: 174.8860, country: 'New Zealand', type: 'country' },

  // === MAJOR CITIES (lower priority than countries) ===
  // US Cities
  { name: 'New York', aliases: ['NYC', 'Manhattan'], lat: 40.7128, lng: -74.0060, country: 'US', type: 'city' },
  { name: 'Los Angeles', aliases: ['LA'], lat: 34.0522, lng: -118.2437, country: 'US', type: 'city' },
  { name: 'Chicago', aliases: [], lat: 41.8781, lng: -87.6298, country: 'US', type: 'city' },
  { name: 'Houston', aliases: [], lat: 29.7604, lng: -95.3698, country: 'US', type: 'city' },
  { name: 'Phoenix', aliases: [], lat: 33.4484, lng: -112.0740, country: 'US', type: 'city' },
  { name: 'Philadelphia', aliases: [], lat: 39.9526, lng: -75.1652, country: 'US', type: 'city' },
  { name: 'San Antonio', aliases: [], lat: 29.4241, lng: -98.4936, country: 'US', type: 'city' },
  { name: 'San Diego', aliases: [], lat: 32.7157, lng: -117.1611, country: 'US', type: 'city' },
  { name: 'Dallas', aliases: [], lat: 32.7767, lng: -96.7970, country: 'US', type: 'city' },
  { name: 'San Francisco', aliases: ['SF'], lat: 37.7749, lng: -122.4194, country: 'US', type: 'city' },
  { name: 'Washington', aliases: ['DC', 'Washington DC'], lat: 38.9072, lng: -77.0369, country: 'US', type: 'city' },
  { name: 'Boston', aliases: [], lat: 42.3601, lng: -71.0589, country: 'US', type: 'city' },
  { name: 'Seattle', aliases: [], lat: 47.6062, lng: -122.3321, country: 'US', type: 'city' },
  { name: 'Miami', aliases: [], lat: 25.7617, lng: -80.1918, country: 'US', type: 'city' },
  { name: 'Atlanta', aliases: [], lat: 33.7490, lng: -84.3880, country: 'US', type: 'city' },
  { name: 'Denver', aliases: [], lat: 39.7392, lng: -104.9903, country: 'US', type: 'city' },

  // International Cities
  { name: 'London', aliases: [], lat: 51.5074, lng: -0.1278, country: 'UK', type: 'city' },
  { name: 'Paris', aliases: [], lat: 48.8566, lng: 2.3522, country: 'France', type: 'city' },
  { name: 'Berlin', aliases: [], lat: 52.5200, lng: 13.4050, country: 'Germany', type: 'city' },
  { name: 'Madrid', aliases: [], lat: 40.4168, lng: -3.7038, country: 'Spain', type: 'city' },
  { name: 'Rome', aliases: [], lat: 41.9028, lng: 12.4964, country: 'Italy', type: 'city' },
  { name: 'Moscow', aliases: [], lat: 55.7558, lng: 37.6173, country: 'Russia', type: 'city' },
  { name: 'St Petersburg', aliases: [], lat: 59.9343, lng: 30.3351, country: 'Russia', type: 'city' },
  { name: 'Tokyo', aliases: [], lat: 35.6762, lng: 139.6503, country: 'Japan', type: 'city' },
  { name: 'Beijing', aliases: ['Peking'], lat: 39.9042, lng: 116.4074, country: 'China', type: 'city' },
  { name: 'Shanghai', aliases: [], lat: 31.2304, lng: 121.4737, country: 'China', type: 'city' },
  { name: 'Hong Kong', aliases: [], lat: 22.3193, lng: 114.1694, country: 'China', type: 'city' },
  { name: 'Mumbai', aliases: ['Bombay'], lat: 19.0760, lng: 72.8777, country: 'India', type: 'city' },
  { name: 'Delhi', aliases: ['New Delhi'], lat: 28.7041, lng: 77.1025, country: 'India', type: 'city' },
  { name: 'Seoul', aliases: [], lat: 37.5665, lng: 126.9780, country: 'South Korea', type: 'city' },
  { name: 'Sydney', aliases: [], lat: -33.8688, lng: 151.2093, country: 'Australia', type: 'city' },
  { name: 'Melbourne', aliases: [], lat: -37.8136, lng: 144.9631, country: 'Australia', type: 'city' },
  { name: 'Toronto', aliases: [], lat: 43.6532, lng: -79.3832, country: 'Canada', type: 'city' },
  { name: 'Montreal', aliases: [], lat: 45.5017, lng: -73.5673, country: 'Canada', type: 'city' },
  { name: 'Vancouver', aliases: [], lat: 49.2827, lng: -123.1207, country: 'Canada', type: 'city' },
  { name: 'Mexico City', aliases: [], lat: 19.4326, lng: -99.1332, country: 'Mexico', type: 'city' },
  { name: 'São Paulo', aliases: [], lat: -23.5558, lng: -46.6396, country: 'Brazil', type: 'city' },
  { name: 'Buenos Aires', aliases: [], lat: -34.6037, lng: -58.3816, country: 'Argentina', type: 'city' },
  { name: 'Istanbul', aliases: [], lat: 41.0082, lng: 28.9784, country: 'Turkey', type: 'city' },
  { name: 'Dubai', aliases: [], lat: 25.2048, lng: 55.2708, country: 'UAE', type: 'city' },
  { name: 'Tel Aviv', aliases: [], lat: 32.0853, lng: 34.7818, country: 'Israel', type: 'city' },
  { name: 'Jerusalem', aliases: [], lat: 31.7683, lng: 35.2137, country: 'Israel', type: 'city' },
  { name: 'Cairo', aliases: [], lat: 30.0444, lng: 31.2357, country: 'Egypt', type: 'city' },
  { name: 'Singapore', aliases: [], lat: 1.3521, lng: 103.8198, country: 'Singapore', type: 'city' },
  { name: 'Bangkok', aliases: [], lat: 13.7563, lng: 100.5018, country: 'Thailand', type: 'city' },
]

interface LocationMatch {
  location: typeof LOCATIONS[0]
  score: number
  context: string
}

// Smart location extraction that scores by relevance
function extractBestLocation(title: string, description?: string): typeof LOCATIONS[0] | null {
  const matches: LocationMatch[] = []

  const titleLower = title.toLowerCase()
  const descLower = (description || '').toLowerCase()
  const fullText = `${title} ${description || ''}`.toLowerCase()

  for (const location of LOCATIONS) {
    const allNames = [location.name, ...location.aliases]

    for (const name of allNames) {
      const nameLower = name.toLowerCase()
      const regex = new RegExp(`\\b${nameLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')

      if (regex.test(fullText)) {
        let score = 0
        let context = ''

        // === SCORING ALGORITHM ===

        // 1. TITLE is worth way more than description
        if (regex.test(titleLower)) {
          score += 100
          context = 'title'

          // Extra points for being early in title (subject, not just mentioned)
          const titleIndex = titleLower.indexOf(nameLower)
          if (titleIndex < 20) score += 50
          if (titleIndex < 10) score += 30
        } else if (regex.test(descLower)) {
          score += 30
          context = 'description'
        }

        // 2. COUNTRY names score much higher than cities
        if (location.type === 'country') {
          score += 150
        } else if (location.type === 'city') {
          score += 50
        }

        // 3. POSSESSIVE patterns suggest subject ("Russia's military", "China's economy")
        const possessivePattern = new RegExp(`${nameLower}'s\\b`, 'i')
        if (possessivePattern.test(fullText)) {
          score += 80
          context += '+possessive'
        }

        // 4. PREPOSITION patterns ("in Russia", "from China", "to Ukraine")
        const inPattern = new RegExp(`\\bin ${nameLower}\\b`, 'i')
        const fromPattern = new RegExp(`\\bfrom ${nameLower}\\b`, 'i')
        const toPattern = new RegExp(`\\bto ${nameLower}\\b`, 'i')

        if (inPattern.test(fullText)) {
          score += 70
          context += '+in'
        }
        if (fromPattern.test(fullText)) {
          score += 60
          context += '+from'
        }
        if (toPattern.test(fullText)) {
          score += 40 // "to" is weaker (could be travel destination, not subject)
        }

        // 5. NATIONALITY/DEMONYM patterns ("Russian troops", "Chinese economy", "Israeli forces")
        const nationalityPattern = new RegExp(`\\b${nameLower}(n|ese|i|ian|ish)\\b`, 'i')
        if (nationalityPattern.test(fullText)) {
          score += 65
          context += '+nationality'
        }

        // 6. GOVERNMENT/MILITARY keywords nearby increase relevance
        const govPattern = new RegExp(`${nameLower}\\b.{0,30}\\b(government|military|troops|forces|president|minister|parliament)`, 'i')
        if (govPattern.test(fullText)) {
          score += 50
          context += '+gov'
        }

        // 7. NEGATIVE patterns decrease score (meeting locations, not subjects)
        const meetingPattern = new RegExp(`\\b(talks? in|meeting in|summit in|conference in)\\s+${nameLower}\\b`, 'i')
        if (meetingPattern.test(fullText)) {
          score -= 60
          context += '-meeting'
        }

        // 8. SOURCE patterns decrease score ("New York Times", "Washington Post")
        const sourcePattern = new RegExp(`${nameLower}\\s+(times|post|news|herald|tribune)`, 'i')
        if (sourcePattern.test(fullText)) {
          score -= 100
          context += '-source'
        }

        matches.push({
          location,
          score,
          context: `${name} (${score}pts: ${context})`
        })
      }
    }
  }

  if (matches.length === 0) return null

  // Sort by score (highest first) and return best match
  matches.sort((a, b) => b.score - a.score)

  // Debug: log top 3 matches for inspection
  if (matches[0].score > 0) {
    console.log(`"${title.substring(0, 60)}..."`)
    console.log(`  → ${matches[0].context}`)
    if (matches[1]) console.log(`  2nd: ${matches[1].context}`)
  }

  return matches[0].location
}

// Main execution
async function fixGeolocation() {
  console.log('🌍 Fixing geolocation for all stories...\n')

  // Get all stories
  const stories = await prisma.story.findMany()
  console.log(`📊 Found ${stories.length} stories to process\n`)

  let fixed = 0
  let unchanged = 0
  let noLocationFound = 0

  for (const story of stories) {
    const oldLocation = { lat: story.lat, lng: story.lng, country: story.country }

    // Extract best location
    const bestLocation = extractBestLocation(story.title, story.description || undefined)

    if (bestLocation) {
      // Check if location changed
      if (Math.abs(bestLocation.lat - story.lat) > 0.1 ||
          Math.abs(bestLocation.lng - story.lng) > 0.1) {

        // Update story location
        await prisma.story.update({
          where: { id: story.id },
          data: {
            lat: bestLocation.lat,
            lng: bestLocation.lng,
            country: bestLocation.country,
            city: bestLocation.type === 'city' ? bestLocation.name : undefined
          }
        })

        fixed++

        if (fixed % 50 === 0) {
          console.log(`  ✓ Fixed ${fixed} locations...`)
        }
      } else {
        unchanged++
      }
    } else {
      noLocationFound++
    }
  }

  console.log(`\n✅ Geolocation Fix Complete!`)
  console.log(`   Fixed: ${fixed} stories`)
  console.log(`   Unchanged: ${unchanged} stories`)
  console.log(`   No location found: ${noLocationFound} stories`)
  console.log(`\n📊 Coverage by continent:`)

  // Show distribution by region
  const regions = {
    'North America': await prisma.story.count({ where: { lat: { gte: 15 }, lng: { gte: -170, lte: -50 } } }),
    'Europe': await prisma.story.count({ where: { lat: { gte: 35, lte: 70 }, lng: { gte: -10, lte: 40 } } }),
    'Asia': await prisma.story.count({ where: { lat: { gte: -10, lte: 55 }, lng: { gte: 60, lte: 150 } } }),
    'Middle East': await prisma.story.count({ where: { lat: { gte: 12, lte: 43 }, lng: { gte: 25, lte: 65 } } }),
    'Africa': await prisma.story.count({ where: { lat: { gte: -35, lte: 37 }, lng: { gte: -18, lte: 52 } } }),
    'South America': await prisma.story.count({ where: { lat: { gte: -56, lte: 13 }, lng: { gte: -82, lte: -34 } } }),
    'Oceania': await prisma.story.count({ where: { lat: { gte: -48, lte: -10 }, lng: { gte: 110, lte: 180 } } }),
  }

  Object.entries(regions).forEach(([region, count]) => {
    console.log(`   ${region}: ${count} stories`)
  })
}

fixGeolocation()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
