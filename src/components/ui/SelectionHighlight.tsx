import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function SelectionHighlight({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn('relative mx-1 inline-block bg-pink/15 px-2', className)}
      {...props}
    >
      <span aria-hidden="true" className="absolute top-0 -left-px h-full w-0.5 bg-pink">
        <span className="absolute -top-1.5 left-1/2 size-2 -translate-x-1/2 rounded-full bg-pink" />
      </span>
      {children}
      <span aria-hidden="true" className="absolute top-0 -right-px h-full w-0.5 bg-pink">
        <span className="absolute -bottom-1.5 left-1/2 size-2 -translate-x-1/2 rounded-full bg-pink" />
      </span>
    </span>
  )
}
