import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Punto de entrada de la aplicación.
// <BrowserRouter> habilita la navegación entre pestañas sincronizada con la
// URL, sin recargar el navegador (requisito de React Router 6 de la guía).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
