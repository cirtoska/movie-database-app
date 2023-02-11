import { FETCH_TVSHOW, FETCH_TVSHOW_CAST } from "../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TVSHOW:
      return action.payload;
    case FETCH_TVSHOW_CAST:
      state.cast = action.payload.cast;
      return state;
    default:
      return state;
  }
};
