import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


function Contato() {
    return (
        <>
        <NavBar />
        <section className="pt-28 pb-20 px-6 bg-[#F9FBFC]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] font-poppins mb-4">
                        Fale com a gente
                    </h1>
                    <p className="text-[#6C757D] max-w-2xl mx-auto font-roboto text-base md:text-lg">
                        Estamos aqui para ajudar. Envie sua dúvida, sugestão ou mensagem!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
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
                            className="bg-[#0097B2] hover:bg-[#007A8C] text-white font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Enviar mensagem
                        </button>
                    </form>

                    <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-[#2E2E2E] mb-2 flex items-center gap-3">
                                <Mail className="w-6 h-6 text-[#0097B2]" />
                                Email de contato
                            </h3>
                            <p className="text-[#6C757D] text-base">contato@curriculopro.com</p>
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
                                <a href="#" className="text-[#0097B2] hover:text-[#007A8C]">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-[#0097B2] hover:text-[#007A8C]">
                                    <Facebook className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Contato;
