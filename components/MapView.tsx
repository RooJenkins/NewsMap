'use client'

import { useEffect, useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const useMapEvents = dynamic(() => import('react-leaflet').then(mod => mod.useMapEvents), { ssr: false })
const PillMarker = dynamic(() => import('./PillMarker'), { ssr: false })
const ExpandedPill = dynamic(() => import('./ExpandedPill'), { ssr: false })

interface Story {
  id: string
  title: string
  link: string
  pubDate: string
  source: string
  description?: string
  aiSummary?: string
  sourceQuality?: string
  location: {
    lat: number
    lng: number
    city?: string
    country?: string
  }
  importance: number
  isBreaking: boolean
  category?: string
}

interface MapViewProps {
  onViewChange?: (view: string) => void
}

function MapEventHandler({ onBoundsChange }: { onBoundsChange: (bounds: any) => void }) {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds()
      onBoundsChange({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
        zoom: map.getZoom()
      })
    },
    zoomend: () => {
      const bounds = map.getBounds()
      onBoundsChange({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
        zoom: map.getZoom()
      })
    }
  })

  return null
}

// Function to add offset to prevent overlaps - EXTREME spacing for pill widths
function calculateOffset(index: number, total: number, zoom: number): [number, number] {
  if (total === 1) return [0, 0]

  // EXTREME spacing to account for pill widths (pills are 120-280px wide!)
  // At zoom 2: 25-60 degrees, at zoom 10: 1-2.5 degrees, at zoom 15: 0.3-0.8 degree
  const zoomFactor = Math.pow(2, 2 - zoom) // Exponential decay with zoom
  const baseRadius = Math.max(0.3, Math.min(30.0, zoomFactor * 8.0))

  // Many spiral rotations to spread pills around circle
  const spiralFactor = 5.0
  const angle = (index / total) * 2 * Math.PI * spiralFactor

  // EXTREME progressive radius - each pill much further from center
  const progressiveFactor = 1 + (index / total) * 4.0
  const radius = baseRadius * progressiveFactor

  // Larger jitter to ensure no stacking
  const jitterLat = (Math.sin(index * 7.13) * 0.5) * baseRadius
  const jitterLng = (Math.cos(index * 5.79) * 0.5) * baseRadius

  return [
    Math.cos(angle) * radius + jitterLat,
    Math.sin(angle) * radius + jitterLng
  ]
}

// Group stories by approximate location (rounded to 2 decimals = ~1km precision)
function groupStoriesByLocation(stories: Story[]) {
  const groups: { [key: string]: Story[] } = {}

  stories.forEach(story => {
    const key = `${story.location.lat.toFixed(2)},${story.location.lng.toFixed(2)}`
    if (!groups[key]) {
      groups[key] = []
    }
    groups[key].push(story)
  })

  return groups
}

