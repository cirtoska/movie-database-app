import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Container from "./layouts/Container/Container";


function App() {
  return (
    <>
      <Header />
      <Container>
        <Banner/>
      </Container>
    </>
  );
}

export default App;
