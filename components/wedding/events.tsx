import { Calendar, Clock, MapPin } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Events() {
  return (
    <section id="events" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Sự kiện" title="Thời gian & Địa điểm" />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {wedding.events.map((event, i) => (
            <Reveal key={event.title} delay={i * 120}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  {event.side}
                </span>
                <h3 className="mt-3 font-serif text-3xl text-foreground">{event.title}</h3>

                <div className="my-6 h-px w-16 bg-primary/30" />

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>{event.date}</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>{event.time}</span>
                  </li>
                  <li className="flex items-start justify-center gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-foreground">{event.venue}</span>
                      {event.address}
                    </span>
                  </li>
                </ul>

                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Xem bản đồ
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
