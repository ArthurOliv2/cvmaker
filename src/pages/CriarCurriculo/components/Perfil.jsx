function Perfil({ dados, setDados }) {
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
                            type="text"
                            value={dados.idade}
                            onChange={(e) => setDados({ ...dados, idade: e.target.value })}
                            placeholder="Ex: 22"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                </div>

                {/* Linha 2: Cidade e Bairro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Cidade</label>
                        <input
                            type="text"
                            value={dados.cidade}
                            onChange={(e) => setDados({ ...dados, cidade: e.target.value })}
                            placeholder="Ex: Maricá"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-[#2E2E2E] font-medium mb-1">Bairro</label>
                        <input
                            type="text"
                            value={dados.bairro}
                            onChange={(e) => setDados({ ...dados, bairro: e.target.value })}
                            placeholder="Ex: Centro"
                            className="w-full p-3 border rounded-lg"
                        />
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
                            onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
                            placeholder="(21) 12345-6789"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Perfil;