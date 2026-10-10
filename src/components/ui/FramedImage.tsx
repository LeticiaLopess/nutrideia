import type { ImgHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type FramedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string
}

export function FramedImage({ wrapperClassName, className, alt, ...props }: FramedImageProps) {
  return (
    <div className={cn('relative isolate', wrapperClassName)}>
      <div
        aria-hidden="true"
        className="absolute -top-6 -right-6 -z-10 size-28 rounded-2xl bg-pink shadow-[0_0_40px_rgb(230_0_126/0.35)] lg:-top-8 lg:-right-8 lg:size-36"
      />
      <img
        alt={alt}
        className={cn(
          'h-full w-full rounded-2xl border-2 border-white/5 object-cover shadow-2xl',
          className,
        )}
        {...props}
      />
    </div>
  )
}
