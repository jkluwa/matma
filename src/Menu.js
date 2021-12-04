import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components"



const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: gray;
  padding: 20px 50px;
  text-align: center;
`
const Button = styled.button`
  background-color: #bcbbed;
  border: 3px #9a99cb solid;
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
`


const Menu = () => {
    const [isGameAvaible, setIsGameAvaible] = useState(true);
  const nameRef = useRef("");
  const passwordRef = useRef("");
  let form = "";

  useEffect(() => {
  }, [])


  const startHandler = (event) => {
    event.preventDefault()
    fetch('https://matma-backend.herokuapp.com/users/create/', {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ "name": nameRef.current.value })})
  }

  const startAdminHandler = (event) => {
    event.preventDefault()
  }

  const adminHandler = () => {
    form = <Form>
    <h1>Wpisz hasło</h1>
    <input type="password" ref={passwordRef}/>
    <Button onClick={startAdminHandler}>Start</Button>
    <Button onClick={() => {setIsGameAvaible(true)}}>Jestem użytkownikiem</Button>
  </Form>
  }

  if(isGameAvaible) {
    form = <Form>
    <h1>Wpisz swoją nazwę</h1>
    <input ref={nameRef}/>
    <Button onClick={startHandler}>Start</Button>
    <Button onClick={adminHandler}>Jestem adminem</Button>
  </Form>
  } else {
    form =  <Form>
              <h1>Gra nie jest dostępna</h1>
            </Form>
  }
    return <div>{form}</div>
}

export default Menu;