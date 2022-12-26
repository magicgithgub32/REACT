import React, { useEffect } from 'react'

const MessageComponent = () => {

    useEffect (() => {
        console.log('Me monto en el DOM')

        return () => {
            console.log('Me desmonto del DOM')
        }
    }, [])
  return <h4>Batman</h4>  
}

export default MessageComponent