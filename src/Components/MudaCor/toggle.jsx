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

    return <div className="hidden sm:block">
        <MoonIcon className="h-8 text-black block dark:hidden cursor-pointer" onClick={toggle}/>
        <SunIcon className="h-8 text-white-100 hidden dark:block cursor-pointer" onClick={toggle}/>
    </div>

}

export default ToggleTema;