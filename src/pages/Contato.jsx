import { useState } from "react";

export default function Contato() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);
    const emailFixo = "dallabella.code@gmail.com"; // Email fixo

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("email", emailFixo); // Usa o email fixo diretamente
        formData.append("mensagem", mensagem);

        try {
            const response = await fetch("https://getform.io/f/bvregjqb", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setEnviado(true);
                setNome('');
                setMensagem('');
                setTimeout(() => setEnviado(false), 5000); // Feedback desaparece após 5 segundos
            } else {
                alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
        }
    };

    return (
        <>
            <div className="flex justify-center w-full max-w-screen-md mx-auto font-bold text-2xl md:text-3xl lg:text-4xl text-white uppercase mt-8 md:mt-10">
                <h2>Entre em contato comigo</h2>
            </div>
            <div className="flex justify-center mt-6">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full max-w-lg bg-gray-200 shadow-lg rounded-lg p-6 md:p-8 space-y-6"
                >
                    <div className="flex flex-col">
                        <label htmlFor="nome" className="text-gray-700 font-medium">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="nome"
                            className="text-gray-900 rounded border border-gray-300 mt-2 h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mensagem" className="text-gray-700 font-medium">
                            Mensagem:
                        </label>
                        <textarea
                            id="mensagem"
                            cols="30"
                            rows="5"
                            className="text-gray-900 rounded border border-gray-300 mt-2 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder="Digite sua mensagem"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 transition text-white font-medium py-3 px-6 rounded-lg shadow-md"
                    >
                        Enviar
                    </button>
                    {enviado && (
                        <div className="mt-4 text-green-600 font-semibold">
                            Mensagem enviada com sucesso!
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}
