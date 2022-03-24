import React, { useRef } from "react"
import Button from "./Button"
import Cookies from 'universal-cookie'

const Login = (props) => {

    const passwordRef = useRef('')
    const cookies = new Cookies()
    const startAdminHandler = () => {
        fetch('http://localhost:8000/admin/', {
            method: 'post',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({"value": passwordRef.current.value})}).then((res) => res.json()
            .then((val) => {if(val) {
                localStorage.setItem("token", val.access_token)
                cookies.set("token", val.access_token, { path: '/' })
                props.isLogged()
            }}))
    }
    return (
    <div>
        <h1>Wpisz hasło</h1>
        <input type="password" ref={passwordRef}/>
        <Button action={startAdminHandler}>START</Button>
        <Button action={props.changeUser}>użytkownik</Button>
    </div>)
}
export default Login