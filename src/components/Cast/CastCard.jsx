import React from "react";

const CastCard = ({ name, character, profile_path }) => {
  const getProfileImg = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;
  return (
    <div className="shadow-md border-[1px] border-slate-50 m-2 rounded-md w-[150px]">
      {/* <div className="relative"> */}
      <img
        src={getProfileImg}
        alt={name}
        className="w-full h-[225px] shadow-sm rounded-t-md hover:cursor-pointer object-cover"
      />
      <p className="font-bold p-2 pb-0">{name}</p>
      <p className="px-2 pb-2">{character}</p>
      {/* </div> */}
    </div>
  );
};

export default CastCard;
