import styles from "./Details.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

function Details() {
  // dependencies instances
  const params = useParams();
  const movieId = params.id;
  const history = useHistory();
  const dispatch = useDispatch();

  // data from redux store
  const genres = useSelector((store) => store.genres);
  const movieDetail = useSelector((store) => store.movieDetail[0]);

  // request to saga/ server for genre and details
  const fetchGenre = () => {
    dispatch({ type: "FETCH_GENRE", payload: movieId });
    dispatch({ type: "FETCH_MOVIE_DETAIL", payload: movieId });
  };

  // back to list event handler
  const backToList = () => {
    history.push("/");
  };

  // functiions run on page load
  useEffect(() => {
    fetchGenre();
  }, []);

  // loading page -> waiting for moive details to be fetched
  if (!movieDetail) {
    return <p>loading ...</p>;
  }

  return (
    <div className={styles.container}>
      {/* page title */}
      <h1 className={styles.pageName}>Details Page</h1>

      <div className={styles.movieContainer}>
        {/* movie poster */}
        <div className={styles.imageContainer}>
          <img
            src={movieDetail.poster}
            alt={movieDetail.title}
            className={styles.moviePoster}
          />
        </div>

        {/* movie info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1 className={styles.movieTitle}>{movieDetail.title}</h1>

          <div className={styles.genreContainer}>
            <p style={{margin:'0'}}>Genre</p>
            <div style={{ display: "flex", gap: "10px"}}>
              {genres.map((genre) => {
                return <p key={Math.random()} style={{margin:'0', marginTop:'10px', color:'rgb(150,150,150)'}}>{genre.name}</p>;
              })}
            </div>
          </div>

          <div>
            <p className={styles.moveDescription}>Description</p>
            <p style={{color:'rgb(150,150,150)', marginTop:'10px'}}>{movieDetail.description}</p>
          </div>
        </div>
      </div>
      <button onClick={backToList} className={styles.button}>
            Back to List
          </button>
    </div>
  );
}

export default Details;
