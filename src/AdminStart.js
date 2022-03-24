import React, { useEffect, useState } from 'react'
import Button from './Button'
import User from './User'


const AdminStart = (props) => {
    let gameStart = false
    let height = 10
    
    const start = () => {
        props.ws.send("Start")
        props.startGame()
    }

    return (
        <div>
            Dominik
            <svg viewBox="-2 -2 100 100"  width="200px">
                <path d={`M 0 0 L 50,0 Q 60 0 60 10 L 60,${height} Q 60,${height+10} 70,${height+10}`} strokeWidth="2px" stroke="black" fill='none' />
                <path d={`M 0 ${height*2+20} L 50,${height*2+20} Q 60 ${height*2+20} 60 ${height*2+10} L 60,${height*2+10} Q 60,${height*2} 70,${height*2}`} strokeWidth="2px" stroke="black" fill='none' />
            </svg>
            {props.users.length}
            <h1>
                    { props.users.map(item => {
                        return <span key={item}> {item} </span>
                    }) }
            </h1>
            <Button action={start}>START</Button>
        </div>
    )
}

export default AdminStart;