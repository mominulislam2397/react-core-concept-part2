import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './User5'
import Friends from './Friend6'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button clicked2')
  }

  const addToFour = (num)=>{
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concept 2</h1> 

      <Friends></Friends>

      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={()=>{alert('third')}}>third</button>
      <button onClick={() =>addToFour(3)}>Four</button>
    </>
  )
}

export default App
