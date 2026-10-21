import { cn } from '../../lib/cn'

type RadialGlowProps = {
  className?: string
}

export function RadialGlow({ className }: RadialGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute rounded-full blur-xl',
        'bg-[radial-gradient(circle,rgb(var(--glow-rgb)/0.18)_0%,rgb(var(--glow-rgb)/0.06)_40%,transparent_70%)]',
        className,
      )}
    />
  )
}
