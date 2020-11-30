import React, { useEffect, useState } from 'react'

import MovieResultCell from '../components/MovieResultCell'
import strings from '../resources/strings'
import { useHistory } from 'react-router-dom'
import './Style.css'

export default function ResultadoPage({ setTitulo, setDescricao, filmesVencedores }) {

  setTitulo(strings.resultado_final.titulo)
  setDescricao(strings.resultado_final.descricao)
  
  const [filmesFinalistas, setFilmesFinalistas] = useState(filmesVencedores)
  const history = useHistory();

  useEffect(() => {
    console.log(`filmesVencedores: ${filmesVencedores}`)
    console.log(`filmesFinalistas ${filmesFinalistas}`)
    if(!filmesFinalistas){
      history.push({
        pathname: '/'
      })
    }
  }, [filmesFinalistas])
  

  return (
    <div className="App">
      <div className='column-results'>
        {filmesFinalistas.map( filme => <MovieResultCell filme={filme} /> )}
      </div>
    </div>
  )
}