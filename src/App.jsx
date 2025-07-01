import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import CriarCurriculo from "./pages/CriarCurriculo";

function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/criar-curriculo" element={<CriarCurriculo />} />
        </Routes>
    )
}

export default App;