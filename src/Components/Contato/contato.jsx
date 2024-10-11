import DivisaoSection from "../Divisoes/divisao";
import Form from "../Form/form";
import ConfiguracoesSVG from "../SVG's/svgs";

function Contato() {
    

    return (
        <div className="topicos" id="contato">
            <DivisaoSection numero='05' descricao='Contato' />
            <section className="max-w-full text-center m-auto">
                <div className="mt-14">
                    <h1 className="text-3xl text-black dark:text-white-100 font-bold">Vamos manter contato</h1>
                </div>
                <Form/>
                <div className="flex flex-col justify-center mt-3 gap-5">
                    <p className="text-texto-100 font-bold">oliveirasilvapedro2@gmail.com</p>
                    <p className="text-texto-100 font-bold">+55 (11) 96191-2468</p>
                    <ConfiguracoesSVG/>
                </div>            
            </section>
        </div>
        
    );

}

export default Contato;