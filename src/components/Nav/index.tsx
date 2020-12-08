import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import Search from "../Search";
import stylesGlobal from "../../app/styles/global.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={stylesGlobal.container}>
        <div className={styles.containerNav}>
          <Link className={styles.linkTitle} to={"/"}>
            <h5>
              Wookie <br /> Movies
            </h5>
          </Link>
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
