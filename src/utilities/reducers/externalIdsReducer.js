import { FETCH_MOVIE_EXTERNAL_IDS } from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIE_EXTERNAL_IDS:
      return action.payload;
    default:
      return state;
  }
};
