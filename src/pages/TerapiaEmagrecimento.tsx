import andreiaAbout from '../assets/images/andreia-about.jpg'
import andreiaTerapia from '../assets/images/andreia-terapia.png'
import logoTerapia from '../assets/images/logo-terapia.png'
import terapiaEmagrecimento from '../assets/images/terapia-emagrecimento.png'
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
  ScriptText,
  Section,
} from '../components/ui'
import type { LineIconName } from '../components/ui'
import { offers } from '../data/offers'

const product = offers.find((offer) => offer.name === 'Terapia do Emagrecimento')!

const formattedPrice = product.price.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const forWhom = {
  yes: [
    'Está cansada de emagrecer e engordar de novo e quer acompanhamento de perto.',
    'Tem resistência à insulina, diabetes ou SOP e quer melhorar sua saúde enquanto emagrece.',
    'Começa animada, mas vai deixando o cuidado com você para depois.',
    'Quer aprender a se alimentar melhor dentro da sua rotina, sem viver de dieta.',
  ],
  no: [
    'Quer receber um cardápio e ir embora, sem participar do acompanhamento.',
    'Procura uma promessa de emagrecimento milagroso em poucos dias.',
    'Espera que eu faça por você as mudanças que vamos construir juntas.',
  ],
}

const features: { icon: LineIconName; title: string; text: string }[] = [
  {
    icon: 'smile',
    title: '12 sessões ao vivo',
    text: 'Chamadas de vídeo individuais, só eu e você, com tempo para olhar cada detalhe.',
  },
  {
    icon: 'ruler',
    title: 'Estratégia sob medida',
    text: 'Um plano construído a partir da sua história, da sua rotina e do seu corpo.',
  },
  {
    icon: 'repeat',
    title: 'Ajustes a cada etapa',
    text: 'A cada sessão, revisamos o que funcionou e ajustamos o próximo passo no seu ritmo.',
  },
  {
    icon: 'heart',
    title: 'Suporte entre as sessões',
    text: 'Você não fica sozinha entre um encontro e outro: tira dúvidas e compartilha o processo.',
  },
]

const journey = [
  {
    label: 'Etapa 1',
    title: 'A sua história',
    text: 'Entendemos de onde você vem, o que já tentou e o que te trouxe até aqui.',
  },
  {
    label: 'Etapa 2',
    title: 'A sua estratégia',
    text: 'Montamos juntas uma alimentação que respeita o seu prazer de comer e a sua rotina.',
  },
  {
    label: 'Etapa 3',
    title: 'Crenças e padrões',
    text: 'Trabalhamos o que acontece na sua mente antes de você abrir a geladeira.',
  },
  {
    label: 'Etapa 4',
    title: 'A sua autonomia',
    text: 'Você sai com ferramentas para seguir sozinha e manter o resultado para sempre.',
  },
]

const faq = [
  {
    question: 'Como funcionam as sessões?',
    answer:
      'São 12 chamadas de vídeo individuais e ao vivo comigo, agendadas de acordo com a sua disponibilidade.',
  },
  {
    question: 'Quanto tempo dura o acompanhamento?',
    answer:
      'O ritmo é combinado com você no início. As sessões são distribuídas para acompanhar cada etapa do processo, sem pressa e sem atropelar o seu tempo.',
  },
  {
    question: 'E se eu precisar remarcar uma sessão?',
    answer: 'Sem problema. É só me avisar com antecedência e reagendamos para um novo horário.',
  },
  {
    question: 'Moro fora do Brasil. Posso participar?',
    answer: 'Pode, sim. Todo o acompanhamento é online, então você participa de onde estiver.',
  },
]

export function TerapiaEmagrecimento() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#060606]/8 bg-[#f2f2ef]/70 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          <a href="/">
            <img src={logoTerapia} alt="Terapia do Emagrecimento" className="h-10 w-auto lg:h-12" />
          </a>
          <Button href={product.checkoutHref} variant="solid" size="sm" className="max-sm:hidden">
            Quero minha vaga
          </Button>
        </Container>
      </header>

      <main className="pb-20 lg:pb-0">
        <Hero />
        <ForWhom />
        <HowItWorks />
        <Journey />
        <FaithFoundation variant="terapia" />
        <Testimonials className="bg-[#f1ead8]" />
        <FinalCall />
        <Pricing />
        <Faq />
        <AboutAndreia />
      </main>

      <MobileBuyBar />
    </>
  )
}

