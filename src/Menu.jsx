import { useState } from 'react'
import './Menu.css'

function Menu() {
  return (
    <>
      <div class='construction'>
          <img src="./src/assets/logo-senai.png" alt="logo-senai" height='15%' width='15%' />
      </div>
      <nav>
          <ul id='layout'>
            <li><a href="">Home</a></li>
            <li><a href="">História</a></li>
            <li><a href="">Cursos</a></li>
            <li><a href="">Contato</a></li>
          </ul>
      </nav>
    </>
  )
}

export default Menu