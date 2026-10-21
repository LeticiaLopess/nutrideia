import type { ReactNode } from 'react'
import { testimonials, type Testimonial } from '../../data/testimonials'
import { cn } from '../../lib/cn'
import { Badge, Carousel, Container, GlowText, ScriptText, Section } from '../ui'

const topRow = testimonials.filter((_, index) => index % 2 === 0)
const bottomRow = testimonials.filter((_, index) => index % 2 === 1)

type TestimonialsProps = {
  description?: ReactNode
  descriptionClassName?: string
  className?: string
  /** Choque usa tipografia bold italic em vez da script cursiva */
  accent?: 'script' | 'shock'
}

export function Testimonials({
  description,
  descriptionClassName,
  className = 'bg-[#eef0f2]',
  accent = 'script',
}: TestimonialsProps) {
  return (
    <Section id="depoimentos" className={cn('pt-4 lg:pt-8', className)}>
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl mt-20 flex-col items-center text-center">
          <Badge>Depoimentos</Badge>

          <h2 className="mt-6 text-3xl leading-none font-medium text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
            <span className="font-semibold text-pink">+10.000</span> mulheres pelo mundo já viveram
            essa{' '}
            {accent === 'shock' ? (
              <span className="font-black uppercase italic">transformação.</span>
            ) : (
              <GlowText
                animated={false}
                className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:0_0_18px_rgb(var(--glow-rgb)/0.25)]!"
              >
                <ScriptText>transformação.</ScriptText>
              </GlowText>
            )}
          </h2>

          <p
            className={cn(
              'mt-8 text-base leading-[1.6] text-neutral-600 lg:text-lg',
              descriptionClassName ?? 'max-w-2xl',
            )}
          >
            {description ?? (
              <>
                O método que você está prestes a conhecer já foi{' '}
                <strong className="font-semibold text-neutral-900">colocado à prova e aprovado</strong>{' '}
                por mais de 10 mil alunas em todo o mundo. Mas não precisa acreditar só em mim:{' '}
                <span className="font-semibold text-pink">veja o que elas têm a dizer.</span>
              </>
            )}
          </p>
        </div>
      </Container>

      <div className="mt-16 flex flex-col gap-6 lg:mt-20">
        <Carousel label="Depoimentos" duration={90} itemClassName="w-[21rem]">
          {topRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Carousel>

        <Carousel label="Mais depoimentos" duration={90} reverse itemClassName="w-[21rem]">
          {bottomRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </Section>
  )
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.charAt(0) ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : ''
  return (first + last).toUpperCase()
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative flex h-[22.5rem] flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-[0_10px_30px_rgb(0_0_0/0.06)]">
      <SourceIcon source={testimonial.source} />

      <div className="flex gap-1 text-pink" aria-label="5 de 5 estrelas">
        {Array.from({ length: 5 }, (_, index) => (
          <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
            <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z" />
          </svg>
        ))}
      </div>

      <blockquote className="mt-5 overflow-hidden text-[0.8125rem] leading-[1.4] text-neutral-700">
        “{testimonial.text}”
      </blockquote>

      <figcaption className="mt-auto flex items-center gap-3 pt-6">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt=""
            loading="lazy"
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pink/10 text-sm font-semibold text-pink"
          >
            {getInitials(testimonial.name)}
          </span>
        )}
        <span className="text-sm font-semibold text-neutral-900">{testimonial.name}</span>
      </figcaption>
    </figure>
  )
}

function SourceIcon({ source }: { source: Testimonial['source'] }) {
  if (source === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" className="absolute top-[23.5px] right-[23.5px] size-[21px]" role="img" aria-label="Facebook">
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path
          fill="#fff"
          d="M15.1 12.5l.4-2.9h-2.8V7.8c0-.8.4-1.6 1.6-1.6h1.3V3.7s-1.1-.2-2.2-.2c-2.3 0-3.7 1.4-3.7 3.9v2.2H7.2v2.9h2.5V20h3V12.5z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="absolute top-6 right-6 size-5" role="img" aria-label="Google">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.4 7.4 24 12 24z" />
      <path fill="#FBBC05" d="M5.4 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.6.4-2.4V6.5H1.4C.5 8.2 0 10 0 12s.5 3.8 1.4 5.5l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.6 1.4 6.5l4 3.1c.9-2.8 3.5-4.8 6.6-4.8z" />
    </svg>
  )
}
