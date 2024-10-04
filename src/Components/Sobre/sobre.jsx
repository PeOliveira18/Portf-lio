import DivisaoSection from "../Divisoes/divisao";

function Sobre() {
    return ( 
        <div className="topicos" id="sobre">
            <DivisaoSection numero='01' descricao = 'Sobre'/>
            <section className="max-w-[700px] text-left m-auto pl-[98px]">
                <p className="text-xl text-black dark:text-texto-200">Atualmente, estou em busca da minha primeira oportunidade na área da tecnologia que me permita colocar em prática minhas habilidades principalmente em HTML, CSS, SQL. Estou cursando Engenharia de Software na FIAP. Como alguém que valoriza o aprendizado contínuo, busco uma vaga onde possa questionar e aprender com profissionais experientes, ao mesmo tempo que ofereço minha disposição para colaborar e crescer.</p>
            </section>
        </div>
    );
}

export default Sobre;