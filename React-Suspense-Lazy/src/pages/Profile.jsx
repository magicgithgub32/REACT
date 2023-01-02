import React from 'react'
import { lazy, useState } from 'react'

const ProfileData = lazy(() => import('../components/ProfileData')) 


const ProfilePage = () => {
const [ toggleData, setToggleData ] = useState(false)

  return (
   <>
   <h1>Profile Page 🔐</h1>

   <button onClick={() => setToggleData(!toggleData)}>Toggle Data</button>

    {toggleData ? (
    
    <React.Suspense fallback={<h2>Cargando componente...</h2>}>
    <ProfileData />   
    </React.Suspense>
    ) : null} 
   </>
  )
}

export default ProfilePage