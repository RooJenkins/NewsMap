'use client'

import { useEffect, useRef, useMemo } from 'react'
import { Marker, Popup } from 'react-leaflet'

interface PillMarkerProps {
  position: [number, number]
  title: string
  fullTitle: string
  source: string
  city?: string
  country?: string
  isBreaking: boolean
  isTop5: boolean
  isTop20: boolean
  onClick: () => void
}

export default function PillMarker({
  position,
  title,
  fullTitle,
  source,
  city,
  country,
  isBreaking,
  isTop5,
  isTop20,
  onClick
}: PillMarkerProps) {
  // Determine pill style based on story properties
  const pillClass = isBreaking
    ? 'news-pill breaking'
    : isTop5
    ? 'news-pill top5'
    : isTop20
    ? 'news-pill top20'
    : 'news-pill'

  // Create custom icon - Leaflet is guaranteed to be loaded
  const icon = useMemo(() => {
    // Calculate width based on title length (roughly 7px per character + padding)
    const estimatedWidth = Math.min(Math.max(title.length * 7, 120), 280)
    const height = 32

    return (window as any).L.divIcon({
      html: `<div class="${pillClass}" title="${fullTitle}">${title}</div>`,
      className: 'news-pill-container',
      iconSize: [estimatedWidth, height],
      iconAnchor: [estimatedWidth / 2, height / 2]
    })
  }, [pillClass, title, fullTitle])

  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        click: onClick
      }}
    >
      <Popup>
        <div className="text-sm max-w-xs">
          <div className="font-bold mb-1">{fullTitle}</div>
          <div className="text-xs text-gray-600 mb-2">{source}</div>
          {city && (
            <div className="text-xs text-gray-500 mb-1">
              📍 {city}, {country}
            </div>
          )}
          {isBreaking && (
            <div className="text-xs text-red-600 font-bold">🔴 BREAKING</div>
          )}
          {isTop5 && (
            <div className="text-xs text-blue-600 font-bold mt-1">⭐ Top Story</div>
          )}
        </div>
      </Popup>
    </Marker>
  )
}
