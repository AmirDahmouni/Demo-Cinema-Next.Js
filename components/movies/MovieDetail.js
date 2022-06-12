import { Fragment } from "react";
import classes from "./MovieDetail.module.css"


export default function MovieDetail({Movie})
{
     return ( 
     <section className={classes.detail}>
         <img src={Movie.image} alt="" />
         <h1>{Movie.title}</h1>
         <address>{Movie.address}</address>
         <p>{Movie.description} </p>
     </section>
     )
}