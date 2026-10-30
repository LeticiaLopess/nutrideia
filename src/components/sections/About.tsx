import andreiaAbout from '../../assets/images/andreia-about.jpg'
import { whatsappHref } from '../../data/navigation'
import {
  Badge,
  Button,
  Container,
  FramedImage,
  GlowText,
  ScriptText,
  Section,
  SelectionHighlight,
} from '../ui'

export function About() {
  return (
    <Section id="sobre" className="bg-[#fff7fa]">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge>Minha história</Badge>

          <h2 className="mt-6 max-w-[33rem] text-3xl leading-[1.25] font-medium text-[#1a1a1a] sm:text-4xl lg:text-[2.75rem]">
            Quem é{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:0_0_18px_rgb(var(--glow-rgb)/0.25)]!"
            >
              <ScriptText>Andreia Oliveira?</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-6 text-sm font-medium tracking-widest text-graphite uppercase">
            Nutricionista e criadora do Método Nutrideia
          </p>

          <div className="mt-10 flex max-w-[34rem] flex-col gap-5 text-base leading-[1.6] text-graphite">
            <p className="text-lg text-[#1a1a1a]">
              Eu queria <SelectionHighlight>emagrecer</SelectionHighlight> mas sem abrir mão do bolo
              de chocolate.
            </p>

            <p>
              Sou formada em Nutrição, mas conheço esse caminho por dentro:{' '}
              <strong className="font-semibold text-[#1a1a1a]">
                já fui obesa, diabética e hipertensa.
              </strong>{' '}
              Por muito tempo, convivi com a autoestima lá embaixo e com dietas que eu não conseguia
              sustentar.
            </p>

            <p>
              Eu queria cuidar da saúde e{' '}
              <strong className="font-semibold text-[#1a1a1a]">continuar gostando de comer.</strong> Nesse
              caminho, vivi a reversão da diabetes e criei o{' '}
              <span className="font-semibold text-pink">Método Nutrideia</span>, que desde 2017 já
              ajudou milhares de pessoas a emagrecer sem abrir mão do prazer de comer.
            </p>

            <p className="text-base font-semibold text-[#1a1a1a]">
              Eu sei como é estar do outro lado. Se eu consegui, você também consegue, e eu vou
              caminhar com você em cada passo.
            </p>
          </div>

          <Button href={whatsappHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            <span className="sm:hidden">Quero emagrecer</span>
            <span className="max-sm:hidden">Quero começar minha transformação</span>
          </Button>
        </div>

        <FramedImage
          src={andreiaAbout}
          alt="Andreia Oliveira sorrindo, com a mão no queixo"
          wrapperClassName="mx-auto w-full max-w-md lg:mr-8 lg:ml-auto"
          className="aspect-[4/5] object-top"
        />
      </Container>
    </Section>
  )
}
