'use client'

import { MapPin, ExternalLink } from 'lucide-react'
import { getHostDisplayName } from '@/lib/global-news/hostPersonalities'
import { useAudioNarrator } from '@/contexts/AudioNarratorContext'

interface GlobalStory {
  id: string
  rank: number
  title: string
  narrative: string
  authorStyle: string
  globalSignificance: string
  affectedPopulation: string
  category: string
  location: {
    lat: number
    lng: number
    city: string | null
    country: string
    region: string | null
  }
  sources: Array<{
    title: string
    url: string
    outlet: string
  }>
  generatedAt: string
  publishDate: string
}

interface GlobalStoryCardProps {
  story: GlobalStory
  onClick: () => void
  isExpanded: boolean
}

const categoryColors: Record<string, string> = {
  politics: 'border-ft-oxford bg-ft-oxford/10 text-ft-oxford',
  conflict: 'border-ft-claret bg-ft-claret/10 text-ft-claret',
  economy: 'border-ft-teal bg-ft-teal/10 text-ft-teal',
  climate: 'border-green-600 bg-green-600/10 text-green-600',
  technology: 'border-ft-velvet bg-ft-velvet/10 text-ft-velvet',
  general: 'border-ft-slate bg-ft-slate/10 text-ft-slate',
}

export default function GlobalStoryCard({ story, onClick, isExpanded }: GlobalStoryCardProps) {
  const categoryStyle = categoryColors[story.category.toLowerCase()] || categoryColors.general
  const authorName = getHostDisplayName(story.authorStyle as any)
  const { addToQueue, playNow, queue, currentItem } = useAudioNarrator()

  const isInQueue = queue.some(item => item.id === story.id)
  const isCurrentlyPlaying = currentItem?.id === story.id

  const handlePlayNow = (e: React.MouseEvent) => {
    e.stopPropagation()
    playNow({
      id: story.id,
      title: story.title,
      content: story.narrative,
      type: 'story',
      metadata: {
        authorStyle: authorName,
        location: `${story.location.city ? story.location.city + ', ' : ''}${story.location.country}`,
        category: story.category,
      },
    })
  }

  const handleAddToQueue = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToQueue({
      id: story.id,
      title: story.title,
      content: story.narrative,
      type: 'story',
      metadata: {
        authorStyle: authorName,
        location: `${story.location.city ? story.location.city + ', ' : ''}${story.location.country}`,
        category: story.category,
      },
    })
  }

  return (
    <div
      className={`
        border-2 border-ft-wheat/30 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer
        ${isExpanded ? 'bg-white shadow-2xl' : 'bg-white/80 hover:bg-white hover:shadow-lg hover:border-ft-oxford/30'}
      `}
      onClick={onClick}
    >
      {/* Header */}
      <div className="p-4 border-b border-ft-wheat/20">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 bg-ft-oxford text-white font-bold text-sm rounded-full">
              {story.rank}
            </span>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${categoryStyle}`}>
              {story.category}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-ft-slate">
            <MapPin size={14} />
            <span className="font-medium">{story.location.country}</span>
            {story.location.city && (
              <>
                <span>•</span>
                <span>{story.location.city}</span>
              </>
            )}
          </div>
        </div>

        <h3 className="font-headline text-xl font-bold text-ft-black leading-tight mb-1">
          {story.title}
        </h3>

        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-ft-slate/80 italic">
            Written by {authorName}
          </p>

          {/* Narrator Controls */}
          <div className="flex items-center gap-2">
            {isCurrentlyPlaying ? (
              <span className="flex items-center gap-1 text-xs font-semibold text-ft-claret">
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Playing
              </span>
            ) : isInQueue ? (
              <span className="flex items-center gap-1 text-xs font-semibold text-ft-teal">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                In Queue
              </span>
            ) : (
              <>
                <button
                  onClick={handlePlayNow}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-ft-oxford hover:bg-ft-oxford/80 rounded-full transition-colors"
                  title="Play this article now"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </button>
                <button
                  onClick={handleAddToQueue}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-ft-oxford border border-ft-oxford hover:bg-ft-oxford hover:text-white rounded-full transition-colors"
                  title="Add to narration queue"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Queue
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Always show significance */}
        <div className="mb-3 p-3 bg-ft-pink/50 rounded border border-ft-wheat/30">
          <p className="text-sm font-semibold text-ft-oxford mb-1">Why This Matters:</p>
          <p className="text-sm text-ft-black">{story.globalSignificance}</p>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="space-y-4 animate-fadeIn">
            {/* Narrative */}
            <div className="prose prose-sm max-w-none">
              {story.narrative.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-sm text-ft-black leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Affected Population */}
            <div className="p-3 bg-ft-oxford/5 rounded border border-ft-oxford/20">
              <p className="text-xs font-semibold text-ft-oxford mb-1">Who This Affects:</p>
              <p className="text-sm text-ft-black">{story.affectedPopulation}</p>
            </div>

            {/* Sources */}
            {story.sources && story.sources.length > 0 && (
              <div className="pt-3 border-t border-ft-wheat/30">
                <p className="text-xs font-semibold text-ft-slate mb-2">Sources:</p>
                <div className="space-y-2">
                  {story.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-xs text-ft-oxford hover:text-ft-claret transition-colors group"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} className="mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium group-hover:underline">{source.outlet}</span>
                        <span className="text-ft-slate"> - {source.title}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Click to expand hint */}
        {!isExpanded && (
          <p className="text-xs text-ft-slate/60 text-center mt-2">
            Click to read full analysis →
          </p>
        )}
      </div>
    </div>
  )
}
