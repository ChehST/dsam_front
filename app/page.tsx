import Greetings from "../components/greetings";
import About from "../components/about";
import Value from "../components/value";
import Services from "../components/services";
import Formplate from "../components/formplate";
import Mdheader from "../components/mdheader";

function HomePage(){
    return(
        <>
        <Mdheader />
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
