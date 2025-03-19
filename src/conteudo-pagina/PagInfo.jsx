import React from "react";
import curso from "../objetos/dataCursos"
import { useParams } from "react-router-dom";
import "../css/PagInfo.css"
import ImgDDS from "../assets/DDS.jpg"

function PagInfo() {
    const {id} = useParams()
    const cursoSelecionado = curso.find(c => c.id === id)

    return(
        <div className="content">
            <div className="formatation">
                <h1>{cursoSelecionado.nome}</h1>
                {/*<img src={ImgDDS} alt="Foto-curso" />*/}
                <h2>Objetivo</h2>
                <p>{cursoSelecionado.objetivo}</p>
            </div>
            
            <div className="formatation">
                <h2>Habilidades Adquiridas</h2>
                <ul>
                    As habilidades aprendidas no curso de {cursoSelecionado.nome}:
                    {cursoSelecionado.habilidades.map((habilidade) => (
                        <li key={habilidade.id}>{habilidade.nome}</li>
                    ))}
                </ul>
            </div>
            
            <div className="formatation">
                <h2>Áreas de Atuação</h2>
                <ul>
                    Os profissionais formados em {cursoSelecionado.nome} podem atuar em:
                    {cursoSelecionado.atuacao.map((atua) => (
                        <li key={atua.id}>{atua.nome}</li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}

export default PagInfo