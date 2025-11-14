'use client';

import { AudioNarratorProvider } from '@/contexts/AudioNarratorContext';
import AudioPlayer from '@/components/AudioPlayer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AudioNarratorProvider>
      {children}
      <AudioPlayer />
    </AudioNarratorProvider>
  );
}
