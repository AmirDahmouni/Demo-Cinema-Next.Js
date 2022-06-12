
import NewMovieForm from "../../components/movies/NewMovieForm"
import axios from "axios"
import { useRouter } from "next/router"

export default function NewMoviePage()
{
    const router=useRouter()
    const  addMeetUpHandler=async (entredMeetupData)=>{
      
        try
        {
            const {data}=await axios.post("/api/new-movie",entredMeetupData)
            router.push("/")
        }
        catch(ex)
        {
          console.log(ex.message)  
        }
      
    }
    return <NewMovieForm onAddMovie={addMeetUpHandler} />
}