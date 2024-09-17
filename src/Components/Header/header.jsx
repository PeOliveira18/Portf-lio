function Header() {
    return ( 
        <header className="flex justify-between bg-cabecalho-100 px-5 py-5">
            <div className="flex justify-around">
                <h1 className="text-white">teste</h1>
                <h1 className="text-white">teste</h1>
            </div>
            <div className="flex justify-around">
                <a href="" className="text-white">About</a>
                <a href="" className="text-white">Experience</a>
                <a href="" className="text-white">Projects</a>
                <a href="" className="text-white">Contact</a>
            </div>
        </header>
    );
}

export default Header;