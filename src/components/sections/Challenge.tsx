import { challengeBenefits } from '../../data/challenge'
import { Badge, Container, GlowText, LineIcon, Section } from '../ui'

export function Challenge() {
  return (
    <Section id="desafio" className="bg-[#eef0f2]">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <Badge>Para quem é</Badge>

          <h2 className="mt-6 text-3xl leading-[1] font-medium text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
            Ideal para mulheres que já tentaram de tudo e{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:0_0_18px_rgb(var(--glow-rgb)/0.25)]!"
            >
              desejam:
            </GlowText>
          </h2>
        </div>

        <ul className="mt-16 grid w-full gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {challengeBenefits.map((benefit) => (
            <li
              key={benefit.text}
              className="group flex items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgb(0_0_0/0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-pink/30 hover:shadow-[0_14px_36px_rgb(var(--glow-rgb)/0.12)]"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-pink/10 text-pink transition-colors duration-300 group-hover:bg-pink group-hover:text-white">
                <LineIcon name={benefit.icon} className="size-7" />
              </span>
              <span className="text-[15px] leading-[1.45] font-medium text-neutral-700">{benefit.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
