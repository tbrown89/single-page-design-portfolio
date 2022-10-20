import { GlobalStyles } from "./components/styled/Global";
import Header from "./components/Header";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import { Container } from "./components/styled/Container";
import "slick-carousel/slick/slick.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
      <Index />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;