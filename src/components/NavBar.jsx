import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
    return(
        <nav className="fixed top-0 lef-0 w-full z-50 bg-[#005F6B] text-[#F9FBFC] px-6 py-4 flex justify-between items-center shadow-md">
            <Link to="/">
                <Logo />    
            </Link>
            <div className="flex items-center space-x-6">
                <Link to="/" className="transition-transform duration-200 hover:scale-110">Início</Link>
                <Link to="/sobre" className="transition-transform duration-200 hover:scale-110">Sobre</Link>
                <Link to="/contato" className="transition-transform duration-200 hover:scale-110">Contato</Link>
                <Link to="/criar-curriculo" className="transition-transform duration-200 hover:scale-110">Criar Curriculo</Link>
                
                <Link to="/criar-curriculo" className="bg-[#0097B2] text-white px-4 py-2 rounded-lg hover:bg-[#007A8C] transition">Começar Agora</Link>
            </div>
        </nav>
    );
}

export default NavBar;