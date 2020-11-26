import React, {useState} from 'react'

import ListaFilmesPage from './pages/ListaFilmesPage'
import ResultadoPage from './pages/ResultadoPage'
import Header from './components/Header'
import strings from './resources/strings'

function App() {

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")

  return (
    <>
      <Header titulo={strings.fase_selecao.titulo} descricao={strings.fase_selecao.descricao}/>
      <ListaFilmesPage/>
      {/* <ResultadoPage/> */}
    </>
  );
}

export default App;
