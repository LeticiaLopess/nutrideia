import tape from '../../assets/images/fita.png'
import { cn } from '../../lib/cn'

type TapeDividerProps = {
  className?: string
}

export function TapeDivider({ className }: TapeDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none relative z-10 h-0 overflow-x-clip', className)}
    >
      <img
        src={tape}
        alt=""
        className="absolute top-1/2 left-1/2 w-[max(14.5vw,6rem)] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 drop-shadow-[0_4px_6px_rgb(0_0_0/0.35)]"
      />
    </div>
  )
}
