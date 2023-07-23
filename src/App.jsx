import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CardGrid from "./CardGrid";
import SearchResult from "./SearchResult";
import Layout from "./Layout";
import Movie from "./Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/movies" element={<CardGrid type="movie" />} />
      <Route
        path="/movies/genre/:genreId"
        element={<CardGrid type="movie" />}
      />
      <Route path="/movie/:tmdbId" element={<Movie />} />

      <Route path="/shows" element={<CardGrid type="tv" />} />
      <Route path="/shows/genre/:genreId" element={<CardGrid type="tv" />} />
      <Route
        path="/show/:tmdbId"
        element={
          <Layout>
            <h2>Coming Soon!</h2>
          </Layout>
        }
      />

      <Route path="/search/:query" element={<SearchResult />} />

      <Route
        path="*"
        element={
          <Layout>
            <h2>404 Not Found</h2>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
