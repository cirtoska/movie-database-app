import React from "react";
import { FaImdb, FaLink } from "react-icons/fa";

const SocialLinks = ({ imdb_id, homepage }) => {
  const imdbUrl = `https://www.imdb.com/title/${imdb_id}`;
  return (
    <div className="flex">
      <a href={imdbUrl} className="mr-5" title="IMDB" tagrt="_blank">
        <FaImdb size="3rem" />
      </a>
      <a href={homepage} title="Homepage" tagrt="_blank">
        <FaLink size="3rem" />
      </a>
    </div>
  );
};

export default SocialLinks;
