import React, { useState, useRef } from "react";
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
  let form = "";
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    fetch('https://matma-backend.herokuapp.com/users/create/', {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ "name": nameRef.current.value })})
  }
  if(isGameAvaible) {
    form = <Form>
    <h1>Wpisz swoją nazwę</h1>
    <input ref={nameRef}/>
    <Button onClick={submitHandler}>Start</Button>
  </Form>
  } else {
    form =  <Form>
              <h1>Gra nie jest dostępna</h1>
            </Form>
  }
    return <div>{form}</div>
}

export default Menu;