import andreiaBrownie from '../assets/images/andreia-brownie.jpg'
import andreiaEating from '../assets/images/andreia-eating.jpg'
import bgChristmas from '../assets/images/bg-christmas.jpg'
import cozinhaNutrideia from '../assets/images/cozinha-nutrideia.png'
import logoCozinha from '../assets/images/logo-cozinha.png'
import womanPants from '../assets/images/woman-pants.png'
import { FaithFoundation } from '../components/sections/FaithFoundation'
import { Testimonials } from '../components/sections/Testimonials'
import {
  Badge,
  Button,
  CheckIcon,
  Container,
  CrossIcon,
  GlowText,
  LineIcon,
  RadialGlow,
  ScriptText,
  Section,
} from '../components/ui'
import type { LineIconName } from '../components/ui'
import { offers } from '../data/offers'

const product = offers.find((offer) => offer.name === 'Cozinha Nutrideia')!

const formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const recipes = [
  'Arroz doce low carb',
  'Beijinho sem açúcar proteico',
  'Panna cotta com geleia de frutas vermelhas',
  'Kibe low carb',
  'Pão francês, baguete e pão de gergelim',
  'Pão de passas com canela',
  'Pizza e hambúrguer low carb',
]

const pains = [
  'Achar que depois de uma certa idade não dá mais para emagrecer',
  'Viver de frango com salada e chamar isso de dieta',
  'Cortar o doce a semana inteira e atacar a geladeira no sábado',
  'Recomeçar a dieta toda segunda-feira',
  'Perder peso e ganhar tudo de volta no efeito sanfona',
]

const steps: { icon: LineIconName; title: string; text: string }[] = [
  {
    icon: 'heart',
    title: 'Escolha a receita',
    text: 'Opções variadas de receitas para cada vontade.',
  },
  {
    icon: 'cake',
    title: 'Prepare em casa',
    text: 'Siga o passo a passo na sua cozinha, no seu tempo.',
  },
  {
    icon: 'smile',
    title: 'Coma sem culpa',
    text: 'Mais proteína, mais saciedade e zero vontade reprimida.',
  },
]

const waitingReasons = [
  'As melhores receitas com muita proteína!',
  'Bolo de chocolate? Eu te ensino o meu!',
  'Aprenda as receitas do nosso delivery.',
  'Faça em casa pra família toda!',
]

const comparison = {
  common: [
    'Você conta as calorias, mas nem olha a proteína.',
    'Você começa animada e termina frustada.',
    'Fica brigando com a vontade de beliscar.',
    'Come um bolo e acha que estragou tudo.',
  ],
  nutrideia: [
    'Eu te ensino a bater cota de proteína com receitas deliciosas!',
    'Pães e bolos em versões proteicas.',
    'Bolo de chocolate na rotina? Sim!',
    'Eu te ensino a fazer tudo na sua casa.',
  ],
}

export function CozinhaNutrideia() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cozinha-brown/60 bg-[#141414]/70 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          <a href="/">
            <img src={logoCozinha} alt="Cozinha Nutrideia" className="h-11 w-auto lg:h-13" />
          </a>
          <Button href={product.checkoutHref} variant="solid" size="sm" className="max-sm:hidden">
            Quero as receitas
          </Button>
        </Container>
      </header>

      <main className="pb-20 lg:pb-0">
        <Hero />
        <GinghamStrip />
        <Pains />
        <CostOfWaiting />
        <Menu />
        <Steps />
        <Comparison />
        <FaithFoundation variant="cozinha" />
        <div className="theme-cozinha-light">
          <Testimonials
            descriptionClassName="max-w-xl"
            description={
              <>
                Eu poderia ficar aqui falando, mas quero que você ouça quem já viveu isso na prática.
                Olha o que elas contam sobre o cuidado, a transformação e o que aprenderam comigo!
              </>
            }
          />
        </div>
        <Pricing />
        <FinalCall />
        <GinghamStrip />
        <AboutAndreia />
      </main>

      <MobileBuyBar />
    </>
  )
}

function GinghamStrip() {
  return <div aria-hidden="true" className="bg-gingham h-[39px]" />
}

function CautionStrip() {
  return (
    <div
      aria-hidden="true"
      className="h-[39px] border-b border-white/5 bg-[repeating-linear-gradient(-45deg,#1a1a1a_0_9px,#3d3530_9px_18px)] opacity-40"
    />
  )
}

