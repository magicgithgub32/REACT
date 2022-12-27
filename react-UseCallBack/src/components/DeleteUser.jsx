import React, {memo} from 'react'

const DeleteUser = memo (({deleteUser, name}) => {
    console.log('DeleteUser on render')
  return <button onClick={deleteUser}>{name}</button>
})

export default DeleteUser