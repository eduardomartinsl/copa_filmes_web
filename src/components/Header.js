import React from 'react'

import strings from '../resources/strings'
import './Style.css'

export default function Header({titulo, descricao}) {
  return (
    <div className="header-style" >
      <h1>{strings.titulo}</h1>
      <text>{titulo}</text>
      <br/>
      <div className= "divider"/>
      <text>{descricao}</text>
    </div>
  )
}
