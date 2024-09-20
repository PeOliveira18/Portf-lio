import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import BtnMenu from "../BotaoMenu/btnMenu";

const ToggleTema = () => {
    const preferenciaDoSistema = window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(() => {
        preferenciaDoSistema && document.documentElement.classList.add('dark')
    })
    const toggle = () => {
        document.documentElement.classList.toggle('dark')
    }

    return <div className="flex gap-12">
        <button className="btn-fundo btn-dark" onClick={toggle}>
            <MoonIcon className="h-4 text-black"/>
        </button>
        <button className="btn-fundo btn-sun" onClick={toggle}>
            <SunIcon className="h-4 text-white-100"/>
        </button>
    </div>
    

}

export default ToggleTema;