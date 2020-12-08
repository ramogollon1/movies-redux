import { FETCH_MOVIE, SEARCH_MOVIE, LOADING } from "./types";
import axios from "axios";

const MOVIE_API_URL = "https://wookie.codesubmit.io/movies";
const OPTIONS = { headers: { Authorization: "Bearer Wookie2019" } };

export const fetchMovie = (movieSelected) => (dispatch) =>
  dispatch({
    type: FETCH_MOVIE,
    payload: movieSelected,
  });

export const searchMovie = (searchValue) => (dispatch) => {
  if (searchValue) {
    axios
      .get(`${MOVIE_API_URL}?q=${searchValue}`, OPTIONS)
      .then((response) =>
        dispatch({
          type: SEARCH_MOVIE,
          payload: { movies: response.data.movies, searchValue },
        })
      )
      .catch((err) => console.log(err));
  } else {
    axios
      .get(MOVIE_API_URL, OPTIONS)
      .then((response) => {
        dispatch({
          type: SEARCH_MOVIE,
          payload: { movies: response.data.movies, searchValue },
        });
      })
      .catch((err) => console.log(err));
  }
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
