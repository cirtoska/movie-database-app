import React from "react";
import ContentWrapper from "../../layouts/ContentWraper/ContentWrapper";
import SectionPanel from "../../layouts/SectionPanel/SectionPanel";
import SplitColumn from "../../layouts/SplitColumn/SplitColumn";
import SubNav from "../../layouts/SubNav/SubNav";
import WhiteColumn from "../../layouts/WhiteColumn/WhiteColumn";
import TVCastList from "./TVCastList";
import TVShowHeader from "./TVShowHeader";

const TV = () => {
  return (
    <>
      <SubNav />
      <TVShowHeader />
      <ContentWrapper>
        <WhiteColumn>
          <article className="relative overflow-x-auto pb-7">
            <TVCastList />
          </article>
          <SectionPanel>{/* <Media /> */}</SectionPanel>
          <SectionPanel>{/* <Recommendations /> */}</SectionPanel>
        </WhiteColumn>
        <SplitColumn>{/* <Sidebar /> */}</SplitColumn>
      </ContentWrapper>
    </>
  );
};

export default TV;
