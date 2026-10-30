import type { AnchorHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function NavLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'relative py-1 text-sm font-medium text-[#1a1a1a] transition-colors hover:text-pink',
        'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-pink after:transition-all after:duration-300 hover:after:w-full',
        className,
      )}
      {...props}
    />
  )
}
