import '../css/Cursos.css'
import Layout_cursos from '../components/Layout_curso.jsx'  
import curso from '../objetos/dataCursos.js';
function Cursos() {
    const DSS = "Desenvolvimento de Sistema";
    const AI = "Inteligência Artifícial";
    const EL = "Eletrotécnica";
    const URLD = "./src/assets/DDS.jpg"
    const URLA = "./src/assets/IA.jpg"
    const URLE = "./src/assets/imagem.jpg"

    //const { data, detalhe, ...rest } = props; // Destructuring assignment
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
                    <Layout_cursos id={curso[0].id} nome_curso={DSS} data_aplicacao='12/4/2025' data_inicio='01/05/2025' data_termino='31/09/2025' foto={URLD}/>
                    <Layout_cursos id={curso[1].id} nome_curso={AI} data_aplicacao='13/9/2025' data_inicio='01/02/2026' data_termino='31/09/2026' foto={URLA}/>
                    <Layout_cursos id={curso[2].id} nome_curso={EL} data_aplicacao='19/7/2025' data_inicio='01/08/2025' data_termino='31/09/2026' foto={URLE}/>
                </div>
            </div>
        </>
    )
}

export default Cursos