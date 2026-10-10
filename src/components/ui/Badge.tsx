import type { CSSProperties, HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const rulerTicks: CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 6px)',
  backgroundSize: '100% 8px, 100% 4px',
  backgroundPosition: 'left bottom',
  backgroundRepeat: 'no-repeat',
}

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex flex-col items-stretch gap-2 text-xs font-semibold tracking-[0.3em] text-pink uppercase',
        className,
      )}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="h-2 opacity-50" style={rulerTicks} />
    </span>
  )
}
