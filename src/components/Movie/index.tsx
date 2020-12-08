import React from "react";
import styles from "./styles.css";

const Movie = ({ movie }) => {
  const { title, backdrop } = movie;
  return (
    <div className={styles.movie}>
      <img
        className={styles.movieImage}
        alt={`The movie titled: ${title}`}
        src={backdrop}
      />
      <div className={styles.overlay}>
        <div className={styles.movieTitle}>{title}</div>
      </div>
    </div>
  );
};
export default Movie;
