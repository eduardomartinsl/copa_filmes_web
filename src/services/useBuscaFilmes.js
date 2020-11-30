import { useState } from 'react'

import { http } from '../resources/http'
import { FILMES_BASE_URL } from '../resources/urls'

export default function useBuscaFilmes() {

  const [listaFilmes, setListaFilmes] = useState([])

  useState(
    async () => {
      const url = FILMES_BASE_URL
      try {
        const { data } = await http.get(url)
        console.log(`Resultado da requisição: ${JSON.stringify(data)}`)
        setListaFilmes(data)
      } catch (e) {

      }
    },
    [listaFilmes]
  )

  return { listaFilmes }
}