import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import RatingMovie from "../../components/RatingMovie";
import { getMovieYear } from "../../utils";
import ArrowLeft from "../../app/assets/arrowLeft.svg";
import stylesGlobal from "../../app/styles/global.css";
import SearchContainer from "../../components/SearchContainer";
import styles from "./styles.css";

function MovieDetails() {
  const {
    search: searchMovies,
    movieSelected,
    search: { isSearching },
  } = useSelector((state: any) => state.moviesStore) || [];
  const {
    title,
    imdb_rating,
    poster,
    cast,
    director,
    length,
    overview,
    released_on,
  } = movieSelected;

  const year = getMovieYear(released_on);
  return (
    <div className={stylesGlobal.section}>
      <Nav />
      <div className={stylesGlobal.container}>
        {!isSearching ? (
          <>
            <Link className={styles.backLink} to={"/"}>
              <h2 className={styles.titleMovie}>
                <ArrowLeft className={styles.arrowLeft} />
                Back
              </h2>
            </Link>
            <div className={styles.wrapperDetails}>
              <div className={styles.poster}>
                <img className={styles.imagePoster} src={poster} />
              </div>
              <div className={styles.movieDetails}>
                <div className={styles.groupDetails}>
                  <div className={styles.groupDetails}>
                    <h2 className={styles.titleMovie}>
                      {title} ({imdb_rating})
                    </h2>
                  </div>
                  <div className={styles.wrapperStars}>
                    <RatingMovie rating={imdb_rating} />
                  </div>
                </div>
                <div className={styles.groupDetails}>
                  <p>
                    {year} | {length} | {director}
                  </p>
                </div>
                <div className={styles.groupDetails}>
                  <p>
                    <b>Cast:</b> {cast.join(", ")}
                  </p>
                </div>
                <div className={styles.groupDetails}>
                  <p className={styles.overview}>{overview}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <SearchContainer searchMovies={searchMovies} />
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
