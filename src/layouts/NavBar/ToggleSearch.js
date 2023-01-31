import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { open } from "../../utilities/actions";
import FontAwesomeIcon from "react-fontawesome";
import "./ToggleSearch.css";

const ToggleSearch = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const [name, setName] = useState("");
  const [openSearch, setOpen] = useState(false);
  const [toTop, setToTop] = useState(false);
  const handleOpen = () => {
    dispatch(open());
  };

  let navigate = useNavigate();

  const wordSearch = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchInputRef.current && searchInputRef.current.contains(e.target)) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [searchInputRef]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = (e) => {
    // alert(`Searching ${searchInputRef.current.value}`);
    e.preventDefault();
    if (!name) return false;
    navigate(`search/${name}`);
    setName("");
  };

  const goTo = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 200) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [toTop]);
  return (
    <>
      <div className="header">
        {/* <span className="header__bars" onClick={handleOpen}>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </span> */}
        <div className="header__search">
          <form
            ref={searchInputRef}
            className={`${openSearch ? "open" : ""}`}
            onSubmit={handleSearch}
          >
            <button type="submit" className={`${openSearch ? "open" : ""}`}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <input
              className="search-input"
              placeholder="Search for a movie"
              value={name}
              onChange={wordSearch}
            />
          </form>
        </div>
      </div>
      <div className={`gotoTop ${toTop ? "visible" : ""}`} onClick={goTo}>
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </div>
    </>
  );
};

export default ToggleSearch;
