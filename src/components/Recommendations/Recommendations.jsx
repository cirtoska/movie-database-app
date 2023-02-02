import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncFetchMovieRecommend } from "../../utilities/actions";
import RecommendationList from "./RecommendationList";

const Recommendations = () => {
  const dispatch = useDispatch();
  const recommend = useSelector((state) => state.recommend);
  const load = useSelector((state) => state.load);
  const param = useParams();

  useEffect(() => {
    dispatch(asyncFetchMovieRecommend(param.id));
  }, [dispatch, param.id]);

  return (
    <>
      <h3 className="text-2xl font-semibold mx-3 mb-3">Recommendations</h3>

      <div className="mx-3">
        <RecommendationList movies={recommend} load={load} />
      </div>
    </>
  );
};

export default Recommendations;
