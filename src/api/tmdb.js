import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: apiKey,
    // api_key: process.env.API_KEY,
  },
});

// export const BASE_API = axios.create({
//   baseURL: "${baseUrl}/",
// });
const BASE_AXIOS = axios.create({
  baseURL: baseUrl,
});
// export const Popular_URL =
//   "${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1";
// export const Discover_URL =
//   "${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
//
// //export const detail_url= `${baseUrl}/movie/${movie_id}/credits?api_key=${apiKey}&language=en-US`
// export const img_url = "http://image.tmdb.org/t/p/w500";
// export const fetchSingleMovie = (movieId) =>
//   BASE_AXIOS.get(
//     `${baseUrl}/movie/${movieId}?api_key=${API_KEY}`
//   );

export const fetchSingleMovieCredits = (id) =>
  BASE_AXIOS.get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`);
// export const fetchReviews = (movieId) =>
//   BASE_AXIOS.get(
//     `${baseUrl}/movie/${movieId}/reviews?api_key=${API_KEY}`
//   );
// export const fetchRecommendations = (movieId) =>
//   BASE_AXIOS.get(`/movie/${movieId}/similar?api_key=${API_KEY}`);

// export const fetchPopularMovies = (page) =>
//   BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}&page=${page}`);
// export const fetchTopRatedMovies = (page) =>
//   BASE_API.get(`/movie/top_rated?api_key=${API_KEY}&page=${page}`);

// export const fetchGenres = () =>
//   BASE_AXIOS.get(`/genre/movie/list?api_key=${API_KEY}`);

// export const fetchPopularMovie = () =>
//   BASE_API.get(`movie/popular?api_key=${API_KEY}`);

// export const fetchTopRatedMovie = () =>
//   BASE_API.get(`movie/top_rated?api_key=${API_KEY}`);

// export const fetchSort = (
//   sort_date_to,
//   sort_date_from,
//   sort_genre,
//   sort_choose
// ) =>
//   BASE_API.get(
//     `movie/popular?api_key=${API_KEY}&release_date.lte=${sort_date_to}&release_date.gte=${sort_date_from}&with_genres=${sort_genre}&sort_by=${sort_choose}`
//   );

// export const fetchSortFilterDiscover = (
//   sort_date_to,
//   sort_date_from,
//   sort_genre,
//   sort_choose
// ) =>
//   BASE_API.get(
//     `discover/movie?api_key=${API_KEY}&original_language=en-US&primary_release_date.gte=${sort_date_to}&primary_release_date.lte=${sort_date_from}&with_genres=${sort_genre}&sort_by=${sort_choose}`
//   );

// export const fetchSortFilter = (page, sortValue, startDate, endDate, genre) =>
//   BASE_AXIOS.get(
//     `/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=${sortValue}&release_date.lte=${startDate}&release_date.gte=${endDate}&with_genres=${genre}`
//   );
// export const fetchTopRatedPopular = (category, page) =>
//   BASE_AXIOS.get(`/movie/${category}?api_key=${API_KEY}&page=${page}`);
