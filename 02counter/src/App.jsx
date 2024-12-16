import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5) 

  const addValue = () => {
    // console.log("Clicked" ,counter);
    counter = counter + 1 ;
    if(counter <= 20){
      setCounter(counter)
    }
  }

  const removeValue = () => {
    // console.log("Clicked" ,counter);
    counter = counter - 1 ;
    if(counter >= 0){
      setCounter(counter)
    }

  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      >Increase {counter}</button>
      <br />
      <button
      onClick={removeValue}>Decrease {counter}</button>
    </>
  )
}

export default App
