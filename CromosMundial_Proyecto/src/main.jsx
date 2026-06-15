import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './indexPCAC.css'
import AppPCAC from './AppPCAC'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPCAC />
  </StrictMode>,
)
