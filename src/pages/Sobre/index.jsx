import Navbar from "../../components/NavBar"
import HeroSection from "./components/HeroSection";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Sobre() {
    return (
        <>
            <Navbar />
            <HeroSection />
            

            {/* Quem Somos */}
            <section className="py-20 px-6 bg-white flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                    alt="Quem somos"
                    className="w-64 h-64 object-contain"
                />
                <div className="text-left">
                    <h2 className="text-3xl font-poppins font-bold mb-4 text-[#2E2E2E]">Quem somos</h2>
                    <p className="text-[#6C757D] text-base font-roboto max-w-xl">
                        Criamos o CurrículoPro com o objetivo de tornar a criação de currículos mais acessível e moderna.
                        Muitas ferramentas são pagas ou complicadas. Aqui é simples, grátis e direto ao ponto.
                    </p>
                </div>
            </section>

            {/* Por que criamos isso */}
            <section className="bg-[#F9FBFC] py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-poppins font-bold text-[#2E2E2E] mb-10">Por que criamos isso?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-xl font-semibold mb-2">Inclusão no mercado</h3>
                            <p className="text-[#6C757D] text-sm font-roboto">
                                Queremos ajudar quem busca a primeira oportunidade ou uma recolocação.
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-xl font-semibold mb-2">Sem complicações</h3>
                            <p className="text-[#6C757D] text-sm font-roboto">
                                Nada de templates travados ou editores difíceis. Aqui é tudo prático.
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">🧠</div>
                            <h3 className="text-xl font-semibold mb-2">Acesso rápido</h3>
                            <p className="text-[#6C757D] text-sm font-roboto">
                                Online, gratuito e sem cadastro. Comece a criar seu currículo agora mesmo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mensagem do criador */}
            <section className="bg-[#F9FBFC] py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-light italic text-[#2E2E2E] mb-6">
                        “Esse projeto foi desenvolvido com carinho para ajudar qualquer pessoa a se destacar no mercado de trabalho.
                        Fiz isso pensando em quem precisa de algo simples, bonito e que funcione. Boa sorte na sua jornada!”
                    </p>
                    <span className="text-[#6C757D] font-bold text-sm">— Biro Biro</span>
                </div>
                <Link
                    to="/criar-curriculo"
                    className="inline-block bg-[#0097B2] text-white hover:bg-[#007A8C] transition text-lg md:text-xl font-poppins font-semibold px-8 py-4 rounded-full mt-10 transition duration-200"
                >
                    Começar agora
                </Link>
            </section>
            <Footer />
        </>
    );
}

export default Sobre;