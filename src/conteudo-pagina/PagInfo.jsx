import React from "react";
import curso from "../objetos/dataCursos"
import { useParams } from "react-router-dom";

function PagInfo() {
    const {id} = useParams()
    const cursoSelecionado = curso.find(c => c.id === id)

    return(
        <div>
            <h2>{cursoSelecionado.nome}</h2>
            
            <h2>Objetivo</h2>
            <p>{cursoSelecionado.objetivo}</p>

            <h2>Habilidades Adquiridas</h2>
            <ul>
                As habilidades aprendidas no curso de {cursoSelecionado.nome}
                {cursoSelecionado.habilidades.map((habilidade) => (
                    <li key={habilidade.id}>{habilidade.nome}</li>
                ))}
            </ul>

            <h2>Áreas de Atuação</h2>
            <ul>
                Os profissionais formados em {cursoSelecionado.nome} podem atuar em:
                {cursoSelecionado.atuacao.map((atua) => (
                    <li key={atua.id}>{atua.nome}</li>
                ))}
            </ul>
        </div>
    )
}

export default PagInfo