'use client'

import { X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface LocationSummary {
  id: string
  name: string
  type: string
  country: string
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

interface LocationSummaryPanelProps {
  location: LocationSummary
  onClose: () => void
}

export default function LocationSummaryPanel({ location, onClose }: LocationSummaryPanelProps) {
  const timeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

    if (diffHours < 1) return 'Just now'
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  }

  return (
    <div className="fixed top-0 right-0 w-[600px] h-full shadow-2xl overflow-y-auto z-[10000] animate-slideIn border-l-4 border-white/20 backdrop-blur-xl bg-white/80">
      {/* Header with clean FT styling */}
      <div className="bg-ft-oxford/95 backdrop-blur-sm border-b-2 border-ft-claret/50 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
          aria-label="Close"
        >
          <X size={18} className="text-ft-black" />
        </button>

        <div className="pr-14 relative z-0">
          <h2 className="font-headline text-4xl font-bold text-ft-black mb-2 leading-tight">
            {location.name}
          </h2>
          <p className="text-ft-slate text-sm font-medium">
            {location.type === 'country' ? 'Country Analysis' : location.country}
          </p>
        </div>
      </div>

      {/* Metadata bar with clean spacing */}
      <div className="bg-white/60 backdrop-blur-sm border-b-2 border-ft-wheat/30 px-6 py-3">
        <div className="flex items-center justify-between text-xs font-body">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-ft-oxford text-ft-oxford font-semibold rounded-full">
              {location.storyCount} stories
            </span>
            <span className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-ft-claret text-ft-claret font-semibold rounded-full">
              {location.issues.length} issues
            </span>
          </div>
          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-ft-slate font-medium rounded-full">
            Updated {timeAgo(location.updatedAt)}
          </span>
        </div>
      </div>

      {/* AI Summary with FT styling */}
      <div className="p-6 bg-white/40 backdrop-blur-sm">
        <div className="prose prose-sm max-w-none font-body">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="font-headline text-2xl font-bold mb-4 text-ft-oxford leading-tight">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-headline text-xl font-bold mt-6 mb-3 text-ft-oxford border-l-4 border-ft-claret pl-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-headline text-lg font-semibold mt-4 mb-2 text-ft-black">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-ft-slate leading-relaxed mb-3 text-sm">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-1 mb-3 text-ft-slate">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed text-sm">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-ft-oxford">{children}</strong>
              ),
            }}
          >
            {location.summary}
          </ReactMarkdown>
        </div>

        {/* Top Stories Section with clean layout */}
        {location.topStories && location.topStories.length > 0 && (
          <div className="mt-8 pt-6 border-t-2 border-ft-wheat">
            <h3 className="font-headline text-xl font-bold mb-6 text-ft-oxford border-l-4 border-ft-claret pl-3">
              Latest News
            </h3>
            <div className="space-y-3">
              {location.topStories.map((story, index) => (
                <a
                  key={index}
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-5 bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-ft-wheat/60 hover:border-ft-oxford rounded-3xl transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body font-medium text-ft-black group-hover:text-ft-oxford mb-3 leading-tight text-[15px]">
                        {story.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-ft-slate">
                        <span className="font-semibold text-ft-oxford">
                          {story.source}
                        </span>
                        <span className="text-ft-slate/50">•</span>
                        <time className="font-normal">
                          {new Date(story.pubDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                    <div className="p-2 bg-ft-oxford/10 group-hover:bg-ft-oxford text-ft-oxford group-hover:text-white rounded-full transition-all flex-shrink-0 mt-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .prose strong {
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
