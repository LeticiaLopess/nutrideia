import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CozinhaNutrideia } from './pages/CozinhaNutrideia'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CozinhaNutrideia />
  </StrictMode>,
)
