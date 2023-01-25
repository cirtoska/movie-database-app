import { useState } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

import MovieList from "../../components/Movies/MovieList";
import Container from "../../layouts/Container/Container";
import Section from "../../layouts/Section/Section";

function Home() {
  const [sectionToggle, setSectionToggle] = useState({
    first: "Popular Movies",
    second: "TV Shows",
    third: "Trending Today",
    fourth: "This Week",
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
          items={["Popular Movies", "TV Shows"]}
          onToggle={handleToggleValue.bind(null, "first")}
          isToggled={sectionToggle.first === "Popular Movies" ? false : true}
        >
          <MovieList fetch={sectionToggle.first} />
        </Section>
        <Section
          title="Trending"
          items={["Trending Today", "This Week"]}
          onToggle={handleToggleValue.bind(null, "third")}
          isToggled={sectionToggle.third === "Trending Today" ? false : true}
        >
          <MovieList fetch={sectionToggle.third} />
        </Section>
      </Container>
    </>
  );
}

export default Home;
