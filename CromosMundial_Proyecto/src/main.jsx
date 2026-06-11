import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './indexPCAC.css'
import AppPCAC from './AppPCAC'
import { AuthProviderPCAC } from './context/AuthContextPCAC'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviderPCAC>
      <AppPCAC />
    </AuthProviderPCAC>
  </StrictMode>,
)
