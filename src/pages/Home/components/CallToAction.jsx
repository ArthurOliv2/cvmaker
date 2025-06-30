import { Link } from "react-router-dom";

function CallToAction() {
    return(
        <section className="bg-[#F9FBFC] py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-[#2E2E2E] font-poppins font-bold mb-6">
                    Pronto para criar seu currículo?
                </h2>
                <p className="text-lg md:text-xl font-roboto mb-8">
                    Leva menos de 10 minutos e é totalmente gratuito.
                </p>
                <Link
                    to="/criar-curriculo"
                    className="inline-block bg-[#0097B2] text-white hover:bg-[#007A8C] transition text-lg md:text-xl font-poppins font-semibold px-8 py-4 rounded-full transition duration-200"
                >
                    Começar agora
                </Link>
            </div>
        </section>
    );
}

export default CallToAction;
