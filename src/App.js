import React, {useState} from 'react'

import ListaFilmesPage from './pages/ListaFilmesPage'
import Header from './components/Header'

function App() {

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")

  return (
    <>
      <Header titulo={titulo} descricao={descricao}/>
      <ListaFilmesPage setTitulo={setTitulo} setDescricao={setDescricao} />
      {/* <ResultadoPage setTitulo={setTitulo} setDescricao={setDescricao}  /> */}
    </>
  );
}

export default App;
