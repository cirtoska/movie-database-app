import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchTvShow } from "../../utilities/actions";

import ProgressCircle from "../../baseUI/progress-circle/Progress";

import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa";

const TVShowHeader = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tvShow = useSelector((state) => state.tvShow);

  useEffect(() => {
    dispatch(asyncFetchTvShow(id));
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [dispatch, id]);

  if (tvShow.length === 0) return null;

  const getPosterImg = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${tvShow.poster_path}`;

  const backdropImg = tvShow.backdrop_path;
  let backgroundImage;
  if (backdropImg) {
    backgroundImage = `https://image.tmdb.org/t/p/original${backdropImg}`;
  }

  const convertMinutes = (minutes) => {
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    return h + "h " + m + "m";
  };

  let airDate = new Date(tvShow.first_air_date);
  const options = { year: "numeric" };
  const formattedDate = airDate.toLocaleDateString("en-US", options);

  if (tvShow.length === 0) return null;

  // console.log(tvShow);
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg-cover bg-top"
    >
      <div className="p-10 bg-movieGradient text-white">
        <div className="max-w-[1200px] flex items-center justify-center gap-10 mx-auto">
          <img
            className="rounded-lg mx-auto"
            src={getPosterImg}
            alt={tvShow.original_title}
          />
          <section className="movie-header">
            <h2 className="text-4xl font-extrabold">
              {tvShow.original_title}{" "}
              <span className="opacity-80 font-normal">({formattedDate})</span>
            </h2>
            <div className="facts flex gap-1 items-center pb-4">
              <span className="certification"></span>
              <span className="release">{tvShow.first_air_date}</span>
              <span className="text-3xl">&sdot;</span>
              <span className="flex flex-row">
                {tvShow?.genres?.map((genre) => (
                  <Link to={`/genres/${genre.name}`} key={genre.id}>
                    <div className="pr-1">{genre.name}</div>
                  </Link>
                ))}
              </span>
              <span className="text-3xl">&sdot;</span>
              <span className="runtime">{tvShow.episode_run_time} min</span>
            </div>
            <div className="flex items-center gap-4">
              <ProgressCircle percent={Math.floor(tvShow.vote_average * 10)} />
              <ul className="flex gap-4">
                <li className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center">
                  <FaListUl />
                </li>
                <li className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center">
                  <FaHeart />
                </li>
                <li className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center">
                  <FaBookmark />
                </li>
                <li className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center">
                  <FaStar />
                </li>
              </ul>
            </div>
            <div className="tagline italic opacity-70 text-lg font-normal pt-4">
              {tvShow.tagline}
            </div>
            <div className="py-4">
              <h3 className="text-2xl font-bold">Overview</h3>
              <p>{tvShow.overview}</p>
              <div className="grid grid-cols-3 gap-2 justify-between py-4">
                {tvShow?.created_by?.map((item) => (
                  <div key={item.id}>
                    <strong className="block">{item.name}</strong>{" "}
                    <span className="text-sm">Creator</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TVShowHeader;
