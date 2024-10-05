import { useState } from "react";
import emailjs from '@emailjs/browser'

function Form() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [carregando, setCarregando] = useState(false)

    function sendEmail(e){
        e.preventDefault()
        setCarregando(true)

        const templateParams = {
            from_name: nome,
            email: email,
            assunto: assunto,
            message: mensagem
        }

        emailjs.send("service_bzchqy9","template_shs3ijb", templateParams, "htE14yKxNT8JrJ6Tr")
        .then((res) => {
            console.log("EMAIL ENVIADO", res.status, res.text)

            console.log(`Nome: ${nome}`);
            console.log(`Email: ${email}`);
            console.log(`Assunto: ${assunto}`);
            console.log(`Mensagem: ${mensagem}`);

            alert('Formulario enviado com sucesso')
            setNome('')
            setEmail('')
            setAssunto('')
            setMensagem('')  
            setCarregando(false)
        }, (err) => {
            console.log("ERRO", err)
            setCarregando(false) 
        })
    }

    return (  
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
            <form className="mt-8 space-y-4" onSubmit={sendEmail} id="forms">
                <input type='text' placeholder='Nome' required id="nome" className="input-contato" onChange={(e) => setNome(e.target.value)} value={nome}/>

                <input type='email' placeholder='Email' required id="email" className="input-contato invalid:outline-red-500 invalid:text-red-500" onChange={(e) => setEmail(e.target.value)} value={email}/>

                <input type='text' placeholder='Assunto' required id="assunto" className="input-contato" onChange={(e) => setAssunto(e.target.value)} value={assunto}/>

                <textarea placeholder='Mensagem' required id="mensagem" rows="6" className="w-full rounded-md px-4 dark:focus:text-white-100 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500 shadow-lg focus:text-black " onChange={(e) => setMensagem(e.target.value)} value={mensagem}></textarea>
                <button type='submit' className="btn-enviar" disabled={carregando}>
                    {carregando ? (
                        <svg className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    ): (
                        "Enviar"
                    )}
                </button>                      
            </form>
        </div>
    );
}



export default Form;