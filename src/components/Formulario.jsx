import React from 'react'
import './css/Formulario.css'

const Formulario = () => {
  return (
    <div>
      <div>
        <h2>Objetivo</h2>
        <p>O curso de Desenvolvimento de Sistemas, seja em nível técnico ou superior,
           visa formar profissionais capazes de analisar, projetar, desenvolver, implementar 
           e manter sistemas de informação, utilizando conhecimentos em programação, bancos 
           de dados, redes e outras tecnologias</p>
        <h2>Habilidades</h2>
        <ul>Os alunos aprendem a:
          <li>Analisar requisitos do sistema</li>
          <li>Projetar e desenvolver soluções de software</li> 
          <li>Utilizar linguagens de programação.</li>
          <li>Gerenciar bancos de dados. </li>
          <li>Implementar e manter sistemas.</li>
          <li>Testar e garantir a qualidade do software.</li>
          <li>Trabalhar com metodologias de desenvolvimento de software</li>
        </ul>
        <h2>Áreas de Atuação:</h2>
        <ul>Os profissionais formados em Desencolvimento de Sistemas podem atuas em:
          <li>Empresas de desenvolvimento de software</li>
          <li>Setores de TI de diversas empresas</li> 
          <li>Empresas de consultoria em TI</li>
          <li>Empresas de tecnologia</li>
        </ul>
      </div>
      <div class="form">
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
    </div>
  )
}

export default Formulario