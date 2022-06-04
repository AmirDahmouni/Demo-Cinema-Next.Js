import MeetupDetail from "../../components/meetups/MeetupDetail";
import DUMMY_MEETUPS  from "../api/MeetUps"
import {useRouter} from "next/router"
import { useState,useEffect } from "react";


//we can't use react hhoks inside getStaticProps or getServerSideProps
export async function getStaticProps(context){
  const meetupId=context.params.meetupId;
  console.log(meetupId)
  return {
    props :{

    }
  }
}

export async function getStaticPaths()
{
  return {
    fallback:false,
    paths: [{
      params :{
        meetupId:"m1"
      }
    }]
  }
}

export default function MeetupDetails()
{
    const router=useRouter()
    const [meetUp,setMeetUp]=useState(null)
    useEffect(()=>{
          setMeetUp(DUMMY_MEETUPS.find(meet=>meet.id==router.query.meetupId))
    },[])
        
    return ( meetUp && <MeetupDetail Meetup={meetUp} />)
        
}

