import { wedding } from '@/lib/wedding-config'
import { Countdown } from './countdown'
import { Reveal } from './reveal'

export function Invitation() {
  return (
    <section id="invitation" className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Lời ngỏ
            </span>
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-foreground text-pretty md:text-3xl">
              “{wedding.invitation.quote}”
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              {wedding.invitation.message}
            </p>
            <p className="mt-8 font-serif text-3xl text-primary">
              {wedding.groom.name} &amp; {wedding.bride.name}
            </p>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2" delay={150}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-primary/25" />
            <img
              src="/images/invitation.png"
              alt={`${wedding.groom.name} và ${wedding.bride.name}`}
              className="relative aspect-[3/4] w-full rounded-[1.6rem] object-cover shadow-xl"
            />
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-20 px-6" delay={100}>
        <p className="mb-8 text-center font-serif text-2xl text-foreground md:text-3xl">
          Đếm ngược đến ngày hạnh phúc
        </p>
        <Countdown date={wedding.weddingDate} />
      </Reveal>
    </section>
  )
}
