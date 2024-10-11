import DivisaoSection from "../Divisoes/divisao";

function Experiencia() {
    return ( 
        <div className="topicos" id="experiencia">
            <DivisaoSection  numero='03' descricao = 'Experiencia'/>
            <section className="max-w-[700px] text-left pl-[98px] m-auto">
                <p className="text-xl text-black dark:text-texto-200">Não possuo experiencia na área</p>
            </section>
        </div>
    );
}

export default Experiencia;