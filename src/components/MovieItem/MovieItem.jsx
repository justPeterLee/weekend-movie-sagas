import { useHistory } from "react-router-dom";
import "./MovieItem.css";
export default function MovieItem(props) {
  const history = useHistory();

  const toDetails = () => {
    history.push(`/details/${props.id}`);
  };
  return (
    <div className="movie-item-container">
      <div className="movie-item-sub-container">
        <img
          src={props.poster}
          alt={props.title}
          onClick={toDetails}
          className="poster-image"
        />
        <div className="poster-title-container">
          <h3 className="poster-title">{props.title}</h3>
        </div>
      </div>
    </div>
  );
}
