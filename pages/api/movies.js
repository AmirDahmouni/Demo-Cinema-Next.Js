import {MongoClient} from "mongodb"

export default async function handler(req, res) {
  
  if( req.method=='GET' )
  
  {
    
    const client=await MongoClient.connect("mongodb://localhost/cinema")
    const db=client.db()

    const moviesCollection=db.collection("movies")
    try
    {
     const movies=await moviesCollection.find().toArray()
     if(movies) return res.status(200).json({ movies})
    }
    catch(ex)
    {
      return res.status(400).json({ error:ex.message })
    }
  
    client.close()
    
    
  }
}