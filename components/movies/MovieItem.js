import Card from '../ui/Card';
import classes from './MovieItem.module.css';
import {useRouter} from "next/router"
import Image from 'next/image';
import { useEffect, useState } from "react"
function MovieItem(props) {

  const router=useRouter()

  const showDetailsHandler=()=>
  {
     router.push("/"+props.id)
  }
  const [source,setSource]=useState()
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/${props.image}`} quality={100} layout="intrinsic" width={800} height={600} alt={props.title} />
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