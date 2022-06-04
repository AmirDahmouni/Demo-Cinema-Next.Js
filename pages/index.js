import MeetupList from "../components/meetups/MeetupList"
import DUMMY_MEETUPS from "./api/MeetUps"

// executed after the build and deploiement
export async function getStaticProps(){
  return {
    props: {
       meetups: DUMMY_MEETUPS
    },
    revalidate:10
  };
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

export default function HomePage(props) {
  return (
      <MeetupList meetups={props.meetups}/>   
  )
}


