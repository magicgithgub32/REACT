import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComponentAsync from './assets/components/MyComponentAsync'

function App() {

  const x = 14

  return (
    <div className="App">
      <MyComponentAsync />
    </div>
  )
}

export default App
