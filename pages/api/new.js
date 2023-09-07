import client from "@/util/database"

export default async function Handler(req, res){
    if(req.method==='GET')
        return res.status(404).json('그런거없다')

    const db = await client.db('sport')
    const result = await db.collection('soccer').insertOne(req.body)

    if(result.acknowledged)
        res.redirect(302, '/msg/200')
    else
        res.redirect(302, '/msg/400')
}