export default function MapView({ onViewChange }: MapViewProps) {
  const [allStories, setAllStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const [mapReady, setMapReady] = useState(false)
  const [mapBounds, setMapBounds] = useState({
    north: 90,
    south: -90,
    east: 180,
    west: -180,
    zoom: 2
  })
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>(null)

  // Check when Leaflet is available
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).L) {
      setMapReady(true)
    }
  }, [])

  // Load all stories once
  useEffect(() => {
    fetch('/api/news/all')
      .then(res => res.json())
      .then(data => {
        console.log('✅ Loaded', data.count, 'stories for map')
        setAllStories(data.stories || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading stories:', error)
        setLoading(false)
      })
  }, [])

  // Filter stories based on viewport and calculate positions
  const storiesWithPositions = useMemo(() => {
    // Filter stories within viewport bounds
    const inView = allStories.filter(story => {
      const lat = story.location.lat
      const lng = story.location.lng
      return lat >= mapBounds.south && lat <= mapBounds.north &&
             lng >= mapBounds.west && lng <= mapBounds.east
    })

    // Sort by importance
    const sorted = [...inView].sort((a, b) => b.importance - a.importance)

    // Zoom-based filtering: show fewer stories at low zoom, more at high zoom
    // At low zoom, only show major outlets. As you zoom in, show medium and local
    const zoom = mapBounds.zoom
    let maxStories: number
    let maxPerLocation: number
    let allowedSourceQualities: string[]

    if (zoom <= 3) {
      maxStories = 100 // World view: top 100 stories
      maxPerLocation = 3 // Max 3 per location to prevent overlap
      allowedSourceQualities = ['major', 'medium'] // Major + medium outlets
    } else if (zoom <= 5) {
      maxStories = 200 // Continental view: top 200
      maxPerLocation = 5 // Max 5 per location
      allowedSourceQualities = ['major', 'medium'] // Major + medium outlets
    } else if (zoom <= 7) {
      maxStories = 400 // Regional view: top 400
      maxPerLocation = 8 // Max 8 per location
      allowedSourceQualities = ['major', 'medium'] // Major + medium outlets
    } else if (zoom <= 9) {
      maxStories = 800 // City view: top 800
      maxPerLocation = 12 // Max 12 per location
      allowedSourceQualities = ['major', 'medium', 'local'] // All outlets
    } else {
      maxStories = 1500 // Street view: top 1500
      maxPerLocation = 20 // Max 20 per location
      allowedSourceQualities = ['major', 'medium', 'local'] // All outlets
    }

    // Filter by source quality based on zoom
    const qualityFiltered = sorted.filter(story =>
      allowedSourceQualities.includes(story.sourceQuality || 'medium')
    )

    // Take top N stories based on zoom
    const topStories = qualityFiltered.slice(0, maxStories)

    // Group by location to calculate offsets and limit per location
    const grouped = groupStoriesByLocation(topStories)

    // Limit stories per location
    const limitedStories: Story[] = []
    Object.values(grouped).forEach(group => {
      limitedStories.push(...group.slice(0, maxPerLocation))
    })

    // Sort again by importance after limiting
    const finalSorted = limitedStories.sort((a, b) => b.importance - a.importance)

    // Calculate positions for each story to avoid overlap
    const withPositions = finalSorted.map((story, globalIndex) => {
      const key = `${story.location.lat.toFixed(2)},${story.location.lng.toFixed(2)}`
      const group = grouped[key]
      const localIndex = group.indexOf(story)

      const [latOffset, lngOffset] = calculateOffset(localIndex, Math.min(group.length, maxPerLocation), zoom)

      return {
        ...story,
        displayLat: story.location.lat + latOffset,
        displayLng: story.location.lng + lngOffset,
        isTop20: globalIndex < 20,
        isTop5: globalIndex < 5
      }
    })

    console.log(`📍 Zoom ${zoom.toFixed(1)}: Showing ${withPositions.length} stories (max ${maxStories}, ${maxPerLocation} per location)`)
    console.log(`   Quality filter: [${allowedSourceQualities.join(', ')}]`)
    console.log(`   In viewport: ${inView.length}, After quality filter: ${qualityFiltered.length}`)

    return withPositions
  }, [allStories, mapBounds])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white text-xl">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-screen">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        whenReady={() => setMapReady(true)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapEventHandler onBoundsChange={setMapBounds} />

        {/* Pill-shaped news bulletins - only render when map is ready */}
        {mapReady && storiesWithPositions.map((story) => {
          // Smart truncation: keep full headline if reasonable, otherwise truncate smartly
          let displayTitle = story.title

          // Only truncate if longer than 70 characters
          if (story.title.length > 70) {
            // Try to truncate at last space before 65 chars for cleaner break
            const truncateAt = story.title.lastIndexOf(' ', 65)
            displayTitle = story.title.substring(0, truncateAt > 40 ? truncateAt : 65) + '...'
          }

          return (
            <PillMarker
              key={story.id}
              position={[story.displayLat, story.displayLng]}
              title={displayTitle}
              fullTitle={story.title}
              source={story.source}
              city={story.location?.city}
              country={story.location?.country}
              isBreaking={story.isBreaking}
              isTop5={story.isTop5}
              isTop20={story.isTop20}
              onClick={() => setExpandedStoryId(story.id)}
            />
          )
        })}
      </MapContainer>

      {/* Stats Overlay */}
      <div className="absolute top-6 left-6 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-xs z-10">
        <div className="text-sm space-y-2">
          <div>
            <div className="font-bold mb-1">STORIES IN VIEW</div>
            <div className="text-2xl font-bold">
              {storiesWithPositions.length}
              <span className="text-lg text-gray-400 ml-1">bulletins</span>
            </div>
            <div className="text-sm text-yellow-400 mt-1">
              ⭐ Top {storiesWithPositions.filter(s => s.isTop20).length} highlighted
            </div>
            <div className="text-xs text-gray-300 mt-1">
              🔍 Zoom {mapBounds.zoom.toFixed(1)} • Zoom in for more stories
            </div>
          </div>
          <div>
            <div className="inline-block px-2 py-1 bg-blue-500 bg-opacity-80 rounded text-xs font-bold">
              🗺️ WORLD MAP
            </div>
          </div>
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-12 h-3 rounded-full bg-red-500"></div>
              <span>Breaking News</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-3 rounded-full bg-amber-500"></div>
              <span>Top 20 Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-3 rounded-full bg-blue-400"></div>
              <span>Other Stories</span>
            </div>
          </div>
          <div className="text-xs text-green-400 font-semibold flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Dynamic clustering • No overlap
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      {expandedStoryId && (
        <ExpandedPill
          story={{
            id: expandedStoryId,
            title: allStories.find(s => s.id === expandedStoryId)?.title || '',
            source: allStories.find(s => s.id === expandedStoryId)?.source || '',
            aiSummary: allStories.find(s => s.id === expandedStoryId)?.aiSummary,
            link: allStories.find(s => s.id === expandedStoryId)?.link || '',
            pubDate: allStories.find(s => s.id === expandedStoryId)?.pubDate || '',
            city: allStories.find(s => s.id === expandedStoryId)?.location?.city,
            country: allStories.find(s => s.id === expandedStoryId)?.location?.country,
            isBreaking: allStories.find(s => s.id === expandedStoryId)?.isBreaking || false
          }}
          onClose={() => setExpandedStoryId(null)}
        />
      )}

    </div>
  )
}
