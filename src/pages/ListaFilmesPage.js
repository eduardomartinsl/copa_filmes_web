import React, {useState} from 'react'

import MovieCell from '../components/MovieCell'
import filmes from '../resources/filmes'
import strings from '../resources/strings'
import './Style.css'

export default function ListaFilmesPage({setTitulo, setDescricao}) {

  setTitulo(strings.fase_selecao.titulo)
  setDescricao(strings.fase_selecao.descricao)

  const [filmesSelecionados, setFilmesSelecionados] = useState([])

  return (
    <div className="App">

      <div style={{ justifyContent: 'space-between', display: 'flex', flex: 1, alignItems: 'center', margin: 8 }}>

        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <text>Selecionados:</text>
        <text>{filmesSelecionados.length} de 8 filmes</text>
        </div>

        <button style={{ padding: 16 }} >
          gerar meu campeonato
        </button>

      </div>

      <div className="table">
        {filmes.map(filme =>

          <MovieCell 
            filme={filme} 
            filmesSelecionados={filmesSelecionados} 
            setFilmesSelecionados={setFilmesSelecionados} />
        )}
      </div>
      
    </div>
  );
}

