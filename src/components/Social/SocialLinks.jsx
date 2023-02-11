import React from "react";
import { FaImdb, FaLink } from "react-icons/fa";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const SocialLinks = ({ imdb_id, homepage }) => {
  const imdbUrl = `https://www.imdb.com/title/${imdb_id}`;

  const handleClick = () => {
    window.open(imdbUrl, "_blank");
  };
  return (
    <div className="flex">
      <button
        role="link"
        onClick={handleClick}
        className="mr-5 text-black cursor-pointer hover:text-slate-400"
      >
        <FaImdb size="3rem" />
      </button>
      <button
        role="link"
        onClick={() => openInNewTab(`${homepage}`)}
        className="text-black cursor-pointer cursor-pointer hover:text-slate-400"
      >
        <FaLink size="2.5rem" />
      </button>
    </div>
  );
};

export default SocialLinks;
