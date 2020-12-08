import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getCurrentState,
  getMovieCategories,
  filterMoviesByCategory,
  groupByCategoryReduced,
} from "../../utils";
import stylesGlobal from "../../app/styles/global.css";
import Movie from "../Movie";
import Nav from "../Nav";
import {
  searchMovie,
  fetchMovie,
  setLoading,
} from "../../redux/actions/searchActions.js";
import styles from "./styles.css";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const getStateData = getCurrentState();
  const {
    search: { movies },
  } = getStateData;

  useEffect(() => {
    dispatch(searchMovie());
    dispatch(setLoading());
  }, []);

  const onHandleClickMovie = (movieElement) =>
    dispatch(fetchMovie(movieElement));

  const getAllCategories = getMovieCategories(movies);

  const moviesGroup = filterMoviesByCategory(getAllCategories, movies);

  const allMoviesByCategory = groupByCategoryReduced(moviesGroup);

  return (
    <>
      <Nav />
      <div className={stylesGlobal.section}>
        <div className={styles.containerMovies}>
          {allMoviesByCategory.map((group, i) => (
            <div key={i}>
              <h2 className={styles.titleCategory}>{group.category}</h2>
              <div className={styles.wrapperImage}>
                {group.items.length ? (
                  group.items.map((movie, i) => (
                    <Link
                      key={i}
                      to={`/details/${movie.slug}`}
                      onClick={() => onHandleClickMovie(movie)}
                    >
                      <Movie movie={movie} />
                    </Link>
                  ))
                ) : (
                  <p>We found no results</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
