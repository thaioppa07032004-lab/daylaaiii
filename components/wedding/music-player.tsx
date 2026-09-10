'use client'

import { useEffect, useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }, [playing])

  if (!wedding.music.src) return null

  return (
    <>
      <audio ref={audioRef} src={wedding.music.src} loop preload="none" />
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90"
        aria-label={playing ? 'Tạm dừng nhạc' : 'Phát nhạc nền'}
      >
        {playing ? (
          <Pause className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Music className="h-5 w-5 animate-softpulse" aria-hidden="true" />
        )}
      </button>
    </>
  )
}
