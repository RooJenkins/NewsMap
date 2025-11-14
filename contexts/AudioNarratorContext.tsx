'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

export interface NarrationItem {
  id: string;
  title: string;
  content: string;
  type: 'story' | 'location';
  metadata?: {
    authorStyle?: string;
    location?: string;
    category?: string;
  };
}

interface AudioNarratorContextType {
  queue: NarrationItem[];
  currentItem: NarrationItem | null;
  isPlaying: boolean;
  isPaused: boolean;
  currentPosition: number;
  addToQueue: (item: NarrationItem) => void;
  removeFromQueue: (id: string) => void;
  moveInQueue: (fromIndex: number, toIndex: number) => void;
  clearQueue: () => void;
  play: () => void;
  pause: () => void;
  skip: () => void;
  playNow: (item: NarrationItem) => void;
  setVoiceRate: (rate: number) => void;
  setVoicePitch: (pitch: number) => void;
  voiceRate: number;
  voicePitch: number;
  availableVoices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void;
}

const AudioNarratorContext = createContext<AudioNarratorContextType | undefined>(undefined);

export function AudioNarratorProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<NarrationItem[]>([]);
  const [currentItem, setCurrentItem] = useState<NarrationItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [voiceRate, setVoiceRate] = useState(1.0);
  const [voicePitch, setVoicePitch] = useState(1.0);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isInitialized = useRef(false);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);

      // Try to select a natural-sounding English voice by default
      if (!selectedVoice && voices.length > 0) {
        const preferredVoice = voices.find(v =>
          v.lang.startsWith('en') && (
            v.name.includes('Google') ||
            v.name.includes('Natural') ||
            v.name.includes('Enhanced') ||
            v.name.includes('Premium')
          )
        ) || voices.find(v => v.lang.startsWith('en-US')) || voices[0];

        setSelectedVoice(preferredVoice);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [selectedVoice]);

  // Load queue from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized.current) {
      const savedQueue = localStorage.getItem('narratorQueue');
      if (savedQueue) {
        try {
          setQueue(JSON.parse(savedQueue));
        } catch (e) {
          console.error('Failed to load saved queue:', e);
        }
      }
      isInitialized.current = true;
    }
  }, []);

  // Save queue to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && isInitialized.current) {
      localStorage.setItem('narratorQueue', JSON.stringify(queue));
    }
  }, [queue]);

  const speak = useCallback((item: NarrationItem) => {
    if (typeof window === 'undefined') return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const text = `${item.title}. ${item.content}`;
    const utterance = new SpeechSynthesisUtterance(text);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = voiceRate;
    utterance.pitch = voicePitch;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentItem(item);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentPosition(0);

      // Play next item in queue
      setQueue(prevQueue => {
        const newQueue = prevQueue.filter(i => i.id !== item.id);
        if (newQueue.length > 0) {
          setTimeout(() => speak(newQueue[0]), 100);
        } else {
          setCurrentItem(null);
        }
        return newQueue;
      });
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onboundary = (event) => {
      setCurrentPosition(event.charIndex);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [selectedVoice, voiceRate, voicePitch]);

  const addToQueue = useCallback((item: NarrationItem) => {
    setQueue(prevQueue => {
      // Check if item already exists in queue
      if (prevQueue.some(i => i.id === item.id)) {
        return prevQueue;
      }
      return [...prevQueue, item];
    });
  }, []);

  const removeFromQueue = useCallback((id: string) => {
    setQueue(prevQueue => prevQueue.filter(item => item.id !== id));
  }, []);

  const moveInQueue = useCallback((fromIndex: number, toIndex: number) => {
    setQueue(prevQueue => {
      const newQueue = [...prevQueue];
      const [removed] = newQueue.splice(fromIndex, 1);
      newQueue.splice(toIndex, 0, removed);
      return newQueue;
    });
  }, []);

  const clearQueue = useCallback(() => {
    window.speechSynthesis.cancel();
    setQueue([]);
    setCurrentItem(null);
    setIsPlaying(false);
    setIsPaused(false);
  }, []);

  const play = useCallback(() => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else if (queue.length > 0 && !isPlaying) {
      speak(queue[0]);
    }
  }, [isPaused, queue, isPlaying, speak]);

  const pause = useCallback(() => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const skip = useCallback(() => {
    window.speechSynthesis.cancel();
    setQueue(prevQueue => {
      const newQueue = prevQueue.slice(1);
      if (newQueue.length > 0) {
        setTimeout(() => speak(newQueue[0]), 100);
      } else {
        setCurrentItem(null);
        setIsPlaying(false);
        setIsPaused(false);
      }
      return newQueue;
    });
  }, [speak]);

  const playNow = useCallback((item: NarrationItem) => {
    window.speechSynthesis.cancel();
    setQueue(prevQueue => {
      // Remove item from queue if it exists
      const filteredQueue = prevQueue.filter(i => i.id !== item.id);
      // Add to front of queue
      const newQueue = [item, ...filteredQueue];
      setTimeout(() => speak(item), 100);
      return newQueue;
    });
  }, [speak]);

  const value: AudioNarratorContextType = {
    queue,
    currentItem,
    isPlaying,
    isPaused,
    currentPosition,
    addToQueue,
    removeFromQueue,
    moveInQueue,
    clearQueue,
    play,
    pause,
    skip,
    playNow,
    setVoiceRate,
    setVoicePitch,
    voiceRate,
    voicePitch,
    availableVoices,
    selectedVoice,
    setSelectedVoice,
  };

  return (
    <AudioNarratorContext.Provider value={value}>
      {children}
    </AudioNarratorContext.Provider>
  );
}

export function useAudioNarrator() {
  const context = useContext(AudioNarratorContext);
  if (context === undefined) {
    throw new Error('useAudioNarrator must be used within an AudioNarratorProvider');
  }
  return context;
}