function Guarantee() {
  return (
    <p className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-400">
      <LineIcon name="heart" className="size-4 text-pink" />
      Compra segura · 7 dias de garantia
    </p>
  )
}

function Hero() {
  return (
    <section className="relative isolate flex overflow-hidden bg-[#141414] pt-32 lg:min-h-svh lg:pt-20">
      <RadialGlow className="-top-[30rem] -left-[20rem] -z-10 size-[60rem]" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[44%] lg:block">
        <img
          src={andreiaEating}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-[58%_top] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.25)_10%,#000_32%,#000_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.25)_10%,#000_32%,#000_100%)]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[38%] bg-linear-to-r from-[#141414] from-0% via-[#141414]/85 via-45% to-transparent"
        />
      </div>

      <Container className="relative z-10 flex w-full flex-col items-center gap-10 lg:min-h-[calc(100svh-5rem)] lg:flex-row lg:items-center">
        <div className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="max-w-3xl text-[2.75rem] leading-[1.05] font-medium text-neutral-100 sm:text-5xl lg:text-[4rem] lg:leading-[1]">
            A sua dieta te
            <br />
            <GlowText
              animated={false}
              className="font-display -mt-0.5 inline-block text-[1.55em] leading-[0.9] font-normal [text-shadow:none]! [--color-pink:#d4213f] [--glow-rgb:212_33_63] lg:-mt-1 lg:text-[1.65em]"
            >
              <ScriptText>faz feliz?</ScriptText>
            </GlowText>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-[1.6] text-neutral-300 lg:text-xl">
            Aqui, até o bolo de chocolate ajuda você a bater sua cota de proteínas! Esse é o segredo das
            receitas Nutrideia: além de matar a vontade de um doce, ajudam a nutrir e dar saciedade.
          </p>

          <Button href={product.checkoutHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            Quero essas receitas
          </Button>
          <Guarantee />
        </div>

        <div className="relative mx-auto w-full max-w-md lg:hidden">
          <img
            src={andreiaEating}
            alt="Andreia comendo uma fatia de bolo"
            className="mx-auto h-auto w-full"
          />
        </div>
      </Container>
    </section>
  )
}

