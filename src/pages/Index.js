import { Container } from "../components/styled/Container";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Bio from "../components/Bio";
import Consultation from "../components/Consultation";
import Carousel from "../components/Carousel";

const Index = () => {
    return (
        <main>
            <Container>
                <Intro />
                <Skills />
                <Bio />
            </Container>
            <Carousel />
            <Container>
                <Consultation />
            </Container>
        </main>
    )
}

export default Index