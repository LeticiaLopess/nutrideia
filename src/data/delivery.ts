import biscoitoDivo from '../assets/images/biscoito-divo.jpg'
import boloAmendoas from '../assets/images/bolo-amendoas.jpg'
import boloAmendoim from '../assets/images/bolo-amendoim.jpg'
import boloChocolate from '../assets/images/bolo-chocolate.jpg'
import boloMesclado from '../assets/images/bolo-mesclado.jpg'
import cremeAvela from '../assets/images/creme-avela.jpg'
import paoPassas from '../assets/images/pao-passas.png'
import paoRustico from '../assets/images/pao-rustico.png'
import paoSecar from '../assets/images/pao-secar.png'
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

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function cartLineTotal(item: CartItem) {
  const product = deliveryProducts.find((entry) => entry.name === item.name)
  return (product?.price ?? 0) * item.quantity
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + cartLineTotal(item), 0)
}

export function deliveryCartWhatsappHref(items: CartItem[]) {
  if (items.length === 0) return deliveryWhatsappHref

  const lines = items.map((item) => {
    const product = deliveryProducts.find((entry) => entry.name === item.name)
    const line = cartLineTotal(item)
    const unit = product ? ` ${formatBRL(product.price)}` : ''
    return `• ${item.quantity}x ${item.name}${unit} = ${formatBRL(line)}`
  })
  const text = [
    'Olá! Vi o catálogo do delivery Nutrideia e quero fazer um pedido:',
    '',
    ...lines,
    '',
    `Total dos produtos: ${formatBRL(cartTotal(items))}`,
    '',
    'Pode me passar o valor da entrega no meu bairro, por favor?',
  ].join('\n')

  return `https://wa.me/${deliveryWhatsappNumber}?text=${encodeURIComponent(text)}`
}

export function formatGrams(value: number) {
  return `${value.toLocaleString('pt-BR', {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
    maximumFractionDigits: 1,
  })} g`
}

export function formatIngredients(ingredients: string[]) {
  if (ingredients.length === 0) return ''
  if (ingredients.length === 1) return ingredients[0]
  return `${ingredients.slice(0, -1).join(', ')} e ${ingredients[ingredients.length - 1]}`
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
  price: number
  image: string
  ingredients: string[]
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
    name: 'Pão pra secar tradicional',
    category: 'Pães',
    description: 'O pão do delivery: fofinho, proteico e feito pra caber na dieta sem abrir mão do pão.',
    serving: '14 fatias | 10 g de proteína por fatia',
    price: 80,
    image: paoSecar,
    ingredients: [
      'albumina',
      'ovos',
      'glicina',
      'sal',
      'fermento biológico seco',
      'açúcar',
    ],
    calories: 118,
    protein: 10,
    carbs: 4,
    fat: 5,
  },
  {
    name: 'Pão de passas com canela',
    category: 'Pães',
    description: 'Cheirinho de padaria, passas e canela. Doce na medida, com proteína de verdade.',
    serving: '14 fatias | 10 g de proteína por fatia',
    price: 85,
    image: paoPassas,
    ingredients: [
      'ovos',
      'whey protein sem sabor',
      'passas',
      'canela',
      'eritritol',
      'manteiga',
      'glicina',
      'fermento químico em pó',
      'vinagre de caldo de cana',
    ],
    calories: 152,
    protein: 10,
    carbs: 8,
    fat: 6,
  },
  {
    name: 'Pão rústico Nutrideia',
    category: 'Pães',
    description: 'Estilo pão integral, só que sem farinha! Casquinha dourada pra sanduíche ou café da manhã.',
    serving: '14 fatias | 15 g de proteína por fatia',
    price: 105,
    image: paoRustico,
    ingredients: [
      'albumina',
      'ovos',
      'glicina',
      'queijo parmesão ralado',
      'psyllium',
      'sal',
      'fermento biológico seco',
      'açúcar',
    ],
    calories: 138,
    protein: 15,
    carbs: 5,
    fat: 7,
  },
  {
    name: 'Bolo inglês de amêndoas',
    category: 'Bolos',
    description: 'Bolo inglês proteico com farinha de amêndoas. Fatia que entra na cota sem abrir mão do bolo.',
    serving: '7 fatias | 12 g de proteína por fatia',
    price: 75,
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
    serving: '7 fatias | 12 g de proteína por fatia',
    price: 75,
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
    serving: '7 fatias | 12 g de proteína por fatia',
    price: 75,
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
    serving: '7 fatias | 12 g de proteína por fatia',
    price: 75,
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
    serving: '50 g | 14 g de proteína',
    price: 15,
    image: biscoitoDivo,
    ingredients: [
      'gergelim branco cru integral',
      'castanha-do-Pará',
      'queijo parmesão ralado',
      'ovo',
      'sal',
    ],
    protein: 14,
  },
  {
    name: 'Creme de avelã proteico',
    category: 'Doces',
    description: 'Cremoso pra passar no pão, na fruta ou comer de colher. Sem açúcar, com proteína.',
    serving: '200 g | 25 g de proteína',
    price: 45,
    image: cremeAvela,
    ingredients: [
      'creme de leite',
      'avelã torrada',
      'manteiga',
      'eritritol',
      'cacau em pó 100%',
      'whey protein sem sabor',
      'glicina',
    ],
    protein: 25,
  },
  {
    name: 'Potinho da felicidade de chocolate',
    category: 'Doces',
    description: 'Um bolo de pote super molhadinho, pra comer de colher.',
    serving: '1 potinho | 25 g de proteína',
    price: 25,
    image: potinhoChocolate,
    ingredients: [
      'farinha de amêndoas',
      'ovos',
      'eritritol',
      'manteiga',
      'whey protein sem sabor',
      'cacau em pó 100%',
      'glicina',
      'fermento químico em pó',
    ],
    protein: 25,
  },
  {
    name: 'Potinho da felicidade de paçoca',
    category: 'Doces',
    description: 'Um bolo de pote super molhadinho, com sabor de paçoca.',
    serving: '1 potinho | 25 g de proteína',
    price: 25,
    image: potinhoAmendoim,
    ingredients: [
      'farinha de amendoim torrado com pele',
      'ovos',
      'eritritol',
      'manteiga',
      'whey protein sem sabor',
      'glicina',
      'fermento químico em pó',
    ],
    protein: 25,
  },
  {
    name: 'Potinho da felicidade de brigadeiro branco',
    category: 'Doces',
    description: 'Um bolo de pote super molhadinho, com creme de brigadeiro branco.',
    serving: '1 potinho | 25 g de proteína',
    price: 25,
    image: potinhoBrigadeiroBranco,
    ingredients: [
      'farinha de amêndoas',
      'ovos',
      'eritritol',
      'manteiga',
      'whey protein sem sabor',
      'leite em pó',
      'glicina',
      'fermento químico em pó',
    ],
    protein: 25,
  },
]
