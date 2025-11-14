'use client';

import React, { useState } from 'react';
import { useAudioNarrator } from '@/contexts/AudioNarratorContext';
import PlaylistPanel from './PlaylistPanel';

export default function AudioPlayer() {
  const {
    currentItem,
    isPlaying,
    isPaused,
    queue,
    play,
    pause,
    skip,
    voiceRate,
    setVoiceRate,
    voicePitch,
    setVoicePitch,
    availableVoices,
    selectedVoice,
    setSelectedVoice,
  } = useAudioNarrator();

  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  if (!currentItem && queue.length === 0) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#fff1e5] border-t border-[#cec6b9] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Current Item Info */}
            <div className="flex-1 min-w-0">
              {currentItem ? (
                <>
                  <div className="text-sm font-semibold text-[#33302e] truncate">
                    {currentItem.title}
                  </div>
                  <div className="text-xs text-[#66605c] truncate">
                    {currentItem.metadata?.authorStyle && (
                      <span className="mr-2">by {currentItem.metadata.authorStyle}</span>
                    )}
                    {currentItem.metadata?.location && (
                      <span className="mr-2">• {currentItem.metadata.location}</span>
                    )}
                    {currentItem.metadata?.category && (
                      <span>• {currentItem.metadata.category}</span>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-sm text-[#66605c]">
                  {queue.length} item{queue.length !== 1 ? 's' : ''} in queue
                </div>
              )}
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              {/* Skip Back (disabled for now, future feature) */}
              <button
                disabled
                className="p-2 rounded-full hover:bg-[#f2dfce] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Previous (coming soon)"
              >
                <svg className="w-5 h-5 text-[#33302e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* Play/Pause */}
              <button
                onClick={isPlaying ? pause : play}
                className="p-3 rounded-full bg-[#990f3d] hover:bg-[#801036] transition-colors text-white"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Skip Forward */}
              <button
                onClick={skip}
                disabled={queue.length === 0}
                className="p-2 rounded-full hover:bg-[#f2dfce] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Skip"
              >
                <svg className="w-5 h-5 text-[#33302e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>

              {/* Settings */}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-full hover:bg-[#f2dfce] transition-colors"
                title="Voice Settings"
              >
                <svg className="w-5 h-5 text-[#33302e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>

              {/* Queue/Playlist */}
              <button
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="p-2 rounded-full hover:bg-[#f2dfce] transition-colors relative"
                title="Playlist"
              >
                <svg className="w-5 h-5 text-[#33302e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {queue.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#990f3d] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {queue.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="mt-3 pt-3 border-t border-[#cec6b9]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Voice Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#33302e] mb-1">
                    Voice
                  </label>
                  <select
                    value={selectedVoice?.name || ''}
                    onChange={(e) => {
                      const voice = availableVoices.find(v => v.name === e.target.value);
                      setSelectedVoice(voice || null);
                    }}
                    className="w-full px-2 py-1 text-sm border border-[#cec6b9] rounded bg-white focus:outline-none focus:border-[#990f3d]"
                  >
                    {availableVoices.map((voice) => (
                      <option key={voice.name} value={voice.name}>
                        {voice.name} ({voice.lang})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Speed */}
                <div>
                  <label className="block text-xs font-semibold text-[#33302e] mb-1">
                    Speed: {voiceRate.toFixed(1)}x
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={voiceRate}
                    onChange={(e) => setVoiceRate(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Pitch */}
                <div>
                  <label className="block text-xs font-semibold text-[#33302e] mb-1">
                    Pitch: {voicePitch.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={voicePitch}
                    onChange={(e) => setVoicePitch(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Playlist Panel */}
      {showPlaylist && (
        <PlaylistPanel onClose={() => setShowPlaylist(false)} />
      )}
    </>
  );
}
