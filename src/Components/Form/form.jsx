function Form() {
    const nome = document.documentElement.getElementsByTagName('nome')
    const email = document.documentElement.getElementsByTagName('email')
    const assunto = document.documentElement.getElementsByTagName('assunto')
    const mensagem = document.documentElement.getElementsByTagName('mensagem') 

    return (  
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Nome' id="nome"
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <input type='email' placeholder='Email' id="email"
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <input type='text' placeholder='Assunto' id="assunto"
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <textarea placeholder='Mensagem' id="mensagem" rows="6"
                    className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                <button type='submit' className="text-white-100 bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Enviar</button>                      
            </form>
        </div>
    );
}

export default Form;