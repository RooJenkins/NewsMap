'use client'

import { useEffect, useMemo } from 'react'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'

interface LocationMarkerProps {
  position: [number, number]
  name: string
  type: 'country' | 'city'
  storyCount: number
  issueCount: number
  onClick: () => void
}

export default function LocationMarker({
  position,
  name,
  type,
  storyCount,
  issueCount,
  onClick
}: LocationMarkerProps) {
  // Create custom icon based on type
  const icon = useMemo(() => {
    if (typeof window === 'undefined') return null

    const isCountry = type === 'country'
    const size = isCountry ? 40 : 28
    const color = isCountry ? '#3b82f6' : '#10b981'
    const borderColor = isCountry ? '#1e40af' : '#059669'

    const html = `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border: 3px solid ${borderColor};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: all 0.2s ease;
      " class="location-marker">
        <svg width="${size * 0.6}" height="${size * 0.6}" viewBox="0 0 24 24" fill="white">
          ${isCountry
            ? '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>'
            : '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>'
          }
        </svg>
      </div>
    `

    return L.divIcon({
      html,
      className: 'location-marker-container',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    })
  }, [type])

  if (!icon) return null

  return (
    <>
      <Marker
        position={position}
        icon={icon}
        eventHandlers={{
          click: onClick,
        }}
      >
        <Tooltip
          direction="top"
          offset={[0, -20]}
          opacity={0.95}
          className="location-tooltip"
        >
          <div className="text-sm">
            <div className="font-bold text-base mb-1">{name}</div>
            <div className="text-gray-600">
              {type === 'country' ? '🌍 Country' : '🏙️ City'}
            </div>
            <div className="mt-2 text-xs">
              <div>📰 {storyCount} stories analyzed</div>
              <div>⚠️ {issueCount} major issues</div>
            </div>
            <div className="mt-2 text-xs text-blue-600 font-semibold">
              Click for detailed analysis →
            </div>
          </div>
        </Tooltip>
      </Marker>

      <style jsx global>{`
        .location-marker:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(0,0,0,0.5) !important;
        }

        .location-marker-container {
          background: transparent !important;
          border: none !important;
        }

        .location-tooltip {
          background: white !important;
          border: 2px solid #e5e7eb !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2) !important;
          padding: 8px !important;
        }

        .location-tooltip .leaflet-tooltip-content {
          margin: 0 !important;
        }
      `}</style>
    </>
  )
}
