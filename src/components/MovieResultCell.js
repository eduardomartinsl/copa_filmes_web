import React from 'react'

export default function MovieResultCell({ filme }) {
  return (
    
    <div className='movie-result-cell'>

      <div className='movie-result-cell-position' >
        <text>{filme.Posicao}</text>
      </div>
      <div className='movie-result-cell-title'>{filme.Titulo}</div>
    </div>
  )
}