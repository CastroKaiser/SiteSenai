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
                <li key={cursoSelecionado.id}></li>
            </ul>

        </div>
    )
}

export default PagInfo