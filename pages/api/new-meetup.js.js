// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//  /api/new-meetup

export default function handler(req, res) {
  // if( req.method=='POST' )
  const data=req.body
  const {title,image,address,}=data
  res.status(200).json({ name: 'John Doe' })
}
