import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "../../utilities/actions";
import { Link, useParams } from "react-router-dom";
import { imgLink } from "../../api/theMovieDB";
import noPosterAvailable from "../../assets/images/no-poster-available.jpg";

const SearchResults = () => {
  const search = useSelector((state) => state.search);
  const [movies, setaMovies] = useState([]);
  const load = useSelector((state) => state.load);
  const dispatch = useDispatch();
  const param = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchSearch(param.name, page));
  }, [dispatch, page, param.name]);

  const pageLoad = useCallback(() => {
    const check =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight;
    if (!!check) {
      setPage(page + 1);
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", pageLoad);
    return () => window.removeEventListener("scroll", pageLoad);
  }, [page, pageLoad]);

  useEffect(() => {
    setPage(1);
    setaMovies([]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [param.name]);

  useEffect(() => {
    setaMovies((movies) => [...movies, ...search]);
  }, [search]);

  return (
    <div>
      <h2>Searching for:</h2>
      <p>{param.name}</p>
      <div>
        {movies.map((movie, index) => {
          const getPosterImg = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;

          return (
            <Link key={index} to={`/movie/${movie.id}`}>
              {movie.poster_path ? (
                <img src={getPosterImg} alt="" />
              ) : (
                <img src={noPosterAvailable} alt="No Poster Vailable" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
