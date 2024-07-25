import Top from "../../components/Top/Top";
import About from "../../components/About/About";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";

export default function Home() {

    window.scrollTo(0, 0);

    return (
        <>
            <Top />
            <About />
            <Team />
            <Contact />
        </>
    );
}