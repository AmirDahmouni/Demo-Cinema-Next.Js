import axios from "axios"
import MoviesList from "../components/movies/MoviesList"


// executed after the build and deploiement
export async function getStaticProps(){

  try
  {
    
    const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1}`)
    return {
    props: {
       movies: data.results.sort((a,b)=>new Date(b.release_date) - new Date(a.release_date))
      },
      revalidate:10
    };
    
  }
  catch(ex)
  {
    console.log(ex.message)
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


