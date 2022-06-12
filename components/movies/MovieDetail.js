import { Fragment } from "react";
import classes from "./MovieDetail.module.css"


export default function MovieDetail({Movie})
{
    console.log(Movie)
     return ( 
     <section className={classes.detail}>
         
         <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/${Movie.poster_path}`} alt="" />
         <h1>{Movie.title}</h1>
         <h4>{Movie.popularity} views</h4>
         <p>{Movie.overview} </p>
     </section>
     )
}