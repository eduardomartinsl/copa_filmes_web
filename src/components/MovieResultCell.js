import React from 'react'

export default function MovieResultCell({ posicao, nome }) {
  return (

    <div className='movie-result-cell'>

      <div className='movie-result-cell-position' >
        <text>{posicao}</text>
      </div>
      <div className='movie-result-cell-title'>{nome}</div>
    </div>
  )
}