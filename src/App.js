import './App.css';
import MovieCell from './components/MovieCell'

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ justifyContent: 'space-between', display: 'flex', flex: 1, alignItems: 'center', margin: 8}}>
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

function Header() {
  return (
    <div className="header-style" >
      <h1>Campeonato de filmes</h1>
      <text>Fase de seleção</text>
      <br />
      <div style={{
        margin: '16px',
        width: '80%',
        height: 2,
        backgroundColor: '#ccc',
        alignSelf: 'center'
      }}
      />
      <text>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão gerar meu campeonato para prosseguir</text>
    </div>
  )
}

const filmes = [
  {
  "id": "tt3606756",
  "titulo": "Os Incríveis 2",
  "ano": 2018,
  "nota": 8.5
  },
  {
  "id": "tt4881806",
  "titulo": "Jurassic World: Reino Ameaçado",
  "ano": 2018,
  "nota": 6.7
  },
  {
  "id": "tt5164214",
  "titulo": "Oito Mulheres e um Segredo",
  "ano": 2018,
  "nota": 6.3
  },
  {
  "id": "tt7784604",
  "titulo": "Hereditário",
  "ano": 2018,
  "nota": 7.8
  },
  {
  "id": "tt4154756",
  "titulo": "Vingadores: Guerra Infinita",
  "ano": 2018,
  "nota": 8.8
  },
  {
  "id": "tt5463162",
  "titulo": "Deadpool 2",
  "ano": 2018,
  "nota": 8.1
  },
  {
  "id": "tt3778644",
  "titulo": "Han Solo: Uma História Star Wars",
  "ano": 2018,
  "nota": 7.2
  },
  {
  "id": "tt3501632",
  "titulo": "Thor: Ragnarok",
  "ano": 2017,
  "nota": 7.9
  },
  {
  "id": "tt2854926",
  "titulo": "Te Peguei!",
  "ano": 2018,
  "nota": 7.1
  },
  {
  "id": "tt0317705",
  "titulo": "Os Incríveis",
  "ano": 2004,
  "nota": 8.0
  },
  {
  "id": "tt3799232",
  "titulo": "A Barraca do Beijo",
  "ano": 2018,
  "nota": 6.4
  },
  {
  "id": "tt1365519",
  "titulo": "Tomb Raider: A Origem",
  "ano": 2018,
  "nota": 6.5
  },
  {
  "id": "tt1825683",
  "titulo": "Pantera Negra",
  "ano": 2018,
  "nota": 7.5
  },
  {
  "id": "tt5834262",
  "titulo": "Hotel Artemis",
  "ano": 2018,
  "nota": 6.3
  },
  {
  "id": "tt7690670",
  "titulo": "Superfly",
  "ano": 2018,
  "nota": 5.1
  },
  {
  "id": "tt6499752",
  "titulo": "Upgrade",
  "ano": 2018,
  "nota": 7.8
  }
]

export default App;
