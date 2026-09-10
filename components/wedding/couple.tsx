import { Heart } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Person = typeof wedding.groom

function PersonCard({ person, delay }: { person: Person; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full border border-primary/20" />
          <img
            src={person.photo || '/placeholder.svg'}
            alt={person.fullName}
            className="relative h-56 w-56 rounded-full object-cover shadow-lg md:h-64 md:w-64"
          />
        </div>
        <span className="mt-6 text-xs uppercase tracking-[0.3em] text-primary">
          {person.role}
        </span>
        <h3 className="mt-2 font-serif text-4xl text-foreground">{person.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{person.fullName}</p>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground text-pretty">
          {person.description}
        </p>
        <div className="mt-5 space-y-1 text-sm text-foreground/80">
          <p>{person.father}</p>
          <p>{person.mother}</p>
        </div>
      </div>
    </Reveal>
  )
}

export function Couple() {
  return (
    <section id="couple" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Dâu & Rể" title="Cô dâu & Chú rể" />

        <div className="mt-16 grid items-start gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          <PersonCard person={wedding.groom} delay={0} />

          <div className="flex items-center justify-center md:pt-24">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-floaty">
              <Heart className="h-7 w-7 fill-current" aria-hidden="true" />
            </div>
          </div>

          <PersonCard person={wedding.bride} delay={150} />
        </div>
      </div>
    </section>
  )
}
