import result1 from '../assets/images/results/result-1.jpeg'
import result2 from '../assets/images/results/result-2.jpeg'
import result3 from '../assets/images/results/result-3.jpeg'
import result4 from '../assets/images/results/result-4.jpeg'
import result5 from '../assets/images/results/result-5.jpeg'
import result6 from '../assets/images/results/result-6.jpeg'
import result7 from '../assets/images/results/result-7.jpeg'
import result8 from '../assets/images/results/result-8.jpeg'
import result9 from '../assets/images/results/result-9.jpeg'
import result10 from '../assets/images/results/result-10.jpeg'
import result11 from '../assets/images/results/result-11.png'
import result12 from '../assets/images/results/result-12.png'
import result13 from '../assets/images/results/result-13.png'

export type Result = {
  name: string
  image: string
  tag?: string
}

export const results: Result[] = [
  { name: 'Cristina', image: result1 },
  { name: 'Lucy', image: result2 },
  { name: 'Beatriz', image: result3 },
  { name: 'Joana', image: result4 },
  { name: 'Andreia', image: result5, tag: 'Minha transformação' },
  { name: 'Sônia', image: result6 },
  { name: 'Maria', image: result7 },
  { name: 'Lucy', image: result8 },
  { name: 'Camila', image: result9 },
  { name: 'Dandara', image: result10 },
  { name: 'Gisele', image: result11 },
  { name: 'Kezia', image: result12 },
  { name: 'Milton', image: result13 },
]
