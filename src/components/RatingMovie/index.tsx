import React from "react";
import classnames from "classnames";
import styles from "./styles.css";

type Props = {
  className?: string;
  rating: number;
};

const STAR_TOTAL = 5;

function RatingMovie({ rating, className }: Props) {
  const starPercentage = (rating / STAR_TOTAL) * 100;
  const starPercentageRounded = `${
    Math.round(starPercentage / 10) * STAR_TOTAL
  }%`;
  return (
    <div className={classnames(styles.starsouter, className)}>
      <div
        className={styles.starsinner}
        style={{ width: starPercentageRounded }}
      ></div>
    </div>
  );
}

export default RatingMovie;
