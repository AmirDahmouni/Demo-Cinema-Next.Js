import MovieDetail from "../../components/movies/MovieDetail";
import { useState,useEffect} from "react";
import axios from "axios"

//we can't use react hhoks inside getStaticProps or getServerSideProps
export async function getStaticProps(context){
  const {data:movie}=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/movie/${context.params.movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  
  return {
    props:{
      movie
    }
  }
}

export async function getStaticPaths()
{
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1}`)
  
  const movies = data.results.slice(0, 20);
  const paths = movies.map((post) => ({ params: { movieId: post.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}

export default function MovieDetails(props)
{
   useEffect(()=>{
    console.log(props)
   },[])
    return <MovieDetail Movie={props.movie} />    
}

