import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Modal from "../Modal/modal";

function BtnMenu() {
    const [abreModal, setAbreModal] = useState(false)

    return ( 
        <div className="pr-4">
            <div className="btn-fundo btn-menu" onClick={() =>setAbreModal(true)}>
                <Bars3Icon className="h-4 text-black dark:text-white-100" />
            </div>
            <Modal isOpen={abreModal} setFecharModal={() => setAbreModal(!abreModal)}/>
        </div>       
        
    );
}

export default BtnMenu;