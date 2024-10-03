import react from '../../images/react.svg'
import router from '../../images/router.svg'
import tailwind from '../../images/tailwind.svg'
import heroIcon from '../../images/heroIcon.svg'

function Footer() {
    return (
        <footer className="bg-white-200 dark:bg-dark-200 text-black dark:text-white-100 font-bold p-4 justify-between px-12 flex items-center">
            <h1>Pedro Oliveira</h1>
            <div className="flex items-center gap-5">
                <img src={react} alt="" className='imagens-footer'/>
                <img src={tailwind} alt="" className='imagens-footer'/>
                <img src={router} alt="" className='imagens-footer'/>
                <img src={heroIcon} alt="" className='imagens-footer'/>
            </div>
        </footer>
    );
}

export default Footer;