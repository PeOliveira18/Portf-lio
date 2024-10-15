import DivisaoSection from "../Divisoes/divisao";
import foto1 from '../../images/html.svg'
import foto2 from '../../images/css.svg'
import foto3 from '../../images/js.svg'
import foto4 from '../../images/react.svg'
import foto5 from '../../images/tailwind.svg'
import foto6 from '../../images/python.svg'
import foto7 from '../../images/sql.svg'

function Linguagens() {
    return (  
        <div className="topicos" id="linguagens">
            <DivisaoSection numero='02' descricao = 'Tecnologias'/>
            <div className=" flex flex-col flex-wrap justify-between gap-4 descricoes md:pr-0 pr-16">
                <div className="nome-tecnologias">
                    <h1>HTML</h1>
                    <img src={foto1} alt="Logo HTML" className="imagens-tecnologias"/>
                </div>
                <div className="nome-tecnologias">
                    <h1>CSS</h1>
                    <img src={foto2} alt="Logo CSS" className="imagens-tecnologias"/>
                </div>

                <div className="nome-tecnologias">
                    <h1>JavaScript</h1>
                    <img src={foto3} alt="Logo JavaScript" className="imagens-tecnologias"/>
                </div>

                <div className="nome-tecnologias">
                    <h1>React</h1>
                    <img src={foto4} alt="Logo React" className="imagens-tecnologias"/>
                </div>

                <div className="nome-tecnologias">
                    <h1>Taliwind</h1>
                    <img src={foto5} alt="Logo Tailwind" className="imagens-tecnologias"/>
                </div>

                <div className="nome-tecnologias">
                    <h1>Python</h1>
                    <img src={foto6} alt="Logo Python" className="imagens-tecnologias"/>
                </div>

                <div className="nome-tecnologias">
                    <h1>SQL</h1>
                    <img src={foto7} alt="Logo SQL" className="imagens-tecnologias"/>
                </div>

            </div>
        </div>
    );
}

export default Linguagens;