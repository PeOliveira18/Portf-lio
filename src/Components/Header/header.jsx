import BtnMenu from "../BotaoMenu/btnMenu";
import ToggleTema from "../MudaCor/toggle";

function Header() {
    return ( 
        <header className="flex justify-between bg-white-200 dark:bg-dark-200 text-black dark:text-gray-50 h-16 pl-4 ">
            <div className="flex items-center gap-4">
                <h1 className="text-texto-100 ">P</h1>
                <h1 className="text-texto-100 ">O</h1>
            </div>
            <div className="flex gap-14 text-black dark:text-gray-50 font-semibold items-center">
                <a href="" className="desaparece">About</a>
                <a href="" className="desaparece">Experience</a>
                <a href="" className="desaparece">Projects</a>
                <a href="" className="desaparece">Contact</a>
                <div className="flex gap-8">
                    <ToggleTema/>
                    <BtnMenu/>
                </div>
            </div>
        </header>
    );
}

export default Header;