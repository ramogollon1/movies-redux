import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentState } from "../../utils";
import IconSearch from "../../app/assets/iconSearch.png";
import Loader from "../Loader";
import { searchMovie, setLoading } from "../../redux/actions/searchActions";
import styles from "./styles.css";

function Search() {
  const getStateData = getCurrentState();
  const [valueSearch, setValueSearch] = useState("");
  const {
    loading,
    search: { text },
  } = getStateData;
  const dispatch = useDispatch();

  function onHandleOnChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const currentText = e.target.value;
    setValueSearch(currentText);
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
          value={valueSearch}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default Search;
