import {
    GraduationCap,
    Briefcase,
    RotateCcw,
    HelpCircle
} from "lucide-react";

function QuemSomos() {
    return (
        <section className="py-10 px-6 bg-[#F9FBFC] max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2E2E2E] mb-10">
                Para quem criamos o CVMaker
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Estudantes */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center border border-[#0097B2] transition">
                    <GraduationCap className="w-10 h-10 mx-auto text-[#0097B2] mb-4" />
                    <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Estudantes</h3>
                    <p className="text-[#6C757D] text-sm">
                        Jovens em busca do primeiro estágio ou vaga de trainee.
                    </p>
                </div>

                {/* Autônomos */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center border border-[#0097B2] transition">
                    <Briefcase className="w-10 h-10 mx-auto text-[#0097B2] mb-4" />
                    <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Autônomos</h3>
                    <p className="text-[#6C757D] text-sm">
                        Profissionais independentes que querem apresentar sua experiência com clareza.
                    </p>
                </div>

                {/* Recolocação */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center border border-[#0097B2] transition">
                    <RotateCcw className="w-10 h-10 mx-auto text-[#0097B2] mb-4" />
                    <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Recolocação</h3>
                    <p className="text-[#6C757D] text-sm">
                        Quem está voltando ao mercado de trabalho após um tempo fora.
                    </p>
                </div>

                {/* Iniciantes */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center border border-[#0097B2] transition">
                    <HelpCircle className="w-10 h-10 mx-auto text-[#0097B2] mb-4" />
                    <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Iniciantes</h3>
                    <p className="text-[#6C757D] text-sm">
                        Pessoas que não sabem por onde começar e precisam de ajuda para dar o primeiro passo.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default QuemSomos;