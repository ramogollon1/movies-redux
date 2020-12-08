import React from "react";
import classnames from "classnames";
import styles from "./styles.css";
import LoaderImage from "../../app/assets/loader.svg";

type Props = {
  className?: string;
};

function Loader({ className }: Props) {
  return <LoaderImage className={classnames(styles.loader, className)} />;
}

export default Loader;
