import React from 'react'
import './css/Formulario.css'

const Formulario = () => {
  return (
      <div className="form">
        <form action="" class="layout-formulario">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea name="mensagem" id="mensagem" cols="30" rows="5"></textarea>
          <button type="submit">Enviar</button>
        </form> 
    </div>
  )
}

export default Formulario