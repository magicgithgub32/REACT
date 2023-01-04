import React from 'react'

import { Link, Outlet } from 'react-router-dom'

import { getHeroes } from '../api/Data'
import HeroeDetail from '../components/HeroeDetail';

const Heroes = () => {

  const heroes = getHeroes();
  return (
    <>
    <h3>All Heroes 🦹🏻‍♂️</h3>
    <ul>
      {
        heroes.map((heroe) => (
          <li key={heroe.id}>
            <Link to={`/heroe/${heroe.id}`}>
          <HeroeDetail heroe={heroe}/>
          </Link>
          </li>
        ))
      }
    </ul>
    <Outlet />
    </>
  )
}

export default Heroes