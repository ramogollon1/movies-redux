import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchContainer from "../searchContainer";
import MovieListCategory from "../MovieListCategory";
import {
  getCurrentState,
  getMovieCategories,
  filterMoviesByCategory,
  groupByCategoryReduced,
} from "../../utils";
import stylesGlobal from "../../app/styles/global.css";
import Nav from "../Nav";
import { fetchMoviesList, setLoading } from "../../redux/actions/searchActions";
import styles from "./styles.css";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const getStateData = getCurrentState();
  const {
    moviesList,
    search: searchMovies,
    search: { isSearching },
  } = getStateData;

  useEffect(() => {
    dispatch(fetchMoviesList());
    dispatch(setLoading());
  }, [dispatch]);

  const getAllCategories = getMovieCategories(moviesList);

  const moviesGroup = filterMoviesByCategory(getAllCategories, moviesList);

  const allMoviesByCategory = groupByCategoryReduced(moviesGroup);

  return (
    <>
      <Nav />
      <div className={stylesGlobal.section}>
        <div className={styles.containerMovies}>
          {!isSearching ? (
            <MovieListCategory allMoviesByCategory={allMoviesByCategory} />
          ) : (
            <SearchContainer searchMovies={searchMovies} />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
