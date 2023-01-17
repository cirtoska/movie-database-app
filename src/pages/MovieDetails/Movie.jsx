import Header from "../../components/Header/Header";
import SubNav from "../../layouts/SubNav/SubNav";
import Cast from "../../components/Cast/CastList";
import MovieHeader from "./MovieHeader";

const Movie = () => {
  return (
    <>
      <Header />

      <SubNav />
      <MovieHeader />
      <section className="pt-[30px] relative">
        <Cast />
      </section>
    </>
  );
};

export default Movie;
