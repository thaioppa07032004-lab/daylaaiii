import { Heart } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-24 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <p className="font-serif text-sm uppercase tracking-[0.4em] text-primary">
          Cảm ơn bạn
        </p>
        <h2 className="mt-6 flex flex-col items-center font-serif text-5xl text-foreground md:text-6xl">
          <span>{wedding.groom.name}</span>
          <span className="my-3 flex items-center gap-3 text-primary">
            <span className="h-px w-8 bg-primary/40" />
            <Heart className="h-5 w-5 fill-current animate-floaty" aria-hidden="true" />
            <span className="h-px w-8 bg-primary/40" />
          </span>
          <span>{wedding.bride.name}</span>
        </h2>
        <p className="mt-8 text-lg tracking-widest text-muted-foreground">
          {formatDate(wedding.weddingDate)}
        </p>
        <p className="mt-6 text-sm text-muted-foreground">{wedding.hashtag}</p>

        <p className="mt-12 text-xs text-muted-foreground/70">
          Made with love — Thiệp cưới online
        </p>
      </div>
    </footer>
  )
}
