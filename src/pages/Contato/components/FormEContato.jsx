import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

function FormEContato() {
    return (
        <section className="px-6 pb-20 bg-[#F9FBFC]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Formulário */}
                <form className="bg-white p-8 rounded-lg shadow-md flex-1">
                    <div className="mb-4">
                        <label className="block mb-2 text-[#2E2E2E] font-medium">Nome</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                            placeholder="Seu nome"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-[#2E2E2E] font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-[#2E2E2E] font-medium">Mensagem</label>
                        <textarea
                            className="w-full p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                            placeholder="Escreva sua mensagem..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#0097B2] cursor-pointer hover:bg-[#007A8C] text-white font-semibold py-3 px-6 rounded-lg transition"
                    >
                        Enviar mensagem
                    </button>
                </form>

                {/* Informações de contato */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-[#2E2E2E] mb-2 flex items-center gap-3">
                            <Mail className="w-6 h-6 text-[#0097B2]" />
                            Email de contato
                        </h3>
                        <p className="text-[#6C757D] text-base">contato@cvmaker.com</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#2E2E2E] mb-2 flex items-center gap-3">
                            <Phone className="w-6 h-6 text-[#0097B2]" />
                            WhatsApp
                        </h3>
                        <p className="text-[#6C757D] text-base">(21) 97217-0432</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Redes Sociais</h3>
                        <div className="flex gap-4 mt-2">
                            <a href="https://instagram.com/biro_op1" target="_blank" className="text-[#0097B2] hover:text-[#007A8C]">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com/share/16cdqbJkkRp" target="_blank" className="text-[#0097B2] hover:text-[#007A8C]">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="https://Linkedin.com/in/arthur-oliveira-pires-marinho-correia-0a3b17334" target="_blank" className="text-[#0097B2] hover:text-[#007A8C]">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/ArthurOliv2" target="_blank" className="text-[#0097B2] hover:text-[#007A8C]">
                                <FaGithub className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Entrar em Contato</h3>
                        <p className="text-[#6C757D] text-base">
                            <strong>Estamos aqui para ajudar você a criar o currículo perfeito!</strong> <br /> Tem dúvidas, sugestões ou precisa de suporte ? Fale com a gente! <br /> Preencha o formulário abaixo ou envie uma mensagem - vamos adorar conversar com você
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormEContato;
