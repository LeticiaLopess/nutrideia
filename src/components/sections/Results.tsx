import { whatsappHref } from '../../data/navigation'
import { results } from '../../data/results'
import { Badge, Button, Carousel, Container, GlowText, Section } from '../ui'

export function Results() {
  return (
    <Section id="resultados" className="bg-[#eef0f2]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Resultados</Badge>

          <h2 className="mt-6 text-3xl leading-[1.25] font-medium text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
            Mulheres que{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:0_0_18px_rgb(var(--glow-rgb)/0.25)]!"
            >
              renovaram a mente.
            </GlowText>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-[1.6] text-neutral-600 lg:text-lg">
            Elas deixaram o próprio cuidado para depois por muito tempo. Com o Método Nutrideia e o
            Choque no Metabolismo, voltaram a se colocar em primeiro lugar.
          </p>
        </div>

        <Carousel
          label="Resultados das alunas"
          className="mt-16 w-full lg:mt-20"
          itemClassName="w-[19rem] sm:w-[22rem] lg:w-[24rem]"
        >
          {results.map((result, index) => (
            <figure
              key={`${result.name}-${index}`}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_10px_30px_rgb(0_0_0/0.06)]"
            >
              <div className="relative">
                <img
                  src={result.image}
                  alt={`Antes e depois de ${result.name}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium tracking-widest text-white uppercase backdrop-blur-sm">
                  Antes
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-pink px-3 py-1 text-xs font-medium tracking-widest text-white uppercase">
                  Depois
                </span>
              </div>

              <figcaption className="flex items-center justify-between gap-4 p-6">
                <span className="text-lg font-semibold text-neutral-900">{result.name}</span>
                <span className="text-xs font-medium tracking-widest text-pink uppercase">
                  {result.tag ?? 'Método Nutrideia'}
                </span>
              </figcaption>
            </figure>
          ))}
        </Carousel>

        <Button href={whatsappHref} size="lg" className="mt-14 max-sm:w-full max-sm:text-[15px]">
          Quero ser a próxima
        </Button>
      </Container>
    </Section>
  )
}
