import type { ComponentPropsWithRef } from 'react'
import { cn } from '../../lib/cn'

export function Section({ className, ...props }: ComponentPropsWithRef<'section'>) {
  return (
    <section
      className={cn('relative isolate overflow-hidden py-24 lg:py-32', className)}
      {...props}
    />
  )
}
