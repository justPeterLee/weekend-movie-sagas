import styles from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
function Details() {
  const params = useParams();
  const movieId = params.id;

  const history = useHistory();

  
  const backToList = () => {
    history.push('/')
  }
  return (
    <div>
      <h1>Details Page</h1>
      <p>movie id: {movieId}</p>
      <button onClick={backToList}>Back to List</button>
    </div>
  );
}

export default Details;
