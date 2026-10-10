import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CarouselProps = {
  children: ReactNode[]
  label: string
  className?: string
  itemClassName?: string
  duration?: number
  reverse?: boolean
}

export function Carousel({
  children,
  label,
  className,
  itemClassName,
  duration = 45,
  reverse = false,
}: CarouselProps) {
  const renderItems = (hidden: boolean) =>
    children.map((child, index) => (
      <li key={`${hidden ? 'clone' : 'item'}-${index}`} aria-hidden={hidden || undefined} className={cn('shrink-0 pr-6', itemClassName)}>
        {child}
      </li>
    ))

  return (
    <div
      className={cn(
        'group relative overflow-hidden motion-reduce:overflow-x-auto',
        '[mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]',
        className,
      )}
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
    >
      <ul
        className={cn(
          'animate-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none',
          reverse && '[animation-direction:reverse]',
        )}
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        {renderItems(false)}
        {renderItems(true)}
      </ul>
    </div>
  )
}
