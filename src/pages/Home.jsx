import Navbar from "../components/NavBar"
import avatar_curriculo from "../assets/avatar_curriculo.png"
import { Link } from "react-router-dom";

function Home() {
    return(
        <>
            <Navbar/>
            <section className="bg-[#F9FBFC] px-6 pt-16 pb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Texto à esquerda */}
            <div className="max-w-xl w-full md:w-1/2 text-left">
                <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#2E2E2E] leading-tight mb-4">
                    Crie seu currículo <br className="hidden sm:block" />
                    profissional em minutos
                </h1>
                <p className="text-[#6C757D] text-base md:text-lg font-sans mb-6">
                    Fácil, rápido e gratuito. Preencha seus dados e gere um currículo em PDF formatado.
                </p>
                <Link
                    to="/criar-curriculo"
                    className="inline-block bg-[#0097B2] hover:bg-[#007A8C] text-white text-lg font-poppins font-semibold px-8 py-3 rounded-lg transition duration-200"
                >
                    Começar
                </Link>
            </div>

            {/* Imagem à direita */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                    src={avatar_curriculo}
                    alt="Ilustração de currículo"
                    className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] object-contain"
                />
            </div>
            </section>
        </>
    );
}


export default Home;