import React from "react";
import { FaImdb, FaLink } from "react-icons/fa";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const SocialLinks = ({ imdb_id, homepage }) => {
  const imdbUrl = `https://www.imdb.com/title/${imdb_id}`;
  console.log(imdbUrl);

  return (
    <div className="flex">
      <a
        href={imdbUrl}
        target="_blank"
        className="mr-5 text-black cursor-pointer hover:text-slate-400"
      >
        <FaImdb size="3rem" />
      </a>
      <a
        href={homepage}
        target="_blank"
        className="text-black cursor-pointer cursor-pointer hover:text-slate-400"
      >
        <FaLink size="2.5rem" />
      </a>
    </div>
  );
};

export default SocialLinks;
