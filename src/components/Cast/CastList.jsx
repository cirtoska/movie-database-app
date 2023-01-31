import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSingleMovieCredits } from "../../api/theMovieDB";
import CastCard from "./CastCard";
import Blur from "../../baseUI/blur/Blur";

const CastList = () => {
  const { id } = useParams();
  const movieCreditsQuery = useQuery(
    ["moviecredits", id],
    () => fetchSingleMovieCredits(id),
    { retry: false, select: (state) => state?.data }
  );

  const movieCastData = movieCreditsQuery?.data?.cast;
  const topBilledCast = movieCastData?.slice(0, 9);

  return (
    <>
      <h3 className="text-2xl font-semibold mx-3">Top Billed Cast</h3>
      <div className="flex m-2 overflow-x-hidden">
        {topBilledCast?.map((cast, id) => (
          <CastCard key={id} {...cast} />
        ))}
        <div className="absolute right-0 top-0 w-16 h-full">
          <Blur />
        </div>
      </div>
    </>
  );
};

export default CastList;
