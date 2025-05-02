import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider> 
       <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
       </AuthProvider>
     </HelmetProvider> 
  </StrictMode>,
)
