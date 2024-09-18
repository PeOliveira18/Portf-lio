import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";

const ToggleTema = () => {
    const preferenciaDoSistema = window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(() => {
        preferenciaDoSistema && document.documentElement.classList.add('dark')
    })
    const toggle = () => {
        document.documentElement.classList.toggle('dark')
    }

    return <div className="block">
        <button className="px-4 py-3 rounded block dark:hidden cursor-pointer hover:bg-fundoIcon-300 active:bg-fundoIcon-400" onClick={toggle}>
            <MoonIcon className="h-4 text-black"/>
        </button>
        <button className="bg-fundoIcon-100 px-4 py-3 rounded hidden dark:block cursor-pointer hover:bg-fundoIcon-200 active:bg-fundoIcon-500" onClick={toggle}>
            <SunIcon className="h-4 text-white-100"/>
        </button>
    </div>

}

export default ToggleTema;