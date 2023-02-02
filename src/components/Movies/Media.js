import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncFetchMovie } from "../../utilities/actions";
import ReactPlayer from "react-player";

const Media = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncFetchMovie(param.id));
  }, [dispatch]);

  // console.log("data from social", movie.videos);
  const youTubeUrl = `https://www.youtube.com/watch?v=${movie?.videos?.results[0].key}`;
  return (
    <>
      <h3 className="text-2xl font-semibold mx-3 mb-3">Media</h3>

      <div className="mx-3">
        {/* {movie?.videos?.results.map((video, index) => {
          const youTubeUrl = `https://www.youtube.com/watch?v=${video.key}`;
          return <ReactPlayer url={youTubeUrl} key={index} />;
        })} */}
        <ReactPlayer url={youTubeUrl} />
      </div>
    </>
  );
};

export default Media;
