import DivisaoSection from "../Divisoes/divisao";

function Experiencia() {
    return ( 
        <div className="topicos" id="experiencia">
            <DivisaoSection  numero='02' descricao = 'Experiencia'/>
            <section className="max-w-[700px] text-left pl-[98px]">
                <p className="text-xl text-black dark:text-texto-200">Nao possuo experiencia na area</p>
            </section>
        </div>
    );
}

export default Experiencia;