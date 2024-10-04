import Modal from "../Drawer/modal";
import ToggleTema from "../MudaCor/toggle";
import {Link as ScrollLink } from 'react-scroll'


function Header() {
    
    return ( 
        <header className="flex justify-between bg-white-200 dark:bg-dark-200 text-black dark:text-gray-50 h-16 pl-4 fixed w-screen z-20">
            <div className="flex items-center gap-4">
                <h1 className="text-texto-100 ">P</h1>
                <h1 className="text-texto-100 ">O</h1>
            </div>
            <div className="flex gap-10 text-black dark:text-gray-50 font-semibold items-center">
                <ScrollLink to='sobre' smooth={true} duration={500}>
                    <a href="" className="desaparece">Sobre</a>
                </ScrollLink> 
                <ScrollLink to='experiencia' smooth={true} duration={500}>
                    <a href="" className="desaparece">Experiencia</a>
                </ScrollLink>
                <ScrollLink to='projetos' smooth={true} duration={500}>
                    <a href="" className="desaparece">Projetos</a>
                </ScrollLink>
                <ScrollLink to='contato' smooth={true} duration={500}>
                    <a href="" className="desaparece">Contato</a>
                </ScrollLink>
                <div className="flex gap-8">
                    <ToggleTema/>
                    <Modal/>
                </div>
            </div>
        </header>
    );
}

export default Header;