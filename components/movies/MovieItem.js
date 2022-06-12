import Card from '../ui/Card';
import classes from './MovieItem.module.css';
import {useRouter} from "next/router"

function MovieItem(props) {

  const router=useRouter()

  const showDetailsHandler=()=>
  {
     router.push("/"+props.id)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={`${process.env.REACT_APP_BASE_PATH}/${props.image}`} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h4>{props.popularity} views</h4>
        </div>
        <div className={classes.actions}>

          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MovieItem;