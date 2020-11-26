import React from 'react'

import MovieResultCell from '../components/MovieResultCell'
import './Style.css'

export default function ResultadoPage() {
  return (
    <div className="App">
      <div className='column-results'>
        <MovieResultCell nome={'filme 1'} posicao={1}  />
        <MovieResultCell nome={'filme 1'} posicao={1}  />
      </div>
    </div>
  )
}