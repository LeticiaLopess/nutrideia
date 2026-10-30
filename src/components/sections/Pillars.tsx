import { challengePillars } from '../../data/challenge'
import { Badge, Container, GlowText, LineIcon, RadialGlow, ScriptText, Section } from '../ui'

export function Pillars() {
  return (
    <Section id="pilares" className="bg-black">
      <RadialGlow className="top-1/3 -right-[30rem] -z-10 size-[60rem]" />

      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Os 3 pilares</Badge>

          <h2 className="mt-6 text-3xl leading-[1.25] font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem]">
            Emagrecer de verdade é cuidar de{' '}
            <GlowText animated={false} className="font-display mt-1 text-[1.3em] leading-none font-normal">
              <ScriptText>você inteira.</ScriptText>
            </GlowText>
          </h2>
        </div>

        <ol className="mt-16 grid w-full gap-6 md:grid-cols-3 lg:mt-20">
          {challengePillars.map((pillar) => (
            <li
              key={pillar.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-8 transition-colors duration-300 hover:border-pink/30 sm:p-10"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-pink/10 bg-pink/10 text-pink">
                <LineIcon name={pillar.icon} className="size-5 opacity-90" />
              </span>

              <h3 className="mt-7 text-lg font-semibold tracking-[0.12em] text-white uppercase sm:text-xl sm:tracking-[0.2em]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-[1.6] text-neutral-400">{pillar.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 max-w-4xl text-center text-base leading-[1.6] text-neutral-300 lg:text-lg">
          Essa é a parte mais difícil e também a que faz tantas mulheres viverem em um{' '}
          <strong className="font-semibold text-white">
            ciclo de tentativas, culpa e frustração com o próprio corpo.
          </strong>{' '}
          Mas dessa vez pode ser diferente. Durante todo o desafio, você terá direcionamento para
          entender o que realmente está por trás das suas dificuldades e{' '}
          <span className="font-semibold text-pink">
            construir uma relação mais leve e sustentável com a comida e com o seu corpo.
          </span>
        </p>
      </Container>
    </Section>
  )
}
