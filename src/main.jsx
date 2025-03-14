import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import Cursos from './Cursos.jsx'
import Historia from './Historia.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
    <Cursos/>
    <Historia/>
    <Footer/>
  </StrictMode>,
)
