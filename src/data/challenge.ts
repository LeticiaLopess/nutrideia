import type { LineIconName } from '../components/ui/LineIcon'

export type ChallengePillar = {
  title: string
  description: string
  icon: LineIconName
}

export type ChallengeBenefit = {
  text: string
  icon: LineIconName
}

export const challengePillars: ChallengePillar[] = [
  {
    title: 'Emocional',
    description:
      'Fome de verdade ou vontade de preencher um vazio? Você aprende a reconhecer o que está por trás de cada beliscada.',
    icon: 'heart',
  },
  {
    title: 'Comportamental',
    description:
      'Rotina, gatilhos e hábitos automáticos. Você troca os padrões que te sabotam por escolhas que se sustentam.',
    icon: 'repeat',
  },
  {
    title: 'Físico',
    description:
      'Proteína na medida certa, saciedade e um metabolismo que volta a trabalhar a seu favor, sem passar fome.',
    icon: 'activity',
  },
]

export const challengeBenefits: ChallengeBenefit[] = [
  { text: 'Eliminar peso sem deixar de comer o que gostam', icon: 'cake' },
  { text: 'Acelerar o metabolismo e destravar o emagrecimento', icon: 'gauge' },
  { text: 'Melhorar a relação com o próprio corpo e voltar a se reconhecer nele', icon: 'smile' },
  { text: 'Deixar de sofrer com o efeito sanfona de uma vez por todas', icon: 'repeat' },
  { text: 'Aprender uma nova forma de lidar com a comida, com consciência', icon: 'apple' },
  { text: 'Ter mais energia e disposição no dia a dia', icon: 'zap' },
  { text: 'Reverter diabetes, hipertensão, gordura no fígado ou SOP', icon: 'stethoscope' },
  { text: 'Acabar com a gordurinha abdominal que marca qualquer roupa', icon: 'ruler' },
  { text: 'Parar de gastar dinheiro com métodos que não funcionam', icon: 'wallet' },
]

export const challengeStartsAt = '2026-10-14T20:00:00-03:00'

export const vipGroupHref = '#'
