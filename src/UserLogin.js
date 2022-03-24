import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const UserLogin = (props) => {
    const nameRef = useRef()
    const [isAdminActive, setIsAdminActive] = useState(false)
    
    useEffect(() => {
        if(!isAdminActive) {
            const ws = new WebSocket('ws://localhost:8000/ws/active/admin')
            ws.onopen = () => {ws.send('isAdminActive')}
            ws.onmessage = (event) => {
                if(event.data == "adminStarted") {
                    setIsAdminActive(true)
                    ws.close()
                }
               
            }
        }
    })
    const startHandler = () => {
        props.login(nameRef.current.value)
    }

    return (
        <>
                { isAdminActive && <div>
                <h1>Wpisz nazwę</h1>
                <input ref={nameRef}/>
                <Button action={startHandler}>START</Button>
                <Button action={props.changeUser}>admin</Button>
                </div> }
                {!isAdminActive && <div>Gra nieaktywna <Button action={props.changeUser}>admin</Button></div>}
        </>
        )
}

export default UserLogin