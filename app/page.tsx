import Header from "../components/header"
import Greetings from "../components/greetings";
import About from "../components/about";
import Value from "../components/value";
import Services from "../components/services";
import Formplate from "../components/formplate";

function HomePage(){
    return(
        <>
        <Header />
        <Greetings />
        <main>
            <About />
            <Value />
            <Services />
            <Formplate />
        </main>
        </>
    )
}

export default HomePage;
