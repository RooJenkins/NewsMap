'use client'

import { useState } from 'react'
import NewsHeatmap from '@/components/NewsHeatmap'
import { ViewType } from '@/types'

export default function Home() {
  const [viewType, setViewType] = useState<ViewType>('frequency')
  const [normalized, setNormalized] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-2 py-2 max-w-[1800px]">
        {/* Header */}
        <header className="mb-2 text-center">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-0.5">
            NewsMap
          </h1>
          <p className="text-gray-700 text-[9px] font-medium">
            Visualize how different news outlets cover 100 topics
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-lg p-2 mb-2 border border-gray-200">
          <div className="flex flex-wrap gap-2 items-center">
            {/* View Type Selector */}
            <div className="flex gap-1">
              <button
                onClick={() => setViewType('frequency')}
                className={`px-2 py-1 rounded text-[9px] font-semibold transition-all ${
                  viewType === 'frequency'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Frequency
              </button>
              <button
                onClick={() => setViewType('sentiment')}
                className={`px-2 py-1 rounded text-[9px] font-semibold transition-all ${
                  viewType === 'sentiment'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sentiment
              </button>
              <button
                onClick={() => setViewType('political')}
                className={`px-2 py-1 rounded text-[9px] font-semibold transition-all ${
                  viewType === 'political'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Political
              </button>
              <button
                onClick={() => setViewType('truth-spectrum')}
                className={`px-2 py-1 rounded text-[9px] font-semibold transition-all ${
                  viewType === 'truth-spectrum'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Truth
              </button>
            </div>

            {/* Normalization Toggle */}
            <div className="flex items-center gap-2 ml-auto">
              <label htmlFor="normalized" className="text-xs font-semibold text-gray-700">
                Normalized
              </label>
              <button
                id="normalized"
                onClick={() => setNormalized(!normalized)}
                className={`relative inline-flex h-5 w-10 items-center rounded-full transition-all ${
                  normalized ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    normalized ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* View Type Description */}
          <div className="mt-2 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded border border-blue-100">
            {viewType === 'frequency' && (
              <p className="text-[10px] text-gray-700">
                <span className="font-bold text-blue-600">Frequency:</span> Blue (low) to Red (high) shows coverage frequency{normalized && ' (normalized)'}
              </p>
            )}
            {viewType === 'sentiment' && (
              <p className="text-[10px] text-gray-700">
                <span className="font-bold text-blue-600">Sentiment:</span> Green (positive) to Red (negative) shows sentiment
              </p>
            )}
            {viewType === 'political' && (
              <p className="text-[10px] text-gray-700">
                <span className="font-bold text-blue-600">Political Bias:</span> Blue (left) to Red (right) shows political bias
              </p>
            )}
            {viewType === 'truth-spectrum' && (
              <p className="text-[10px] text-gray-700">
                <span className="font-bold text-purple-600">Truth Spectrum:</span> Position & Truth (T:). Green = close, Red = far
              </p>
            )}
          </div>
        </div>

        {/* Heatmap */}
        <NewsHeatmap viewType={viewType} normalized={normalized} />

        {/* Compact Legend */}
        <div className="bg-white rounded-lg shadow-lg p-2 mt-2 border border-gray-200">
          <h3 className="text-[9px] font-bold text-gray-900 mb-1">Legend</h3>
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
          </div>
        </div>
      </div>
    </main>
  )
}
