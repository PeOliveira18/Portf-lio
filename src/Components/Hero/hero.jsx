import { Switch } from "@headlessui/react";


function Hero() {
    return ( 
        <section>
            <div className="flex justify-center flex-col gap-3 pt-36 text-center">
                <h1 className ='mt-4 text-black dark:text-white-100 text-6xl'>Ola, meu nome e Pedro</h1>
                <h1 className="text-texto-100 text-6xl"> Sou Engenheiro de Software</h1>
                <p className="text-xl pt-10 text-texto-200">Cursando o 2º semestre de Engenharia de Software na FIAP </p>
                <a className="rounded-full bg-texto-100 py-3 px-5 mt-10 items-center cursor-pointer w-fit mx-auto">Vamos conectar!</a>
            </div>
        </section>
    );
}

export default Hero;