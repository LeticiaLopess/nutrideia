import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TerapiaEmagrecimento } from './pages/TerapiaEmagrecimento'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TerapiaEmagrecimento />
  </StrictMode>,
)
