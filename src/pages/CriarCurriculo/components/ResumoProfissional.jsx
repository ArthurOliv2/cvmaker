function ResumoProfissional({ dados, setDados }) {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Resumo Profissional</h2>

            <div className="mb-6 border p-4 rounded-lg bg-white shadow-sm">
                <label className="block text-[#2E2E2E] font-medium mb-2">Faça um resumo seu como profissional</label>
                <textarea
                    value={dados}
                    onChange={(e) => setDados(e.target.value)}
                    className="w-full p-3 border rounded-lg h-28 resize-none"
                    placeholder="Ex: Desenvolvedor com conhecimento em React, buscando aplicar habilidades em projetos reais..."
                ></textarea>
            </div>
        </section>
    );
}

export default ResumoProfissional;
