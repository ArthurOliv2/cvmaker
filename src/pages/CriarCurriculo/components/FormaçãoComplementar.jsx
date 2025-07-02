function FormacaoComplementar({ dados, setDados }) {
    const adicionarCurso = () => {
        setDados([...dados, { competencia: "", nomeCurso: "", horas: "" }]);
    };

    const atualizarCampo = (index, campo, valor) => {
        const novos = [...dados];
        novos[index][campo] = valor;
        setDados(novos);
    };

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Formação Complementar</h2>

            {dados.map((curso, index) => (
                <div key={index} className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Competência</label>
                        <input
                            type="text"
                            value={curso.competencia}
                            onChange={(e) => atualizarCampo(index, "competencia", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: UX Design"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Nome do curso</label>
                        <input
                            type="text"
                            value={curso.nomeCurso}
                            onChange={(e) => atualizarCampo(index, "nomeCurso", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: Curso intensivo de..."
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-2">Carga horária (em horas)</label>
                        <input
                            type="number"
                            value={curso.horas}
                            onChange={(e) => atualizarCampo(index, "horas", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: 40"
                        />
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={adicionarCurso}
                className="text-[#0097B2] font-semibold hover:underline"
            >
                + Adicionar outra formação complementar
            </button>
        </section>
    );
}

export default FormacaoComplementar;
