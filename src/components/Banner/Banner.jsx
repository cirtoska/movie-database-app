import React, { useState, useEffect, useRef } from "react";
import SearchInput from "../../baseUI/Button/Input/SearchInput";
import SearchButton from "../../baseUI/Button/SearchButton";
import { useNavigate } from "react-router-dom";
import { fetchSearchQuery } from "../../api/theMovieDB";

const Banner = () => {
  const searchInputRef = useRef();
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const wordSearch = (e) => {
    setName(e.target.value);
  };

  // useEffect(() => {
  //   if (query) {
  //     fetchMovie();
  //   }
  // }, [query]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = (e) => {
    // alert(`Searching ${searchInputRef.current.value}`);
    e.preventDefault();
    if (!name) return false;
    navigate.push(`search/${name}`);
    setName("");
  };

  return (
    <div className="h-[360px] bg-banner bg-cover py-5">
      <div className="flex flex-col gap-10 px-10 py-10">
        <div className="text-white">
          <h1 className="font-bold text-5xl">Welcome.</h1>
          <h2 className="font-semibold text-[2rem] leading-1">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <div className="relative">
          <SearchInput ref={searchInputRef} onKeyDown={handleKeyDown} />
          <div className="absolute top-0 right-0">
            <SearchButton onSubmit={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
