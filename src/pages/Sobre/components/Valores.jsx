import {
    Globe,
    Sparkles,
    Scale,
    HandCoins,
    HeartHandshake,
} from "lucide-react";

function Valores() {
    return(
        <section className="py-10 px-6 bg-[#F9FBFC] mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-10">Nossos valores</h2>

            <div className="flex justify-center items-start gap-6 flex-wrap lg:flex-nowrap">
                <div className="bg-white flex flex-col items-center border border-[#0097B2] rounded-lg p-6 w-44 shadow-sm hover:shadow-md transition">
                    <Globe className="w-10 h-10 text-[#0097B2] mb-4" />
                    <h3 className="text-lg font-semibold text-[#2E2E2E]">Acessibilidade</h3>
                </div>
                <div className="bg-white flex flex-col items-center border border-[#0097B2] rounded-lg p-6 w-44 shadow-sm hover:shadow-md transition">
                    <Sparkles className="w-10 h-10 text-[#0097B2] mb-4" />
                    <h3 className="text-lg font-semibold text-[#2E2E2E]">Simplicidade</h3>
                </div>
                <div className="bg-white flex flex-col items-center border border-[#0097B2] rounded-lg p-6 w-44 shadow-sm hover:shadow-md transition">
                    <Scale className="w-10 h-10 text-[#0097B2] mb-4" />
                    <h3 className="text-lg font-semibold text-[#2E2E2E]">Ética</h3>
                </div>
                <div className="bg-white flex flex-col items-center border border-[#0097B2] rounded-lg p-6 w-44 shadow-sm hover:shadow-md transition">
                    <HandCoins className="w-10 h-10 text-[#0097B2] mb-4" />
                    <h3 className="text-lg font-semibold text-[#2E2E2E]">Gratuidade</h3>
                </div>
                <div className="bg-white flex flex-col items-center border border-[#0097B2] rounded-lg p-6 w-44 shadow-sm hover:shadow-md transition">
                    <HeartHandshake className="w-10 h-10 text-[#0097B2] mb-4" />
                    <h3 className="text-lg font-semibold text-[#2E2E2E]">Empatia</h3>
                </div>
            </div>
        </section>


    );
}

export default Valores;