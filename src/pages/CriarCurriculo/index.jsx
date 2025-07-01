import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer";

import { useState } from "react";

function CriarCurriculo() {
    const [formacoes, setFormacoes] = useState([
        { curso: "", universidade: "", status: "cursando" },
    ]);

    const adicionarFormacao = () => {
        setFormacoes([...formacoes, { curso: "", universidade: "", status: "cursando" }]);
    };

    return (
        <>
            <NavBar />
            <main className="pt-28 pb-20 px-6 bg-[#F9FBFC] max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold font-poppins text-[#2E2E2E] mb-4 text-center">
                    Criação de Currículo
                </h1>
                <p className="text-[#6C757D] text-base font-roboto text-center mb-10">
                    Preencha os campos abaixo. Sinta-se à vontade para pular o que quiser!
                </p>

                {/* PERFIL */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Perfil</h2>

                    <div className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-1">Nome completo</label>
                                <input
                                    type="text"
                                    placeholder="Ex: João da Silva"
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-1">Idade</label>
                                <input
                                    type="text"
                                    placeholder="Ex: 22"
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-1">Cidade</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Maricá"
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-1">Bairro</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Centro"
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Ex: joao@email.com"
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-1">Número de telefone</label>
                                <input
                                    type="text"
                                    placeholder="(21) 12345-6789"
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESUMO PROFISSIONAL */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Resumo Profissional</h2>
                    <div className="mb-6 border p-4 rounded-lg bg-white shadow-sm">
                        <div className="mb-2">
                            <label className="block text-[#2E2E2E] font-medium mb-2">O que você fazia na empresa?</label>
                            <textarea
                                className="w-full p-3 border rounded-lg h-28 resize-none"
                                placeholder="Liste suas atividades na empresa..."
                            ></textarea>
                        </div>
                    </div>
                </section>

                {/* FORMAÇÃO ACADÊMICA */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Formação Acadêmica</h2>

                    {formacoes.map((f, index) => (
                        
                        <div key={index} className="mb-6 border p-4 rounded-lg bg-white shadow-sm">
                            <div className="mb-4">
                                <label className="block text-[#2E2E2E] font-medium mb-2">Nome do curso</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Análise e Desenvolvimento de Sistemas"
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#2E2E2E] font-medium mb-2">Universidade</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Universidade Federal de..."
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-2">Status</label>
                                <select className="w-full p-3 border rounded-lg">
                                    <option value="completo">Completo</option>
                                    <option value="incompleto">Incompleto</option>
                                    <option value="cursando">Cursando</option>
                                </select>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={adicionarFormacao}
                        type="button"
                        className="text-[#0097B2] font-semibold hover:underline"
                    >
                        + Adicionar outra formação
                    </button>
                </section>

                {/* EXPERIÊNCIA PROFISSIONAL */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Experiência Profissional</h2>

                    <div className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                        <div className="mb-4">
                            <label className="block text-[#2E2E2E] font-medium mb-2">Nome da empresa</label>
                            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Ex: Google" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#2E2E2E] font-medium mb-2">Cargo ocupado</label>
                            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Ex: Desenvolvedor Front-end" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-2">Mês de início</label>
                                <select className="w-full p-3 border rounded-lg">
                                    {["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"].map((mes) => (
                                        <option key={mes}>{mes}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-2">Ano de início</label>
                                <select className="w-full p-3 border rounded-lg">
                                    {Array.from({ length: 40 }, (_, i) => 2025 - i).map((ano) => (
                                        <option key={ano}>{ano}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-2">Mês de término</label>
                                <select className="w-full p-3 border rounded-lg">
                                    <option>Atualmente</option>
                                    {["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"].map((mes) => (
                                        <option key={mes}>{mes}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[#2E2E2E] font-medium mb-2">Ano de término</label>
                                <select className="w-full p-3 border rounded-lg">
                                    <option>Atualmente</option>
                                    {Array.from({ length: 40 }, (_, i) => 2025 - i).map((ano) => (
                                        <option key={ano}>{ano}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="block text-[#2E2E2E] font-medium mb-2">O que você fazia na empresa?</label>
                            <textarea
                                className="w-full p-3 border rounded-lg h-28 resize-none"
                                placeholder="Liste suas atividades na empresa..."
                            ></textarea>
                        </div>
                        <p className="text-sm text-[#6C757D]">Recomenda-se escrever pelo menos 5 responsabilidades ou realizações.</p>
                    </div>

                    <button
                        type="button"
                        className="text-[#0097B2] font-semibold hover:underline"
                    >
                        + Adicionar outra experiência
                    </button>
                </section>

                {/* IDIOMAS */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Idiomas</h2>

                    <div className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                        <div className="mb-4">
                            <label className="block text-[#2E2E2E] font-medium mb-2">Idioma</label>
                            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Ex: Inglês" />
                        </div>
                        <div>
                            <label className="block text-[#2E2E2E] font-medium mb-2">Nível</label>
                            <select className="w-full p-3 border rounded-lg">
                                <option>Básico</option>
                                <option>Intermediário</option>
                                <option>Avançado</option>
                                <option>Fluente</option>
                                <option>Nativo</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="text-[#0097B2] font-semibold hover:underline"
                    >
                        + Adicionar outro idioma
                    </button>
                </section>

                {/* FORMAÇÃO COMPLEMENTAR */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#2E2E2E] font-poppins mb-4">Formação Complementar</h2>

                    <div className="bg-white border rounded-lg shadow-sm p-4 mb-6">
                        <div className="mb-4">
                            <label className="block text-[#2E2E2E] font-medium mb-2">Competência</label>
                            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Ex: UX Design" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#2E2E2E] font-medium mb-2">Nome do curso</label>
                            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Ex: Curso intensivo de..." />
                        </div>
                        <div>
                            <label className="block text-[#2E2E2E] font-medium mb-2">Carga horária (em horas)</label>
                            <input type="number" className="w-full p-3 border rounded-lg" placeholder="Ex: 40" />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="text-[#0097B2] font-semibold hover:underline"
                    >
                        + Adicionar outra formação complementar
                    </button>
                </section>

            </main>
            <Footer />
        </>
    );
}

export default CriarCurriculo;