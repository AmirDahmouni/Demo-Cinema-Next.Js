import MovieDetail from "../../components/movies/MovieDetail";
import {useRouter} from "next/router"
import { useState,useEffect } from "react";


//we can't use react hhoks inside getStaticProps or getServerSideProps
export async function getStaticProps(context){
  const meetupId=context.params.movieId;
  return {
    props :{
      meetUp:DUMMY_MEETUPS.find(meet=>meet.id==context.params.meetupId)
    }
  }
}

export async function getStaticPaths()
{
  return {
    fallback:false,
    paths: [
      {
      params :{
        movieId:"m1"
       }
      },
      {
        params :{
          movieId:"m2"
        }
      }
   ]
  }
}

export default function MovieDetails(props)
{
   useEffect(()=>{

   },[])
    return <MovieDetail Movie={props.movies} />    
}

