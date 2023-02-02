import React from "react";
import Blur from "../../baseUI/blur/Blur";
import RecommendationCard from "./RecommendationCard";

const RecommendationList = ({ movies, load }) => {
  return (
    <div className="flex gap-5 pb-5 pr-10 overflow-x-scroll whitespace-nowrap">
      {movies.map((movie) => {
        return <RecommendationCard key={movie.id} {...movie} />;
      })}
      <div className="absolute right-0 top-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
};

export default RecommendationList;
