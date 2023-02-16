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
        
        <div className={styles.titleContainer}>
          <p className={styles.titleTitle}>Title</p>
          <input type="text" className={styles.titleInput}/>
        </div>

        <div className={styles.posterContainer}>
          <p className={styles.posterTitle}>Poster</p>
          <input type="file" className={styles.posterInput}/>
        </div>

        <div className={styles.genreContainer}>
          <p className={styles.genreTitle}>Genres</p>
          <div className={styles.genreContainerInput}>
          {genres.map((genre) => (
            <div key={genre.id} className={styles.genreSubContainerInput}>
              <input type="checkbox" value={`${genre.name}`} className={styles.genreInput}/>
              <label className={styles.genreName}>{genre.name}</label>
            </div>
          ))}
          </div>
        </div>

        <div className={styles.descrptionContainer}>
          <p className={styles.descrptionTitle}>Description</p>
          <textarea className={styles.descriptionText}/>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.addMovieButton}>add movie</button>
          <button onClick={()=>{props.onShowModal()}} className={styles.cancleButton}>cancel</button>
        </div>
      </div>
    </div>
  );
}
