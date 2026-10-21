import barbaraBecker from '../assets/images/feedback/barbara-becker.jpg'
import carlosAgostinho from '../assets/images/feedback/carlos-agostinho.png'
import cyntiaCeciliano from '../assets/images/feedback/cyntia-ceciliano.png'
import edsandraJinkings from '../assets/images/feedback/edsandra-jinkings.png'
import ingridReis from '../assets/images/feedback/ingrid-reis.png'
import isisPessanha from '../assets/images/feedback/isis-pessanha.png'
import jessicaSantos from '../assets/images/feedback/jessica-santos.jpg'
import julianaLyra from '../assets/images/feedback/juliana-lyra.png'
import juninhoEsteves from '../assets/images/feedback/juninho-esteves.png'
import kaelliMarinho from '../assets/images/feedback/kaelli-marinho.png'
import liliAmora from '../assets/images/feedback/lili-amora.jpg'
import lucasBrasil from '../assets/images/feedback/lucas-brasil.jpg'
import lucyMartins from '../assets/images/feedback/lucy-martins.png'
import sarahMendes from '../assets/images/feedback/sarah-mendes.png'
import vanessaFauci from '../assets/images/feedback/vanessa-fauci.jpg'

export type Testimonial = {
  name: string
  source: 'google' | 'facebook'
  text: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mendes',
    avatar: sarahMendes,
    source: 'google',
    text: 'A consulta com a Déia foi pra mim um investimento de vida. Havia sido indicada por 3 médicos a realizar a bariátrica por conta das comorbidades que adquiri com a má alimentação (esteatose hepática, pré-diabetes, hipertensão, SOP), ou seja, síndrome metabólica. E a Déia, maravilhosa, me ensinou a me alimentar de forma correta e prazerosa.',
  },
  {
    name: 'Jacqueline Rios',
    source: 'google',
    text: 'São muitas as qualidades desta nutricionista, Andreia Oliveira, mas vou começar apresentando os meus resultados: emagreci 16 quilos, sem passar fome e comendo, com prazer, quitutes muito saborosos. Estou vencendo os obstáculos do ato de cozinhar e praticar treino de musculação, pois é contagiante e inspirador ver esta nutricionista oferecendo-me o exemplo prático.',
  },
  {
    name: 'Ingrid Reis',
    avatar: ingridReis,
    source: 'google',
    text: 'A Dra. Andreia Oliveira faz toda a diferença na minha vida alimentar. Explicou detalhadamente todos os passos para uma autoconscientização de como ter qualidade de vida, em uma dieta que nem parece dieta, e me faz muito feliz, plena, radiante e amar o que eu vejo no espelho diariamente. Vale super a pena essa mega power nutri que me fez resgatar a saúde e a autoestima!',
  },
  {
    name: 'Flavia Ribeiro',
    source: 'google',
    text: 'Conheci a Andréia através do resultado de sucesso de uma amiga. Comigo, não está sendo diferente! A Andréia ensina uma nova forma de olhar para as nossas necessidades, para os alimentos, para dentro da gente… E ela nos abraça de tal maneira que tudo fica muito leve e sem sacrifício. Ver o resultado na balança é apenas um dos ganhos. O melhor mesmo é ver o resultado para a vida…',
  },
  {
    name: 'Kaelli Marinho',
    avatar: kaelliMarinho,
    source: 'google',
    text: 'A Andreia é incrível! Uma profissional super atenciosa e cuidadosa com seus pacientes. Seu trabalho é muito diferenciado e individualizado. Cada paciente é único. Graças à ajuda dela já eliminei mais de 20 kg e sou uma nova pessoa. Hoje amo o que vejo no espelho. Gratidão, Nutri!',
  },
  {
    name: 'Isadora Velasquez',
    source: 'google',
    text: 'A MELHOR nutri de toda a vida! Que já virou amiga pra sempre. Que ser humano incrível, que nos entende de verdade, que conforta e ajuda sempre. Tenho uma gratidão enorme pela existência dela e pelo trabalho incrível que ela desempenha. Me fez quebrar crenças que jamais pensei que eu tinha. Que Deus continue te iluminando muito.',
  },
  {
    name: 'Lucy Martins',
    avatar: lucyMartins,
    source: 'google',
    text: 'O Método Nutrideia mudou a minha vida completamente. Aprendi a comer de uma forma mais saudável e gostosa. Em 1 ano perdi mais de 50 kg comendo comida de verdade e sem qualquer tipo de sofrimento.',
  },
  {
    name: 'Edsandra Jinkings',
    avatar: edsandraJinkings,
    source: 'google',
    text: 'Há três meses fiz o primeiro contato com a Dra. Andreia Oliveira, nutricionista e terapeuta, depois de tantas tentativas para emagrecer. Acredito que tudo é no tempo de Deus e esse tempo chegou: estou emagrecendo de forma saudável e sem sofrimento, já foram mais de 14 quilos eliminados, com muita saúde e a autoestima lá em cima. Obrigada, Andreia, por este método inovador!',
  },
  {
    name: 'Isis Pessanha',
    avatar: isisPessanha,
    source: 'google',
    text: 'Foi o melhor investimento que fiz na minha vida! A Nutrideia foi além de emagrecimento, foi resgate da minha vida, foi uma grande transformação de vida! Amo demais! É pra vida toda! Só tenho gratidão 🌻❤️🍀🙏🏼',
  },
  {
    name: 'Carlos Agostinho',
    avatar: carlosAgostinho,
    source: 'google',
    text: 'Excelente profissional! Excelentes as orientações, que sempre dão excelentes resultados. As técnicas aplicadas sem sofrimento, resolvendo muitos problemas como diabetes, psoríase e uma gama enorme de soluções. Muita gratidão à Dra. Andreia Oliveira. Recomendo, com todas as garantias.',
  },
  {
    name: 'Juliana Lyra',
    avatar: julianaLyra,
    source: 'google',
    text: 'Minha nutri há quase 5 anos. O melhor método que eu tive o prazer de conhecer em todos esses anos de sobrepeso, que me tirou desta condição. Indico muito!',
  },
  {
    name: 'Cyntia Ceciliano',
    avatar: cyntiaCeciliano,
    source: 'google',
    text: 'Profissional competente, acima de tudo muito humana. Atendimento atencioso e de qualidade, pega o cliente pela mão e o ajuda. Recomendo a Nutrideia de olhos fechados!',
  },
  {
    name: 'Juninho Esteves',
    avatar: juninhoEsteves,
    source: 'google',
    text: 'Tudo explicado de forma que fique fácil fazer o programa de emagrecimento! Excelente profissional.',
  },
  {
    name: 'Vanessa Fauci',
    avatar: vanessaFauci,
    source: 'facebook',
    text: 'Uma profissional SENSACIONAL! De uma generosidade em dividir seus conhecimentos ímpar! Isso sem falar do seu coração, alma e astral... Minha nutri é ILUMINADA! 🙌🏻✨😀👏 Sorte e privilégio de quem a tem!',
  },
  {
    name: 'Lucas Brasil',
    avatar: lucasBrasil,
    source: 'facebook',
    text: 'Excelente profissional, muito atenciosa!',
  },
  {
    name: 'Jéssica Santos',
    avatar: jessicaSantos,
    source: 'facebook',
    text: 'Gratidão a Deus por conhecer alguém tão incrível, motivadora! Obrigada, Déia, por tudo!',
  },
  {
    name: 'Lili Amora',
    avatar: liliAmora,
    source: 'facebook',
    text: 'Melhor incentivadora de pessoas do mundo. Nem eu acredito que minha dieta e treinar monstro me fazem MUITO FELIZ! Gratidão eterna.',
  },
  {
    name: 'Barbara Becker',
    avatar: barbaraBecker,
    source: 'facebook',
    text: 'Andréia sabe tudo! Com ela qualquer um perde peso feliz! Super recomendo!',
  },
]
