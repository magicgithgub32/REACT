import React from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import HeroeDetail from '../components/HeroeDetail'

import { getHeroe, deleteHeroe } from '../api/Data'

const Heroe = () => {

  const params = useParams();

  const navigate = useNavigate();


  const heroe = getHeroe(params.id)



  return (
    <>
    <h2>Heroe Page</h2>

    < HeroeDetail heroe={heroe} />

    <button onClick={() => {
      deleteHeroe(heroe.id).then(()=> {
        navigate('/heroes')
      })
    }}>Delete {heroe.name}</button>


    
    </>
  )
}

export default Heroe