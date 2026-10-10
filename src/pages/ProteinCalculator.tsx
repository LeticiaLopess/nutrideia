import { useState } from 'react'
import { Container, GlowText, RadialGlow, ScriptText } from '../components/ui'

const PROTEIN_PER_KG = 2

const formatNumber = (value: number) =>
  value.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

function parseWeight(value: string) {
  const weight = Number.parseFloat(value.replace(',', '.'))
  return Number.isFinite(weight) && weight > 0 && weight <= 400 ? weight : null
}

export function ProteinCalculator() {
  const [weightInput, setWeightInput] = useState('')
  const weight = parseWeight(weightInput)
  const protein = weight === null ? null : weight * PROTEIN_PER_KG

  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden bg-black">
      <RadialGlow className="-top-[30rem] left-1/2 -z-10 size-[60rem] -translate-x-1/2" />

      <Container className="flex flex-1 flex-col items-center justify-center py-12">
        <div className="flex max-w-2xl flex-col items-center text-center">

          <h1 className="text-3xl leading-[1.25] font-medium text-neutral-100 sm:text-4xl lg:text-[2.75rem]">
            Descubra a sua{' '}
            <GlowText animated={false} className="font-display mt-1 text-[1.3em] leading-none font-normal">
              <ScriptText>cota de proteína.</ScriptText>
            </GlowText>
          </h1>

          <p className="mt-6 max-w-[28rem] text-base leading-[1.4] text-neutral-300 lg:text-lg">
            Digite o seu peso e veja quantos gramas de proteína você precisa bater por dia.
          </p>
        </div>

        <form
          className="mt-12 w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="weight" className="text-sm font-medium tracking-widest text-neutral-300 uppercase">
            Seu peso
          </label>

          <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-black/40 transition-colors focus-within:border-pink">
            <input
              id="weight"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              placeholder="Ex.: 70"
              value={weightInput}
              onChange={(event) => setWeightInput(event.target.value.replace(/[^\d.,]/g, ''))}
              className="w-full bg-transparent px-5 py-3 text-2xl font-semibold text-white placeholder:text-neutral-600 focus:outline-none"
            />
            <span className="pr-5 text-lg font-medium text-neutral-400">kg</span>
          </div>

          <div className="mt-8 text-center" aria-live="polite">
            <p className="text-sm font-medium tracking-widest text-neutral-300 uppercase">
              Sua cota diária
            </p>

            <p className="mt-3 text-6xl leading-none font-semibold text-pink [text-shadow:0_0_24px_rgb(230_0_126/0.5)]">
              {protein === null ? '—' : formatNumber(protein)}
              <span className="ml-2 text-2xl text-neutral-300 [text-shadow:none]">g</span>
            </p>

            <p className="mt-4 text-sm text-neutral-400">de proteína por dia</p>
          </div>
        </form>
      </Container>
    </main>
  )
}
