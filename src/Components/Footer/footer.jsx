import react from '../../images/react.svg'
import router from '../../images/router.svg'
import tailwind from '../../images/tailwind.svg'
import heroIcon from '../../images/heroIcon.svg'
import emailjs from '../../images/emailjs.svg'
import styled from '../../images/styled-components.png'
import material from '../../images/material.svg'

function Footer() {
    return (
        <footer className="bg-white-200 dark:bg-dark-200 text-black dark:text-white-100 font-bold p-4 justify-between flex-col sm:flex-row flex items-center max-w-full h-full">
            <h1 className='text-center sm:text-left mb-4 sm:mb-0'>Pedro Oliveira</h1>
            <div className="flex flex-wrap justify-center sm:justify-start gap-5">
                <img src={react} alt="Icon React" className='imagens-footer'/>
                <img src={tailwind} alt="Icone Tailwind" className='imagens-footer'/>
                <img src={router} alt="Icone Router" className='imagens-footer'/>
                <img src={heroIcon} alt="Icone Hero Icon" className='imagens-footer'/>
                <img src={emailjs} alt="Icone EmailJs" className='imagens-footer'/>
                <img src={styled} alt="Icone Styled Components" className='imagens-footer'/>
                <img src={material} alt="Icone Material Tailwind" className='imagens-footer'/>
            </div>
        </footer>
    );
}

export default Footer;