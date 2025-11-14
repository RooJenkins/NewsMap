'use client';

import React from 'react';
import { useAudioNarrator, NarrationItem } from '@/contexts/AudioNarratorContext';

interface PlaylistPanelProps {
  onClose: () => void;
}

export default function PlaylistPanel({ onClose }: PlaylistPanelProps) {
  const { queue, currentItem, removeFromQueue, moveInQueue, clearQueue, playNow } = useAudioNarrator();

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      moveInQueue(index, index - 1);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < queue.length - 1) {
      moveInQueue(index, index + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#fff1e5] rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#cec6b9]">
          <h2 className="text-xl font-bold text-[#33302e]">Narration Playlist</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f2dfce] rounded-full transition-colors"
            title="Close"
          >
            <svg className="w-6 h-6 text-[#33302e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Queue List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {queue.length === 0 ? (
            <div className="text-center py-12 text-[#66605c]">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <p className="text-lg">No items in queue</p>
              <p className="text-sm mt-2">Add articles to your narration playlist to get started</p>
            </div>
          ) : (
            <div className="space-y-2">
              {queue.map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg border ${
                    currentItem?.id === item.id
                      ? 'border-[#990f3d] bg-[#fff1e5]'
                      : 'border-[#cec6b9]'
                  } p-4 transition-all`}
                >
                  <div className="flex items-start gap-3">
                    {/* Position Indicator */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f2dfce] flex items-center justify-center text-sm font-semibold text-[#33302e]">
                      {index + 1}
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#33302e] mb-1 break-words">
                            {item.title}
                          </h3>
                          <div className="text-xs text-[#66605c] space-x-2">
                            {item.metadata?.authorStyle && (
                              <span className="inline-block">by {item.metadata.authorStyle}</span>
                            )}
                            {item.metadata?.location && (
                              <span className="inline-block">• {item.metadata.location}</span>
                            )}
                            {item.metadata?.category && (
                              <span className="inline-block">• {item.metadata.category}</span>
                            )}
                            <span className="inline-block">• {item.type === 'story' ? 'Story' : 'Location Summary'}</span>
                          </div>
                          {currentItem?.id === item.id && (
                            <div className="mt-2 flex items-center gap-2 text-xs text-[#990f3d] font-semibold">
                              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              Now Playing
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-1">
                          <button
                            onClick={() => handleMoveUp(index)}
                            disabled={index === 0}
                            className="p-1 hover:bg-[#f2dfce] rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Move Up"
                          >
                            <svg className="w-4 h-4 text-[#33302e]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleMoveDown(index)}
                            disabled={index === queue.length - 1}
                            className="p-1 hover:bg-[#f2dfce] rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Move Down"
                          >
                            <svg className="w-4 h-4 text-[#33302e]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Item Actions */}
                      <div className="flex gap-2 mt-3">
                        {currentItem?.id !== item.id && (
                          <button
                            onClick={() => playNow(item)}
                            className="px-3 py-1 text-xs font-semibold text-white bg-[#990f3d] hover:bg-[#801036] rounded transition-colors"
                          >
                            Play Now
                          </button>
                        )}
                        <button
                          onClick={() => removeFromQueue(item.id)}
                          className="px-3 py-1 text-xs font-semibold text-[#990f3d] border border-[#990f3d] hover:bg-[#990f3d] hover:text-white rounded transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {queue.length > 0 && (
          <div className="px-6 py-4 border-t border-[#cec6b9] flex justify-between items-center">
            <div className="text-sm text-[#66605c]">
              {queue.length} item{queue.length !== 1 ? 's' : ''} in queue
            </div>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to clear the entire queue?')) {
                  clearQueue();
                  onClose();
                }
              }}
              className="px-4 py-2 text-sm font-semibold text-[#990f3d] border border-[#990f3d] hover:bg-[#990f3d] hover:text-white rounded transition-colors"
            >
              Clear Queue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
