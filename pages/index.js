import MeetupList from "../components/meetups/MeetupList"
import DUMMY_MEETUPS from "./api/MeetUps"

export async function getStaticProps(){
  return {
    props: {
       meetups: DUMMY_MEETUPS
    }
  };
}

export default function HomePage(props) {
  console.log(props)
  return (
      <MeetupList meetups={props.meetups}/>   
  )

}


