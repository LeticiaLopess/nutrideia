import { offers } from '../../data/offers'
import { cn } from '../../lib/cn'
import { Badge, Button, Container, GlowText, RadialGlow, ScriptText, Section } from '../ui'

export function Offers() {
  return (
    <Section id="comece-agora" className="bg-black">
      <RadialGlow className="-top-80 left-1/2 -z-10 size-240 -translate-x-1/2" />

      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Comece agora</Badge>

          <h2 className="mt-6 text-3xl leading-tight font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem]">
            Escolha o caminho da sua{' '}
            <GlowText animated={false} className="font-display mt-1 text-[1.3em] leading-none font-normal">
              <ScriptText>transformação.</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-[1.6] text-neutral-300 lg:text-lg">
            Comece pela cozinha ou mergulhe de vez no Choque no Metabolismo. Todos os caminhos levam ao mesmo
            lugar: renovar a mente, bater a cota de proteína e voltar a amar o que você vê no
            espelho.
          </p>
        </div>

        <div className="mt-16 grid w-full gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={cn(
                'relative flex flex-col rounded-2xl border p-6 sm:p-10',
                offer.featured
                  ? 'border-pink/60 bg-pink/[0.07] shadow-[0_0_60px_rgb(var(--glow-rgb)/0.15)]'
                  : 'border-white/10 bg-white/3',
              )}
            >
              {offer.image ? (
                <img
                  src={offer.image}
                  alt={offer.name}
                  loading="lazy"
                  className="mb-8 aspect-[3/1] w-full rounded-xl object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="mb-8 flex aspect-[3/1] w-full items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] text-xs font-medium tracking-widest text-neutral-500 uppercase"
                >
                  Imagem do produto
                </div>
              )}

              <span className="text-xs font-medium tracking-widest text-pink uppercase">
                {offer.format}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{offer.name}</h3>
              <p className="font-display mt-1 text-2xl leading-tight text-pink">
                <ScriptText>{offer.tagline}</ScriptText>
              </p>

              <p className="mt-6 text-[15px] leading-[1.45] text-neutral-300">{offer.description}</p>

              <ul className="mt-8 mb-10 flex flex-col gap-4 border-t border-white/10 pt-8">
                {offer.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-base leading-normal text-neutral-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 size-5 shrink-0 text-pink"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-auto mb-6 text-center">
                <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                  Investimento
                </p>
                <p className="mt-2 text-[2.5rem] leading-none font-semibold text-white sm:text-[2.75rem]">
                  {offer.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
                {offer.priceNote && (
                  <p className="mt-1 text-sm text-neutral-400">{offer.priceNote}</p>
                )}
              </div>

              <Button
                href={offer.checkoutHref}
                variant={offer.featured ? 'primary' : 'outline'}
                size="lg"
                className="w-full"
              >
                {offer.cta}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
