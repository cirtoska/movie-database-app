import React, { useState } from "react";

const FilterResults = ({ data }) => {
  const [selectedMediaType, setSelectedMediaType] = useState("");
  const filtered = data.reduce((counts, item) => {
    if (!counts[item.media_type]) {
      counts[item.media_type] = 0;
    }
    counts[item.media_type]++;
    return counts;
  }, {});

  const handleClick = (mediaType) => {
    setSelectedMediaType(mediaType);
  };

  return (
    <div className="rounded shadow-md h-[300px] basis-1/4">
      <h3 className="bg-cyan-500 text-white text-xl font-bold p-4 rounded-t">
        Search Results
      </h3>
      <div>
        <div className="flex justify-between items-center my-2 hover:bg-gray-200 active:bg-gray-300 p-3">
          <button
            className="text-slate-900 cursor-pointer"
            onClick={() => handleClick("movie")}
          >
            Movies
          </button>
          <p className="text-slate-900 bg-slate-100 px-4 py-0  rounded-xl">
            {filtered.movie || 0}
          </p>
        </div>
        <div className="flex justify-between items-center my-2 p-3 hover:bg-slate-300 active:bg-slate-400">
          <button
            className="text-slate-900 cursor-pointer"
            onClick={() => handleClick("tv")}
          >
            TV Shows
          </button>
          <p className="text-slate-900 bg-slate-100 px-4 py-0 rounded-xl">
            {filtered.tv || 0}
          </p>
        </div>
        <div className="flex justify-between items-center my-2 p-3 hover:bg-slate-300 active:bg-slate-400">
          <button
            className="text-slate-900 cursor-pointer"
            onClick={() => handleClick("person")}
          >
            People
          </button>
          <p className="text-slate-900 bg-slate-100 px-4 py-0  rounded-xl">
            {filtered.person || 0}
          </p>
        </div>
        <ul>
          {data
            .filter((item) => item.media_type === selectedMediaType)
            .map((item, index) => {
              return <li key={index}>{item.media_type}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default FilterResults;
