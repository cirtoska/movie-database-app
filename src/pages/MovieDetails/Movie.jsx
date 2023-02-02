import SubNav from "../../layouts/SubNav/SubNav";
import Cast from "../../components/Cast/CastList";
import MovieHeader from "./MovieHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContentWrapper from "../../layouts/ContentWraper/ContentWrapper";
import WhiteColumn from "../../layouts/WhiteColumn/WhiteColumn";
import SectionPanel from "../../layouts/SectionPanel/SectionPanel";
import Media from "../../components/Movies/Media";
import Recommendations from "../../components/Recommendations/Recommendations";
import SplitColumn from "../../layouts/SplitColumn/SplitColumn";

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
          <SectionPanel>
            <Recommendations />
          </SectionPanel>
        </WhiteColumn>
        <SplitColumn>
          <Sidebar />
        </SplitColumn>
      </ContentWrapper>
    </>
  );
};

export default Movie;
