import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovie, searchMovie } from "../../redux/actions/searchActions";
import styles from "./styles.css";
import Movie from "../Movie";

type Props = {
  allMoviesByCategory: [];
};

function MovieListCategory({ allMoviesByCategory }: Props) {
  const dispatch = useDispatch();
  const onHandleClickMovie = (movieElement: []) => {
    dispatch(fetchMovie(movieElement));
    dispatch(searchMovie(""));
  };
  return (
    <>
      {allMoviesByCategory &&
        allMoviesByCategory.map(
          (group: { category: string; items: [] }, i: number) => (
            <div key={i}>
              <h2 className={styles.titleCategory}>{group.category}</h2>
              <div className={styles.wrapperImage}>
                {group.items.map((movie: any, i: number) => (
                  <Link
                    key={i}
                    to={`/details/${movie.slug}`}
                    onClick={() => onHandleClickMovie(movie)}
                  >
                    <Movie movie={movie} />
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
    </>
  );
}

export default MovieListCategory;
