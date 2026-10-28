import biscoitoDivo from '../assets/images/biscoito-divo.jpg'
import boloAmendoas from '../assets/images/bolo-amendoas.jpg'
import boloAmendoim from '../assets/images/bolo-amendoim.jpg'
import boloChocolate from '../assets/images/bolo-chocolate.jpg'
import boloMesclado from '../assets/images/bolo-mesclado.jpg'
import cremeAvela from '../assets/images/creme-avela.jpg'
import paoPassas from '../assets/images/pao-passas.jpg'
import paoRustico from '../assets/images/pao-rustico.jpg'
import paoSecar from '../assets/images/pao-secar.jpg'
import potinhoAmendoim from '../assets/images/potinho-amendoim.jpg'
import potinhoBrigadeiroBranco from '../assets/images/potinho-brigadeiro-branco.jpg'
import potinhoChocolate from '../assets/images/potinho-chocolate.jpg'

export const deliveryWhatsappNumber = '5521975719527'
export const deliveryInstagramHref = 'https://www.instagram.com/nutrideia/'
export const deliveryInstagramHandle = '@nutrideia'

export const deliveryWhatsappHref =
  'https://wa.me/5521975719527?text=Ol%C3%A1%2C%20vi%20o%20cat%C3%A1logo%20do%20delivery%20Nutrideia%20e%20quero%20fazer%20um%20pedido.'

export type CartItem = {
  name: string
  quantity: number
}

export function deliveryCartWhatsappHref(items: CartItem[]) {
  if (items.length === 0) return deliveryWhatsappHref

  const lines = items.map((item) => `• ${item.quantity}x ${item.name}`)
  const text = [
    'Olá! Vi o catálogo do delivery Nutrideia e quero fazer um pedido:',
    '',
    ...lines,
    '',
    'Pode me passar a disponibilidade e o valor, por favor?',
  ].join('\n')

  return `https://wa.me/${deliveryWhatsappNumber}?text=${encodeURIComponent(text)}`
}

export function formatGrams(value: number) {
  return `${value.toLocaleString('pt-BR', {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
    maximumFractionDigits: 1,
  })} g`
}

export const cakeMacrosNote =
  'Carboidratos disponíveis, sem fibras e eritritol. Valores estimados transcritos das fichas de preparação. A manteiga para untar não está quantificada nos macros.'

export const deliveryCategories = ['Pães', 'Bolos', 'Doces'] as const

export type DeliveryCategory = (typeof deliveryCategories)[number]

export type DeliveryProduct = {
  name: string
  category: DeliveryCategory
  description: string
  serving: string
  ingredients?: string[]
  image: string
  calories?: number
  protein?: number
  carbs?: number
  fat?: number
  carbsNote?: boolean
}

export function hasNutrition(
  product: DeliveryProduct,
): product is DeliveryProduct & {
  calories: number
  protein: number
  carbs: number
  fat: number
} {
  return (
    product.calories !== undefined &&
    product.protein !== undefined &&
    product.carbs !== undefined &&
    product.fat !== undefined
  )
}

