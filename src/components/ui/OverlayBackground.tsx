import { cn } from '../../lib/cn'

type OverlayBackgroundProps = {
  src: string
  className?: string
  overlayClassName?: string
}

export function OverlayBackground({ src, className, overlayClassName }: OverlayBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute bg-cover bg-center', className)}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={cn('absolute inset-0', overlayClassName)} />
    </div>
  )
}
