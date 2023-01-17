import { Routes, Route } from "react-router-dom";
import Movie from "./pages/MovieDetails/Movie";
import Home from "./pages/Home/Home";
import TV from "./pages/TVDetails/TV";
import Movies from "./pages/Movies/Movies";
import TVShows from "./pages/TVShows/TVShows";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv/:id" element={<TV />} />
        <Route path="/tv" element={<TVShows />} />
      </Routes>
    </>
  );
}

export default App;
