import client from "@/util/database"
import Link from "next/link"

export default async function List(){
    const db = await client.db('sport')
    const list = await db.collection('soccer').find().toArray()
    return(
        <div>
            <h1>List page</h1>
            <div className="list">
                {
                    list.map((e, i)=><div className="list-item"><Link href={`/detail/${e._id}`}>{e.name}</Link><Link href={`/edit/${e._id}`}> 　　🔧</Link></div>)
                }
            </div>
        </div>
    )
}