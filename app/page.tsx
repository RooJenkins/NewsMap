'use client'

import { useState } from 'react'
import NewsHeatmap from '@/components/NewsHeatmap'
import { ViewType } from '@/types'

export default function Home() {
  const [viewType, setViewType] = useState<ViewType>('frequency')
  const [normalized, setNormalized] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-6 py-10">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
            NewsMap
          </h1>
          <p className="text-gray-700 text-xl font-medium">
            Visualize how different news outlets cover topics
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="flex flex-wrap gap-4 items-center">
            {/* View Type Selector */}
            <div className="flex gap-3">
              <button
                onClick={() => setViewType('frequency')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  viewType === 'frequency'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Frequency
              </button>
              <button
                onClick={() => setViewType('sentiment')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  viewType === 'sentiment'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sentiment
              </button>
              <button
                onClick={() => setViewType('political')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  viewType === 'political'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Political Bias
              </button>
            </div>

            {/* Normalization Toggle */}
            <div className="flex items-center gap-3 ml-auto">
              <label htmlFor="normalized" className="text-sm font-semibold text-gray-700">
                Normalized
              </label>
              <button
                id="normalized"
                onClick={() => setNormalized(!normalized)}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 shadow-inner ${
                  normalized ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 shadow-md ${
                    normalized ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* View Type Description */}
          <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            {viewType === 'frequency' && (
              <p className="text-sm text-gray-700 font-medium">
                <span className="font-bold text-blue-600">Frequency View:</span> Color intensity shows how frequently each outlet covers each topic.
                {normalized && ' Values are normalized relative to total article output.'}
              </p>
            )}
            {viewType === 'sentiment' && (
              <p className="text-sm text-gray-700 font-medium">
                <span className="font-bold text-blue-600">Sentiment View:</span> Green (positive) to red (negative) gradient shows the sentiment of coverage.
              </p>
            )}
            {viewType === 'political' && (
              <p className="text-sm text-gray-700 font-medium">
                <span className="font-bold text-blue-600">Political Bias View:</span> Blue (left-leaning) to red (right-leaning) gradient shows political bias in coverage.
              </p>
            )}
          </div>
        </div>

        {/* Heatmap */}
        <NewsHeatmap viewType={viewType} normalized={normalized} />

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Color Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {viewType === 'frequency' && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Frequency Scale</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded shadow-sm" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                    <span className="text-sm font-medium">Low coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded shadow-sm" style={{ backgroundColor: 'rgb(59, 130, 246)' }}></div>
                    <span className="text-sm font-medium">Medium coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded shadow-sm" style={{ backgroundColor: 'rgb(30, 64, 175)' }}></div>
                    <span className="text-sm font-medium">High coverage</span>
                  </div>
                </div>
              </div>
            )}
            {viewType === 'sentiment' && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Sentiment Scale</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded shadow-sm"></div>
                    <span className="text-sm font-medium">Very Negative</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-white border-2 border-gray-300 rounded shadow-sm"></div>
                    <span className="text-sm font-medium">Neutral</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-r from-green-600 to-green-500 rounded shadow-sm"></div>
                    <span className="text-sm font-medium">Very Positive</span>
                  </div>
                </div>
              </div>
            )}
            {viewType === 'political' && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Political Bias Scale</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-700 to-blue-600 rounded shadow-sm"></div>
                    <span className="text-sm font-medium">Left-leaning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-white border-2 border-gray-300 rounded shadow-sm"></div>
                    <span className="text-sm font-medium">Centrist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded shadow-sm"></div>
                    <span className="text-sm font-medium">Right-leaning</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
