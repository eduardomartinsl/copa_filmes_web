import React, { useState } from 'react'

import ListaFilmesPage from './pages/ListaFilmesPage'
import ResultadoPage from './pages/ResultadoPage'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")

  return (
    <Router>
      <Header titulo={titulo} descricao={descricao} />

      <Switch>
        <Route exact path="/">
          <ListaFilmesPage setTitulo={setTitulo} setDescricao={setDescricao} />
        </Route>
        <Route path={'/resultado'} >
          <ResultadoPage setTitulo={setTitulo} setDescricao={setDescricao} />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
