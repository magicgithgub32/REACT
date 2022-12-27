import React, { useRef } from 'react'
import '../App.css'

const CodeUseRefCss = () => {
    const colorRef = useRef(null);
const changeColor = () => {
    colorRef.current.className === 'box' ?
    colorRef.current.className = 'box-modified' :
    colorRef.current.className = 'box' 
}
  return (
    <>
    <div className="box" ref={colorRef}>I'm in a box</div>
    <button onClick={changeColor}>Modify color</button>
    </>
  )
}

export default CodeUseRefCss