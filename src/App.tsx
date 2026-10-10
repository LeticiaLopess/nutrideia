import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Challenge } from './components/sections/Challenge'
import { Hero } from './components/sections/Hero'
import { MetabolismShock } from './components/sections/MetabolismShock'
import { Method } from './components/sections/Method'
import { Offers } from './components/sections/Offers'
import { Persona } from './components/sections/Persona'
import { Pillars } from './components/sections/Pillars'
import { Quote } from './components/sections/Quote'
import { Results } from './components/sections/Results'
import { Testimonials } from './components/sections/Testimonials'
import { TapeDivider } from './components/ui'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Persona />
        <Quote />
        <MetabolismShock />
        <Method />
        <TapeDivider />
        <Results />
        <Testimonials />
        <Pillars />
        <Challenge />
        <Offers />
        <About />
      </main>
    </>
  )
}

export default App
