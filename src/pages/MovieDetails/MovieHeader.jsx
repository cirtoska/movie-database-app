import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { instance } from "../../api/tmdb";
import ProgressCircle from "../../baseUI/progress-circle/Progress";
import { fetchSingleMovieCredits } from "../../api/tmdb";

import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa";

const MovieHeader = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const movieCreditsQuery = useQuery(
    ["moviecredits", id],
    () => fetchSingleMovieCredits(id),
    { retry: false, select: (state) => state?.data }
  );

  const movieCrewData = movieCreditsQuery?.data?.crew;
  const job = ["director", "producer", "screenplay", "story"];

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await instance.get(`movie/${id}`);
      setMovie(data);
    };
    fetchMovies();
  }, []);

  if (movie.length === 0) return null;

  const getPosterImg = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`;

  const backdropImg = movie.backdrop_path;
  let backgroundImage;
  if (backdropImg) {
    backgroundImage = `https://image.tmdb.org/t/p/original${backdropImg}`;
  }
  let airDate = new Date(movie.release_date);
  const options = { year: "numeric" };
  const formattedDate = airDate.toLocaleDateString("en-US", options);

  const convertMinutes = (minutes) => {
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    return h + "h " + m + "m";
  };

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
            className="rounded-t-lg mx-auto"
            src={getPosterImg}
            alt={movie.original_title}
          />
          <section className="header">
            <h2 className="text-4xl font-extrabold">
              {movie.original_title}{" "}
              <span className="opacity-80 font-normal">({formattedDate})</span>
            </h2>
            <div className="facts flex gap-1 items-center pb-4">
              <span className="certification"></span>
              <span className="release">{movie.release_date}</span>
              <span className="text-3xl">&sdot;</span>
              <span className="flex flex-row">
                {movie.genres.map((genre) => (
                  <div key={genre.id} className="pr-1">
                    {genre.name}
                  </div>
                ))}
              </span>
              <span className="text-3xl">&sdot;</span>
              <span className="runtime">{convertMinutes(movie.runtime)}</span>
            </div>
            <div className="flex items-center gap-4">
              <ProgressCircle percent={Math.floor(movie.vote_average * 10)} />
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
              {movie.tagline}
            </div>
            <div className="py-4">
              <h3 className="text-2xl font-bold">Overview</h3>
              <p>{movie.overview}</p>
              <div className="grid grid-cols-3 gap-2 justify-between py-4">
                {movieCrewData
                  ?.filter((item) => job.includes(item.job.toLowerCase()))
                  .reduce((acc, curr) => {
                    const names = acc.map((item) => item.name);
                    if (!names.includes(curr.name)) {
                      acc.push({ name: curr.name, jobs: [curr.job] });
                    } else {
                      const item = acc.find((item) => item.name === curr.name);
                      item.jobs.push(curr.job);
                    }
                    return acc;
                  }, [])
                  .map((item) => (
                    <div key={item.name}>
                      <strong className="block">{item.name}</strong>{" "}
                      <span className="text-sm">{item.jobs.join(", ")}</span>
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

export default MovieHeader;
