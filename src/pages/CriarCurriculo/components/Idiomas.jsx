function Idiomas({ dados, setDados }) {
    const adicionarIdioma = () => {
        setDados([...dados, { idioma: "", nivel: "" }]);
    };

    const atualizarCampo = (index, campo, valor) => {
        const novos = [...dados];
        novos[index][campo] = valor;
        setDados(novos);
    };

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Idiomas</h2>

            {dados.map((item, index) => (
                <div key={index} className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                    <div className="mb-4">
                        <label className="block text-[#2E2E2E] font-medium mb-2">Idioma</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg"
                            placeholder="Ex: Inglês"
                            value={item.idioma}
                            onChange={(e) => atualizarCampo(index, "idioma", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-2">Nível</label>
                        <select
                            className="w-full p-3 border rounded-lg"
                            value={item.nivel}
                            onChange={(e) => atualizarCampo(index, "nivel", e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option>Básico</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                            <option>Fluente</option>
                            <option>Nativo</option>
                        </select>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={adicionarIdioma}
                className="text-[#0097B2] font-semibold hover:underline"
            >
                + Adicionar outro idioma
            </button>
        </section>
    );
}

export default Idiomas;
