import { useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import Review from './components/Review'

function App() {

const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Movie 
      title='Guardianes de la Galaxia' 
      poster='./assets/00106580155239____1__1200x1200.webp'
    />

    <hr />

    <label htmlFor='score'>
      <input 
      type="number" 
      name='score' 
      id='score' 
      value={score}
      onChange={(e) => setScore(e.target.valueAsNumber)}
      />
    </label>

    <Review 
    title='Guardianes de la Galaxia' 
    score = {score}
    />
    </div>
  )
}

export default App
