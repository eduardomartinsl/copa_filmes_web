import React from 'react'

export default function MovieCell({titulo, ano}) {
  return (
    <div className="cell" >
      <div
        style={{ margin: 16 }}>
        <input
          name="isGoing"
          type="checkbox" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }} >
        <text style={{ fontWeight: 'bold' }}>{titulo}</text>
        <text>{ano}</text>
      </div>
    </div>
  )
}