import React, { useEffect, useState } from 'react'

import MovieCell from '../components/MovieCell'
import filmes from '../resources/filmes'
import strings from '../resources/strings'
import { useHistory } from 'react-router-dom'
import useBuscaFilmes from '../services/useBuscaFilmes'

import './Style.css'

export default function ListaFilmesPage({ setTitulo, setDescricao }) {

  setTitulo(strings.fase_selecao.titulo)
  setDescricao(strings.fase_selecao.descricao)

  const [filmesSelecionados, setFilmesSelecionados] = useState([])
  const { listaFilmes, Loading } = useBuscaFilmes()

  const history = useHistory();
  function navegaParaResultados() {
    if(filmesSelecionados.length != 8){
      
    }
    (filmesSelecionados.length <= 7 ?
      alert("Por favor, escolha 8 filmes")
      :
      history.push({
        pathname: '/resultado',
        state: { filmesSelecionados }
      })
    )
    console.log(filmesSelecionados)
  }

  return (
    <div className="App">
      <div className="movies-count-row">
        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <text>Selecionados:</text>

          <text style={{color: filmesSelecionados.length <= 8 ?  null : 'red' }} >{filmesSelecionados.length} de 8 filmes</text>
        </div>
        <button style={{ padding: 16 }} onClick={navegaParaResultados}>
          Gerar meu campeonato
        </button>
      </div>

      <div className="table">
        {
          listaFilmes.map(filme =>
              <MovieCell
                filme={filme}
                filmesSelecionados={filmesSelecionados}
                setFilmesSelecionados={setFilmesSelecionados} />
          )}
      </div>

    </div>
  );
}

