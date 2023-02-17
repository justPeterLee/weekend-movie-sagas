import styles from "./SortBy.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function SortBy() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.allGenres);

  const fetchGenre = () => {
    dispatch({ type: "FETCH_ALL_GENRE" });
  };
  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <div>
      <form>
        <label>genre: </label>
        <select>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
