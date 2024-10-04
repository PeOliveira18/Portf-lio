/* import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Modal from "../Drawer/modal";

function BtnMenu() {
    const [openTop, setOpenTop] = useState(false)
    const toggleMenu = () => {
        setOpenTop((prev) => !prev)
    }

    return ( 
        <div className="pr-4">
            <div className="btn-fundo btn-menu">
                <Bars3Icon className="h-4 text-black dark:text-white-100" onClick={()=>}/>
            </div>
            {openTop &&  <Modal onClose={toggleMenu}/>}
        </div>       
    );
}

export default BtnMenu; */