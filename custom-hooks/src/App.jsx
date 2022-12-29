import './App.css'
import Decrement from './components/Decrement'
import Increment from './components/Increment'
import Toggleable from './components/Toggleable'
import { useState, useEffect } from 'react'
import useWindowSize from './hooks/useWindowSize'

function App() {
  const [state, setState] = useState(false)
  const [width, heigth] = useWindowSize()

  useEffect(()=>{
    console.log("Me muevo", width)
  }, [width, heigth])

  return (
    <div className="App">
      < Decrement />
      < Increment />
      < Toggleable />
    <button onClick={()=>{setState(!state)}}>Change state</button>

     <div>
      <h1>Window Size: </h1>
      <h3>Width: {width}</h3>
      <h3>Heigth: {heigth}</h3>
     </div>

    </div>
  )
}

export default App
