import DivisaoSection from "../Divisoes/divisao";
import CardProjeto from "./projetoCard";

function Projetos() {
    return ( 
        <div className="topicos">
            <DivisaoSection numero='03' descricao = 'Projetos'/>
            <section className="max-w-[700px] text-justify">
                <CardProjeto/>
            </section>
        </div>
    );
}

export default Projetos;