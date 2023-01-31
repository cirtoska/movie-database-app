import SubNav from "../../layouts/SubNav/SubNav";
import Cast from "../../components/Cast/CastList";
import MovieHeader from "./MovieHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContentWrapper from "../../layouts/ContentWraper/ContentWrapper";
import WhiteColumn from "../../layouts/WhiteColumn/WhiteColumn";
import SectionPanel from "../../layouts/SectionPanel/SectionPanel";
import Media from "../../components/Movies/Media";

const Movie = () => {
  return (
    <>
      <SubNav />
      <MovieHeader />
      <ContentWrapper>
        <WhiteColumn>
          <article className="relative overflow-x-auto pb-7">
            <Cast />
          </article>
          <SectionPanel>
            <Media />
          </SectionPanel>
        </WhiteColumn>
        <aside className="sidebar">
          <Sidebar />
        </aside>
      </ContentWrapper>
    </>
  );
};

export default Movie;
