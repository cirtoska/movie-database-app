import * as TYPES from "./type";
import api from "../../api/theMovieDB";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

const fetchGenres = (data) => {
  return {
    type: TYPES.FETCH_GENRES,
    payload: data,
  };
};

export const asyncFetchGenres = () => {
  return (dispatch) => {
    return api
      .get("genre/movie/list")
      .then((res) => {
        dispatch(fetchGenres(res.data.genres));
      })
      .catch((err) => console.log(err));
  };
};

const fetchDiscover = (data) => {
  return {
    type: TYPES.FETCH_DISCOVER,
    payload: data,
  };
};

export const asyncFetchDiscover = (page) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get("discover/movie", {
        params: {
          page: page,
        },
      })
      .then((res) => {
        dispatch(fetchDiscover(res.data.results));
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

const fetchMovie = (data) => {
  return {
    type: TYPES.FETCH_MOVIE,
    payload: data,
  };
};

export const asyncFetchMovie = (id) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get(`movie/${id}`, {
        params: {
          append_to_response: "videos",
        },
      })
      .then((res) => {
        dispatch(fetchMovie(res.data));
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

const fetchCast = (data) => {
  return {
    type: TYPES.FETCH_CAST,
    payload: data,
  };
};

export const asyncFetchCast = (id) => {
  return (dispatch) => {
    return api.get(`movie/${id}/credits`).then((res) => {
      dispatch(fetchCast(res.data));
    });
  };
};

const fetchMovieRecommend = (data) => {
  return {
    type: TYPES.FETCH_MOVIE_RECOMMEND,
    payload: data,
  };
};

export const asyncFetchMovieRecommend = (id) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get(`movie/${id}/recommendations`)
      .then((res) => {
        dispatch(fetchMovieRecommend(res.data.results));
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

const fetchMovieExternalIds = (data) => {
  return {
    type: TYPES.FETCH_MOVIE_EXTERNAL_IDS,
    payload: data,
  };
};

export const asyncFetchMovieExternalIds = (id) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get(`movie/${id}/external_ids`)
      .then((res) => {
        dispatch(fetchMovieExternalIds(res.data.results));
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

const fetchPerson = (data) => {
  return {
    type: TYPES.FETCH_PERSON,
    payload: data,
  };
};

export const asyncFetchPerson = (id) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get(`person/${id}`)
      .then((res) => {
        dispatch(fetchPerson(res.data));
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

const fetchGenre = (data) => {
  return {
    type: TYPES.FETCH_GENRE,
    payload: data,
  };
};

export const asyncFetchGenre = (genre__id, page__number) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get(`discover/movie`, {
        params: {
          with_genres: genre__id,
          page: page__number,
        },
      })
      .then((res) => {
        dispatch(fetchGenre(res.data.results));
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

export const Active = (active) => {
  return {
    type: TYPES.ACTIVE,
    active,
  };
};

export const open = () => {
  return {
    type: TYPES.OPEN,
  };
};

export const close = () => {
  return {
    type: TYPES.CLOSE,
  };
};

export const fetchSearch = (query, page) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get("search/multi", {
        params: {
          query,
          page,
        },
      })
      .then((res) => {
        dispatch({ type: TYPES.FETCH_SEARCH, payload: res.data.results });
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

// TV SHOWS

const fetchTvShow = (data) => {
  return {
    type: TYPES.FETCH_TVSHOW,
    payload: data,
  };
};

export const asyncFetchTvShow = (tv_id) => {
  return (dispatch) => {
    dispatch({ type: TYPES.LOADING });
    return api
      .get(`tv/${tv_id}`, {
        params: {
          append_to_response: "videos",
        },
      })
      .then((res) => {
        dispatch(fetchTvShow(res.data));
        dispatch({ type: TYPES.LOADSUCCESS });
      })
      .catch(() => dispatch({ type: TYPES.LOADERROR }));
  };
};

const fetchTVCast = (data) => {
  return {
    type: TYPES.FETCH_TVSHOW_CAST,
    payload: data,
  };
};

export const asyncFetchTVCast = (tv_id) => {
  return (dispatch) => {
    return api.get(`tv/${tv_id}/credits`).then((res) => {
      dispatch(fetchTVCast(res.data));
    });
  };
};
// const fetchTVPerson = (data) => {
//   return {
//     type: TYPES.FETCH_TVSHOW_CAST,
//     payload: data,
//   };
// };

// export const asyncFetchTVPerson = (tv_id) => {
//   return (dispatch) => {
//     dispatch({ type: TYPES.LOADING });
//     return api
//       .get(`tv/${tv_id}/credits`)
//       .then((res) => {
//         dispatch(fetchTVPerson(res.data));
//         dispatch({ type: TYPES.LOADSUCCESS });
//       })
//       .catch(() => dispatch({ type: TYPES.LOADERROR }));
//   };
// };
