import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import andreiaAbout from '../assets/images/andreia-about.jpg'
import andreiaXocaneta from '../assets/images/andreia-xocaneta.png'
import bgChristmas from '../assets/images/bg-christmas.jpg'
import choqueMetabolismo from '../assets/images/choque-metabolismo.png'
import ebookNatal from '../assets/images/ebook-natal.png'
import floco from '../assets/images/floco.webp'
import logoChoque from '../assets/images/logo-choque.png'
import { FaithFoundation } from '../components/sections/FaithFoundation'
import { Testimonials } from '../components/sections/Testimonials'
import {
  Badge,
  Button,
  Carousel,
  CheckIcon,
  Container,
  CrossIcon,
  LineIcon,
  Section,
} from '../components/ui'
import { metabolismShockSteps } from '../data/method'
import { results } from '../data/results'
import {
  xocanetaComparison,
  xocanetaCosts,
  xocanetaFormatted,
  xocanetaMarquee,
  xocanetaOffer,
  xocanetaPains,
  xocanetaWeeks,
} from '../data/xocaneta'
import { cn } from '../lib/cn'

gsap.registerPlugin(useGSAP)

const checkout = xocanetaOffer.checkoutHref
const endsAt = new Date(xocanetaOffer.endsAt)

type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function useCountdown(target: Date): Countdown {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const totalSeconds = Math.max(0, Math.floor((target.getTime() - now) / 1000))

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    expired: totalSeconds === 0,
  }
}

export function Xocaneta() {
  return (
    <>
      <TopBar />
      <main className="pb-24 text-black md:pb-0">
        <Hero />
        <Truth />
        <Comparison />
        <CostShock />
        <FaithFoundation variant="xocaneta" />
        <Learn />
        <Weeks />
        <ResultsStrip />
        <Testimonials
          accent="shock"
          badgeMarker="pen"
          className="bg-[#fce8f2]"
          heading={
            <>
              <span className="font-semibold text-pink">+10.000</span> mulheres já emagreceram fora
              do <Shock>padrão do mundo.</Shock>
            </>
          }
          description={
            <>
              Elas emagreceram com comida, método e mente renovada,{' '}
              <strong className="font-semibold text-black">não com canetas emagrecedoras.</strong> Desde 2017, o
              Choque no Metabolismo prova que dá pra sair da estagnação sem camuflar o resultado.{' '}
              <span className="font-semibold text-black underline decoration-2 underline-offset-4">
                Leia o que elas dizem.
              </span>
            </>
          }
        />
        <Pricing />
        <NatalBonus />
        <AboutAndreia />
        <FinalCall />
        <Disclaimer />
      </main>
      <MobileBuyBar />
    </>
  )
}

function Shock({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('font-black uppercase italic', className)}>{children}</span>
}

function Strike({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block text-black/40">
      {children}
      <span
        aria-hidden="true"
        className="absolute top-[55%] right-[-6%] left-[-6%] h-[0.18em] -rotate-6 bg-black"
      />
    </span>
  )
}

function Guarantee({ className }: { className?: string }) {
  return (
    <p className={cn('mt-4 flex items-center justify-center gap-2 text-sm text-black/60', className)}>
      <LineIcon name="zap" className="size-4" />
      Compra segura · 7 dias de garantia
    </p>
  )
}

