import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "daa72e5129266ed8b88b414c034ff362";

const getMovies = async (filters = []) => {
  const movies = [];
  const link = `${baseUrl}/discover/movie?api_key=${apiKey}&with_release_type=4&${filters.join(
    "&"
  )}`;
  const response = await axios.get(link);
  movies.push(...response.data.results);
  return movies;
};

const getMovieDetails = async (tmdbId) => {
  const linkDetails = `${baseUrl}/movie/${tmdbId}?api_key=${apiKey}`;
  const responseDetails = await axios.get(linkDetails);

  const details = responseDetails.data;
  return details;
};

const getMovieCasts = async (tmdbId) => {
  const linkCasts = `${baseUrl}/movie/${tmdbId}/credits?api_key=${apiKey}`;
  const responseCasts = await axios.get(linkCasts);

  const casts = responseCasts.data.cast.slice(0, 7);
  return casts;
};

const getMovieReviews = async (tmdbId) => {
  const linkReviews = `${baseUrl}/movie/${tmdbId}/reviews?api_key=${apiKey}`;
  const responseReviews = await axios.get(linkReviews);

  const reviews = responseReviews.data.results;
  return reviews;
};

const getMovieTrailer = async (tmdbId) => {
  const linkVideo = `${baseUrl}/movie/${tmdbId}/videos?api_key=${apiKey}`;
  const responseVideos = await axios.get(linkVideo);

  const trailerKey = responseVideos.data.results.find(
    (video) => video.type === "Trailer"
  ).key;

  const trailerLink = `https://youtu.be/${trailerKey}`;
  return trailerLink;
};

const searchMovies = async (query, page) => {
  const movies = [];
  const link = `${baseUrl}/search/multi?api_key=${apiKey}&with_release_type=4&query=${query}&page=${page}`;
  const response = await axios.get(link);
  movies.push(...response.data.results);
  return movies;
};

const getTvShows = async (filters) => {
  const tvs = [];
  const link = `${baseUrl}/discover/tv?api_key=${apiKey}&${filters.join("&")}`;
  const response = await axios.get(link);
  tvs.push(...response.data.results);
  return tvs;
};

const getTrendingTvShows = async (filters) => {
  const tvs = [];
  const link = `${baseUrl}/trending/tv/week?api_key=${apiKey}&${filters.join(
    "&"
  )}`;
  const response = await axios.get(link);
  tvs.push(...response.data.results);
  return tvs;
};

// Deprecated
// const getMoviesByPage = async (pageFirst = 1, pageLast = 1) => {
//   const movies = [];
//   for (let page = pageFirst; page <= pageLast; page++) {
//     const link = `${baseUrl}/discover/movie?api_key=${apiKey}&page=${page}`;
//     const response = await axios.get(link);
//     movies.push(...response.data.results);
//   }
//   return movies;
// };


export {
  getMovies,
  getMovieDetails,
  getMovieCasts,
  getMovieReviews,
  getMovieTrailer,
  searchMovies,
  getTvShows,
  getTrendingTvShows,
};
