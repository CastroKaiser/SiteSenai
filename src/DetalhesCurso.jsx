import Formulario from "./Formulario"
import {useParams} from "react-router-dom"
import curso from "./dataCursos"

function DetalhesCurso() {
    const {id} = useParams()
    console.log("Esse é o id passado:",id)
    const cursoSelecionado = curso.find(c => c.id === id)


    if (!cursoSelecionado) {
        return (
            <h2>Curso não encontrado</h2>
        )
    }

    return (
        <div className="layout-info">
            <h1>{cursoSelecionado.nome}</h1>

            <h2>Objetivo</h2>
            <p>{cursoSelecionado.objetivo}</p>

            <h2>Habilidades</h2>
            <ul>
                Os alunos aprendem a:
                {cursoSelecionado.habilidades.map((habilidade) => (
                    <li key={habilidade.id}>{habilidade.nome}</li>
                ))}
            </ul>

            <h2>Áreas de Atuação:</h2>
            <ul>
                Os profissionais formados em {cursoSelecionado.nome} podem atuas em:
                {cursoSelecionado.atuacao.map((atua)=> (
                    <li key={atua.id}>{atua.nome}</li>
                ))}
            </ul>
      </div>
    )
}

export default DetalhesCurso