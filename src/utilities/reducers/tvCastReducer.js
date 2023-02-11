import { FETCH_TVSHOW_CAST } from "../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TVSHOW_CAST:
      return action.payload;
    default:
      return state;
  }
};
