import React, { useState } from "react";
import styled from "styled-components";

import Menu from './Menu'
import Game from './Game'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
  background-color: blanchedalmond;
`

const App = () => {
  const [isGameOn, setIsGameOn] = useState(false)
  return (
    
    <Container>
      {!isGameOn && <Menu startGame={()=>{setIsGameOn(true)}}/>}
      {isGameOn && <Game />}
    </Container>
  )
}

export default App;
