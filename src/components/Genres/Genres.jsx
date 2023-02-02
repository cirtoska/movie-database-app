import React from "react";

const Genres = ({ genres }) => {
  return (
    <div className="max-w-[300px]">
      <ul className="flex justify-start flex-wrap mt-2 gap-2 ">
        {genres?.map((genre) => {
          return (
            <li
              key={genre.id}
              className="px-2 py-1 bg-slate-200 text-center rounded lowercase"
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Genres;
