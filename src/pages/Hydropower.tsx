import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import deborah from '../assets/images/hydropower/deborah-antes-depois.webp'
import flor from '../assets/images/hydropower/flor.png'
import poteRotulo from '../assets/images/hydropower/pote-rotulo.webp'
import pote from '../assets/images/hydropower/pote.webp'
import { SiteCredit } from '../components/layout/SiteCredit'
import { cn } from '../lib/cn'
import type { PotScene } from './hydropower/potScene'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const whatsappNumber = '5521975719527'
const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const whatsappHref = whatsappLink('Olá! Vi o site do HydroPower e quero saber mais.')
const instagramHref = 'https://www.instagram.com/ojejumcura'

const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const offers = [
  {
    pots: 1,
    title: '1 pote',
    subtitle: '1 mês de energia',
    description: 'Ideal para quem quer experimentar a hidratação celular e sentir o poder na prática.',
    perks: ['60 cápsulas', 'Frete calculado no atendimento'],
    price: 149.9,
    priceNote: '+ frete',
    href: whatsappLink('Olá! Vi o site do HydroPower e quero comprar 1 pote. Como faço?'),
    tag: null,
    featured: false,
  },
  {
    pots: 3,
    title: '3 potes',
    subtitle: 'Tratamento de 3 meses',
    description: 'Para manter o corpo com suporte durante toda a jornada de jejum.',
    perks: ['Reprograma o corpo', 'Estabiliza eletrólitos', 'Garante performance contínua', 'Comunidade do HydroPower'],
    price: 399,
    priceNote: null,
    href: whatsappLink('Olá! Vi o site do HydroPower e quero comprar o kit de 3 potes. Como faço?'),
    tag: 'Frete grátis',
    featured: true,
  },
  {
    pots: 6,
    title: '6 potes',
    subtitle: 'Tratamento de 6 meses',
    description: 'A transformação completa, com o menor valor por pote.',
    perks: ['Transformação completa', 'Corpo, mente e espírito em alta vibração', 'Comunidade do HydroPower'],
    price: 699,
    priceNote: null,
    href: whatsappLink('Olá! Vi o site do HydroPower e quero comprar o kit de 6 potes. Como faço?'),
    tag: 'Menor preço por pote',
    featured: false,
  },
] as const

const symptoms = [
  'Dor de cabeça',
  'Irritabilidade',
  'Fraqueza e tontura',
  'Enjoo e mal-estar',
  'Mente confusa',
  'Desânimo',
  'Vontade intensa de quebrar o jejum',
  'Quase-desmaio ou desmaio',
]

const formula = [
  {
    dose: '300',
    unit: 'mg',
    name: 'Sódio',
    text: 'Ajuda a controlar a pressão e garante que a água realmente penetre dentro das células.',
  },
  {
    dose: '360',
    unit: 'mg',
    name: 'Magnésio',
    text: 'Ajuda a regular o sistema nervoso. Um dos pilares da vida celular.',
  },
  {
    dose: '300',
    unit: 'mg',
    name: 'Potássio',
    text: 'Ajuda a controlar a contração muscular e o equilíbrio de água no corpo.',
  },
  {
    dose: 'Q10',
    unit: '',
    name: 'Coenzima Q10',
    text: 'Energia celular: aumenta a energia mitocondrial, o combustível do foco e da disposição.',
  },
  {
    dose: 'L',
    unit: '',
    name: 'L-Carnitina',
    text: 'Ativa o metabolismo e ajuda o corpo a usar a própria gordura como combustível (cetose).',
  },
]

const navLinks = [
  { href: '#formula', label: 'A fórmula' },
  { href: '#como-usar', label: 'Como usar' },
  { href: '#depoimento', label: 'Depoimento' },
  { href: '#ofertas', label: 'Ofertas' },
]

export function Hydropower() {
  useEffect(() => {
    const bar = document.querySelector('[data-buybar]')
    const marker = document.getElementById('jejum')
    if (!bar || !marker) return
    let frame = 0
    const update = () => {
      frame = 0
      bar.classList.toggle('is-visible', marker.getBoundingClientRect().top < window.innerHeight * 0.85)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Fasting />
        <Symptoms />
        <Formula />
        <Hydration />
        <HowToUse />
        <Testimonial />
        <Offers />
        <Consecration />
      </main>
      <Footer />
      <MobileBuyBar />
    </>
  )
}

function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12', className)}>{children}</div>
}

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.32em] text-[#d6ad72] uppercase sm:text-xs',
        className,
      )}
    >
      <img src={flor} alt="" aria-hidden="true" className="size-5 shrink-0" />
      {children}
    </p>
  )
}

