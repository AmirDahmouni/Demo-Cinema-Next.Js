import axios from "axios"
import MoviesList from "../components/movies/MoviesList"

// executed after the build and deploiement
export async function getStaticProps({req,res}){
  
  try
  {
    
    const {data:movies}=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1}`)
    const {data:localMovies}=await axios.get("http://localhost:3000/api/movies")

    let allMovies=movies.results.sort((a,b)=>new Date(b.release_date) - new Date(a.release_date))
    
    allMovies=[...allMovies,...localMovies.movies]
    
    

    return {
    props: {
       movies: allMovies
      },
      revalidate:10
    };
    
  }
  catch(ex)
  {
    console.log(ex)
  }
  
  
}
//for every incomming request to the server dynamically
/*
export async function getServerSideProps(context){
  const req=context.req;
  const res=context.res;
  return {
    props:{
      meetups: DUMMY_MEETUPS
    }
  };
}*/

export default function HomePage(props) 
{
  return (
      <MoviesList movies={props.movies}/>   
  )
}


