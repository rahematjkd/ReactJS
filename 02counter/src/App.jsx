import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(15)


  const addValue = () => {
    // console.log("clicked", counter);
    counter += 1
    setCounter(counter) //or setCounter(counter + 1)
  }

  const removeValue = () => {
    counter -= 1
    setCounter(counter) //or setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter} </h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
      <footer>
        footer: {counter}
      </footer>
    </>
  )
}

export default App
