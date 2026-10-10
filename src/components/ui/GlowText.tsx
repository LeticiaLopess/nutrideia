import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type GlowTextProps = HTMLAttributes<HTMLSpanElement> & {
  animated?: boolean
}

export function GlowText({ animated = true, className, ...props }: GlowTextProps) {
  return (
    <span
      className={cn(
        'inline-block text-pink',
        animated
          ? 'animate-shine motion-reduce:animate-none motion-reduce:[text-shadow:0_0_18px_rgb(230_0_126/0.7)]'
          : '[text-shadow:0_0_18px_rgb(230_0_126/0.7)]',
        className,
      )}
      {...props}
    />
  )
}
