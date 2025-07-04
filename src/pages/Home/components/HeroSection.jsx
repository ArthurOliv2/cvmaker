import { Link } from "react-router-dom";
import avatar_curriculo from "../../../assets/avatar_curriculo.png"

function HeroSection() {
    return(
        <section className="bg-[#F9FBFC] py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
                
                <div className="w-full md:w-1/2 text-left">
                    <h1 className="text-5xl md:text-6xl font-poppins font-extrabold text-[#2E2E2E] leading-tight mb-6">
                        Crie seu currículo <br className="hidden sm:block" />
                        profissional em minutos
                    </h1>
                    <p className="text-[#6C757D] text-lg md:text-xl font-roboto mb-8">
                        Fácil, rápido e gratuito. Preencha seus dados e gere um currículo em PDF formatado.
                    </p>
                    <Link
                        to="/criar-curriculo"
                        className="inline-block bg-[#0097B2] hover:bg-[#007A8C] text-white text-xl md:text-2xl font-poppins font-semibold px-10 py-4 rounded-full transition duration-200"
                    >
                        Começar
                    </Link>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={avatar_curriculo}
                        alt="Ilustração de currículo"
                        className="w-[320px] sm:w-[400px] md:w-[500px] lg:w-[540px] xl:w-[580px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;