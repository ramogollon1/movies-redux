import React from "react";
import { Link } from "react-router-dom";
import NoResult from "../../app/assets/noResults.svg";
import Movie from "../Movie";
import RatingMovie from "../RatingMovie";
import { getMovieYear } from "../../utils";
import { useDispatch } from "react-redux";
import { fetchMovie, searchMovie } from "../../redux/actions/searchActions";
import styles from "./styles.css";

type Props = {
  searchMovies: {
    movies: [];
    result: number;
    isSearching: boolean;
    text: string;
  };
};

const SearchContainer = ({ searchMovies }: Props) => {
  const { movies, result } = searchMovies;
  const dispatch = useDispatch();

  const onHandleClickMovie = (movieElement: []) => {
    dispatch(searchMovie(""));
    dispatch(fetchMovie(movieElement));
  };

  return (
    <div className={styles.wrapperSearchContainer}>
      {result > 0 ? (
        movies &&
        movies.map((movie: any, i: number) => (
          <div className={styles.wrapperMovie} key={i}>
            <Link
              to={`/details/${movie.slug}`}
              onClick={() => onHandleClickMovie(movie)}
            >
              <Movie movie={movie} />
            </Link>
            <div className={styles.wrapperRating}>
              <div>{getMovieYear(movie.released_on)}</div>
              <RatingMovie
                className={styles.rating}
                rating={movie.imdb_rating}
              />
            </div>
            <p className={styles.description}>{movie.overview}</p>
          </div>
        ))
      ) : (
        <div className={styles.wrapperNoResults}>
          <NoResult className={styles.noResults} />
          <p>No results</p>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
