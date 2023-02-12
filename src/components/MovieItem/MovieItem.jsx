import { useHistory } from "react-router-dom";
export default function MovieItem(props) {
    const history = useHistory();

    const toDetails = () => {
        history.push(`/details/${props.id}`)
    }
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.poster} alt={props.title} onClick={toDetails}/>
    </div>
  );
}
