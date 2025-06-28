import Navbar from "../components/NavBar"
import avatar_curriculo from "../assets/avatar_curriculo.png"

function Home() {
    return(
        <>
            <Navbar/>
            <img src={avatar_curriculo} alt="avatar_curriculo" />

            
        </>
        
        
    );
}

export default Home;