import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import User from 'User'
import Admin from 'Admin'



const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: gray;
  padding: 20px 50px;
  text-align: center;
`



const Menu = () => {
  const [isUser, setIsUser] = useState(true)
  const [isGameAvaible, setIsGameAvaible] = useState(true)

  const changeUser = () => {
    setIsUser((user) => {
      return !user
    }
    )
  }
  
  
    return <Form>
      {isUser && <User props={changeUser}/>}
      {!isUser && <Admin props={changeUser} />}
    </Form>
}

export default Menu;