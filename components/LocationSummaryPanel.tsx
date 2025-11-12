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
    <div className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-2xl overflow-y-auto z-[10000] animate-slideIn border-l-4 border-ft-teal">
      {/* Header with FT Pink gradient */}
      <div className="sticky top-0 ft-gradient border-b-2 border-ft-teal p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 hover:bg-ft-wheat rounded-full p-2 transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-ft-black" />
        </button>

        <div className="pr-12">
          <h2 className="font-headline text-4xl font-bold text-ft-black mb-3 leading-tight">
            {location.name}
          </h2>
          <div className="flex items-center gap-2">
            <span className="ft-pill bg-ft-teal text-white text-xs">
              {location.type === 'country' ? 'Country Analysis' : location.country}
            </span>
            <span className="ft-pill bg-ft-oxford text-white text-xs">
              {location.storyCount} stories
            </span>
            <span className="ft-pill bg-ft-mandarin text-white text-xs">
              {location.issues.length} issues
            </span>
          </div>
        </div>
      </div>

      {/* Metadata bar with FT colors */}
      <div className="bg-ft-sky/30 border-b-2 border-ft-blue/20 px-6 py-3">
        <div className="flex items-center justify-end text-xs font-body text-ft-slate">
          <span className="ft-pill bg-white border border-ft-wasabi">
            Updated {timeAgo(location.updatedAt)}
          </span>
        </div>
      </div>

      {/* AI Summary with FT styling */}
      <div className="p-6 bg-white">
        <div className="prose prose-sm max-w-none font-body">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="font-headline text-3xl font-bold mb-6 text-ft-black leading-tight border-b-4 border-ft-teal pb-3">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-ft-black border-l-4 border-ft-mandarin pl-4 py-2 bg-ft-pink">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-headline text-xl font-semibold mt-6 mb-3 text-ft-oxford">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-ft-slate leading-relaxed mb-4 text-base">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-ft-slate">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-ft-black">{children}</strong>
              ),
            }}
          >
            {location.summary}
          </ReactMarkdown>
        </div>

        {/* Top Stories Section with FT styling */}
        {location.topStories && location.topStories.length > 0 && (
          <div className="mt-8 pt-8 border-t-2 border-ft-teal">
            <h3 className="font-headline text-xl font-bold mb-4 text-ft-black">
              Latest News
            </h3>
            <div className="space-y-3">
              {location.topStories.map((story, index) => (
                <a
                  key={index}
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 hover:bg-ft-pink rounded-xl border-2 border-ft-wheat hover:border-ft-teal transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-ft-black group-hover:text-ft-oxford mb-2 leading-snug text-sm">
                        {story.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="ft-pill bg-ft-oxford text-white text-xs px-3 py-1">
                          {story.source}
                        </span>
                        <span className="text-xs text-ft-wasabi">
                          {new Date(story.pubDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-ft-teal group-hover:text-ft-oxford flex-shrink-0 mt-1"
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
