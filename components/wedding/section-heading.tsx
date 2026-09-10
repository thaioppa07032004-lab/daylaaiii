import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      {eyebrow ? (
        <span className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-4xl font-medium text-foreground text-balance md:text-5xl">
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-3 text-primary/70">
        <span className="h-px w-10 bg-primary/40" />
        <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
        <span className="h-px w-10 bg-primary/40" />
      </div>
    </div>
  )
}
