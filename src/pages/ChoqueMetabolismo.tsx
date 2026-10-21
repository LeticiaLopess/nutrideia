import type { ReactNode } from 'react'
import andreiaAbout from '../assets/images/andreia-about.jpg'
import andreiaChoque from '../assets/images/andreia-choque.png'
import choqueMetabolismo from '../assets/images/choque-metabolismo.png'
import logoChoque from '../assets/images/logo-choque.png'
import { FaithFoundation } from '../components/sections/FaithFoundation'
import { Testimonials } from '../components/sections/Testimonials'
import { Badge, Button, CheckIcon, Container, CrossIcon, LineIcon, Section } from '../components/ui'
import { metabolismShockSteps } from '../data/method'
import { offers } from '../data/offers'
import { cn } from '../lib/cn'

const product = offers.find((offer) => offer.name === 'Choque no Metabolismo')!

const formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const pains = [
  'Já fez todas as dietas e sempre volta ao peso de antes',
  'Sente o corpo travado, como se nada mais funcionasse',
  'Vive cansada, inchada e sem energia no fim do dia',
  'Convive com diabetes, SOP ou pressão alta e não sabe por onde começar',
  'Começa animada na segunda e desiste antes de sexta',
]

const weeks = [
  {
    title: 'Virar a chave',
    text: 'Entender por que as dietas falharam e começar a reprogramar a mente para uma mente magra.',
  },
  {
    title: 'Proteína no centro',
    text: 'Montar refeições que saciam de verdade e acabam com a fome fora de hora.',
  },
  {
    title: 'Prazer sem culpa',
    text: 'Receitas exclusivas para comer o que você ama e continuar emagrecendo.',
  },
  {
    title: 'Autonomia',
    text: 'Montar sozinha o seu cardápio e manter os resultados muito depois dos 21 dias.',
  },
]

const stats = [
  { value: 'Desde 2017', label: 'edição após edição' },
  { value: '+10.000', label: 'mulheres transformadas' },
  { value: '21 dias', label: 'de autocuidado guiado' },
]

export function ChoqueMetabolismo() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#fdfaf0]/80 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          <a href="/">
            <img src={logoChoque} alt="Choque no Metabolismo" className="h-10 w-auto lg:h-12" />
          </a>
          <Button href={product.checkoutHref} variant="solid" size="sm" className="max-sm:hidden">
            Quero participar
          </Button>
        </Container>
      </header>

      <main className="pb-20 text-black lg:pb-0">
        <Hero />
        <Pains />
        <FaithFoundation variant="choque" />
        <Learn />
        <Weeks />
        <Group />
        <Testimonials
          accent="shock"
          className="bg-[#fce8f2]"
          description={
            <>
              Desde 2017, mais de 10 mil mulheres já passaram pelo{' '}
              <strong className="font-semibold text-black">Choque no Metabolismo</strong> e por
              outros programas do Método Nutrideia. Mas não precisa acreditar só em mim:{' '}
              <span className="font-semibold text-black underline decoration-2 underline-offset-4">
                veja o que elas têm a dizer.
              </span>
            </>
          }
        />
        <Pricing />
        <FinalCall />
        <AboutAndreia />
      </main>

      <MobileBuyBar />
    </>
  )
}

function Highlight({ children, tone = 'pink' }: { children: ReactNode; tone?: 'pink' | 'cream' }) {
  return (
    <span
      className={cn(
        'box-decoration-clone px-1',
        tone === 'pink'
          ? 'bg-[linear-gradient(transparent_55%,#fce8f2_55%)]'
          : 'bg-[linear-gradient(transparent_55%,#fdfaf0_55%)]',
      )}
    >
      {children}
    </span>
  )
}

function Shock({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('font-black uppercase italic', className)}>{children}</span>
}

