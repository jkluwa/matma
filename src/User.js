import React, { useRef, useEffect, useState } from "react"
import Button from "./Button"
import UserLogin from "./UserLogin"
import UserPage from "./UserPage"

const User = (props) => {
    const [userLogged, setUserLogged] = useState(false)
    const [reference, setReference] = useState("")
    const [username, setUsername] = useState("")
    const login = (name) => {
//CREATE USER
        if(name !== '') {
            fetch('http://localhost:8000/users/create/', {
                method: 'post',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name })}).then((res) => {
                    if(!res.ok) {
                        throw new Error()
                    }
                    setUsername(name)
                    setUserLogged(true)
                })
            }
//LISTEN FOR GAME START BY ADMIN
        
            
            
      }

    return (
    <div>
        {!userLogged && <UserLogin login={login} changeUser={props.changeUser}></UserLogin>}
        {userLogged && <UserPage name={username}></UserPage>}
    </div>

    )
}

export default User