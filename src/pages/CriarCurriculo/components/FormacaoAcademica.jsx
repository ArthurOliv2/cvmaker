function FormacaoAcademica({ dados, setDados }) {
    const adicionarFormacao = () => {
        setDados([...dados, { curso: "", universidade: "", status: "cursando" }]);
    };

    const atualizarCampo = (index, campo, valor) => {
        const novas = [...dados];
        novas[index][campo] = valor;
        setDados(novas);
    };

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Formação Acadêmica</h2>

            {dados.map((formacao, index) => (
                <div key={index} className="mb-6 border p-4 rounded-lg bg-white shadow-sm">
                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Nome do curso</label>
                        <input
                            type="text"
                            value={formacao.curso}
                            onChange={(e) => atualizarCampo(index, "curso", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: Engenharia de Software"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Universidade</label>
                        <input
                            type="text"
                            value={formacao.universidade}
                            onChange={(e) => atualizarCampo(index, "universidade", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: Universidade Federal de..."
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-2">Status</label>
                        <select
                            value={formacao.status}
                            onChange={(e) => atualizarCampo(index, "status", e.target.value)}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="cursando">Cursando</option>
                            <option value="completo">Completo</option>
                            <option value="incompleto">Incompleto</option>
                        </select>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={adicionarFormacao}
                className="text-[#0097B2] font-semibold hover:underline"
            >
                + Adicionar outra formação
            </button>
        </section>
    );
}

export default FormacaoAcademica;
