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
    'O Método Nutrideia para emagrecer sem caneta e sem fome',
    'Reprogramação da mente magra, passo a passo',
    'Receitas exclusivas para comer o que você ama',
    'Grupo de mulheres na mesma jornada',
    'Como montar sozinha o seu cardápio pra vida',
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
  'Já pensou na caneta porque “nada mais funciona” no seu corpo',
  'Não quer passar a vida pagando por um atalho que não ensina a comer',
  'Quer emagrecer de verdade, e que o resultado fique',
  'Cansou dessas dietas que mandam comer de tudo um pouco e não adiantam',
  'Não quer arriscar a saúde por um atalho',
]

export const xocanetaComparison = {
  pen: {
    title: 'A caneta',
    items: [
      'Aluga o resultado. Para de aplicar, o peso volta',
      'R$ 800 a R$ 2.000 todo mês, fácil',
      'Não ensina a comer. Só segura a fome',
      'Não reprograma o metabolismo',
      'Não constrói hábito pra vida',
      'Corre o risco de prejudicar a saúde',
    ],
  },
  shock: {
    title: 'O choque',
    items: [
      'Reprograma o metabolismo com comida de verdade',
      'Condição Black Friday: um único investimento',
      'Proteína no centro, saciedade e prazer no prato',
      'Mente magra: você para de se sabotar',
      '21 dias com grupo, método e autonomia',
      'Desde 2017, +10 mil mulheres, antes da moda da caneta',
    ],
  },
}

export const xocanetaCosts = [
  { label: '1 mês de caneta', value: '~ R$ 1.200', note: 'E no mês seguinte, de novo.' },
  { label: '1 ano de caneta', value: '~ R$ 14 mil', note: 'Sem aprender a se alimentar.' },
  { label: 'Choque na Black Friday', value: xocanetaFormatted.sale, note: '21 dias. Método. Pra vida.' },
]

export const xocanetaWeeks = [
  {
    title: 'Virar a chave',
    text: 'Entender por que as dietas falharam. Aí a gente começa a reprogramar a mente, que é o que a caneta nunca fez.',
  },
  {
    title: 'Proteína no centro',
    text: 'Montar refeições que saciam de verdade. Fome controlada sem aplicador.',
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

export const xocanetaFaq = [
  {
    q: 'Eu preciso jogar a caneta fora?',
    a: 'Sim. A caneta não é o caminho. Se o emagrecimento depende de uma aplicação, o resultado não é seu: ele só dura enquanto você aplica. O Choque existe pra você aprender a comer e o metabolismo trabalhar sozinho, com comida de verdade.',
  },
  {
    q: 'Funciona sem a caneta?',
    a: 'Funciona. E é assim que tem que ser. O Choque no Metabolismo existe desde 2017, anos antes dessa febre. Mais de 10 mil mulheres já passaram pelo método comendo comida de verdade, sem passar fome.',
  },
  {
    q: 'E se eu já usei a caneta e tenho medo de voltar?',
    a: 'Aí esse programa é ainda mais pra você. A caneta não ensina a comer. Aqui você aprende o que fazer no prato para o resultado ficar com você, de verdade.',
  },
  {
    q: 'É mais uma dieta restritiva?',
    a: 'Não. Proteína no centro, refeições que saciam e versões prazerosas do que você ama. Emagrecer sem viver igual passarinho.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Garantia de 7 dias. Se não for pra você, peça o reembolso e receba 100% do valor de volta, sem perguntas.',
  },
]
