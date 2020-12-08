import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentState } from "../../utils";
import IconSearch from "../../app/assets/iconSearch.png";
import Loader from "../../components/Loader";
import { searchMovie, setLoading } from "../../redux/actions/searchActions.js";
import styles from "./styles.css";

function Search() {
  const getStateData = getCurrentState();
  const { loading } = getStateData;
  const dispatch = useDispatch();

  function onHandleOnChangeSearch(e) {
    const currentText = e.target.value;
    dispatch(setLoading());
    dispatch(searchMovie(currentText));
  }

  return (
    <div className={styles.groupSearch}>
      {loading ? (
        <Loader />
      ) : (
        <img className={styles.iconSearch} src={IconSearch} />
      )}
      <form>
        <input
          onChange={onHandleOnChangeSearch}
          className={styles.inputSearch}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default Search;
