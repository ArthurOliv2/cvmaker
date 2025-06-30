// src/components/Footer.jsx
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#005F6B] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Coluna 1 - Logo e texto */}
                <div>
                    <h3 className="text-2xl font-poppins font-bold mb-4">CVMaker</h3>
                    <p className="text-[#CCCCCC] text-sm">
                        Crie seu currículo online de forma simples, rápida e gratuita.
                    </p>
                </div>

                {/* Coluna 2 - Navegação */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Navegação</h4>
                    <ul className="space-y-2 text-sm text-[#CCCCCC]">
                        <li><Link to="/">Início</Link></li>
                        <li><a href="#beneficios">Benefícios</a></li>
                        <li><Link to="/criar-curriculo">Criar Currículo</Link></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                {/* Coluna 3 - Contato */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Contato</h4>
                    <p className="text-sm text-[#CCCCCC]">cvmaker@email.com</p>
                    <p className="text-sm text-[#CCCCCC] mt-2">© {new Date().getFullYear()} CVMaker</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
