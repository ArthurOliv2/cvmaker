function ExperienciaProfissional({ dados, setDados }) {
    const adicionarExperiencia = () => {
        setDados([
            ...dados,
            {
                empresa: "",
                cargo: "",
                inicioMes: "",
                inicioAno: "",
                fimMes: "",
                fimAno: "",
                atividades: [""],
            },
        ]);
    };

    const atualizarCampo = (index, campo, valor) => {
        const novas = [...dados];
        novas[index][campo] = valor;
        setDados(novas);
    };

    const atualizarAtividade = (expIndex, atvIndex, valor) => {
        const novas = [...dados];
        novas[expIndex].atividades[atvIndex] = valor;
        setDados(novas);
    };

    const adicionarAtividade = (expIndex) => {
        const novas = [...dados];
        novas[expIndex].atividades.push("");
        setDados(novas);
    };

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const anos = Array.from({ length: 40 }, (_, i) => String(2025 - i));

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Experiência Profissional</h2>

            {dados.map((exp, index) => (
                <div key={index} className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Nome da empresa</label>
                        <input
                            type="text"
                            value={exp.empresa}
                            onChange={(e) => atualizarCampo(index, "empresa", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Cargo ocupado</label>
                        <input
                            type="text"
                            value={exp.cargo}
                            onChange={(e) => atualizarCampo(index, "cargo", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                            <label className="block mb-1">Mês início</label>
                            <select
                                className="w-full p-3 border rounded-lg"
                                value={exp.inicioMes}
                                onChange={(e) => atualizarCampo(index, "inicioMes", e.target.value)}
                            >
                                <option value="">Selecione</option>
                                {meses.map((m) => <option key={m}>{m}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Ano início</label>
                            <select
                                className="w-full p-3 border rounded-lg"
                                value={exp.inicioAno}
                                onChange={(e) => atualizarCampo(index, "inicioAno", e.target.value)}
                            >
                                <option value="">Selecione</option>
                                {anos.map((a) => <option key={a}>{a}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Mês término</label>
                            <select
                                className="w-full p-3 border rounded-lg"
                                value={exp.fimMes}
                                onChange={(e) => atualizarCampo(index, "fimMes", e.target.value)}
                            >
                                <option value="">Atualmente</option>
                                {meses.map((m) => <option key={m}>{m}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Ano término</label>
                            <select
                                className="w-full p-3 border rounded-lg"
                                value={exp.fimAno}
                                onChange={(e) => atualizarCampo(index, "fimAno", e.target.value)}
                            >
                                <option value="">Atualmente</option>
                                {anos.map((a) => <option key={a}>{a}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="mb-2">
                        <label className="block text-[#2E2E2E] font-medium mb-2">O que você fazia na empresa?</label>
                        {exp.atividades.map((atv, atvIndex) => (
                            <input
                                key={atvIndex}
                                value={atv}
                                onChange={(e) => atualizarAtividade(index, atvIndex, e.target.value)}
                                className="w-full p-2 mb-2 border rounded-lg"
                                placeholder={`Atividade ${atvIndex + 1}`}
                            />
                        ))}
                        <button
                            onClick={() => adicionarAtividade(index)}
                            type="button"
                            className="text-[#0097B2] font-semibold hover:underline"
                        >
                            + Adicionar outra atividade
                        </button>
                        <p className="text-sm text-[#6C757D] mt-1">Recomenda-se pelo menos 5 atividades.</p>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={adicionarExperiencia}
                className="text-[#0097B2] font-semibold hover:underline"
            >
                + Adicionar outra experiência
            </button>
        </section>
    );
}

export default ExperienciaProfissional;
