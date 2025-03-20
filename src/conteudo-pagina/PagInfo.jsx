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
            <h1>{cursoSelecionado.nome}</h1>
            <div className="organization">
                <div className="style-list-none"> 
                    {/*<img src={ImgDDS} alt="Foto-curso" />*/}
                    <h3>Objetivo</h3>
                    <p>{cursoSelecionado.objetivo}</p>
                </div>
                
                <div className="style-list-none">
                    <h3>Habilidades Adquiridas</h3>
                    <ul>
                        Habilidades aprendidas durante o curso:
                        {cursoSelecionado.habilidades.map((habilidade) => (
                            <li key={habilidade.id}>{habilidade.nome}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="style-list-none">
                    <h3>Áreas de Atuação</h3>
                    <ul>
                        Os profissionais formados em {cursoSelecionado.nome} podem atuar em:
                        {cursoSelecionado.atuacao.map((atua) => (
                            <li key={atua.id}>{atua.nome}</li>
                        ))}
                    </ul> 
                </div>
                <div className="formulario">
                    <form action="">
                        <div>
                            <div className="form-space">
                                <label htmlFor="">Nome Completo:</label>
                                <input type="text" placeholder="Digite seu nome completo"/>
                            </div>
                            <div className="form-space">
                                <label htmlFor="">Email:</label>
                                <input type="text" placeholder="Digite seu email"/>
                            </div>
                            <div className="form-space">
                                <label htmlFor="">Data de Nascimento:</label>
                                <input type="date" name="" id="" placeholder="Insira sua idade"/>
                            </div>
                            
                            <button>Enviar</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PagInfo