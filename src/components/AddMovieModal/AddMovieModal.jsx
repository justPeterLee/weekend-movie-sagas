import styles from "./AddMovieModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
export default function AddMovieModal(props) {
  const dispatch = useDispatch();
  const [closeModal, setCloseModal] = useState(true)
  const genres = useSelector((store) => store.allGenres);

  const fetchGenre = () => {
    dispatch({ type: "FETCH_ALL_GENRE" });
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  if (!genres) {
    return <p> loading </p>;
  }
  return (
    <div className={styles.background} onClick={()=>{if(closeModal){console.log('asdf');props.onShowModal()}}}>
      <div className={styles.container} onMouseEnter={()=>{setCloseModal(false)}} onMouseLeave={()=>{setCloseModal(true)}}>
        <div>
          <p>Title</p>
          <input />
        </div>

        <div>
          <p>Poster</p>
          <input type="file"/>
        </div>

        <div>
          <p>Genres</p>
          <div className={styles.genreContainerInput}>
          {genres.map((genre) => (
            <div key={genre.id} className={styles.genreSubContainerInput}>
              <input type="checkbox" value={`${genre.name}`} />
              <label className={styles.genreName}>{genre.name}</label>
            </div>
          ))}
          </div>
        </div>

        <div>
          <p></p>
          <textarea />
        </div>

        <div>
          <button>add movie</button>
          <button onClick={()=>{props.onShowModal()}}>cancel</button>
        </div>
      </div>
    </div>
  );
}
