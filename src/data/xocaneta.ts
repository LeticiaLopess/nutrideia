import { offers } from './offers'

const choque = offers.find((offer) => offer.name === 'Choque no Metabolismo')!

export const xocanetaOffer = {
  productName: choque.name,
  campaign: 'Xô Caneta',
  originalPrice: choque.price,
  salePrice: 297,
  installments: 12,
  checkoutHref: choque.checkoutHref,
  endsAt: '2026-11-22T23:59:59-03:00',
  benefits: [
    '21 dias de Choque no Metabolismo, guiados por mim',
    'O Método Nutrideia para emagrecer de forma natural sem canetas e sem fome',
    'Reprogramação da mente magra, passo a passo',
    'Receitas exclusivas para comer o que você ama',
    'Bônus: ebook de receitas natalinas',
    'Grupo de mulheres na mesma jornada',
    'Como montar sozinha o seu cardápio pra vida',
    '21 dias para entrar em cetose, sair da compulsão e virar uma máquina de queimar gordura',
  ],
} as const

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function formatInstallment(price: number, installments: number) {
  return formatBRL(price / installments)
}

export const xocanetaFormatted = {
  original: formatBRL(xocanetaOffer.originalPrice),
  sale: formatBRL(xocanetaOffer.salePrice),
  installment: formatInstallment(xocanetaOffer.salePrice, xocanetaOffer.installments),
}

export const xocanetaMarquee = [
  'BLACK FRIDAY',
  'XÔ CANETA',
  'CHOQUE NO METABOLISMO',
  'CONDIÇÃO ESPECIAL',
  '21 DIAS',
  'SEM CANETA',
  'COMIDA DE VERDADE',
]

export const xocanetaPains = [
  'A caneta mente para o seu cérebro dizendo que você já comeu',
  'O corpo continua pedindo nutrientes e a caneta continua mentindo pro seu cérebro',
  'Você nunca bate sua cota de proteína diária e isso é um PERIGO',
  'Emagrece, mas definha e desnutre: até perde gordura mas ao custo de muita massa magra',
  'Quando para de aplicar, a compulsão volta. Ela só estava calada, não resolvida',
]

export const xocanetaComparison = {
  pen: {
    title: 'A caneta',
    items: [
      'Camufla o resultado. Para de aplicar, o peso volta',
      'Uns R$ 1.500 todo mês. No ano, uns R$ 18 mil',
      'Cala a fome. Não ensina a comer',
      'Imita o hormônio. O metabolismo não muda',
      'Não cria hábito. Quando para, a compulsão volta',
      'Perde massa magra: isso acaba com seu metabolismo',
    ],
  },
  shock: {
    title: 'O choque',
    items: [
      'O resultado fica porque você aprendeu a comer',
      'Um investimento. Não R$ 1.500 todo mês',
      'Ativa a saciedade que o corpo já produz',
      'Reprograma o metabolismo de forma natural',
      'Cria hábito. A compulsão não volta no lugar',
      'Emagrece de verdade. Sem definhar',
    ],
  },
}

export const xocanetaCosts = [
  { label: '1 mês de caneta', value: '~ R$ 1.500', note: 'E no mês seguinte, de novo.' },
  { label: '1 ano de caneta', value: '~ R$ 18 mil', note: 'Sem aprender a se alimentar.' },
  { label: 'Choque na Black Friday', value: xocanetaFormatted.sale, note: '21 dias. Método. Pra vida.' },
]

export const xocanetaWeeks = [
  {
    title: 'Virar a chave',
    text: 'Entender por que as dietas falharam. Aí a gente começa a reprogramar a mente, que é o que a caneta nunca fez.',
  },
  {
    title: 'Proteína no centro',
    text: 'Montar refeições que saciam de verdade. Fome controlada sem injeções.',
  },
  {
    title: 'Prazer sem culpa',
    text: 'Receitas exclusivas para comer o que você ama e continuar emagrecendo.',
  },
  {
    title: 'Autonomia',
    text: 'Montar sozinha o seu cardápio e manter o resultado quando a moda da caneta passar.',
  },
]

