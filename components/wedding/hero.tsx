import { ChevronDown, Heart } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'

function formatDate(iso: string) {
  const d = new Date(iso)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  return { day, month, year: d.getFullYear() }
}

export function Hero() {
  const { day, month, year } = formatDate(wedding.weddingDate)

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <img
        src={wedding.gallery[0] || '/images/hero.png'}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <span className="mb-6 text-sm uppercase tracking-[0.4em] text-white/80">
          Save the date
        </span>
        <p className="font-serif text-xl italic text-white/90">Đám cưới của</p>

        <h1 className="mt-2 flex flex-col items-center font-serif text-6xl font-medium leading-tight text-balance sm:text-7xl md:text-8xl">
          <span>{wedding.groom.name}</span>
          <span className="my-2 flex items-center gap-4 text-3xl md:text-4xl">
            <span className="h-px w-10 bg-white/50" />
            <Heart className="h-6 w-6 fill-current text-white/90 animate-floaty" aria-hidden="true" />
            <span className="h-px w-10 bg-white/50" />
          </span>
          <span>{wedding.bride.name}</span>
        </h1>

        <div className="mt-8 flex items-center gap-4 text-lg tracking-widest">
          <span>{day}</span>
          <span className="text-white/60">.</span>
          <span>{month}</span>
          <span className="text-white/60">.</span>
          <span>{year}</span>
        </div>
      </div>

      <a
        href="#invitation"
        aria-label="Cuộn xuống"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
