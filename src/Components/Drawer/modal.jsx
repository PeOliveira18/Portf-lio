import React from "react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Drawer } from "@material-tailwind/react";
import {Link as ScrollLink } from 'react-scroll'

function Modal() {
    const [openTop, setOpenTop] = useState(false)
    const openDrawer = () =>setOpenTop(true)
    const closeDrawer = () =>setOpenTop(false)


    return (
        <div>
            <div className="btn-fundo btn-menu">
                <Bars3Icon className="h-4 text-black dark:text-white-100" onClick={openDrawer}/>
            </div>   
            <Drawer open={openTop} onClose={closeDrawer} placement="top" className="flex items-end pl-5 bg-dark-300 w-full fixed -top-[236px] left-0 transition-transform transform">
                <div className="w-full bg-dark-300 py-5">
                    <div className="flex sm:gap-7 gap-1 sm:pl-4 pl-0">
                    <ScrollLink to='sobre' smooth={true} duration={500}>
                    <a href="#">Sobre</a>
                </ScrollLink> 
                <ScrollLink to='experiencia' smooth={true} duration={500}>
                    <a href="#">Experiencia</a>
                </ScrollLink>
                <ScrollLink to='projetos' smooth={true} duration={500}>
                    <a href="#">Projetos</a>
                </ScrollLink>
                <ScrollLink to='contato' smooth={true} duration={500}>
                    <a href="#">Contato</a>
                </ScrollLink>
                    </div>
                </div>
            </Drawer>
        </div>
    );
} 

export default Modal;