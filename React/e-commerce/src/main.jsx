import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './comman/Header.jsx'
import Footer from './comman/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import MainContext from './Context/MainContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainContext>
        <Header />
        <App />
        <Footer />
      </MainContext>
    </BrowserRouter>
  </StrictMode>,
)
