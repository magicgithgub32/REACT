import React, { lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const HomePage = lazy(()) => import(('./pages/Home')) 
const ProfilePage = lazy(()) => import(('./pages/Profile')) 


function App() {

  return (
    <div className="App">
      <Routes>
        <Route 
        path='/'
         element={
          <React.Suspense fallback={<h2>Cargando página...</h2>}>
          <HomePage />
          </React.Suspense>
         }
       />
        <Route
         path='/profile' 
         element={
          <React.Suspense fallback={<h2>Cargando página...</h2>}>
          <ProfilePage /> />
         </React.Suspense>
         }
         />
      </Routes>

    </div>
  )
}

export default App
