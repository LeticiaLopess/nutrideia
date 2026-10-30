import { methodPillars } from '../../data/method'
import { Badge, CheckIcon, Container, GlowText, ScriptText, Section } from '../ui'

export function Method() {
  return (
    <Section id="metodo" className="bg-[#fff7fa]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Método Nutrideia</Badge>

          <h2 className="mt-6 max-w-[40rem] text-3xl leading-[1.25] font-medium text-[#1a1a1a] sm:text-4xl lg:text-[2.75rem]">
            Nós não contamos calorias. Aqui, o foco é bater a{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:0_0_18px_rgb(var(--glow-rgb)/0.25)]!"
            >
              <ScriptText>cota de proteína.</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-8 max-w-[38rem] text-base leading-[1.6] text-graphite lg:text-lg">
            Com a proteína adequada e mais saciedade, você come com satisfação e passa a comer menos
            de forma natural, sem passar fome e sem viver de restrição.
          </p>
        </div>

        <ul className="mt-16 grid w-full gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {methodPillars.map((pillar) => (
            <li
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-pink/15 bg-white p-7 shadow-[0_14px_40px_rgb(230_0_126/0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-pink/40 hover:shadow-[0_18px_44px_rgb(230_0_126/0.12)]"
            >
              <span
                aria-hidden="true"
                className="flex size-8 items-center justify-center rounded-lg bg-pink/10 text-pink"
              >
                <CheckIcon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#1a1a1a]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-[1.6] text-graphite">{pillar.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-center text-xl text-[#1a1a1a] sm:text-2xl">
          Emagrecer sem comer igual passarinho:{' '}
          <span className="font-semibold text-pink">Isso é Método Nutrideia!</span>
        </p>
      </Container>
    </Section>
  )
}
