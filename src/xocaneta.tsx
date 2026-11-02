import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Xocaneta } from './pages/Xocaneta'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Xocaneta />
  </StrictMode>,
)
