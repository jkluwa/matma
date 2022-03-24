import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import User from './User'
import AdminLogin from './AdminLogin'
import Admin from './Admin'



const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #afafaf;
  padding: 20px 50px;
  text-align: center;
`



const Menu = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isUser, setIsUser] = useState(true)

  const changeUser = () => {
    setIsUser((user) => {
      return !user
    }
    )
  }
  
  
    return <Form>
      {isUser && <User changeUser={changeUser}/>}
      {!isUser && !isLogged && <AdminLogin isLogged={() => {setIsLogged(!isLogged)}} changeUser={changeUser} />}
      {!isUser && isLogged && <Admin />}
    </Form>
}

export default Menu;