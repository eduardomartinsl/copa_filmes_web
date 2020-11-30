import React, { useCallback, useEffect, useState } from 'react'

import MovieCell from '../components/MovieCell'
import strings from '../resources/strings'
import { useHistory } from 'react-router-dom'
import useBuscaFilmes from '../services/useBuscaFilmes'
import filmesLocais from '../resources/filmes'
import useEnviaFilmesSelecionados from '../services/useEnviaFilmesSelecionados'
import './Style.css'

export default function ListaFilmesPage({ setTitulo, setDescricao, setFilmesVencedores }) {

  setTitulo(strings.fase_selecao.titulo)
  setDescricao(strings.fase_selecao.descricao)

  const [filmesSelecionados, setFilmesSelecionados] = useState([])
  const { enviaFilmesSelecionados, filmesVencedores, isLoading } = useEnviaFilmesSelecionados()
  const history = useHistory();

  useEffect(() => {
    if(!isLoading && filmesVencedores){
      setFilmesVencedores(filmesVencedores)
      history.push({
        pathname: '/resultado'
      })
    }
  }, [filmesVencedores])

  return (
    <div className="App">
      <div className="movies-count-row">
        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <text>Selecionados:</text>

          <text style={{ color: filmesSelecionados.length <= 8 ? null : 'red' }} >{filmesSelecionados.length} de 8 filmes</text>
        </div>
        <button style={{ padding: 16 }} onClick={enviarResultados}>
          Gerar meu campeonato
        </button>
      </div>
      <div className="table">
          {filmesLocais.map(filme =>
            <MovieCell
              filme={filme}
              filmesSelecionados={filmesSelecionados}
              setFilmesSelecionados={setFilmesSelecionados} />
          )}
      </div>
    </div>
  );

  function enviarResultados() {
    (filmesSelecionados.length <= 7 ?
      alert("Por favor, escolha 8 filmes")
      :
      enviaFilmesSelecionados(filmesSelecionados)
    )
    if (filmesSelecionados.length > 8){
      alert("Por favor, escolha somente 8 filmes")
    }
  }
}

