import { useEffect, useState } from 'react'
import { challengeBenefits, challengeStartsAt, vipGroupHref } from '../../data/challenge'
import { Badge, Button, Container, GlowText, LineIcon, RadialGlow, Section } from '../ui'

export function Challenge() {
  return (
    <Section id="desafio" className="bg-[#eef0f2]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Para quem é</Badge>

          <h2 className="mt-6 text-3xl leading-[1] font-medium text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
            Ideal para mulheres que já tentaram de tudo e{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:0_0_18px_rgb(230_0_126/0.25)]!"
            >
              desejam:
            </GlowText>
          </h2>
        </div>

        <ul className="mt-16 grid w-full gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {challengeBenefits.map((benefit) => (
            <li
              key={benefit.text}
              className="group flex items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgb(0_0_0/0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-pink/30 hover:shadow-[0_14px_36px_rgb(230_0_126/0.12)]"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-pink/10 text-pink transition-colors duration-300 group-hover:bg-pink group-hover:text-white">
                <LineIcon name={benefit.icon} className="size-7" />
              </span>
              <span className="text-[15px] leading-[1.45] font-medium text-neutral-700">{benefit.text}</span>
            </li>
          ))}
        </ul>

        <div className="relative isolate mt-20 w-full overflow-hidden rounded-3xl bg-[#101010] px-6 py-14 text-center shadow-[0_30px_60px_rgb(0_0_0/0.25)] sm:px-12 lg:mt-24 lg:py-16">
          <RadialGlow className="-top-72 left-1/2 -z-10 size-[44rem] -translate-x-1/2 opacity-40" />

          <p className="text-sm font-semibold tracking-[0.35em] text-neutral-300 uppercase sm:text-base">
            O desafio começa em
          </p>

          <Countdown target={challengeStartsAt} />

          <p className="mx-auto mt-10 max-w-2xl text-base leading-[1.6] text-neutral-300 lg:text-lg">
            Preparei uma{' '}
            <strong className="font-semibold text-white">condição especial para quem entrar no Grupo VIP</strong>{' '}
            do WhatsApp: conteúdos exclusivos, uma imersão 100% gratuita e o desafio por um{' '}
            <span className="font-semibold text-pink">preço muito abaixo do que ele realmente vale.</span>
          </p>

          <Button href={vipGroupHref} size="lg" className="mt-10">
            Quero entrar no Grupo VIP
          </Button>
        </div>
      </Container>
    </Section>
  )
}

const units = [
  { label: 'Dias', ms: 86_400_000 },
  { label: 'Horas', ms: 3_600_000 },
  { label: 'Minutos', ms: 60_000 },
  { label: 'Segundos', ms: 1_000 },
]

function getParts(target: number) {
  let remaining = Math.max(0, target - Date.now())

  return units.map((unit) => {
    const value = Math.floor(remaining / unit.ms)
    remaining -= value * unit.ms
    return { label: unit.label, value }
  })
}

function Countdown({ target }: { target: string }) {
  const targetTime = new Date(target).getTime()
  const [parts, setParts] = useState(() => getParts(targetTime))

  useEffect(() => {
    const id = setInterval(() => setParts(getParts(targetTime)), 1000)
    return () => clearInterval(id)
  }, [targetTime])

  return (
    <div className="mt-8 flex justify-center gap-3 sm:gap-4" role="timer" aria-live="off">
      {parts.map((part) => (
        <div
          key={part.label}
          className="flex w-[4.5rem] flex-col items-center rounded-xl border border-pink/40 bg-white/[0.02] py-4 sm:w-24 sm:py-5"
        >
          <span className="text-3xl leading-none font-semibold text-white tabular-nums sm:text-5xl">
            {String(part.value).padStart(2, '0')}
          </span>
          <span className="mt-2 text-[10px] font-medium tracking-widest text-pink uppercase sm:text-xs">
            {part.label}
          </span>
        </div>
      ))}
    </div>
  )
}
