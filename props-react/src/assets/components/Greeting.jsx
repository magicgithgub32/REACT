import React from 'react'

const Greeting = ({name, surname}) => {
    console.log(name, surname);
  return (
    <div>Hola, {name} {surname}</div>
  )
}

export default Greeting