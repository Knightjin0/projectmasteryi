import client from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props){
    const db = await client.db('sport')
    const Detail = await db.collection('soccer').findOne({"_id":new ObjectId(props.params.id)})
    return(
        <div>
            <h1>Edit page</h1>
            <form action="/api/edit" method="post">
                <div className="input">
                    <div className="input-item">
                        name : <input type="text" name="name" defaultValue={Detail.name}></input>
                    </div>
                    <div className="input-item">
                        num : <input type="text" name="num" defaultValue={Detail.num}></input>
                    </div>
                    <div className="input-item">
                        team : <input type="text" name="team" defaultValue={Detail.team}></input>
                    </div>
                    <input type="hidden" name="_id" value={Detail._id}></input>
                    <button type="submit" className="btn">registration</button>
                </div>
            </form>
        </div>
    )
}