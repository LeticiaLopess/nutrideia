import type { HTMLAttributes, ReactNode } from 'react'
import caneta from '../../assets/images/caneta.png'
import { cn } from '../../lib/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  marker?: 'bolt' | 'pen'
  children: ReactNode
}

export function Badge({ marker = 'bolt', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'badge inline-flex flex-col items-center gap-1.5 text-xs font-semibold tracking-[0.3em] uppercase',
        className,
      )}
      {...props}
    >
      {children}
      {marker === 'pen' ? (
        <span aria-hidden="true" className="relative h-3 w-[5.25rem]">
          <img
            src={caneta}
            alt=""
            className="absolute top-1/2 left-1/2 h-[5.25rem] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 select-none"
          />
        </span>
      ) : (
        <span aria-hidden="true" className="badge-underline" />
      )}
    </span>
  )
}
