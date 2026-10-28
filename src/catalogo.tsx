import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CatalogoDelivery } from './pages/CatalogoDelivery'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CatalogoDelivery />
  </StrictMode>,
)
