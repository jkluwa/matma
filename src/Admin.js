import React, { useState, useMemo } from "react"
import AdminStart from "./AdminStart"
import AdminPage from "./AdminPage"


const Admin = () => {
    const [isGameOn, setIsGameOn] = useState(false)
    const [compInfo, setCompInfo] = useState()
    const [users, setUsers] = useState([])
    const ws = useMemo(() => {return new WebSocket("ws://localhost:8000/ws/admin")}, ["ws://localhost:8000/ws/admin"])

    ws.onopen = ()=>{ws.send("adminStarted")}
    ws.onmessage = (event) => {
        if (event.data == 'isAdminActive') {
            ws.send('adminStarted')
        } else if(Array.isArray(event.data)) {
            console.log("HM")
            setCompInfo(JSON.parse(event.data))
        } else {
            console.log("AHA")
            setUsers((users_) => {
                return [...users_, event.data]
            })
        }
    }


    return (
        <div>
            {!isGameOn && <AdminStart ws={ws} users={users} startGame={() => setIsGameOn(true)} />}
            {isGameOn && <AdminPage compInfo={compInfo} ws={ws}/>}
        </div>
    )
}
export default Admin