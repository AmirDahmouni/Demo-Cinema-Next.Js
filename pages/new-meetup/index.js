
import NewMeetUpForm from "../../components/meetups/NewMeetupForm"

export default function NewMeetUpPage()
{
    const addMeetUpHandler=(entredMeetupData)=>{
       console.log(entredMeetupData)
    }
    return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}