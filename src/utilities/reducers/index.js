import { combineReducers } from "redux";
import activeReducer from "./activeReducer";
import authReducer from "./authReducer";
import discoverReducer from "./discoverReducer";
import genresReducer from "./genresReducer";
import movieReducer from "./movieReducer";
import personReducer from "./personReducer";
import recommendReducer from "./recomendReducer";
import loadReducer from "./loadReducer";
import barReducer from "./barReducer";
import searchReducer from "./searchReducer";
import externalIdsReducer from "./externalIdsReducer";
import tvShowReducer from "./tvShowReducer";
import tvCastReducer from "./tvCastReducer";

export default combineReducers({
  auth: authReducer,
  genres: genresReducer,
  discover: discoverReducer,
  movie: movieReducer,
  recommend: recommendReducer,
  externalIds: externalIdsReducer,
  person: personReducer,
  genre: genresReducer,
  active: activeReducer,
  load: loadReducer,
  bar: barReducer,
  search: searchReducer,
  tvShow: tvShowReducer,
  tvCast: tvCastReducer,
});
