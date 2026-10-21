import personaSectionLg from '../../assets/images/persona-section-lg.png'
import personaSection from '../../assets/images/persona-section.png'
import { whatsappHref } from '../../data/navigation'
import { personaPains } from '../../data/persona'
import { Badge, Button, Container, GlowText, ScriptText, Section } from '../ui'

export function Persona() {
  return (
    <Section id="para-voce" className="bg-[#eef0f2]">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <picture className="mx-auto w-full max-w-xl">
          <source media="(min-width: 1024px)" srcSet={personaSectionLg} />
          <img
            src={personaSection}
            alt="Mulher desanimada olhando para um prato de salada, com uma fita métrica no pescoço"
            loading="lazy"
            className="h-auto w-full"
          />
        </picture>

        <div className="flex flex-col items-start">
          <Badge>Soa familiar?</Badge>

          <h2 className="mt-6 text-3xl leading-[1.1] font-medium text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
            Cansada de dieta restritiva e comida{' '}
            <GlowText
              animated={false}
              className="font-display mt-1 text-[1.3em] leading-none font-normal [text-shadow:0_0_18px_rgb(var(--glow-rgb)/0.25)]!"
            >
              <ScriptText>sem graça?</ScriptText>
            </GlowText>
          </h2>

          <p className="mt-8 text-base leading-[1.6] text-neutral-600 lg:text-lg">
            Talvez você já tenha tentado de tudo: cortar carboidrato, contar calorias, seguir a dieta
            da moda.{' '}
            <strong className="font-semibold text-neutral-900">
              E, no fim, o resultado não veio ou não durou.
            </strong>
          </p>

          <p className="mt-6 text-base font-medium text-neutral-900">Alguma destas frases parece com você?</p>

          <ul className="mt-5 flex flex-col gap-2">
            {personaPains.map((pain) => (
              <li key={pain.title} className="flex items-start gap-3 text-[15px] leading-[1.5] text-neutral-600">
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
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <span>
                  <strong className="font-semibold text-pink">{pain.title}:</strong> “{pain.quote}”
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-[1.6] text-neutral-600 lg:text-lg">
            Se você se reconheceu em alguma dessas frases, o{' '}
            <strong className="font-semibold text-neutral-900">Método Nutrideia</strong> foi feito
            para você.
          </p>

          <Button href={whatsappHref} size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            <span className="sm:hidden">Quero emagrecer</span>
            <span className="max-sm:hidden">Quero acordar meu metabolismo</span>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
