import { Routes, Route } from "react-router-dom";
import Movie from "./pages/MovieDetails/Movie";
import Home from "./pages/Home/Home";
import TV from "./pages/TVDetails/TV";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<TV />} />
      </Routes>
    </>
  );
}

export default App;
