import React from "react";

const CastCard = ({ name, character, profile_path, gender }) => {
  const getProfileImg = `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`;

  let noProfileImg;
  if (gender === 1) {
    noProfileImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg`;
  } else {
    noProfileImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;
  }

  return (
    <div className="shadow-md border-[1px] border-slate-50 m-2 rounded-md">
      {/* <div className="relative"> */}
      <img
        src={profile_path === null ? noProfileImg : getProfileImg}
        alt={name}
        className="w-full h-full shadow-sm rounded-t-md hover:cursor-pointer object-cover"
        style={{ width: 138, height: 175 }}
      />
      <p className="font-bold p-2 pb-0">{name}</p>
      <p className="px-2 pb-2">{character}</p>
      {/* </div> */}
    </div>
  );
};

export default CastCard;
