import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import MovieList from "./components/Movies/MovieList";
import Container from "./layouts/Container/Container";
import Section from "./layouts/Section/Section";

function App() {
  const [sectionToggle, setSectionToggle] = useState({
    first: "On TV",
    second: "On TV",
    third: "Today",
  });

  const handleToggleValue = (section, selectedValue) => {
    setSectionToggle((prev) => ({
      ...prev,
      [section]: selectedValue,
    }));
  };

  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Section
          title="What's Popular"
          items={["On TV", "In Theaters"]}
          onToggle={handleToggleValue.bind(null, "first")}
          isToggled={sectionToggle.first === "On TV" ? false : true}
        >
          <MovieList fetch={sectionToggle.first} />
        </Section>
      </Container>
    </>
  );
}

export default App;
