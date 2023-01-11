import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../../api/tmdb";
import Header from "../../components/Header/Header";
import Container from "../../layouts/Container/Container";
import SubNav from "../../layouts/SubNav/SubNav";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get(`movie/${id}`);
      setMovie(data);
    };
    fetchMovies();
  }, []);
  console.log(movie);

  const getPosterImg = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`;

  return (
    <>
      <Header />
      <Container>
        <SubNav />
        <div className="flex gap-5 px-9 py-5 bg-tmdbDarkBlue text-white">
          <div>
            <img
              className="rounded-t-lg"
              style={{ width: "300px", height: "450px" }}
              src={getPosterImg}
              alt={movie.original_title}
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">{movie.original_title}</h2>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Movie;
