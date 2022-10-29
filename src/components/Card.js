const Card = (props) => {
    return (
        <div className="card">
            <div className="foto">
            <img src={"https://app-id1.herokuapp.com/"+props.foto} />
            </div>
            <ul>
                <li>Nama : {props.nama}</li>
                <li>Agama : {props.agama}</li>
                <li>Tanggal Lahir : {props.tl}</li>
            </ul><br />
            <button onClick={()=>(props.setEdit(), props.setids(props.id))}>Edit</button><br />
            <button onClick={() => props.del(props.id)}>Delete</button>
        </div>
    )
}

export default Card;