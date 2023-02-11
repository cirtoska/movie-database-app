import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchGenre, Active } from "../../utilities/actions";
import { useParams } from "react-router-dom";
import ListGrid from "../../layouts/ListGrid/ListGrid";
import MovieCard from "../../components/Movies/MovieCard";

const Genre = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [idAction, setIdAction] = useState("");
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genre);
  const genres = useSelector((state) => state.genres);
  const load = useSelector((state) => state.load);
  const param = useParams();

  useEffect(() => {
    setIdAction(genres.find((genre) => genre.name === param.genre)?.id);
  }, [genres, param.genre]);

  useEffect(() => {
    if (!idAction) return;
    dispatch(asyncFetchGenre(idAction, page));
    dispatch(Active(true));
  }, [dispatch, idAction, page]);

  useEffect(() => {
    setPage(1);
    setData([]);
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [param.genre]);

  useEffect(() => {
    setData((data) => [...data, ...genre]);
  }, [genre]);

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
  }, [pageLoad]);

  useEffect(() => {
    document.title = `${param.genre} - Moives`;
  }, [param.genre]);
  console.log(data);
  return (
    // <ListGrid>
    <div>
      {data?.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </div>
    // </ListGrid>
  );
};

export default Genre;