function Guarantee({ className }: { className?: string }) {
  return (
    <p className={cn('mt-4 flex items-center justify-center gap-2 text-sm text-black/60', className)}>
      <LineIcon name="zap" className="size-4" />
      Compra segura · 7 dias de garantia
    </p>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-[#fdfaf0] via-[#fdfaf0] to-[#fce8f2] pt-32 lg:min-h-svh lg:pt-20">
      <Container className="grid items-end gap-6 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col items-center self-center text-center lg:items-start lg:pb-16 lg:text-left">
          <h1 className="max-w-3xl text-[2.125rem] leading-[1.1] font-medium sm:text-[2.75rem] lg:text-[3.25rem]">
            Dê um <Shock>choque</Shock> no seu metabolismo{' '}
            <Highlight>em 21 dias.</Highlight>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-[1.6] text-black/75 lg:text-lg">
            21 dias de autocuidado guiados por mim, com os mesmos métodos que já ajudaram milhares
            de mulheres a{' '}
            <strong className="font-semibold text-black">
              vencer a obesidade e os problemas de saúde
            </strong>{' '}
            sem passar fome.
          </p>

          <Button
            href={product.checkoutHref}
            size="lg"
            className="mt-10 max-sm:w-full max-sm:text-[15px]"
          >
            Quero dar o choque agora
          </Button>
          <Guarantee />
        </div>

        <img
          src={andreiaChoque}
          alt="Andreia sorrindo e apontando, com uma fita métrica ao redor"
          className="mx-auto h-auto w-full max-w-xs origin-bottom scale-100 lg:mr-0 lg:w-[500px] lg:max-w-none lg:translate-x-4"
        />
      </Container>
    </section>
  )
}

function Pains() {
  return (
    <Section className="bg-[#fdfaf0]">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge>Você se reconhece?</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
            Você acha que o seu metabolismo não tem mais <Highlight>jeito?</Highlight>
          </h2>

          <p className="mt-8 max-w-md text-base leading-[1.6] text-black/75 lg:text-lg">
            Se você se reconheceu nesses pontos, eu quero te dizer uma coisa: não desista de você. Eu sei como é tentar emagrecer e sentir que o seu corpo não responde.{' '}
            <strong className="font-semibold text-black"> Mas insistir numa dieta que você não consegue manter só prolonga essa frustração.</strong>{' '}
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {pains.map((pain) => (
            <li
              key={pain}
              className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white/70 p-5 text-base leading-[1.4] lg:text-lg"
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

function Learn() {
  return (
    <Section id="o-que-voce-vai-aprender" className="bg-black text-[#fdfaf0]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge className="text-[#fce8f2]!">O Método Nutrideia</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
            Em 21 dias, você vai <Shock className="text-[#fce8f2]">aprender</Shock>
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
          href={product.checkoutHref}
          size="lg"
          className="mt-14 bg-[#fdfaf0]! text-black! shadow-none! hover:shadow-[0_0_36px_rgb(252_232_242/0.5)]! max-sm:w-full max-sm:text-[15px]"
        >
          Quero aprender tudo isso
        </Button>
      </Container>
    </Section>
  )
}

function Weeks() {
  return (
    <Section id="como-funciona" className="bg-[#fce8f2]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Como funciona</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
            Uma semana de cada vez, <Highlight tone="cream">sem sofrimento.</Highlight>
          </h2>
        </div>

        <ol className="mt-16 grid w-full gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {weeks.map((week, index) => (
            <li key={week.title} className="relative rounded-2xl bg-[#fdfaf0] p-6 shadow-[0_14px_40px_rgb(0_0_0/0.06)] sm:p-8">
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

function Group() {
  return (
    <Section className="bg-[#fdfaf0]">
      <Container className="flex flex-col items-center text-center">
        <Badge>Jornada em grupo</Badge>

        <h2 className="mt-6 max-w-3xl text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
          Quem participa,
          <br />
          <Shock>sempre volta.</Shock>
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-[1.6] text-black/75 lg:text-lg">
          Você não vai caminhar sozinha. Durante os 21 dias, você faz parte de um{' '}
          <strong className="font-semibold text-black">
            grupo fiel de mulheres que estão vivendo a mesma transformação
          </strong>
          , trocando experiências, receitas e motivação todos os dias.
        </p>

        <dl className="mt-14 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-2xl border border-black/10 bg-[#fce8f2] px-6 py-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-black italic">{stat.value}</dd>
              <dd className="mt-2 text-sm text-black/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}

function Pricing() {
  return (
    <Section id="comece-agora" className="bg-black text-[#fdfaf0]">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge className="text-[#fce8f2]!">Comece agora</Badge>
          <h2 className="mt-6 max-w-xl text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
            Os próximos 21 dias podem mudar <Shock className="text-[#fce8f2]">tudo.</Shock>
          </h2>

          <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-[#fdfaf0]/60 uppercase">
            O que você recebe
          </p>
          <ul className="mt-6 grid w-full gap-4 sm:grid-cols-2">
            {product.benefits.map((benefit) => (
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
              Se não gostar, peça o reembolso em até 7 dias e receba 100% do seu dinheiro de volta,
              sem perguntas.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md -rotate-1 lg:mr-0">
          <div className="overflow-hidden rounded-t-3xl bg-[#fdfaf0] text-black">
            <img src={choqueMetabolismo} alt={product.name} className="aspect-[3/1] w-full object-cover" />
            <div className="px-6 pt-6 pb-8 text-center sm:px-10">
              <p className="text-xs font-semibold tracking-[0.3em] text-black/60 uppercase">
                {product.format} · 21 dias
              </p>
              <p className="mt-3 text-2xl font-black italic">
                Quem participa,
                <br />
                sempre volta.
              </p>
            </div>
          </div>

          <div aria-hidden="true" className="relative h-6 bg-[#fdfaf0]">
            <span className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-black" />
            <span className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full bg-black" />
            <span className="absolute inset-x-6 top-1/2 border-t-2 border-dashed border-black/20" />
          </div>

          <div className="rounded-b-3xl bg-[#fce8f2] px-6 pt-8 pb-10 text-center text-black sm:px-10">
            <p className="text-xs font-medium tracking-widest text-black/60 uppercase">Investimento</p>
            <p className="mt-2 text-5xl leading-none font-black italic sm:text-6xl">{formattedPrice}</p>
            <p className="mt-3 text-sm text-black/60">Menos do que você gastou em dietas.</p>

            <Button href={product.checkoutHref} size="lg" className="mt-8 w-full max-sm:text-[15px]">
              Quero participar
            </Button>
            <Guarantee />
          </div>
        </div>
      </Container>
    </Section>
  )
}

function AboutAndreia() {
  return (
    <Section id="sobre" className="bg-[#fdfaf0]">
      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm lg:order-2">
          <span aria-hidden="true" className="absolute -right-4 -bottom-4 -z-10 size-full rounded-3xl bg-[#fce8f2]" />
          <img
            src={andreiaAbout}
            alt="Andreia Oliveira sorrindo, com a mão no queixo"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
          />
        </div>

        <div className="flex flex-col items-start lg:order-1">
          <Badge>Quem guia a jornada</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
            Quem é <Highlight>Andreia Oliveira?</Highlight>
          </h2>

          <div className="mt-10 flex max-w-[34rem] flex-col gap-5 text-base leading-[1.6] text-black/75">
            <p>
              Sou formada em Nutrição, mas conheço esse caminho por dentro:{' '}
              <strong className="font-semibold text-black">já fui obesa, diabética e hipertensa.</strong>{' '}
              Por muito tempo, convivi com a autoestima lá embaixo e com dietas que eu não conseguia
              sustentar.
            </p>

            <p>
              Nesse caminho, vivi a reversão da diabetes e criei o{' '}
              <strong className="font-semibold text-black">Método Nutrideia</strong>, que desde 2017
              já ajudou milhares de pessoas a emagrecer sem abrir mão do prazer de comer. O Choque no
              Metabolismo é onde eu aplico esse método com você, dia após dia.
            </p>
          </div>

          <Button
            href={product.checkoutHref}
            size="lg"
            className="mt-10 max-sm:w-full max-sm:text-[15px]"
          >
            Quero fazer parte do grupo
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
        <h2 className="max-w-[50rem] text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
          Daqui a 21 dias, você vai agradecer por ter começado{' '}
          <Shock>hoje!</Shock>
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-[1.6] text-black/75 lg:text-lg">
          A escolha é sua: mais um mês recomeçando a dieta toda segunda, ou 21 dias de autocuidado
          com um grupo inteiro caminhando ao seu lado.
        </p>

        <Button
          href={product.checkoutHref}
          size="lg"
          className="mt-10 max-sm:w-full max-sm:text-[15px]"
        >
          Quero dar choque no meu metabolismo
        </Button>
        <Guarantee />
      </Container>
    </Section>
  )
}

function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur-md lg:hidden">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-[#fdfaf0]/60">{product.name}</span>
          <span className="text-lg font-bold text-[#fdfaf0]">{formattedPrice}</span>
        </div>
        <Button
          href={product.checkoutHref}
          variant="solid"
          size="sm"
          className="bg-[#fdfaf0]! text-black! hover:bg-[#fce8f2]!"
        >
          Quero participar
        </Button>
      </Container>
    </div>
  )
}
