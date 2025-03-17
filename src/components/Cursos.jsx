import '../css/Cursos.css'

function Cursos() {
    const DSS = "Desenvolvimento de Sistema";
    const AI = "Inteligência Artifícial";
    const EL = "Eletrotécnica";
    return (
        <>
            <div class='container'>
                <h1>Cursos oferecidos</h1>
                <p class='personalizacao'>
                    O Serviço Nacional de Aprendizagem Industrial (SENAI) é uma das principais
                    instituições de ensino técnico e profissionalizante do Brasil, reconhecida
                    por sua qualidade e foco na formação de profissionais para a indústria.
                </p>
                <p class='personalizacao'>
                    Confira abaixo os cursos profissionalizantes oferecidos pela rede Senai.
                </p>

                <div class='card-father'>
                    <div class="c-card">
                        <a href=""><img src="./src/assets/DDS.jpg" alt="imagem do card" />
                            <h2>Desenvolvimento de Sistemas</h2>
                            <p>Data da Aplicação: 20/03/2025</p>
                            <p>Data de Início: 20/03/2025</p>
                            <p>Data de Térmico: 20/03/2025</p>
                        </a>
                    </div>
                    <div class="c-card">
                        <a href="">
                            <img src="./src/assets/IA.jpg" alt="imagem do card" />
                            <h2>Inteligência Artifícial</h2>
                            <p>Data da Aplicação: 20/03/2025</p>
                            <p>Data de Início: 20/03/2025</p>
                            <p>Data de Térmico: 20/03/2025</p>
                        </a>
                    </div>
                    <div class="c-card">
                        <a href="">
                            <img src="./src/assets/imagem.jpg" alt="imagem do card" />
                            <h2>Eletrotécnica</h2>
                            <p>Data da Aplicação: 20/03/2025</p>
                            <p>Data de Início: 20/03/2025</p>
                            <p>Data de Térmico: 20/03/2025</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cursos