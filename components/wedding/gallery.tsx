'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const photos = wedding.gallery

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Khoảnh khắc" title="Album ảnh cưới" />

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`group relative w-full overflow-hidden rounded-xl ${
                  i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
                aria-label={`Xem ảnh ${i + 1}`}
              >
                <img
                  src={src || '/placeholder.svg'}
                  alt={`Ảnh cưới ${i + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-white/80 transition hover:text-white"
            onClick={() => setActive(null)}
            aria-label="Đóng"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={photos[active] || '/placeholder.svg'}
            alt={`Ảnh cưới ${active + 1}`}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}
