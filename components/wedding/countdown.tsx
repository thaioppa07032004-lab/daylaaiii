'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

export function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime()
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getRemaining(target))
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const items = [
    { label: 'Ngày', value: time.days },
    { label: 'Giờ', value: time.hours },
    { label: 'Phút', value: time.minutes },
    { label: 'Giây', value: time.seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-primary/25 bg-card/70 backdrop-blur-sm sm:h-24 sm:w-24"
        >
          <span className="font-serif text-3xl font-semibold leading-none text-primary sm:text-4xl">
            {mounted ? String(item.value).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