export const deliveryProducts: DeliveryProduct[] = [
  {
    name: 'Pão pra secar',
    category: 'Pães',
    description: 'O pão do delivery: fofinho, proteico e feito pra caber na dieta sem abrir mão do pão.',
    serving: 'Porção de 50 g (1 fatia)',
    image: paoSecar,
    calories: 118,
    protein: 12,
    carbs: 4,
    fat: 5,
  },
  {
    name: 'Pão de gergelim',
    category: 'Pães',
    description: 'Casquinha dourada com gergelim. Versão low carb pra sanduíche ou café da manhã.',
    serving: 'Porção de 50 g (1 unidade)',
    image: paoRustico,
    calories: 138,
    protein: 11,
    carbs: 5,
    fat: 7,
  },
  {
    name: 'Pão de passas com canela',
    category: 'Pães',
    description: 'Cheirinho de padaria, passas e canela. Doce na medida, com proteína de verdade.',
    serving: 'Porção de 60 g (1 fatia)',
    image: paoPassas,
    calories: 152,
    protein: 11,
    carbs: 8,
    fat: 6,
  },
  {
    name: 'Bolo inglês de amêndoas',
    category: 'Bolos',
    description: 'Bolo inglês proteico com farinha de amêndoas. Fatia que entra na cota sem abrir mão do bolo.',
    serving: '1 fatia equivalente a 1/7 do bolo (70,3 g)',
    image: boloAmendoas,
    ingredients: [
      'farinha de amêndoas',
      'ovos',
      'eritritol',
      'manteiga',
      'whey protein sem sabor',
      'glicina',
      'fermento químico em pó',
      'vinagre de caldo de cana',
    ],
    calories: 220,
    protein: 12,
    carbs: 5.2,
    fat: 16.1,
    carbsNote: true,
  },
  {
    name: 'Bolo inglês mesclado',
    category: 'Bolos',
    description: 'Baunilha e chocolate no mesmo pedaço, em versão low carb e proteica.',
    serving: '1 fatia equivalente a 1/7 do bolo',
    image: boloMesclado,
    ingredients: [
      'farinha de amêndoas',
      'ovos',
      'eritritol',
      'manteiga',
      'whey protein sem sabor',
      'cacau em pó 100%',
      'glicina',
      'fermento químico em pó',
      'vinagre de caldo de cana',
    ],
    calories: 229,
    protein: 12,
    carbs: 5.7,
    fat: 16.5,
    carbsNote: true,
  },
  {
    name: 'Bolo inglês de chocolate',
    category: 'Bolos',
    description: 'O bolo de chocolate do delivery, com cacau 100% e whey. Chocolate na rotina, sem culpa.',
    serving: '1 fatia equivalente a 1/7 do bolo',
    image: boloChocolate,
    ingredients: [
      'farinha de amêndoas',
      'ovos',
      'eritritol',
      'manteiga',
      'whey protein sem sabor',
      'cacau em pó 100%',
      'glicina',
      'fermento químico em pó',
      'vinagre de caldo de cana',
    ],
    calories: 239,
    protein: 12,
    carbs: 6.3,
    fat: 16.9,
    carbsNote: true,
  },
  {
    name: 'Bolo inglês de paçoca',
    category: 'Bolos',
    description: 'Farinha de amendoim torrado com pele. Sabor de paçoca em bolo inglês proteico.',
    serving: '1 fatia equivalente a 1/7 do bolo',
    image: boloAmendoim,
    ingredients: [
      'farinha de amendoim torrado com pele',
      'ovos',
      'eritritol',
      'manteiga',
      'whey protein sem sabor',
      'glicina',
      'fermento químico em pó',
      'vinagre de caldo de cana',
    ],
    calories: 218,
    protein: 12,
    carbs: 5.1,
    fat: 16.2,
    carbsNote: true,
  },
  {
    name: 'Biscoito Divo',
    category: 'Doces',
    description: 'Crocante, leve e fácil de levar. O biscoito do delivery pra beliscar com consciência.',
    serving: '1 pote',
    image: biscoitoDivo,
    protein: 14,
  },
  {
    name: 'Creme de avelã',
    category: 'Doces',
    description: 'Cremoso pra passar no pão, na fruta ou comer de colher. Sem açúcar, com proteína.',
    serving: '1 pote',
    image: cremeAvela,
    protein: 25,
  },
  {
    name: 'Potinho de chocolate',
    category: 'Doces',
    description: 'Bolo de chocolate em camadas no potinho, com creme. A sobremesa do delivery pra comer de colher.',
    serving: '1 potinho',
    image: potinhoChocolate,
  },
  {
    name: 'Potinho de amendoim',
    category: 'Doces',
    description: 'Camadas de bolo e creme de amendoim, com crocante por cima.',
    serving: '1 potinho',
    image: potinhoAmendoim,
  },
  {
    name: 'Potinho de brigadeiro branco',
    category: 'Doces',
    description: 'Bolo fofinho com creme de brigadeiro branco no potinho.',
    serving: '1 potinho',
    image: potinhoBrigadeiroBranco,
  },
]
