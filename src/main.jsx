import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import Cursos from './components/Cursos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
    <Cursos/>
    <Footer/>
  </StrictMode>,
)
