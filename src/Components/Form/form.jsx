function Form() {
    

    return (  
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Nome' required id="nome"
                    className="input-contato" />
                <input type='email' placeholder='Email' required id="email"
                    className="input-contato invalid:outline-red-500" />
                <input type='text' placeholder='Assunto' required id="assunto"
                    className="input-contato" />
                <textarea placeholder='Mensagem' required id="mensagem" rows="6"
                    className="w-full rounded-md px-4 focus:text-white-100 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                <button type='submit' className="text-white-100 bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Enviar</button>                      
            </form>
        </div>
    );
}

export default Form;