let BASE_URL = 'https://meu_endereco_bonitinho/'
let FILMES_BASE_URL = 'http://copafilmes.azurewebsites.net/api/filmes'

const URLS ={
  //aqui vão os endpoints no seguinte modelo
  ENDPOINT: (parametro1, parametro2) => `${parametro1}&${parametro2}`,
  ENVIA_FILMES: (filmes) => `${filmes}`
}

export default URLS
export { BASE_URL, FILMES_BASE_URL }