import DivisaoSection from "../Divisoes/divisao";
import CardProjeto from "./projetoCard";

function Projetos() {
    return ( 
        <div className="topicos">
            <DivisaoSection numero='03' descricao = 'Projetos'/>
            <section className="max-w-full text-justify px-4">
                <CardProjeto/>
            </section>
        </div>
    );
}

export default Projetos;