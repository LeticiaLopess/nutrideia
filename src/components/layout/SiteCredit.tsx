import { cn } from '../../lib/cn'
import { Container } from '../ui'

const instagramHref = 'https://www.instagram.com/dewelops/'
const siteHref = 'https://www.dewelops.com'

type SiteCreditProps = {
  className?: string
  tone?: 'light' | 'dark'
  /** When true, skips the outer footer/Container (for nesting inside another footer). */
  bare?: boolean
}

export function SiteCredit({ className, tone = 'light', bare = false }: SiteCreditProps) {
  const dark = tone === 'dark'

  const content = (
    <p
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-[11px] leading-none',
        dark ? 'text-white/40' : 'text-black/35',
        bare && className,
      )}
    >
      <span>
        Feito por{' '}
        <a
          href={siteHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'font-medium underline decoration-1 underline-offset-2 transition-colors',
            dark ? 'text-white/55 hover:text-white/80' : 'text-black/50 hover:text-black/70',
          )}
        >
          Dewelops
        </a>
      </span>
      <span aria-hidden="true">·</span>
      <a
        href={instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('transition-colors', dark ? 'hover:text-white/70' : 'hover:text-black/60')}
      >
        @dewelops
      </a>
      <span aria-hidden="true">·</span>
      <a
        href={siteHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('transition-colors', dark ? 'hover:text-white/70' : 'hover:text-black/60')}
      >
        www.dewelops.com
      </a>
    </p>
  )

  if (bare) return content

  return (
    <footer
      className={cn(
        'border-t py-3',
        dark ? 'border-white/10 bg-black' : 'border-black/10 bg-transparent',
        className,
      )}
    >
      <Container>{content}</Container>
    </footer>
  )
}
