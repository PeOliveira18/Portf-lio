import { dadosOutrosProjetos } from "./infosOutrosProjetos";
import { Badge } from "../Projetos/projetoCard";
import { useState } from "react";
import BtnCategorias from "../BotaoCategorias/btnCategoria";

function CardOutrosProjetos() {
    const [categoria, setCategoria] = useState(0)

    return ( 
        <>
        <BtnCategorias setCategoria={setCategoria}/>
        <div className="md:max-w-[736px] max-w-full lg:flex grid lg:grid-cols-none md:grid-cols-2 grid-cols-1 m-auto gap-4 px-4 mb-36">
            {dadosOutrosProjetos.map((props, index) => (
                (categoria === 0 || categoria === index + 1) &&(
                <div key={index} className="lg:w-[224px] w-full lg:gap-0 gap-3 m-auto border dark:border-0 bg-white-100 dark:bg-fundoIcon-1000 rounded shadow-lg">
                    <div className="p-5 text-left flex flex-col gap-2">
                        <h1 className=" font-bold text-black dark:text-white-100">{props.titulo}</h1>
                        <p className="text-black dark:text-white-100">{props.descricao}</p>
                        <div>
                            <a href="#" className="text-texto-100 hover:underline">Link</a>
                        </div>
                        <div className="pt-4">
                            <span className={Badge}>{props.badge1}</span>
                            {props.badge2 && <span className={Badge}>{props.badge2}</span>}
                        </div>
                    </div>
                </div>
                )
            ))}
        </div>
        </>
    );
}

export default CardOutrosProjetos;