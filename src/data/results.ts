import result1 from '../assets/images/results/result-1.jpeg'
import result2 from '../assets/images/results/result-2.jpeg'
import result3 from '../assets/images/results/result-3.jpeg'
import result4 from '../assets/images/results/result-4.jpeg'
import result5 from '../assets/images/results/result-5.jpeg'
import result6 from '../assets/images/results/result-6.jpeg'
import result7 from '../assets/images/results/result-7.jpeg'
import result8 from '../assets/images/results/result-8.jpeg'
import result9 from '../assets/images/results/result-9.jpeg'

export type Result = {
  name: string
  image: string
  tag?: string
}

// Nomes provisórios até a Andreia enviar os nomes reais das alunas.
export const results: Result[] = [
  { name: 'Cláudia', image: result1 },
  { name: 'Mônica', image: result2 },
  { name: 'Patrícia', image: result3 },
  { name: 'Lúcia', image: result4 },
  { name: 'Andreia', image: result5, tag: 'Minha transformação' },
  { name: 'Marta', image: result6 },
  { name: 'Sueli', image: result7 },
  { name: 'Beatriz', image: result8 },
  { name: 'Fernanda', image: result9 },
]
