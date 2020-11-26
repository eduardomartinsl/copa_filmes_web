import React from 'react'
import filmes from '../resources/filmes'
import './Style.css'

export default function MovieCell({ filme, filmesSelecionados, setFilmesSelecionados }) {
  return (
    <div className="cell" >
      <div
        style={{ margin: 16 }}>

        <input
          name="isGoing"
          type="checkbox"

          checked={filmesSelecionados.includes(filme.id)}

          onChange={() => {
            // TODO corrigir quantidade de filmes selecionados
            if (filmesSelecionados.length <= 7) {
              setFilmesSelecionados(
                items => items.includes(filme.id) ?

                  items.filter(x => x !== filme.id)
                  :
                  items.concat(filme.id))
            }
          }
          }

        />

      </div>
      <div style={{ display: "flex", flexDirection: "column" }} >
        <text style={{ fontWeight: 'bold' }}>{filme.titulo}</text>
        <text>{filme.ano}</text>
      </div>
    </div>
  )
}