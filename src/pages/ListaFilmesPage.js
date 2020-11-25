import React from 'react'

import MovieCell from '../components/MovieCell'
import Header from '../components/Header'
import strings from '../resources/strings'
import filmes from '../resources/filmes'

export default function ListaFilmesPage() {
  return (
    <div className="App">

      <Header
        titulo={strings.fase_selecao.titulo}
        descricao={strings.fase_selecao.descricao}/>

      <div style={{ justifyContent: 'space-between', display: 'flex', flex: 1, alignItems: 'center', margin: 8 }}>

        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <text>Selecionados:</text>
          <text>0 de 8 filmes</text>
        </div>

        <button style={{ padding: 16 }} >
          gerar meu campeonato
        </button>

      </div>

      <div className="table">
        {filmes.map(filme =>
          <MovieCell titulo={filme.titulo} ano={filme.ano} />
        )}
      </div>
      
    </div>
  );
}

