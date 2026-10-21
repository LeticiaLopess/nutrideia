import andreiaMetabolismo from '../../assets/images/andreia-metabolismo.png'
import { whatsappHref } from '../../data/navigation'
import { metabolismShockSteps } from '../../data/method'
import { Badge, Button, Container, GlowText, RadialGlow, Section } from '../ui'

export function MetabolismShock() {
  return (
    <Section id="como-funciona" className="bg-black">
      <RadialGlow className="top-1/2 -left-[30rem] -z-10 size-[60rem] -translate-y-1/2" />

      <Container className="relative z-20 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge>Como funciona</Badge>

          <h2 className="mt-12 max-w-[34rem] text-3xl leading-[0.5] font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem]">
            Comida de verdade,{' '}
            <GlowText animated={false} className="font-display mt-3 text-[1.3em] leading-none font-normal">
              resultado de verdade.
            </GlowText>
          </h2>

          <div className="mt-10 flex max-w-xl flex-col gap-5 text-base leading-[1.4] text-neutral-300 lg:text-lg">
            <p>
              O <strong className="font-semibold text-white">Método Nutrideia</strong> reúne tudo o
              que eu usei para mudar a minha vida e a de milhares de pessoas: comida de verdade, mente
              no lugar certo e hábitos que se sustentam.
            </p>

            <p>
              Desde 2017, ajudando pessoas a vencer a obesidade e problemas de saúde sem passar fome.
              Com o método, você vai aprender:
            </p>
          </div>

          <ul className="mt-10 flex max-w-xl flex-col gap-4">
            {metabolismShockSteps.map((step) => (
              <li key={step} className="flex items-center gap-4 text-base leading-none text-neutral-200">
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-pink shadow-[0_0_10px_rgb(var(--glow-rgb)/0.8)]" />
                {step}
              </li>
            ))}
          </ul>

          <Button href={whatsappHref} size="lg" className="mt-12 max-sm:w-full max-sm:text-[15px]">
            <span className="sm:hidden">Quero emagrecer</span>
            <span className="max-sm:hidden">Quero conhecer o método</span>
          </Button>
        </div>

      </Container>

      <div className="relative isolate mx-auto mt-12 -mb-24 w-[112%] max-w-none translate-x-9 px-0 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:w-[46%] lg:max-w-none lg:translate-x-0 lg:px-0">
        <div
          aria-hidden="true"
          className="absolute top-[2%] left-[44%] -z-10 aspect-square w-[130%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--glow-rgb)/0.22)_0%,rgb(var(--glow-rgb)/0.07)_45%,transparent_70%)] lg:top-[2%] lg:w-[115%]"
        />
        <img
          src={andreiaMetabolismo}
          alt="Andreia sorrindo e apontando, com uma fita métrica ao redor"
          loading="lazy"
          className="h-auto w-full [mask-image:linear-gradient(to_bottom,transparent,black_18%)] lg:h-full lg:object-cover lg:object-left-top lg:[mask-image:none]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12%] lg:h-2/5 bg-gradient-to-t from-black via-black/45 to-transparent"
      />
    </Section>
  )
}
