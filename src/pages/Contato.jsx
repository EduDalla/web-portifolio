import { useState } from "react";

export default function Contato() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nome: ${nome} \nEmail: ${email} \nMensagem: ${mensagem}`);
        console.log(`Nome: ${nome} \nEmail: ${email} \nMensagem: ${mensagem}`)
        setNome('');
        setEmail('');
        setMensagem('');
    }


    return (
        <>
        <div className="flex justify-center w-full max-w-screen-md mx-auto font-semibold text-xl md:text-2xl lg:text-3xl uppercase mt-4 md:mt-6">
            <h2>Entre em contato comigo</h2>
        </div>
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col w-2/4" action="https://getform.io/f/bvregjqb" method="POST">
                <div className="flex flex-col">
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        className="text-black rounded mt-2 h-8"
                        value={nome}
                        onChange={ (e) => setNome(e.target.value)}
                        />
                </div>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="text-black rounded mt-2 h-8"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea 
                        id="mensagem" 
                        cols="30" 
                        rows="10" 
                        className="text-black rounded text-field resize-y min-h-32 max-h-80 reveal-up mt-2"
                        value={mensagem}
                        onChange={ (e) => setMensagem(e.target.value)}
                        >
                    </textarea>
                </div>
                <button type="submit" className="bg-orange-600 mt-5 text-white p-2 rounded-md">Enviar</button>
            </form>
        </div>
        </>
    )
}