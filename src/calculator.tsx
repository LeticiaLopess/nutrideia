import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProteinCalculator } from './pages/ProteinCalculator'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProteinCalculator />
  </StrictMode>,
)
