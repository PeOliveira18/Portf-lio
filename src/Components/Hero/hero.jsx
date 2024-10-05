import seta from '../../images/arrow.png'
import setaBranca from '../../images/arrow-white.png'
import { Link as ScrollLink } from 'react-scroll'

function Hero() {
    return (
        <section className="flex flex-col m-auto pt-36 pb-[144px] text-center max-w-[736px]">
            <div className="gap-3 flex flex-col">
                <h1 className='mt-4 text-black dark:text-white-100 md:text-6xl text-3xl'>Ola, meu nome e Pedro</h1>
                <h1 className="text-texto-100 md:text-6xl text-3xl">Engenheiro de Software</h1>
            </div>
            <div className="mt-14">
                <p className="text-xl md:text-2xl text-texto-200">Cursando o 2º semestre de Engenharia de Software na FIAP </p>
            </div>
            <div className="flex flex-col mt-14">
                <a className="btn-conectar" href="https://www.linkedin.com/in/pedro-oliveira-a054412ba/" target="_blank">Vamos conectar!</a>
                <div className='flex items-center justify-center pl-10'>
                    <img src={seta} alt="Seta" className='w-16 h-16 dark:hidden'
                    />
                    <img src={setaBranca} alt="Seta" className='w-16 h-16 hidden dark:block'
                    />
                    <p className='w-20 italic font-caveat dark:text-white-100 text-black font-bold text-lg -rotate-12'>Clique aqui</p>
                </div>
            </div>
            <div className="mt-3">
                <ScrollLink to='forms' smooth={true} duration={500}>
                    <a href="#" className="text-texto-400 hover:underline">Me contate</a>
                </ScrollLink>
            </div>
        </section>
    );
}

export default Hero;