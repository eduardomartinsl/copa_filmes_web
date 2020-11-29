let BASE_URL = 'https://localhost:5001/'
let FILMES_BASE_URL = 'http://copafilmes.azurewebsites.net/api/filmes'

const URLS ={
  //aqui vão os endpoints no seguinte modelo
  ENDPOINT: (parametro1, parametro2) => `${parametro1}&${parametro2}`,
  CALCULA_FILMES_VENCEDORES: () => "/FilmesVencedores"
}

export default URLS
export { BASE_URL, FILMES_BASE_URL }