export default function New(){
    return(
        <div>
            <h1>New page</h1>
            <form action="/api/new" method="post">
                <div className="input">
                    <div className="input-item">
                        name : <input type="text" name="name"></input>
                    </div>
                    <div className="input-item">
                        num : <input type="text" name="num"></input>
                    </div>
                    <div className="input-item">
                        team : <input type="text" name="team"></input>
                    </div>
                    <button type="submit" className="btn">registration</button>
                </div>
            </form>
        </div>
    )
}