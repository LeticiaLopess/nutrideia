import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Hydropower } from './pages/Hydropower'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hydropower />
  </StrictMode>,
)
