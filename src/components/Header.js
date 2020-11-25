import React from 'react'

import strings from '../resources/strings'

export default function Header({titulo, descricao}) {
  return (
    <div className="header-style" >
      <h1>{strings.titulo}</h1>
      <text>{titulo}</text>
      <br />
      <div style={{
        margin: '16px',
        width: '80%',
        height: 2,
        backgroundColor: '#ccc',
        alignSelf: 'center'
      }}
      />
      <text>{descricao}</text>
    </div>
  )
}
