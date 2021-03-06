import React from 'react'
import './Style.css'

export default function MovieCell({ filme, filmesSelecionados, setFilmesSelecionados }) {
  return (
    <div className="cell"
      onClick={() => {
        setFilmesSelecionados(
          items =>
            items.includes(filme) ? items.filter(x => x !== filme) : items.concat(filme))
      }}>
      <div style={{ margin: 16 }}>
        <input
          name="isGoing"
          type="checkbox"
          checked={filmesSelecionados.includes(filme)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }} >
        <text style={{ fontWeight: 'bold' }}>{filme.titulo}</text>
        <text>{filme.ano}</text>
      </div>
    </div>
  )
}