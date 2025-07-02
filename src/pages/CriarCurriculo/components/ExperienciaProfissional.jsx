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
                atualmente: false, 
                atividades: [""],
            },
        ]);
    };

    const removerExperiencia = (index) => {
        const novas = [...dados];
        novas.splice(index, 1);
        setDados(novas);
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

    const removerAtividade = (expIndex, atvIndex) => {
        const novas = [...dados];
        novas[expIndex].atividades.splice(atvIndex, 1);
        setDados(novas);
    };

    const alternarAtualmente = (index) => {
        const novas = [...dados];
        const atual = novas[index].atualmente;
        novas[index].atualmente = !atual;

        if (!atual) {
            novas[index].fimMes = "";
            novas[index].fimAno = "";
        }

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
                <div key={index} className="relative bg-white border rounded-lg shadow-sm p-4 mb-6">
                    <button
                        type="button"
                        onClick={() => removerExperiencia(index)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-lg font-bold cursor-pointer"
                        title="Remover experiência"
                    >
                        X
                    </button>

                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Nome da empresa</label>
                        <input
                            type="text"
                            value={exp.empresa}
                            onChange={(e) => atualizarCampo(index, "empresa", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: Empresa X"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Cargo ocupado</label>
                        <input
                            type="text"
                            value={exp.cargo}
                            onChange={(e) => atualizarCampo(index, "cargo", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: Desenvolvedor Front-end"
                        />
                    </div>

                    <div className="items-center grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                            <label className="block mb-1">Mês de início</label>
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
                            <label className="block mb-1">Ano de início</label>
                            <select
                                className="w-full p-3 border rounded-lg"
                                value={exp.inicioAno}
                                onChange={(e) => atualizarCampo(index, "inicioAno", e.target.value)}
                            >
                                <option value="">Selecione</option>
                                {anos.map((a) => <option key={a}>{a}</option>)}
                            </select>
                        </div>

                        {exp.atualmente ? (
                            <div className="col-span-2 md:col-span-2 md:col-start-3 mb-4 h-full flex justify-center">
                                <div className="w-full flex items-center justify-center border rounded-lg bg-[#E0F7FA] text-[#007A8C] text-md font-medium shadow-sm text-center">
                                    Atualmente trabalhando nesta empresa
                                </div>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <label className="block mb-1">Mês de término</label>
                                    <select
                                        className="w-full p-3 border rounded-lg"
                                        value={exp.fimMes}
                                        onChange={(e) => atualizarCampo(index, "fimMes", e.target.value)}
                                    >
                                        <option value="">Selecione</option>
                                        {meses.map((m) => <option key={m}>{m}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1">Ano de término</label>
                                    <select
                                        className="w-full p-3 border rounded-lg"
                                        value={exp.fimAno}
                                        onChange={(e) => atualizarCampo(index, "fimAno", e.target.value)}
                                    >
                                        <option value="">Selecione</option>
                                        {anos.map((a) => <option key={a}>{a}</option>)}
                                    </select>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={exp.atualmente}
                                onChange={() => alternarAtualmente(index)}
                            />
                            Trabalho atualmente nesta empresa
                        </label>
                    </div>

                    <div className="mb-2">
                        <label className="block text-[#2E2E2E] font-medium mb-2">O que você fazia na empresa?</label>
                        {exp.atividades.map((atv, atvIndex) => (
                            <div key={atvIndex} className="flex gap-2 items-center mb-2">
                                <input
                                    value={atv}
                                    onChange={(e) => atualizarAtividade(index, atvIndex, e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder={`Atividade ${atvIndex + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => removerAtividade(index, atvIndex)}
                                    className="text-gray-400 font-bold text-xl hover:text-red-700 cursor-pointer"
                                    title="Remover atividade"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => adicionarAtividade(index)}
                            type="button"
                            className="text-[#0097B2] font-semibold hover:underline cursor-pointer"
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
                className="text-[#0097B2] font-semibold hover:underline cursor-pointer"
            >
                + Adicionar outra experiência
            </button>
        </section>
    );
}

export default ExperienciaProfissional;