function GoldButton({
  href,
  children,
  className,
  variant = 'solid',
}: {
  href: string
  children: ReactNode
  className?: string
  variant?: 'solid' | 'ghost'
}) {
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      className={cn(
        'group relative inline-flex h-13 items-center justify-center gap-2 overflow-hidden rounded-full px-8 text-[15px] font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6ad72]',
        variant === 'solid'
          ? 'hydro-gold-bg text-[#1a120a] shadow-[0_10px_40px_rgb(201_160_103/0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_50px_rgb(201_160_103/0.5)]'
          : 'border border-[#d6ad72]/40 text-[#f3ece2] hover:border-[#d6ad72] hover:bg-[#d6ad72]/10',
        className,
      )}
    >
      {variant === 'solid' && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/35 blur-md transition-transform duration-700 group-hover:translate-x-[420%]"
        />
      )}
      <span className="relative">{children}</span>
    </a>
  )
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="HydroPower, voltar ao topo">
      <img src={flor} alt="" className="size-9" />
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-tight text-[#f3ece2]">
          Hydro<span className="hydro-gold-text">Power</span>
        </span>
        <span className="mt-1 text-[9px] tracking-[0.3em] text-[#a39a8e] uppercase">OJC Nutrition</span>
      </span>
    </a>
  )
}

function StaticCapsule({ className, style }: { className?: string; style?: CSSProperties }) {
  return <span aria-hidden="true" className={cn('hydro-capsule block', className)} style={style} />
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0b0a09]/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-8 lg:h-18">
        <Logo />
        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-sm text-[#a39a8e]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-[#f3ece2]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#ofertas"
          className="hydro-gold-bg inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold text-[#1a120a] transition-transform hover:-translate-y-0.5 max-sm:hidden"
        >
          Comprar agora
        </a>
      </Container>
    </header>
  )
}

