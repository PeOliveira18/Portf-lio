import ToggleTema from "../MudaCor/toggle";

function Header() {
    return ( 
        <header className="flex justify-between bg-white-200 dark:bg-dark-200 text-black dark:text-gray-50 px-5 py-3">
            <div className="flex items-center gap-4">
                <h1 className="text-texto-100 ">P</h1>
                <h1 className="text-texto-100 ">O</h1>
            </div>
            <div className="flex gap-16 text-black dark:text-gray-50 font-semibold items-center">
                <a href="">About</a>
                <a href="">Experience</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
                <ToggleTema/>
            </div>
        </header>
    );
}

export default Header;