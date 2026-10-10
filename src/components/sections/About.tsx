import andreiaAbout from '../../assets/images/andreia-about.jpg'
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
    <Section id="sobre" className="bg-[#101010]">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <Badge>Minha história</Badge>

          <h2 className="mt-6 text-3xl leading-[1.25] font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem] max-w-[33rem]">
            Quem é{' '}
            <GlowText animated={false} className="font-display text-[1.3em] leading-none font-normal mt-1">
              <ScriptText>Andreia Oliveira?</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-6 text-sm font-medium tracking-widest text-neutral-400 uppercase">
            Nutricionista e criadora do Método Nutrideia
          </p>

          <div className="mt-10 flex max-w-[34rem] flex-col gap-5 text-base leading-[1.6] text-neutral-300">
            <p className="text-lg text-neutral-100">
              Eu queria <SelectionHighlight>emagrecer</SelectionHighlight> mas sem abrir mão do bolo
              de chocolate.
            </p>

            <p>
              Sou formada em Nutrição, mas conheço esse caminho por dentro:{' '}
              <strong className="font-semibold text-white">
                já fui obesa, diabética e hipertensa.
              </strong>{' '}
              Por muito tempo, convivi com a autoestima lá embaixo e com dietas que eu não conseguia
              sustentar.
            </p>

            <p>
              Eu queria cuidar da saúde e{' '}
              <strong className="font-semibold text-white">continuar gostando de comer.</strong> Nesse
              caminho, vivi a reversão da diabetes e criei o{' '}
              <span className="font-semibold text-pink">Método Nutrideia</span>, que desde 2017 já
              ajudou milhares de pessoas a emagrecer sem abrir mão do prazer de comer.
            </p>

            <p className="text-base font-semibold text-white">
              Eu sei como é estar do outro lado. Se eu consegui, você também consegue, e eu vou
              caminhar com você em cada passo.
            </p>
          </div>

          <Button href="#contato" className="mt-10">
            Quero começar minha transformação
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
