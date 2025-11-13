'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const GeoJSON = dynamic(() => import('react-leaflet').then(mod => mod.GeoJSON), { ssr: false })
const LocationMarker = dynamic(() => import('./LocationMarker'), { ssr: false })
const LocationSummaryPanel = dynamic(() => import('./LocationSummaryPanel'), { ssr: false })

interface LocationSummary {
  id: string
  name: string
  type: string
  country: string
  location: {
    lat: number
    lng: number
  }
  summary: string
  issues: string[]
  topStories: Array<{
    title: string
    source: string
    link: string
    pubDate: string
  }>
  storyCount: number
  updatedAt: string
}

interface MapViewLocationsProps {
  onViewChange?: (view: string) => void
  onPanelStateChange?: (isOpen: boolean) => void
}

type NewsCategory =
  | 'all'
  | 'politics'
  | 'economy'
  | 'technology'
  | 'climate'
  | 'culture'
  | 'sports'
  | 'travel'
  | 'food'
  | 'healthcare'
  | 'education'
  | 'crime'
  | 'energy'
  | 'entertainment'
  | 'lifestyle'
  | 'infrastructure'
  | 'science'
  | 'humanrights'
  | 'military'
  | 'realestate'

export default function MapViewLocations({ onViewChange, onPanelStateChange }: MapViewLocationsProps) {
  const [locations, setLocations] = useState<LocationSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [mapReady, setMapReady] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<LocationSummary | null>(null)
  const [countriesGeoJSON, setCountriesGeoJSON] = useState<any>(null)
  const [selectedCountryName, setSelectedCountryName] = useState<string | null>(null)
  const [hoveredCountryName, setHoveredCountryName] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null)
  const [tooltipContent, setTooltipContent] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('all')

  // Check when Leaflet is available
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).L) {
      setMapReady(true)
    }
  }, [])

  // Load all location summaries based on selected category
  useEffect(() => {
    const categoryParam = selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''
    fetch(`/api/locations/summaries${categoryParam}`)
      .then(res => res.json())
      .then(data => {
        console.log('✅ Loaded', data.count, 'location summaries for category:', selectedCategory)
        setLocations(data.locations || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading location summaries:', error)
        setLoading(false)
      })
  }, [selectedCategory])

  // Load country boundaries GeoJSON
  useEffect(() => {
    fetch('/data/countries.geojson')
      .then(res => res.json())
      .then(data => {
        console.log('✅ Loaded country boundaries')
        setCountriesGeoJSON(data)
      })
      .catch(error => {
        console.error('Error loading country boundaries:', error)
      })
  }, [])

  // Map GeoJSON country names to our location names
  const getLocationByGeoJSONName = (geoName: string): LocationSummary | undefined => {
    // Direct match first
    let location = locations.find(loc =>
      loc.type === 'country' && loc.name.toLowerCase() === geoName.toLowerCase()
    )

    if (location) return location

    // Handle common name variations
    const nameMap: { [key: string]: string } = {
      'United States of America': 'United States',
      'Russian Federation': 'Russia',
      'United Kingdom': 'United Kingdom',
      'South Korea': 'South Korea',
      'North Korea': 'North Korea',
      'Czech Republic': 'Czech Republic',
      'Democratic Republic of the Congo': 'Democratic Republic of Congo',
      'Republic of the Congo': 'Republic of Congo',
      'Dominican Rep.': 'Dominican Republic',
      // Add more mappings as needed
    }

    const mappedName = nameMap[geoName]
    if (mappedName) {
      location = locations.find(loc =>
        loc.type === 'country' && loc.name === mappedName
      )
    }

    return location
  }

  // Get short summary for tooltip
  const getShortSummary = (countryName: string): string => {
    const summaries: { [key: string]: string } = {
      'Afghanistan': 'Taliban rule, humanitarian catastrophe',
      'Algeria': 'Tebboune\'s authoritarian stagnation',
      'Angola': 'Oil dependency, 50 years struggling',
      'Argentina': 'Milei\'s experiment, train derailments',
      'Australia': 'China tensions, Indonesia treaty',
      'Austria': 'Far-right victory, coalition deadlock, recession',
      'Bahrain': 'US-Iran tightrope, fiscal crisis, oil dependence',
      'Bangladesh': 'Yunus transition, inflation crisis, India tensions',
      'Belgium': 'Far-right rise, climate abstention, Russian assets veto',
      'Bolivia': 'Paz\'s capitalist pivot, lithium stakes',
      'Brazil': 'Lula\'s climate contradictions, economic storms',
      'Bulgaria': 'Election paralysis, euro accession race',
      'Cambodia': 'Hun Manet dynasty, China dependence',
      'Canada': 'Trudeau collapse, housing crisis',
      'Chile': 'Kast vs Jara, right-wing surge',
      'China': 'Economic slowdown, Taiwan tensions',
      'Colombia': 'Petro\'s peace process failing',
      'Costa Rica': 'Growth slowdown, Intel exit, election pressures',
      'Croatia': 'Milanovic\'s EU-NATO skepticism, Serbia obstruction',
      'Cuba': 'Energy death spiral, blackouts',
      'Czech Republic': 'Babis returns with far-right coalition',
      'Democratic Republic of Congo': 'M23 entrenchment, peace talks, political repression',
      'Denmark': 'Trump eyes Greenland, Arctic security surge',
      'Dominican Republic': 'Growth slowdown, fiscal reform deadlock, tourism push',
      'Ecuador': 'Nov 16 referendum, crime surge, democratic backsliding',
      'Egypt': 'Parliamentary elections, economic crisis, Gaza mediation',
      'El Salvador': 'Bukele\'s gang crackdown, Bitcoin retreat, IMF pressure',
      'Estonia': 'Russian hybrid war, NATO tensions, 5.4% defense spending',
      'Ethiopia': 'Tigray war reignites, Pretoria deal collapse',
      'Fiji': 'Climate advocacy at COP30, economic moderation',
      'Finland': 'NATO frontline, Russian hybrid warfare, border militarization',
      'France': 'Budget crisis, Le Pen ascendancy',
      'Germany': 'Eastern Europe exports, China diplomacy',
      'Ghana': 'Mahama\'s IMF reset, debt crisis, austerity',
      'Greece': 'Migration surge, asylum suspension, tourism labor crisis',
      'Guatemala': 'Arévalo vs Porras, judicial capture, US dilemma',
      'Haiti': 'Gang control, 1.3M displaced, state failure',
      'Honduras': 'Nov 30 elections, corruption failures, Trump aid cuts',
      'Hungary': 'Trump\'s Russia exemption, April 2026 vote, EU obstruction',
      'India': 'Pakistan bombings, China border',
      'Indonesia': 'Soeharto "hero", dynasty politics, democratic backsliding',
      'Iran': 'Economic collapse, nationwide protests, energy crisis',
      'Iraq': 'Nov 11 elections, Sadr boycott, Kurdistan paralysis',
      'Ireland': 'Housing crisis persists, Connolly presidency, 26B surplus',
      'Israel': 'Post-ceasefire demolitions, hostage trauma',
      'Jordan': 'Annexation threat, refugee burden, Syria chaos',
      'Kazakhstan': 'Tokayev hedges: $17B US deals, Putin partnership, 6.4% growth',
      'Kenya': 'Ruto: 5% growth, 65 dead protesters, 89 disappearances',
      'Kuwait': 'Parliament suspended, 42K citizenships revoked, economic surge',
      'Laos': 'Methanol deaths, Chinese railway boom, $950M debt trap',
      'Italy': 'Meloni\'s stability, migration flip-flop',
      'Japan': 'Takaichi\'s hawkish government, demographic crisis',
      'Mexico': 'Sheinbaum\'s cartel wars, Trump tariffs',
      'Peru': 'Political collapse, crime surge',
      'Poland': 'Ukraine support, Belarus tensions',
      'Russia': 'Ukraine attrition, North Korea alliance',
      'South Korea': 'Yoon indictment, North Korea threats',
      'Spain': 'Valencia floods, Catalan independence collapse',
      'Turkey': 'Kurdish paradox, Syria power play',
      'Ukraine': 'Trump\'s failed peace, grinding battlefield',
      'United Kingdom': 'Starmer\'s unpopularity, NHS crisis',
      'United States': 'Trump\'s tariff wars, Ukraine pressure',
      'Venezuela': 'Trump\'s gunboat diplomacy, surveillance state'
    }
    return summaries[countryName] || 'No summary available'
  }

  // Style function for country polygons
  const countryStyle = (feature: any) => {
    const countryName = feature?.properties?.ADMIN || feature?.properties?.NAME
    const location = getLocationByGeoJSONName(countryName)

    // Don't show countries without summaries
    if (!location) {
      return {
        fillColor: 'transparent',
        fillOpacity: 0,
        color: '#e0e0e0',
        weight: 0.5,
        opacity: 0.3
      }
    }

    const isSelected = selectedCountryName === countryName
    const isHovered = hoveredCountryName === countryName

    if (isSelected) {
      // Selected state: Solid blue fill with thick border
      return {
        fillColor: '#0F5499',
        fillOpacity: 0.6,
        color: '#0F5499',
        weight: 3,
        opacity: 1
      }
    } else if (isHovered) {
      // Hover state: Darker border
      return {
        fillColor: 'transparent',
        fillOpacity: 0,
        color: '#999',
        weight: 2,
        opacity: 1
      }
    } else {
      // Default state: Subtle gray border
      return {
        fillColor: 'transparent',
        fillOpacity: 0,
        color: '#ccc',
        weight: 1,
        opacity: 0.6
      }
    }
  }

  // Notify parent when panel state changes
  useEffect(() => {
    if (onPanelStateChange) {
      onPanelStateChange(selectedLocation !== null)
    }
  }, [selectedLocation, onPanelStateChange])

  // Handle country click - toggle if same country clicked
  const onCountryClick = (feature: any) => {
    const countryName = feature?.properties?.ADMIN || feature?.properties?.NAME
    const location = getLocationByGeoJSONName(countryName)

    if (location) {
      // If clicking the same country, close the panel
      if (selectedCountryName === countryName) {
        setSelectedCountryName(null)
        setSelectedLocation(null)
      } else {
        // Otherwise, open the new country
        setSelectedCountryName(countryName)
        setSelectedLocation(location)
      }
    }
  }

  // Handle mouse events
  const onEachCountry = (feature: any, layer: any) => {
    const countryName = feature?.properties?.ADMIN || feature?.properties?.NAME
    const location = getLocationByGeoJSONName(countryName)

    if (location) {
      layer.on({
        mouseover: (e: any) => {
          setHoveredCountryName(countryName)
          setTooltipContent(`${location.name} - ${getShortSummary(location.name)}`)
          setTooltipPosition({ x: e.containerPoint.x, y: e.containerPoint.y })
        },
        mousemove: (e: any) => {
          setTooltipPosition({ x: e.containerPoint.x, y: e.containerPoint.y })
        },
        mouseout: () => {
          setHoveredCountryName(null)
          setTooltipContent(null)
          setTooltipPosition(null)
        },
        click: () => {
          onCountryClick(feature)
        }
      })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white text-xl">Loading world map...</div>
      </div>
    )
  }

  // Show message if no summaries generated yet
  if (locations.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">🌍 Location Summaries Not Generated Yet</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The new location-based summary system is ready, but summaries haven't been generated yet.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h3 className="font-bold text-blue-900 mb-2">To generate summaries:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
              <li>Add your Anthropic API key to <code className="bg-blue-100 px-1 rounded">.env</code></li>
              <li>Run: <code className="bg-blue-100 px-2 py-1 rounded">npm run generate-location-summaries</code></li>
              <li>Wait ~40-45 minutes (40 locations × 1 second each)</li>
              <li>Refresh this page</li>
            </ol>
          </div>
          <p className="text-sm text-gray-600">
            See <code className="bg-gray-100 px-1 rounded">LOCATION_SUMMARIES_GUIDE.md</code> for full instructions.
          </p>
        </div>
      </div>
    )
  }

  const categories: { id: NewsCategory; label: string }[] = [
    { id: 'all', label: 'All News' },
    { id: 'politics', label: 'Politics' },
    { id: 'economy', label: 'Economy & Business' },
    { id: 'technology', label: 'Technology' },
    { id: 'climate', label: 'Climate & Environment' },
    { id: 'culture', label: 'Culture & Arts' },
    { id: 'sports', label: 'Sports' },
    { id: 'travel', label: 'Travel & Tourism' },
    { id: 'food', label: 'Food & Cuisine' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'crime', label: 'Crime & Justice' },
    { id: 'energy', label: 'Energy' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'science', label: 'Science & Research' },
    { id: 'humanrights', label: 'Human Rights' },
    { id: 'military', label: 'Military & Defense' },
    { id: 'realestate', label: 'Real Estate & Housing' },
  ]

  return (
    <div className="relative w-full h-screen">
      {/* Category Filter Pills */}
      <div
        className="absolute top-4 z-[1000] flex flex-wrap gap-2 transition-all duration-300 max-w-5xl justify-center"
        style={{
          left: selectedLocation ? 'calc(50% - 300px)' : '50%',
          transform: 'translateX(-50%)'
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id)
              setSelectedLocation(null)
              setSelectedCountryName(null)
            }}
            className={`
              px-3 py-1.5 rounded-full font-body font-semibold text-xs transition-all
              ${selectedCategory === category.id
                ? 'bg-ft-oxford text-white shadow-md'
                : 'bg-white/80 text-ft-black hover:bg-white border border-ft-oxford/30 shadow-sm'
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>

      <MapContainer
        key="world-map"
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={18}
        maxBounds={[[-85, -Infinity], [85, Infinity]]}
        maxBoundsViscosity={1.0}
        worldCopyJump={true}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        whenReady={() => setMapReady(true)}
        zoomControl={true}
        scrollWheelZoom={true}
        smoothWheelZoom={true}
        smoothSensitivity={1}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* Country boundaries - clickable polygons */}
        {mapReady && countriesGeoJSON && (
          <GeoJSON
            data={countriesGeoJSON}
            style={countryStyle}
            onEachFeature={onEachCountry}
            key={`geojson-${selectedCountryName}-${hoveredCountryName}`}
          />
        )}

        {/* City markers only - countries now use GeoJSON polygons */}
        {mapReady && locations
          .filter(location => location.type === 'city')
          .map((location) => (
            <LocationMarker
              key={location.id}
              position={[location.location.lat, location.location.lng]}
              name={location.name}
              type={location.type as 'country' | 'city'}
              storyCount={location.storyCount}
              issueCount={location.issues.length}
              onClick={() => setSelectedLocation(location)}
            />
          ))}
      </MapContainer>

      {/* Location Summary Panel */}
      {selectedLocation && (
        <LocationSummaryPanel
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}

      {/* Hover Tooltip with FT styling */}
      {tooltipContent && tooltipPosition && (() => {
        const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
        const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800
        const panelWidth = selectedLocation ? 600 : 0
        const padding = 10
        const availableWidth = viewportWidth - panelWidth - (padding * 2)

        // Estimate tooltip width (since we can't measure it dynamically)
        const estimatedTooltipWidth = Math.min(tooltipContent.length * 7, 500)
        const halfWidth = estimatedTooltipWidth / 2

        // Position above cursor by default
        let top = tooltipPosition.y - 45

        // Center horizontally on cursor, but constrain to available space
        let left = tooltipPosition.x - halfWidth

        // Ensure tooltip doesn't overflow left edge
        if (left < padding) {
          left = padding
        }

        // Ensure tooltip doesn't overflow right edge (accounting for panel if open)
        const maxLeft = viewportWidth - panelWidth - estimatedTooltipWidth - padding
        if (left > maxLeft) {
          left = Math.max(padding, maxLeft)
        }

        // If too close to top, show below cursor instead
        if (top < padding) {
          top = tooltipPosition.y + 25
        }

        return (
          <div
            className="absolute z-50 bg-white border-2 border-ft-oxford text-ft-black px-4 py-2 text-xs font-body shadow-xl pointer-events-none rounded-full ft-pill whitespace-nowrap"
            style={{
              left: `${left}px`,
              top: `${top}px`,
            }}
          >
            {tooltipContent}
          </div>
        )
      })()}
    </div>
  )
}
