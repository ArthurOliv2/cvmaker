function Perfil({ dados, setDados }) {

    function formatarNome(nome) {
        const palavrasMinusculas = ["de", "da", "do", "das", "dos", "e"];
        return nome
            .toLowerCase()
            .split(" ")
            .map((palavra, index) => {
                if (index > 0 && palavrasMinusculas.includes(palavra)) {
                    return palavra;
                }
                return palavra.charAt(0).toUpperCase() + palavra.slice(1);
            })
            .join(" ");
    }

    function formatarTelefone(valor) {
        const digits = valor.replace(/\D/g, '').slice(0, 11);

        if (digits.length === 0) return '';

        const ddd = digits.slice(0, 2);
        const parte1 = digits.slice(2, digits.length <= 10 ? 6 : 7);
        const parte2 = digits.slice(digits.length <= 10 ? 6 : 7);

        let resultado = `(${ddd}`;

        if (digits.length >= 3) {
            resultado += `) ${parte1}`;
        }

        if (parte2) {
            resultado += `-${parte2}`;
        }

        return resultado;
    }

    const estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF",
        "MT", "MS", "MG", "PA", "PB", "PR", "PE", 
        "RS", "RO", "RR", "SC", "SP", "SE", "TO",
        "ES", "GO", "MA", "PI", "RJ", "RN",
    ]

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Perfil</h2>

            <div className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                {/* Linha 1: Nome e Idade */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Nome completo</label>
                        <input
                            type="text"
                            value={dados.nome}
                            onChange={(e) => setDados({ ...dados, nome: e.target.value })}
                            placeholder="Ex: João da Silva"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Idade</label>
                        <input
                            type="number"
                            value={dados.idade}
                            onChange={(e) => setDados({ ...dados, idade: e.target.value })}
                            placeholder="Ex: 22"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                </div>

                {/* Linha 2: Cidade e Bairro */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Cidade</label>
                        <input
                            type="text"
                            value={dados.cidade}
                            onChange={(e) => setDados({ ...dados, cidade: formatarNome(e.target.value) })}
                            placeholder="Ex: Maricá"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Bairro</label>
                        <input
                            type="text"
                            value={dados.bairro}
                            onChange={(e) => setDados({ ...dados, bairro: formatarNome(e.target.value) })}
                            placeholder="Ex: Centro"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Estado (UF)</label>
                        <select
                            value={dados.estado || ""}
                            onChange={(e) => setDados({ ...dados, estado: e.target.value })}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Selecione</option>
                            {estados.map((uf) => (
                                <option key={uf} value={uf}>{uf}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Linha 3: Email e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={dados.email}
                            onChange={(e) => setDados({ ...dados, email: e.target.value })}
                            placeholder="Ex: joao@email.com"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Número de telefone</label>
                        <input 
                            type="text"
                            value={dados.telefone}
                            onChange={(e) => setDados({ ...dados, telefone: formatarTelefone(e.target.value) })}
                            placeholder="(21) 91234-5678"
                            className="w-full p-3 border rounded-lg"    
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Perfil;