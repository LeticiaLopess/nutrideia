import andreiaHero from '../../assets/images/andreia-hero.png'
import bgHero from '../../assets/images/bg-hero.png'
import { whatsappHref } from '../../data/navigation'
import { Button, Container, GlowText, OverlayBackground, RadialGlow } from '../ui'

const heroBadges = ['Dieta feliz', 'Sem passar fome', 'Romanos 12:2']

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-svh items-stretch overflow-hidden bg-black">
      <OverlayBackground
        src={bgHero}
        className="inset-0 top-16 -z-20 lg:top-24 lg:left-auto lg:w-3/4 lg:bg-right"
        overlayClassName="overlay-fade-y lg:overlay-fade-left"
      />

      <RadialGlow className="-top-[75vw] -right-[60vw] -z-10 size-[170vw] lg:-top-[55vw] lg:-right-[42vw] lg:size-[110vw]" />

      <Container className="grid content-between gap-10 pt-28 text-left md:pt-32 lg:grid-cols-[1.2fr_1fr] lg:content-stretch lg:pt-20">
        <div className="flex flex-col items-start self-center">
          <h1 className="font-display text-[clamp(2.75rem,5vw+1rem,5.75rem)] lg:text-[clamp(3.75rem,4.75vw,4.875rem)] leading-[1.25] font-normal text-neutral-200 pl-4">
            <span className="block whitespace-nowrap">A sua dieta te</span>
            <GlowText className="whitespace-nowrap">faz feliz?</GlowText>
          </h1>

          <p className="mt-9 max-w-md lg:mt-16 text-base leading-[1.45] text-neutral-300 lg:text-lg">
            Já pensou em emagrecer comendo bolo de chocolate todo dia? Isso é o Método Nutrideia! Perca
            peso sem abrir mão do que você ama.
          </p>

          <Button href={whatsappHref} size="lg" className="mt-12 max-sm:w-full max-sm:text-[15px]">
            <span className="sm:hidden">Quero emagrecer</span>
            <span className="max-sm:hidden">Quero aprender a emagrecer</span>
          </Button>
        </div>

        <div className="relative flex justify-center self-end lg:justify-end">
          <img
            src={andreiaHero}
            alt="Andreia, nutricionista"
            className="h-auto w-full lg:w-[107%] max-w-md lg:max-w-[720px] max-sm:w-[112%] max-sm:max-w-none lg:translate-x-6"
          />
          <ul className="absolute top-[44%] right-1 z-10 flex flex-col items-end gap-1.5 sm:gap-2.5 lg:top-[42%] lg:-right-4">
            {heroBadges.map((badge, index) => (
              <li
                key={badge}
                className="animate-badge-float motion-reduce:animate-none whitespace-nowrap rounded-full border border-[#7a7a7a] bg-[#575656] px-2.5 py-1 text-[9px] font-semibold tracking-[0.08em] text-white uppercase inset-shadow-[0_2px_8px_rgb(255_255_255/0.28)] shadow-[0_6px_16px_rgb(0_0_0/0.35)] sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.14em]"
                style={{
                  marginRight: index === 1 ? '0.55rem' : 0,
                  animationDelay: `${index * 0.35}s`,
                }}
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
