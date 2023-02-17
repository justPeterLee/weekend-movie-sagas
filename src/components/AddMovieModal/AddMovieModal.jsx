import styles from "./AddMovieModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
export default function AddMovieModal(props) {
  // instances of dependencies
  const dispatch = useDispatch();
  const [closeModal, setCloseModal] = useState(true);
  const genres = useSelector((store) => store.allGenres);

  const movieTitle = useRef();
  const descriptionText = useRef();
  let appliedGenre = [];

  // requests to the DataBase
  const fetchGenre = () => {
    dispatch({ type: "FETCH_ALL_GENRE" });
  };


  const addMovieHandler = () => {
    const newMovieData = {
      title: movieTitle.current.value,
      poster: 'baseImage',
      description: descriptionText.current.value,
    };
    console.log(newMovieData);

    dispatch({type:"POST_NEW_MOVIE", payload: newMovieData})
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  if (!genres) {
    return <p> loading </p>;
  }
  return (
    <div
      className={styles.background}
      onClick={() => {
        if (closeModal) {
          console.log("asdf");
          props.onShowModal();
        }
      }}
    >
      <div
        className={styles.container}
        onMouseEnter={() => {
          setCloseModal(false);
        }}
        onMouseLeave={() => {
          setCloseModal(true);
        }}
      >
        <div className={styles.titleContainer}>
          <p className={styles.titleTitle}>Title</p>
          <input type="text" className={styles.titleInput} ref={movieTitle} />
        </div>

        <div className={styles.posterContainer}>
          <p className={styles.posterTitle}>Poster</p>
          <input
            type="file"
            className={styles.posterInput}
            onChange={(event) => {
              uploadImage(event);
            }}
          />
        </div>

        <div className={styles.genreContainer}>
          <p className={styles.genreTitle}>Genres</p>
          <div className={styles.genreContainerInput}>
            {genres.map((genre) => (
              <div key={genre.id} className={styles.genreSubContainerInput}>
                <input
                  type="checkbox"
                  value={`${genre.name}`}
                  className={styles.genreInput}
                  onClick={(event) => {
                    if (event.target.checked) {
                      if (!appliedGenre.includes(genre.name)) {
                        appliedGenre.push(genre.name);
                      }
                    } else {
                      let removeGenre = appliedGenre.findIndex(
                        (removed) => removed === genre.name
                      );
                      appliedGenre.splice(removeGenre, 1);
                    }
                  }}
                />
                <label className={styles.genreName}>{genre.name}</label>
              </div>
            ))}

            <div className={styles.createNewGenre}>
              <div className={styles.createSub}>
                <p className={styles.squarePlus}>+</p>{" "}
                <p className={styles.createText}>create genre</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.descrptionContainer}>
          <p className={styles.descrptionTitle}>Description</p>
          <textarea className={styles.descriptionText} ref={descriptionText} />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.addMovieButton} onClick={addMovieHandler}>
            add movie
          </button>
          <button
            onClick={() => {
              props.onShowModal();
            }}
            className={styles.cancleButton}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
