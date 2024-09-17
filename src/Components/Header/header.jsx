import ToggleTema from "../MudaCor/toggle";

function Header() {
    return ( 
        <header className="flex justify-between text-center bg-white-200 dark:bg-dark-200 text-black dark:text-gray-50 px-5 py-4">
            <div className="flex">
                <h1>teste</h1>
                <h1>teste</h1>
            </div>
            <div className="flex gap-16 text-black dark:text-gray-50 font-semibold">
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