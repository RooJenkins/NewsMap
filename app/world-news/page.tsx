'use client'

import dynamic from 'next/dynamic'

// Dynamically import location-based map view to avoid SSR issues
const MapViewLocations = dynamic(() => import('@/components/MapViewLocations'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="text-white text-2xl font-bold animate-pulse">Loading World Intelligence Map...</div>
    </div>
  ),
})

export default function WorldNewsPage() {
  return (
    <div className="w-full h-screen">
      <MapViewLocations />
    </div>
  )
}
