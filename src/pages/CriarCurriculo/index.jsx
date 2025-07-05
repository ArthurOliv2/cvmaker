import NavBar from "../../components/NavBar";
import Perfil from "./components/Perfil";
import Objetivo from "./components/Objetivo";
import ResumoProfissional from "./components/ResumoProfissional";
import FormacaoAcademica from "./components/FormacaoAcademica";
import ExperienciaProfissional from "./components/ExperienciaProfissional";
import Idiomas from "./components/Idiomas";
import FormacaoComplementar from "./components/FormacaoComplementar";
import Footer from "../../components/Footer";

import { PDFDownloadLink } from "@react-pdf/renderer";
import CurriculoPDF from "./components/CurriculoPDF";

import { useState } from "react";

function CriarCurriculo() {
    const [formulario, setFormulario] = useState({
        perfil: {
            nome: "",
            idade: "",
            cidade: "",
            bairro: "",
            estado: "",
            telefone: "",
            email: ""
        },
        objetivo: "",
        resumo: "",
        formacoes: [],
        experiencias: [],
        idiomas: [],
        cursosComplementares: []
    });

    const nomeFormatado = formulario.perfil.nome
        ? formulario.perfil.nome
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .join("-")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        : "sem-nome";

    const dadosMinimosPreenchidos = formulario.perfil.nome.trim() !== "";

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

                <Perfil
                    dados={formulario.perfil}
                    setDados={(novo) => setFormulario(prev => ({ ...prev, perfil: novo }))}
                />

                <Objetivo
                    dados={formulario.objetivo}
                    setDados={(novo) => setFormulario(prev => ({ ...prev, objetivo: novo }))}
                />

                <ResumoProfissional
                    dados={formulario.resumo}
                    setDados={(novo) => setFormulario(prev => ({ ...prev, resumo: novo }))}
                />

                <FormacaoAcademica
                    dados={formulario.formacoes}
                    setDados={(novo) => setFormulario(prev => ({ ...prev, formacoes: novo }))}
                />

                <ExperienciaProfissional
                    dados={formulario.experiencias}
                    setDados={(novo) => setFormulario(prev => ({ ...prev, experiencias: novo }))}
                />

                <Idiomas
                    dados={formulario.idiomas}
                    setDados={(novo) => setFormulario(prev => ({ ...prev, idiomas: novo }))}
                />

                <FormacaoComplementar
                    dados={formulario.cursosComplementares}
                    setDados={(novo) => setFormulario(prev => ({ ...prev, cursosComplementares: novo }))}
                />

                <div className="flex justify-center mt-8">
                    {dadosMinimosPreenchidos ? (
                        <PDFDownloadLink 
                            fileName={`curriculo-${nomeFormatado}.pdf`}
                            document={<CurriculoPDF dados={formulario} />}                        
                            className="bg-[#0097B2] text-white font-medium px-6 py-2 rounded-md hover:bg-[#007A8C] text-center cursor-pointer"
                        >
                            {({ loading }) => loading ? "Gerando PDF..." : "Baixar Currículo em PDF"}
                        </PDFDownloadLink>
                    ) : (
                        <button
                            disabled
                            className="bg-gray-300 text-gray-600 font-medium px-6 py-2 rounded-md text-center cursor-not-allowed"
                        >
                            Preencha pelo menos o nome para gerar o PDF
                        </button>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CriarCurriculo;
