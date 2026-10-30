import type { ReactNode } from 'react'
import andreiaBlackDress from '../../assets/images/andreia-black-dress.png'
import { cn } from '../../lib/cn'
import { Badge, Container, GlowText, ScriptText, Section } from '../ui'

type FaithVariant = 'home' | 'choque' | 'cozinha' | 'terapia'

const copy: Record<
  FaithVariant,
  {
    badge: string
    lead: string
    script: string
    body: ReactNode
    image?: { src: string; alt: string }
  }
> = {
  home: {
    badge: 'O fundamento',
    lead: 'Emagrecer de verdade começa quando a mente é',
    script: 'renovada.',
    body: (
      <>
        Você já sabe que precisa mudar a alimentação. Mas o que impede você de continuar? No Método
        Nutrideia, vamos trabalhar as crenças e os comportamentos que travam seu emagrecimento,
        enquanto você aprende a comer com prazer e cuidar de si.{' '}
        <strong className="font-semibold text-[#1a1a1a]">Romanos 12:2</strong> inspira esse processo:
        renovar a mente para transformar a maneira como você vive.
      </>
    ),
  },
  choque: {
    badge: 'O fundamento',
    lead: 'O choque começa quando a mente para de se',
    script: 'conformar.',
    body: (
      <>
        Em 21 dias, o que muda de verdade não é só o metabolismo, mas também a forma como você pensa.{' '}
        <strong className="font-semibold text-[#fdfaf0]">
          Emagrecimento baseado em Romanos 12:2
        </strong>
        {' '}→ renovar a mente para o corpo finalmente acompanhar e o emagrecimento ser definitivo.
      </>
    ),
  },
  cozinha: {
    badge: 'O fundamento',
    lead: 'Renove a sua mente. Você não precisa repetir a mesma',
    script: 'história.',
    body: (
      <>
        De tanto tentar e se frustrar, você começou a acreditar que não consegue emagrecer? Eu
        conheço esse lugar. Também já fui obesa e sei como é perder a confiança em você.{' '}
        <strong className="font-semibold text-white">Romanos 12:2</strong> é a base da Nutrideia:
        renovar a mente para transformar a maneira como você se cuida. E, na nossa cozinha, você
        aprende a colocar essa mudança em prática.
      </>
    ),
  },
  terapia: {
    badge: 'O fundamento',
    lead: 'Você pode mudar. E começa pela forma como você',
    script: 'se enxerga.',
    image: {
      src: andreiaBlackDress,
      alt: 'Andreia Oliveira sorrindo, de vestido preto',
    },
    body: (
      <>
        De tanto tentar emagrecer e se frustrar, você pode ter começado a acreditar que não
        consegue. Eu quero te ajudar a questionar essa crença e construir uma nova forma de cuidar
        de você.
        <br />
        <br />
        <strong className="font-semibold text-[#060606]">Romanos 12:2</strong> é o fundamento do
        meu trabalho: é esse princípio que vamos trazer para
        a prática, trabalhando os pensamentos que te fazem desistir e as atitudes que precisam
        mudar para você avançar em uma transformação completa.
      </>
    ),
  },
}

const styles: Record<
  FaithVariant,
  {
    section: string
    heading: string
    body: string
    verseBox: string
    verse: string
    cite: string
    badgeClassName?: string
    glowClassName?: string
  }
> = {
  home: {
    section: 'bg-[#ffe1f0] text-[#1a1a1a]',
    heading: 'text-[#1a1a1a]',
    body: 'text-[#3d3d3d]',
    verseBox: 'border-[#C2185B]/20 bg-white/80',
    verse: 'text-[#1a1a1a]',
    cite: 'text-[#C2185B]',
    badgeClassName: 'text-[#C2185B]!',
    glowClassName: 'text-[#C2185B]! [text-shadow:none]!',
  },
  choque: {
    section: 'bg-black text-[#fdfaf0]',
    heading: 'text-[#fdfaf0]',
    body: 'text-[#fdfaf0]/75',
    verseBox: 'border-[#fce8f2]/25 bg-white/[0.04]',
    verse: 'text-[#fdfaf0]',
    cite: 'text-[#fce8f2]',
    badgeClassName: 'text-white!',
  },
  cozinha: {
    section: 'bg-[#141414]',
    heading: 'text-neutral-100',
    body: 'text-neutral-300',
    verseBox: 'border-pink/30 bg-cozinha-brown/20',
    verse: 'text-neutral-100',
    cite: 'text-pink',
  },
  terapia: {
    section: 'bg-[#f2f2ef] text-[#060606]',
    heading: 'text-[#060606]',
    body: 'text-[#060606]/70',
    verseBox: 'border-pink/20 bg-white/70',
    verse: 'text-[#060606]/85',
    cite: 'text-pink',
    glowClassName: '[text-shadow:none]!',
  },
}

export function FaithFoundation({ variant = 'home' }: { variant?: FaithVariant }) {
  const content = copy[variant]
  const theme = styles[variant]
  const hasImage = Boolean(content.image)

  return (
    <Section id="fundamento" className={theme.section}>
      <Container className="flex flex-col items-center">
        <div
          className={cn(
            'w-full',
            hasImage
              ? 'grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'
              : variant === 'choque'
                ? 'flex max-w-4xl flex-col items-center text-center'
                : 'flex max-w-3xl flex-col items-center text-center',
          )}
        >
          <div
            className={cn(
              'flex flex-col',
              hasImage ? 'items-start text-left' : 'items-center text-center',
            )}
          >
            <Badge className={theme.badgeClassName}>{content.badge}</Badge>

            <h2
              className={cn(
                'mt-6 text-3xl leading-[1.15] font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]',
                variant === 'choque'
                  ? 'max-w-4xl'
                  : variant === 'terapia'
                    ? 'max-w-md lg:max-w-xl'
                    : 'max-w-xl lg:max-w-2xl',
                theme.heading,
              )}
            >
              {content.lead}{' '}
              {variant === 'choque' ? (
                <span className="font-black uppercase italic text-[#fce8f2]">{content.script}</span>
              ) : (
                <GlowText
                  animated={false}
                  className={cn(
                    'font-display mt-1 text-[1.3em] leading-[0] font-normal',
                    theme.glowClassName,
                  )}
                >
                  <ScriptText>{content.script}</ScriptText>
                </GlowText>
              )}
            </h2>

            <p
              className={cn(
                'mt-8 text-base leading-[1.6] lg:text-lg',
                hasImage ? 'max-w-xl' : 'max-w-2xl',
                theme.body,
              )}
            >
              {content.body}
            </p>
          </div>

          {content.image && (
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl bg-[#F1EAD8] sm:max-w-sm lg:max-w-md">
              <img
                src={content.image.src}
                alt={content.image.alt}
                loading="lazy"
                className="w-full object-cover object-top -mb-[100px]"
              />
            </div>
          )}
        </div>

        <blockquote
          className={cn(
            'mt-14 max-w-2xl rounded-2xl border px-6 py-8 text-center sm:px-10 sm:py-10',
            theme.verseBox,
          )}
        >
          <p
            className={cn(
              'text-lg leading-[1.45] font-medium italic sm:text-xl sm:leading-[1.4]',
              theme.verse,
            )}
          >
            “Não se amoldem ao padrão deste mundo, mas{' '}
            <strong className="font-bold">transformem-se</strong> pela renovação da sua mente.”
          </p>
          <cite
            className={cn(
              'mt-5 block text-xs font-semibold tracking-[0.28em] uppercase not-italic',
              theme.cite,
            )}
          >
            Romanos 12:2
          </cite>
        </blockquote>
      </Container>
    </Section>
  )
}
