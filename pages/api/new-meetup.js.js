// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//  /api/new-meetup
import {MongoClient} from "mongodb"

export default async function handler(req, res) {
  // if( req.method=='POST' )
  const {title,image,address,}=req.body
  const client=await MongoClient.connect("mongodb://localhost/movies")
  const db=client.db()

  const meetupCollections=db.collection("meetups")
  try{
    const result=await meetupCollections.insertOne(req.body)
  }
  catch(ex)
  {
    return res.status(400).json({ error:ex.message })
  }
  
  client.close()

  return res.status(200).json({ message:"success fetching movies",result })
}
