import React from 'react'
import useCounter from '../hooks/UseCounter'

const Decrement = () => {
    const { count, handleDecrement } = useCounter(10);

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={handleDecrement}>-1</button>
    </div>
  )
}

export default Decrement