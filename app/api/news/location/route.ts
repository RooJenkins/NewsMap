import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Cache for location-based news
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 2 * 60 * 1000 // 2 minutes

interface ViewportBounds {
  north: number
  south: number
  east: number
  west: number
}

function calculateViewportArea(bounds: ViewportBounds): number {
  const latDiff = bounds.north - bounds.south
  const lngDiff = bounds.east - bounds.west
  return Math.abs(latDiff * lngDiff)
}

function determineZoomLevel(area: number): 'global' | 'regional' | 'city' | 'neighborhood' {
  if (area > 10000) return 'global' // Whole world view
  if (area > 1000) return 'regional' // Continent view
  if (area > 50) return 'city' // City view
  return 'neighborhood' // Zoomed into neighborhood
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const north = parseFloat(searchParams.get('north') || '90')
  const south = parseFloat(searchParams.get('south') || '-90')
  const east = parseFloat(searchParams.get('east') || '180')
  const west = parseFloat(searchParams.get('west') || '-180')

  const bounds: ViewportBounds = { north, south, east, west }
  const cacheKey = `${north.toFixed(1)},${south.toFixed(1)},${east.toFixed(1)},${west.toFixed(1)}`

  // Check cache
  const cached = cache.get(cacheKey)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json(cached.data)
  }

  try {
    // Calculate zoom level
    const area = calculateViewportArea(bounds)
    const zoomLevel = determineZoomLevel(area)

    console.log(`🔍 Zoom Level: ${zoomLevel}, Area: ${area.toFixed(2)}`)

    // Determine story count and importance threshold based on zoom
    let storyCount = 20
    let minImportance = 0.3

    switch (zoomLevel) {
      case 'global':
        storyCount = 25
        minImportance = 0.6 // Only show important global stories
        break
      case 'regional':
        storyCount = 20
        minImportance = 0.4
        break
      case 'city':
        storyCount = 15
        minImportance = 0.3
        break
      case 'neighborhood':
        storyCount = 12
        minImportance = 0.2 // Show more local stories
        break
    }

    // Query stories within viewport bounds
    let stories = await prisma.story.findMany({
      where: {
        lat: {
          gte: bounds.south,
          lte: bounds.north,
        },
        lng: {
          gte: bounds.west,
          lte: bounds.east,
        },
        importance: {
          gte: minImportance,
        },
      },
      orderBy: [
        { importance: 'desc' },
        { pubDate: 'desc' },
      ],
      take: storyCount * 3, // Get more than needed for selection
    })

    console.log(`📍 Found ${stories.length} stories in viewport`)

    // If we don't have enough stories, expand the search
    if (stories.length < 10) {
      console.log(`⚠️  Only ${stories.length} stories found, expanding search...`)

      // Calculate expanded bounds (increase by 50%)
      const latExpansion = (bounds.north - bounds.south) * 0.5
      const lngExpansion = (bounds.east - bounds.west) * 0.5

      stories = await prisma.story.findMany({
        where: {
          lat: {
            gte: Math.max(-90, bounds.south - latExpansion),
            lte: Math.min(90, bounds.north + latExpansion),
          },
          lng: {
            gte: Math.max(-180, bounds.west - lngExpansion),
            lte: Math.min(180, bounds.east + lngExpansion),
          },
          importance: {
            gte: Math.max(0.1, minImportance - 0.2), // Lower importance threshold
          },
        },
        orderBy: [
          { importance: 'desc' },
          { pubDate: 'desc' },
        ],
        take: Math.max(10, storyCount),
      })

      console.log(`✓ Expanded search found ${stories.length} stories`)
    }

    // Intelligent story selection based on zoom level
    let selectedStories = stories

    if (zoomLevel === 'global') {
      // For global view: prioritize diversity across regions
      const regionGroups = new Map<string, typeof stories>()
      stories.forEach(story => {
        const region = story.region || 'Unknown'
        if (!regionGroups.has(region)) regionGroups.set(region, [])
        regionGroups.get(region)!.push(story)
      })

      selectedStories = []
      const regionsArray = Array.from(regionGroups.values())
      let regionIndex = 0

      // Round-robin selection from each region
      while (selectedStories.length < storyCount && selectedStories.length < stories.length) {
        const regionStories = regionsArray[regionIndex % regionsArray.length]
        if (regionStories && regionStories.length > 0) {
          selectedStories.push(regionStories.shift()!)
        }
        regionIndex++
      }
    } else if (zoomLevel === 'city' || zoomLevel === 'neighborhood') {
      // For city/neighborhood: show mix of breaking + important + recent
      const breaking = stories.filter(s => s.isBreaking).slice(0, 5)
      const important = stories.filter(s => !s.isBreaking && s.importance > 0.7).slice(0, 5)
      const recent = stories.filter(s => !s.isBreaking && s.importance <= 0.7).slice(0, 10)

      selectedStories = [...breaking, ...important, ...recent].slice(0, storyCount)
    } else {
      // Regional: just use top stories by importance
      selectedStories = stories.slice(0, storyCount)
    }

    // Format stories for response
    const formattedStories = selectedStories.map(story => ({
      id: story.id,
      title: story.title,
      link: story.link,
      pubDate: story.pubDate.toISOString(),
      source: story.source,
      description: story.description,
      location: {
        lat: story.lat,
        lng: story.lng,
        city: story.city,
        country: story.country,
      },
      importance: story.importance,
      isBreaking: story.isBreaking,
      category: story.category,
    }))

    // Get unique cities in view
    const citiesInView = Array.from(new Set(
      stories.map(s => s.city).filter((city): city is string => city !== null)
    ))

    const responseData = {
      bounds,
      zoomLevel,
      area: area.toFixed(2),
      citiesInView: citiesInView.slice(0, 10),
      stories: formattedStories,
      count: formattedStories.length,
      totalAvailable: stories.length,
    }

    // Cache the result
    cache.set(cacheKey, {
      data: responseData,
      timestamp: Date.now(),
    })

    console.log(`✅ Returning ${formattedStories.length} stories\n`)

    return NextResponse.json(responseData)
  } catch (error) {
    console.error('❌ Error fetching location-based news:', error)
    return NextResponse.json(
      { error: 'Failed to fetch location-based news' },
      { status: 500 }
    )
  }
}
