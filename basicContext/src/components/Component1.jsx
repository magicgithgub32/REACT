import React, { useState, createContext } from 'react'
import Component2 from './Component2'

export const UserContext = createContext()


const Component1 = () => {

const [ user, setUser ] = useState('Leo Piqueras')


  return (
    <div>
        <UserContext.Provider value={user}>
        <h1>Bienvenido, {user}</h1>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        <Component2 />
        </UserContext.Provider>
    </div>
  )
}

export default Component1