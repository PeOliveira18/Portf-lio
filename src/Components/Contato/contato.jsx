import DivisaoSection from "../Divisoes/divisao";
import Form from "../Form/form";

function Contato() {

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const assunto = document.getElementById('assunto')
    const mensagem = document.getElementById('mensagem')
    
    

    return (
        <div className="topicos">
            <DivisaoSection numero='04' descricao='Contato' />
            <section className="max-w-[700px] text-center m-auto">
                <div className="mt-14">
                    <h1 className="text-3xl text-black dark:text-white-100 font-bold">Vamos manter contato</h1>
                </div>
                <Form/>
            </section>
        </div>
        
    );

}

export default Contato;