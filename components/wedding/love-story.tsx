import { Heart } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function LoveStory() {
  return (
    <section id="story" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Hành trình" title="Chuyện tình yêu" />

        <div className="relative mt-16">
          <span
            className="absolute left-4 top-2 h-full w-px bg-primary/25 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {wedding.loveStory.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? 'md:ml-0 md:pr-12 md:text-right'
                      : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <span
                    className={`absolute left-4 top-1.5 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-auto ${
                      i % 2 === 0 ? 'md:-right-3 md:left-auto md:translate-x-1/2' : 'md:-left-3 md:-translate-x-1/2'
                    }`}
                    aria-hidden="true"
                  >
                    <Heart className="h-3 w-3 fill-current" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground text-pretty">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
