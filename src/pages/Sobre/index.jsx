import Navbar from "../../components/NavBar"
import HeroSection from "./components/HeroSection";
import QuemSomos from "./components/QuemSomos";
import Criador from "./components/Criador";
import Valores from "./components/Valores";
import Footer from "../../components/Footer";


function Sobre() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <QuemSomos />
            <Criador />
            <Valores />
            <Footer />
        </>
    );
}

export default Sobre;