function CountdownBoxes({ compact = false, onDark = false }: { compact?: boolean; onDark?: boolean }) {
  const time = useCountdown(endsAt)

  if (time.expired) {
    return (
      <p
        className={cn(
          'text-xs font-black tracking-[0.22em] uppercase',
          onDark ? 'text-[#fce8f2]' : 'text-black',
        )}
      >
        Últimas vagas da Black Friday
      </p>
    )
  }

  const units = [
    { label: 'dias', value: pad(time.days) },
    { label: 'hrs', value: pad(time.hours) },
    { label: 'min', value: pad(time.minutes) },
    { label: 'seg', value: pad(time.seconds) },
  ]

  return (
    <div
      className={cn('flex items-center', compact ? 'gap-1.5' : 'gap-2')}
      aria-label="Contagem regressiva da Black Friday"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className={cn(
            'flex flex-col items-center rounded-lg border',
            compact ? 'min-w-11 px-1.5 py-1' : 'min-w-14 px-2 py-2 sm:min-w-16',
            onDark ? 'border-[#fce8f2]/25 bg-white/5' : 'border-black/10 bg-white/70',
          )}
        >
          <span
            className={cn(
              'font-black tabular-nums',
              compact ? 'text-sm' : 'text-lg sm:text-xl',
              onDark ? 'text-[#fce8f2]' : 'text-black',
            )}
          >
            {unit.value}
          </span>
          <span
            className={cn(
              'text-[9px] tracking-[0.16em] uppercase',
              onDark ? 'text-[#fdfaf0]/50' : 'text-black/45',
            )}
          >
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}

function TopBar() {
  const items = [...xocanetaMarquee, ...xocanetaMarquee]

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="overflow-hidden bg-black">
        <div
          className="animate-marquee flex w-max motion-reduce:animate-none"
          style={{ '--marquee-duration': '28s' } as CSSProperties}
        >
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center px-5 py-1.5 text-[11px] font-black tracking-[0.22em] text-[#fce8f2] uppercase"
            >
              {item}
              <span className="ml-5 text-[#fdfaf0]">✦</span>
            </span>
          ))}
        </div>
      </div>
      <header className="border-b border-black/10 bg-[#fdfaf0]/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <a href="/xocaneta/" className="flex items-center gap-3">
            <img src={logoChoque} alt="Choque no Metabolismo" className="h-9 w-auto sm:h-10" />
            <span className="hidden mt-1 font-black tracking-[0.18em] text-black uppercase sm:inline">
              Xô Caneta
            </span>
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <CountdownBoxes compact />
            </div>
            <Button href={checkout} variant="solid" size="sm" className="max-sm:hidden">
              Quero o choque
            </Button>
          </div>
        </Container>
      </header>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-[#fdfaf0] via-[#fdfaf0] to-[#fce8f2] pt-32 sm:pt-36 lg:min-h-svh lg:pt-18">
      <Container className="relative grid items-end gap-8 md:grid-cols-[1.15fr_0.85fr] md:min-h-[calc(100svh-7rem)]">
        <div className="flex flex-col items-center self-center text-center md:items-start md:pb-16 md:text-left">
          <h1 className="max-w-3xl text-[2.6rem] leading-[0.92] font-black tracking-tight sm:text-6xl lg:text-[5.25rem]">
            XÔ, <Strike>CANETA.</Strike>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-[1.45] font-medium text-black/80 sm:text-xl">
            Você não precisa de “canetinha”. Você só precisa aprender a{' '}
            <strong className="text-black">ativar de forma natural</strong> os hormônios da
            saciedade que o seu corpo já produz e a caneta só imita, porque ela é uma{' '}
            <strong className="text-black">imitadora</strong> 👿
          </p>

          <p className="mt-5 max-w-lg text-base leading-[1.6] text-black/65">
            A moda agora é aplicar caneta e fazer cirurgias, mas a real é que elas não tratam a raiz do problema da obesidade.{' '} <strong>Existe um código por trás do emagrecimento definitivo e eu só preciso de 21 dias para você virar especialista nele.</strong> 
          </p>

          <Button href={checkout} size="lg" className="mt-8 max-sm:w-full max-sm:text-[15px]">
            Quero aprender o código
          </Button>
          <p className="mt-4 text-sm text-black/55">
            Na Black Friday, o Choque sai de {xocanetaFormatted.original} por {xocanetaFormatted.sale}.
          </p>
          <Guarantee className="md:justify-start" />
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mr-0 lg:max-w-none">
          <img
            src={andreiaXocaneta}
            alt="Andreia Oliveira quebrando uma caneta emagrecedora ao meio"
            className="relative z-10 mx-auto h-auto w-full max-h-[30rem] origin-bottom object-contain object-bottom md:max-h-none md:w-[490px] md:translate-x-2"
          />
        </div>
      </Container>
    </section>
  )
}

