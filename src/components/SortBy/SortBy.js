import styles from "./SortBy.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function SortBy() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.allGenres);
  const filterState = useSelector(store => store.filteredGenre);

  const fetchGenre = () => {
    dispatch({ type: "FETCH_ALL_GENRE" });
  };

  const filterGenre = (event) => {
    dispatch({type:"SET_GENRE_FILTER_TYPE", payload: event.target.value})
    if(event.target.value !== "*"){
        dispatch({type:"FILTER_BY_GENRES", payload: event.target.value})
    } else{
        dispatch({ type: 'FETCH_MOVIES' });
    }
  }
  useEffect(() => {
    fetchGenre();

    if(filterState.length > 0){
        dispatch({type:"SET_GENRE_FILTER_TYPE", payload:filterState})
    if(filterState !== "*"){
        dispatch({type:"FILTER_BY_GENRES", payload: filterState})
    } else{
        dispatch({ type: 'FETCH_MOVIES' });
    }
    }
  }, []);
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <label className={styles.label}>Sort By: </label>
        <select className={styles.select} onChange={filterGenre} value={filterState}> 
            <option value={"*"}> All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
