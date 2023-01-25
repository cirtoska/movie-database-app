import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSingleMovieCredits } from "../../api/tmdb";
import CastCard from "./CastCard";
import Blur from "../../baseUI/blur/Blur";

const CastList = () => {
  const { id } = useParams();
  // const [cast, setCast] = useState()
  const movieCreditsQuery = useQuery(
    ["moviecredits", id],
    () => fetchSingleMovieCredits(id),
    { retry: false, select: (state) => state?.data }
  );

  const movieCastData = movieCreditsQuery?.data?.cast;
  const topBilledCast = movieCastData?.slice(0, 9);

  console.log(topBilledCast);
  return (
    <>
      <h3 className="text-2xl font-semibold mx-6">Top Billed Cast</h3>
      <div className="flex m-4">
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
