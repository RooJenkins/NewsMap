'use client'

import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { realNewsTopics as topics } from '@/lib/mockData'
import type { TopicArticleData } from '@/types'

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

interface StoryPin {
  id: string
  name: string
  lat: number
  lng: number
  articleCount: number
  isBreaking: boolean
  importance: number
  data: TopicArticleData
  size: number
  color: string
}

interface ViewportBounds {
  north: number
  south: number
  east: number
  west: number
}

interface LocationBasedStory {
  title: string
  link: string
  pubDate: string
  source: string
  description?: string
  location: {
    lat: number
    lng: number
    city?: string
    country?: string
  }
  importance: number
  isBreaking: boolean
}

interface GlobeViewProps {
  onViewChange?: (view: string) => void
}

export default function GlobeView({ onViewChange }: GlobeViewProps = {}) {
  const globeRef = useRef<any>(null)
  const [allStories, setAllStories] = useState<LocationBasedStory[]>([])
  const [visibleStories, setVisibleStories] = useState<LocationBasedStory[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPin, setSelectedPin] = useState<any>(null)
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
  const [chatInput, setChatInput] = useState('')
  const [chatOpen, setChatOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [viewportBounds, setViewportBounds] = useState<ViewportBounds>({
    north: 90,
    south: -90,
    east: 180,
    west: -180
  })
  const [zoomLevel, setZoomLevel] = useState<string>('global')
  const lastViewportRef = useRef({ lat: 0, lng: 0, altitude: 2.5 })

  // Load all stories once
  useEffect(() => {
    fetch('/api/news/all')
      .then(res => res.json())
      .then(data => {
        console.log('✅ Loaded', data.count, 'total stories')
        setAllStories(data.stories || [])
        setLoading(false)
        // Initial filter
        filterStoriesByViewport(viewportBounds, data.stories || [])
      })
      .catch(error => {
        console.error('Error loading stories:', error)
        setLoading(false)
      })
  }, [])

  // Filter stories based on viewport
  const filterStoriesByViewport = (bounds: ViewportBounds, stories: LocationBasedStory[] = allStories) => {
    // Filter stories within bounds
    const inView = stories.filter(story => {
      const lat = story.location.lat
      const lng = story.location.lng
      return lat >= bounds.south && lat <= bounds.north &&
             lng >= bounds.west && lng <= bounds.east
    })

    // Sort by importance
    const sorted = inView.sort((a, b) => b.importance - a.importance)

    // Take top 20
    const top20 = sorted.slice(0, 20)

    console.log(`📍 ${inView.length} in viewport, showing top ${top20.length}`)

    // Determine zoom level based on bounds size
    const latDiff = bounds.north - bounds.south
    const lngDiff = bounds.east - bounds.west
    const area = latDiff * lngDiff

    let zoom = 'global'
    if (area < 50) zoom = 'neighborhood'
    else if (area < 1000) zoom = 'city'
    else if (area < 10000) zoom = 'regional'

    setZoomLevel(zoom)
    setVisibleStories(top20)
  }

  // Update viewport bounds when camera moves - AUTOMATIC
  useEffect(() => {
    const updateViewport = () => {
      const globe = globeRef.current
      if (!globe) {
        console.log('⏳ Globe not ready yet...')
        return
      }

      try {
        // Get current point of view (lat, lng, altitude)
        const pov = globe.pointOfView()
        if (!pov || pov.lat === undefined || pov.lng === undefined) {
          console.log('⚠️ POV not ready:', pov)
          return
        }

        const { lat, lng, altitude } = pov

        // Check if viewport has changed significantly
        const lastView = lastViewportRef.current
        const latChanged = Math.abs(lat - lastView.lat) > 2
        const lngChanged = Math.abs(lng - lastView.lng) > 2
        const altChanged = Math.abs(altitude - lastView.altitude) > 0.1

        console.log('📍 Current:', { lat: lat.toFixed(1), lng: lng.toFixed(1), alt: altitude.toFixed(2) },
                    'Changed:', { lat: latChanged, lng: lngChanged, alt: altChanged })

        if (latChanged || lngChanged || altChanged) {
          console.log('✨✨✨ VIEWPORT CHANGED! Fetching new stories...')

          // Update last viewport
          lastViewportRef.current = { lat, lng, altitude }

          // Calculate viewport size based on altitude
          // altitude 0.5 = close, altitude 2.5 = far
          const halfView = Math.min(altitude * 35, 90) // Scale altitude to degrees

          // Calculate bounds around center point
          const bounds: ViewportBounds = {
            north: Math.min(90, lat + halfView),
            south: Math.max(-90, lat - halfView),
            east: Math.min(180, lng + halfView),
            west: Math.max(-180, lng - halfView)
          }

          console.log('📦 New bounds:', bounds)

          setViewportBounds(bounds)
          filterStoriesByViewport(bounds)
        }
      } catch (error) {
        console.error('❌ Error updating viewport:', error)
      }
    }

    // Poll every second for smooth updates
    const interval = setInterval(updateViewport, 1000)

    // Run once immediately after globe loads
    const timeout = setTimeout(updateViewport, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, []) // Empty dependency array - runs once and sets up interval

  // Setup globe controls (no auto-rotate for better user control)
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls()
      controls.autoRotate = false
      controls.enableDamping = true
      controls.dampingFactor = 0.1
      controls.rotateSpeed = 0.5
    }
  }, [])

  // Handle AI chat
  const handleSendMessage = async () => {
    if (!chatInput.trim() || !selectedPin) return

    const userMessage = chatInput.trim()
    setChatInput('')
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsTyping(true)

    setTimeout(() => {
      let response = ''

      if (userMessage.toLowerCase().includes('what') || userMessage.toLowerCase().includes('summary')) {
        response = selectedPin.description || `${selectedPin.title} - ${selectedPin.source}`
      } else if (userMessage.toLowerCase().includes('where')) {
        if (selectedPin.location?.city) {
          response = `This story is from ${selectedPin.location.city}, ${selectedPin.location.country}.`
        } else if (selectedPin.location?.country) {
          response = `This story is from ${selectedPin.location.country}.`
        } else {
          response = `This is a global news story.`
        }
      } else if (userMessage.toLowerCase().includes('when')) {
        response = `This story was published ${new Date(selectedPin.pubDate).toLocaleString()}.`
      } else if (userMessage.toLowerCase().includes('why') || userMessage.toLowerCase().includes('important')) {
        response = `This story has an importance rating of ${(selectedPin.importance * 100).toFixed(0)}%. ${selectedPin.isBreaking ? 'It is currently marked as breaking news.' : 'It is one of the top stories in this region.'}`
      } else if (userMessage.toLowerCase().includes('article') || userMessage.toLowerCase().includes('source')) {
        response = `This story is from ${selectedPin.source}. You can read the full article at the link provided.`
      } else {
        response = `${selectedPin.title} - ${selectedPin.isBreaking ? 'This is breaking news from' : 'This story is from'} ${selectedPin.source}. ${selectedPin.description || 'Click to read more.'}`
      }

      setChatMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsTyping(false)
    }, 1000)
  }

  // Convert visible stories to pins for the globe
  const storyPins = visibleStories.map((story) => ({
    ...story,
    lat: story.location.lat,
    lng: story.location.lng,
    size: 0.3 + (story.importance * 0.7),
    color: story.isBreaking ? '#EF4444' : '#F59E0B',
    name: story.title,
  }))

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white text-xl">Loading global news...</div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Globe */}
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

        // Story pins
        pointsData={storyPins}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={(d: any) => d.size * 0.01}
        pointRadius={(d: any) => d.size}
        pointLabel={(d: any) => `
          <div style="background: rgba(0,0,0,0.8); padding: 12px; border-radius: 8px; color: white; max-width: 300px;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${d.name}</div>
            <div style="font-size: 12px; color: #93c5fd;">${d.articleCount} articles</div>
            ${d.isBreaking ? '<div style="color: #ef4444; font-size: 11px; margin-top: 4px;">🔴 BREAKING NEWS</div>' : ''}
          </div>
        `}
        onPointClick={(point: any) => setSelectedPin(point as StoryPin)}

        // Atmosphere
        atmosphereColor="#88ccff"
        atmosphereAltitude={0.15}

        // Performance
        rendererConfig={{ antialias: true, alpha: false }}
      />

      {/* Sidebar - Story Details */}
      {selectedPin && (
        <div className="absolute top-0 right-0 w-96 h-full bg-white shadow-2xl overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{selectedPin.title || selectedPin.name}</h2>
              <button
                onClick={() => setSelectedPin(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Source and location */}
            <div className="mb-4 space-y-2">
              <div className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
                {selectedPin.source}
              </div>

              {selectedPin.location?.city && (
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold ml-2">
                  📍 {selectedPin.location.city}, {selectedPin.location.country}
                </div>
              )}

              {/* Breaking badge */}
              {selectedPin.isBreaking && (
                <div className="inline-block px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold ml-2">
                  🔴 BREAKING
                </div>
              )}
            </div>

            {/* Published date */}
            <div className="text-xs text-gray-500 mb-4">
              Published {new Date(selectedPin.pubDate).toLocaleString()}
            </div>

            {/* Description */}
            {selectedPin.description && (
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 mb-2">STORY</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedPin.description}
                </p>
              </div>
            )}

            {/* Read full article */}
            <a
              href={selectedPin.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-lg font-semibold transition-colors mb-4"
            >
              Read Full Article →
            </a>

            {/* Importance meter */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-700 mb-2">IMPORTANCE</h3>
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600"
                  style={{ width: `${selectedPin.importance * 100}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {(selectedPin.importance * 100).toFixed(0)}% - {
                  selectedPin.importance > 0.7 ? 'Major Story' :
                  selectedPin.importance > 0.5 ? 'Significant Coverage' :
                  'Regional News'
                }
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Controls Info */}
      <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 text-white p-4 rounded-lg">
        <h3 className="font-bold mb-2 flex items-center">
          🌍 Interactive Globe
        </h3>
        <div className="text-sm space-y-1">
          <div>• <span className="font-semibold">Drag</span> to rotate the globe</div>
          <div>• <span className="font-semibold">Scroll</span> to zoom in/out</div>
          <div>• <span className="font-semibold">Click pins</span> for story details</div>
        </div>
      </div>

      {/* Viewport Info */}
      <div className="absolute top-6 left-6 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-xs">
        <div className="text-sm space-y-2">
          <div>
            <div className="font-bold mb-1 flex items-center gap-2">
              STORIES IN VIEW
              {loading && (
                <div className="animate-spin h-3 w-3 border-2 border-white border-t-transparent rounded-full"></div>
              )}
            </div>
            <div className="text-2xl font-bold">
              {storyPins.length}
              <span className="text-lg text-gray-400 ml-1">stories</span>
            </div>
          </div>

          {/* Zoom Level Badge */}
          <div>
            <div className="inline-block px-2 py-1 bg-blue-500 bg-opacity-80 rounded text-xs font-bold uppercase">
              {zoomLevel === 'global' && '🌍 Global View'}
              {zoomLevel === 'regional' && '🗺️ Regional View'}
              {zoomLevel === 'city' && '🏙️ City View'}
              {zoomLevel === 'neighborhood' && '📍 Neighborhood View'}
            </div>
          </div>

          <div className="text-xs text-green-400 font-semibold flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Auto-updating as you explore
          </div>
        </div>
      </div>

      {/* View Toggle Button */}
      {onViewChange && (
        <button
          onClick={() => onViewChange('map')}
          className="absolute bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold z-10"
        >
          🗺️ Switch to Map
        </button>
      )}

      {/* AI Chat Button */}
      {selectedPin && !chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold flex items-center gap-2"
        >
          <span>💬</span>
          <span>Ask AI about this story</span>
        </button>
      )}

      {/* AI Chat Box */}
      {chatOpen && selectedPin && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-t-2xl flex items-center justify-between">
            <div className="font-semibold">AI Chat - {(selectedPin.title || selectedPin.name || '').slice(0, 30)}...</div>
            <button onClick={() => setChatOpen(false)} className="text-white hover:text-gray-200">
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                  AI is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about this story..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
