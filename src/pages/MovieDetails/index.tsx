import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import RatingMovie from "../../components/RatingMovie";
import styles from "./styles.css";
import stylesGlobal from "../../app/styles/global.css";
import { getCurrentState } from "../../utils";
import ArrowLeft from "../../app/assets/arrowLeft.svg";

function MovieDetails() {
  const getStateMovies = getCurrentState();
  const { movieSelected } = getStateMovies;
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

  const year = new Date(released_on).getFullYear();
  return (
    <div className={stylesGlobal.section}>
      <Nav />
      <div className={stylesGlobal.container}>
        <Link className={styles.backLink} to={"/"}>
          <h2 className={styles.titleMovie}>
            <ArrowLeft className={styles.arrowLeft} />
            Back home
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
      </div>
    </div>
  );
}

export default MovieDetails;