function Truth() {
  return (
    <Section className="bg-[#fdfaf0]">
      <Container className="grid items-center gap-14 md:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge marker="pen">A verdade</Badge>
          <h2 className="mt-6 max-w-lg text-3xl leading-[1.12] font-medium text-pretty sm:text-4xl lg:text-[2.75rem]">
            A caneta mente pro seu cérebro.{' '}
            <Shock className="mt-1 block">O corpo continua precisando.</Shock>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-[1.6] text-pretty text-black/70 lg:text-lg">
            O corpo é igual um carro: todo dia tem uma demanda de combustível (nutrientes) pra andar e a caneta
            fala pro cérebro que essa demanda já foi cumprida.{' '}
            <strong className="font-semibold text-black">É mentira.</strong> O corpo continua
            pedindo e você não está suprindo.
            <br />
            <br />
            Você emagrece, mas perde massa magra e nutrientes importantes junto.{' '}
            <strong className="font-semibold text-black">
              Isso não é emagrecer. É definhar. E quando você para de aplicar, volta muito pior: com o corpo fraco, frágil e uma fome fora de controle.
            </strong>
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {xocanetaPains.map((pain) => (
            <li
              key={pain}
              className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white/70 p-5 text-base leading-[1.4] text-pretty lg:text-lg"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fce8f2]">
                <CrossIcon className="size-4" />
              </span>
              {pain}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

function Comparison() {
  return (
    <Section className="bg-[#fce8f2]">
      <Container className="flex flex-col items-center">
        <Badge marker="pen">O caminho</Badge>
        <h2 className="mt-6 max-w-3xl text-center text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
          Você pode camuflar o problema. <Shock>ou aprender de verdade.</Shock>
        </h2>

        <div className="mt-14 grid w-full gap-5 md:grid-cols-2 lg:mt-16">
          <article className="rounded-3xl border border-black/10 bg-[#fdfaf0] p-6 sm:p-8">
            <p className="text-xs font-black tracking-[0.24em] text-black/40 uppercase">O atalho</p>
            <h3 className="mt-3 text-2xl font-black italic line-through decoration-2">
              {xocanetaComparison.pen.title}
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {xocanetaComparison.pen.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-black/65">
                  <CrossIcon className="mt-1 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl bg-black p-6 text-[#fdfaf0] sm:p-8">
            <p className="text-xs font-black tracking-[0.24em] text-[#fce8f2] uppercase">O método</p>
            <h3 className="mt-3 text-2xl font-black italic">{xocanetaComparison.shock.title}</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {xocanetaComparison.shock.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#fce8f2] text-black">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  )
}

function CostShock() {
  return (
    <Section className="bg-black text-[#fdfaf0]">
      <Container className="flex flex-col items-center text-center">
        <Badge marker="pen" className="text-[#fce8f2]!">
          Faz a conta
        </Badge>
        <h2 className="mt-6 max-w-4xl text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
          A caneta te dá resultado temporário.
          <Shock className="mt-2 block text-[#fce8f2]">
            O choque te ensina
            <br />
            o emagrecimento definitivo.
          </Shock>
        </h2>

        <dl className="mt-14 grid w-full gap-4 md:grid-cols-3">
          {xocanetaCosts.map((cost, index) => {
            const highlight = index === xocanetaCosts.length - 1
            return (
              <div
                key={cost.label}
                className={cn(
                  'flex min-h-[13.5rem] flex-col items-center justify-center gap-4 rounded-3xl px-6 py-8 text-center',
                  highlight ? 'bg-[#fce8f2] text-black' : 'border border-[#fce8f2]/20 bg-white/[0.04]',
                )}
              >
                <dt
                  className={cn(
                    'text-[11px] font-black tracking-[0.22em] uppercase',
                    highlight ? 'text-black/50' : 'text-[#fce8f2]',
                  )}
                >
                  {cost.label}
                </dt>
                <dd className="text-4xl leading-none font-black tracking-tight whitespace-nowrap italic sm:text-5xl">
                  {cost.value}
                </dd>
                <dd className={cn('text-sm leading-snug', highlight ? 'text-black/55' : 'text-[#fdfaf0]/60')}>
                  {cost.note}
                </dd>
              </div>
            )
          })}
        </dl>
      </Container>
    </Section>
  )
}

function Learn() {
  return (
    <Section id="o-que-voce-vai-aprender" className="bg-black text-[#fdfaf0]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge marker="pen" className="text-[#fce8f2]!">
            O método
          </Badge>
          <h2 className="mt-6 text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
            Em 21 dias, você para de procurar atalhos e{' '}
            <Shock className="text-[#fce8f2]">aprende o método.</Shock>
          </h2>
        </div>

        <ol className="mt-16 grid w-full gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {metabolismShockSteps.map((step, index) => (
            <li
              key={step}
              className="flex flex-col gap-6 rounded-2xl border border-[#fce8f2]/20 bg-white/[0.04] p-6 sm:p-8"
            >
              <span className="text-5xl leading-none font-black text-[#fce8f2] italic">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-lg leading-[1.4] font-medium">{step}</p>
            </li>
          ))}
        </ol>

        <Button
          href={checkout}
          size="lg"
          className="mt-14 bg-[#fdfaf0]! text-black! shadow-none! hover:shadow-[0_0_36px_rgb(252_232_242/0.5)]! max-sm:w-full max-sm:text-[15px]"
        >
          Quero aprender o método
        </Button>
      </Container>
    </Section>
  )
}

function Weeks() {
  return (
    <Section id="como-funciona" className="bg-[#fce8f2]">
      <Container className="flex flex-col items-center">
        <Badge marker="pen">Como funciona</Badge>
        <h2 className="mt-6 max-w-3xl text-center text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
          21 dias para desligar o piloto automático da <Strike>caneta</Strike> e ligar o
          metabolismo.
        </h2>

        <ol className="mt-16 grid w-full gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {xocanetaWeeks.map((week, index) => (
            <li
              key={week.title}
              className="rounded-2xl bg-[#fdfaf0] p-6 shadow-[0_14px_40px_rgb(0_0_0/0.06)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-black text-[#fdfaf0]">
                  <LineIcon name="zap" className="size-6" />
                </span>
                <span className="text-sm font-semibold tracking-[0.2em] text-black/50 uppercase">
                  Semana {index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{week.title}</h3>
              <p className="mt-3 text-base leading-[1.6] text-black/70">{week.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

function ResultsStrip() {
  return (
    <Section id="resultados" className="bg-[#fdfaf0]">
      <Container className="flex flex-col items-center">
        <Badge marker="pen">Resultados</Badge>
        <h2 className="mt-6 max-w-2xl text-center text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
          Corpo que muda porque a mente e o prato mudaram. <Shock>Sem injeções.</Shock>
        </h2>
      </Container>

      <Carousel
        label="Resultados das alunas"
        className="mt-16 lg:mt-20"
        itemClassName="w-[19rem] sm:w-[22rem] lg:w-[24rem]"
      >
        {results.map((result, index) => (
          <figure
            key={`${result.name}-${index}`}
            className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_10px_30px_rgb(0_0_0/0.06)]"
          >
            <img
              src={result.image}
              alt={`Antes e depois de ${result.name}`}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="flex items-center justify-between gap-4 p-5">
              <span className="text-lg font-semibold">{result.name}</span>
              <span className="text-xs font-medium tracking-widest text-black/50 uppercase">
                {result.tag ?? 'Método Nutrideia'}
              </span>
            </figcaption>
          </figure>
        ))}
      </Carousel>
    </Section>
  )
}

function Pricing() {
  return (
    <Section id="comece-agora" className="bg-black text-[#fdfaf0]">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge marker="pen" className="text-[#fce8f2]!">
            Black Friday
          </Badge>
          <h2 className="mt-6 max-w-xl text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
            Choque no Metabolismo na{' '}
            <Shock className="text-[#fce8f2]">condição especial da Black Friday.</Shock>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-[#fdfaf0]/70 lg:text-lg">
            21 dias de autocuidado. O mesmo método que já tirou milhares de mulheres da obesidade e
            dos problemas de saúde, agora de {xocanetaFormatted.original} por {xocanetaFormatted.sale},
            no caminho que não usa caneta.
          </p>

          <p className="mt-10 text-xs font-semibold tracking-[0.3em] text-[#fdfaf0]/50 uppercase">
            O que você recebe
          </p>
          <ul className="mt-6 grid w-full gap-4 sm:grid-cols-2">
            {xocanetaOffer.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 border-t border-[#fce8f2]/20 pt-4 text-base leading-normal"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#fce8f2] text-black">
                  <CheckIcon className="size-3" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex w-full items-center gap-4 rounded-2xl border border-[#fce8f2]/25 p-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fce8f2] text-black">
              <LineIcon name="heart" className="size-6" />
            </span>
            <p className="text-sm leading-[1.6] text-[#fdfaf0]/75">
              <strong className="block text-base font-bold text-[#fdfaf0]">
                Garantia de 7 dias: o risco é todo meu.
              </strong>
              Se não gostar, peça o reembolso em até 7 dias e receba 100% do seu dinheiro de volta.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md -rotate-1 lg:mr-0">
          <div className="overflow-hidden rounded-t-3xl bg-[#fdfaf0] text-black">
            <img
              src={choqueMetabolismo}
              alt={xocanetaOffer.productName}
              className="aspect-[3/1] w-full object-cover"
            />
            <div className="px-6 pt-6 pb-8 text-center sm:px-10">
              <p className="text-xs font-black tracking-[0.28em] text-black/55 uppercase">
                Xô Caneta · Black Friday
              </p>
              <p className="mt-3 text-2xl font-black italic">
                {xocanetaOffer.productName}
                <br />
                em 21 dias.
              </p>
            </div>
          </div>

          <div aria-hidden="true" className="relative h-6 bg-[#fdfaf0]">
            <span className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-black" />
            <span className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full bg-black" />
            <span className="absolute inset-x-6 top-1/2 border-t-2 border-dashed border-black/20" />
          </div>

          <div className="rounded-b-3xl bg-[#fce8f2] px-6 pt-8 pb-10 text-center text-black sm:px-10">
            <p className="text-xs font-medium tracking-widest text-black/60 uppercase">
              Condição especial
            </p>
            <p className="mt-2 text-sm text-black/45 line-through">{xocanetaFormatted.original}</p>
            <p className="mt-1 text-5xl leading-none font-black italic sm:text-6xl">
              {xocanetaFormatted.sale}
            </p>
            <p className="mt-3 text-sm text-black/70">
              ou {xocanetaOffer.installments}x de {xocanetaFormatted.installment}
            </p>
            <p className="mt-2 text-xs text-black/55">Menos do que um mês de caneta.</p>

            <Button href={checkout} size="lg" className="mt-8 w-full max-sm:text-[15px]">
              Garantir minha vaga
            </Button>
            <Guarantee />
          </div>
        </div>
      </Container>
    </Section>
  )
}

function NatalBonus() {
  const sectionRef = useRef<HTMLElement>(null)
  const flakes = Array.from({ length: 18 }, (_, index) => index)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const snowflakes = gsap.utils.toArray<HTMLElement>('.natal-flake')
        snowflakes.forEach((flake, index) => {
          const size = 14 + (index % 5) * 4
          const startX = gsap.utils.random(2, 98)
          const drift = gsap.utils.random(-70, 70)
          const duration = gsap.utils.random(5.5, 11)
          const delay = gsap.utils.random(0, 7)
          const fallDistance = () => (sectionRef.current?.offsetHeight ?? 700) + 120

          gsap.set(flake, {
            left: `${startX}%`,
            top: 0,
            width: size,
            height: size,
            opacity: gsap.utils.random(0.35, 0.8),
          })

          gsap.fromTo(
            flake,
            { y: gsap.utils.random(-120, -30), x: 0, rotation: 0 },
            {
              y: fallDistance,
              x: drift,
              rotation: gsap.utils.random(-180, 180),
              duration,
              delay,
              ease: 'none',
              repeat: -1,
            },
          )
        })

        gsap.fromTo(
          '.natal-ebook',
          { opacity: 0, y: 48, rotation: -10, scale: 0.88 },
          {
            opacity: 1,
            y: 0,
            rotation: -3,
            scale: 1,
            duration: 1.05,
            ease: 'back.out(1.6)',
          },
        )

        gsap.to('.natal-ebook', {
          y: -10,
          duration: 2.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 1.1,
        })

        gsap.fromTo(
          '.natal-ebook-glow',
          { opacity: 0.35, scale: 1 },
          {
            opacity: 0.55,
            scale: 1.03,
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          },
        )

        gsap.fromTo(
          '.natal-copy > *',
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.25,
            clearProps: 'transform',
          },
        )

        gsap.to('.natal-badge', {
          scale: 1.025,
          duration: 0.75,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })

        const lightRed = '#ffb3b3'
        gsap.utils.toArray<HTMLElement>('.natal-letter').forEach((letter, index) => {
          if (letter.textContent === '\u00A0') return

          gsap.set(letter, {
            color: lightRed,
            opacity: 1,
            autoAlpha: 1,
            filter: 'none',
            textShadow: `0 0 6px ${lightRed}55`,
          })

          gsap.to(letter, {
            textShadow: `0 0 16px ${lightRed}`,
            duration: 0.9,
            delay: (index % 4) * 0.2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          })
        })

        gsap.fromTo(
          '.natal-cta',
          { boxShadow: '0 0 0 0 rgba(196,18,47,0.55)' },
          {
            boxShadow: '0 0 0 18px rgba(196,18,47,0)',
            duration: 1.5,
            ease: 'power1.out',
            repeat: -1,
          },
        )

        gsap.fromTo(
          '.natal-spark',
          { opacity: 0.15, scale: 0.4 },
          {
            opacity: 1,
            scale: 1.4,
            duration: 0.7,
            stagger: { each: 0.18, repeat: -1, yoyo: true },
            ease: 'sine.inOut',
          },
        )
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <Section
      ref={sectionRef}
      id="bonus-natal"
      className="relative overflow-hidden bg-[#1a0610] text-[#fdfaf0]"
    >
      <img
        src={bgChristmas}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-110 object-cover object-center contrast-125 brightness-[0.4]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-[#3a0a1a]/90 via-black/80 to-[#1a0610]/95"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {flakes.map((flake) => (
          <img
            key={flake}
            src={floco}
            alt=""
            className="natal-flake absolute object-contain mix-blend-screen"
            draggable={false}
          />
        ))}
        {Array.from({ length: 8 }, (_, index) => (
          <img
            key={`spark-${index}`}
            src={floco}
            alt=""
            className="natal-spark absolute size-3 object-contain mix-blend-screen sm:size-3.5"
            style={{
              left: `${12 + index * 11}%`,
              top: `${18 + (index % 4) * 18}%`,
            }}
            draggable={false}
          />
        ))}
      </div>

      <Container className="relative grid items-center gap-10 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="natal-ebook relative mx-auto w-full max-w-[14rem] sm:max-w-[16rem] lg:max-w-[22rem]">
          <span
            aria-hidden="true"
            className="natal-ebook-glow absolute -inset-5 rounded-[1.75rem] bg-[#e6007e]/20 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#fce8f2]/50 bg-[#fdfaf0]/5 p-1.5 shadow-[0_0_24px_rgb(230_0_126/0.18)]">
            <img
              src={ebookNatal}
              alt="Capa do ebook de receitas natalinas"
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="natal-copy flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="natal-badge rounded-full border border-[#ffb3b3]/40 bg-[#7a1028] px-4 py-1.5 text-[11px] font-black tracking-[0.35em] text-[#ffe4e8] uppercase shadow-[0_0_18px_rgb(122_16_40/0.45)]">
            Bônus de Natal
          </p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
            Dentro do Choque, você também leva o{' '}
            <Shock className="natal-title-accent">
              {'ebook de receitas natalinas.'.split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className={cn('natal-letter inline-block', char === ' ' && 'w-[0.28em]')}
                  style={{ color: '#ffb3b3', opacity: 1 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </Shock>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-[#fdfaf0]/75 lg:text-lg">
            Ceia com sabor de festa e proteína no prato. Pra emagrecer sem abrir mão da noite mais
            especial do ano.
          </p>
          <Button
            href={checkout}
            size="lg"
            className="natal-cta relative z-10 mt-8 bg-[#c4122f]! text-white! opacity-100! shadow-[0_0_28px_rgb(196_18_47/0.55)]! hover:bg-[#de1a3a]! max-sm:w-full max-sm:text-[15px]"
          >
            Quero o Choque com o bônus de Natal
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function AboutAndreia() {
  return (
    <Section id="sobre" className="bg-[#fdfaf0]">
      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-sm lg:order-2">
          <span
            aria-hidden="true"
            className="absolute -right-4 -bottom-4 -z-10 size-full rounded-3xl bg-[#fce8f2]"
          />
          <img
            src={andreiaAbout}
            alt="Andreia Oliveira sorrindo, com a mão no queixo"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
          />
          <figcaption className="mt-4 text-center text-sm font-semibold tracking-[0.2em] text-black/70 uppercase">
            Andreia Oliveira
          </figcaption>
        </figure>

        <div className="flex flex-col items-start lg:order-1">
          <Badge marker="pen">Quem guia a jornada</Badge>
          <h2 className="mt-6 text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.6rem]">
            Eu já fui obesa, diabética e hipertensa. E mudei tudo isso{' '}
            <Shock>sem caneta e sem cirurgias.</Shock>
          </h2>

          <div className="mt-10 flex max-w-[34rem] flex-col gap-5 text-base leading-[1.6] text-black/70">
            <p>
              Sou nutricionista, mas conheço esse caminho por dentro. Por muito tempo convivi com a
              autoestima no chão e com dietas que eu não sustentava. Reverti a SOP e diabetes com comida,
              método e renovação da mente.
            </p>
            <p>
              Desde 2017 o <strong className="font-semibold text-black">Método Nutrideia</strong> já
              ajudou milhares de pessoas a emagrecer sem abrir mão do prazer de comer. No Choque no
              Metabolismo, em 21 dias, eu te ensino esse método{' '}
              <strong className="font-semibold text-black">pra você carregar pra vida.</strong>
            </p>
          </div>

          <Button href={checkout} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            Quero fazer o choque com a Nutrideia
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function FinalCall() {
  return (
    <Section className="bg-[#fce8f2]">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-[50rem] text-3xl leading-[1.12] font-medium sm:text-4xl lg:text-[2.75rem]">
          Daqui a 21 dias, você vai agradecer por ter dado o{' '}
          <Shock>xô na caneta.</Shock>
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-[1.6] text-black/75 lg:text-lg">
          A Black Friday acaba. Depois, o preço volta. A escolha é sua: mais um mês de caneta, ou 21
          dias de Choque no seu metabolismo.
        </p>
        <div className="mt-10 flex flex-col items-center gap-5">
          <Button href={checkout} size="lg" className="max-sm:w-full max-sm:text-[15px]">
            Quero o choque na Black Friday
          </Button>
          <CountdownBoxes />
        </div>
        <Guarantee />
      </Container>
    </Section>
  )
}

function Disclaimer() {
  return (
    <footer className="border-t border-black/10 bg-[#fdfaf0] py-10">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-xs leading-[1.6] text-black/40">
          Xô Caneta. Choque no Metabolismo. Nutrideia. Black Friday 2026.
        </p>
      </Container>
    </footer>
  )
}

function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden">
      <Container className="flex h-[4.5rem] items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] tracking-[0.18em] text-[#fce8f2] uppercase">Black Friday</span>
          <span className="text-lg font-black text-[#fdfaf0] italic">
            <span className="mr-1.5 text-xs font-semibold text-[#fdfaf0]/40 line-through">
              {xocanetaFormatted.original}
            </span>
            {xocanetaFormatted.sale}
          </span>
        </div>
        <Button
          href={checkout}
          variant="solid"
          size="sm"
          className="bg-[#fdfaf0]! text-black! hover:bg-[#fce8f2]!"
        >
          Quero o choque
        </Button>
      </Container>
    </div>
  )
}
