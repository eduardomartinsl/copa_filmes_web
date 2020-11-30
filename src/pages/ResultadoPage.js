import React, { useEffect, useState } from 'react'

import MovieResultCell from '../components/MovieResultCell'
import strings from '../resources/strings'
import './Style.css'

export default function ResultadoPage({ setTitulo, setDescricao, filmesVencedores }) {

  setTitulo(strings.resultado_final.titulo)
  setDescricao(strings.resultado_final.descricao)
  
  const [filmesFinalistas, setFilmesFinalistas] = useState(filmesVencedores)

  return (
    <div className="App">
      <div className='column-results'>
        {filmesFinalistas.map( filme => <MovieResultCell filme={filme} /> )}
      </div>
    </div>
  )
}