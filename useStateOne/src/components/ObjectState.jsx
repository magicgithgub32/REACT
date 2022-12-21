import React, { useState } from 'react'

const ObjectState = () => {
    const [avenger, setAvenger] = useState({
        name: "Tony Starck",
        superHeroName: "IronMan",
        age: 45
    })

  return (
    <div>
        
        <h4>{avenger.name} || {avenger.superHeroName} || {avenger.age} years</h4>


        <input 
        type="text" 
        value={avenger.name}
        onChange={(e) => setAvenger({...avenger, name: e.target.value})}
        />
        <input 
        type="text" 
        value={avenger.superHeroName}
        onChange={(e) => setAvenger({...avenger, superHeroName: e.target.value})}
        />
        <input 
        type="number"
        value={avenger.age}
        onChange={(e) => setAvenger({...avenger, age: e.target.value})}

        />
    </div>
  )
}

export default ObjectState

