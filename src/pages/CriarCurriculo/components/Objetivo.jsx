function Objetivo({ dados, setDados }) {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Objetivo</h2>

            <div className="mb-6 border p-4 rounded-lg bg-white shadow-sm">
                <label className="block text-[#2E2E2E] font-medium mb-2">Qual área deseja ingressar</label>
                <input
                    type="text"
                    value={dados}
                    onChange={(e) => setDados(e.target.value || "")}
                    placeholder="Ex: Programador Full Stack"
                    className="w-full p-3 border rounded-lg"
                />
            </div>
        </section>
    );
}

export default Objetivo;