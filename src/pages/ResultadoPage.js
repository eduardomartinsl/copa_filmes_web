import React from 'react'

import MovieResultCell from '../components/MovieResultCell'
import strings from '../resources/strings'
import './Style.css'

export default function ResultadoPage({setTitulo, setDescricao}) {

  setTitulo(strings.resultado_final.titulo)
  setDescricao(strings.resultado_final.descricao)

  return (
    <div className="App">
      <div className='column-results'>
        <MovieResultCell nome={'filme 1'} posicao={1}  />
        <MovieResultCell nome={'filme 1'} posicao={1}  />
      </div>
    </div>
  )
}