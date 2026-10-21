import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'badge inline-flex flex-col items-stretch gap-2 text-xs font-semibold tracking-[0.3em] uppercase',
        className,
      )}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="badge-underline" />
    </span>
  )
}
