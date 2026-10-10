import { cn } from '../../lib/cn'

// A fonte Right Female não tem letras acentuadas, só os sinais soltos.
type Accent = { base: string; mark: string; className: string }

const tilde = 'bottom-[0.45em] text-[0.75em]'
const acute = 'bottom-[0.34em] text-[0.85em]'
const circumflex = 'bottom-[0.5em] text-[0.85em]'

const accents: Record<string, Accent> = {
  ã: { base: 'a', mark: '~', className: tilde },
  õ: { base: 'o', mark: '~', className: tilde },
  á: { base: 'a', mark: '´', className: acute },
  é: { base: 'e', mark: '´', className: acute },
  í: { base: 'i', mark: '´', className: 'bottom-[0.54em] text-[0.85em]' },
  ó: { base: 'o', mark: '´', className: acute },
  ú: { base: 'u', mark: '´', className: acute },
  à: { base: 'a', mark: '`', className: acute },
  â: { base: 'a', mark: '^', className: circumflex },
  ê: { base: 'e', mark: '^', className: circumflex },
  ô: { base: 'o', mark: '^', className: circumflex },
  ç: { base: 'c', mark: '¸', className: '-bottom-[0.06em] text-[1.15em]' },
}

type ScriptTextProps = {
  children: string
}

export function ScriptText({ children }: ScriptTextProps) {
  const segments: (string | Accent)[] = []
  for (const char of children) {
    const accent = accents[char]
    const last = segments.at(-1)
    if (accent) segments.push(accent)
    else if (typeof last === 'string') segments[segments.length - 1] = last + char
    else segments.push(char)
  }

  return (
    <>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {segments.map((segment, index) =>
          typeof segment === 'string' ? (
            segment
          ) : (
            <span key={index} className="relative inline-block leading-none">
              {segment.base}
              <span
                className={cn(
                  'absolute left-1/2 -translate-x-1/2 leading-none',
                  segment.className,
                )}
              >
                {segment.mark}
              </span>
            </span>
          ),
        )}
      </span>
    </>
  )
}
