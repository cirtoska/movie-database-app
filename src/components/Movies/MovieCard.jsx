import Ellipsis from "../../baseUI/ellipsis/Ellipsis";
import ProgressCircle from "../../baseUI/progress-circle/Progress";

const MovieCard = ({
  poster_path,
  name,
  title,
  first_air_date,
  release_date,
  vote_average,
}) => {
  const getPosterImg = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  return (
    <div className="flex flex-col pl-5 gap-2">
      <div className="relative">
        <img
          src={getPosterImg}
          alt={name || title}
          className="w-[150px] h-[225px] shadow-sm rounded-md hover:cursor-pointer"
        />
        <div className="absolute top-3 right-[10px]">
          <Ellipsis />
        </div>
        <div className="absolute bottom-[-1rem] left-2">
          <ProgressCircle percent={vote_average * 10} />
        </div>
      </div>
      <div className="flex flex-col w-[150px] pt-5 px-3">
        <h1 className="font-bold hover:cursor-pointer hover:text-tmdbLightBlue">
          {name || title}
        </h1>
        <p className="font-normal text-slate-500">
          {first_air_date || release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;