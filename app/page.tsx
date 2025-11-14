'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import NewsHeatmap from '@/components/NewsHeatmap'
import TreemapView from '@/components/TreemapView'
import InteractiveTreemapView from '@/components/InteractiveTreemapView'
import ChatBot from '@/components/ChatBot'
import { ViewType } from '@/types'

// Dynamically import GlobeView with no SSR (client-side only for Three.js)
const GlobeView = dynamic(() => import('@/components/GlobeView'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-white text-xl">Loading 3D Globe...</div>
    </div>
  ),
})

export default function Home() {
  const [viewType, setViewType] = useState<ViewType>('frequency')
  const [normalized, setNormalized] = useState(false)

  return (
    <main className="min-h-screen ft-gradient">
      <div className="container mx-auto px-4 py-4 max-w-[1800px]">
        {/* Header with FT styling */}
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-ft-black mb-2 font-headline border-b-4 border-ft-teal inline-block px-6 pb-2">
            NewsMap
          </h1>
          <p className="text-ft-slate text-sm font-medium mt-3">
            Visualize how different news outlets cover 100 topics
          </p>
        </header>

        {/* Controls with FT pill buttons */}
        <div className="bg-white rounded-2xl shadow-2xl p-5 mb-4 border-2 border-ft-teal">
          <div className="flex flex-wrap gap-2 items-center">
            {/* View Type Selector with FT pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setViewType('frequency')}
                className={`ft-pill transition-all text-xs ${
                  viewType === 'frequency'
                    ? 'bg-ft-oxford text-white shadow-lg scale-105'
                    : 'bg-ft-pink text-ft-slate hover:bg-ft-wheat'
                }`}
              >
                Frequency
              </button>
              <button
                onClick={() => setViewType('sentiment')}
                className={`ft-pill transition-all text-xs ${
                  viewType === 'sentiment'
                    ? 'bg-ft-teal text-white shadow-lg scale-105'
                    : 'bg-ft-pink text-ft-slate hover:bg-ft-wheat'
                }`}
              >
                Sentiment
              </button>
              <button
                onClick={() => setViewType('political')}
                className={`ft-pill transition-all text-xs ${
                  viewType === 'political'
                    ? 'bg-ft-claret text-white shadow-lg scale-105'
                    : 'bg-ft-pink text-ft-slate hover:bg-ft-wheat'
                }`}
              >
                Political
              </button>
              <button
                onClick={() => setViewType('truth-spectrum')}
                className={`ft-pill transition-all text-xs ${
                  viewType === 'truth-spectrum'
                    ? 'bg-ft-velvet text-white shadow-lg scale-105'
                    : 'bg-ft-pink text-ft-slate hover:bg-ft-wheat'
                }`}
              >
                Truth
              </button>
              <button
                onClick={() => setViewType('treemap')}
                className={`ft-pill transition-all text-xs ${
                  viewType === 'treemap'
                    ? 'bg-ft-teal text-white shadow-lg scale-105'
                    : 'bg-ft-pink text-ft-slate hover:bg-ft-wheat'
                }`}
              >
                Treemap
              </button>
              <button
                onClick={() => setViewType('interactive-map')}
                className={`ft-pill transition-all text-xs ${
                  viewType === 'interactive-map'
                    ? 'bg-ft-teal text-white shadow-lg scale-105'
                    : 'bg-ft-pink text-ft-slate hover:bg-ft-wheat'
                }`}
              >
                Interactive Map
              </button>
              <button
                onClick={() => setViewType('globe')}
                className={`ft-pill transition-all text-xs ${
                  viewType === 'globe'
                    ? 'bg-ft-oxford text-white shadow-lg scale-105'
                    : 'bg-ft-pink text-ft-slate hover:bg-ft-wheat'
                }`}
              >
                3D Globe
              </button>
              <Link href="/world-news">
                <button className="ft-pill bg-ft-black text-white hover:bg-ft-oxford shadow-lg transition-all text-xs">
                  World Map
                </button>
              </Link>
              <Link href="/global-news">
                <button className="ft-pill bg-ft-claret text-white hover:bg-ft-oxford shadow-lg transition-all text-xs">
                  Global News Top 100
                </button>
              </Link>
            </div>

            {/* Normalization Toggle with FT styling */}
            <div className="flex items-center gap-3 ml-auto">
              <label htmlFor="normalized" className="text-xs font-bold text-ft-slate">
                Normalized
              </label>
              <button
                id="normalized"
                onClick={() => setNormalized(!normalized)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-all shadow-md ${
                  normalized ? 'bg-ft-teal' : 'bg-ft-wasabi'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                    normalized ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* View Type Description with FT styling */}
          <div className="mt-4 p-4 bg-ft-pink/50 rounded-2xl border-2 border-ft-wheat">
            {viewType === 'frequency' && (
              <p className="text-xs text-ft-slate">
                <span className="font-bold text-ft-oxford ft-pill bg-white px-3 py-1 mr-2">Frequency:</span> Blue (low) to Red (high) shows coverage frequency{normalized && ' (normalized)'}
              </p>
            )}
            {viewType === 'sentiment' && (
              <p className="text-xs text-ft-slate">
                <span className="font-bold text-ft-teal ft-pill bg-white px-3 py-1 mr-2">Sentiment:</span> Green (positive) to Red (negative) shows sentiment
              </p>
            )}
            {viewType === 'political' && (
              <p className="text-xs text-ft-slate">
                <span className="font-bold text-ft-claret ft-pill bg-white px-3 py-1 mr-2">Political Bias:</span> Blue (left) to Red (right) shows political bias
              </p>
            )}
            {viewType === 'truth-spectrum' && (
              <p className="text-xs text-ft-slate">
                <span className="font-bold text-ft-velvet ft-pill bg-white px-3 py-1 mr-2">Truth Spectrum:</span> Position & Truth (T:). Green = close, Red = far
              </p>
            )}
            {viewType === 'treemap' && (
              <p className="text-xs text-ft-slate">
                <span className="font-bold text-ft-teal ft-pill bg-white px-3 py-1 mr-2">Treemap:</span> Box size = coverage frequency, Color = political bias (Blue = Left, Red = Right)
              </p>
            )}
            {viewType === 'interactive-map' && (
              <p className="text-xs text-ft-slate">
                <span className="font-bold text-ft-teal ft-pill bg-white px-3 py-1 mr-2">Interactive Map:</span> Box size = articles today, Color = change vs yesterday (Green = increase, Red = decrease). Hover for outlet breakdown.
              </p>
            )}
            {viewType === 'globe' && (
              <p className="text-xs text-ft-slate">
                <span className="font-bold text-ft-oxford ft-pill bg-white px-3 py-1 mr-2">3D Globe:</span> Rotate and zoom the globe to explore news stories worldwide. Pins scale with story importance. Zoom in for local news, zoom out for global headlines.
              </p>
            )}
          </div>
        </div>

        {/* Visualization */}
        {viewType === 'globe' ? (
          <GlobeView />
        ) : viewType === 'interactive-map' ? (
          <InteractiveTreemapView />
        ) : viewType === 'treemap' ? (
          <TreemapView normalized={normalized} />
        ) : (
          <NewsHeatmap viewType={viewType} normalized={normalized} />
        )}

        {/* Compact Legend with FT styling */}
        <div className="bg-white rounded-2xl shadow-2xl p-5 mt-4 border-2 border-ft-teal">
          <h3 className="text-sm font-bold text-ft-black mb-3 font-headline border-b-2 border-ft-wheat pb-2">Legend</h3>
          <div className="flex flex-wrap gap-2">
            {viewType === 'frequency' && (
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
                  <span className="text-[8px]">Low</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded"></div>
                  <span className="text-[8px]">Med</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
                  <span className="text-[8px]">High</span>
                </div>
              </div>
            )}
            {viewType === 'sentiment' && (
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-red-600 to-red-500 rounded"></div>
                  <span className="text-[8px]">Neg</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-white border border-gray-300 rounded"></div>
                  <span className="text-[8px]">Neutral</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-green-600 to-green-500 rounded"></div>
                  <span className="text-[8px]">Pos</span>
                </div>
              </div>
            )}
            {viewType === 'political' && (
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-blue-700 to-blue-600 rounded"></div>
                  <span className="text-[8px]">Left</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-white border border-gray-300 rounded"></div>
                  <span className="text-[8px]">Center</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-red-600 to-red-500 rounded"></div>
                  <span className="text-[8px]">Right</span>
                </div>
              </div>
            )}
            {viewType === 'truth-spectrum' && (
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-green-600 to-green-500 rounded"></div>
                  <span className="text-[8px]">Close</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded"></div>
                  <span className="text-[8px]">Mod</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
                  <span className="text-[8px]">Far</span>
                </div>
              </div>
            )}
            {viewType === 'treemap' && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-semibold">Size:</span>
                  <span className="text-[8px]">Coverage Amount</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-3 bg-blue-600 rounded"></div>
                  <span className="text-[8px]">Left</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-3 bg-gray-600 rounded"></div>
                  <span className="text-[8px]">Center</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-3 bg-red-600 rounded"></div>
                  <span className="text-[8px]">Right</span>
                </div>
              </div>
            )}
            {viewType === 'interactive-map' && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-semibold">Size:</span>
                  <span className="text-[8px]">Article Count</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-3 bg-green-600 rounded"></div>
                  <span className="text-[8px]">Up</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-3 bg-gray-600 rounded"></div>
                  <span className="text-[8px]">Flat</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-3 bg-red-600 rounded"></div>
                  <span className="text-[8px]">Down</span>
                </div>
              </div>
            )}
            {viewType === 'globe' && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-semibold">Pin Size:</span>
                  <span className="text-[8px]">Story Importance</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-[8px]">Regular</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-[8px]">Breaking</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ChatBot />
    </main>
  )
}
