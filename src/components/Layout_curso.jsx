import { Link } from 'react-router-dom'
import '../css/Cursos.css'

function Layout_cursos({nome_curso,data_aplicacao,data_inicio,data_termino,foto}) {
    return (
        <>
            <div class="c-card">
                <Link to="/curso/formulario"><img src={foto} alt="imagem do card" />
                    <h2>{nome_curso}</h2>
                    <p>Data da Aplicação:{data_aplicacao}</p>
                    <p>Data de Início:{data_inicio}</p>
                    <p>Data de Térmico:{data_termino}</p>
                </Link>
            </div>
        </>
    ) 
}

export default Layout_cursos