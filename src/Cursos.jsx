import './Cursos.css'

function Cursos() {
    const DSS = "Desenvolvimento de Sistema";
    const AI = "Inteligência Artifícial";
    const EL = "Eletrotécnica";
    return (
        <>
            <div class='card-father'>
                <div class="c-card">
                    <a href=""><img src="./src/assets/imagem.jpg" alt="imagem do card"/>
                        <h2>Desenvolvimento de Sistemas</h2>
                        <p>Data da Aplicação: 20/03/2025</p>
                        <p>Data de Início: 20/03/2025</p>
                        <p>Data de Térmico: 20/03/2025</p>
                    </a>
                </div>
                <div class="c-card">
                    <a href="">
                        <img src="./src/assets/imagem.jpg" alt="imagem do card"/>
                        <h2>Inteligência Artifícial</h2>
                        <p>Data da Aplicação: 20/03/2025</p>
                        <p>Data de Início: 20/03/2025</p>
                        <p>Data de Térmico: 20/03/2025</p>
                    </a>
                </div>
                <div class="c-card">
                    <a href="">
                        <img src="./src/assets/imagem.jpg" alt="imagem do card"/>
                        <h2>Eletrotécnica</h2>
                        <p>Data da Aplicação: 20/03/2025</p>
                        <p>Data de Início: 20/03/2025</p>
                        <p>Data de Térmico: 20/03/2025</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Cursos