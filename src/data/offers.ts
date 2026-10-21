import choqueMetabolismo from '../assets/images/choque-metabolismo.png'
import cozinhaNutrideia from '../assets/images/cozinha-nutrideia.png'
import terapiaEmagrecimento from '../assets/images/terapia-emagrecimento.png'

export type Offer = {
  name: string
  format: string
  tagline: string
  description: string
  benefits: string[]
  cta: string
  href: string
  checkoutHref: string
  featured?: boolean
  image?: string
  price: number
  priceNote?: string
}

export const offers: Offer[] = [
  {
    name: 'Cozinha Nutrideia',
    image: cozinhaNutrideia,
    price: 497,
    format: 'Receitas Nutrideia',
    tagline: 'O primeiro passo começa na cozinha.',
    description:
      'Aqui eu te ensino a fazer em casa as nutrideias: versões proteicas das receitas que você ama, com sabor, textura e prazer de verdade, para emagrecer sem comer igual a um passarinho.',
    benefits: [
      'Bolo de chocolate, mesclado e outros',
      'Diversos tipos de pães',
      'Creme de avelã proteico e potinhos da felicidade',
      'Biscoito divo, rabanada e muito mais',
    ],
    cta: 'Quero as receitas',
    href: '/cozinha-nutrideia/',
    checkoutHref: 'https://pay.kiwify.com.br/TEZXaMi',
  },
  {
    name: 'Terapia do Emagrecimento',
    image: terapiaEmagrecimento,
    price: 3500,
    priceNote: '12 sessões inclusas',
    format: 'Acompanhamento individual',
    tagline: 'Um caminho feito sob medida para você.',
    description:
      'Uma jornada exclusiva, só eu e você, olhando com atenção para a sua história, a sua rotina e as crenças que você carrega.',
    benefits: [
      'Acompanhamento próximo e individual comigo',
      'Estratégia construída a partir da sua história e da sua rotina',
      'Espaço reservado para trabalhar as suas crenças e padrões',
      'Ajustes no seu ritmo, a cada etapa do processo',
    ],
    cta: 'Quero a terapia',
    href: '/terapia-emagrecimento/',
    checkoutHref:
      'https://wa.me/5521975719527?text=Ol%C3%A1%2C%20estava%20no%20site%20e%20queria%20saber%20mais%20sobre%20o%20Terapia%20do%20Emagrecimento.',
    featured: true,
  },
  {
    name: 'Choque no Metabolismo',
    image: choqueMetabolismo,
    price: 397,
    format: 'Jornada em grupo',
    tagline: 'Quem participa, sempre volta.',
    description:
      'Serão 21 dias de autocuidado, onde eu aplico os mesmos métodos que utilizei para mudar a vida de milhares de pessoas, ajudando-as a vencer a obesidade e problemas de saúde através da mudança de hábitos alimentares e de saúde.',
    benefits: [
      '21 dias de autocuidado guiados por mim',
      'Sucesso comprovado desde 2017, edição após edição',
      'O Método Nutrideia e a renovação da mente, passo a passo',
      'Um grupo fiel de mulheres caminhando lado a lado com você',
    ],
    cta: 'Quero participar',
    href: '/choque-metabolismo/',
    checkoutHref: 'https://pay.kiwify.com.br/i5LxbP2',
  },
]
