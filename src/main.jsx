import React from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/react-movie/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
