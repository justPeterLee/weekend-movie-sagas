import styles from './Sortby.module.css'
import { useDispatch, useSelector } from 'react-redux'
export default function SortBy(){
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.allGenres);

    const fetchGenre = () => {
        dispatch({ type: "FETCH_ALL_GENRE" });
      };
      useEffect(() => {
        fetchGenre();
      }, []);
    return(
        <div>
            <form>
                <label>genre: </label>
                <option></option>
            </form>
        </div>
    )
}