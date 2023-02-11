import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
export const imgLink = process.env.REACT_APP_IMGLINK;
const BASE_AXIOS = axios.create({
  baseURL: baseUrl,
});

export default axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: apiKey,
  },
});

export const fetchSingleMovieCredits = (id) =>
  BASE_AXIOS.get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`);

export const fetchSingleTVCredits = (person_id) =>
  BASE_AXIOS.get(`${baseUrl}/person/${person_id}/tv_credits?api_key=${apiKey}`);

export const fetchSearchQuery = (query) =>
  BASE_AXIOS.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
  );

// Search for Movies with @reduxjs/toolkit/query/
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({ query }) => {
        return {
          url: `/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`,
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetMoviesMutation } = movieApi;
