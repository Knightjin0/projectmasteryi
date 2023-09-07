import client from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Handler(req, res){
    if(req.method==='GET')
        return res.status(404).json('그런거없다')
    console.log(req.body)
    const db = await client.db('sport')
    const result = await db.collection('soccer').updateOne(
        {"_id":new ObjectId(req.body._id)},
        {$set:{ 
            "name" : req.body.name,
            "num" : req.body.num,
            "team" : req.body.team,
        }})

    if(result.acknowledged)
        res.redirect(302, '/msg/300')
    else
        res.redirect(302, '/msg/400')
}