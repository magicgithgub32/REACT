import React from 'react'
import useCounter from '../hooks/UseCounter'


const Increment = () => {
    const { count, handleIncrement } = useCounter(0);

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={handleIncrement}>+1</button>
    </div>
  )
}

export default Increment