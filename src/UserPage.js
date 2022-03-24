import React, { useState, useEffect } from "react";

const UserPage = (props) => {
    const [username, setUsername] = useState(["", ""])
    const [reference, setReference] = useState("")

    useEffect( () => {
    const ws = new WebSocket('ws://localhost:8000/ws/' + props.name)
    ws.onopen = () => {
        ws.send(props.name)
        ws.onmessage = (event) => {
            setReference(event.data.split("_"))
        }
        setUsername(props.name)
        }
    }, [])
    
    return(
        <>
            <div>
                rywalizujesz z: {reference[0]} <br />
                zadanie: {reference[1]}
            </div>
            <input type="text"></input>
            <button>prześlij</button>
        </>
    )
}

export default UserPage