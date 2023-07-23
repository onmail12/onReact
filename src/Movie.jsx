import { useState, useEffect } from "react";
import { PlayFill, PersonCircle } from "react-bootstrap-icons";
import { useParams, Link } from "react-router-dom";
import {
  getMovieDetails,
  getMovieCasts,
  getMovieReviews,
  getMovieTrailer,
} from "./api/tmdb";
import Review from "./components/Review";
import Layout from "./Layout";
import blankAvatar from "./assets/blank-avatar-photo-icon-design-vector-30257190.jpg";

const Movie = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCasts, setMovieCasts] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState("");
  const [playerIsOpen, setPlayerOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { tmdbId } = useParams();
  const tmdbProfilePath = "http://image.tmdb.org/t/p/w154/";
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w500/";
  const tmdbBackdropPath = "http://image.tmdb.org/t/p/w154/";

  useEffect(() => {
    setLoading(true);
    getMovieDetails(tmdbId).then((response) => {
      setMovieDetails(response);
    });

    getMovieCasts(tmdbId).then((response) => {
      setMovieCasts(response);
    });

    getMovieReviews(tmdbId).then((response) => {
      setMovieReviews(response);
    });

    getMovieTrailer(tmdbId).then((response) => {
      setMovieTrailer(response);
    });
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout backdropPath={`${tmdbBackdropPath}${movieDetails.backdrop_path}`}>
      <div className="movie">
        <div className="movie-top">
          <img
            src={`${tmdbPosterPath}${movieDetails.poster_path}`}
            alt=""
            className="poster"
          />
          <div className="detail">
            <div className="top">
              <h1 className="title">{movieDetails.title}</h1>
              <div className="row">
                <p className="year">
                  {movieDetails?.release_date?.slice(0, 4)}
                </p>
                <p className="runtime">{movieDetails.runtime} min</p>
                <p className="rate">PG</p>
              </div>
              <div className="row">
                <ul className="genre">
                  {movieDetails?.genres?.map((genre) => {
                    return (
                      <Link
                        className="genre-item"
                        key={genre.id}
                        to={`/movies/genre/${genre.id}`}
                      >
                        <p>{`${genre.name}`}</p>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div className="row">
                <div className="rating">
                  <span>&#9733;</span>
                  {movieDetails?.vote_average?.toString().slice(0, 3)}
                </div>
                <div className="popularity">
                  {movieDetails?.popularity?.toString()}
                  <span style={{ color: "green" }}> Points</span>
                </div>
              </div>
            </div>

            <div className="middle">
              <div className="row">
                <Link
                  className="watch btn"
                  onClick={() => setPlayerOpen(!playerIsOpen)}
                >
                  <PlayFill size={24} />
                  Watch
                </Link>
                <Link
                  to={movieTrailer}
                  className="watch-trailer btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayFill size={24} />
                  Trailer
                </Link>
              </div>
            </div>

            <p className="synopsis">{movieDetails.overview}</p>

            <div className="bottom">
              <div className="row">
                <p className="directed-by">Language</p>
                <p className="name">
                  {movieDetails?.original_language?.toUpperCase()}
                </p>
              </div>
              <div className="row">
                <p className="directed-by">Company</p>
                <p className="name">
                  {movieDetails?.production_companies?.[0].name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`player ${playerIsOpen ? "open" : ""}`}>
          <iframe
            src={`https://vidsrc.me/embed/movie?tmdb=${movieDetails.id}&color=e5a00d`}
            allowFullScreen
          ></iframe>
        </div>

        <div className="movie-middle">
          <div className="cast">
            <h2 className="title">Casts</h2>
            <div className="cast-row">
              {movieCasts.map((cast) => {
                return (
                  <div className="cast-item" key={cast.id}>
                    <img
                      src={
                        cast.profile_path
                          ? `${tmdbProfilePath}${cast.profile_path}`
                          : blankAvatar
                      }
                      alt=""
                      className="cast-img"
                    />
                    <p className="name">{cast.name}</p>
                    <p className="character">{cast.character}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="movie-bottom">
          <Review movieReviews={movieReviews} />
        </div>
      </div>
    </Layout>
  );
};

export default Movie;