function Hero() {
  const root = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const slotRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<PotScene | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const section = root.current
    const canvas = canvasRef.current
    const slot = slotRef.current
    if (!section || !canvas || !slot) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false
    let cleanup = () => {}

    import('./hydropower/potScene').then(({ createPotScene }) => {
      if (cancelled) return
      let scene: PotScene
      try {
        scene = createPotScene(canvas, poteRotulo, () => !cancelled && setReady(true))
      } catch {
        return
      }
      sceneRef.current = scene

      const measure = () => {
        const s = section.getBoundingClientRect()
        const r = slot.getBoundingClientRect()
        scene.setFocus({ centerY: r.top - s.top + r.height / 2, height: r.height })
      }
      measure()

      const ro = new ResizeObserver(measure)
      ro.observe(section)
      ro.observe(slot)
      document.fonts?.ready.then(() => !cancelled && measure())
      window.addEventListener('load', measure)
      const io = new IntersectionObserver(([entry]) => scene.setActive(entry.isIntersecting))
      io.observe(section)

      cleanup = () => {
        ro.disconnect()
        io.disconnect()
        window.removeEventListener('load', measure)
        scene.dispose()
        sceneRef.current = null
      }
    })

    return () => {
      cancelled = true
      cleanup()
    }
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-intro]', { y: 24, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.08 })

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=170%',
            pin: true,
            scrub: 0.6,
            onUpdate: (self) => sceneRef.current?.setProgress(self.progress),
          },
        })

        tl.to('[data-hint]', { opacity: 0, duration: 0.06 }, 0)
          .to('[data-glow]', { opacity: 1, scale: 1.12, duration: 0.3 }, 0.2)
          .to('[data-glow]', { opacity: 0, scale: 0.8, duration: 0.2 }, 0.8)
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative isolate h-svh min-h-[620px] overflow-hidden pt-16 lg:min-h-[680px] lg:pt-18"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,#2c2015_0%,#0b0a09_62%)]" />
        <div className="hydro-grain absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(circle_at_50%_55%,#000,transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0b0a09] to-transparent" />
      </div>

      <div
        data-glow
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-[5] size-[min(85vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(214_173_114/0.3)_0%,rgb(214_173_114/0.07)_45%,transparent_70%)] opacity-60 blur-2xl"
      />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 z-10 size-full transition-opacity duration-700',
          ready ? 'opacity-100' : 'opacity-0',
        )}
      />

      <Container className="relative grid h-full grid-rows-[auto_minmax(0,1fr)_auto] justify-items-center pt-5 pb-12 text-center lg:max-w-[108rem] lg:py-6 xl:px-20 2xl:px-28 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)] lg:items-center lg:gap-10 xl:gap-16">
        <div className="relative z-40 flex flex-col items-center lg:items-start lg:justify-self-start lg:text-left">
          <div data-intro>
            <Eyebrow>A força do jejum</Eyebrow>
          </div>
          <h1
            data-intro
            className="mt-4 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.03em] text-[#f3ece2] sm:text-6xl lg:mt-6 lg:text-[clamp(3rem,4vw,5.5rem)] lg:leading-[0.98]"
          >
            <span className="whitespace-nowrap">Não é fome.</span> <br className="sm:max-lg:hidden" />
            <span className="hydro-gold-text">É sede.</span>
          </h1>
          <ul
            data-intro
            className="mt-8 hidden flex-col gap-2.5 text-[11px] tracking-[0.22em] text-[#a39a8e] uppercase lg:flex"
          >
            {['Zero açúcar', 'Zero calorias', 'Não quebra o jejum'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#d6ad72]">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex h-full min-h-0 w-full items-center justify-center pt-4 pb-10 lg:w-auto lg:py-14">
          <div ref={slotRef} className="relative aspect-[606/1107] h-full max-h-[26rem] lg:max-h-[40rem]">
            <img
              src={pote}
              alt="Pote de HydroPower, OJC Nutrition, com 60 cápsulas"
              fetchPriority="high"
              className={cn(
                'absolute inset-0 size-full object-contain transition-opacity duration-500',
                ready && 'opacity-0',
              )}
            />
          </div>
        </div>

        <div className="relative z-40 flex w-full flex-col items-center lg:max-w-sm lg:items-start lg:justify-self-end lg:text-left">
          <p
            data-intro
            className="max-w-md text-[15px] leading-[1.6] font-light text-[#c9bfb2] sm:text-base lg:text-lg lg:leading-[1.65]"
          >
            O HydroPower repõe o sódio, o magnésio e o potássio que o jejum leva embora. Pra você
            jejuar com clareza, energia e estabilidade.
          </p>

          <div
            data-intro
            className="mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:mt-8 lg:flex-col lg:items-start"
          >
            <GoldButton href="#ofertas" className="max-sm:w-full">
              Quero meu HydroPower
            </GoldButton>
            <GoldButton href="#formula" variant="ghost" className="max-lg:hidden">
              Ver a fórmula
            </GoldButton>
          </div>
        </div>
      </Container>

      <div
        data-hint
        className="pointer-events-none absolute right-8 bottom-8 z-40 hidden flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-[#a39a8e] uppercase [writing-mode:vertical-rl] lg:flex"
      >
        Role
        <span className="h-10 w-px overflow-hidden bg-[#a39a8e]/30">
          <span className="block h-1/2 w-full animate-bounce bg-[#d6ad72] motion-reduce:animate-none" />
        </span>
      </div>
    </section>
  )
}

