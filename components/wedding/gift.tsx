'use client'

import { useState } from 'react'
import { Check, Copy, Gift as GiftIcon } from 'lucide-react'
import { wedding } from '@/lib/wedding-config'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Gift() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
      setTimeout(() => setCopied(null), 1800)
    } catch {
      setCopied(null)
    }
  }

  return (
    <section id="gift" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Mừng cưới" title="Hộp mừng cưới" />

        <Reveal>
          <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-muted-foreground text-pretty">
            Sự hiện diện của bạn là niềm hạnh phúc lớn nhất. Nếu muốn gửi lời chúc
            phúc, bạn có thể gửi đến đôi uyên ương qua thông tin bên dưới.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {wedding.gifts.map((gift, i) => (
            <Reveal key={gift.account} delay={i * 120}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GiftIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">
                  {gift.label}
                </span>
                <p className="mt-3 font-serif text-2xl text-foreground">{gift.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{gift.bank}</p>

                <div className="mt-5 flex items-center gap-3 rounded-full bg-secondary px-5 py-2.5">
                  <span className="font-mono text-lg tracking-wider text-foreground">
                    {gift.account}
                  </span>
                  <button
                    type="button"
                    onClick={() => copy(gift.account)}
                    className="text-primary transition hover:text-primary/70"
                    aria-label="Sao chép số tài khoản"
                  >
                    {copied === gift.account ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {copied === gift.account ? (
                  <span className="mt-2 text-xs text-primary">Đã sao chép!</span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