function Pains() {
  return (
    <Section className="theme-cozinha-light bg-[#f7efe7]">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge>Você se reconhece?</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium text-[#141414] sm:text-4xl lg:text-[2.75rem]">
            Chega de dieta que você{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-[0] font-normal [text-shadow:none]!"
            >
              <ScriptText>não aguenta.</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-[1.6] text-cozinha-brown lg:text-lg">
            Você corta o pão, corta o doce… mas aguenta até quando? Emagrecer precisa ser algo que você
            consiga manter. Eu vou te ensinar a preparar pães, bolos e sobremesas proteicas para cuidar
            de você com prazer.{' '}
            <strong className="font-semibold text-[#141414]">
              A sua dieta precisa caber na sua vida!
            </strong>
          </p>
        </div>

        <div className="relative -rotate-1 rounded-sm bg-white px-6 pt-10 pb-8 shadow-[0_20px_50px_rgb(89_72_61/0.18)] sm:px-10">
          <span
            aria-hidden="true"
            className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-2 bg-[#e6c5aa]/80"
          />
          <p className="font-display text-3xl text-cozinha-brown">
            <ScriptText>O que sai da sua vida hoje:</ScriptText>
          </p>
          <ul className="mt-6 border-l-2 border-pink/30 pl-5">
            {pains.map((pain) => (
              <li
                key={pain}
                className="border-b border-cozinha-brown/15 py-4 text-base leading-[1.4] text-cozinha-brown lg:text-lg"
              >
                <span className="line-through decoration-pink decoration-[1.5px]">{pain}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

function CostOfWaiting() {
  return (
    <Section className="bg-[#141414]">
      <RadialGlow className="top-1/2 -left-[30rem] -z-10 size-[60rem] -translate-y-1/2" />

      <Container className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:self-center lg:text-left">
          <h2 className="max-w-2xl text-3xl leading-[1.15] font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem]">
            Você vai esperar mais uma segunda-feira pra{' '}
            <GlowText animated={false} className="font-display mt-1 text-[1.3em] leading-none font-normal">
              <ScriptText>cuidar de você?</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-[1.6] text-neutral-300 lg:text-lg">
            Mais uma roupa guardada esperando você emagrecer. Mais uma dieta que começa animada e termina
            em frustração. Vamos fazer diferente dessa vez?{' '}
            <strong className="font-semibold text-white">
              A vida é muito curta pra você não amar o que vê no espelho.
            </strong>
          </p>

          <p className="mt-8 text-xs font-semibold tracking-widest text-pink uppercase">
            Na Cozinha Nutrideia:
          </p>

          <ul className="mt-4 space-y-3 text-left">
            {waitingReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-base text-neutral-200 lg:text-lg">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-pink lg:mt-1" />
                {reason}
              </li>
            ))}
          </ul>

          <Button href={product.checkoutHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            Quero começar agora
          </Button>
        </div>

        <img
          src={womanPants}
          alt="Mulher segurando uma calça jeans e olhando para ela, preocupada"
          loading="lazy"
          className="mx-auto -mb-24 w-full max-w-xs sm:max-w-sm lg:-mb-32 lg:ml-auto lg:mr-0 lg:max-w-lg lg:translate-x-8 lg:scale-105"
        />
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#141414] to-transparent"
      />
    </Section>
  )
}

function Menu() {
  return (
    <Section id="receitas" className="bg-[#141414]">
      <RadialGlow className="top-1/2 left-1/2 -z-10 size-[60rem] -translate-x-1/2 -translate-y-1/2" />

      <Container className="flex flex-col items-center">
        <div className="w-full max-w-2xl rounded-3xl border border-pink/40 p-2">
          <div className="rounded-[1.25rem] border border-pink/20 px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-xs font-semibold tracking-[0.4em] text-pink uppercase">RECEITAS</p>

            <h2 className="mt-4 text-3xl leading-[1.25] font-medium text-neutral-100 sm:text-4xl">
              Veja o que você vai aprender na{' '}
              <GlowText animated={false} className="font-display mt-1 text-[1.3em] leading-none font-normal">
                <ScriptText>Cozinha Nutrideia</ScriptText>
              </GlowText>
            </h2>

            <ul className="mt-12 flex flex-col gap-6 text-left">
              {recipes.map((recipe) => (
                <li key={recipe} className="flex items-end gap-3 text-base text-neutral-200 sm:text-lg">
                  <span>{recipe}</span>
                  <span aria-hidden="true" className="mb-1.5 min-w-6 flex-1 border-b-2 border-dotted border-pink/30" />
                  <LineIcon name="heart" className="mb-0.5 size-5 shrink-0 text-pink" />
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-4">
              <aside className="rounded-xl border border-pink/35 bg-pink/[0.08] px-5 py-5 text-left sm:px-6">
                <p className="text-[11px] font-semibold tracking-[0.35em] text-pink uppercase">
                  Bônus
                </p>
                <p className="mt-2 text-base leading-[1.45] text-white sm:text-lg">
                  De presente, você ainda leva as receitas oficiais do delivery:{' '}
                  <strong className="font-semibold text-white">
                    Pão pra secar, bolo de chocolate, mesclado, paçoca, biscoito divo, creme de avelã
                    e etc
                  </strong>
                  .
                </p>
              </aside>

              <aside className="relative overflow-hidden rounded-xl border border-[#c9a227]/30 px-5 py-5 text-left sm:px-6">
                <img
                  src={bgChristmas}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 size-full scale-125 object-cover object-center contrast-125 brightness-75"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-black/85" />

                <p className="relative text-[11px] font-semibold tracking-[0.35em] text-[#e8c547] uppercase">
                  Bônus de Natal
                </p>
                <p className="relative mt-2 text-base leading-[1.45] text-white sm:text-lg">
                  De presente, você ainda leva{' '}
                  <strong className="font-semibold text-white">receitas natalinas</strong>, como
                  rabanada e doce de leite proteico, pra ceia com cara de festa.
                </p>
              </aside>
            </div>

            <p className="mt-8 text-sm text-neutral-400">
              Doce, pão, lanche e prato salgado em versão low carb e proteica. Sem culpa, sem
              compulsão, sem recomeçar na segunda.
            </p>
          </div>
        </div>

        <Button href={product.checkoutHref} size="lg" className="mt-12 max-sm:w-full max-sm:text-[15px]">
          <span className="sm:hidden">Quero essas receitas</span>
          <span className="max-sm:hidden">Quero essas receitas na minha cozinha</span>
        </Button>
      </Container>
    </Section>
  )
}

function Steps() {
  return (
    <Section className="theme-cozinha-light bg-[#f7efe7]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Como funciona?</Badge>

          <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] font-medium text-[#141414] lg:text-[2.75rem]">
            Sem mistério, sem sofrimento,{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-[0] font-normal [text-shadow:none]!"
            >
              <ScriptText>é só seguir.</ScriptText>
            </GlowText>
          </h2>
        </div>

        <ol className="mt-16 grid w-full gap-6 md:grid-cols-3 lg:mt-20">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl bg-white p-2 shadow-[0_14px_40px_rgb(89_72_61/0.12)]"
            >
              <div className="h-full rounded-xl border border-dashed border-cozinha-brown/30 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-full bg-pink/10 text-pink">
                    <LineIcon name={step.icon} className="size-6" />
                  </span>
                  <span className="text-sm font-semibold tracking-[0.2em] text-cozinha-brown/60 uppercase">
                    Passo {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#141414]">{step.title}</h3>
                <p className="mt-3 text-base leading-[1.6] text-cozinha-brown">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

function Comparison() {
  return (
    <Section className="bg-[#141414]">
      <RadialGlow className="top-1/2 -right-[30rem] -z-10 size-[60rem] -translate-y-1/2" />

      <Container className="flex flex-col items-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <Badge>A diferença</Badge>

          <h2 className="mt-6 text-3xl leading-[1] font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem]">
            Qual das duas você vai escolher{' '}
            <GlowText animated={false} className="font-display mt-1 text-[1.3em] leading-none font-normal">
              hoje?
            </GlowText>
          </h2>
        </div>

        <div className="mt-16 grid w-full max-w-4xl gap-6 md:grid-cols-2 lg:mt-20">
          <div className="overflow-hidden rounded-2xl border border-cozinha-brown/30 bg-white/[0.03]">
            <CautionStrip />
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-[0.12em] text-neutral-400 uppercase">
                Naquela dieta de sempre
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {comparison.common.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[base] text-neutral-400">
                    <CrossIcon className="mt-0.5 size-5 shrink-0 text-neutral-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-pink/50 bg-cozinha-brown/25 shadow-[0_0_28px_rgb(var(--glow-rgb)/0.18)]">
            <GinghamStrip />
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-[0.12em] text-white uppercase">
                Na Cozinha Nutrideia
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {comparison.nutrideia.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-neutral-100">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Pricing() {
  return (
    <Section id="comece-agora" className="bg-[#141414]">
      <RadialGlow className="top-1/2 left-1/2 -z-10 size-[60rem] -translate-x-1/2 -translate-y-1/2" />

      <Container className="flex flex-col items-center">
        <div className="mb-12 flex max-w-2xl flex-col items-center text-center">
          <Badge>Comece agora</Badge>
          <h2 className="mt-6 text-3xl leading-[1.25] font-medium text-neutral-100 sm:text-4xl">
            Vem pra Cozinha Nutrideia. Até o bolo de chocolate aqui{' '}
            <GlowText animated={false} className="font-display mt-1 text-[1.3em] leading-none font-normal">
              <ScriptText>tem segredo!</ScriptText>
            </GlowText>
          </h2>
        </div>

        <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-pink/40 bg-cozinha-brown/25 text-center shadow-[0_0_60px_rgb(var(--glow-rgb)/0.12)]">
          <GinghamStrip />

          <div className="p-6 sm:p-12">
            <img
              src={cozinhaNutrideia}
              alt={product.name}
              className="aspect-[3/1] w-full rounded-xl object-cover"
            />

            <p className="font-display mt-6 text-3xl leading-tight text-pink">
              <ScriptText>{product.tagline}</ScriptText>
            </p>

            <ul className="mt-8 flex flex-col gap-3 border-t border-dashed border-pink/30 pt-8 text-left">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base leading-normal text-neutral-200">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-pink" />
                  {benefit}
                </li>
              ))}
            </ul>

            <p className="mt-10 text-xs font-medium tracking-widest text-neutral-400 uppercase">
              Investimento
            </p>
            <p className="mt-2 text-[2.5rem] leading-none font-semibold text-white sm:text-5xl">
              {formattedPrice}
            </p>
            <p className="mt-3 text-sm text-neutral-400">
              Pagamento único. Acesso imediato.
            </p>

            <Button href={product.checkoutHref} size="lg" className="mt-8 w-full max-sm:text-[15px]">
              Quero começar agora
            </Button>

            <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-pink/40 bg-pink/[0.06] p-6 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-pink/15 text-pink">
                <LineIcon name="heart" className="size-6" />
              </span>
              <p className="mt-4 text-xs font-semibold tracking-[0.3em] text-pink uppercase">
                Garantia de 7 dias
              </p>
              <p className="mt-2 text-xl font-semibold text-white">O risco é todo meu.</p>
              <p className="mt-3 text-sm leading-[1.6] text-neutral-300">
                Entre, teste as receitas e, se não gostar, peça o reembolso em até 7 dias. Você
                recebe 100% do seu dinheiro de volta, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function FinalCall() {
  return (
    <Section className="bg-[#141414] pt-0 lg:pt-0">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-3xl text-3xl leading-[1.15] font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem]">
          A vida é muito curta pra você não amar o que vê no{' '}
          <GlowText animated={false} className="leading-[0] font-display mt-1 text-[1.2em] font-normal">
            <ScriptText>espelho.</ScriptText>
          </GlowText>
        </h2>

        <p className="mt-8 max-w-xl text-base leading-[1.6] text-neutral-300 lg:text-lg">
          Vamos começar a cuidar de você hoje? Eu te ensino a fazer as receitas do nosso delivery na
          sua casa, com versões proteicas de pão, bolo e muito mais. Vem pra Cozinha Nutrideia!
        </p>

        <Button href={product.checkoutHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
          Quero aprender com a Nutrideia!
        </Button>
        <Guarantee />
      </Container>
    </Section>
  )
}

function AboutAndreia() {
  return (
    <Section id="sobre" className="theme-cozinha-light bg-[#f7efe7]">
      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-sm rotate-2 bg-white p-4 pb-16 shadow-[0_24px_60px_rgb(89_72_61/0.22)] lg:order-2">
          <span
            aria-hidden="true"
            className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3 bg-[#e6c5aa]/80"
          />
          <img
            src={andreiaBrownie}
            alt="Andreia Oliveira sorrindo enquanto come um pedaço de brownie"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <figcaption className="font-display absolute inset-x-0 bottom-3 text-center text-3xl text-cozinha-brown">
            Andreia Oliveira
          </figcaption>
        </figure>

        <div className="flex flex-col items-start lg:order-1">
          <Badge>Quem cozinha com você</Badge>

          <h2 className="mt-6 text-3xl leading-[1.25] font-medium text-[#141414] sm:text-4xl lg:text-[2.75rem]">
            Quem é{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:none]!"
            >
              <ScriptText>Andreia Oliveira?</ScriptText>
            </GlowText>
          </h2>

          <div className="mt-10 flex max-w-[34rem] flex-col gap-5 text-base leading-[1.6] text-cozinha-brown">
            <p className="text-lg font-medium text-[#141414]">
              Eu queria emagrecer, mas sem abrir mão do bolo de chocolate.
            </p>

            <p>
              Sou formada em Nutrição, mas conheço esse caminho por dentro:{' '}
              <strong className="font-semibold text-[#141414]">
                já fui obesa, diabética e hipertensa.
              </strong>{' '}
              Por muito tempo, convivi com a autoestima lá embaixo e com dietas que eu não conseguia
              sustentar.
            </p>

            <p>
              Eu queria cuidar da saúde e{' '}
              <strong className="font-semibold text-[#141414]">continuar gostando de comer.</strong>{' '}
              Nesse caminho, vivi a reversão da diabetes e criei o{' '}
              <span className="font-semibold text-pink">Método Nutrideia</span>, que desde 2017 já
              ajudou milhares de pessoas a emagrecer sem abrir mão do prazer de comer.
            </p>
          </div>

          <Button href={product.checkoutHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            <span className="sm:hidden">Quero aprender com você</span>
            <span className="max-sm:hidden">Quero aprender com a Nutrideia</span>
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cozinha-brown/60 bg-[#141414]/85 backdrop-blur-md lg:hidden">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-neutral-400">{product.name}</span>
          <span className="text-lg font-semibold text-white">{formattedPrice}</span>
        </div>
        <Button href={product.checkoutHref} variant="solid" size="sm">
          Quero começar
        </Button>
      </Container>
    </div>
  )
}
