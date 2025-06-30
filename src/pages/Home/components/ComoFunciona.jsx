function ComoFunciona() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center text-[#2E2E2E] mb-12">
                    Como funciona?
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center p-6 bg-[#F9FBFC] rounded-xl shadow-sm hover:shadow-md transition">
                        <span className="text-5xl mb-4">📝</span>
                        <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Preencha suas informações</h3>
                        <p className="text-[#6C757D] text-base">
                            Adicione seus dados, experiências, formações e habilidades de forma simples.
                        </p>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="flex flex-col items-center p-6 bg-[#F9FBFC] rounded-xl shadow-sm hover:shadow-md transition">
                        <span className="text-5xl mb-4">🎨</span>
                        <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Personalize seu currículo</h3>
                        <p className="text-[#6C757D] text-base">
                            Escolha o que incluir, organize as seções e veja tudo formatado automaticamente.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center p-6 bg-[#F9FBFC] rounded-xl shadow-sm hover:shadow-md transition">
                        <span className="text-5xl mb-4">📥</span>
                        <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Baixe em PDF</h3>
                        <p className="text-[#6C757D] text-base">
                            Com um clique, gere seu currículo em PDF, pronto para enviar onde quiser.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComoFunciona;
