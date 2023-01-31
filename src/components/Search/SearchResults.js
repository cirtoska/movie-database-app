import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "../../utilities/actions";
import { useParams } from "react-router-dom";
import ListResults from "./ListResults";
import FilterResults from "./FilterResults";
import Container from "../../layouts/Container/Container";

const SearchResults = () => {
  const search = useSelector((state) => state.search);
  const [data, setData] = useState([]);
  const load = useSelector((state) => state.load);
  const dispatch = useDispatch();
  const param = useParams();
  const [page, setPage] = useState(0);

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
    setData([]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [param.name]);

  useEffect(() => {
    setData((data) => [...data, ...search]);
  }, [search]);

  return (
    <Container>
      <div className="flex justify-between gap-6 mt-10 px-10">
        <FilterResults data={data} />
        <div className="grow">
          {data.map((item, index) => {
            return (
              <div>
                <ListResults data={item} load={load} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default SearchResults;
