import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <h1>React-Router v6</h1>
      </header>
      <div>
      
      <nav>
        <NavLink to="">Home đ</NavLink>
        <NavLink to="heroes">Heroes đŠčđ»ââïž </NavLink>
        <NavLink to="about">About đââïž</NavLink>
       </nav>
       </div>
        <main>
          <Outlet />
        </main>
        <footer>Created by RockTheCode with đ</footer>
       </div>
       
  )
}

export default App
