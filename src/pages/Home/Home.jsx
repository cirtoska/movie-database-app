import { useState } from "react";
import Banner from "../../components/Banner/Banner";

import MovieList from "../../components/Movies/MovieList";
import Container from "../../layouts/Container/Container";
import Section from "../../layouts/Section/Section";

function Home() {
  const [sectionToggle, setSectionToggle] = useState({
    popularMovies: "Popular Movies",
    popularTVShows: "Popular Shows",
    third: "Trending Today",
    fourth: "This Week",
  });

  const handleToggleValue = (section, selectedValue) => {
    setSectionToggle((prev) => ({
      ...prev,
      [section]: selectedValue,
    }));
  };
  // console.log(sectionToggle.latestMovies);
  return (
    <>
      <Container>
        <Banner />
        <Section
          title="What's New"
          items={["Popular Movies", "Popular Shows"]}
          onToggle={handleToggleValue.bind(null, "popularMovies")}
          isToggled={
            sectionToggle.popularMovies === "Popular Movies" ? false : true
          }
        >
          <MovieList fetch={sectionToggle.popularMovies} />
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
