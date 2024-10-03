import { Bars3Icon } from "@heroicons/react/20/solid";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import Modal from "../Drawer/modal";

function BtnMenu() {
    const [openTop, setOpenTop] = useState(false)
    
    const openTopDrawer = () => setOpenTop(true) 
    const closeTopDrawer = () => setOpenTop(false)

    return ( 
        <div className="pr-4">
            <div className="btn-fundo btn-menu">
                <Bars3Icon className="h-4 text-black dark:text-white-100" onClick={openTopDrawer}/>
            </div>
            <Drawer placement="top" open={openTop} onClose={closeTopDrawer}>
                <Modal/>
            </Drawer>
        </div>       
        
    );
}

export default BtnMenu;