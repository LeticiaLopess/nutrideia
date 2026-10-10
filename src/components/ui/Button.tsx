import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'solid' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink disabled:pointer-events-none disabled:opacity-50 cursor-pointer'

const variants: Record<Variant, string> = {
  primary:
    'bg-pink text-white inset-shadow-[0_2px_8px_rgb(255_255_255/0.22)] shadow-[0_0_24px_rgb(230_0_126/0.45)] hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgb(230_0_126/0.7)]',
  solid: 'bg-pink text-white inset-shadow-[0_2px_8px_rgb(255_255_255/0.22)] hover:bg-pink/85',
  outline:
    'border border-pink text-pink hover:bg-pink hover:text-white',
  ghost: 'text-white hover:text-pink',
}

const sizes: Record<Size, string> = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-3.5 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (props.href !== undefined) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
