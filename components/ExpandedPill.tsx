'use client'

import { useEffect } from 'react'

interface ExpandedPillProps {
  story: {
    id: string
    title: string
    source: string
    aiSummary?: string
    link: string
    pubDate: string
    city?: string
    country?: string
    isBreaking: boolean
  }
  onClose: () => void
}

export default function ExpandedPill({ story, onClose }: ExpandedPillProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div
      className="absolute top-0 right-0 w-[500px] h-full bg-white shadow-2xl overflow-y-auto z-[10000] animate-slideIn"
      style={{
        borderLeft: '3px solid #3B82F6'
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
      >
        ×
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 pr-16">
        {story.isBreaking && (
          <div className="inline-block px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold mb-3 animate-pulse">
            🔴 BREAKING NEWS
          </div>
        )}

        <h2 className="text-xl font-bold mb-3">{story.title}</h2>

        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold">{story.source}</div>
          {story.city && (
            <div>📍 {story.city}, {story.country}</div>
          )}
          <div>{new Date(story.pubDate).toLocaleDateString()}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {story.aiSummary ? (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">AI Summary</h3>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {story.aiSummary}
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">AI Summary Not Available</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>This story doesn't have an AI-generated summary yet. Click "Read Full Article" below to read the complete story from the source.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6">
          <a
            href={story.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Read Full Article →
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