function ScarcityNote() {
  return (
    <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#060606]/60">
      <LineIcon name="heart" className="size-4 text-pink" />
      Vagas limitadas · atendimento individual
    </p>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f2f2ef] pt-32 text-[#060606] lg:min-h-svh lg:pt-20">
      <Container className="grid items-end gap-10 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-6">
        <div className="flex flex-col items-center self-center text-center lg:items-start lg:pb-16 lg:text-left">
          <h1 className="max-w-3xl text-3xl leading-[1.1] font-medium tracking-tight sm:text-4xl lg:text-6xl lg:leading-[1.05]">
            Você sabe que precisa emagrecer. Mas está difícil{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.15em] leading-[0.5] font-normal tracking-tight [text-shadow:none]! lg:text-[1.2em]"
            >
              <ScriptText>conseguir sozinha?</ScriptText>
            </GlowText>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-[1.6] text-[#060606]/70 lg:text-lg">
            Eu vou pegar na sua mão e te ajudar a entender o que está dificultando o seu emagrecimento.
            São{' '}
            <strong className="font-semibold text-[#060606]">12 sessões individuais ao vivo</strong> comigo,
            para cuidar da sua alimentação e trabalhar a sua relação com a comida.
          </p>

          <Button href={product.checkoutHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            Quero a minha terapia
          </Button>
          <ScarcityNote />
        </div>

        <img
          src={andreiaTerapia}
          alt="Andreia sorrindo e apontando para você"
          className="mx-auto h-auto w-full max-w-sm origin-bottom translate-y-[24%] scale-[1.48] lg:absolute lg:top-20 lg:right-[max(0px,calc((100vw-80rem)/2))] lg:bottom-0 lg:h-[calc(100%-5rem)] lg:w-auto lg:max-w-none lg:origin-bottom lg:-translate-x-12 lg:translate-y-[42%] lg:scale-[1.48] lg:object-contain lg:object-bottom"
        />
      </Container>
    </section>
  )
}

function ForWhom() {
  return (
    <Section className="bg-[#f1ead8] text-[#060606]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <Badge>Para quem é</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Você não precisa tentar mais uma dieta. Precisa de ajuda para{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal tracking-tight [text-shadow:none]!"
            >
              <ScriptText>fazer diferente.</ScriptText>
            </GlowText>
          </h2>
        </div>

        <div className="mt-16 grid w-full max-w-5xl gap-5 md:grid-cols-2 md:items-stretch lg:mt-20 lg:gap-6">
          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#f2f2ef] p-6 ring-1 ring-pink/25 sm:p-9">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-pink" />

            <div className="flex items-center gap-3.5 pl-1">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-pink text-white">
                <CheckIcon className="size-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.28em] text-pink uppercase">Sim</p>
                <h3 className="text-xl font-semibold leading-tight sm:text-[1.35rem]">É para você que</h3>
              </div>
            </div>

            <ul className="mt-7 flex flex-1 flex-col gap-2.5">
              {forWhom.yes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white/80 px-4 py-3.5 text-[15px] leading-[1.45] text-[#060606]/85"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-pink/15 text-pink">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#060606]/[0.045] p-6 ring-1 ring-[#060606]/10 sm:p-9">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-[#060606]/25" />

            <div className="flex items-center gap-3.5 pl-1">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#060606]/8 text-[#060606]/55">
                <CrossIcon className="size-4" />
              </span>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.28em] text-[#060606]/45 uppercase">Não</p>
                <h3 className="text-xl font-semibold leading-tight text-[#060606]/70 sm:text-[1.35rem]">
                  Não é para você que
                </h3>
              </div>
            </div>

            <ul className="mt-7 flex flex-1 flex-col gap-2.5">
              {forWhom.no.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-[#f1ead8]/70 px-4 py-3.5 text-[15px] leading-[1.45] text-[#060606]/55"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#060606]/8 text-[#060606]/45">
                    <CrossIcon className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function HowItWorks() {
  return (
    <Section id="como-funciona" className="bg-[#f2f2ef] text-[#060606]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Como funciona</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
            Nada de fórmula pronta.{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:none]!"
            >
              <ScriptText>Tudo sob medida.</ScriptText>
            </GlowText>
          </h2>
        </div>

        <ul className="mt-16 grid w-full gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-pink/15 bg-white p-6 shadow-[0_14px_40px_rgb(6_6_6/0.05)] sm:p-8"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-pink/15 text-pink">
                <LineIcon name={feature.icon} className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-base leading-[1.6] text-[#060606]/70">{feature.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

function Journey() {
  return (
    <Section className="bg-[#f1ead8] text-[#060606]">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div className="flex flex-col items-start lg:sticky lg:top-32 lg:self-start">
          <Badge>A jornada</Badge>

          <h2 className="mt-6 text-3xl leading-[1.15] font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
            12 encontros comigo para cuidar de você e do seu{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.2em] leading-none font-normal tracking-tight [text-shadow:none]!"
            >
              <ScriptText>emagrecimento.</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-8 max-w-md text-base leading-[1.6] text-[#060606]/70 lg:text-lg">
            São 12 encontros, só eu e você, para entender o que está dificultando o seu emagrecimento e
            trabalhar isso juntas. A cada sessão, vamos ajustar o que for preciso para você{' '}
            <strong className="font-semibold text-[#060606]">
              superar as barreiras que te impedem de chegar à sua melhor versão.
            </strong>
          </p>
        </div>

        <ol className="relative flex flex-col gap-10 border-l-2 border-pink/30 pl-8">
          {journey.map((stage) => (
            <li key={stage.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[2.6rem] size-4 rounded-full border-4 border-[#f1ead8] bg-pink"
              />
              <p className="text-xs font-semibold tracking-[0.2em] text-pink uppercase">{stage.label}</p>
              <h3 className="mt-2 text-2xl font-semibold">{stage.title}</h3>
              <p className="mt-3 max-w-lg text-base leading-[1.6] text-[#060606]/70">{stage.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

function Pricing() {
  return (
    <Section id="comece-agora" className="bg-[#f1ead8] text-[#060606]">
      <Container className="flex flex-col items-center">
        <div className="mb-14 flex max-w-2xl flex-col items-center text-center">
          <Badge>Comece agora</Badge>
          <h2 className="mt-6 text-3xl leading-[1.25] font-medium sm:text-4xl lg:text-[2.75rem]">
            Um investimento em você,{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:none]!"
            >
              <ScriptText>para a vida toda.</ScriptText>
            </GlowText>
          </h2>
        </div>

        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-pink/20 bg-white/50 shadow-[0_30px_80px_rgb(6_6_6/0.08)] md:grid-cols-[1.25fr_1fr]">
          <div className="p-6 sm:p-10">
            <img
              src={terapiaEmagrecimento}
              alt={product.name}
              className="aspect-[3/1] w-full rounded-2xl object-cover"
            />

            <ul className="mt-6 flex flex-wrap gap-2">
              {['Individual', '12 sessões ao vivo', 'Online'].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-pink/30 bg-pink/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-pink uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-[#060606]/50 uppercase">
              O que está incluso
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base leading-normal text-[#060606]/80">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-pink text-white">
                    <CheckIcon className="size-3" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center border-t border-dashed border-pink/30 bg-[#f1ead8]/70 p-6 text-center sm:p-10 md:border-t-0 md:border-l">
            <p className="font-display text-3xl leading-tight text-pink">
              <ScriptText>{product.tagline}</ScriptText>
            </p>

            <p className="mt-10 text-xs font-medium tracking-widest text-[#060606]/50 uppercase">
              Investimento
            </p>
            <p className="mt-2 text-5xl leading-none font-semibold sm:text-6xl">{formattedPrice}</p>
            {product.priceNote && (
              <p className="mt-3 text-sm text-[#060606]/60">{product.priceNote}</p>
            )}

            <Button href={product.checkoutHref} size="lg" className="mt-8 w-full max-sm:text-[15px]">
              Quero garantir a minha vaga
            </Button>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/60 p-4 text-left">
              <LineIcon name="heart" className="mt-0.5 size-5 shrink-0 text-pink" />
              <p className="text-sm leading-[1.6] text-[#060606]/70">
                <strong className="block font-semibold text-[#060606]">Vagas limitadas</strong>
                Atendo poucas pessoas por vez, para que cada sessão receba o cuidado que a sua
                história merece.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Faq() {
  return (
    <Section className="bg-[#f2f2ef] text-[#060606]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <Badge>Dúvidas frequentes</Badge>
          <h2 className="mt-6 text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
            Ficou alguma{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:none]!"
            >
              <ScriptText>dúvida?</ScriptText>
            </GlowText>
          </h2>
        </div>

        <div className="mt-14 flex w-full max-w-3xl flex-col gap-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-pink/15 bg-white px-6 py-5 shadow-[0_10px_30px_rgb(6_6_6/0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none text-pink transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-[1.6] text-[#060606]/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function AboutAndreia() {
  return (
    <Section id="sobre" className="bg-[#f2f2ef] text-[#060606]">
      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm">
          <span
            aria-hidden="true"
            className="absolute -right-4 -bottom-4 -z-10 size-full rounded-3xl border border-pink/50"
          />
          <img
            src={andreiaAbout}
            alt="Andreia Oliveira sorrindo, com a mão no queixo"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
          />
        </div>

        <div className="flex flex-col items-start">
          <Badge>Quem vai te acompanhar</Badge>

          <h2 className="mt-6 text-3xl leading-[1.25] font-medium sm:text-4xl lg:text-[2.75rem]">
            Quem é{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:none]!"
            >
              <ScriptText>Andreia Oliveira?</ScriptText>
            </GlowText>
          </h2>

          <div className="mt-10 flex max-w-[34rem] flex-col gap-5 text-base leading-[1.6] text-[#060606]/70">
            <p>
              Sou formada em Nutrição, mas conheço esse caminho por dentro:{' '}
              <strong className="font-semibold text-[#060606]">já fui obesa, diabética e hipertensa.</strong>{' '}
              Por muito tempo, convivi com a autoestima lá embaixo e com dietas que eu não conseguia
              sustentar.
            </p>

            <p>
              Nesse caminho, vivi a reversão da diabetes e criei o{' '}
              <span className="font-semibold text-pink">Método Nutrideia</span>, que desde 2017 já
              ajudou milhares de pessoas a emagrecer sem abrir mão do prazer de comer. Na Terapia do
              Emagrecimento, eu aplico tudo isso olhando só para você.
            </p>
          </div>

          <Button href={product.checkoutHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            Quero ser acompanhada por você
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function FinalCall() {
  return (
    <Section className="bg-[#f2f2ef] text-[#060606]">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-3xl text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[2.75rem]">
          Você já tentou sozinha. Agora, que tal tentar{' '}
          <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:none]!"
            >
            <ScriptText>comigo?</ScriptText>
          </GlowText>
        </h2>

        <p className="mt-8 max-w-xl text-base leading-[1.6] text-[#060606]/70 lg:text-lg">
          Um caminho feito sob medida, no seu ritmo, com alguém que já viveu o que você está vivendo.
        </p>

        <Button href={product.checkoutHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
          Quero começar a minha terapia
        </Button>
      </Container>
    </Section>
  )
}

function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#060606]/10 bg-[#f2f2ef]/90 backdrop-blur-md lg:hidden">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-[#060606]/60">{product.name}</span>
          <span className="text-lg font-semibold text-[#060606]">{formattedPrice}</span>
        </div>
        <Button href={product.checkoutHref} variant="solid" size="sm">
          Quero minha vaga
        </Button>
      </Container>
    </div>
  )
}
