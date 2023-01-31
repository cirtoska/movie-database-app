import React from "react";
import { Link } from "react-router-dom";
import noPosterAvailable from "../../assets/images/no-poster-available.jpg";

const ListResults = ({ data, load }) => {
  const getPosterImg = `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${data.poster_path}`;
  const profilePath = `https://www.themoviedb.org/t/p/w90_and_h90_face/${data.profile_path}`;
  return (
    <Link
      to={`/movie/${data.id}`}
      className="max-w-sm w-full lg:max-w-full lg:flex mb-4 rounded shadow-md"
    >
      {/* <Link to={`/movie/${movie.id}`}> */}
      {data.poster_path || data.profile_path ? (
        <img
          src={getPosterImg || profilePath}
          alt={data.title || data.name}
          className="h-48 flex-none object-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        />
      ) : (
        <img
          src={noPosterAvailable}
          alt="No Poster Vailable"
          className="flex-none object-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ width: 90 }}
        />
      )}
      {/* </Link> */}
      <div className="border-r border-b border-l border-slate-100 lg:border-l-0 lg:border-t lg:border-slate-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal w-full">
        <div className="flex flex-col">
          <div className="text-gray-900 font-bold text-xl">
            {data.title || data.name}
          </div>
          <p className="text-m text-slate-400 flex datas-center pb-3">
            {data.release_date || data.first_air_date}
          </p>
          <p className="text-gray-700 text-base">
            {/* {data.overview.substring(0, 200)}... */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListResults;
