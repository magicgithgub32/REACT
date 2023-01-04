import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h2>HomePage</h2>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem, fugit ex, hic ut voluptates, voluptate maiores saepe distinctio dolore nemo vero ratione repellat ipsa! Mollitia, illo! Fugit, natus sunt.
    </p>

    <p>
      <span>Visita la página de Héroes 🦹🏻‍♂️</span>
      <Link to="heroes">Heroes</Link>
    </p>
    </>
  )
}

export default Home