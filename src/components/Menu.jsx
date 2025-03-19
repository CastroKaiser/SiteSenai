import '../css/Menu.css'
import {Link} from "react-router-dom"


function Menu() {
  return (
    <>
      <div className='construction'>
          <img src="./src/assets/logo-senai.png" alt="logo-senai" height='15%' width='15%' />
      </div>
      <nav>
          <ul id='layout'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/historia">Historia</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
      </nav>
    </>
  )
}

export default Menu