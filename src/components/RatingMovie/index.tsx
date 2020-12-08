import React from "react";
import styles from "./styles.css";

const STAR_TOTAL = 5;

function RatingMovie({ rating }) {
  const starPercentage = (rating / STAR_TOTAL) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) *
    STAR_TOTAL}%`;
  return (
    <div className={styles.starsouter}>
      <div
        className={styles.starsinner}
        style={{ width: starPercentageRounded }}
      ></div>
    </div>
  );
}

export default RatingMovie;
