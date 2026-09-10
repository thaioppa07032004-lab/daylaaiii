'use client'

import { useState, type FormEvent } from 'react'
import { Heart, Send } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Wish = {
  name: string
  message: string
  attending: 'yes' | 'no'
}

const initialWishes: Wish[] = [
  {
    name: 'Minh Anh',
    message: 'Chúc hai bạn trăm năm hạnh phúc, sớm sinh quý tử nhé!',
    attending: 'yes',
  },
  {
    name: 'Gia đình bác Tú',
    message: 'Mừng hạnh phúc hai cháu. Chúc trọn đời bên nhau yêu thương!',
    attending: 'yes',
  },
]

export function Rsvp() {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [attending, setAttending] = useState<'yes' | 'no'>('yes')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    setWishes((prev) => [
      { name: name.trim(), message: message.trim(), attending },
      ...prev,
    ])
    setName('')
    setMessage('')
    setAttending('yes')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="rsvp" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Xác nhận"
          title="Xác nhận tham dự & Lưu bút"
        />

        <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-muted-foreground text-pretty">
          Hãy để lại lời chúc và cho {wedding.groom.name} &amp; {wedding.bride.name} biết
          bạn có thể đến chung vui nhé!
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="rsvp-name" className="mb-2 block text-sm font-medium text-foreground">
                    Họ và tên
                  </label>
                  <input
                    id="rsvp-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Nhập tên của bạn"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="rsvp-message" className="mb-2 block text-sm font-medium text-foreground">
                    Lời chúc
                  </label>
                  <textarea
                    id="rsvp-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Gửi lời chúc đến cô dâu chú rể..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <span className="mb-2 block text-sm font-medium text-foreground">
                    Bạn sẽ tham dự chứ?
                  </span>
                  <div className="flex gap-3">
                    {[
                      { value: 'yes', label: 'Có, chắc chắn rồi!' },
                      { value: 'no', label: 'Tiếc là không thể' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setAttending(opt.value as 'yes' | 'no')}
                        className={`flex-1 rounded-lg border px-4 py-2.5 text-sm transition ${
                          attending === opt.value
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-input bg-background text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Gửi lời chúc
                </button>

                {submitted ? (
                  <p className="text-center text-sm text-primary">
                    Cảm ơn bạn đã gửi lời chúc yêu thương!
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex h-full flex-col">
              <h3 className="mb-5 font-serif text-2xl text-foreground">
                Sổ lưu bút ({wishes.length})
              </h3>
              <div className="flex max-h-[28rem] flex-col gap-4 overflow-y-auto pr-1">
                {wishes.map((wish, i) => (
                  <div
                    key={`${wish.name}-${i}`}
                    className="rounded-xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 font-medium text-foreground">
                        <Heart className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                        {wish.name}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs ${
                          wish.attending === 'yes'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {wish.attending === 'yes' ? 'Sẽ tham dự' : 'Không thể đến'}
                      </span>
                    </div>
                    {wish.message ? (
                      <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                        {wish.message}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
