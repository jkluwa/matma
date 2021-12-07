import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  background-color: #bcbbed;
  border: 3px #9a99cb solid;
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
`

    

const Button = (props) => {

    const click = (event) => {
        event.preventDefault()
        props.action()
    }


    return <Btn onClick={click}>{props.children}</Btn>
}

export default Button