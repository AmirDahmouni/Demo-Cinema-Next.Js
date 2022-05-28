import { Fragment } from "react";
import classes from "./MeetupDetail.module.css"


export default function MeetupDetail({Meetup})
{
     return ( 
     <section className={classes.detail}>
         <img src={Meetup.image} alt="" />
         <h1>{Meetup.title}</h1>
         <address>{Meetup.address}</address>
         <p>{Meetup.description} </p>
     </section>
     )
}