import { dadosCard } from "./infosCard";

export const BotaoCard = `
    bg-white-200 hover:bg-fundoIcon-800 dark:bg-fundoIcon-600 dark:hover:bg-fundoIcon-700 text-texto-100 font-semibold rounded py-2 px-4 mt-4
`
export const Badge = `
    inline-flex items-center bg-fundoIcon-900 dark:bg-fundoIcon-600 px-0.5 py-0.5 text-xs font-medium text-black dark:text-texto-600
`


function CardProjeto() {
    return (
        <div className="mt-14">
        {dadosCard.map(props => (
            <div className="w-[725px] border dark:border-0 bg-white-100 dark:bg-fundoIcon-1000 overflow-hidden mt-4 rounded shadow-lg">
                <img className="w-full" src={props.foto} alt="Projeto 1" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black dark:text-white-100"> {props.titulo}</div>
                    <p className="text-black dark:text-white-100 text-base">{props.descricao}</p>
                    <button className={BotaoCard}>Link</button>
                </div>
                <div className="px-6 pt-1 pb-4">
                    <span className={Badge}>{props.badge1}</span>
                    {props.badge2 && <span className={Badge}>{props.badge2}</span>}
                </div>
            </div>
            
        ))}
        </div>

    );
}

/* 
<div className="w-[725px] border dark:border-0 overflow-hidden mt-14 rounded shadow-lg">
            <img className="w-full" src={projeto1} alt="Projeto 1"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black dark:text-white-100">Clone Airbnb</div>
                <p className="text-black dark:text-white-100 text-base">Projeto realizado para a faculdade, com o intuito de fazer uma pagina de anuncio de alguma casa.</p>
                <button className={BotaoCard}>Link</button>
            </div>
            <div className="px-6 pt-1 pb-4">
            <span className={Badge}>BADGE</span>
            </div>
        </div>
*/

export default CardProjeto;