import React, { useRef } from "react"
import Button from "./Button"


const Admin = (props) => {

    const passwordRef = useRef('')

    const startAdminHandler = () => {
        fetch('https://matma-backend.herokuapp.com/admin/', {
            method: 'post',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ "password": passwordRef.current.value })}).then((res) => {
                console.log(res);
            })
    }
    const changeUser = (event) => {
        event.preventDefault()
        props.changeUser()
    }
    return (
    <div>
        <h1>Wpisz hasło</h1>
        <input type="password" ref={passwordRef}/>
        <Button action={startAdminHandler}>START</Button>
        <Button action={props.changeUser}>użytkownik</Button>
    </div>)
}
  export default Admin