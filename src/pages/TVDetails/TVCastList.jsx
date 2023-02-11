import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchTVCast } from "../../utilities/actions";

import Blur from "../../baseUI/blur/Blur";
import TVCastCard from "./TVCastCard";
import CastCard from "../../components/Cast/CastCard";

const TVCastList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tvShowCast = useSelector((state) => state.tvCast);

  useEffect(() => {
    dispatch(asyncFetchTVCast(id));
  }, [dispatch, id]);

  const tvCastData = tvShowCast?.cast;
  const topBilledCast = tvCastData?.slice(0, 9);
  console.log(tvCastData);

  // if (tvShowCast.length === 0) return null;

  return (
    <>
      <h3 className="text-2xl font-semibold mx-3">Top Billed Cast</h3>
      <div className="flex m-2 pb-5 pr-10 overflow-x-scroll whitespace-nowrap">
        {tvCastData?.map((cast, id) => (
          <CastCard key={id} {...cast} />
        ))}
        <div className="absolute right-0 top-0 w-16 h-full">
          <Blur />
        </div>
      </div>
    </>
  );
};

export default TVCastList;
