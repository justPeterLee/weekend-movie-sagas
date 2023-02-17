import styles from "./SortBy.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function SortBy() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.allGenres);

  const fetchGenre = () => {
    dispatch({ type: "FETCH_ALL_GENRE" });
  };

  const filterGenre = (event) => {
    dispatch({type:"FILTER_BY_GENRES"})
  }
  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <label className={styles.label}>Sort By: </label>
        <select className={styles.select} onChange={filterGenre}> 
            <option value={"*"}> All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
