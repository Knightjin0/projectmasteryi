export default function Msg(props){
    let msg = ''
    switch(props.params.id){
        case '200' : msg = "입력 성공";break;
        case '300' : msg = "수정 성공";break;
        case '400' : msg = "입력 실패";break;
    }

    return(
        <div>
            <h1>{msg}</h1>
        </div>
    )
}