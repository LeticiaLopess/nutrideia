import andreiaHero from '../../assets/images/andreia-hero.png'
import bgHero from '../../assets/images/bg-hero.png'
import { whatsappHref } from '../../data/navigation'
import { Button, Container, GlowText, OverlayBackground, RadialGlow } from '../ui'

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

        <div className="flex justify-center self-end lg:justify-end">
          <img
            src={andreiaHero}
            alt="Andreia, nutricionista"
            className="h-auto w-full lg:w-[104%] max-w-md lg:max-w-[720px] max-sm:w-[112%] max-sm:max-w-none"
          />
        </div>
      </Container>
    </section>
  )
}
