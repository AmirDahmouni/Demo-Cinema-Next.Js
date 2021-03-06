// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//  /api/new-meetup
import {MongoClient} from "mongodb"

export default async function handler(req, res) {
  
  if( req.method=='POST' )
  
  {
    const data=req.body
    const {title,image,address}=data
    const client=await MongoClient.connect("mongodb://localhost/cinema")
    const db=client.db()

    const moviesCollections=db.collection("movies")
    try{
     const result=await moviesCollections.insertOne(data)
     if(result) return res.status(201).json({ message:"success add movie"})
    }
    catch(ex)
    {
      return res.status(400).json({ error:ex.message })
    }
  
    client.close()
    
    
  }
}
