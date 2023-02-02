import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncFetchMovie,
  asyncFetchMovieExternalIds,
} from "../../utilities/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Genres from "../Genres/Genres";
import SocialLinks from "../Social/SocialLinks";

const Sidebar = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const movie = useSelector((state) => state.movie);
  const externalIds = useSelector((state) => state.externalIds);

  useEffect(() => {
    dispatch(asyncFetchMovie(param.id));
  }, [dispatch, param.id]);
  useEffect(() => {
    dispatch(asyncFetchMovieExternalIds(param.id));
  }, [dispatch]);

  console.log(movie);

  return (
    <div className="w-[300px]">
      <div className="mb-4">
        <SocialLinks {...movie} />
      </div>
      <div className="mb-4">
        <h5 className="font-semibold text-lg">Status</h5>
        <p>{movie.status}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-semibold text-lg">Original Language</h5>
        <p>{movie.original_language === "en" ? "English" : "Other"}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-semibold text-lg">Budget</h5>
        <p>${movie.budget}</p>
      </div>
      <div className="mb-4">
        <h5 className="font-semibold text-lg">Genres</h5>
        <Genres genres={movie.genres} />
      </div>
    </div>
  );
};

export default Sidebar;
