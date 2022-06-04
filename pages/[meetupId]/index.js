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
        meetupId:"m1"
       }
      },
      {
        params :{
          meetupId:"m2"
        }
      }
   ]
  }
}

export default function MeetupDetails(props)
{
   useEffect(()=>{

   },[])
    return <MeetupDetail Meetup={props.meetUp} />    
}

