import pattern from '../../assets/images/pattern.png'
import { Container, OverlayBackground, ScriptText, Section } from '../ui'

export function Quote() {
  return (
    <Section id="frase" className="bg-[#fff7fa] py-28 lg:py-40">
      <OverlayBackground
        src={pattern}
        className="inset-0 -z-10 opacity-40"
        overlayClassName="bg-[#fff7fa]/70"
      />

      <Container className="flex flex-col items-center py-8 text-center lg:py-16">
        <blockquote className="max-w-3xl">
          <p className="text-3xl leading-[1.1] font-medium tracking-[-0.02em] text-[#1a1a1a] sm:text-4xl lg:text-5xl">
            Seu corpo não está quebrado…
          </p>
          <p className="font-display mt-[-0.5rem] text-4xl leading-[1.3] font-normal tracking-[-0.02em] text-pink sm:text-5xl lg:text-6xl">
            <ScriptText>só precisa acordar!</ScriptText>
          </p>
        </blockquote>

        <p className="mt-5 max-w-[46rem] text-base leading-[1.4] text-graphite lg:text-lg">
          Você vai aprender{' '}
          <strong className="font-semibold text-[#1a1a1a]">como o seu corpo funciona</strong> e o que ele
          precisa para <strong className="font-semibold text-[#1a1a1a]">emagrecer</strong>. Porque ninguém
          aguenta viver de salada por muito tempo, e quando a fome aperta, é fácil cair na compulsão
          alimentar e viver no <strong className="font-semibold text-[#1a1a1a]">efeito sanfona</strong>.
        </p>
      </Container>
    </Section>
  )
}
