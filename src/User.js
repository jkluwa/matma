import React, { useRef } from "react"
import Button from "./Button"

const User = (props) => {

    const nameRef = useRef('')

    const startHandler = (event) => {
        event.preventDefault()
        if(nameRef !== '') {
            fetch('https://matma-backend.herokuapp.com/users/create/', {
            method: 'post',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ "name": nameRef.current.value })}).then((res) => {
                console.log(res);
            })
        }
      }

    return (
    <div>
        <h1>Wpisz nazwę</h1>
        <input ref={nameRef}/>
        <Button onClick={startHandler}>START</Button>
        <Button action={props.changeUser}>admin</Button>
    </div>

    )
}

export default User