import '../css/Menu.css'

function Menu() {
  return (
    <>
      <div class='construction'>
          <img src="./src/assets/logo-senai.png" alt="logo-senai" height='15%' width='15%' />
      </div>
      <nav>
          <ul id='layout'>
            <li><a href="">Home</a></li>
            <li><a href="./Historia.jsx">História</a></li>
            <li><a href="./Cursos.jsx">Cursos</a></li>
            <li><a href="">Contato</a></li>
          </ul>
      </nav>
    </>
  )
}

export default Menu