import client from "@/util/database"
import { ObjectId } from "mongodb"
import Link from "next/link"

export default async function Detail(props){
    const db = await client.db('sport')
    const Detail = await db.collection('soccer').findOne({"_id":new ObjectId(props.params.id)})
    return(
        <div className="detail">
            <div className="detail-item">name :{Detail.name}</div>
            <div className="detail-item">num :{Detail.num}</div>
            <div className="detail-item">team :{Detail.team}</div>
        </div>
    )
}