import MeetupDetail from "../../components/meetups/MeetupDetail";
import DUMMY_MEETUPS  from "../api/MeetUps"
import {useRouter} from "next/router"
import { useState,useEffect } from "react";



export default function MeetupDetails()
{
        const router=useRouter()
        const [meetUp,setMeetUp]=useState(null)
        useEffect(()=>{
          setMeetUp(DUMMY_MEETUPS.find(meet=>meet.id==router.query.meetupId))
        },[])
        
        return ( meetUp && <MeetupDetail Meetup={meetUp} />)
        
}