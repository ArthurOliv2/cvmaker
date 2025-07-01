import Navbar from "../../components/NavBar"
import HeroSection from "./components/HeroSection";
import QuemSomos from "./components/QuemSomos";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


function Sobre() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <QuemSomos />
            <Footer />
        </>
    );
}

export default Sobre;