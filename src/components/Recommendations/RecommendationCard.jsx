import React from "react";
import { Link } from "react-router-dom";
import noImg from "../../assets/images/no-photo-available.png";

const RecommendationCard = ({ backdrop_path, title, id, vote_average }) => {
  const movieImg = `https://www.themoviedb.org/t/p/w250_and_h141_face${backdrop_path}`;

  return (
    <div>
      <Link to={`/movie/${id}`} className="flex flex-col w-[250px]">
        <img
          src={backdrop_path === null ? noImg : movieImg}
          alt={title}
          className="rounded-lg object-cover hover:opacity-75 transition-all"
        />
        <div className="flex justify-between">
          <h4>{title.substring(0, 30)}</h4>
          <p>{Math.floor(vote_average * 10)}%</p>
        </div>
      </Link>
    </div>
  );
};

export default RecommendationCard;
