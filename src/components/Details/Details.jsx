import styles from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
function Details() {
  const params = useParams();
  const movieId = params.id;

  const history = useHistory();

  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  const movieDetail = useSelector((store)=> store.movieDetail[0])

  const fetchGenre = () => {
    dispatch({ type: "FETCH_GENRE", payload: movieId });
    dispatch({ type: "FETCH_MOVIE_DETAIL", payload: movieId });
  };

  const backToList = () => {
    history.push("/");
  };

  useEffect(() => {
    fetchGenre();
  }, []);
  
  if(!movieDetail){
    return <p>loading ...</p>
  }
  
  return (
    <div>
      <h1>Details Page</h1>
      <p>movie id: {movieId}</p>
      <p>title: {movieDetail.title}</p>
      <p>description: {movieDetail.description}</p>
      <img src={movieDetail.poster}/>
      {genres.map((genre) => {
        return <p key={Math.random()}>{genre.name}</p>;
      })}
      <button onClick={backToList}>Back to List</button>
    </div>
  );
}

export default Details;
