import Navbar from "../../components/NavBar"
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import CallToAction from "./components/CallToAction";
import Footer from "../../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection/>
            <Benefits />
            <CallToAction />
            <Footer />
        </>
    );
}

export default Home;
