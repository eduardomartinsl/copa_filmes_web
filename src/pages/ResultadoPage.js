import React from 'react'

import MovieResultCell from '../components/MovieResultCell'
import strings from '../resources/strings'
import { useParams } from 'react-router-dom'
import './Style.css'

export default function ResultadoPage({ setTitulo, setDescricao, filmesVencedores }) {

  setTitulo(strings.resultado_final.titulo)
  setDescricao(strings.resultado_final.descricao)

  console.log(`filme vencedor: ${JSON.stringify(filmesVencedores)}`)

  return (
    <div className="App">
      <div className='column-results'>
        {/* {filmesVencedores.map(filme => { */}
          {/* <MovieResultCell filme={filme} /> */}
          {/* <MovieResultCell filme={filme} /> */}
        {/* })} */}
      </div>
    </div>
  )
}