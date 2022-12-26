import React, { useState } from 'react'
import MessageComponent from './MessageComponent';

const EffectUnmount = () => {
    const [visible, setVisible] = useState(false);
    
  return (
    <>
    {visible && <MessageComponent />}
    <button onClick={() => setVisible(!visible)}>I'm</button>
    </>
  )
}

export default EffectUnmount