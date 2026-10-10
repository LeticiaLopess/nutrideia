import pattern from '../../assets/images/pattern.png'
import { Container, OverlayBackground, ScriptText, Section } from '../ui'

export function Quote() {
  return (
    <Section id="frase" className="py-28 lg:py-40">
      <OverlayBackground src={pattern} className="inset-0 -z-10" />

      <Container className="flex flex-col items-center text-center py-8 lg:py-16">
        <blockquote className="max-w-3xl [text-shadow:0_2px_18px_rgb(0_0_0/0.22)]">
          <p className="text-3xl leading-[1.1] font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
            Seu corpo não está quebrado…
          </p>
          <p className="font-display text-4xl leading-[1.3] font-normal text-white sm:text-5xl lg:text-6xl tracking-[-0.02em] mt-[-0.5rem]">
            <ScriptText>só precisa acordar!</ScriptText>
          </p>
        </blockquote>

        <p className="mt-5 max-w-[46rem] text-base leading-[1.4] text-white/90 [text-shadow:0_2px_12px_rgb(0_0_0/0.25)] lg:text-lg">
          Você vai aprender <strong className="font-semibold text-white">como o seu corpo funciona</strong>{' '}
          e o que ele precisa para <strong className="font-semibold text-white">emagrecer</strong>. Porque
          ninguém aguenta viver de salada por muito tempo, e quando a fome aperta, é fácil
          cair na compulsão alimentar e viver no{' '}
          <strong className="font-semibold text-white">efeito sanfona</strong>.
        </p>
      </Container>
    </Section>
  )
}
