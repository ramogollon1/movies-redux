import { FETCH_MOVIE, FETCH_MOVIES_LIST, SEARCH_MOVIE, LOADING } from "./types";
import axios from "axios";
import { Dispatch } from "react";

const MOVIE_API_URL = "https://wookie.codesubmit.io/movies";
const OPTIONS = { headers: { Authorization: "Bearer Wookie2019" } };

export const fetchMovie = (movieSelected: []) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: FETCH_MOVIE,
    payload: movieSelected,
  });

export const fetchMoviesList = () => (dispatch: Dispatch<any>) => {
  return axios
    .get(MOVIE_API_URL, OPTIONS)
    .then((response) => {
      dispatch({
        type: FETCH_MOVIES_LIST,
        payload: response.data.movies,
      });
    })
    .catch((err) => console.log(err));
};

export const searchMovie = (searchValue: string) => (
  dispatch: Dispatch<any>
) => {
  return axios
    .get(`${MOVIE_API_URL}?q=${searchValue}`, OPTIONS)
    .then((response) =>
      dispatch({
        type: SEARCH_MOVIE,
        payload: {
          movies: searchValue ? response.data.movies : [],
          text: searchValue,
          isSearching: searchValue !== "" ? true : false,
          result: response.data.movies.length,
        },
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