function Fasting() {
  const pillars = [
    { name: 'Espírito', text: 'O espírito que renasceu em Cristo já é perfeito. Não precisa de melhora.' },
    { name: 'Mente', text: 'Quem precisa de transformação é a mente.', ref: 'Romanos 12:2' },
    { name: 'Carne', text: 'E quem precisa ser calada é a carne.', ref: 'Gálatas 5:16' },
  ]

  return (
    <section id="jejum" className="relative overflow-hidden pt-20 pb-24 lg:pt-16 lg:pb-36">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Olá, pessoa maravilhosa</Eyebrow>

        <p className="hydro-serif mt-8 max-w-4xl text-[2rem] leading-[1.15] text-[#f3ece2] sm:text-5xl lg:text-[3.5rem]">
          Um tempo de calar a carne, aquietar a mente e{' '}
          <span className="hydro-gold-text">caminhar no Espírito.</span>
        </p>

        <p className="mt-8 max-w-2xl text-base leading-[1.7] font-light text-[#c9bfb2] lg:text-lg">
          Se o HydroPower chegou até você, é porque Deus separou este momento. A Bíblia nos ensina
          que somos corpo, mente e espírito.
        </p>

        <ol className="mt-16 grid w-full max-w-5xl gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] text-left md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <li key={pillar.name} className="flex flex-col gap-4 bg-[#0e0c0b] p-8 lg:p-10">
              <span className="text-xs tracking-[0.3em] text-[#d6ad72]/70">0{i + 1}</span>
              <h3 className="text-2xl font-medium text-[#f3ece2]">{pillar.name}</h3>
              <p className="text-[15px] leading-[1.65] font-light text-[#a39a8e]">{pillar.text}</p>
              {pillar.ref && (
                <p className="hydro-serif mt-auto text-lg text-[#d6ad72]">{pillar.ref}</p>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-16 max-w-3xl text-xl leading-[1.5] font-medium text-[#f3ece2] lg:text-2xl">
          O jejum faz exatamente isso: coloca a carne no seu lugar, renova a mente e permite que o
          espírito <span className="hydro-gold-text">governe com clareza.</span>
        </p>
      </Container>
    </section>
  )
}

function Symptoms() {
  return (
    <section className="relative bg-[#f6f2ec] py-24 text-[#1c1712] lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <p className="hydro-serif text-xl text-[#8a6334]">1 Coríntios 6:19</p>
          <h2 className="mt-4 text-4xl leading-[1.08] font-semibold tracking-[-0.02em] sm:text-5xl">
            Mas o corpo continua sendo o templo.
          </h2>
          <p className="mt-7 max-w-md text-base leading-[1.7] text-[#5b4c3c] lg:text-lg">
            O jejum é espiritual, mas durante ele o templo perde rapidamente três minerais
            essenciais: <strong className="font-semibold text-[#1c1712]">sódio, magnésio e potássio.</strong>{' '}
            Quando eles caem, surgem sintomas que muita gente confunde com luta espiritual. São apenas
            respostas físicas.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {symptoms.map((symptom, i) => (
            <li
              key={symptom}
              className="flex items-center gap-4 rounded-2xl border border-[#1c1712]/[0.08] bg-white px-5 py-4 shadow-[0_1px_0_rgb(28_23_18/0.04)]"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1c1712] text-xs font-medium text-[#e9d3a9]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] font-medium text-[#2b231b]">{symptom}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-20 lg:mt-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b0a09] px-8 py-14 text-center sm:px-14 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-1/2 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(214_173_114/0.18),transparent_65%)]"
          />
          <p className="relative text-3xl leading-[1.15] font-semibold tracking-[-0.02em] text-[#f3ece2] sm:text-4xl lg:text-5xl">
            Isso não é Deus te testando.
            <br />
            <span className="hydro-gold-text">É apenas o corpo sem suporte.</span>
          </p>
        </div>
      </Container>
    </section>
  )
}

function Formula() {
  return (
    <section id="formula" className="relative overflow-hidden py-24 lg:py-36">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 -z-10 size-[50rem] -translate-x-1/3 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(214_173_114/0.16),transparent_65%)]"
      />
      <Container className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-[13rem] sm:max-w-[15rem] lg:max-w-[19rem]">
          <StaticCapsule className="-top-6 -left-8 h-16 w-6 rotate-[-35deg] sm:h-20 sm:w-7" />
          <StaticCapsule className="top-10 -right-10 h-14 w-5 rotate-[50deg] opacity-80 blur-[1px]" />
          <StaticCapsule className="-right-6 bottom-24 z-10 h-20 w-7 rotate-[-15deg]" />
          <StaticCapsule className="bottom-6 -left-12 z-10 h-16 w-6 rotate-[70deg]" />
          <img
            src={pote}
            alt="Pote de HydroPower"
            loading="lazy"
            className="relative w-full drop-shadow-[0_50px_60px_rgb(0_0_0/0.75)]"
          />
        </div>

        <div>
          <Eyebrow>A fórmula</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-[-0.02em] text-[#f3ece2] sm:text-5xl">
            Cada dose repõe exatamente{' '}
            <span className="hydro-gold-text">o que o corpo perde.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.7] font-light text-[#c9bfb2] lg:text-lg">
            Formulado para sustentar quem jejua com propósito, espiritual ou físico, e também quem
            busca um estilo de vida saudável, jejuando ou não.
          </p>

          <ul className="mt-12 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {formula.map((item) => (
              <li key={item.name} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-5 py-5 sm:grid-cols-[7rem_1fr]">
                <span className="hydro-gold-text text-3xl font-semibold tracking-tight sm:text-4xl">
                  {item.dose}
                  {item.unit && <span className="ml-0.5 text-base font-medium">{item.unit}</span>}
                </span>
                <span>
                  <span className="block text-lg font-medium text-[#f3ece2]">{item.name}</span>
                  <span className="mt-1 block text-[15px] leading-[1.6] font-light text-[#a39a8e]">
                    {item.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium tracking-[0.22em] text-[#e9d3a9] uppercase">
            <span>Zero açúcar</span>
            <span aria-hidden="true" className="text-[#d6ad72]">✦</span>
            <span>Zero calorias</span>
            <span aria-hidden="true" className="text-[#d6ad72]">✦</span>
            <span>Não quebra o jejum</span>
          </p>
        </div>
      </Container>
    </section>
  )
}

function Hydration() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0e0c0b] py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <h2 className="text-3xl leading-[1.15] font-semibold tracking-[-0.02em] text-[#f3ece2] sm:text-4xl">
          Você bebe água todos os dias e ainda sente cansaço, inchaço e falta de foco?
        </h2>
        <div className="flex flex-col gap-5 text-base leading-[1.7] font-light text-[#c9bfb2] lg:text-lg">
          <p>
            Água sozinha não basta. A hidratação de verdade acontece{' '}
            <strong className="font-medium text-[#f3ece2]">dentro da célula</strong>, quando os
            eletrólitos certos estão em equilíbrio.
          </p>
          <p>
            Sódio, magnésio e potássio são os pilares da vida celular: regulam o sistema nervoso, a
            contração muscular e a pressão, e garantem que a água realmente entre nas células.
          </p>
        </div>
      </Container>
    </section>
  )
}

function HowToUse() {
  const steps = [
    { time: 'Ao acordar', dose: '2 cápsulas', count: 2, text: 'Acordou, tomou. Simples assim.' },
    {
      time: 'Durante o jejum',
      dose: '2 cápsulas a cada 6 horas',
      count: 2,
      text: 'Se decidir manter o jejum ao longo do dia, enquanto permanecer em jejum.',
    },
  ]

  return (
    <section id="como-usar" className="bg-[#f6f2ec] py-24 text-[#1c1712] lg:py-32">
      <Container className="flex flex-col items-center text-center">
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#8a6334] uppercase sm:text-xs">
          Como usar
        </p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.02em] sm:text-5xl">
          Simples. Clareza, energia e estabilidade{' '}
          <span className="hydro-serif text-[1.32em] leading-[0.9] font-medium text-[#8a6334]">todos os dias.</span>
        </h2>

        <ol className="mt-14 grid w-full max-w-4xl gap-5 text-left md:grid-cols-2">
          {steps.map((step, i) => (
            <li
              key={step.time}
              className="relative flex flex-col items-start overflow-hidden rounded-3xl bg-white p-8 shadow-[0_24px_60px_rgb(28_23_18/0.08)] sm:p-10"
            >
              <span className="absolute top-8 right-8 flex size-10 items-center justify-center rounded-full border border-[#c9a067]/40 text-sm font-medium text-[#8a6334] sm:top-10 sm:right-10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-xs font-medium tracking-[0.28em] text-[#8a6334] uppercase">{step.time}</p>
              <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{step.dose}</p>
              <p className="mt-3 mb-7 text-[15px] leading-[1.6] text-[#5b4c3c]">{step.text}</p>
              <div
                className="mt-auto inline-flex items-center gap-3 rounded-full border border-[#c9a067]/30 bg-linear-to-b from-[#fbf6ee] to-[#f1e6d4] py-2 pr-4 pl-3"
                aria-hidden="true"
              >
                <span className="flex items-center gap-1.5">
                  {Array.from({ length: step.count }, (_, n) => (
                    <span
                      key={n}
                      className="hydro-capsule relative! inline-block h-7 w-3 rotate-[30deg] ring-1 ring-[#1c1712]/10 shadow-[0_3px_6px_rgb(28_23_18/0.22)]!"
                    />
                  ))}
                </span>
                <span className="text-sm font-semibold text-[#8a6334]">× {step.count}</span>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-xl text-sm leading-[1.6] text-[#5b4c3c]">
          <span className="font-semibold text-[#1c1712]">Dica Nutrideia:</span> use o HydroPower junto
          com o seu ritual matinal: oração, respiração e gratidão.
        </p>
      </Container>
    </section>
  )
}

function Testimonial() {
  return (
    <section id="depoimento" className="relative overflow-hidden py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="hydro-gold-bg relative mx-auto w-full max-w-md rounded-[1.75rem] p-px shadow-[0_30px_80px_rgb(0_0_0/0.55)] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)]">
            <img
              src={deborah}
              alt="Deborah, cliente HydroPower, em fotos de antes e depois"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between bg-linear-to-t from-black/70 to-transparent px-4 pt-16 pb-4">
              <span className="rounded-full bg-[#0b0a09]/80 px-3 py-1 text-[11px] font-medium tracking-[0.25em] text-[#e9d3a9] uppercase backdrop-blur">
                Antes
              </span>
              <span className="hydro-gold-bg rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.25em] text-[#1a120a] uppercase">
                Depois
              </span>
            </div>
          </div>
        </figure>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Eyebrow>Depoimento</Eyebrow>
          <span aria-hidden="true" className="hydro-serif hydro-gold-text mt-6 text-8xl leading-none">
            “
          </span>
          <blockquote className="hydro-serif -mt-8 max-w-2xl text-[1.9rem] leading-[1.25] text-[#f3ece2] sm:text-[2.4rem]">
            Eu não estava conseguindo fazer jejum sem ele. Hoje faço facilmente, sem fome, sem dor de
            cabeça e sem cansaço. Me sinto com muita disposição.
          </blockquote>
          <p className="mt-8 text-xs tracking-[0.3em] text-[#a39a8e] uppercase">
            Deborah <span className="text-[#d6ad72]">·</span> cliente HydroPower
          </p>
        </div>
      </Container>
    </section>
  )
}

function Offers() {
  return (
    <section id="ofertas" className="relative overflow-hidden border-t border-white/[0.06] bg-[#0e0c0b] py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-0 size-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(214_173_114/0.14),transparent_60%)]"
      />
      <Container className="relative flex flex-col items-center">
        <Eyebrow>Garanta o seu</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-center text-4xl leading-[1.08] font-semibold tracking-[-0.02em] text-[#f3ece2] sm:text-5xl">
          Escolha o seu <span className="hydro-gold-text">HydroPower.</span>
        </h2>
        <p className="mt-5 text-center text-base font-light text-[#a39a8e]">
          60 cápsulas por pote · 750 mg cada cápsula
        </p>

        <ul className="mt-16 grid w-full max-w-6xl items-stretch gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <li
              key={offer.title}
              className={cn(
                'relative flex flex-col rounded-[1.75rem] p-px',
                offer.featured
                  ? 'hydro-gold-bg shadow-[0_30px_80px_rgb(201_160_103/0.25)] lg:-my-4'
                  : 'bg-white/[0.08]',
              )}
            >
              <div
                className={cn(
                  'flex h-full flex-col rounded-[calc(1.75rem-1px)] p-8 sm:p-9',
                  offer.featured ? 'bg-[#15110d] lg:py-12' : 'bg-[#0f0d0c]',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-2xl font-semibold text-[#f3ece2]">{offer.title}</p>
                    <p className="mt-1 text-sm text-[#d6ad72]">{offer.subtitle}</p>
                  </div>
                  <PotStack count={offer.pots} />
                </div>

                {offer.tag && (
                  <span
                    className={cn(
                      'mt-6 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase',
                      offer.featured ? 'hydro-gold-bg text-[#1a120a]' : 'border border-[#d6ad72]/40 text-[#e9d3a9]',
                    )}
                  >
                    {offer.tag}
                  </span>
                )}

                <p className="mt-6 text-[15px] leading-[1.6] font-light text-[#a39a8e]">{offer.description}</p>

                <ul className="mt-6 flex flex-col gap-3 border-t border-white/[0.07] pt-6">
                  {offer.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-[15px] text-[#ddd3c6]">
                      <span aria-hidden="true" className="mt-1 text-[10px] text-[#d6ad72]">
                        ✦
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <p className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-[#f3ece2] sm:text-[2.6rem]">
                      {formatBRL(offer.price)}
                    </span>
                    {offer.priceNote && <span className="text-sm text-[#a39a8e]">{offer.priceNote}</span>}
                  </p>
                  <p className="mt-1 text-sm text-[#a39a8e]">
                    {offer.pots > 1
                      ? `${formatBRL(offer.price / offer.pots)} por pote`
                      : 'Compra pelo WhatsApp'}
                  </p>

                  <GoldButton
                    href={offer.href}
                    variant={offer.featured ? 'solid' : 'ghost'}
                    className="mt-7 w-full"
                  >
                    Comprar {offer.title}
                  </GoldButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function PotStack({ count }: { count: number }) {
  const shown = Math.min(count, 3)
  return (
    <div className="flex shrink-0 items-end" aria-hidden="true">
      {Array.from({ length: shown }, (_, i) => (
        <img
          key={i}
          src={pote}
          alt=""
          loading="lazy"
          className={cn('h-16 w-auto drop-shadow-[0_8px_12px_rgb(0_0_0/0.6)]', i > 0 && '-ml-5')}
          style={{ zIndex: shown - i }}
        />
      ))}
      {count > 3 && <span className="mb-1 ml-1 text-xs font-semibold text-[#d6ad72]">+{count - 3}</span>}
    </div>
  )
}

function Consecration() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <img
        src={flor}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[36rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />
      <Container className="flex flex-col items-center text-center">
        <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.02em] text-[#f3ece2] sm:text-5xl lg:text-6xl">
          Que este jejum seja <span className="hydro-serif hydro-gold-text text-[1.32em] leading-[0.9] font-medium">consagração.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-[1.7] font-light text-[#c9bfb2] lg:text-lg">
          Se este jejum é um tempo dedicado ao Senhor, que ele seja leve, profundo e transformador.
          Que sua mente seja renovada. Que sua carne se cale. E que você caminhe no Espírito com
          clareza e propósito.
        </p>
        <GoldButton href="#ofertas" className="mt-10 max-sm:w-full">
          Quero meu HydroPower
        </GoldButton>
        <p className="mt-10 text-sm text-[#a39a8e]">
          Com energia e propósito,
          <br />
          <span className="text-[#e9d3a9]">Equipe HydroPower · OJC Nutrition</span>
        </p>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080706] pt-16 pb-24 lg:pb-6">
      <Container className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-[1.6] text-[#7d756b]">
            Suplemento alimentar em cápsulas à base de minerais. 60 cápsulas · 750 mg cada cápsula.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[#a39a8e]">
          <p className="mb-2 text-xs tracking-[0.25em] text-[#d6ad72] uppercase">Fale conosco</p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#f3ece2]">
            +55 21 97571-9527
          </a>
          <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#f3ece2]">
            @ojejumcura
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[#7d756b]">
          <p className="mb-2 text-xs tracking-[0.25em] text-[#d6ad72] uppercase">OJC Nutrition LTDA</p>
          <p>CNPJ 52.567.777/0001-36</p>
          <p>Rua José Miguel Vilela, 85, Campo Grande</p>
          <p>CEP 23081-290 · Rio de Janeiro, RJ</p>
        </div>
      </Container>
      <SiteCredit tone="dark" className="border-white/[0.06] bg-transparent" />
    </footer>
  )
}

function MobileBuyBar() {
  return (
    <div
      data-buybar
      className="fixed inset-x-0 bottom-0 z-50 translate-y-full border-t border-white/[0.08] bg-[#0b0a09]/90 backdrop-blur-xl transition-transform duration-500 lg:hidden [&.is-visible]:translate-y-0"
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <img src={pote} alt="" className="h-11 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-[#f3ece2]">HydroPower</span>
            <span className="text-xs text-[#a39a8e]">a partir de {formatBRL(offers[0].price)}</span>
          </div>
        </div>
        <a
          href="#ofertas"
          className="hydro-gold-bg inline-flex h-11 shrink-0 items-center rounded-full px-6 text-sm font-semibold whitespace-nowrap text-[#1a120a]"
        >
          Comprar
        </a>
      </Container>
    </div>
  )
}
