import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { instance } from "../../api/tmdb";
import { request } from "../../api/request";
import Blur from "../../baseUI/blur/Blur";

const MovieList = ({ fetch }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await instance.get(request[fetch]);
      setMovies(data.results);
    };
    fetchMovies();
  }, [fetch]);

  return (
    <div className="flex pb-5 pl-5 pr-10 overflow-x-auto">
      {movies.map((movie, id) => {
        return <MovieCard key={id} {...movie} />;
      })}
      <div className="absolute right-0 top-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
};

export default MovieList;
