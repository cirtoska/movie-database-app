import Header from "../../components/Header/Header";
import SubNav from "../../layouts/SubNav/SubNav";
import Cast from "../../components/Cast/CastList";
import MovieHeader from "./MovieHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

const Movie = () => {
  return (
    <>
      <Header />

      <SubNav />
      <MovieHeader />
      <section className="pt-[30px] w-[1250px] mx-auto flex">
        <article className="relative overflow-x-auto">
          <Cast />
        </article>
        <aside className="sidebar">
          <Sidebar />
        </aside>
      </section>
    </>
  );
};

export default Movie;
