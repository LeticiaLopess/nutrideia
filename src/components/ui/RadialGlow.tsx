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
        'bg-[radial-gradient(circle,rgb(230_0_126/0.18)_0%,rgb(230_0_126/0.06)_40%,transparent_70%)]',
        className,
      )}
    />
  )
}
