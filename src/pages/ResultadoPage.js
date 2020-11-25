import React from 'react'

import Header from '../components/Header'
import strings from '../resources/strings'

export default function ResultadoPage(){
  return(
    <div className="App">
      <Header 
        titulo={strings.resultado_final.titulo} 
        descricao={strings.resultado_final.descricao}/>
    </div>
  )
}