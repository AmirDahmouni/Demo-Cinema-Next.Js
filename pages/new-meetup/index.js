
import NewMeetUpForm from "../../components/meetups/NewMeetupForm"

export default function NewMeetUpPage()
{
    const  addMeetUpHandler=async (entredMeetupData)=>{
       console.log(entredMeetupData)
    }
    return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}