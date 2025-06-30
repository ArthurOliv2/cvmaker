import Navbar from "../../components/NavBar"
import HeroSection from "./components/HeroSection";
import ComoFunciona from "./components/ComoFunciona";
import CallToAction from "./components/CallToAction";
import Footer from "../../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection/>
            <ComoFunciona />
            <CallToAction />
            <Footer />
        </>
    );
}

export default Home;
